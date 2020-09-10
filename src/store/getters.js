const getters = {
  avatar: state => state.admin.avatar,
  username: state => state.admin.username,
  githubUserAvatar: state => state.githubUser.avatar,
  githubUsername: state => state.githubUser.name,
  token: state => state.githubUser.token,
  refreshComment: state => state.comment.refreshComment,
  loading: state => state.githubUser.loading,
}

export default getters
