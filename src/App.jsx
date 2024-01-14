import ilustration from './assets/images/illustration-article.svg';
import avatar from './assets/images/image-avatar.webp';

function App() {
  return (
    <div className="bg-[#f3d34c] min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col p-3 bg-white shadow-2xl shadow-black w-[250px] rounded-xl">
        <div>
          <img
            src={ilustration}
            alt="ilustration"
            className="object-fill rounded-xl"
          />
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <div className="flex flex-col gap-3">
            <div className="text-black font-bold text-center text-sm bg-[#f3d34c] w-20">
              <span className=" ">Learning</span>
            </div>
            <p className="text-xs text-black">Published 21 Dec 2023</p>
          </div>
          <h1 className="font-bold text-lg hover:text-[#f3d34c] hover:cursor-pointer">
            HTML & CSS foundations
          </h1>
          <p className="text-wrap text-[#a4a08f] text-sm">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <div className="flex flex-row gap-2 items-center">
            <div className="w-5 h-5">
              <img
                src={avatar}
                alt="profile"
                className="object-fill rounded-full"
              />
            </div>
            <span className="font-bold text-sm">Greg Hoper</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
