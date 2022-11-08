<template>
  <main
    :class="[{'sidebarClose': sideBarisActive}, {'deviceSideMenu-open': deviceSideisActive}]" >
    <!-- HEADER -->
    <header>
      <header-top />
    </header>
    <!-- SIDE MENU -->  
    <side-bar />
    <!-- CONTENT -->   
    <div class="content-wrap">
      <content-title />
      <!-- 상태영역 -->
      <div class="statusArea-wrap">
        <status-data />
        <search-btnOption />  
      </div>
      <!-- 검색영역 -->
      <!-- <check-box
        :checkBoxList="checkBoxLists" 
        @toggle-checkbox="checkbox" /> -->

      <div class="pagekeyWord-wrap">
        <page-count />
        <search-filter
          :searchFilter="searchFilters" />
      </div>
      <div 
        v-if="searchIsActive"
        class="searchArea mt-3">
        <table summary="검색영역 입니다.">
          <caption class="hidden">검색영역</caption>
          <colgroup>
            <col width="7%">
            <col width="13%">
            <col width="8%">
            <col width="13%">
            <col width="7%">
            <col width="13%">
            <col width="8%">
            <col width="13%">
            <col width="7%">
            <col width="*">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">
                <v-checkbox
                  v-model="searchCheck"
                  value="운영사"
                  v-if="checkboxShow" />
                  <label for="">운영사</label>
              </th>
              <td>
                <v-select
                  :items="items"
                  class="selectBox"
                  label="전체"
                  dense
                  solo />
              </td>
              <th scope="row">
                <v-checkbox
                  v-model="searchCheck"
                  value="충전기구분"
                  v-if="checkboxShow" />
                  <label for="">충전기구분</label>
              </th>
              <td>
                <v-select
                  :items="items"
                  class="selectBox"
                  label="전체"
                  dense
                  solo />
              </td>
              <th scope="row">
                <v-checkbox
                  v-model="searchCheck"
                  value="권역"
                  label="권역" 
                  v-if="checkboxShow" />
              </th>
              <td>
                <v-select
                  :items="items"
                  class="selectBox"
                  label="전체"
                  dense
                  solo />
              </td>
              <th scope="row">
                <div style="display: flex; align-items: center">
                  <v-checkbox
                    v-model="searchCheck"
                    value="시군구"
                    v-if="checkboxShow"/> 시군구
                </div>
              </th>
              <td>
                <v-select
                  :items="items"
                  class="selectBox"
                  label="전체"
                  dense
                  solo
                ></v-select>
              </td>
              <th scope="row">
                <label for=""><input type="checkbox" class="checkbox" checked="checked" v-if="checkboxShow">운영여부</label>
              </th>
              <td>
                <v-select
                  :items="items"
                  class="selectBox"
                  label="전체"
                  dense
                  solo
                  multiple
                ></v-select>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <v-checkbox
                  v-modal="search"
                  label="충전소명"
                  checked="checked" />
              </th>
              <td>
                <v-select
                  :items="items"
                  class="selectBox"
                  label="전체"
                  dense
                  solo
                ></v-select>
              </td>
              <th scope="row">
                <label for=""><input type="checkbox" class="checkbox" checked="checked" v-if="checkboxShow">운영시작일</label>
              </th>
              <td>
                <date-picker />
              </td>
              <th scope="row">
                <label for=""><input type="checkbox" class="checkbox" checked="checked" v-if="checkboxShow">설치일</label>
              </th>
              <td>
                <date-picker />
              </td>
              <th scope="row">
                <label for=""><input type="checkbox" class="checkbox" checked="checked" v-if="checkboxShow">충전소ID</label>
              </th>
              <td>
                <input type="text" class="form-control" placeholder="충전소ID를 입력해 주세요.">
              </td>
              <th scope="row">
                <label for=""><input type="checkbox" checked="checked" v-if="checkboxShow">충전기ID</label>
              </th>
              <td>
                <input type="text" class="form-control" placeholder="충전기ID를 입력해 주세요.">
              </td>
            </tr>
            <tr>
              <th>Combobox</th>
              <td colspan="9">
                <v-combobox
                  v-model="model"
                  :items="items"
                  class="multiCombox"
                  label="선택해 주세요."
                  hide-selected
                  multiple
                  small-chips
                  solo >
                  <template v-slot:selection="{ item, parent}">
                    <v-chip
                      label
                    >
                      <span>
                        {{ item }}
                      </span>
                      <v-icon
                        small
                        @click="parent.selectItem(item)"
                      >
                        $delete
                      </v-icon>
                    </v-chip>
                  </template>
                </v-combobox>  
              </td>
            </tr>
          </tbody>
        </table>
        <btn-reset-search 
          v-if="searchOption" />
        <btn-download-search 
          v-else />
      </div>
      isActiveModal---{{ isActiveModal }}
      <!-- GRID -->
      <div class="grid-wrap">
        GRID 영역
      </div>
      <!--// GRID -->
    </div>
    <!--// CONTENT -->
    <footer>
      <footer-bottom/>
    </footer>
      <modal-mobile-search
        :items="items" />
  </main>
</template>

<script>
import HeaderTop from '@/components/HeaderTop'
import SideBar from '@/components/SideBar'
import FooterBottom from '@/components/FooterBottom'
import ContentTitle from '@/components/ContentTitle'
import StatusData from '@/components/StatusData'
import SearchBtnOption from '@/components/SearchBtnOption'
import CheckBox from '@/components/CheckBox'
import DatePicker from '@/components/DatePicker'
import PageCount from '@/components/PageCount'
import SearchFilter from '@/components/SearchFilter'
import BtnResetSearch from '@/components/BtnResetSearch'
import BtnDownloadSearch from '@/components/moSearch/BtnDownloadSearch.vue'
import ModalMobileSearch from '@/components/moSearch/ModalMobileSearch'

import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    HeaderTop,
    SideBar,
    FooterBottom,
    ContentTitle,
    StatusData,
    SearchBtnOption,
    CheckBox,
    DatePicker,
    PageCount,
    SearchFilter,
    BtnResetSearch,
    BtnDownloadSearch,
    ModalMobileSearch
  },
  props: {

  },
  data() {
    return {
      // checkBoxLists: [
      //   { id:1, label: "checkbox-1", checked:false}, 
      //   { id:2, label: "checkbox-2", checked:false}, 
      //   { id:3, label: "checkbox-3", checked:false}
      // ],
      searchCheck: ['운영사', '시군구'],
      searchFilters: [
        { filterTitle: '권경', filterText: '서울특별시'},
        { filterTitle: '충전소ID', filterText: 'SIG000003'},
        { filterTitle: '충전기구분', filterText: '완속'},
        { filterTitle: '운영시작일', filterText: '2022-10-22'}
      ],
      items: ['아이템-1', '아이템-2', '아이템-3'],

    }
  },
  computed: {
    ...mapState([
      'windowSize',
      'deviceSideisActive',
      'sideBarisActive',
      'searchIsActive',
      'searchOption',
      'checkboxShow',
    ])
  },
  created() {
  }, 
  mounted() {
    window.addEventListener('resize', () => {
      this.resize()
    })
    this.resize()
  },
  watch: {
  },
  methods: {

    // checkbox({id, checked}){
    //   console.log(id, checked)
    //   let index = this.checkBoxLists.findIndex( checkBoxList => {
    //     return checkBoxList === id
    //   })
    //   this.checkBoxLists[index].checked = checked
    // },

    ...mapMutations({
      resize : 'RESIZE'
    })
  }
}
</script>

<style scoped>

</style>