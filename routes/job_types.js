// this is where db requests pertaining to jobs_types will go

const express = require('express');

const router = express.Router();

router.get('job_types', (req, res) => {
  res.JSON([]);
})

module.exports = router;


  // try {
  //   let job_type = await knex('job_type');
  //   res.json(job_type);
  //   console.log(job_type);
  // } catch (e) {
  //   console.log(e);
  // }