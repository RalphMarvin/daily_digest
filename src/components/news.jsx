import {Card, CardContent, CardFooter, CardHeader, Link, List, ListItem} from "framework7-react";
import {useEffect, useState} from "react";
import axios from "axios";
import moment from 'moment';
import NewsSkeleton from "@/components/news-skeleton";

const NewsArticles = () => {
  const dateStyle = {
      fontSize: '13px',
      color: '#eee',
  };

  const cardStyle = (imageUrl) => {
      return {
          height: '40vw',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${imageUrl})`,
      };
  };

  const [loading, setLoading] = useState(false);
  const [newsList, setNewsList] = useState([]);

  const getNewsContent = async () => {
      setLoading(true);
      const response = await axios.get('https://newsapi.org/v2/everything?q=apple+google&from=2023-07-20&to=2023-07-20&sortBy=popularity&apiKey=8a9e4a11260d40a78da831a688493940');
      setNewsList(response.data.articles);
      setLoading(false);
      console.log(newsList.length);
  };

  useEffect(() => {
      getNewsContent().then();
  }, []);

  return loading === true ? (
      <NewsSkeleton cardStyle={() => cardStyle('unknown')} dateStyle={dateStyle} />
  ) : (
      <List>
          {newsList.map((news, i) => (
              <Card key={i} outlineMd className="demo-card-header-pic">
                  <CardHeader valign="bottom" style={cardStyle(news.urlToImage)}></CardHeader>
                  <CardContent>
                      <h2 className="newsTitle">{ news.title }</h2>
                      <p style={dateStyle}>Published at { moment(news.publishedAt).format('ll') }</p>
                      <p className="newsDescription">{ news.description }</p>
                  </CardContent>
                  <CardFooter>
                      <Link>Save</Link>
                      <Link>Read more</Link>
                  </CardFooter>
              </Card>
          ))}
      </List>
  );
};

export default NewsArticles;
