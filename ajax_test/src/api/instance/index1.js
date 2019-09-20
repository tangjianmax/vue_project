const apiObject={
  getContactList: {
    url:"/contactList",
    method:"get",
    isForm:false
  },
  contactForm: {
    url: "/contact/new/form",
    method:"post",
    isForm:true
  },
  contactJson: {
    url: "/contact/new/json",
    method:"post",
    isForm:false
  },
  contactEdit: {
    url: "/contact/edit",
    method:"put",
    isForm:false
  },
  contactDelet: {
    url: "/contact",
    method:"delete",
    isForm:false
  },
}
export default apiObject
