import React, {PropTypes} from 'react';
// import Header from './common/Header';

    class App extends React.Component {
        render() {
                    return (
                        <div className="container-fluid">
                               <p> Header here...</p>
                                {this.props.children}
                            </div>
                    );
                }
    }

App.propTypes = {
        children: PropTypes.object.isRequired
};
export default App;
