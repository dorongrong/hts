import { Container, Grid } from "@material-ui/core";

const Trade = () => {
  return (
    <Container style={{ backgroundColor: "#022fff" }}>
      <Grid container>
        <Grid item xs={12} md={2} style={{ backgroundColor: "#75f8ff" }}>
          검색
        </Grid>
        <Grid item xs={12} md={10} style={{ backgroundColor: "#75ffa8" }}>
          현재가
          <Grid container>
            <Grid item xs={12} md={12} style={{ backgroundColor: "#75f000" }}>
              차트
            </Grid>
            <Grid item xs={12} md={6} style={{ backgroundColor: "#d6ff75" }}>
              호가
            </Grid>
            <Grid item xs={12} md={6} style={{ backgroundColor: "#ffd675" }}>
              거래
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Trade;
