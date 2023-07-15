import React from "react";

const CommunityCard = ({
  title,
  description,
  author,
  comments,
  image,
  solved,
}) => {
  const bgClass = solved ? "bg-green-600" : "bg-red-600";
  const fullClass = `-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl ${bgClass} px-3 py-1.5 text-white`;
  return (
    <div>
      <article class="rounded-xl border-2 border-gray-100 bg-white">
        <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
          <a href="#" class="block shrink-0">
            <img
              alt="Speaker"
              src={image}
              class="h-14 w-14 rounded-lg object-cover"
            />
          </a>

          <div>
            <h3 class="font-medium sm:text-lg">
              <a href="#" class="hover:underline">
                {title}
              </a>
            </h3>

            <p class="line-clamp-2 text-sm text-gray-700">{description}</p>

            <div class="mt-2 sm:flex sm:items-center sm:gap-2">
              <div class="flex items-center gap-1 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>

                <p class="text-xs">{comments} comments</p>
              </div>

              <span class="hidden sm:block" aria-hidden="true">
                &middot;
              </span>

              <p class="hidden sm:block sm:text-xs sm:text-gray-500">
                Posted by &nbsp;
                <a href="#" class="font-medium underline hover:text-gray-700">
                  {author}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-end">
          <strong className={fullClass}>
            {solved ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}

            <span class="text-[10px] font-medium sm:text-xs">
              {solved ? "Solved!" : "Unsolved!"}
            </span>
          </strong>
        </div>
      </article>
    </div>
  );
};

export default CommunityCard;
