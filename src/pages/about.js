import React, { useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { palette } from '../components/common/GlobalStyles';
import SEO from '../components/seo';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

hljs.configure({
  languages: ['javascript', 'css', 'html', 'xml ', 'typescript'],
});

const Container = styled.div`
  display: block;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

const Content = styled.div`
  p {
    margin: 1.5em 0px;
    color: ${palette.white};
    font-size: 0.9rem;
  }
  pre code {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
      'Courier New', monospace;
    font-size: 14px;
    line-height: 1.4em;
    overflow-x: auto;
    white-space: pre;
    margin: 0px 0px 1.5em;
    padding: 1.5em;
    background: rgb(1, 22, 39);
    border-radius: 4px;
  }
  @media screen and (min-width: 768px) {
    code,
    pre {
      font-size: 16px;
    }
  }
`;

const AboutPage = () => {
  const updataPre = () => {
    document.querySelectorAll('pre code').forEach(block => {
      hljs.highlightBlock(block);
    });
  };
  useEffect(() => {
    updataPre();
    return () => {
      updataPre();
    };
  }, []);
  return (
    <Layout>
      <SEO title="about" />
      <Container>
        <h1>About</h1>
        <Content>
          <p>안녕하세요 좋은 프론트엔드 개발자를 꿈꾸는 이성재 입니다.</p>
          <p>이곳에는 제가 배웠던 기술을 주로 쓰고 있습니다.</p>
          <pre>
            <code>
              {`let me = {
  content : {
    name : '이성재',
    email : 'codingpalette@gamile.com',
    pages : [
      'https://codingpalette.com',
      'https://github.com/codingpalette'
    ]
  },

  Frontend : {
    html : true,
    css : true,
    javascript : [
      'Vanilla',
      'React',
      'Gatsby',
      'Svelte',
      'Sapper'
    ]
  },

  Backend : {
    node : [
      'Express',
      'Sequelize',
    ]
  },

  Database : {
    RDBMS: ['MySQL'],
    NoSQL: ['Firebase', 'MongoDB']
  },

  Project : {
    '이움에스 동영상 렌더링 제작 페이지' : {
      url : 'https://solution.studioium.com/',
      content : '동영상 렌더링 제작 페이지 작업'
    },
    '고릴라 스페이스' : {
      url : 'https://www.gorillaspace.co.kr/',
      contnet : '홈페이지 퍼블리싱 작업'
    },
    '얼마나와' : {
      url : 'https://www.olmanawa.com/',
      contnet : '홈페이지 퍼블리싱 작업'
    },
    '스튜디오 이움 모바일 초대장' : {
      url : 'https://www.studioium.com/main/',
      contnet : '스튜디오 이움 모바일 초대장 제작 페이지 작업'
    }
  }

}
`}
            </code>
          </pre>
        </Content>
      </Container>
    </Layout>
  );
};

export default AboutPage;
