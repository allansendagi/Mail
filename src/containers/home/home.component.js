import React from 'react';
import {connect} from "react-redux";
import * as videoActions from "../../store/actions/video";
import './home.styles.scss';
import SideBar from '../sidebar/sidebar.component';
import HomeContent from './homeContent/homeContent';
import {bindActionCreators} from 'redux';
import {getYoutubeLibraryLoaded} from '../../store/reducers/api';
import {getVideoCategoryIds, videoCategoriesLoaded, videosByCategoryLoaded} from '../../store/reducers/video';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIndex: 0,
    };
  }

  render() {
    return (
      <React.Fragment>
        <SideBar/>
        <HomeContent
          bottomReachedCallback={this.bottomReachedCallback}
    />
      </React.Fragment>
    );
  }
  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.props.fetchMostPopularVideos();
    }
  }
   componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.fetchCategoriesAndMostPopularVideos();
    }
  }
    componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.fetchCategoriesAndMostPopularVideos();
    } else if (this.props.videoCategories !== prevProps.videoCategories) {
       this.fetchVideosByCategory();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.props.fetchMostPopularVideos();
    }
  }

    fetchCategoriesAndMostPopularVideos() {
    this.props.fetchMostPopularVideos();
    this.props.fetchVideoCategories();
  }
  fetchVideosByCategory() {
    const categoryStartIndex = this.state.categoryIndex;
    const categories = this.props.videoCategories.slice(categoryStartIndex, categoryStartIndex + 3);
    this.props.fetchMostPopularVideosByCategory(categories);
    this.setState(prevState => {
      return {
        categoryIndex: prevState.categoryIndex + 3,
      };
    });
  }
 }





function mapStateToProps(state) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    videoCategories: getVideoCategoryIds(state),
  };
}

function mapDispatchToProps(dispatch) {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
  const fetchVideoCategories = videoActions.categories.request;
  const fetchMostPopularVideosByCategory = videoActions.mostPopularByCategory.request;
  return bindActionCreators({fetchMostPopularVideos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);