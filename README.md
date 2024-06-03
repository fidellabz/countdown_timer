# Countdown Timer

A simple countdown timer application built with React and Vite. Users can input the number of seconds for the countdown, start the timer, pause it, and reset it.

## Features

- **Set Timer**: Input the number of seconds for the countdown.
- **Start Timer**: Start the countdown.
- **Pause Timer**: Pause the countdown.
- **Reset Timer**: Reset the countdown to zero.

## Demo

You can see a live demo of the application [here](https://kodecamp-countdown-timer.vercel.app).

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Vscode
- Node.js
- npm (or yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fidellabz/countdown-timer.git
   cd countdown-timer
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Code Overview

### `App.jsx`

This is the main component that manages the state and renders other components. It includes the countdown logic and controls the timer.

### `TimerInput.jsx`

A component for setting the countdown time.

### `TimerDisplay.jsx`

A component that displays the remaining time. The time is also shown as a heading at the top of the page.

### `TimerControls.jsx`

A component for starting, pausing, and resetting the timer.

### `App.css`

Contains the styling for the application, including modern and appealing styles for the input box, buttons, and heading.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Vercel](https://vercel.com/)

## Author

- **Fidelis Ogbeni** - [fidelllabz](https://github.com/fidellabz)

---

Feel free to modify this README file according to your needs and replace placeholders like `fidellabz` and `Fidelis Ogbeni` with your actual GitHub username and name.
