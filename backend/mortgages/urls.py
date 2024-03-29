from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import MortgageProgramsView, BankViewSet, TargetCreditsViewSet, CRUDMortgageProgramsViewSet, \
    ShadowProgramsView, ShadowTargetCreditsViewSet, ShadowBankViewSet


router = DefaultRouter()
router.register('banks', BankViewSet, basename='banks')
router.register('target-credits', TargetCreditsViewSet, basename='target-credits')
# router.register('all', MortgageProgramsViewSet, basename='mortgage-program')
router.register('crud', CRUDMortgageProgramsViewSet, basename='mortgage-prog')

app_name = 'mortgages'
urlpatterns = [
    path('all/', MortgageProgramsView.as_view()),
#     # path('banks/', BanksView.as_view()),
#     # path('target-credits/', TargetCreditsView.as_view()),
    path('shadow/all/', ShadowProgramsView.as_view()),
    path('shadow/banks/', ShadowBankViewSet.as_view()),
    path('shadow/target-credits/', ShadowTargetCreditsViewSet.as_view()),
]

urlpatterns += router.urls
