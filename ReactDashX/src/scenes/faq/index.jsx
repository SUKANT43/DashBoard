import { Box, Typography, useTheme } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';

const faqData = [
  {
    summary: 'What tech-stacks used in making this web-app?',
    details:
      'I used ReactJS for making this website. Used MUi for UI components, icons & X-data-grid. I used various other libraries like Nivo, React Pro Sidebar, FullCalendar. For forms I used Formik with Yup. This also has light/dark theme. I learned various things while building this web-app.',
  },
 
  {
    summary: 'What Charts I used?',
    details:
      'I used Nivo library for charts. It is absolutely amazing. Their easy-to-use charts & highly customizable. They have every kind of charts. Must recommend.',
  },
  
  {
    summary: 'Something IMPORTANT regarding this web-app!',
    details:
      'This is not responsive. I suggest to view it in Desktop with full screen. I will try to make this responvie but as of now it is as it is. ',
  },
 
 
 
];

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="15px">
      <Helmet>
        <title>FAQ | ReactDashX</title>
      </Helmet>
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      {faqData.map((faq) => (
        <Accordion
          // defaultExpanded
          sx={{ backgroundColor: colors.primary[400], borderRadius: '4px' }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h4">
              {faq.summary}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.details}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
