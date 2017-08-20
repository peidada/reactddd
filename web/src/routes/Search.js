import React from 'react';
import { connect } from 'dva';
import Header from '../components/Header';
import Ppsider from '../components/Ppsider';
import { Layout, Card, Checkbox, Button, Radio } from 'antd';
import classnames from 'classnames';
import { routerRedux } from 'dva/router';
import styles from './Search.css';

const { Content } = Layout;

const CheckboxGroup = Checkbox.Group;

const RadioGroup = Radio.Group;

function Search({location, dispatch, search}) {

  const { draftnum, baselinelist } = search;

  const draftnumProps = { draftnum, baselinelist };

  const arr = [];

  const value = { label:'', value:'' };

  baselinelist.data.map((baseline) => arr.push(value.value = value.label = baseline.baselineName.slice(0,8)));

  const newArr = [...new Set(arr)];

  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
    console.log(checkedValues[1]);
    checkedValues.map((checkedValues) => console.log(checkedValues))
  }

  const optionsCycle = newArr;

  const optionsSegmentation = [
    { label: 'Desktop', value: 'DT' },
    { label: 'Notebook', value: 'NB' },
  ];
  
  const optionsSegment = [
    { label: 'Consumer', value: 'Consumer' },
    { label: 'commercial', value: 'commercial' },
  ];

  const state = {
     value2: 'Desktop',
     value3: 'Consumer',
  }

  const onChange2 = (e) => {
    console.log('radio2 checked', e.target.value);
  }

	const searchClick = () => {
		dispatch(routerRedux.push({
      		pathname:'/portfolio/search/product',
    	}))
	}

  return (
    <div className={styles.normal}>
      <Layout>
      	<Header />
      	<Layout className={classnames('ant-layout-has-sider')}>
      		<Ppsider {...draftnumProps}/>
      		<Layout style={{ padding: '24px' }}>
        		<Content style={{ background: '#fff', minHeight: 280 }}>
        		  <div className={styles.topbox}>
        		  	<div className={styles.icon}></div>
        		  	<div className={styles.zi}>Search</div>
        		  </div>
        		  <Card style={{ width: '100%', borderBottom: '1px solid #ccc'}} bordered={false} noHovering={false}>
    				<p style={{ height: '50px', paddingTop: '10px', marginLeft: '40px' }}>
    					<span className={styles.checkboxname}>Portfolio Planning Cycle:</span>
    					<CheckboxGroup className={styles.checkboxgroup} options={optionsCycle} defaultValue={['']} onChange={onChange} />
    				</p>
    				<p style={{ height: '50px', paddingTop: '10px', marginLeft: '40px' }}>
    					<span className={styles.checkboxname}>Product Segmentation:</span>
    					<RadioGroup className={styles.radiogroup} options={optionsSegmentation} onChange={onChange2} defaultValue={state} />
    				</p>
    				<p style={{ height: '50px', paddingTop: '10px', marginLeft: '40px' }}>
    					<span className={styles.checkboxname}>Business Segment:</span>
    					<RadioGroup className={styles.radiogroup1} options={optionsSegment} onChange={onChange2} defaultValue={state} />
    				</p>
  				  </Card>
  				  <Button type="primary" className={styles.search} onClick={searchClick}>Search</Button>
        		</Content>
      		</Layout>
      	</Layout>
      </Layout>
    </div>
  );
}


export default connect(({search}) => ({search}))(Search);
