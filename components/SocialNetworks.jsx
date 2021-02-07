import Link from "next/link";
import { AiOutlineTwitter, AiOutlineGoogle } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { RiInstagramLine } from "react-icons/ri";

const SocialNetworks = () => {
  return (
    <div className="flex items-center">
      <Link href="">
        <a>
          <AiOutlineTwitter className="text-2xl" />
        </a>
      </Link>
      <Link href="">
        <a>
          <GrFacebookOption className="text-2xl ml-6" />
        </a>
      </Link>
      <Link href="">
        <a>
          <AiOutlineGoogle className="text-2xl ml-6" />
        </a>
      </Link>
      <Link href="">
        <a>
          <RiInstagramLine className="text-2xl ml-6" />
        </a>
      </Link>
    </div>
  );
};

export default SocialNetworks;
