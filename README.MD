# About

The Command GUI Operating System (CGOS) is a project that aims to provide a simple and intuitive interface for running commands and scripts on your computer. The project is built using the Tauri framework, which allows you to create desktop applications using web technologies like HTML, CSS, and JavaScript.

## An alias alternative
> Enhance your commands and environment with custom themes for scripts and commands.

CGOS is an alternative to using alias in your .bashrc. With CGOS, you can create custom commands and scripts that can be run with a single click. You can also organize your commands into categories and subcategories to keep things organized.


## Custom themes

CGOS allows you to create custom themes for your commands and scripts. You can choose from a variety of pre-built themes or create your own using CSS. This allows you to customize the look and feel of your commands to suit your preferences.

## Tauri Project

This is a Tauri project. Follow the instructions below to set up, run, and build the project.

## Prerequisites

Make sure you have the following tools installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/)
- [Rust](https://www.rust-lang.org/tools/install)
- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
- [Tauri CLI](https://tauri.app/v1/guides/getting-started/prerequisites#installing-tauri-cli)

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:gabriel-scripts/CGOS.git

   cd cgos/
    ```
2. install de project dependencies:

   ```bash
   npm install
   ```

3. Run the project:

   ```bash
   npm run tauri dev
   ```
   
4. build the project:

   ```bash
   npm run tauri build
   ```