import type React from "react";
import Marquee from "react-fast-marquee";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    content: "Excellent service and professional staff!",
    date: "April 09, 2022",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    content: "Quick response time and thorough work. Highly recommended!",
    date: "May 15, 2022",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    content: "Fair pricing and great customer service. Will use again!",
    date: "June 22, 2022",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const ReviewSection: React.FC = () => {
  return (
    <section id="reviews" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Reviews
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-lg:hidden">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="block lg:hidden">
          <Marquee>
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

interface Review {
  id: number;
  name: string;
  content: string;
  date: string;
  image: string;
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            className="w-12 h-12 rounded-full object-cover mr-4"
            src={review.image || "/placeholder.svg"}
            alt={review.name}
          />
          <div>
            <h3 className="font-semibold text-gray-900">{review.name}</h3>
            <p className="text-sm text-gray-600">{review.date}</p>
          </div>
        </div>
        <p className="text-gray-700">{review.content}</p>
      </div>
    </div>
  );
};

export default ReviewSection;
