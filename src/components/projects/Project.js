import React, { useState } from "react";
import { Grow, Card, Grid, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import css from './projects.css'
function Projects() {
    const [projects] = useState([
        {
            title: "Coffee & Parenting ☕",
            description: " A social media for parents, where they can connect to ask for advice,share their concerns, and ideas, talk about their children, see tips and tricks for a specific age group and generate random baby names.",
            technologies: "React, MongoDB, Apollo Server, JSON Web Tokens,Heroku,GraphQl,React Bootstrap,Node.js,Apollo Client.",
            deployed: "https://salty-shelf-69418.herokuapp.com/",
            repo: "https://github.com/geicibarham/Coffee-Parenting",
            timeout: 750
        },
        {
            title: "Scout 🐶",
            description: "   Scout connects pet owners and dog walkers looking for a new gig and a new buddy. Walkers can sign in to look for jobs and owners can sign in to look for pet care",
            technologies: " Handlebars, Css, NodeJs, Sequelize, Express.js,UnidId,Heroku,mysql.",
            deployed: "https://sheltered-garden-88579.herokuapp.com/",
            repo: "https://github.com/bdswartz/walks-of-love",
            timeout: 1000
        },
        {
            title: "Harry Potter Quiz 9¾ ",
            description: "A fun and timed Javascript Quiz that asks easy and mid difficulty questions and subtracts 15 seconds for each wrong answer!",
            technologies: "HTML5,Javascript, Css, Bootstrap.",
            deployed: "https://geicibarham.github.io/Harry-Potter-Quiz/",
            repo: "https://github.com/geicibarham/Harry-Potter-Quiz",
            timeout: 1750
        },
        {
            title: "Silly Quotes 🤪",
            description: "  Front end Javascript project that fetches data from two different APIS. The first button generates a random quote and the second button translates the generated quote to a random funny language. Options are Minion and Chef. ",
            technologies: "HTML,Css, Javascript, Third Party APIs",
            deployed: "https://davidebcurtis.github.io/silly-quotes/",
            repo: "https://github.com/DavidebCurtis/silly-quotes",
            timeout: 1500
        },

        {
            title: " SQL Employee Tracker 🛢️",
            description: "Track your employees using a SQL database. This application runs on the command line and it asks questions using Inquirer.You will be prompted with questions that will let you interact with the database. Currently,users are able to add and view departments, employees,roles, and update employees' roles. ",
            technologies: "SQL, Inquirer, Chalk - Npm, and Console.Table.",
            deployed: "https://drive.google.com/file/d/1c2ib8BUolWgmfQ1GAxTq9jsGr6F2ojcq/view",
            repo: "https://github.com/geicibarham/Employee-Tracker",
            timeout: 1250
        },
        {
            title: "Social Network API 🛢️",
            description: "Backend Api for a social network that performs CRUD operations with Mongoose on a MongoDb Database.",
            technologies: "Technologies: MongoDB, Mongoose, Insomnia",
            deployed: "https://drive.google.com/file/d/1I4mjY715Jo3-NLaQBd6ihvvip7dN0kDU/view",
            repo: "https://github.com/geicibarham/Social-Network-API",
            timeout: 2000
        }
    ]);
    return (
        <section id="projects">
            <h2 style={{ color: "white", textAlign: "center", paddingBottom:"20px" }}

            >Projects</h2>
            <Grid container spacing={1}>
                {projects.map((project, i) => (
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}
                        sx={{ display: 'flex', justifyContent: 'center' }} key={project.title}>
                        <Grow in={true} style={{ transformOrigin: '0 0 0' }}
                            {...(true ? { timeout: project.timeout } : {})}>
                            <Card sx={{
                                maxWidth: 345,
                                backgroundColor: '#F1F2F6', mb: 2,
                                display: 'flex', flexDirection: 'column'
                            }}
                                variant='outlined' >
                                <CardMedia
                                    component="img"
                                    height="140"


                                    image={require(`../../assets/images/projects/${i}.png`)}
                                    alt={project.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.description}
                                        <br />      <br />
                                        <p style={{ fontSize: "smaller", fontWeight: "lighter" }}
                                        >Technologies:
                                            {project.technologies}</p>

                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ mt: 'auto' }}>
                                    <Button href={project.deployed} size="small" target="_blank" rel='noreferrer'>Deployed App</Button>
                                    <Button href={project.repo} size="small" target="_blank" rel='noreferrer'>Github</Button>
                                </CardActions>
                            </Card>
                        </Grow>
                    </Grid>
                ))}

            </Grid>
        </section>
    )
}

export default Projects;