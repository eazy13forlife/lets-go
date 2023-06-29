import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import moment from "moment";

import "./EventCard.scss";

// {
//   "_embedded": {
//     "venues": [
//       {
//         "name": "Madison Square Garden",
//         "type": "venue",
//         "id": "KovZpZA7AAEA",
//         "test": false,
//         "url": "http://ticketmaster.com/venue/483329",
//         "locale": "en-us",
//         "postalCode": "10001",
//         "timezone": "America/New_York",
//         "city": {
//           "name": "New York"
//         },
//         "state": {
//           "name": "New York",
//           "stateCode": "NY"
//         },
//         "country": {
//           "name": "United States Of America",
//           "countryCode": "US"
//         },
//         "address": {
//           "line1": "7th Ave & 32nd Street"
//         },
//         "location": {
//           "longitude": "-73.99160060",
//           "latitude": "40.74970620"
//         },
//         "markets": [
//           {
//             "id": "35"
//           },
//           {
//             "id": "51"
//           },
//           {
//             "id": "55"
//           },
//           {
//             "id": "124"
//           }
//         ],
//         "dmas": [
//           {
//             "id": 200
//           },
//           {
//             "id": 296
//           },
//           {
//             "id": 345
//           },
//           {
//             "id": 422
//           }
//         ],
//         "_links": {
//           "self": {
//             "href": "/discovery/v2/venues/KovZpZA7AAEA?locale=en-us"
//           }
//         }
//       }
//     ],
//     "attractions": [
//       {
//         "name": "Radiohead",
//         "type": "attraction",
//         "id": "K8vZ91713wV",
//         "test": false,
//         "url": "http://ticketmaster.com/artist/763468",
//         "locale": "en-us",
//         "images": [
//           {
//             "ratio": "16_9",
//             "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_EVENT_DETAIL_PAGE_16_9.jpg",
//             "width": 205,
//             "height": 115,
//             "fallback": false
//           },
//           {
//             "ratio": "16_9",
//             "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_RETINA_LANDSCAPE_16_9.jpg",
//             "width": 1136,
//             "height": 639,
//             "fallback": false
//           },
//           {
//             "ratio": "16_9",
//             "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_RETINA_PORTRAIT_16_9.jpg",
//             "width": 640,
//             "height": 360,
//             "fallback": false
//           },
//           {
//             "ratio": "16_9",
//             "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_RECOMENDATION_16_9.jpg",
//             "width": 100,
//             "height": 56,
//             "fallback": false
//           },
//           {
//             "ratio": "3_2",
//             "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_RETINA_PORTRAIT_3_2.jpg",
//             "width": 640,
//             "height": 427,
//             "fallback": false
//           },
//           {
//             "ratio": "16_9",
//             "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_TABLET_LANDSCAPE_16_9.jpg",
//             "width": 1024,
//             "height": 576,
//             "fallback": false
//           },
//           {
//             "ratio": "3_2",
//             "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_ARTIST_PAGE_3_2.jpg",
//             "width": 305,
//             "height": 203,
//             "fallback": false
//           },
//           {
//             "ratio": "16_9",
//             "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_TABLET_LANDSCAPE_LARGE_16_9.jpg",
//             "width": 2048,
//             "height": 1152,
//             "fallback": false
//           },
//           {
//             "ratio": "3_2",
//             "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_TABLET_LANDSCAPE_3_2.jpg",
//             "width": 1024,
//             "height": 683,
//             "fallback": false
//           },
//           {
//             "ratio": "4_3",
//             "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_CUSTOM.jpg",
//             "width": 305,
//             "height": 225,
//             "fallback": false
//           }
//         ],
//         "classifications": [
//           {
//             "primary": true,
//             "segment": {
//               "id": "KZFzniwnSyZfZ7v7nJ",
//               "name": "Music"
//             },
//             "genre": {
//               "id": "KnvZfZ7vAeA",
//               "name": "Rock"
//             },
//             "subGenre": {
//               "id": "KZazBEonSMnZfZ7v6dt",
//               "name": "Alternative Rock"
//             }
//           }
//         ],
//         "_links": {
//           "self": {
//             "href": "/discovery/v2/attractions/K8vZ91713wV?locale=en-us"
//           }
//         }
//       }
//     ]
//   },
//   "_links": {
//     "self": {
//       "href": "/discovery/v2/events/G5diZfkn0B-bh?locale=en-us"
//     },
//     "attractions": [
//       {
//         "href": "/discovery/v2/attractions/K8vZ91713wV?locale=en-us"
//       }
//     ],
//     "venues": [
//       {
//         "href": "/discovery/v2/venues/KovZpZA7AAEA?locale=en-us"
//       }
//     ]
//   },
//   "classifications": [
//     {
//       "primary": true,
//       "segment": {
//         "id": "KZFzniwnSyZfZ7v7nJ",
//         "name": "Music"
//       },
//       "genre": {
//         "id": "KnvZfZ7vAeA",
//         "name": "Rock"
//       },
//       "subGenre": {
//         "id": "KZazBEonSMnZfZ7v6dt",
//         "name": "Alternative Rock"
//       }
//     }
//   ],
//   "dates": {
//     "start": {
//       "localDate": "2016-07-27",
//       "localTime": "19:30:00",
//       "dateTime": "2016-07-27T23:30:00Z",
//       "dateTBD": false,
//       "dateTBA": false,
//       "timeTBA": false,
//       "noSpecificTime": false
//     },
//     "timezone": "America/New_York",
//     "status": {
//       "code": "onsale"
//     }
//   },
//   "id": "G5diZfkn0B-bh",
//   "images": [
//     {
//       "ratio": "16_9",
//       "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_EVENT_DETAIL_PAGE_16_9.jpg",
//       "width": 205,
//       "height": 115,
//       "fallback": false
//     },
//     {
//       "ratio": "16_9",
//       "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_RETINA_LANDSCAPE_16_9.jpg",
//       "width": 1136,
//       "height": 639,
//       "fallback": false
//     },
//     {
//       "ratio": "16_9",
//       "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_RETINA_PORTRAIT_16_9.jpg",
//       "width": 640,
//       "height": 360,
//       "fallback": false
//     },
//     {
//       "ratio": "16_9",
//       "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_RECOMENDATION_16_9.jpg",
//       "width": 100,
//       "height": 56,
//       "fallback": false
//     },
//     {
//       "ratio": "3_2",
//       "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_RETINA_PORTRAIT_3_2.jpg",
//       "width": 640,
//       "height": 427,
//       "fallback": false
//     },
//     {
//       "ratio": "16_9",
//       "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_TABLET_LANDSCAPE_16_9.jpg",
//       "width": 1024,
//       "height": 576,
//       "fallback": false
//     },
//     {
//       "ratio": "3_2",
//       "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_ARTIST_PAGE_3_2.jpg",
//       "width": 305,
//       "height": 203,
//       "fallback": false
//     },
//     {
//       "ratio": "16_9",
//       "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_TABLET_LANDSCAPE_LARGE_16_9.jpg",
//       "width": 2048,
//       "height": 1152,
//       "fallback": false
//     },
//     {
//       "ratio": "3_2",
//       "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_TABLET_LANDSCAPE_3_2.jpg",
//       "width": 1024,
//       "height": 683,
//       "fallback": false
//     },
//     {
//       "ratio": "4_3",
//       "url": "http://s1.ticketm.net/dam/a/c4c/e751ab33-b9cd-4d24-ad4a-5ef79faa7c4c_72681_CUSTOM.jpg",
//       "width": 305,
//       "height": 225,
//       "fallback": false
//     }
//   ],
//   "locale": "en-us",
//   "name": "Radiohead",
//   "pleaseNote": "No tickets will be delivered prior to April 18th. Tickets are not available at the box office on the first day of the public on sale. ARRIVE EARLY: Please arrive one-hour prior to showtime. All packages, including briefcases and pocketbooks, will be inspected prior to entry.",
//   "priceRanges": [
//     {
//       "type": "standard",
//       "currency": "USD",
//       "min": 80,
//       "max": 80
//     }
//   ],
//   "promoter": {
//     "id": "494"
//   },
//   "sales": {
//     "public": {
//       "startDateTime": "2016-03-18T14:00:00Z",
//       "startTBD": false,
//       "endDateTime": "2016-07-27T21:30:00Z"
//     }
//   },
//   "test": false,
//   "type": "event",
//   "url": "http://ticketmaster.com/event/3B00506AA4EA161B"
// }

const EventCard = ({ image, dateTime, eventName, venue, category }) => {
  return (
    <Link className="EventCard">
      <div className="EventCard__image-container">
        <img src={image} className="EventCard__image" alt={eventName} />
      </div>
      <div className="EventCard__details">
        <div className="EventCard__month-date">
          <p className="EventCard__month">{moment(dateTime).format("MMM")}</p>
          <p className="EventCard__date">{moment(dateTime).date()}</p>
        </div>
        <div className="EventCard__info">
          <h2 className="EventCard__name">{eventName}</h2>
          <p className="EventCard__detail-text">{venue}</p>
          <p className="EventCard__detail-text">
            {`${moment(dateTime).format("dddd, MMMM Do YYYY")} at ${moment(
              dateTime
            ).format("h:mm a")}`}
          </p>
        </div>
        <div className="EventCard__icon-button">
          <AiOutlineStar className="EventCard__icon" />
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
