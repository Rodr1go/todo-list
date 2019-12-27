
const todos = []

exports.getHome = (req, res) => {
  
  res.render('home', {todos: todos})
}

exports.getAdd = (req, res) => {
  
  res.render('add')
}

exports.postAdd = (req, res) => {
  todos.push({id: todos.length, task: req.body.task})
  
  res.redirect('/')
}

exports.remove = (req, res) => {
  
  const index = todos.indexOf(req.params.id)
  todos.splice(index, 1)
    
  res.json({ status: 'Deletado com sucesso!'})
}