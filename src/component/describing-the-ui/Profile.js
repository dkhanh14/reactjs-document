import React from 'react';
import Avatar from "./Avatar";
import Avatar2 from "./Avatar2";

// passing prop as children
/**
 * dung prop children nay khi muon wrap(dong goi or nested) 1 component B vao trong component A o component parent cua A
 * hoac wrap bat cu thu gi vao trong component A o component parent cua A
 * */
function Card({children}) {
    return (
        <div className="card">
            {children}
        </div>
    )
}


function Profile() {
    return (
            <Card>
                <Avatar
                    size={100}
                    person={{
                        name: 'Katsuko Saruhashi', imageId: 'YfeOqp2'
                    }}
                />

                <Avatar2 />
            </Card>

    );
}

export default Profile;
