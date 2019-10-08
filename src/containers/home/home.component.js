import React from 'react';
import {connect} from "react-redux";
import * as videoActions from "../../store/actions/video";
import './home.styles.scss';
import SideBar from '../sidebar/sidebar.component';
import HomeContent from './homeContent/homeContent';
import {bindActionCreators} from 'redux';
import {getYoutubeLibraryLoaded} from '../../store/reducers/api';
// import {getVideoCategoryIds, videoCategoriesLoaded, videosByCategoryLoaded} from '../../store/reducers/videos';

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
}



function mapStateToProps(state) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
  };
}

function mapDispatchToProps(dispatch) {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
  const fetchVideoCategories = videoActions.categories.request;
  return bindActionCreators({fetchMostPopularVideos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);