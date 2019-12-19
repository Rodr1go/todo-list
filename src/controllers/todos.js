
const todos = []

exports.getHome = (req, res) => {
  
  res.render('home', {todos: todos})
}

exports.getAdd = (req, res) => {
  
  res.render('add')
}

exports.postAdd = (req, res) => {
  todos.push({id: (todos.length-1)+1, task: req.body.task})
  
  res.redirect('/')
}

exports.getRemove = (req, res) => {
  
  let index = todos.indexOf(req.params.id)
  todos.splice(index, 1)
    
  res.json({ status: 'Deletado com sucesso!'})
}