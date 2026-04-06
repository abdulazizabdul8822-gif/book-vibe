import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedWishList from '../../components/listedBook/ListedWishList';
import ListedReadList from '../../components/listedBook/ListedReadList';


const BooksPage = () => {

    const { storedBook, wishList } = useContext(BookContext);
    console.log(storedBook, wishList, "BookContext")
    return (
        <div className=' container mx-auto my-3'>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                   <ListedReadList/>
                </TabPanel>
                <TabPanel>
                    <ListedWishList/>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default BooksPage;