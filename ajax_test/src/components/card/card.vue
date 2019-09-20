<template>
    <div>
        <!-- 联系人卡片 -->
        <van-contact-card
                :type="cardType"
                :name="currentContact.name"
                :tel="currentContact.tel"
                @click="showList = true"
        />

        <!-- 联系人列表 -->
        <van-popup v-model="showList" position="bottom">
            <van-contact-list
                    v-model="chosenContactId"
                    :list="list"
                    @add="onAdd"
                    @edit="onEdit"
                    @select="onSelect"
            />
        </van-popup>

        <!-- 联系人编辑 -->
        <van-popup v-model="showEdit" position="bottom">
            <van-contact-edit
                    :contact-info="editingContact"
                    :is-edit="isEdit"
                    @save="onSave"
                    @delete="onDelete"
            />
        </van-popup>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { ContactCard, ContactList, ContactEdit ,Popup} from 'vant';
    const OK = 200;
    Vue
        .use(ContactCard)
        .use(ContactList)
        .use(ContactEdit)
        .use(Popup)

    export default {
      data() {
        return {
          chosenContactId: null,
          editingContact: {},
          showList: false,
          showEdit: false,
          isEdit: false,
          list: []
        };
      },
      async mounted() {
        this.getContactList()
      },
      computed: {
        cardType() {
          return this.chosenContactId !== null ? 'edit' : 'add';
        },
        currentContact() {
          const id = this.chosenContactId;
          return id !== null ? this.list.filter(item => item.id === id)[0] : {};
        }
      },

        methods: {
          async getContactList(){
            // 请求list数据
            const contactList =  await this.$obj.getContactList();
            console.log(contactList);
            if(contactList.code === OK){
              this.list = contactList.data
            }
          },
            // 添加联系人
          onAdd() {
            this.editingContact = {};
            this.isEdit = false;
            this.showEdit = true;
          },

          // 编辑联系人
          async onEdit(item) {
            this.isEdit = true;
            this.showEdit = true;
            this.editingContact = item;

          },

          // 选中联系人
          onSelect() {
            this.showList = false;
          },

          // 保存联系人
          async onSave(info) {
            this.showEdit = false;
            this.showList = false;
            //在编辑的时候触发
            if (this.isEdit) {
              // this.list = this.list.map(item => item.id === info.id ? info : item);
              //重新编辑姓名电话等

              //在第一次保存的时候触发
            } else {
              // this.list.push(info);
              // console.log(p);
            }
            this.chosenContactId = info.id;

          },

            // 删除联系人
          async onDelete(info) {
            this.showEdit = false;

            if (this.chosenContactId === info.id) {
              this.chosenContactId = null;
            }
          }
        }
    };
</script>

<style scoped>
    .van-popup{
        height: 100%;
    }
</style>
