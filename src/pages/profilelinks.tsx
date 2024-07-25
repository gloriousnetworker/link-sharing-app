const Profilelinks = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-3xl p-4 max-w-xs w-full mb-8 mt-2 pb-40 border border-black">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-24 h-24">
            <img
              src="/path-to-placeholder-image.jpg"
              alt="Profile"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="text-gray-900 text-lg font-semibold">Name Placeholder</div>
          <div className="text-gray-500 text-sm">email@example.com</div>
        </div>
        <div className="mt-6 space-y-5"> {/* 25px gap */}
          <a href="https://github.com" className="flex items-center justify-between bg-black text-white px-4 py-3 rounded-lg mb-5"> {/* 20px gap between links */}
            <span className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.579 0-.287-.01-1.044-.016-2.051-3.338.724-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.758-1.333-1.758-1.089-.744.082-.729.082-.729 1.204.085 1.837 1.237 1.837 1.237 1.07 1.833 2.809 1.303 3.495.997.108-.774.418-1.304.761-1.605-2.666-.305-5.467-1.334-5.467-5.933 0-1.31.467-2.381 1.235-3.221-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.303 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.293-1.552 3.299-1.23 3.299-1.23.655 1.653.243 2.873.119 3.176.771.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.625-5.475 5.921.43.372.823 1.103.823 2.222 0 1.606-.014 2.896-.014 3.293 0 .321.192.694.801.577C20.565 21.796 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </span>
            <span>&rarr;</span>
          </a>
          <a href="https://youtube.com" className="flex items-center justify-between bg-red-600 text-white px-4 py-3 rounded-lg mb-5">
            <span className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184A3.043 3.043 0 0 0 17.789 3C15.766 3 12 3 12 3s-3.766 0-5.789.184c-.841.05-1.562.335-2.292.984C3.121 5.213 3 6.473 3 6.473s-.004 1.203-.004 2.41v2.235c0 1.207.004 2.41.004 2.41s.121 1.26.715 1.888c.73.648 1.451.933 2.292.984C8.234 17 12 17 12 17s3.766 0 5.789-.184c.841-.05 1.562-.335 2.292-.984.594-.628.715-1.888.715-1.888s.004-1.203.004-2.41v-2.235c0-1.207-.004-2.41-.004-2.41s-.121-1.26-.715-1.888a3.043 3.043 0 0 0-2.174-.832zM10 14.333V9.667L14.667 12 10 14.333z" />
              </svg>
              <span>YouTube</span>
            </span>
            <span>&rarr;</span>
          </a>
          <a href="https://linkedin.com" className="flex items-center justify-between bg-blue-700 text-white px-4 py-3 rounded-lg">
            <span className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.795-1.75-1.732s.784-1.732 1.75-1.732 1.75.795 1.75 1.732-.784 1.732-1.75 1.732zm13.5 10.268h-3v-4.5c0-1.108-.896-2-2-2s-2 .892-2 2v4.5h-3v-9h3v1.268c.42-.638 1.488-1.268 2.5-1.268 2.142 0 3.5 1.69 3.5 3.75v5.25z" />
              </svg>
              <span>LinkedIn</span>
            </span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profilelinks;
