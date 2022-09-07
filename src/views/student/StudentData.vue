<template>
    <a-button class="editable-add-btn" style="margin-bottom: 8px" @click="handleAdd">添加</a-button>
    <a-table bordered :data-source="dataSource" :columns="columns" :scroll="{ y: 464 }">
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.dataIndex === 'name'">
          <div class="editable-cell">
            <div v-if="editableData[record.key]" class="editable-cell-input-wrapper">
              <a-input v-model:value="editableData[record.key].name" @pressEnter="save(record.key)" />
              <check-outlined class="editable-cell-icon-check" @click="save(record.key)" />
            </div>
            <div v-else class="editable-cell-text-wrapper" style="margin-bottom:0px;">
              {{ text || ' ' }}
              <edit-outlined class="editable-cell-icon" @click="edit(record.key)" />
            </div>
          </div>
        </template>
        <template v-else-if="column.dataIndex === 'operation'">
          <a-popconfirm
            v-if="dataSource.length"
            title="确定要删除吗?"
            cancelText="取消"
            okText="确认"
            @confirm="onDelete(record.key)"
          >
            <a>删除</a>
          </a-popconfirm>
        </template>
      </template>
    </a-table>
  </template>
  <script>
  import { computed, defineComponent, reactive, ref } from 'vue';
  import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
  import { cloneDeep } from 'lodash-es';
  export default defineComponent({
    components: {
      CheckOutlined,
      EditOutlined,
    },
  
    setup() {
      const columns = [{
        title: '序号',
        dataIndex: 'S_index',
        width: '5%',
      },{
        title: '学校',
        dataIndex: 'school',
        width: '8%',
      }, {
        title: '姓名',
        dataIndex: 'name',
        width: '8%',

      }, {
        title: '性别',
        dataIndex: 'sex',
        width: '8%',

      }, {
        title: '年龄',
        dataIndex: 'age',
        width: '8%',

      }, {
        title: '学号',
        dataIndex: 'number',
        width: '12%',

      }, {
        title: '手机号',
        dataIndex: 'phone',
        width: '12%',

      },{
        title: '文理科',
        dataIndex: 'subject',
        width: '8%',

      },{
        title: '收藏题目数',
        dataIndex: 'num',
        width: '8%',

      },{
        title: '操作',
        dataIndex: 'operation',
        width: '6%',

      }];
      const dataSource = ref([{
        key: '0',
        S_index:'1',
        school:'河南理工大学',
        name: '张三',
        sex:'男',
        age: 18,
        number: 311202241,
        phone: 188888888,
        subject: '文科',
        num:15,
      }, {
        key: '1',
        S_index:'2',
        school:'清华大学',
        name: '李四',
        sex:'女',
        age: 19,
        number: 311202241,
        phone: 188888888,
        subject: '理科',
        num:22,
      }]);
      const count = computed(() => dataSource.value.length + 1);
      const editableData = reactive({});
  
      const edit = key => {
        editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
      };
  
      const save = key => {
        Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
        delete editableData[key];
      };
  
      const onDelete = key => {
        dataSource.value = dataSource.value.filter(item => item.key !== key);
      };
  
      const handleAdd = () => {
        const newData = {
          key: `${count.value}`,
          S_index:`${count.value}`,
          school:'默认学校',
          name: 'defa',
          sex:'女',
          age: 19,
          number: 325656526,
          phone: 122222222,
          subject: '理科',
          num:22,
        };
        dataSource.value.push(newData);
      };
  
      return {
        columns,
        onDelete,
        handleAdd,
        dataSource,
        editableData,
        count,
        edit,
        save,
      };
    },
  
  });
  </script>
  <style lang="less">
  .editable-cell {
    position: relative;
    .editable-cell-input-wrapper,
    .editable-cell-text-wrapper {
      padding-right: 24px;
    }
  
    .editable-cell-text-wrapper {
      padding: 0 12px 0 5px;
    }
  
    .editable-cell-icon,
    .editable-cell-icon-check {
      position: absolute;
      right: 0;
      width: 20px;
      cursor: pointer;
    }
  
    .editable-cell-icon {
      margin-top: 4px;
      display: none;
    }
  
    .editable-cell-icon-check {
      line-height: 20px;
    }
  
    .editable-cell-icon:hover,
    .editable-cell-icon-check:hover {
      color: #108ee9;
    }
  
    .editable-add-btn {
      margin-bottom: 0;
    }
  }
  .editable-cell:hover .editable-cell-icon {
    display: inline-block;
  }
  </style>