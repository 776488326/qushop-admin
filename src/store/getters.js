const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  routes: state => state.user.resultAllRputes,
  buttons: state => state.user.buttons,
  roles: state => state.user.roles
}
export default getters
