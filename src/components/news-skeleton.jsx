import {Card, CardContent, CardFooter, CardHeader, Link, List} from "framework7-react";
const NewsSkeleton = ({ cardStyle, dateStyle }) => {
    return (
        <List>
            {[1,2,3,4,5,6].map((news, i) => (
                <Card key={i} outlineMd className="skeleton-text skeleton-effect-fade">
                    <CardHeader valign="bottom" style={cardStyle(news.urlToImage)}></CardHeader>
                    <CardContent>
                        <h2 className="newsTitle">Lorem ipsum dot sit amet consectueru rim pip lomt get desto</h2>
                        <p style={dateStyle}>Published at Jul 20, 2023</p>
                        <p className="newsDescription">Lorem ipsum dolor sit amet consectuer nolet met get not lot mieto jgoduetgd ipsum dolor sit amet consectuer nolet met get not lot mieto jgoduetgd</p>
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

export default NewsSkeleton;
