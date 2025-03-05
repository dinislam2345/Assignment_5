
        let taskAssigned = 6;
        let taskNumber = 23;

        function completeTask(button, taskName) {
            
            if (taskAssigned > 0) {
                taskAssigned--;
                document.getElementById('taskAssigned').innerText = taskAssigned;
                alert('Board updated Successfully')
            }

            
            taskNumber++;
            document.getElementById('taskNumber').innerText = taskNumber;

            button.innerText = "Done";
            button.classList.add("bg-gray-400", "cursor-not-allowed");
            button.disabled = true;

            let now = new Date();
            let timeString = now.toLocaleTimeString();

            let logContainer = document.getElementById('activityLog');
            let logEntry = document.createElement('div');
            logEntry.classList.add('p-3', 'bg-white', 'rounded-lg', 'shadow', 'text-gray-700');
            logEntry.innerHTML = `<p><strong>Task Completed:</strong> ${taskName}</p><p class="text-sm text-gray-500">${timeString}</p>`;
            logContainer.prepend(logEntry);
        }

        function clearLog() {
            document.getElementById('activityLog').innerHTML = '';
        }

        function goToNewPage() {
    window.location.href = "index1.html";
}
        function goBack() {
            window.location.href = "index.html";
        }
    
    