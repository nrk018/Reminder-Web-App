# Reminder App

A modern and minimalist reminder application to manage your tasks effectively. The app includes a typewriter effect for the title, a Flatpickr calendar for selecting deadlines, and persistent task storage using localStorage.

## Features

- **Typewriter Effect:** The title animates with a typewriter effect and blinking cursor for a dynamic visual appeal.
- **Flatpickr Integration:** Provides a user-friendly date picker for setting deadlines.
- **Task Management:** Add, edit, and delete tasks with persistence using localStorage.
- **Responsive Design:** The interface is optimized for various screen sizes and devices.

## How It Works

1. **Adding Tasks:** Enter the reminder name, optional notes, and set a deadline. Click "Add" to save the task.
2. **Task Display:** Tasks are listed with checkboxes to mark completion, and can be removed with a delete button.
3. **Task Persistence:** Tasks are saved to localStorage, so they persist across page reloads.

## File Structure

- **`index.html`**: The main HTML file containing the structure of the app.
- **`style.css`**: Contains the styling for the app, including keyframes, layout, and form elements.
- **`script.js`**: Manages the app's functionality, including task management, Flatpickr integration, and localStorage operations.

## CSS Classes and Their Functions

- **`.container`**: Styles the main container with rounded corners and a shadow effect.
- **`.typewriter`**: Applies typewriter animation to the title.
- **`input[type="text"]`**: Styles input fields with padding, borders, and transitions.
- **`button`**: Styles the add button with a color transition and hover effects.
- **`ul` and `li`**: Styles the task list and individual tasks, including hover and completed states.
- **`.task-item`**: Styles individual task list items with checkboxes and details.
- **`.delete-button`**: Styles the delete button with hover effects.

## Flatpickr Integration

Flatpickr is used to provide a modern and user-friendly date picker. It is initialized with the following options:
- **`dateFormat`:** `"Y-m-d"` for the date format.
- **`minDate`:** `"today"` to restrict selection to future dates.
- **`defaultDate`:** Set to the current date.
- **`theme`:** `"dark"` for a dark-themed calendar.

## Installation and Usage

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/reminder-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd reminder-app
    ```
3. Open `index.html` in your web browser to use the app.

## Contributing

Feel free to submit issues, fork the repository, and create pull requests for improvements. 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
