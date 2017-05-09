import React, { Component, Children, cloneElement } from 'react';

let event = document.createEvent('Event');

event.initEvent('changeURL', true, true);

class RouterPaths extends Component {
  constructor(props) {
    super(props);
    this.props=props;
    
    this.renderChildren=this.renderChildren.bind(this);
    this.attached = false;
    this.state = {
      url: props.defaultURL || "/",
    };

  }

  componentDidMount() {
    
    if(!this.attached) {
      this.attached = true;
      window.addEventListener('popstate', (e)=>{
          this.setState({url: location.pathname});
      });
      document.addEventListener('changeURL', ()=>{
        this.setState({url: location.pathname});
      }, false);
    }
  }

  componentWillReceiveProps(newProps) {

  }

  renderChildren(props) {
    let child = Children.only(props.children);
    return cloneElement(child, Object.assign({}, props, {routeURL: this.state.url}));
  }

  render() {

/*    alert(Object.prototype.toString.call(<El/>))*/
    return (
      this.renderChildren(this.props)
    );
  }
}


class RoutePath extends Component {
  constructor(props) {
    super(props);
    this.props=props;
    this.renderComponent=this.renderComponent.bind(this);
    this.attached = false;
    this.path = props.path;

    this.state = {
      visible: null,
    }

  }

  componentDidMount() {
    
    this.setState({visible: (this.path==location.pathname)});

    if(!this.attached) {
      this.attached = true;
      window.addEventListener('popstate', (e)=>{
          this.setState({visible: (this.path==location.pathname)});
      });
      document.addEventListener('changeURL', ()=>{
        this.setState({visible: (this.path==location.pathname)});
      }, false);
    }

  }

  componentWillReceiveProps(newProps) {
    if(newProps.path) {
      this.path=newProps.path;
    }
  }

  renderComponent(props) {
    
    let componentProps = props.componentProps;
    let Elem = props.component;
    let newProps = {

    };

    return <Elem {...this.props}/>

  }

  render() {
    let Elem = (this.state.visible) ? this.renderChildren(this.props) : null;
    return Elem;
  }
}


class LinkPath extends Component {
  constructor(props) {
    super(props);
    this.props=props;
    this.renderChildren=this.renderChildren.bind(this);
    this.handlerClick=this.handlerClick.bind(this);
    this.url = props.url;
  }

  componentDidMount() {
    
  }

  componentWillReceiveProps(newProps) {
    if(newProps.url) {
      this.url=newProps.url;
    }
  }

  handlerClick(childHandler) {
    return (e) => {
      event.url = this.url;
      document.dispatchEvent(event);
      (childHandler) && childHandler(e);
    }
  }

  renderChildren(props) {
    
    let newProps = {
      //routeURL: event.url
    };

    let child = Children.only(props.children);
    return cloneElement(child, Object.assign({}, props, newProps, {
        onClick: this.handlerClick(child.props.onClick)
    }));
  }

  render() {
//this.renderChildren(this.props)
    return (
      <div>{this.props.children}</div>
    );
  }
}

function getPathName() {
  return location.pathname;
}

export {RouterPaths, RoutePath, LinkPath, getPathName};