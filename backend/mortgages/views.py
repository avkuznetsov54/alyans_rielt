from django.db.models import Q

from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated, DjangoModelPermissions, DjangoObjectPermissions

from mortgages.permissions import IsMortgageEditorOrAuthenticatedReadOnly, IsShadow
from .models import MortgagePrograms, Banks, TargetCredits
from .serializers import MortgageProgramsSerializer, BanksSerializer, TargetCreditsSerializer, \
    ShadowMortgageProgSerializer, ShadowTargetCreditsSerializer, ShadowBanksSerializer

import re


class MortgagePagination(PageNumberPagination):
    page_size = 20


class MortgageProgramsView(generics.ListAPIView):
# class MortgageProgramsViewSet(ModelViewSet):
    serializer_class = MortgageProgramsSerializer
    queryset = MortgagePrograms.objects.all().select_related('programs_bank').prefetch_related('programs_target')
    pagination_class = MortgagePagination
    permission_classes = (IsAuthenticated, )
    # permission_classes = (IsMortgageEditorOrAuthenticatedReadOnly, )

    # # очищаем поле programs_target (many2many) перед тем как перезаписать
    # def update(self, request, *args, **kwargs):
    #     mort = self.get_object()
    #     mort.programs_target.clear()
    #     return super().update(request, *args, **kwargs)

    def filter_queryset(self, queryset):
        for k, v in self.request.query_params.items():
            params = []
            # params = {}
            # if k == "cursor":
            #     continue

            # если 'v' равно пустой строке то прекращаем итерацию что не занести её в queryset, а то 500 error
            if v == '':
                continue

            if k == 'bank_name':
                # k = 'programs_bank__bank_name' + '__in'
                v = v.split(',')
                # params.update({k: v})
                params.append(Q(programs_bank__bank_name__in=v))

            if k == 'preference_is_active':
                # k = 'programs_bank__preference_is_active'
                if v == 'true':
                    # params.update({k: True})
                    params.append(Q(programs_bank__preference_is_active=True) & Q(is_use_preference_bank=True))

            if k == 'names_target_credits':
                # k = 'programs_target__target_name' + '__in'
                v = v.split(',')
                # params.update({k: v})
                params.append(Q(programs_target__target_name__in=v))

            if k == 'sum_credit':
                v = re.sub("\D", "", v)
                # k1 = 'min_sum_credit' + '__lte'
                # params.update({k1: v})
                # k2 = 'max_sum_credit' + '__gte'
                # params.update({k2: v})
                params.append(Q(min_sum_credit__lte=v) & Q(max_sum_credit__gte=v))

            if k == 'rate':
                # k = k + '__lte'
                # params.update({k: v})
                params.append(Q(rate__lte=v))

            if k == 'is_rate_salary':
                # k1 = 'rate_salary' + '__gte'
                if v == 'yes':
                    v1 = 0
                    # params.update({k1: v1})
                    params.append(Q(rate_salary__gte=v1))

            if k == 'first_payment':
                k = k + '__lte'
                # params.update({k: v})
                params.append(Q(first_payment__lte=v))

            if k == 'borrower_age':
                # k1 = 'min_borrower_age' + '__lte'
                # params.update({k1: v})
                # k2 = 'max_borrower_age' + '__gte'
                # params.update({k2: v})
                params.append(Q(min_borrower_age__lte=v) & Q(max_borrower_age__gte=v))

            if k == 'time_credit':
                # k1 = 'min_time_credit' + '__lte'
                # params.update({k1: v})
                # k2 = 'max_time_credit' + '__gte'
                # params.update({k2: v})
                params.append(Q(min_time_credit__lte=v) & Q(max_time_credit__gte=v))

            if k == 'work_experience':
                # k = k + '__lte'
                # params.update({k: v})
                params.append(Q(work_experience__lte=v))

            if k == 'understatement_is_active':
                if v == 'true':
                    # params.update({k: True})
                    params.append(Q(understatement_is_active=True))

            if k == 'overstatement_is_active':
                if v == 'true':
                    # params.update({k: True})
                    params.append(Q(overstatement_is_active=True))

            if k == 'spouse_exclusion_is_active':
                if v == 'true':
                    # params.update({k: True})
                    params.append(Q(spouse_exclusion_is_active=True))

            if k == 'collateral_object_is_active':
                if v == 'true':
                    # params.update({k: True})
                    params.append(Q(collateral_object_is_active=True))

            if k == 'express_issue':
                # params.update({k: v})
                params.append(Q(express_issue=v))

            if k == 'redevelopment':
                # params.update({k: v})
                params.append(Q(redevelopment=v))

            if k == 'businesman':
                # params.update({k: v})
                params.append(Q(businesman=v))

            if k == 'non_resident':
                # params.update({k: v})
                params.append(Q(non_resident=v))

            if k == 'wetpoint_transfer':
                # params.update({k: v})
                params.append(Q(wetpoint_transfer=v))

            if k == 'inclusion_children':
                if v != 'null':
                    # params.update({k: v})
                    params.append(Q(inclusion_children=v))

            queryset = queryset.filter(*params)
            # queryset = queryset.filter(**params)
            # тоже самое что:
            # queryset = queryset.filter(model__icontains="asdf")

        return queryset.order_by('rate').distinct()
        # return queryset


class CRUDMortgageProgramsViewSet(ModelViewSet):
    serializer_class = MortgageProgramsSerializer
    queryset = MortgagePrograms.objects.all().select_related('programs_bank').prefetch_related('programs_target')
    # pagination_class = MortgagePagination
    # permission_classes = (IsAuthenticated, )
    permission_classes = (IsMortgageEditorOrAuthenticatedReadOnly, )

    # очищаем поле programs_target (many2many) перед тем как перезаписать
    def update(self, request, *args, **kwargs):
        mort = self.get_object()
        mort.programs_target.clear()
        return super().update(request, *args, **kwargs)


# class BanksView(generics.ListAPIView):
#     serializer_class = BanksSerializer
#     queryset = Banks.objects.all()
#     permission_classes = (IsAuthenticated,)


class BankViewSet(ModelViewSet):
    serializer_class = BanksSerializer
    queryset = Banks.objects.all()
    permission_classes = (IsMortgageEditorOrAuthenticatedReadOnly,)


# class TargetCreditsView(generics.ListAPIView):
#     serializer_class = TargetCreditsSerializer
#     queryset = TargetCredits.objects.all()
#     permission_classes = (IsAuthenticated,)


class TargetCreditsViewSet(ModelViewSet):
    serializer_class = TargetCreditsSerializer
    queryset = TargetCredits.objects.all()
    permission_classes = (IsMortgageEditorOrAuthenticatedReadOnly,)


class ShadowProgramsView(generics.ListAPIView):
    serializer_class = ShadowMortgageProgSerializer
    queryset = MortgagePrograms.objects.all().select_related('programs_bank').prefetch_related('programs_target')
    pagination_class = MortgagePagination
    permission_classes = (IsShadow, )


class ShadowBankViewSet(generics.ListAPIView):
    serializer_class = ShadowBanksSerializer
    queryset = Banks.objects.all()
    permission_classes = (IsShadow, )


class ShadowTargetCreditsViewSet(generics.ListAPIView):
    serializer_class = ShadowTargetCreditsSerializer
    queryset = TargetCredits.objects.all()
    permission_classes = (IsShadow, )
