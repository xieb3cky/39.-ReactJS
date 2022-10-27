// The homepage should show the # of food items (“snacks”) and drink choices (“drinks”)

import React from 'react';
import { Card, CardBody, CardTitle } from "reactstrap";


function Homepage({ drinks, snacks }) {

    return (
        <section className="col-md-8">
            <Card>
                <CardBody className="text-center">
                    <CardTitle>
                        <h3 className="font-weight-bold">
                            Welcome to Silicon Valley's premier dive cafe!
                        </h3>
                        <h4 className="font-weight-bold">
                            {`We have ${drinks.length} drinks and ${snacks.length} snacks on menu to choose from!`}
                        </h4>

                    </CardTitle>

                </CardBody>
            </Card>
        </section>
    );

}

export default Homepage;
