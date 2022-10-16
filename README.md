# [government_transparency]
This public repository is published by the Neural Nerds following a participation in the iLab2 (Spring 2022) - ARDC | Government Transparency project. \
Click the following link to open the **network map**. /
[Network Map](https://rawcdn.githack.com/ryananalytix/government_transparency/main/gephi/prototype_1.3/network/index.html)

![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/NN_project_overview.png?raw=true)

## [User Guide]
## Context
Significant business interests in public health and climate change sectors can often drastically impact governmental policies through political funding, lobbying, donations, and quid-pro-quo practices. However, these business interests may often conflict with the public interest. Therefore, transparency of these interactions between parties is paramount to delivering democratic accountability to those who have a hand navigating critical societal issues.
However, the current state of information regarding these dealings is messy, disjointed, and challenging for most individuals to parse and understand. Laborious efforts to manually connect the dots between thousands of entities are time-consuming and impractical, especially for the average citizen.
The Project aims to utilise these existing data sources from governmental and private agencies in an effort to deliver a platform that provides a better understanding of governmental transparency and investigate methods and tools that can better elucidate the interconnections between various involved entities.

The scope of this Project is limited to producing prototype model outputs for **Queensland**, Australia only, amongst other data availability and technical constraints.

## Data Dictionaries
- [Data_dictionaries.pdf](https://github.com/ryananalytix/government_transparency/blob/main/Data_dictionaries.pdf)

## How to update data
### Prerequisites
- **Jupyter Notebook**

### Steps
1. First, fork this repository and clone it to your local machine.
2. Open '**NN_data_pipeline.ipynb**' in Jupyter Notebook
3. Install and load required packages
4. Run each cell at a time. 
(**Do not** use '**Run all**' as the '**run_spider()**' functions continue to run even after the focus has been moved to the next cell. Please confirm the end of execution visually before running the next cell.)
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/spider_closed.png?raw=true)

**Or alternatively**, contact the Contributors on this repository to request an update.

## How to update the Network map
### Prerequisites
- [Gephi](https://gephi.org/users/download/)
- **[Sigma.js]** In Gephi, Tools > Available Plugins > SigmaExporter > Install
- [Gephi Tutorial](https://blog.miz.space/tutorial/2020/01/05/gephi-tutorial-sigma-js-plugin-publishing-interactive-graph-online/)

### Steps
1. File > Import spreadsheet... \
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/step1.png?raw=true)

2. Open and load nodes (g_node.csv)\
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/step2.png?raw=true)

3. Next > \
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/step3.png?raw=true)

4. Finish \
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/step4.png?raw=true)

5. Check New workspace, then press OK \
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/step5.png?raw=true)

6. Now, we import Edges. Switch to Edges tab, then click Import spreadsheet. \
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/step6.png?raw=true)

7. Open and load edges (g_edge.csv) \
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/step7.png?raw=true)

8. Next > \
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/step8.png?raw=true)

9. Finish \
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/step9.png?raw=true)

10. [Important] Check 'Append to existing workspace', then press OK \
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/step10.png?raw=true)

11. Navigate to Overview tab, then in the Layout panel, select 'Force Atlas - 3D' and Run.  \
(The algorithm will commence running and nodes will come to live. Let it run while we configure the remaining settings.) \
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/step11.png?raw=true)

12. On Nodes panel, navigate to Partition tab, and select 'node color' from the option and Apply. \
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/step12.png?raw=true)

13. Now select the Size option, and select the node weight option. Set range, then Apply. \
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/step13.png?raw=true)

14. Navigate to Edges panel, and move to Ranking tab. Select Weight option, then Apply \
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/step14.png?raw=true)

15. We just need to export the package now. Go to File > Export > Sigma.js template... \
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/step15.png?raw=true)

16. Click Browse... \
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/step16.png?raw=true)

17. Create a new folder, then select the new folder. Lastly, click Save. \
![alt text](https://github.com/ryananalytix/government_transparency/blob/main/image/manual_img/step17.png?raw=true)

18. Now, push and update the exported package on the repository. \

Once the package is located on the server, open the Index.html file using the githack wrapper. \
Simply replace the https://github.com/ with https://rawcdn.githack.com/. 

For example,
https://github.com/<!--This is a comment-->ryananalytix/government_transparency/blob/main/gephi/prototype_1.3/network/index.html
 >> <!--This is a comment-->https://rawcdn.githack.com/<!--This is, too-->ryananalytix/government_transparency/main/gephi/prototype_1.3/network/index.html
