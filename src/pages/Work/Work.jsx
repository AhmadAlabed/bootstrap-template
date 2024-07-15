import styles from "./style.module.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionSubtitle from "../../components/SectionSubtitle/SectionSubtitle";
import GalleryBox from "../../components/GalleryBox/GalleryBox";
function Work() {
  return (
    <div className="container padding__main margin__main">
      <SectionTitle>my work</SectionTitle>
      <SectionSubtitle>recent work</SectionSubtitle>
      <ul
        className="nav nav-pills mb-3 justify-content-start"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-graphicDesign-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-graphicDesign"
            type="button"
            role="tab"
            aria-controls="pills-graphicDesign"
            aria-selected="true"
          >
            Graphic Design
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-apps-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-apps"
            type="button"
            role="tab"
            aria-controls="pills-apps"
            aria-selected="false"
          >
            Apps
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-software-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-software"
            type="button"
            role="tab"
            aria-controls="pills-software"
            aria-selected="false"
          >
            Software
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-graphicDesign"
          role="tabpanel"
          aria-labelledby="pills-graphicDesign-tab"
        >
          {/* Start */}
          <div className="row gy-4">
            <div className="col-12 col-md-6">
              <GalleryBox
                imgSrc="/GalleryBox(1).jpg"
                title="Work 01"
                desc="Animation"
              />
            </div>
            <div className="col-12 col-md-6">
              <GalleryBox
                imgSrc="/GalleryBox(2).jpg"
                title="Work 02"
                desc="Animation"
              />
            </div>
            <div className="col-12 col-md-6">
              <GalleryBox
                imgSrc="/GalleryBox(3).jpg"
                title="Work 03"
                desc="Animation"
              />
            </div>
            <div className="col-12 col-md-6">
              <GalleryBox
                imgSrc="/GalleryBox(4).jpg"
                title="Work 04"
                desc="Animation"
              />
            </div>
          </div>
          <button type="button" class="btn btn-primary  mt-4 mb-4">
            Show More
          </button>
          {/* End */}
        </div>
        <div
          className="tab-pane fade"
          id="pills-apps"
          role="tabpanel"
          aria-labelledby="pills-apps-tab"
        >
          {/* Start */}
          <div className="row gy-4">
            <div className="col-12 col-md-6">
              <GalleryBox
                imgSrc="/GalleryBox(1).jpg"
                title="Work 01"
                desc="Animation"
              />
            </div>
            <div className="col-12 col-md-6">
              <GalleryBox
                imgSrc="/GalleryBox(2).jpg"
                title="Work 02"
                desc="Animation"
              />
            </div>
            <div className="col-12 col-md-6">
              <GalleryBox
                imgSrc="/GalleryBox(3).jpg"
                title="Work 03"
                desc="Animation"
              />
            </div>
            <div className="col-12 col-md-6">
              <GalleryBox
                imgSrc="/GalleryBox(4).jpg"
                title="Work 04"
                desc="Animation"
              />
            </div>
          </div>
          <button type="button" class="btn btn-primary  mt-4 mb-4">
            Show More
          </button>
          {/* End */}
        </div>
        <div
          className="tab-pane fade"
          id="pills-software"
          role="tabpanel"
          aria-labelledby="pills-software-tab"
        >
          {/* Start */}
          <div className="row gy-4">
            <div className="col-12 col-md-6">
              <GalleryBox
                imgSrc="/GalleryBox(1).jpg"
                title="Work 01"
                desc="Animation"
              />
            </div>
            <div className="col-12 col-md-6">
              <GalleryBox
                imgSrc="/GalleryBox(2).jpg"
                title="Work 02"
                desc="Animation"
              />
            </div>
            <div className="col-12 col-md-6">
              <GalleryBox
                imgSrc="/GalleryBox(3).jpg"
                title="Work 03"
                desc="Animation"
              />
            </div>
            <div className="col-12 col-md-6">
              <GalleryBox
                imgSrc="/GalleryBox(4).jpg"
                title="Work 04"
                desc="Animation"
              />
            </div>
          </div>
          <button type="button" class="btn btn-primary  mt-4 mb-4">
            Show More
          </button>
          {/* End */}
        </div>
      </div>
    </div>
  );
}

export default Work;
