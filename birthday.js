// Initialize birthday data
let birthdays = JSON.parse(localStorage.getItem('birthdays')) || [];

// Function to add birthday
function addBirthday(name, date) {
    const birthday = { name, date };
    birthdays.push(birthday);
    localStorage.setItem('birthdays', JSON.stringify(birthdays));
}

// Function to view birthdays
function viewBirthdays() {
    console.log("Birthday List:");
    birthdays.forEach((birthday, index) => {
        console.log(`${index + 1}. ${birthday.name} - ${birthday.date}`);
    });
}

// Function to edit birthday
function editBirthday(index, name, date) {
    if (index >= 0 && index < birthdays.length) {
        birthdays[index].name = name;
        birthdays[index].date = date;
        localStorage.setItem('birthdays', JSON.stringify(birthdays));
    } else {
        console.log("Invalid index.");
    }
}

// Function to delete birthday
function deleteBirthday(index) {
    if (index >= 0 && index < birthdays.length) {
        birthdays.splice(index, 1);
        localStorage.setItem('birthdays', JSON.stringify(birthdays));
    } else {
        console.log("Invalid index.");
    }
}

// Function to calculate countdown
function calculateCountdown(date) {
    const birthdayDate = new Date(date);
    const today = new Date();
    const difference = birthdayDate.getTime() - today.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    return days;
}

// Function to check upcoming birthdays
function checkUpcomingBirthdays() {
    const today = new Date();
    birthdays.forEach((birthday) => {
        const birthdayDate = new Date(birthday.date);
        const countdown = calculateCountdown(birthday.date);
        if (countdown <= 7) {
            console.log(`Upcoming birthday: ${birthday.name} in ${countdown} days.`);
        }
    });
}

// Function to notify birthdays
function notifyBirthdays() {
    const today = new Date();
    birthdays.forEach((birthday) => {
        const birthdayDate = new Date(birthday.date);
        if (today.getMonth() === birthdayDate.getMonth() && today.getDate() === birthdayDate.getDate()) {
            console.log(`Happy birthday to ${birthday.name}!`);
        }
    });
}

// Main program
while (true) {
    console.log("Birthday Reminder App");
    console.log("1. Add Birthday");
    console.log("2. View Birthdays");
    console.log("3. Edit Birthday");
    console.log("4. Delete Birthday");
    console.log("5. Check Upcoming Birthdays");
    console.log("6. Notify Birthdays");
    console.log("7. Exit");
    
    const choice = prompt("Enter your choice: ");
    
    switch (choice) {
        case "1":
            const name = prompt("Enter name: ");
            const date = prompt("Enter date (YYYY-MM-DD): ");
            addBirthday(name, date);
            break;
        case "2":
            viewBirthdays();
            break;
        case "3":
            const index = parseInt(prompt("Enter index: "));
            const newName = prompt("Enter new name: ");
            const newDate = prompt("Enter new date (YYYY-MM-DD): ");
            editBirthday(index, newName, newDate);
            break;
        case "4":
            const deleteIndex = parseInt(prompt("Enter index: "));
            deleteBirthday(deleteIndex);
            break;
        case "5":
            checkUpcomingBirthdays();
            break;
        case "6":
            notifyBirthdays();
            break;
        case "7":
            console.log("Exiting...");
            return;
        default:
            console.log("Invalid choice.");
    }
}