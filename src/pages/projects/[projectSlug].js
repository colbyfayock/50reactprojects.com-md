import { Helmet } from 'react-helmet';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import { listProjects, getProjectBySlug } from 'lib/projects';

import Layout from 'components/Layout';
import Section from 'components/Section';
import ProjectContainer from 'components/ProjectContainer';
import ProjectHeader from 'components/ProjectHeader';
import ProjectContent from 'components/ProjectContent';
import LoginRequired from 'components/LoginRequired';
import ProjectSidebar from 'components/ProjectSidebar';
import Checklist from 'components/Checklist';

const components = {
  ProjectHeader,
  ProjectContent,
  LoginRequired,
  ProjectSidebar,
  Checklist
}

import styles from 'styles/templates/Project.module.scss';

export default function Project({ source, frontMatter, path }) {
  const projectFrontMatter = {
    ...frontMatter,
    path
  }
  const { title } = frontMatter;

  return (
    <Layout frontMatter={projectFrontMatter}>
      <Section className={styles.project}>
        <ProjectContainer>
          <h1>{ title }</h1>
          <MDXRemote {...source} components={components}/>
        </ProjectContainer>
      </Section>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const project = await getProjectBySlug(params.projectSlug);
  const mdxSource = await serialize(project.content, { scope: project.data })
  return {
    props: {
      source: mdxSource,
      frontMatter: project.data,
      path: `/projects/${params.projectSlug}`
    }
  }
}

export async function getStaticPaths() {
  const projects = await listProjects();
  return {
    paths: projects.map(project => {
      return {
        params: {
          projectSlug: project.slug
        }
      }
    }),
    fallback: false
  }
}