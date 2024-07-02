import notFoundImg from "@/assets/notFound.jpg";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div>
      <Image src={notFoundImg} alt="notFoundImg" layout="responsive" />
    </div>
  );
};

export default NotFoundPage;
