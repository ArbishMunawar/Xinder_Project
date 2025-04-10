import CategoryIcon from '../../../assets/icons/CategoryIcon'
import SolutionIcon from '../../../assets/icons/SolutionIcon'
import ProductIcon from '../../../assets/icons/ProductIcon'
import ResourcesIcon from '../../../assets/icons/ResourcesIcon'
import SupportIcon from '../../../assets/icons/SupportIcon'
import CompanyIcon from '../../../assets/icons/CompanyIcon'
import Typography from '../Typography'
const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-10 px-5 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
        
        <div>
          <Typography variant="h5" className="font-semibold flex items-center gap-2 mb-4">
            <span><CategoryIcon/></span> Categories
          </Typography>
          <ul className="space-y-2 text-[0.9rem] font-medium">
            <li>User Interface</li>
            <li>User Experience</li>
            <li>Digital Media</li>
            <li>Lifestyle</li>
            <li>Programming</li>
            <li>Animation</li>
          </ul>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold flex items-center gap-2 mb-4">
            <span><ProductIcon/></span> Product
          </Typography>
          <ul className="space-y-2 text-[0.9rem] font-medium">
            <li>Pricing</li>
            <li>Overview</li>
            <li>Browse</li>
            <li>Accessibility</li>
            <li>Five</li>
            <li>Changelog</li>
          </ul>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold flex items-center gap-2 mb-4">
            <span><SolutionIcon/></span> Solutions
          </Typography>
          <ul className="space-y-2 text-[0.9rem] font-medium">
            <li>Brainstorming</li>
            <li>Ideation</li>
            <li>Wireframing</li>
            <li>Research</li>
            <li>Design</li>
            <li>Concept</li>
          </ul>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold flex items-center gap-2 mb-4">
            <span><ResourcesIcon/></span> Resources
          </Typography>
          <ul className="space-y-2 text-[0.9rem] font-medium">
            <li>Help Center</li>
            <li>Blog</li>
            <li>Tutorials</li>
            <li>FAQs</li>
            <li>Community</li>
            <li>Events</li>
          </ul>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold flex items-center gap-2 mb-4">
            <span><SupportIcon/></span> Support
          </Typography>
          <ul className="space-y-2 text-[0.9rem] font-medium">
            <li>Contact Us</li>
            <li>Developers</li>
            <li>Documentation</li>
            <li>Integrations</li>
            <li>Reports</li>
            <li>Webinar</li>
          </ul>
        </div>

        <div>
          <Typography variant="h5" className="font-semibold flex items-center gap-2 mb-4">
            <span><CompanyIcon/></span> Company
          </Typography>
          <ul className="space-y-2 text-[0.9rem] font-medium">
            <li>About</li>
            <li>Press</li>
            <li>Events</li>
            <li>Careers</li>
            <li>Customers</li>
            <li>Partners</li>
          </ul>
        </div>

      </div>

      <div className=" mt-10 border-t pt-6  text-gray-500 md:flex md:justify-between items-center">
        <Typography variant="p">© 2023 Xinder, Inc. All rights reserved.</Typography>

        </div>
        <Typography variant="p" className=" text-sm text-left md:xs ">
          In sed posuere sed ullamcorper feugiat. Lacinia elit neque, ipsum, non. Tellus mattis enim volutpat habitasse. Semper posuere lectus consectetur aliquam et ullamcorper. 
          Dictumst aenean justo fames diam eget volutpat vestibulum elit.
        </Typography>
      
    </footer>
  );
};

export default Footer;
