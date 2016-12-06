import React from 'react';
import markdown from './Changelog.md';

export const Changelog = () => (
    <div dangerouslySetInnerHTML={ { __html: markdown } }/> // eslint-disable-line react/no-danger
);

export default Changelog;