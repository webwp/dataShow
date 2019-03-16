const app = {
  state: {
      dateTime:''
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      //具体要执行的
    },
    
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    
  }
}

export default app