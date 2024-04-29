# NIFTY50_Stock_Price_Prediction  
![image](https://github.com/kteshubham256/Script-Sanskar-2345/assets/148578267/7a2efc15-8a2d-43a3-a9b2-5b73b71a630e)


This project centers around the prediction of stock prices for NIFTY-50 stocks, employing a robust model trained on a comprehensive dataset spanning four years of historical data. Users have the flexibility to input their stock preferences, specify quantities, and designate buying and selling dates, enabling thorough portfolio analysis. Whether forecasting future prices or leveraging historical data, the model efficiently computes the portfolio's returns. Furthermore, seamless integration with Google Sheets enhances user convenience, offering a potent tool for investors to make well-informed decisions and conduct insightful analyses of their investments.

## Folder Structure
| Files | Description |
|-------| ------------|
| **NIFTY50_Stocks_Data_ipynb** | this folder houses all python codes with functions, from data collection to model creation.|
| **stock_model_joblib** | This file has trained model which we used for the prediction. |
| **NIFTY50_stock_list_csv** |  This file has all nifty-50 stock list. |
| **README.md** | "README.md" serves as the project's informational documentation. |
| **HTML_CSS_JS** |  This files have all the frontend code for webpage. |

## Introduction  
- As an investment advisor, our goal with this project was to forecast future prices of Nifty50 stocks using advanced machine learning algorithms.
- Investors can leverage our model for informed decision-making based on data-driven insights.
- The platform enables users to input stock details and receive estimated profit/loss approximations, empowering investors to optimize portfolios and improve trading 
  strategies with dependable forecasts.

## Objectives

**Objectives:**  
* Highlighting Nifty50 Significance
* Data Source Overview
* Validation of Model Accuracy
* Dynamic Profit/Loss Prediction
* Real-world Application Showcase
* Future Plans and Scalability

**Problem Statement:**
- Develop a script for extracting historical data of NIFTY-50 stocks over the past four years, ensuring a reliable and up-to-date dataset for analysis.
- Implement machine learning models for predicting stock prices individually for each NIFTY-50 stock, tailoring the predictions to specific market behaviors.
- Create a robust logic for calculating returns, allowing users to assess their investments based on either predicted or historical stock prices.
- Facilitate seamless interaction by integrating the tool with Google Sheets, allowing users to input data and receive outputs conveniently within a familiar spreadsheet 
  environment.
- Design an appealing front-end interface that provides users with essential portfolio statistics, ensuring a user-friendly experience for effective data interpretation.
- Deliver a comprehensive tool that combines stock predictions and portfolio analysis, empowering users with a holistic solution for making informed investment decisions.
- Establish a plan for scalability and ongoing maintenance to accommodate potential updates, ensuring the tool's continued relevance and effectiveness in the dynamic stock 
  market landscape.

## Importance of Nifty50
![Picture1](https://github.com/mdkamran048/NIFTY50_Stock_Price_Prediction/assets/143988392/a63ba5f3-e37d-4189-8663-5be58c4d13d0)

- Nifty50 is India's benchmark stock market index, representing the performance of the top 50 companies in the country
- It serves as a crucial indicator of the overall health and direction of the Indian economy.
- Nifty50 significantly influences investor sentiment, guiding investment decisions and portfolio strategies.
- The index reflects market trends, helping investors gauge the overall performance and direction of the stock market.

## Preprocessing

**Data Collection :**  
- Data sourced exclusively from official and reputable websites, including "https://finance.yahoo.com/".
- Four years of NIFTY50 stock information extracted meticulously to ensure dataset reliability and credibility.

**Null and Noise Handling:** 
- Thorough assessment conducted to identify and address null values in the dataset.
- Implemented noise reduction techniques to enhance data accuracy, ensuring a cleaner dataset.

**Unwavering Data Type Uniformity:**   
- Meticulous standardization of data types applied consistently across the entire dataset.
- Eliminated discrepancies and irregularities in data types, promoting seamless data processing and accurate analytical insights.

**Data Size and Structure Assessment:** 
- Comprehensive evaluation performed on the size and shape of each data table.
- Provides an insightful understanding of the dataset's intricate structure, laying the foundation for comprehensive data analysis.

**Strategic Data Compilation and Filtering:**  
- Aggregated and organized NIFTY-50 stock data by stock names for easy data filtration and retrieval.
- Enables precise selection and extraction of data relevant to users' preference of stock for predicting profit or loss based on specific buying and selling dates.

**Cleaned Data**  
![image](https://github.com/kteshubham256/Script-Sanskar-2345/assets/148578267/288f1925-43af-48c1-9933-15b775dd5dfc)



By executing these preprocessing steps, the dataset was refined, cleaned, and made ready for further analysis, establishing a solid foundation for accurate prediction.

## Model Building

- Our machine learning model employs polynomial regression for predicting profit/loss in Nifty50 stocks.
- The precision of these predictions aids investors in making well-informed decisions.
- The model undergoes training on historical stock data, ensuring its reliability in capturing market trends.
- It features a user-friendly interface, enabling users to easily input stock details and receive accurate predictions.
- This project serves as a tangible demonstration of how Artificial Intelligence and Machine Learning can be applied to real-world financial analysis, showcasing their 
  practical utility in the field.


## Model Application

- Informed Investment Decisions  
- Risk Management  
- Portfolio Optimization  
- Financial Planning  
- Enhancing Market Understanding  
- Empowering Individual Investors  
- Confidence in Decision-making  
- Validating Existing Strategies  
- Future Applications
  
![image](https://github.com/kteshubham256/Script-Sanskar-2345/assets/148578267/bb27ceb7-22ed-45c7-a75a-2f019e5fb068)



- Our model will leverages the power of data and machine learning to empower investors and traders with valuable insights, fostering data-driven decision-making and enhancing overall performance in the financial sector.

## Future Plan

* Integrate live data fetching to enhance model accuracy with real-time information.
* Deploy the automated model on a server for user access, providing a convenient and accessible platform for real-time predictions.

## Model Limitation  
**Limited data:**  
- Utilizing only 4 years of historical data might not capture long-term trends and patterns that could significantly influence stock prices.
  
**Overfitting risk:**  
- Polynomial regression may lead to overfitting due to its sensitivity and small fluctuations in the data.
  
**Limited input features:**  
- Relying solely on close price, volume, and date might not encompass all relevant factors impacting stock performance.
  
**Market complexity:**  
- The stock market is influenced by multifaceted factors, including geopolitical events, macroeconomic and microeconomic trends, which may not be accounted for in the model.

## Challenges
- Initial challenges were encountered in seamlessly integrating the machine learning model with Google Cloud and Google Sheets, necessitating thorough problem-solving to 
  ensure a smooth connection.
- Deploying the model on the web page presented challenges in optimizing performance and ensuring the web page's functionality. Overcoming these hurdles was crucial for 
  providing users with an efficient and responsive platform.
- Coordinating the development of both frontend and backend components proved to be a complex task, requiring careful synchronization to achieve a seamless and user- 
  friendly experience.
- Overcoming challenges in data handling and processing was essential to deliver accurate predictions to users. Addressing these hurdles involved implementing robust 
  solutions for efficient data management within the model.

## Learning
**Data collection from yfinance:**  
- Attained a high level of competence in web scraping techniques, enabling efficient and reliable data acquisition from online sources, notably exemplified by NIFTY50 stock price data extraction.

**Data Preprocessing Expertise:**  
- Cultivated strong skills in data cleaning and preprocessing, ensuring the data's integrity, consistency, and suitability for analysis and prediction. 

**Machine Learning Integration:**  
- Successfully integrated machine learning models with Google Sheets, showcasing the ability to bridge the gap between data analysis and real-world applications, particularly in the context of stock price prediction.

**Insightful Data Analysis:**  
- Acquired the capability to employ various analytical tools and methodologies to derive valuable insights from complex datasets, facilitating informed decision-making processes.

**Problem-Solving Aptitude:**  
- Applied data-driven insights and machine learning models to formulate pragmatic solutions to real-world challenges, exemplified by predicting NIFTY50 stock prices for future investment decisions.

**Interactive Webpage Creation:**  
- Developed proficiency in creating user-friendly web interfaces and interactive web pages, enhancing user engagement and facilitating data presentation in a user-friendly manner.

**Client Communication Skills:**  
- Strengthened the ability to effectively communicate with clients, addressing their queries, and tailoring data-driven solutions to meet their specific needs, thereby fostering strong client relationships.

**Project Management Competency:**  
- Demonstrated project management skills by effectively coordinating various tasks, from data acquisition and preprocessing to model integration and web development, ensuring project success and timeliness.

**Continuous Learning Mindset:**  
- Embraced a growth-oriented mindset, actively seeking out new techniques, tools, and technologies to stay at the forefront of data science and web development, thereby ensuring the project's ongoing relevance and effectiveness.

These learnings not only highlight our project's accomplishments but also underscore our growth and development as a data scientist and web developer, showcasing our ability to tackle complex challenges and deliver practical solutions.

## Conclusion  
* Our team has accomplished the development of a Google Sheet and a web-based machine learning model that employs polynomial regression for predicting profit/loss in 
  Nifty50 stocks.
* This user-friendly tool allows individuals to input stock details, quantity, and buying/selling dates, providing accurate predictions for their portfolios in terms of 
  profit or loss.

* This project stands as a testament to our collaborative efforts in applying artificial intelligence for practical financial analysis and decision-making. By successfully 
  integrating technology with financial insights, we've created a valuable resource for users seeking informed predictions in the dynamic landscape of Nifty50 stocks.

|---------------------------------------------------------------------------------------------------------------------------|
