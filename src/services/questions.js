/*
 * Questions Models and Services

 * This script generates a collection of questions, with corresponding 
 * functions to save and store answers, questions and explanation.
 * 
 */

import mongoose from "mongoose";

/* =========================
=       MODEL DEFINITION    =
============================*/

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    title:{
        type:String,
        required:false
    },
    question: {
        type: String,
        required: false
    },
    code:{
        type:String,
        required:false
    },
    item_a: {
        type: String,
        required: false
    },
    item_b: {
        type: String,
        required: false
    },
    item_c: {
        type: String,
        required: false
    },
    correct: {
        type: Number,
        required: true
    },
    explanation: {
        type: String,
        required: false
    }
})

const questionModel = mongoose.model("Quests", questionSchema);

/* ==== END OF MODEL DEFINITION ==== */


/* ==================================
=        SERVICES DEFINITIONS        =
=====================================*/

/**
 * Saves a new Quizz in the database with the answers given.
 * @param {String} title Title of the main topic of your Quizz
 * @param {String} question Question to be displayed in the Quizz
 * @param {String} code Code block 
 * @param {String} item_a Possible answer 1
 * @param {String} item_b Possible answer 2
 * @param {String} item_c Possible answer 3
 * @param {Number} correct Index of the possible correct answer. Start counting from 0
 * @param {String} explanation Text explaining the correct answer to your question.
 * 
 * @returns {Object} An object with the status attribute, which is a runtime boolean and a message string in the message key.
 */
export async function createQuest(title="", question="", code="", item_a="", item_b="", item_c="", correct, explanation="") {

    const response = {status:undefined,message:undefined}

    // Verify that a code or question has been assigned.
    if(question.trim() === "" && code.trim() === ""){
        console.warn("Could not create quest: No question or code assigned");
        response.message = "Could not create quest: No question or code assigned";
        response.status = false;
        return response;
    }

    if((item_a.trim() === "" && item_b.trim() === "") || 
        (item_a.trim() === "" && item_c.trim() === "") || 
        (item_b.trim() === "" && item_c.trim() === "")){

        console.warn("Need to have at least two answers in order to generate a Quizz");
        response.message = "You need to have at least two answers in order to generate a Quizz";
        response.status = false;
        return response;
    }

    // Verify that the index of the correct answer has been assigned and that it does not exceed the number of possible answers.
    if(correct === undefined || correct > 2 || correct < 0){
        console.warn("The correct answer must contain the index of the answer, a value between 0 and 2");
        response.message = "The correct answer must contain the index of the answer, a value between 0 and 2";
        response.status = false;
        return response
    }

    const quest = new questionModel();

    quest.title = title;
    quest.question = question;
    quest.code = code;
    quest.item_a = item_a;
    quest.item_b = item_b;
    quest.item_c = item_c;
    quest.correct = correct;
    quest.explanation = explanation;

    await quest.save().then((v)=>{
        response.message = "Quizz made succesfully";
        response.status = true;
    }).catch((err)=>{
        console.error("Unable to save this quest");
        console.error(err);
        response.message = err;
        response.status = false
    })

    return response;
}

/* ==== END OF SERVICE DEFINITION ==== */