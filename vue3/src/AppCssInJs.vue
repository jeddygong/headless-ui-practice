<template>
  <Listbox v-model="selectedRegion">
    <ListboxButton :style="boxButton">
      {{ selectedRegion?.name || '请选择' }}

      <i :style="boxButtonIcon"></i>
    </ListboxButton>
    <ListboxOptions class="list">
      <ListboxOption
        v-for="item in regions"
        :key="item.id"
        :value="item"
        :disabled="item.unavailable"
        as="template"
        v-slot="{ active, selected }"
      >
        <li
          :class="{
            'bg-[#f7f8fa] text-[#006aff]': active,
            'bg-white text-[#333333]': !active,
          }"
          class="list-item"
        >
          {{ item.name }}
        </li>
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>

<script setup>
  import { ref } from 'vue'
  import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from '@headlessui/vue'

  const regions = [
    { id: 1, name: '北京', unavailable: false },
    { id: 2, name: '上海', unavailable: false },
    { id: 3, name: '广州', unavailable: false },
    { id: 4, name: '深圳', unavailable: false },
    { id: 5, name: '香港', unavailable: false },
    { id: 5, name: '澳门', unavailable: false },
  ]
  const selectedRegion = ref()

  const boxButton = reactive({
    width: '230px',
    height: '44px',
    color: '#999',
    fontSize: '16px',
    outline: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '0 20px',
    borderRadius: '4px',
    border: '1px solid #e6e6e6',
  
  })

  const boxButtonIcon = reactive({
    display: 'block',
    width: '16px',
    height: '16px',
    background: 'url(~/assets/pull.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  })

  const list = reactive({
    width: '230px',
    fontSize: '16px',
    textAlign: 'left',
    backgroundColor: '#fff',
    borderRadius: '4px',
    border: '1px solid #e6e6e6',
    boxShadow: '0 3px 16px 2px #e6e6e6',
  })

  const listItem = reactive({
    height: '44px',
    lineHeight: '44px',
    paddingLeft: '20px',
    cursor: 'pointer',
  })
</script>

<style scoped>

.box-button {
  width: 230px;
  height: 44px;
  color: #999;
  font-size: 16px;
  outline: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: #fff;
  padding: 0 20px;
  border-radius: 4px;
  border: 1px solid #e6e6e6;
}

.box-button-icon {
  display: block;
  width: 16px;
  height: 16px;
  background: url(~/assets/pull.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.list {
  width: 230px;
  font-size: 16px;
  text-align: left;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  box-shadow: 0 3px 16px 2px #e6e6e6;
}

.list-item {
  height: 44px;
  line-height: 44px;
  padding-left: 20px;
  cursor: pointer;
}
</style>