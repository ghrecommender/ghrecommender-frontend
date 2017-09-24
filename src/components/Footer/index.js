import React from 'react'

import { Container, Header, Segment, Grid, List, Icon } from 'semantic-ui-react'
import { trackClick } from '../../utils'

const Footer = () => (
  <Segment inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided inverted>
        <Grid.Row>
          <Grid.Column width={6}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item
                as="a"
                href="mailto:hire@ghrecommender.io"
                onClick={trackClick('Footer - Hire us')}
              >
                <Icon name="mail outline" /> Hire us
              </List.Item>
              <List.Item
                as="a"
                href="https://github.com/ghrecommender"
                onClick={trackClick('Footer - Github')}
              >
                <Icon name="github" /> GitHub
              </List.Item>
              <List.Item
                as="a"
                href="https://twitter.com/ghrecommender"
                onClick={trackClick('Footer - Twitter')}
              >
                <Icon name="twitter" /> Twitter
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={6}>
            <p>
              Copyright © 2017 <a href="https://github.com/avli">Andrey Lisin</a> and{' '}
              <a href="http://github.com/yurtaev">Egor Yurtaev</a>
            </p>
            <p>The code is licensed under MIT.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
