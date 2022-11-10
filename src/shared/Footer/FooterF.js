import React from 'react';
import { Footer } from 'flowbite-react';

const FooterF = () => {
    return (
        <div>
            <Footer container={true}>
                <Footer.Copyright
                    href="#"
                    by="IT-Solution™"
                    year={2022}
                />
                <Footer.LinkGroup>
                    <Footer.Link>
                        About
                    </Footer.Link>
                    <Footer.Link>
                        Privacy Policy
                    </Footer.Link>
                    <Footer.Link>
                        Licensing
                    </Footer.Link>
                    <Footer.Link>
                        Contact
                    </Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </div>
    );
};

export default FooterF;