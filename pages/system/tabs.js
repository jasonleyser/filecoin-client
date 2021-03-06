import * as React from 'react';
import * as System from '~/components/system';

import SystemPage from '~/components/system/SystemPage';
import ViewSourceLink from '~/components/system/ViewSourceLink';

const TAB_GROUP_TWO = [
  { value: '1', label: 'Capricorn' },
  { value: '2', label: 'Aquarius' },
];

const TAB_GROUP_THREE = [
  { value: '1', label: 'Capricorn' },
  { value: '2', label: 'Aquarius' },
  { value: '3', label: 'Pisces' },
];

const TAB_GROUP_FOUR = [
  { value: '1', label: 'Capricorn' },
  { value: '2', label: 'Aquarius' },
  { value: '3', label: 'Pisces' },
  { value: '4', label: 'Aries' },
];

export default class SystemPageTabs extends React.Component {
  state = {
    eight: '1',
    nine: '1',
    ten: '1',
  };

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <SystemPage title="FCDS: Tabs" description="Lorem Ipsum." url="https://fps.onrender.com/system/tabs">
        <System.H1>
          Tabs <ViewSourceLink file="tabs.js" />
        </System.H1>
        <br />
        <br />
        <System.P>An examle of tab components.</System.P>
        <br />
        <br />

        <System.TabGroup name="eight" options={TAB_GROUP_TWO} value={this.state.eight} onChange={this._handleChange} />
        <System.TabGroup name="nine" options={TAB_GROUP_THREE} value={this.state.nine} onChange={this._handleChange} />
        <System.TabGroup name="ten" options={TAB_GROUP_FOUR} value={this.state.ten} onChange={this._handleChange} />
      </SystemPage>
    );
  }
}
