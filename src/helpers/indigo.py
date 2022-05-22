from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import traceback
import time


def invoke_robotic_search(source, destination, year, month, date, pax):
    htmldata = []
    url = 'https://www.goindigo.in/partner-login.html?linkNav=partner-login_header'
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument("--window-size=1920,1080")
    chrome_options.add_argument("--disable-extensions")
    chrome_options.add_argument("--proxy-server='direct://'")
    chrome_options.add_argument("--proxy-bypass-list=*")
    chrome_options.add_argument("--start-maximized")
    chrome_options.add_argument('--disable-gpu')
    chrome_options.add_argument('--disable-dev-shm-usage')
    chrome_options.add_argument('--ignore-certificate-errors')
    timeout = 20
    driver = webdriver.Chrome(options=chrome_options, service_args=['--verbose', '--log-path=/tmp/chromedriver.log'])
    try:
        driver.get(url)
        username = driver.find_element_by_name('agentLogin.Username')
        password = driver.find_element_by_name('agentLogin.Password')
        submit = driver.find_element_by_xpath(
            '/html/body/div[3]/section/div[3]/div[1]/div/div/div/div/div/div/div/div/form/div[4]/div[1]/button')
        username.send_keys('KTMAA056')
        password.send_keys('Travel@2019')
        print(username)
        # return username
        # submit.click()
        # time.sleep(10)
        # WebDriverWait(driver,timeout).until(EC.invisibility_of_element_located((By.ID,'genericModal')))
        # WebDriverWait(driver, timeout).until(EC.visibility_of_element_located((By.NAME, 'or-src')))
        # driver.find_element_by_name('or-src').click()
        # driver.find_element_by_name('or-src').send_keys(source)
        # driver.find_element_by_name('or-src').send_keys(Keys.ENTER)
        # time.sleep(1)
        # driver.find_element_by_name('or-dest').click()
        # driver.find_element_by_name('or-dest').send_keys(destination)
        # driver.find_element_by_name('or-dest').send_keys(Keys.ENTER)
        # time.sleep(1)
        # req_day = date
        # req_mth = month
        # req_yr = year
        # div_set = False
        # div_num = None
        # while not div_set:
        #     f_mth = driver.find_element_by_xpath(
        #         '/html/body/div[3]/section/div[2]/div/div[1]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[3]/div/div[1]/div/div/span[1]').text
        #     f_yr = driver.find_element_by_xpath(
        #         '/html/body/div[3]/section/div[2]/div/div[1]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[3]/div/div[1]/div/div/span[2]').text
        #     l_mth = driver.find_element_by_xpath(
        #         '/html/body/div[3]/section/div[2]/div/div[1]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[3]/div/div[2]/div/div/span[1]').text
        #     l_yr = driver.find_element_by_xpath(
        #         '/html/body/div[3]/section/div[2]/div/div[1]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[3]/div/div[2]/div/div/span[2]').text
        #     if f_mth == req_mth and f_yr == req_yr:
        #         div_num = 1
        #         div_set = True
        #         break
        #     if l_mth == req_mth and l_yr == req_yr:
        #         div_num = 2
        #         div_set = True
        #         break
        #     driver.find_element_by_xpath(
        #         '/html/body/div[3]/section/div[2]/div/div[1]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[3]/div/div[2]/div/a').click()
        #     time.sleep(1)
        # for i in range(1, 6):
        #     for j in range(1, 8):
        #         dval = driver.find_element_by_xpath(
        #             '/html/body/div[3]/section/div[2]/div/div[1]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[3]/div/div[' + str(
        #                 div_num) + ']/table/tbody/tr[' + str(i) + ']/td[' + str(j) + ']')
        #         if dval.text == str(req_day):
        #             dval.click()
        #             break
        # if pax > 1:
        #     driver.find_element_by_name('passenger').click()
        #     WebDriverWait(driver, timeout).until(EC.presence_of_element_located((By.CLASS_NAME, 'pax-plus')))
        #     for i in range(1, pax):
        #         driver.find_element_by_xpath(
        #             '/html/body/div[3]/section/div[2]/div/div[1]/div/div/div/div[2]/div[1]/form/div[5]/div[1]/div[2]/ul/li[1]/div/button[2]/span').click()
        #     driver.find_element_by_xpath(
        #         '/html/body/div[3]/section/div[2]/div/div[1]/div/div/div/div[2]/div[1]/form/div[5]/div[1]/div[2]/div/button').click()
        # driver.find_element_by_xpath(
        #     '/html/body/div[3]/section/div[2]/div/div[1]/div/div/div/div[2]/div[1]/form/div[7]/div[6]/button').click()
        # WebDriverWait(driver, timeout).until(EC.visibility_of_element_located((By.CLASS_NAME, 'trips-body')))
        # time.sleep(1)
        # search_result = driver.find_elements_by_class_name('trips-row')
        # search_count = len(search_result)
        # for i in range(0, search_count):
        #     try:
        #         flight_details = search_result[i].find_element_by_xpath('.//div[1]/div/div[1]').text
        #         flight_details = flight_details.strip()
        #         flight_time = search_result[i].find_element_by_xpath('.//div[1]/div/div[2]').text
        #         duration = search_result[i].find_element_by_xpath('.//div[1]/div/div[3]').text
        #         if duration == 'REVISED TIME':
        #             duration = search_result[i].find_element_by_xpath('.//div[1]/div/div[5]').text
        #         saver = search_result[i].find_element_by_xpath('.//div[2]/div/div[1]/label').text
        #         corp = search_result[i].find_element_by_xpath('.//div[2]/div/div[4]/label').text
        #         if ',' in saver:
        #             if '\n' in saver:
        #                 saver = int(saver.split('\n')[0].split(u"\u20B9")[1].replace(',', ''))
        #             else:
        #                 saver=int(saver.split(u"\u20B9")[1].replace(',', ''))
        #         if ',' in corp:
        #             if '\n' in corp:
        #                 corp = int(corp.split('\n')[0].split(u"\u20B9")[1].replace(',', ''))
        #             else:
        #                 corp = int(corp.split(u"\u20B9")[1].replace(',', ''))
        #         htmldata.append([flight_details, flight_time, duration, saver, corp, 'INDIGO'])
        #     except:
        #         traceback.print_exc()
        #         print(search_result[i].text)
        # WebDriverWait(driver, timeout).until(EC.visibility_of_element_located((By.ID, 'header-login-mount')))
        # driver.find_element_by_id('header-login-mount').find_element_by_class_name('avatar').click()
        # time.sleep(1)
        # driver.find_element_by_id('header-login-mount').find_element_by_xpath('.//div/a[2]').click()
        # time.sleep(1)
    except Exception as e:
        print(e)
        traceback.print_exc()
        driver.save_screenshot('/tmp/indigo_{}.png'.format(time.time()))
        htmldata.append(['NA', 'NA', 'NA', 'NA', 'NA', 'INDIGO'])
    driver.quit()
    return htmldata