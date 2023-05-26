import Header from './opfocus/header/Header'
import Banner from './opfocus/banner/Banner'
import Main from './opfocus/main_content/Main'
import Welcome from './opfocus/welcome/Welcome'
import Customize from './opfocus/customize_content/Customize'
import Medias from './opfocus/media_content/Medias'
import { IntlProvider } from 'react-intl'
import { useContext } from 'react'
import { LanguageContext } from './App'

function English() {
  const [language ,setLanguage] = useContext(LanguageContext)
  
  if (language !== 'en')
    setLanguage("en")
    
  const messagesInEnglish = {
    user: "anon-user",
    disclaimer: "Disclaimer: This personal website is not affiliated with any corporate entity. Links are provided as-is from third-party resources, and no responsibility is taken for their content. If you have any questions or concerns, please conduct your own research before using them!",
    welcome: "Start Here",
    links_block_title: 'Discover it together. Create it together. Choose your preferred entry option.',
    post_open: 'POST',
    post_close: 'CLOSE',
    comment_open: 'comment',
    comment_close:'comment off',
    post_author:"Author: {ts}",
    medias_section: 'Here is a list of media',
    medias_block_title: 'We have collected some media. They focus on creating content in one or more specific fields.',
    customize_title:"Customization",
    website_add:"Website: ",
    link_add: "Link",
    notification_add: "* During the testing phase, your custom additions are only stored in local storage, if you clear the browser storage data will disappear",
    post_title: 'Title: ',
    post_text:'Text: '
  }
  return (
    <IntlProvider
      messages={messagesInEnglish}
      locale="en"
      defaultLocale="zh"
    >
      <Header />
      <Banner/>
      <div className='w3-auto'>
        <Welcome/>
        <Main/> 
        <Customize/>
        <Medias/>
      </div>
   </IntlProvider>
  )
}

export default English