import { Avatar, Card, CardActions, CardContent, CardHeader, Chip, Grid, IconButton, InputAdornment, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react';
import { Search, Star } from '@material-ui/icons';

import GithubIcon from 'components/GithubIcon';
import { debounce, sortBy } from 'lodash';
import moment from 'moment';
import styles from './LunrSearch.module.scss';
import { useLunr } from 'react-lunr';

const formatQuery = (input) => input ? `${input}*^2 *${input} ${input}~1` : '';

const LunrSearch = ({ lunr }) => {
  const { index, store } = lunr;
  const [query, setQuery] = useState(null);
  const setQueryDebounced = debounce(setQuery, 200);
  const results = useLunr(query, index, store);
  const allResults = sortBy( Object.values(JSON.parse(store)), (result) => result.stars ).reverse();

  const onKeyUp = (e) => {
    if (e.target.value.length !== 1) {
      e.persist();
      setQueryDebounced(formatQuery(e.target.value));
    }
  };

  return (
    <div>
      <form className={styles['search']}>
        <TextField
          name="query"
          fullWidth
          placeholder={`Search ${allResults.length} plugins`}
          variant="outlined"
          InputProps={{
            startAdornment: (<InputAdornment position="start"><Search /></InputAdornment>),
            onKeyUp,
          }}
        />
      </form>

      <div className={styles['search__results-count']}>
        {results.length || (query && query.length) ? `${results.length} result${results.length === 1 ? '' : 's'}` : ''}
      </div>

      <div className={styles['search__results']}>
        <Grid container spacing={40}>
          {(results.length || (query && query.length) ? results : allResults).map((result) => (
            <Grid item md={6} sm={12} xs={12} key={result.id}>
              <SearchResult result={result} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

const SearchResult = ({ result }) => (
  <div className={styles['search__result']}>
    <Card elevation={6}>
      <CardHeader
        avatar={
          <a href={result.ownerUrl}>
            <Avatar src={result.ownerAvatarUrl} alt="Recipe" />
          </a>
        }
        title={<a href={result.ownerUrl}>{result.ownerLogin}</a>}
        subheader={`Updated ${moment(result.updatedAt).format('MMM D[,] YYYY')}`}
      />
      <CardContent>
        <Typography variant="h5" component="h3" gutterBottom>
          <a href={result.url} target="_blank">{result.name}</a>
        </Typography>
        <Typography component="p" gutterBottom>
          {result.description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={result.url} target="_blank">
          <IconButton aria-label="Go to repo">
            <GithubIcon />
          </IconButton>
        </a>
        <Chip icon={<Star fontSize="small" />} label={result.stars} />

        <div className={styles['search__result__actions-right']}>
          {result.compatibility.length
            ? (
              result.compatibility.split(' ').map((version) => (
                <Chip label={version} />
              ))
            )
            : (
              <Chip label="?" />
            )
          }
        </div>
      </CardActions>
    </Card>
  </div>
)

export default LunrSearch;
