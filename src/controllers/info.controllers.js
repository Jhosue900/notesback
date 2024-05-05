const gradesonly = async (req, res, next) => {
    try {
        
        
        const {numberofgrades, grades} = req.body;

        console.log("numberofgrades:", numberofgrades);
        console.log("grades:", grades);
        
        if (grades && grades.length > 0) {
            const totalGrade = grades.reduce((acc, curr) => acc + parseFloat(curr), 0);
            const prom = totalGrade/numberofgrades
            const roundedTotalGrade = parseFloat(Number(prom).toFixed(1));
            

            res.status(200).json({ responseServer: roundedTotalGrade });
           
        } else {
            console.log("El array 'grades' está indefinido o vacío.");
            res.send("Err")
        }

    } catch (error) {
        console.log(error.message);
    }
}

const finalGrade = async(req, res, next) => {
    try {

        const {numberofgrades, grades, testGrade, autoevaluation } = req.body;
        

        if (grades && grades.length > 0) {
            const totalGrade = grades.reduce((acc, curr) => acc + parseFloat(curr), 0);
            const prom = totalGrade/numberofgrades

            const gradesPercentage = prom * 0.75
            const testPercentage = testGrade * 0.20
            const autoevaluationPercentage = autoevaluation * 0.05
            
            const generalNote = gradesPercentage + testPercentage + autoevaluationPercentage
            const finalnoteaproximated = parseFloat(Number(generalNote).toFixed(1));

         
            

            res.status(200).json({ responseServer: finalnoteaproximated });
           
        } else {
            console.log("El array 'grades' está indefinido o vacío.");
        }

        
    } catch (error) {
        console.log(error.message);
    }
}


const fortheyearoneterm = async(req, res, next) => {
    try {
        const { firstterm } = req.body;

        
        const op1 = firstterm * 0.30
        const op2 = 3 - op1
        const op3 = op2 / 0.70

        const rounded = parseFloat(Number(op3).toFixed(1));

   
        
        res.status(200).json({ responseServer: rounded });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    gradesonly,
    finalGrade,
    fortheyearoneterm
}