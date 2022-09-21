const express = require('express')
const app = express();
const cors = require('cors')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./model')


const uri =``
mongoose.connect("mongodb+srv://Raghava:msccs2021@cluster0.sza8cms.mongodb.net/?retryWrites=true&w=majority").then(() => console.log('conncect success')).catch(error => console.error("error is :",error));
//knowledge base 
const database = require('./knowledgeBase');

//tau-prolog 
const pl = require("tau-prolog");
const loader = require("tau-prolog/modules/lists.js");
const { count } = require('./model');
loader(pl);

app.use(bodyParser.json()) 
app.use(express.static('public'));
app.use(cors()) ;

//port number 
const port = 5000;




//app.post for storing response objects
var responseData = [];
var facts = `student(yes)`;
var totalScore = 0;
var selectedQuestions = [];


;
//post users count from mongodb
app.get('/users', async ( req, res) => {

    const result = await users.findById({id:1});
    console.log('count value of result', result);
    res.json(result);


});
//post users count from mongodb
app.post('/users', async ( req, res) => {
    // const counter = req.body.count;

    const postCount = await users.updateOne({id: 1}, {count: 2});
    console.log('post counter:',postCount)


})

app.post('/data', (req,res)=>{
    const response = {
        questionId: req.body.questionId,
        title: req.body.title,
        predicate: req.body.predicate,
        argument: req.body.argument,
        option: req.body.option,
        score: req.body.score
    };

  
    const { questionId, title, predicate, argument, option, score } = response;

    //storing user response in responseData array
    responseData.push(response);
   

    // concatinatin predicates as facts
    facts= facts + `,${predicate}(${argument}, ${option})`;

    // sum of total score based on  user selected option
    totalScore = totalScore + score;
    console.log('total score is: ', totalScore);
   
    // storing user selected question with option and score in selectedQuestions array
    selectedQuestions.push({
        questionId,
        title,
        option,
        score
    })

    console.log(selectedQuestions);
    
    const result = new users({id: 1, count: 0});
    result.save()
    

})

// prolog logic implementation through get method '/'
app.get('/', (req, res) => {
  


    var session = pl.create();
        
        //senseion.consult();
        session.consult(` ${database}student(depression):-${facts}.`, {
            

            //consult on success
            success: function() {
                console.log(` ${database}student(depression):-${facts}.`)
                console.log('session consult is success.');

                //query start
                session.query(`student(depression).`,{
                    //query on success
                    success: function(goal) {
                        console.log('query success:');
                        //first answer start
                        session.answer({
                            //first answer on success
                            success: function(ans) {
                                console.log('first answer on success')
                                show(ans);
                                            //second answer
                                            session.answer({
                                                //second answer on success
                                            success: function(ans) {
                                                        console.log('second answer on success')
                                                         show(ans);
                                                         //third answer 
                                                            session.answer({
                                                                //third answer on success
                                                              success: function(ans) {
                                                                 console.log('third answer on success',ans)
                                                    },
                                                    //third answer on fail
                                                    faill: function() {
                                                        console.log('third answer on fails')
                                                    }
                                                })
                                        },
                                        //second answer on fail
                                        fail: () => {
                                            console.log('second answer on fail')
                                        }
                                    })
                            },
                            //first answer fail
                            fail: function() {
                                console.log('first answer on fail')
                            }
                        })
                        
                        //answer end
                    },
                    //query error
                    error: function(error) {
                        console.log('query error', error)
                    },
                    //query fail
                    faill: function() {
                        console.log('query fail')
                    }
                });
                


                //queary end
            },

            //consult on error
            error: function(err) {
                console.log('failure')
            }
        }
        );

        
         //output start
        var show = function (answer) {
             console.log('X value is', session.format_answer(answer));
             
        };
        //output end

       

       
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})