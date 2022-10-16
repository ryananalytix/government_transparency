# [government_transparency]
This public repository is published by the Neural Nerds following a participation in the iLab2 (Spring 2022) - ARDC | Government Transparency project. \
Click the following link to open the **network map**.
(https://rawcdn.githack.com/ryananalytix/government_transparency/main/gephi/prototype_1.3/network/index.html)

![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/NN_project_overview.png?raw=true)

## [User Guide]
## Context
Significant business interests in public health and climate change sectors can often drastically impact governmental policies through political funding, lobbying, donations, and quid-pro-quo practices. However, these business interests may often conflict with the public interest. Therefore, transparency of these interactions between parties is paramount to delivering democratic accountability to those who have a hand navigating critical societal issues.
However, the current state of information regarding these dealings is messy, disjointed, and challenging for most individuals to parse and understand. Laborious efforts to manually connect the dots between thousands of entities are time-consuming and impractical, especially for the average citizen.
The Project aims to utilise these existing data sources from governmental and private agencies in an effort to deliver a platform that provides a better understanding of governmental transparency and investigate methods and tools that can better elucidate the interconnections between various involved entities.

The scope of this Project is limited to producing prototype model outputs for **Queensland**, Australia only, amongst other data availability and technical constraints.

## How to update data
### Prerequisites
- **Jupyter Notebook**

1. First, fork this repository and clone it to your local machine.
2. Open 'NN_data_pipeline.ipynb' in Jupyter Notebook
3. Install and load required packages
4. Run each cell at a time. 
(Do not use 'Run all' as the 'run_spider()' functions continue to run even after the focus has been moved to the next cell. Please confirm the end of execution visually before running the next cell.)
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/spider_closed.png?raw=true)

**Or alternatively**, contact the Contributors on this repository to request an update.

## How to update the Network map
### Prerequisites
- [Gephi](https://gephi.org/users/download/)
- **[Sigma.js]** In Gephi, Tools > Available Plugins > SigmaExporter > Install
- [Gephi Tutorial](https://blog.miz.space/tutorial/2020/01/05/gephi-tutorial-sigma-js-plugin-publishing-interactive-graph-online/)



