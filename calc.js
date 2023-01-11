(function() {
    "use scrict";
    //helper function to shortcut document.getElementById
    var $ = function(element) {
        return document.getElementById(element);
    }

    //helper function to bind events to callbacks
    var bind = function(target, callback) {
        return function(event) {
            return callback.call(target, event);
        };
    };

    //main calculator brain and functions
    class Calculator {
        constructor(display) {
            $('buttontable').addEventListener('click', bind(this, this.ButtonPress));
            window.addEventListener('', bind(this, this.KeyPress));

            this.operandA = '';
            this.operandB = '';
            this.operation = '';
            this.memory = '0';
            this.lastInputWasOperation = false;
            this.display = display;
            this.operationProc = new OperationProcessor();
        }

        //handles button inputs
        ButtonPress(event) {
            //console.log("buttonPressed");
            if (event.target.value !== undefined) {
                this.ParseInput(event.target.value);
            }
        }

        //handles key press events
        KeyPress(event) {
            var char = String.fromCharCode(event.charCode).toUpperCase();
            var validInputs = "";
            if (validInputs.indexOf(char) >= 0) {
                this.ParseInput(char);
            } else if (event.charCode == 13) { //keycode assigned to carriage return
                this.ParseInput('=');
            }
        }

        //updates the calculator display
        UpdateDisplay(n) {
            this.display.value = n;
        }

        //parses the input and determines the type
        ParseInput(char) {
            if (char >= '0' && char <= '9') {
                //use case: digit was pressed
                if (this.lastInputWasOperation) {
                    this.operandA = '';
                    this.lastInputWasOperation = false;
                }
                if (this.operandA == undefined || this.operandA == '') {
                    this.operandA = char;
                } else {
                    this.operandA += char;
                }
                this.UpdateDisplay(this.operandA);

            } else if (char === '.') {
                //use case: decimal was pressed
                var currentValue = this.display.value;
                if (currentValue.indexOf('.') >= 0) { // decimal exists in current number
                    return;
                }
                if (this.lastInputWasOperation) {
                    this.operandA = '';
                    this.lastInputWasOperation = false;
                }
                if (this.operandA === '') {
                    this.operandA = '0.';
                } else {
                    this.operandA += '.';
                }
                this.UpdateDisplay(this.operandA);

            } else if (char === 'C') {
                //use case: clear was pressed
                if (this.lastInputWasOperation) {
                    this.operandA = '0';
                    this.lastInputWasOperation = false;
                }
                this.operandA = '';
                this.operandB = '0';
                this.operation = '';
                this.UpdateDisplay(this.operandB);

            } else if (char === 'M') {
                //use case: memory recall was pressed
                this.operandA = this.memory;
                this.UpdateDisplay(this.operandA);
				
            } else if (char === 'M+') {
                //use case: add to memory was pressed
                this.memory = this.display.value;
            
			} else if (char === 'MC') {
                //use case: clear memory was pressed
                this.memory = '0';
            
			} else {
                //use case: operation was pressed
                if (this.operation == '') {
                    //use case: first time any operation is pressed or after a clear
                    this.operandB = this.operandA;
                } else if (this.operation === '=') {
                    //use case: any time equals is pressed
                    if (this.operation === '=' && char === '=') {
                        //use case: special case for repeated equal presses
                        this.operandB = this.operationProc.ProcessMathOperation(this.operation, this.operandB, this.operandA);
                    }
                } else {
                    //use case: all other operations performed
                    this.operandB = this.operationProc.ProcessMathOperation(this.operation, this.operandB, this.operandA);
                }

                this.operation = char;
                this.lastInputWasOperation = true;
                this.UpdateDisplay(this.operandB);
            }
        }
    }

    //handles all the processing of the math operations
    class OperationProcessor {
        constructor() {
            this.mathOp = new MathOperation();
            this.add = new Addition();
            this.sub = new Subtraction();
            this.divide = new Division();
            this.multi = new Multiplication();
        }

        //use case: takes (mathOperation, input1, input2) and performs said mathOperation on input1 and input2
        ProcessMathOperation(op, a, b) {
            switch (op) {
                case '+':
                    this.mathOp = this.add;
                    break;
                case '-':
                    this.mathOp = this.sub;
                    break;
                case '*':
                    this.mathOp = this.multi;
                    break;
                case '/':
                    this.mathOp = this.divide;
                    break;
                case '=':
                    break;
                default:
                    console.log("**error** default in switch");
            }
            return this.mathOp.Execute(a, b);
        }
    }

    //parent/Interface for all math operations
    class MathOperation {
        Execute(a, b) {
            return '';
        };
    }

    //all mathOperation classes
    class Addition extends MathOperation {
        Execute(a, b) {
            var a1 = parseFloat(a);
            var b1 = parseFloat(b);
            return a1 += b1;
        }
    }

    class Subtraction extends MathOperation {
        Execute(a, b) {
            var a1 = parseFloat(a);
            var b1 = parseFloat(b);
            return a -= b;
        }
    }

    class Multiplication extends MathOperation {
        Execute(a, b) {
            var a1 = parseFloat(a);
            var b1 = parseFloat(b);
            return a *= b;
        }
    }

    class Division extends MathOperation {
        Execute(a, b) {
            var a1 = parseFloat(a);
            var b1 = parseFloat(b);
            return a /= b;
        }
    }

    //initialization
    var calc = new Calculator($('display'));

}());