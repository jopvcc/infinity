import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Divider, Link, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <footer className="footer-site">
      <div className="first-footer">
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <div className="footerItemColumn">
                <h3>Productos</h3>
                <ul>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="footerItemColumn">
                <h3>Productos</h3>
                <ul>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="footerItemColumn">
                <h3>Productos</h3>
                <ul>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="footerItemColumn">
                <h3>Productos</h3>
                <ul>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                  <li className="footerItem">
                    <Link href="#" underline="none">
                      {"Page One"}
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Divider className="footer-divider" />
      <div className="second-footer">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Grid container>
                <Grid item xs>
                  <FacebookIcon />
                </Grid>
                <Grid item xs>
                  <InstagramIcon />
                </Grid>
                <Grid item xs>
                  <RedditIcon />
                </Grid>
                <Grid item xs>
                  <TwitterIcon />
                </Grid>
                <Grid item xs>
                  <YouTubeIcon />
                </Grid>
              </Grid>
            </Col>
            <Col xs={12} md={6}>
              <p>
                © 2001-2021 Todos los derechos reservados. Apple y su logotipo
                son marcas comerciales de Apple Inc. La Mac App Store es una
                marca de servicio de Apple Inc. Google Play y su logotipo son
                marcas comerciales de Google Inc.{" "}
                <a href="/legal/privacy/">Privacidad</a> |{" "}
                <a href="/legal/">Condiciones</a> |{" "}
                <a href="/legal/cookies/#optanon-toggle-display/">
                  Preferencias de cookies
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
