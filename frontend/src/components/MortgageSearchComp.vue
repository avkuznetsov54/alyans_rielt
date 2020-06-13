<template>
  <div>
    <v-card>
      <v-card-text>
        <v-form
          v-on:submit.prevent="filterMortgages((pageDef = 1))"
          ref="form"
          lazy-validation
        >
          <!--      <v-form v-on:change="filterMortgages">-->
          <v-container fluid>
            <v-row>
              <!--              <v-btn outlined color="indigo">Outlined Button</v-btn>-->
            </v-row>
            <v-row>
              <v-col cols="12" md="3">
                <v-autocomplete
                  multiple
                  label="Банк"
                  placeholder="Любой"
                  :items="BANKS_NAME_DATA"
                  v-model="filters.bank_name"
                  dense
                  clearable
                >
                  <template v-slot:selection="{ item, index }">
                    <!--                  <span v-if="index === 0">-->
                    <!--                    <span>{{ item }} </span>-->
                    <!--                  </span>-->
                    <span v-if="index === 0" class="ml-1 grey--text caption"
                      >+ {{ filters.bank_name.length }} шт.</span
                    >
                  </template>
                </v-autocomplete>
              </v-col>
              <v-col cols="12" md="2">
                <v-select
                  multiple
                  label="Цель ипотеки"
                  placeholder="Любая"
                  :items="TARGET_CREDITS_NAME_DATA"
                  v-model="filters.names_target_credits"
                  dense
                  clearable
                >
                  <template v-slot:selection="{ item, index }">
                    <!--                  <span v-if="index === 0">-->
                    <!--                    <span>{{ item }} </span>-->
                    <!--                  </span>-->
                    <span v-if="index === 0" class="ml-1 grey--text caption"
                      >+ {{ filters.names_target_credits.length }} шт.</span
                    >
                  </template>
                </v-select>
              </v-col>

              <!--              <v-col cols="12" md="1">-->
              <!--&lt;!&ndash;                <v-btn fab x-small color="secondary"><v-icon>mdi-cached</v-icon></v-btn>&ndash;&gt;-->
              <!--                -->
              <!--              </v-col>-->

              <template v-if="!filterOnSumCredit">
                <v-col cols="12" md="3">
                  <div class="collom-flex">
                    <v-text-field
                      v-model="filters.property_value"
                      label="Стоимость недвиж., руб"
                      placeholder="Любая"
                      min="0"
                      dense
                    ></v-text-field>
                    <v-btn
                      icon
                      color="primary"
                      @click="changeFilterOnSumCredit"
                    >
                      <v-icon>mdi-cached</v-icon>
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="2">
                  <v-text-field
                    v-model="num_first_payment"
                    label="Первоначальный взнос, руб"
                    placeholder="Любой"
                    :rules="nfpRules"
                    min="0"
                    dense
                    :suffix="procent_first_payment"
                  ></v-text-field>
                </v-col>
              </template>
              <template v-else>
                <v-col cols="12" md="3">
                  <div class="collom-flex">
                    <v-text-field
                      v-model="filters.sum_credit"
                      label="Сумма кредита, руб"
                      placeholder="Любая"
                      min="0"
                      dense
                    ></v-text-field>

                    <v-btn
                      icon
                      color="primary"
                      @click="changeFilterOnSumCredit"
                    >
                      <v-icon>mdi-cached</v-icon>
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="2">
                  <v-text-field
                    v-model="num_first_payment"
                    label="Первоначальный взнос, руб"
                    placeholder="Любой"
                    :rules="nfpRules"
                    min="0"
                    dense
                    :suffix="procent_first_payment"
                  ></v-text-field>
                </v-col>
              </template>

              <v-col cols="12" md="2">
                <v-text-field
                  v-model="filters.time_credit"
                  type="number"
                  label="Срок, лет"
                  placeholder="Любой"
                  min="0"
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <template v-if="visibleSearch">
              <v-row>
                <v-col cols="12" md="2">
                  <v-text-field
                    v-model="filters.rate"
                    type="number"
                    label="Ставка"
                    placeholder="Любая"
                    suffix="%"
                    min="0"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                  <v-text-field
                    type="number"
                    v-model="filters.work_experience"
                    label="Стаж на последнем месте"
                    placeholder="Любой"
                    suffix="мес."
                    min="0"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                  <v-text-field
                    type="number"
                    v-model="filters.borrower_age"
                    label="Возрасть заёмщика"
                    placeholder="Любой"
                    suffix="лет"
                    min="0"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="2">
                  <v-checkbox
                    dense
                    v-model="filters.understatement_is_active"
                    label="Занижение"
                  ></v-checkbox>
                </v-col>

                <v-col cols="12" md="2">
                  <v-checkbox
                    dense
                    v-model="filters.overstatement_is_active"
                    label="Завышение"
                  ></v-checkbox>
                </v-col>

                <v-col cols="12" md="2">
                  <v-checkbox
                    dense
                    v-model="filters.collateral_object_is_active"
                    label="Залоговый объект"
                  ></v-checkbox>
                </v-col>

                <v-col cols="12" md="2">
                  <v-checkbox
                    dense
                    v-model="filters.wetpoint_transfer"
                    value="yes"
                    label="Перенос мокрой точки"
                  ></v-checkbox>
                </v-col>

                <v-col cols="12" md="4">
                  <v-checkbox
                    dense
                    v-model="filters.spouse_exclusion_is_active"
                    label="Исключение супруги(а) согласием"
                  ></v-checkbox>
                </v-col>

                <v-col cols="12" md="2">
                  <v-checkbox
                    dense
                    v-model="filters.express_issue"
                    value="yes"
                    label="Экспресс выдача"
                  ></v-checkbox>
                </v-col>

                <v-col cols="12" md="4">
                  <v-checkbox
                    dense
                    v-model="filters.inclusion_children"
                    value="yes"
                    label="Включение детей в число собственников"
                  ></v-checkbox>
                </v-col>

                <v-col cols="12" md="2">
                  <v-checkbox
                    dense
                    v-model="filters.is_rate_salary"
                    value="yes"
                    label="Программы для зарплатников"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </template>
            <v-row>
              <v-spacer></v-spacer>
              <v-col cols="12" sm="6" md="3" class="is-search-text">
                <div class="subtitle-1">
                  <span>
                    Найдено программ: {{ GET_MORTGAGES_DATA_COUNT }}
                  </span>
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <div class="float-right">
                  <v-btn color="primary" class="mx-1" type="submit" width="100"
                    >Найти
                  </v-btn>
                  <v-btn color="primary" class="mx-1" @click="clearFilter()"
                    ><v-icon>mdi-broom</v-icon>
                  </v-btn>
                  <v-btn color="primary" class="mx-1" @click="toggleSearch"
                    ><v-icon>
                      {{
                        visibleSearch ? "mdi-chevron-up" : "mdi-chevron-down"
                      }}
                    </v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>

    <v-spacer class="my-4"></v-spacer>

    <div class="text-center d-flex pb-4 float-right">
      <v-btn v-if="showFullMortgage" color="blue-grey lighten-5" @click="all"
        >Развернуть</v-btn
      >
      <!--      <div>{{ panel }}</div>-->
      <v-btn v-else @click="none">Свернуть</v-btn>
    </div>

    <template v-if="progressСircular">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <div class="text-center">
              <v-progress-circular
                :size="50"
                color="primary"
                indeterminate
              ></v-progress-circular>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template v-else>
      <v-expansion-panels v-model="panel" multiple>
        <v-expansion-panel
          class="no-transition"
          v-for="(mort, i) in MORTGAGES_DATA"
          :key="i"
        >
          <template v-if="mort.is_visible">
            <v-expansion-panel-header class="py-0">
              <v-container class="py-0" fill-height fluid>
                <v-row align="center">
                  <v-col cols="12" sm="3" md="2" lg="2">
                    <div>
                      <v-img
                        :src="mort.bank.bank_logo"
                        max-width="120"
                        max-height="50"
                        contain
                      ></v-img>
                    </div>
                    <div v-if="mort.bank.preference_is_active">
                      <v-chip
                        small
                        color="cyan"
                        text-color="white"
                        class="mt-1"
                      >
                        <span
                          >Преференция
                          <b>{{ mort.bank.preference_value }}%</b></span
                        >
                      </v-chip>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="9" md="3" lg="2">
                    <div class="mt-2">
                      <span class="grey--text text--darken-1 body-2"
                        >«{{ mort.bank.bank_name }}»
                      </span>
                    </div>
                    <div>
                      <span class="grey--text text--darken-3 body-2"
                        >«{{ mort.programs_name }}»
                      </span>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="3" md="2" lg="2">
                    <div>
                      <span
                        class="grey--text text--darken-3 headline font-weight-black"
                        >{{ mort.rate }}%
                      </span>
                      <span class="text--secondary nowrap"
                        >{{ mort.first_payment }}% ПВ
                      </span>
                    </div>
                    <div class="mt-1" v-if="mort.rate_salary">
                      <v-chip
                        small
                        color="grey lighten-4"
                        text-color="grey darken-1"
                      >
                        <span
                          ><b>{{ mort.rate_salary }}%</b> зарплатникам</span
                        >
                      </v-chip>
                    </div>
                    <div></div>
                  </v-col>
                  <v-col cols="12" sm="4" md="3" lg="3" class="text--secondary">
                    <div>
                      <span
                        class="grey--text text--darken-3 subtitle-1 font-weight-black"
                        >{{ mort.min_sum_credit | numCredit }} -
                        {{ mort.max_sum_credit | numCredit | toRUB }}
                      </span>
                    </div>
                    <div>
                      <span class="text--secondary caption"
                        >На срок от {{ mort.min_time_credit }} до
                        {{ mort.max_time_credit }} лет
                      </span>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="3" md="2" lg="3" class="text--secondary">
                    <div>
                      <span class="text--secondary caption"
                        >Возраст от {{ mort.min_borrower_age }} до
                        {{ mort.max_borrower_age }} лет
                      </span>
                    </div>
                    <div>
                      <span class="text--secondary caption"
                        >Стаж от {{ mort.work_experience }} месяцев
                      </span>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-divider></v-divider>

              <div class="py-0" fill-height fluid>
                <v-row align="start" justify="center" no-gutters>
                  <v-col cols="12" sm="6" md="3" lg="3" align="left">
                    <v-list-item>
                      <v-list-item-content class="grey--text text--darken-1">
                        <!--                    <v-list-item-title-->
                        <!--                      class="mb-3 body-1 font-weight-bold grey&#45;&#45;text text&#45;&#45;darken-3"-->
                        <!--                      >Условия ипотеки-->
                        <!--                    </v-list-item-title>-->
                        <span class="caption">
                          <span class="font-weight-black before-span-text"
                            >Цель:</span
                          >

                          <span
                            v-for="(item, index) in mort.targets"
                            :key="index"
                          >
                            {{ item.target_name
                            }}{{ mort.targets.length !== index + 1 ? "," : "" }}
                          </span>
                        </span>
                        <!--                    <span class="caption"-->
                        <!--                      >Программа: «{{ mort.programs_name }}»-->
                        <!--                    </span>-->
                        <!--                    <span class="caption"-->
                        <!--                      >Первоначальный взнос: {{ mort.first_payment }}%-->
                        <!--                    </span>-->
                        <!--                    <span class="caption">Ставка: {{ mort.rate }}% </span>-->
                        <!--                    <span class="caption"-->
                        <!--                      >Ставка для зарплатников:-->
                        <!--                      {{-->
                        <!--                        !mort.rate_salary ? "-" : mort.rate_salary + "%"-->
                        <!--                      }}</span-->
                        <!--                    >-->
                        <!--                    <span class="caption"-->
                        <!--                      >Сумма: {{ mort.min_sum_credit | numCredit | toRUB }} - -->
                        <!--                      {{ mort.max_sum_credit | numCredit | toRUB }}-->
                        <!--                    </span>-->
                        <!--                    <span class="caption"-->
                        <!--                      >Срок: от {{ mort.min_time_credit }} до-->
                        <!--                      {{ mort.max_time_credit }} лет-->
                        <!--                    </span>-->
                        <span class="caption">
                          <span class="font-weight-black before-span-text"
                            >Занижение:</span
                          >

                          {{ mort.understatement_is_active ? "Да" : "Нет"
                          }}{{
                            mort.understatement_comment
                              ? ", " + mort.understatement_comment
                              : ""
                          }}
                        </span>

                        <span class="caption">
                          <span class="font-weight-black before-span-text"
                            >Завышение:</span
                          >

                          {{ mort.overstatement_is_active ? "Да" : "Нет"
                          }}{{
                            mort.overstatement_comment
                              ? ", " + mort.overstatement_comment
                              : ""
                          }}
                        </span>

                        <span class="caption">
                          <span class="font-weight-black before-span-text"
                            >Исключение супруги(а) согласием:</span
                          >

                          {{ mort.spouse_exclusion_is_active ? "Да" : "Нет"
                          }}{{
                            mort.spouse_exclusion_comment
                              ? ", " + mort.spouse_exclusion_comment
                              : ""
                          }}
                        </span>

                        <span class="caption">
                          <span class="font-weight-black before-span-text"
                            >Созаёмщики:</span
                          >

                          {{ mort.co_borrowers }}
                        </span>
                        <span class="caption">
                          <span class="font-weight-black before-span-text"
                            >Комиссия:
                          </span>

                          {{ mort.commission }}
                        </span>
                        <span class="caption">
                          <span class="font-weight-black before-span-text"
                            >Регистрация продавца:</span
                          >

                          {{ mort.seller_registration }}
                        </span>
                        <span class="caption">
                          <span class="font-weight-black before-span-text"
                            >Экспресс выдача:</span
                          >

                          {{
                            mort.express_issue == "yes"
                              ? "Да"
                              : mort.express_issue == "no"
                              ? "Нет"
                              : ""
                          }}
                        </span>
                        <span class="caption">
                          <span class="font-weight-black before-span-text"
                            >Включение детей в число собственников:</span
                          >

                          {{
                            mort.inclusion_children == "yes"
                              ? "Да"
                              : mort.inclusion_children == "no"
                              ? "Нет"
                              : ""
                          }}
                        </span>
                        <span class="caption">
                          <span class="font-weight-black before-span-text"
                            >Стаж на последнем месте от:</span
                          >

                          {{ mort.work_experience }} месяцев
                        </span>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                  <v-col cols="12" sm="6" md="3" lg="3" align="left">
                    <v-list-item>
                      <v-list-item-content
                        class="caption grey--text text--darken-1"
                      >
                        <!--                    <v-list-item-title-->
                        <!--                      class="mb-3 body-1 font-weight-bold grey&#45;&#45;text text&#45;&#45;darken-3"-->
                        <!--                      >Условия ипотеки-->
                        <!--                    </v-list-item-title>-->

                        <span class="caption">
                          <span class="font-weight-black before-span-text"
                            >Залоговый объект:</span
                          >

                          {{ mort.collateral_object_is_active ? "Да" : "Нет"
                          }}{{
                            mort.collateral_object_comment
                              ? ", " + mort.collateral_object_comment
                              : ""
                          }}
                        </span>

                        <span class="caption">
                          <span class="font-weight-black before-span-text"
                            >Комната:</span
                          >
                          {{
                            mort.room == "yes"
                              ? "Да"
                              : mort.room == "no"
                              ? "Нет"
                              : ""
                          }}{{
                            mort.room_comment ? ", " + mort.room_comment : ""
                          }}
                        </span>
                        <span class="caption">
                          <span class="font-weight-black before-span-text"
                            >Доля:</span
                          >
                          {{
                            mort.share == "yes"
                              ? "Да"
                              : mort.share == "no"
                              ? "Нет"
                              : ""
                          }}{{
                            mort.share_comment ? ", " + mort.share_comment : ""
                          }}
                        </span>
                        <span class="caption">
                          <span class="font-weight-black before-span-text"
                            >Частный дом:</span
                          >
                          {{
                            mort.private_house == "yes"
                              ? "Да"
                              : mort.private_house == "no"
                              ? "Нет"
                              : ""
                          }}{{
                            mort.private_comment
                              ? ", " + mort.private_comment
                              : ""
                          }}
                        </span>
                        <span class="caption">
                          <span class="font-weight-black before-span-text"
                            >Апартаменты:</span
                          >
                          {{
                            mort.apartments == "yes"
                              ? "Да"
                              : mort.apartments == "no"
                              ? "Нет"
                              : ""
                          }}{{
                            mort.apartments_comment
                              ? ", " + mort.apartments_comment
                              : ""
                          }}
                        </span>

                        <span class="caption">
                          <span class="font-weight-black before-span-text"
                            >Перепланировка:</span
                          >
                          {{
                            mort.redevelopment == "yes"
                              ? "Да"
                              : mort.redevelopment == "no"
                              ? "Нет"
                              : ""
                          }}{{
                            mort.redevelopment_comment
                              ? ", " + mort.redevelopment_comment
                              : ""
                          }}
                        </span>

                        <span class="caption">
                          <span class="font-weight-black before-span-text"
                            >Перенос мокрой точки:</span
                          >
                          {{
                            mort.wetpoint_transfer == "yes"
                              ? "Да"
                              : mort.wetpoint_transfer == "no"
                              ? "Нет"
                              : ""
                          }}{{
                            mort.wetpoint_transfer_comment
                              ? ", " + mort.wetpoint_transfer_comment
                              : ""
                          }}
                        </span>

                        <p class="caption mb-1">
                          <span class="font-weight-black before-span-text"
                            >Перекрытия:</span
                          >
                          {{ mort.overlap }}
                        </p>
                        <p class="caption mb-1">
                          <span class="font-weight-black before-span-text"
                            >Этажность:</span
                          >
                          {{ mort.storeys }}
                        </p>
                        <p class="caption mb-1">
                          <span class="font-weight-black before-span-text"
                            >Износ жилья:</span
                          >
                          {{ mort.housing_wear }}
                        </p>
                        <p class="caption mb-1">
                          <span class="font-weight-black before-span-text"
                            >Технические документы:</span
                          >
                          {{ mort.req_tech_docs }}
                        </p>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                  <v-col cols="12" sm="6" md="3" lg="3" align="left">
                    <v-list-item>
                      <v-list-item-content class="grey--text text--darken-1">
                        <!--                        <template v-if="monthlyPayment(mort)">-->
                        <!--                          <div>-->
                        <!--                            {{ monthlyPayment(mort) | numCredit | toRUB }}/мес.-->
                        <!--                          </div>-->
                        <!--                        </template>-->

                        <span class="caption">
                          <span class="font-weight-black before-span-text"
                            >Время на решение банка:</span
                          >
                          {{ mort.time_for_bank_decision }}
                        </span>

                        <p class="caption mb-1">
                          <span class="font-weight-black before-span-text"
                            >Обязательные документы:</span
                          >
                          {{ mort.mandatory_documents }}
                        </p>
                        <p class="caption mb-1">
                          <span class="font-weight-black before-span-text"
                            >Документ подтверждение дохода:</span
                          >
                          {{ mort.proof_of_income_document }}
                        </p>
                        <div class="caption mb-1 pre-formatted">
                          <div class="font-weight-black before-span-text">
                            Дополнительная информация:
                          </div>
                          {{ mort.add_info }}
                        </div>

                        <template v-if="mort.bank.link_docs">
                          <v-btn
                            small
                            :href="mort.bank.link_docs"
                            target="_blank"
                            class="mt-3"
                            outlined
                            color="grey"
                            >Ссылка на документы
                          </v-btn>
                        </template>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                  <v-col cols="12" sm="6" md="3" lg="3" align="left">
                    <v-list-item>
                      <v-list-item-content class="grey--text text--darken-1">
                        <div class="caption mb-1 pre-formatted">
                          <div class="font-weight-black before-span-text">
                            Контакты:
                          </div>
                          {{ mort.bank.contacts }}
                        </div>

                        <template v-if="monthlyPayment(mort)">
                          <v-alert text color="grey lighten-1" class="mt-3">
                          <div class="mt-3">
                            <div
                              v-for="(pay, k, i) in monthlyPayment(mort)"
                              :key="i"
                            >
                              <template v-if="k === 'monthly_pay'">
                                <span class="body-2 grey--text text--darken-2">Ежемесячный платеж</span>
                                <p
                                  class="grey--text text--darken-2 headline font-weight-black subtitle-1 mb-1"
                                >
                                  {{ pay | numCredit | toRUB }}/мес.
                                </p>
                              </template>
                              <template
                                v-if="k === 'preference_pay' && pay !== 'NaN'"
                              >
                                <span class="body-2 grey--text text--darken-2">С преференцией</span>
                                <p
                                  class="grey--text text--darken-2 headline font-weight-black subtitle-1 mb-1"
                                >
                                  {{ pay | numCredit | toRUB }}/мес.
                                </p>
                              </template>
                              <template
                                v-if="k === 'salary_pay' && pay !== 'NaN'"
                              >
                                <span class="body-2 grey--text text--darken-2">Для зарплатников</span>
                                <p
                                  class="grey--text text--darken-2 headline font-weight-black subtitle-1 mb-1"
                                >
                                  {{ pay | numCredit | toRUB }}/мес.
                                </p>
                              </template>
                            </div>
                          </div>
                          </v-alert>
                        </template>
                        <template v-else>
                          <v-alert text color="grey lighten-1" class="mt-3">
                            <v-list-item-content>
                              <p class="body-2 ">
                                Для расчёта ежемесечного платежа введите:
                              </p>
                              <p class="caption mb-1">
                                - Стоимость недвижимости / сумма кредита
                              </p>
                              <p class="caption mb-1">- Первоначальный взнос</p>
                              <p class="caption mb-1">- Срок</p>
                            </v-list-item-content>
                          </v-alert>
                        </template>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </div>
            </v-expansion-panel-content>
          </template>
        </v-expansion-panel>
      </v-expansion-panels>
      <div class="text-center mt-5">
        <v-pagination
          v-model="page"
          :length="lenPag"
          @input="onPageChange"
        ></v-pagination>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "MortgageSearchComp",

  data() {
    return {
      pageDefaoult: "1",
      page: 1,
      // lengthPag: 5,
      progressСircular: false,
      url: "api/v1/mortgages/all/",
      filters: {},
      selectTargets: ["Foo", "Bar", "Fizz", "Buzz"],
      panel: [],
      showFullMortgage: true,
      visibleSearch: false,
      num_first_payment: "",
      procent_first_payment: "",
      progMonthlyPayment: "",
      nfpRules: [],
      filterOnSumCredit: false
    };
  },
  computed: {
    ...mapState("mortgages", [
      "MORTGAGES_DATA",
      "BANKS_NAME_DATA",
      "TARGET_CREDITS_NAME_DATA",
      "MORTGAGES_DATA_COUNT"
    ]),
    ...mapGetters("mortgages", ["GET_MORTGAGES_DATA_COUNT"]),
    lenPag() {
      return Math.ceil(this.GET_MORTGAGES_DATA_COUNT / 20);
    }
  },
  methods: {
    ...mapMutations("mortgages", [
      "SET_UPDATE_MORTGAGES_DATA",
      "SET_UPDATE_BANKS_NAME_DATA",
      "SET_UPDATE_TARGET_CREDITS_NAME_DATA"
    ]),
    ...mapActions("mortgages", [
      "FETCH_MORTGAGES",
      "FETCH_BANKS",
      "FETCH_TARGET_CREDITS"
    ]),
    toggleSearch() {
      this.visibleSearch = !this.visibleSearch;
    },

    // Create an array the length of our items
    // with all values as true
    all() {
      this.panel = [...Array(this.MORTGAGES_DATA.length).keys()].map(
        (k, i) => i
      );
      this.showFullMortgage = !this.showFullMortgage;
    },
    // Reset the panel
    none() {
      this.panel = [];
      this.showFullMortgage = !this.showFullMortgage;
    },
    clearFilter() {
      this.$refs.form.resetValidation();
      this.page = 1;
      this.filters = [];
      this.num_first_payment = "";
      this.procent_first_payment = "";
      this.progressСircular = true;
      this.FETCH_MORTGAGES()
        .then(() => {
          this.progressСircular = false;
        })
        .catch(() => {
          this.progressСircular = false;
        });
      return this.filters;
    },
    filterMortgages(pageDef) {
      // сдесь проверяем если в поле "стоимость недвижимости" что-то внесли, то и
      // "первоночальный взнос" необходимо заполнить
      if (this.filters.property_value && !this.filters.first_payment) {
        this.nfpRules.push(v => !!v || "Не должно быть пустым.");
        this.$refs.form.validate();
        // this.errorMessages = "Не должно быть пустым.";
        return false;
      } else if (this.filters.property_value && this.filters.first_payment) {
        const pv = Number(this.filters.property_value.replace(/\s+/g, ""));
        const fp = Number(this.num_first_payment.replace(/\s+/g, ""));
        // console.log(pv, fp);
        this.filters["sum_credit"] = pv - fp;
        // console.log(this.filters["sum_credit"]);
      }

      // console.log(this.filters);
      const params = new URLSearchParams();

      for (let item in this.filters) {
        if (this.filters[item] !== "" && this.filters[item] !== null) {
          params.append(item, this.filters[item]);
        }
        // console.log(this.filters[item]);
      }

      params.append("page", pageDef);
      // console.log(page);
      this.page = pageDef;
      // this.fetchMortgages(this.url, params);
      this.progressСircular = true;
      this.FETCH_MORTGAGES(params)
        .then(() => {
          this.progressСircular = false;
        })
        .catch(() => {
          this.progressСircular = false;
        });
      // console.log(this.BANKS_DATA);
      if (!this.showFullMortgage) {
        this.none();
      }
    },
    funcMontPay(sw, rate, pref = 0) {
      if (sw === 0) {
        let monthly_procent = (rate - pref) / 100 / 12;
        let tmp = Math.pow(1 + monthly_procent, this.filters.time_credit * 12);
        let monthlyPay =
          (Number(this.filters.property_value.replace(/\s+/g, "")) -
            Number(this.num_first_payment.replace(/\s+/g, ""))) *
          monthly_procent *
          (tmp / (tmp - 1));

        // console.log(monthlyPay);
        return monthlyPay;
      } else if (sw === 1) {
        let monthly_procent = (rate - pref) / 100 / 12;
        let tmp = Math.pow(1 + monthly_procent, this.filters.time_credit * 12);
        let monthlyPay =
          Number(this.filters.sum_credit.replace(/\s+/g, "")) *
          monthly_procent *
          (tmp / (tmp - 1));

        // console.log(monthlyPay);
        return monthlyPay;
      }
    },
    monthlyPayment(mort) {
      //
      // console.log(mort);
      // https://mortgage-calculator.ru/%D1%84%D0%BE%D1%80%D0%BC%D1%83%D0%BB%D0%B0-%D1%80%D0%B0%D1%81%D1%87%D0%B5%D1%82%D0%B0-%D0%B8%D0%BF%D0%BE%D1%82%D0%B5%D0%BA%D0%B8
      //

      if (!this.filterOnSumCredit) {
        // Расчитываем monthlyPay когда фильтр property_value включен
        if (
          // проверка на "!== undefined" должна стоять выше чем ".replace", а то будет ошибка !!!
          this.filters.property_value !== undefined &&
          this.filters.time_credit !== undefined &&
          this.num_first_payment !== "" &&
          this.filters.property_value !== "" &&
          this.filters.time_credit !== "" &&
          Number(this.num_first_payment.replace(/\s+/g, "")) <=
            Number(this.filters.property_value.replace(/\s+/g, "")) &&
          this.filters.first_payment >= mort.first_payment &&
          Number(this.filters.property_value.replace(/\s+/g, "")) -
            Number(this.num_first_payment.replace(/\s+/g, "")) >=
            mort.min_sum_credit &&
          Number(this.filters.property_value.replace(/\s+/g, "")) -
            Number(this.num_first_payment.replace(/\s+/g, "")) <=
            mort.max_sum_credit &&
          this.filters.time_credit >= mort.min_time_credit &&
          this.filters.time_credit <= mort.max_time_credit
        ) {
          let data = new Object();
          // 0 - property_value, 1 -sum_credit
          data["monthly_pay"] = this.funcMontPay(0, mort.rate).toFixed(2);
          if (mort.bank.preference_value !== null) {
            data["preference_pay"] = this.funcMontPay(
              0,
              mort.rate,
              mort.bank.preference_value
            ).toFixed(2);
          }
          data["salary_pay"] = this.funcMontPay(0, mort.rate_salary).toFixed(2);
          // console.log(data);
          return data;
          // return monthlyPay.toFixed(2);
        } else if (
          this.num_first_payment === "" ||
          this.filters.property_value === ""
        ) {
          return false;
        }

        // Расчитываем monthlyPay когда фильтр sum_credit включен
      } else if (this.filterOnSumCredit) {
        if (
          this.filters.sum_credit !== undefined &&
          this.filters.time_credit !== undefined &&
          this.num_first_payment !== "" &&
          this.filters.sum_credit !== "" &&
          this.filters.time_credit !== "" &&
          Number(this.num_first_payment.replace(/\s+/g, "")) <=
            Number(this.filters.sum_credit.replace(/\s+/g, "")) &&
          this.filters.first_payment >= mort.first_payment &&
          Number(this.filters.sum_credit.replace(/\s+/g, "")) >=
            mort.min_sum_credit &&
          Number(this.filters.sum_credit.replace(/\s+/g, "")) <=
            mort.max_sum_credit &&
          this.filters.time_credit >= mort.min_time_credit &&
          this.filters.time_credit <= mort.max_time_credit
        ) {
          let data = new Object();
          // 0 - property_value, 1 -sum_credit
          data["monthly_pay"] = this.funcMontPay(1, mort.rate).toFixed(2);
          if (mort.bank.preference_value !== null) {
            data["preference_pay"] = this.funcMontPay(
              1,
              mort.rate,
              mort.bank.preference_value
            ).toFixed(2);
          }
          data["salary_pay"] = this.funcMontPay(1, mort.rate_salary).toFixed(2);
          // console.log(data);
          return data;
        } else if (
          this.num_first_payment === "" ||
          this.filters.sum_credit === ""
        ) {
          return false;
        }
      }
    },
    thousandSeparator(newValue) {
      let v = newValue.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      // console.log("thousandSeparator => " + v);
      return v;
    },
    watchValue() {
      // console.log(this.filters.property_value);
      if (
        this.filters.property_value !== undefined &&
        this.num_first_payment !== ""
      ) {
        this.filters.first_payment = Math.floor(
          (Number(this.num_first_payment.replace(/\s+/g, "")) * 100) /
            Number(this.filters.property_value.replace(/\s+/g, ""))
        );
        let pr =
          (Number(this.num_first_payment.replace(/\s+/g, "")) * 100) /
          Number(this.filters.property_value.replace(/\s+/g, ""));
        if (pr >= 0 && pr <= 100) {
          this.procent_first_payment = pr.toFixed(2) + "%";
        } else {
          this.procent_first_payment = "";
        }
      } else if (
        this.filters.sum_credit !== undefined &&
        this.num_first_payment !== ""
      ) {
        // console.log("33333");
        this.filters.first_payment = Math.floor(
          (Number(this.num_first_payment.replace(/\s+/g, "")) * 100) /
            (Number(this.filters.sum_credit.replace(/\s+/g, "")) +
              Number(this.num_first_payment.replace(/\s+/g, "")))
        );
        let pr =
          (Number(this.num_first_payment.replace(/\s+/g, "")) * 100) /
          (Number(this.filters.sum_credit.replace(/\s+/g, "")) +
            Number(this.num_first_payment.replace(/\s+/g, "")));
        if (pr >= 0 && pr <= 50) {
          this.procent_first_payment = pr.toFixed(2) + "%";
        } else {
          this.procent_first_payment = "";
        }
      } else {
        this.procent_first_payment = "";
        // console.log("watchValue => ");
      }
    },
    onPageChange(page) {
      // this.page = page;
      this.filterMortgages(page);
    },
    changeFilterOnSumCredit() {
      this.filterOnSumCredit = !this.filterOnSumCredit;
      delete this.filters.property_value;
      delete this.filters.sum_credit;
      delete this.filters.first_payment;
      this.procent_first_payment = "";
      this.num_first_payment = "";
      this.nfpRules = [];
    }
  },
  created() {
    this.FETCH_MORTGAGES()
      .then(() => {
        this.FETCH_BANKS();
        this.FETCH_TARGET_CREDITS();
      })
      .catch(() => {
        this.$store.dispatch("refreshToken").then(() => {
          this.FETCH_MORTGAGES().then(() => {
            this.FETCH_BANKS();
            this.FETCH_TARGET_CREDITS();
          });
        });
      });
  },
  mounted() {
    // console.log(this.MORTGAGES_DATA);
  },
  filters: {
    numCredit(value) {
      return new Intl.NumberFormat().format(value);
    },
    toRUB(value) {
      return `${value.toLocaleString()} ₽`;
    },
    toEnter(value) {
      return value.replace(/\n/g, "<br/>");
    }
  },
  watch: {
    "filters.property_value": {
      handler: function(newValue) {
        if (newValue === "" || newValue === undefined) {
          this.filters.first_payment = "";
          this.procent_first_payment = "";
          this.nfpRules = [];
          return true;
        }
        this.filters.property_value = this.thousandSeparator(newValue);
        this.watchValue();
      },
      deep: true
    },
    num_first_payment: function(newValue) {
      if (newValue === "" || newValue === undefined) {
        this.filters.first_payment = "";
        this.procent_first_payment = "";
        this.nfpRules = [];
        return true;
      }
      this.num_first_payment = this.thousandSeparator(newValue);
      // console.log("watch => " + this.num_first_payment);
      // console.log(Number(this.filters.property_value));
      this.watchValue();
    },
    // "filters.time_credit": {
    //   // eslint-disable-next-line no-unused-vars
    //   handler: function(v) {
    //     // console.log(v);
    //     this.filterMortgages();
    //     // return this.clearAlertBox();
    //   },
    //   deep: true
    // }
    "filters.sum_credit": {
      handler: function(newValue) {
        if (this.filterOnSumCredit) {
          // console.log(newValue);
          if (newValue === "" || newValue === undefined) {
            this.filters.first_payment = "";
            this.procent_first_payment = "";
            this.nfpRules = [];
            return true;
          }
          this.filters.sum_credit = this.thousandSeparator(newValue);
          this.watchValue();
        }
      },
      deep: true
    }
  }
};
</script>

<style scoped>
/* Убираем анимацию у v-expansion-panel (ТОРМОЗИТ сильно!)*/
.no-transition {
  transition: none !important;
}
.v-item-group,
.v-expansion-panel-header,
.v-expansion-panel::before,
.v-expansion-panel-header:before,
.expand-transition-leave-active,
.expand-transition-enter-active {
  transition: none !important;
}
.nowrap {
  white-space: nowrap;
}
.is-search-text {
  display: flex;
  justify-content: center;
  align-items: center;
}
.before-span-text:before {
  position: absolute;
  content: "";
  background: #757575;
  border-radius: 10px;
  width: 5px;
  height: 5px;
  left: 6px;
  margin-top: 7px;
}
.v-application .ml-1 {
  margin-left: 4px !important;
  margin-right: 4px;
  background-color: #efefef;
  padding: 0 4px;
}
.collom-flex {
  display: flex;
}
.pre-formatted {
  white-space: pre-line;
}
.v-alert {
  padding: 0 14px;
}
</style>
