const topNStudentsAttendees = function(students, attendees, N) {
    // map of all students
    var num_of_students = students.length;
    var lec_for_each_student = new Map();
    for (var i = 0; i < num_of_students; i++){
        lec_for_each_student.set(students[i],0);
    }
 
    // attendees appear only once in each lecture
    var attendees_appear_once = [];
    var num_of_lec = attendees.length;
    for (var i = 0; i < num_of_lec; i++){
        var s = new Set();
        var num_of_lec_attendees = attendees[i].length;
        for (var j = 0; j < num_of_lec_attendees; j++){
            s.add(attendees[i][j]);
        }
        attendees_appear_once.push(s);
    }

    // count how many lectures each student had
    for (var i = 0; i < num_of_lec; i++){
        var len_att_in_lec = attendees_appear_once[i].size;
        const names = attendees_appear_once[i].values();

        for (var j = 0; j < len_att_in_lec; j++){
            var name = names.next().value;
            if (lec_for_each_student.has(name)){
                lec_for_each_student.set(name, lec_for_each_student.get(name) + 1);
            }
        }
    }
    
    // sort the map by value
    let queue=[...lec_for_each_student];
    queue.sort(function(a,b){
        if (a[1]==b[1]) {
            return b[0]-a[0];
        }
        else {
            return b[1]-a[1];
        }
    });

    // return the top N
    var res = [];
    for(let k=0;k<N;k++){
        res.push(queue[k][0]);
    }
    return res;
}


var students = ['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas'];
var attendees = [['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas', 'Ortal'], ['Berry', 'Nitzan', 'Yoni', 'Eden', 'Hadas', 'Ortal'], ['Maxim', 'Ortal', 'Yoni', 'Refael', 'Nitzan', 'Alex'], ['Eden', 'Andrew', 'Yoni', 'Nitzan', 'Ortal','Nitzan']];
var N = 3;
document.getElementById('demo').innerHTML = topNStudentsAttendees(students, attendees, N);