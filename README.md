<h1 align="center">Simple Box Shadow Generator</h1>



<p align="center">
  <strong>A simple React application to generate CSS box shadows.</strong>
</p>

## Getting Started

To use this application, follow these steps:

1. Clone the repository: `git clone git@github.com:Nik0Sp/simple_box_shadow_generator.git`
2. Change directory to the project folder: `cd simple_box_shadow_generator`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to see the application in action.

##  Usage

The application provides sliders and input fields to control the properties of the CSS box shadow. By adjusting the sliders and input fields, users can create custom box shadow effects. The generated CSS code is displayed in the output textarea.

To copy the CSS code, click the "Copy" button. The code will be automatically selected and copied to the clipboard. An alert will be shown to indicate that the code has been copied.

## Components

The main component of the application is `App`, which handles the generation and manipulation of the box shadow.

### State and Effects

The `useEffect` hook is used to set up event listeners and handle changes in the application.

- The `generateShadow` function is called whenever any of the sliders or input fields change. It calculates the box shadow properties and updates the element accordingly.
- The `copyCode` function is called when the "Copy" button is clicked. It selects and copies the CSS code to the clipboard.

### Helper Functions

- The `hexToRgba` function converts a hexadecimal color code to an RGBA color value with opacity.

### JSX Markup

The JSX markup in the `return` statement defines the structure and appearance of the application's user interface. It includes sliders for adjusting the box shadow properties, an input field for specifying the shadow color, a checkbox for toggling the inset shadow, an output textarea to display the generated CSS code, and a "Copy" button.

##  Contributions

Contributions to this project are welcome. If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

##  License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code as per the license terms.