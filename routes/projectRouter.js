const express = require('express');
const Project = require ('./projectModel')

const router = express.Router();

router.get('/tasks',(req,res) =>{
  Project.getTasks()
  .then(tasks => {
    res.status(200).json(tasks);
  })
  .catch(err => {
    res.status(500).json({ message: "Failed to get tasks", message:err.message });
  });

})

router.get('/res',(req,res) =>{
  Project.getResources()
  .then(resources => {
    res.status(200).json(resources);
  })
  .catch(err => {
    res.status(500).json({ message: "Failed to get resources", message:err.message });
  });
})

router.get('/',(req,res) =>{
    Project.getAllProjects()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get Projects", message:err.message });
    });
})

router.get('/:id',(req,res) =>{
  Project.getProjectById(req.params.id)
  .then(project => {
    res.status(200).json(project);
  })
  .catch(err => {
    res.status(500).json({ message: "Failed to get Project", message:err.message });
  });
})

router.post("/", (req, res) => {
  const project = req.body;
  Project.addProject(project)
  Project.getAllProjects()
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

router.post("/res", (req, res) => {

  const resource = req.body;
  Project.addResource(resource)
  Project.getResources()
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

router.post("/tasks", (req, res) => {
  const task = req.body;
  Project.addTask(task)
  Project.getTasks()
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});


// router.get('/:id/instructions', (req,res) =>{
//   Recipe.getInstructions(req.params.id)
//   .then(steps => {
//     res.status(200).json(steps);
//   })
//   .catch(err => {
//     res.status(500).json({ message: "Failed to get Recipes", message:err.message });
//   });
// })

module.exports = router;