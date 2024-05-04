#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.italic.cyan(` \n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n\t\t\t\t 🔍 WELLCOME TO THIS PERSONALITY CHECK 🔍 \n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n `));
class student {
     name : string ;
    constructor(){
       
   
    this.name = ""
   }
    get Name(){
        return this.name
    }
    set(value:string){
        this.name = value
    }
getmonth(month:string){
   switch(month.toUpperCase()){
    case "JANUARY":
        console.log(chalk.italic.rgb(255, 255, 102)("\n\t\t\t\t    And The People who born in january are :\n\t\t\t\t\t🔸) Tenacious\n\t\t\t\t\t🔸) Ambitious\n\t\t\t\t\t🔸) Disciplined "));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t\t\tAnd your Stars is Capricorn ♑`));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t   Now Tell me What do you think that What kind of person are you ?  `));
        
        break;
    case "FEBRUARY":
        console.log(chalk.italic.rgb(255, 255, 102)("\n\t\t\t\t     And People who born in february are :\n\t\t\t\t\t🔸) Creative\n\t\t\t\t\t🔸) Compassionate\n\t\t\t\t\t🔸) Intuitive.  "));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t\t\tAnd your Stars is Aquarius ♒`));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t    Now Tell me What do you think that What kind of person are you ?  `));
        break;
    case "MARCH":
        console.log(chalk.italic.rgb(255, 255, 102)("\n\t\t\t\t     And The People who born in march are :\n\t\t\t\t\t🔸) Enthusiastic\n\t\t\t\t\t🔸)  Adventurous\n\t\t\t\t\t🔸) Empathetic "));
        console.log(chalk.rgb(26,267,228)(`\n\t\t\t\t\tAnd your Stars is Pisces ♓`));
        console.log(chalk.rgb(26,267,228)(`\n\t\t\t    Now Tell me What do you think that What kind of person are you ?  `));
        break;
    case "APRIL":
        console.log(chalk.italic.rgb(255, 255, 102)("\n\t\t\t\t     And The People who born in april are :\n\t\t\t\t\t🔸) Independent\n\t\t\t\t\t🔸) Dynamic\n\t\t\t\t\t🔸) Courageous "));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t\t\tAnd your Stars is Aries ♈`));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t    Now Tell me What do you think that What kind of person are you ?  `));
        break;
    case "MAY":
        console.log(chalk.italic.rgb(255, 255, 102)("\n\t\t\t\t     And The People who born in may are :\n\t\t\t\t\t🔸) Practical\n\t\t\t\t\t🔸) Loyal\n\t\t\t\t\t🔸) Reliable "));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t\t\tAnd your Stars is Taurus ♉`));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t    Now Tell me What do you think that What kind of person are you ?  `));
        break;
    case "JUNE":
        console.log(chalk.italic.rgb(255, 255, 102)("\n\t\t\t\t     And The People who born in june are :\n\t\t\t\t\t🔸) Sociable\n\t\t\t\t\t🔸) Adaptable\n\t\t\t\t\t🔸) Curious. "));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t\t\tAnd your Stars is Gemini ♊`));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t   Now Tell me What do you think that What kind of person are you ?  `));
        break;
    case "JULY":
        console.log(chalk.italic.rgb(255, 255, 102)("\n\t\t\t\t     And The People who born in july are :\n\t\t\t\t\t🔸) Nurturing\n\t\t\t\t\t🔸)  Stubborn\n\t\t\t\t\t🔸) Imaginative "));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t\t\tAnd your Stars is Cancer♋`));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t    Now Tell me What do you think that What kind of person are you ?  `));
        break;
    case "AUGUST":
        console.log(chalk.rgb(255, 255, 102)("\n\t\t\t\t     And The People who born in august are :\n\t\t\t\t\t🔸) Confident\n\t\t\t\t\t🔸) Charismatic\n\t\t\t\t\t🔸) Ambitious"));
        console.log(chalk.rgb(26,267,228)(`\n\t\t\t\t\tAnd your Stars is Leo ♌`));
        console.log(chalk.rgb(26,267,228)(`\n\t\t\t   Now Tell me What do you think that What kind of person are you ?  `));
        break;
    case "SEPTEMBER":
        console.log(chalk.italic.rgb(255, 255, 102)("\n\t\t\t\t     And The People who born in september are :\n\t\t\t\t\t🔸) Analytical\n\t\t\t\t\t🔸) Agresive,\n\t\t\t\t\t🔸) Practical"));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t\t\tAnd your Stars is Virgo ♍ `));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t    Now Tell me What do you think that What kind of person are you ? `));
        break;
    case "OCTOBER":
        console.log(chalk.italic.rgb(255, 255, 102)("\n\t\t\t\t     And The People who born in october are :\n\t\t\t\t\t🔸) Diplomatic\n\t\t\t\t\t🔸) Charming\n\t\t\t\t\t🔸) Romantic "));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t\t\tAnd your Stars is Libra ♎`));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t    Now Tell me What do you think that What kind of person are you  ? `));
        break;
    case "NOVEMBER":
        console.log(chalk.italic.rgb(255, 255, 102)("\n\t\t\t\t     And The People who born in november are :\n\t\t\t\t\t🔸) Conservative\n\t\t\t\t\t🔸)  Passionate\n\t\t\t\t\t🔸) Mysterious "));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t\t\t And your Stars is Scorpio ♏`));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t    Now Tell me What do you think that What kind of person are you ? `));
        break;
    case "DECEMBER":
        console.log(chalk.italic.rgb(255, 255, 102)("\n\t\t\t\t     And The People who born in december are :\n\t\t\t\t\t🔸) Clever\n\t\t\t\t\t🔸) Generous\n\t\t\t\t\t🔸)  Adventurous"));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t\t\tAnd your Stars is Sagittarius ♐`));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t    Now Tell me What do you think that What kind of person are you ? `));
        break;

    default :
        console.log("\t\t\t\tPLEASE ENTER CORRECT MONTH ")
        break;

    }
}

}

// another class
class person{
    // deaclare a field to represent the personality 
        private personality : string;
        constructor(){
            this.personality = ""
        }
    
    askquestion(answer:number){
        if(answer == 1){
            this.personality = "Extrovert"
           console.log(chalk.italic.rgb(255, 255, 102)( `\n\t\t\t\t    -----------> Oh !! you are ${this.personality} <-----------`));
           console.log(chalk.italic.bold.cyan(` \n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n\t\t\t\t✨✨✨✨ THANK YOU BYE ✨✨✨✨ \n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n `));
           
           
            
            
        }else if(answer == 2){
            this.personality = "Introvert"
            console.log(chalk.italic.rgb(255, 255, 102)(` \n\t\t\t\t   -----------> Oh !! you are ${this.personality} <-----------`));
            console.log(chalk.italic.bold.cyan(` \n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n\t\t\t\t✨✨✨✨ THANK YOU BYE ✨✨✨✨ \n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n `));
            
            
        }else{
            this.personality = "You are still Mystery"
            console.log(chalk.italic.rgb(255, 255, 102)(`\n\t\t\t\t    ${this.personality}`));
            console.log(chalk.bold.italic.cyan(` \n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n\t\t\t\t✨✨✨✨ THANK YOU BYE ✨✨✨✨ \n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n `));
            
        }
    }
    getPersonality(){
        return this.personality
    }
    
    }




let student_name = new student()
async function takingName() {
   
    let stud = await inquirer.prompt([{
        name : "studen",
        type : "input",
        message :chalk.italic.rgb(350, 0, 150)( "\t\t\t\t\tWhat is your name : "),
        validate : (input)=>{
            if( !input || /^\d+$/.test(input) ){
                return `enter your name`;
                
            }else{
                return true
            }
        }

    },{
        name : "month",
        type : "input",
        message : chalk.italic.rgb(350, 0, 150)("\n\t\t\t\t   What is your Birthday Month : "),
        validate : (input)=>{
            if( !input || /^\d+$/.test(input) ){
                return `Enter your Birthday Month : `;
                
            }else{
                return true
            }
        }
    }]).then((responce)=>{
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t\t\tYour name is : ${student_name.Name}${responce.studen} `));
        console.log(chalk.italic.rgb(26,267,228)(`\n\t\t\t\t\tyour birthday month is : ${responce.month}`));
        
         student_name.getmonth(responce.month)
        
        
    })


    
}


let user_answer = new person()


async function takingInput(){
    await takingName()
    let user = await inquirer.prompt([{
        name : "name",
        type : "number",
        message :chalk.italic.rgb(350, 0, 150)( "\n\t\t   Type 1 if you like to talk to others and type 2 if you would rather to keep yourself :")
        
    }]).then((response)=>{
        
        user_answer.askquestion(response.name)

        
        
    })
}

takingInput()


