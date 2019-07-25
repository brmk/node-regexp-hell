"use strict";

// const r = /^([\p{P}\p{S}]+)?(?<localPart>\S{1,64})@(?<domainPart>[\p{L}\d]{1}[\S]{0,}\.)(?<topLevelDomainPart>\p{L}+)/gimu;
// const r = /^([\p{P}\p{S}]+)?(\S{1,64})@([\p{L}\d]{1}[\S]{0,}\.)(\p{L}+)/gimu;
// console.log(r.exec('ihor@uplab.io'));
var re = /\p{L}/u;