import React from "react";

export default function PageHeader({siderStatus}) {
  return (
    <div className={siderStatus}>
      <p className="title">Eko Andri Subarnanto</p>
      <p className="sub-title">Super Keren</p>
    </div>
  );
}
