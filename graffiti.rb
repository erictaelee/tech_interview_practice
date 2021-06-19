require 'http'

#find ward from alderman
response = HTTP.get("https://data.cityofchicago.org/resource/htai-wnw4.json?$q=Hopkins")

p response.parse[0]["ward"]