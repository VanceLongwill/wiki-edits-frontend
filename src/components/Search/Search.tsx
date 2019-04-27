import * as React from 'react'

import { Button, Input } from 'antd'
import styled from 'styled-components'

const SearchContainer = styled.div`
  padding: 10px;
  width: 900px;
  display: flex;
`

interface ISearchProps {
  handleSubmit: (query: string) => {}
  loading: boolean
}

interface ISearchState {
  query: string
}

export class Search extends React.Component<ISearchProps, ISearchState> {
  public readonly state: ISearchState

  constructor(props: ISearchProps) {
    super(props)
    this.state = {
      query: '',
    }
  }

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    this.setState(prevState => ({ ...prevState, query }))
  }

  public handleSearchButtonPress = () => {
    const { handleSubmit } = this.props
    const { query } = this.state
    this.setState(prevState => ({ ...prevState, query: '' }))
    handleSubmit(query)
  }

  public render() {
    const { query } = this.state
    const { loading } = this.props
    return (
      <SearchContainer>
        <Input type="text" value={query} onChange={this.handleChange} />
        <Button
          disabled={loading}
          type="primary"
          onClick={this.handleSearchButtonPress}>
          Search
        </Button>
      </SearchContainer>
    )
  }
}
