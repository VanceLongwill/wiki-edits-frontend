import * as React from 'react'

import { Button, Input } from 'antd'
import styled from 'styled-components'

const SearchContainer = styled.div`
  margin: 0 auto;
  padding: 10px;
`

interface ISearchProps {
  handleSubmit: (query: string) => {}
}

interface ISearchState {
  query: string
}

export class Search extends React.Component<ISearchProps, ISearchState> {
  public readonly state: ISearchState = {
    query: '',
  }

  public handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState(prevState => ({ ...prevState, query: e.target.value }))
  }

  public handleSearchButtonPress() {
    const { handleSubmit } = this.props
    const { query } = this.state
    handleSubmit(query)
    // this.setState(prevState => ({ ...prevState, query: "" }))
  }

  public render() {
    const { query } = this.state
    return (
      <SearchContainer>
        <Input type="text" value={query} onChange={this.handleChange} />
        <Button type="primary" onClick={this.handleSearchButtonPress}>
          Search
        </Button>
      </SearchContainer>
    )
  }
}
