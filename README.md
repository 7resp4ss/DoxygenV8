# DoxygenV8 Documentation

This project automates the generation of V8 documentation using [Doxygen](https://www.doxygen.nl/) and deploys it to a static site hosted at https://<username\>.github.io/DoxygenV8. The documentation is generated via GitHub Actions, scheduled monthly on the 1st.

# Features

- Automated Documentation: Generates V8 documentation using Doxygen.
- GitHub Actions Integration: Supports both automated and manual workflow triggers to build and deploy documentation.
- Static Site Hosting: Hosts the generated documentation on GitHub Pages.
  - Example: https://7resp4ss.github.io/DoxygenV8
- Customizable Workflow: Easily configure Doxygen settings and GitHub Actions for your needs.

# Prerequisites

To set up or contribute to this project, ensure you have the following:

- [Doxygen](https://www.doxygen.nl/download.html) installed locally (for manual generation).
- A GitHub account with GitHub Pages enabled.
- Basic knowledge of Git, GitHub Actions, and Doxygen configuration.

# Setup and Usage

## Local Generate

### Clone the Repository

```bash
git clone https://github.com/7resp4ss/DoxygenV8.git
cd DoxygenV8
```

### Configure Doxygen

- The Doxygen configuration file (Doxyfile) is located in the repository root.
- Modify the Doxyfile to customize the documentation output (e.g., **input path**, **output directory**, or HTML settings).
- Generate Documentation Locally (Optional)

### Generate

```bash
doxygen Doxyfile
```

The output will be generated in the directory specified in the Doxyfile (default: ./docs).

## GitHub Actions Workflow

The repository includes a GitHub Actions workflow (.github/workflows/doxygen.yml) that:

- Runs Doxygen to generate documentation.
- Deploys the output to GitHub Pages.

### Trigger the Workflow

- Automatic Trigger: Push changes to the main branch to automatically run the workflow.
- Manual Trigger: Go to the "Actions" tab in the GitHub repository, select the create workflow, and click "Run workflow."
- View the Documentation

Once the workflow completes, the generated documentation is available at https://<username\>.github.io/DoxygenV8.

### Project Structure

```text
DoxygenV8/
├── Doxyfile              # Doxygen configuration file
├── docs/                 # Generated documentation output
├── .github/workflows/    # GitHub Actions workflow files
│   └── doxygen.yml       # Workflow for building and deploying docs
└── README.md             # This file
```



# License

This project is licensed under the MIT License (LICENSE).
