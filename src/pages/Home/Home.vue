<template>
  <div id="Home">
    <counter @numberEventLisner="numberEventLisner" />
    <a-table
      :loading="tableOption.loading"
      :options="tableOption"
      :rowKey="(record) => record.no"
      :columns="tableColumns"
      :dataSource="mockList"
      :locale="{ emptyText: tableOption.emptyText }"
      :pagination="tableOption.pagination"
      @change="paginationChangedEventHandler"
    >
    </a-table>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
