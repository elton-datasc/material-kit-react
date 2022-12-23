import scrapy


class IbanezSpider(scrapy.Spider):
    name = 'ibanez'
    start_urls = []

    def __init__(self):
        url = 'https://www.barramusic.com.br/categoria/cordas-guitarras/35143?_=1669153524697&page='

        for page in range(1, 161):
            self.start_urls.append(url + str(page))

    def parse(self, response):
        for guitarra in response.css('.item-meta-container'):
            yield {
                "guitarra": guitarra.css('.item-name a::text').get(),
                "preco_de": guitarra.css('.preco-de span::text').get(),
                "preco_por": guitarra.css('.preco-por span::text').get(),
                "preco_a_vista": guitarra.css('.a-vista span:nth-child(1) ::text').get()
            }