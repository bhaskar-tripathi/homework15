var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/embdb", {
  useNewUrlParser: true
});

var empRecordSeed = [
// upto 4001 lines in csvjson.json
  {
    "Name": "ADRIANO,  RACQUEL ANNE",
    "JobTitle": "PARAMEDIC",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "AFFANEH,  MAHIR A",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 93354,
    "HourlyRate": ""
  },
  {
    "Name": "AFOENYI,  PHYLLIS",
    "JobTitle": "TITLE V PROGRAM TRAINEE I",
    "Department": "FAMILY & SUPPORT",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 13
  },
  {
    "Name": "AGAR,  BULENT B",
    "JobTitle": "DEPUTY COMMISSIONER",
    "Department": "WATER MGMNT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 132972,
    "HourlyRate": ""
  },
  {
    "Name": "AGEE,  LAWRENCE",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "AGNEW,  ANTONIO E",
    "JobTitle": "MOTOR TRUCK DRIVER",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "AGNEW,  MELISSA M",
    "JobTitle": "SERGEANT",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 111444,
    "HourlyRate": ""
  },
  {
    "Name": "AGOSTA,  JOSEPH J",
    "JobTitle": "POLICE OFFICER (ASSIGNED AS DETECTIVE)",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 103932,
    "HourlyRate": ""
  },
  {
    "Name": "AGOSTINELLI,  MICHAEL A",
    "JobTitle": "FIREFIGHTER (PER ARBITRATORS AWARD)-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 107106,
    "HourlyRate": ""
  },
  {
    "Name": "AGOSTINI,  LUIS R",
    "JobTitle": "ASST DIR",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 95736,
    "HourlyRate": ""
  },
  {
    "Name": "AGOSTO,  HECTOR I",
    "JobTitle": "POLICE OFFICER/EXPLSV DETECT K9 HNDLR",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 94524,
    "HourlyRate": ""
  },
  {
    "Name": "AGREDANO,  ELIAS",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 48078,
    "HourlyRate": ""
  },
  {
    "Name": "AGREDANO,  MARIO",
    "JobTitle": "BRIDGE OPERATOR",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 67896,
    "HourlyRate": ""
  },
  {
    "Name": "AGRON,  EDUARDO",
    "JobTitle": "SERGEANT",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 122472,
    "HourlyRate": ""
  },
  {
    "Name": "AGRON,  EDWIN",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "AGSALUD,  FERNAN S",
    "JobTitle": "SANITATION LABORER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 40.78
  },
  {
    "Name": "AGSALUD JR,  JUANITO S",
    "JobTitle": "SANITATION LABORER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 38.52
  },
  {
    "Name": "AGUADA,  GILBERT GLENN",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "AGUAS,  ALEX",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "AGUAYO,  BRAULIO",
    "JobTitle": "FIREFIGHTER-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 89148,
    "HourlyRate": ""
  },
  {
    "Name": "AGUAYO,  LUIS A",
    "JobTitle": "FIREFIGHTER-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 92274,
    "HourlyRate": ""
  },
  {
    "Name": "AGUAYO,  LUIS M",
    "JobTitle": "LABORER - APPRENTICE",
    "Department": "WATER MGMNT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 34.98
  },
  {
    "Name": "AGUAYO,  MARIA G",
    "JobTitle": "ACCOUNTING TECHNICIAN II",
    "Department": "FINANCE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 47160,
    "HourlyRate": ""
  },
  {
    "Name": "AGUIAR,  WILLIAM M",
    "JobTitle": "ADMINISTRATIVE DEPUTY",
    "Department": "LAW",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 143976,
    "HourlyRate": ""
  },
  {
    "Name": "AGUILA,  JUANITA",
    "JobTitle": "MOTOR TRUCK DRIVER",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "AGUILAR,  ANDRIA",
    "JobTitle": "ALDERMANIC AIDE",
    "Department": "CITY COUNCIL",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 25
  },
  {
    "Name": "AGUILAR,  EFRAIN",
    "JobTitle": "SANITATION LABORER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 38.52
  },
  {
    "Name": "AARON,  JEFFERY M",
    "JobTitle": "SERGEANT",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 111444,
    "HourlyRate": ""
  },
  {
    "Name": "AARON,  KARINA",
    "JobTitle": "POLICE OFFICER (ASSIGNED AS DETECTIVE)",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 94122,
    "HourlyRate": ""
  },
  {
    "Name": "AARON,  KIMBERLEI R",
    "JobTitle": "CHIEF CONTRACT EXPEDITER",
    "Department": "DAIS",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 118608,
    "HourlyRate": ""
  },
  {
    "Name": "ABAD JR,  VICENTE M",
    "JobTitle": "CIVIL ENGINEER IV",
    "Department": "WATER MGMNT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 117072,
    "HourlyRate": ""
  },
  {
    "Name": "ABARCA,  FRANCES J",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 48078,
    "HourlyRate": ""
  },
  {
    "Name": "ABASCAL,  REECE E",
    "JobTitle": "TRAFFIC CONTROL AIDE-HOURLY",
    "Department": "OEMC",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 19.86
  },
  {
    "Name": "ABBATACOLA,  ROBERT J",
    "JobTitle": "ELECTRICAL MECHANIC",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 49.35
  },
  {
    "Name": "ABBATEMARCO,  JAMES J",
    "JobTitle": "FIRE ENGINEER-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 103350,
    "HourlyRate": ""
  },
  {
    "Name": "ABBATE,  TERRY M",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 93354,
    "HourlyRate": ""
  },
  {
    "Name": "ABBOTT,  BETTY L",
    "JobTitle": "FOSTER GRANDPARENT",
    "Department": "FAMILY & SUPPORT",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 2.65
  },
  {
    "Name": "ABBOTT,  CARMELLA",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "ABDALLAH,  MARAM M",
    "JobTitle": "PARAMEDIC",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 56304,
    "HourlyRate": ""
  },
  {
    "Name": "ABDALLAH,  ZAID",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "ABDELHADI,  ABDALMAHD",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 87006,
    "HourlyRate": ""
  },
  {
    "Name": "ABDELLATIF,  AREF R",
    "JobTitle": "FIREFIGHTER (PER ARBITRATORS AWARD)-PARAMEDIC",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 105804,
    "HourlyRate": ""
  },
  {
    "Name": "ABDELLATIF,  HASSAN",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "ABDELMAJEID,  AZIZ",
    "JobTitle": "SERGEANT",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 111444,
    "HourlyRate": ""
  },
  {
    "Name": "ABDOLLAHZADEH,  ALI",
    "JobTitle": "FIREFIGHTER/PARAMEDIC",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 94476,
    "HourlyRate": ""
  },
  {
    "Name": "ABDUL-KARIM,  MUHAMMAD A",
    "JobTitle": "ENGINEERING TECHNICIAN VI",
    "Department": "WATER MGMNT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 118608,
    "HourlyRate": ""
  },
  {
    "Name": "ABDULLAH,  DANIEL N",
    "JobTitle": "FIREFIGHTER-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 99324,
    "HourlyRate": ""
  },
  {
    "Name": "ABDULLAH,  RASHAD",
    "JobTitle": "ELECTRICAL MECHANIC (AUTOMOTIVE)",
    "Department": "DAIS",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 49.35
  },
  {
    "Name": "ABDULLA,  MARYEM E",
    "JobTitle": "ASST CORPORATION COUNSEL I",
    "Department": "LAW",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 64824,
    "HourlyRate": ""
  },
  {
    "Name": "ABDUL-SHAKUR,  TAHIR J",
    "JobTitle": "POOL MOTOR TRUCK DRIVER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 10,
    "AnnualSalary": "",
    "HourlyRate": 29.96
  },
  {
    "Name": "ABEJERO,  JASON V",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 93354,
    "HourlyRate": ""
  },
  {
    "Name": "ABERCROMBIE IV,  EARL S",
    "JobTitle": "PARAMEDIC I/C",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 91080,
    "HourlyRate": ""
  },
  {
    "Name": "ABERNETHY,  LYDIA M",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 48078,
    "HourlyRate": ""
  },
  {
    "Name": "ABES,  JOSE A",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 68616,
    "HourlyRate": ""
  },
  {
    "Name": "ABFALL,  RICHARD C",
    "JobTitle": "FIREFIGHTER-EMT (RECRUIT)",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 56304,
    "HourlyRate": ""
  },
  {
    "Name": "ABNEY,  PATRICK",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "ABOUASSI,  CHADI",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 76266,
    "HourlyRate": ""
  },
  {
    "Name": "ABOUELKHEIR,  HASSAN A",
    "JobTitle": "SENIOR PROGRAMMER/ANALYST",
    "Department": "FAMILY & SUPPORT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 117072,
    "HourlyRate": ""
  },
  {
    "Name": "ABOUZEID,  TAMER Y",
    "JobTitle": "INVESTIGATOR-COPA",
    "Department": "COPA",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 67524,
    "HourlyRate": ""
  },
  {
    "Name": "ABRAHAM,  GIRLEY T",
    "JobTitle": "CIVIL ENGINEER IV",
    "Department": "WATER MGMNT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 117072,
    "HourlyRate": ""
  },
  {
    "Name": "ABRAHAM,  KELVIN",
    "JobTitle": "TRAFFIC ENGINEER IV",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 82236,
    "HourlyRate": ""
  },
  {
    "Name": "ABRAHAM,  NANCY A",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "ABRAM,  ANTHONY A",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 80016,
    "HourlyRate": ""
  },
  {
    "Name": "ABRAMAVICIUS,  ANNA A",
    "JobTitle": "SUPERINTENDENT OF SPECIAL TRAFFIC SERVICES",
    "Department": "OEMC",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72024,
    "HourlyRate": ""
  },
  {
    "Name": "ABRAMSON,  NICHOLAS",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 76266,
    "HourlyRate": ""
  },
  {
    "Name": "ABRAMS,  SAMUEL A",
    "JobTitle": "POOL MOTOR TRUCK DRIVER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "ABRAMS,  SEBASTIAN C",
    "JobTitle": "POOL MOTOR TRUCK DRIVER",
    "Department": "AVIATION",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 10,
    "AnnualSalary": "",
    "HourlyRate": 29.96
  },
  {
    "Name": "ABRAMS,  TIFFANY",
    "JobTitle": "OPERATING ENGINEER-GROUP C",
    "Department": "WATER MGMNT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 49.26
  },
  {
    "Name": "ABRATANSKI,  MARK A",
    "JobTitle": "FIREFIGHTER-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 92274,
    "HourlyRate": ""
  },
  {
    "Name": "ABREU,  DILAN",
    "JobTitle": "SEWER BRICKLAYER",
    "Department": "WATER MGMNT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 46.88
  },
  {
    "Name": "ABREU,  ROBERTO J",
    "JobTitle": "TRAFFIC SIGNAL REPAIRMAN",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 111072,
    "HourlyRate": ""
  },
  {
    "Name": "ABREU,  ROSITA",
    "JobTitle": "PERSONAL COMPUTER OPERATOR III",
    "Department": "HEALTH",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 74568,
    "HourlyRate": ""
  },
  {
    "Name": "ABREU,  VICTOR",
    "JobTitle": "FIREFIGHTER-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 103272,
    "HourlyRate": ""
  },
  {
    "Name": "ABRON,  FLOYD",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 93354,
    "HourlyRate": ""
  },
  {
    "Name": "ABRON,  KIMYENNA D",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "ABRONS,  KENNETH L",
    "JobTitle": "ELECTRICAL MECHANIC",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 49.35
  },
  {
    "Name": "ABUBAKER,  MOHAMMED G",
    "JobTitle": "SENIOR ENVIRONMENTAL INSPECTOR",
    "Department": "HEALTH",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 89808,
    "HourlyRate": ""
  },
  {
    "Name": "ABUDAYEH,  ELIAS",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "ABUEID,  EID I",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "ABUHASHISH,  AWWAD",
    "JobTitle": "FOREMAN OF WATER PIPE CONSTRUCTION",
    "Department": "WATER MGMNT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 54.05
  },
  {
    "Name": "ABURIZEG,  MOHAMMAD",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 80016,
    "HourlyRate": ""
  },
  {
    "Name": "ABUTALEB,  AHMAD H",
    "JobTitle": "CIVIL ENGINEER II",
    "Department": "WATER MGMNT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 98292,
    "HourlyRate": ""
  },
  {
    "Name": "ABUZANAT,  ABDALLA H",
    "JobTitle": "POLICE OFFICER (ASSIGNED AS DETECTIVE)",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 100980,
    "HourlyRate": ""
  },
  {
    "Name": "ACCARDO,  ANTHONY D",
    "JobTitle": "FOREMAN OF CONSTRUCTION LABORERS",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 44.82
  },
  {
    "Name": "ACCARDO,  ANTHONY V",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 80016,
    "HourlyRate": ""
  },
  {
    "Name": "ACCARDO,  JENNIFER A",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "ACCARDO,  THOMAS J",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "ACCIARI,  NICHOLAS B",
    "JobTitle": "MOTOR TRUCK DRIVER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 38.01
  },
  {
    "Name": "ACETO,  ALEXIS",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  AARON F",
    "JobTitle": "POLICE OFFICER (ASSIGNED AS DETECTIVE)",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 94122,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  ALEJANDRO R",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 87006,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  BIENVENIDO",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 93354,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  DAILHA",
    "JobTitle": "COMMUNICABLE DISEASE CONTROL INVESTIGATOR II",
    "Department": "HEALTH",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 78120,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  DAVID M",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 80016,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  EDWARD",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  EDWIN",
    "JobTitle": "DETENTION AIDE",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 48072,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  ERIC",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  GILBERT",
    "JobTitle": "LIEUTENANT-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 121818,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  ILIA",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  JANETE",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 87006,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  JASON M",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  JAVIER",
    "JobTitle": "ASPHALT LABORER",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 43.72
  },
  {
    "Name": "ACEVEDO,  JOSUE",
    "JobTitle": "POLICE COMMUNICATIONS OPERATOR II",
    "Department": "OEMC",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 60648,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  MANUEL A",
    "JobTitle": "FIREFIGHTER",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 93666,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  MARCO A",
    "JobTitle": "POLICE OFFICER (ASSIGNED AS DETECTIVE)",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 100980,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  MARISOL",
    "JobTitle": "SENIOR PUBLIC INFORMATION OFFICER",
    "Department": "BUSINESS AFFAIRS",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 96096,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  MARTIN J",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 93354,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  MIKE",
    "JobTitle": "AVIATION SECURITY OFFICER",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 70644,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  NADINE M",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  RAFAEL",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEDO,  REVA L",
    "JobTitle": "PARAMEDIC",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 76266,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVES,  JUAN C",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVES,  LUIS A",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 48078,
    "HourlyRate": ""
  },
  {
    "Name": "ACEVEZ,  ANTHONY E",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 93354,
    "HourlyRate": ""
  },
  {
    "Name": "ACHA,  SHARAZAN MARLENE",
    "JobTitle": "MOTOR TRUCK DRIVER",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "ACHILLES,  AMBER L",
    "JobTitle": "MANAGING DEPUTY COMMISSIONER",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 175728,
    "HourlyRate": ""
  },
  {
    "Name": "ACKERMANN,  MICHAEL A",
    "JobTitle": "PARAMEDIC I/C",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 91080,
    "HourlyRate": ""
  },
  {
    "Name": "ACKLIN,  QIANA D",
    "JobTitle": "CROSSING GUARD",
    "Department": "OEMC",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 18.52
  },
  {
    "Name": "ACOSTA,  ALEXANDER",
    "JobTitle": "FIREFIGHTER-EMT (RECRUIT)",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "ACOSTA,  ANDREA M",
    "JobTitle": "PARAMEDIC",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 56304,
    "HourlyRate": ""
  },
  {
    "Name": "ACOSTA,  CESAR I",
    "JobTitle": "STEAMFITTER",
    "Department": "WATER MGMNT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 49.6
  },
  {
    "Name": "ACOSTA,  EDWIN N",
    "JobTitle": "EEO INVESTIGATOR",
    "Department": "HUMAN RESOURCES",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72120,
    "HourlyRate": ""
  },
  {
    "Name": "ACOSTA,  GUSTAVO",
    "JobTitle": "FIREFIGHTER-EMT (RECRUIT)",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 56304,
    "HourlyRate": ""
  },
  {
    "Name": "ACOSTA,  HECTOR M",
    "JobTitle": "WINDOW WASHER",
    "Department": "DAIS",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 22.75
  },
  {
    "Name": "ACOSTA HERNANDEZ,  SAUL E",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 48078,
    "HourlyRate": ""
  },
  {
    "Name": "ACOSTA,  JAIME A",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 80016,
    "HourlyRate": ""
  },
  {
    "Name": "ACOSTA,  JESSE A",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 96060,
    "HourlyRate": ""
  },
  {
    "Name": "ACOSTA,  MARIA DE LOS ANGELES",
    "JobTitle": "FREEDOM OF INFORMATION ACT OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 58500,
    "HourlyRate": ""
  },
  {
    "Name": "ACOSTA,  MARIO A",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 87006,
    "HourlyRate": ""
  },
  {
    "Name": "ACOSTA,  MARK",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 80016,
    "HourlyRate": ""
  },
  {
    "Name": "ACOSTA,  MARTHA A",
    "JobTitle": "LIBRARY ASSOCIATE",
    "Department": "PUBLIC LIBRARY",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 73932,
    "HourlyRate": ""
  },
  {
    "Name": "ACOSTA,  MICHELE D",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 93354,
    "HourlyRate": ""
  },
  {
    "Name": "ACOSTA,  NATALIE",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 80016,
    "HourlyRate": ""
  },
  {
    "Name": "ACOSTA,  PABLO S",
    "JobTitle": "SANITATION LABORER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 38.52
  },
  {
    "Name": "ACOSTA,  ROSA M",
    "JobTitle": "PARKING ENFORCEMENT AIDE",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 64392,
    "HourlyRate": ""
  },
  {
    "Name": "ACRES,  ANTHONY E",
    "JobTitle": "LABORER",
    "Department": "DAIS",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 43.72
  },
  {
    "Name": "ACSVECS,  ZAIREH",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "ACUNA,  ANIL",
    "JobTitle": "FIREFIGHTER-EMT (RECRUIT)",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 56304,
    "HourlyRate": ""
  },
  {
    "Name": "ACUNA AUSTIN,  VILMA E",
    "JobTitle": "SENIOR COMPANION",
    "Department": "FAMILY & SUPPORT",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 2.65
  },
  {
    "Name": "ADAIR,  KENNETH R",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "ADAIR,  STEVEN",
    "JobTitle": "SANITATION LABORER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 38.52
  },
  {
    "Name": "ADAMCZYK JR,  JAN",
    "JobTitle": "BOOTER - PARKING",
    "Department": "FINANCE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 34.83
  },
  {
    "Name": "ADAME,  CHRISTIAN",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "ADAME,  PEDRO",
    "JobTitle": "CUSTODIAL WORKER",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 22.1
  },
  {
    "Name": "ADAMIAK,  SIMON P",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMIK,  JEFFREY S",
    "JobTitle": "POLICE OFFICER (ASSIGNED AS DETECTIVE)",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 100980,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMIK,  MATTHEW W",
    "JobTitle": "FIREFIGHTER/PARAMEDIC",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 94476,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMOW,  JEFFREY W",
    "JobTitle": "FIREFIGHTER-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 92274,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMOWSKI,  ANDREW J",
    "JobTitle": "MOTOR TRUCK DRIVER",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "ADAMS,  CHRISTINA",
    "JobTitle": "TITLE V PROGRAM TRAINEE I",
    "Department": "FAMILY & SUPPORT",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 13
  },
  {
    "Name": "ADAMS,  DAVID E",
    "JobTitle": "SPECIAL EVENTS COORD III",
    "Department": "CULTURAL AFFAIRS",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 87564,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  DEANIE M",
    "JobTitle": "LIBRARIAN IV",
    "Department": "PUBLIC LIBRARY",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 74568,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  DENIS H",
    "JobTitle": "CLINICAL THERAPIST III",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 107208,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  DWAYNE D",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 87006,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  FREDA L",
    "JobTitle": "TRAFFIC CONTROL AIDE-HOURLY",
    "Department": "OEMC",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 19.86
  },
  {
    "Name": "ADAMS,  FREDERICK L",
    "JobTitle": "POLICE ADMINISTRATIVE CLERK",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 46428,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  GARY W",
    "JobTitle": "SANITATION LABORER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 38.52
  },
  {
    "Name": "ADAMS,  GREGORY M",
    "JobTitle": "AVIATION SECURITY OFFICER",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 64392,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  GREGORY W",
    "JobTitle": "ADMINISTRATIVE ASST III",
    "Department": "BUSINESS AFFAIRS",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 89808,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS III,  CRAIG W",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 76266,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  JAIRUS",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 76266,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  JAMES H",
    "JobTitle": "POOL MOTOR TRUCK DRIVER",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "ADAMS,  JAMES W",
    "JobTitle": "POLICE OFFICER (ASSIGNED AS DETECTIVE)",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 103932,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS JR,  JERRY M",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 96060,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS JR,  JOHN W",
    "JobTitle": "FIREFIGHTER-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 92274,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  KATELYN",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 76266,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  KAYLIE A",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMSKI,  JERRY J",
    "JobTitle": "FIREFIGHTER-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84870,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMSKI,  ROBERT",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  LEAH",
    "JobTitle": "PROGRAM AUDITOR II",
    "Department": "HOUSING",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 78120,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  MARJORIE E",
    "JobTitle": "LIBRARY PAGE",
    "Department": "PUBLIC LIBRARY",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 14.1
  },
  {
    "Name": "ADAMS,  MARSHANIKA S",
    "JobTitle": "CROSSING GUARD - PER CBA",
    "Department": "OEMC",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 13.94
  },
  {
    "Name": "ADAMS,  MATTHEW",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  MICHAEL J",
    "JobTitle": "WATCHMAN",
    "Department": "DAIS",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 23.38
  },
  {
    "Name": "ADAMS,  MICHELLE C",
    "JobTitle": "SUPERVISING PROGRAM AUDITOR",
    "Department": "HOUSING",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 67800,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  OLIVIA I",
    "JobTitle": "LEGAL SECRETARY",
    "Department": "LAW",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 89808,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  QUAN R",
    "JobTitle": "MOTOR TRUCK DRIVER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "ADAMS,  RAYMOND B",
    "JobTitle": "SR PROCUREMENT SPECIALIST",
    "Department": "PROCUREMENT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 79020,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  RAYMOND T",
    "JobTitle": "CAPTAIN-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 132732,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  ROBERT L",
    "JobTitle": "VENTILATION AND FURNACE INSPECTOR",
    "Department": "BUILDINGS",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 102211.2,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  ROSITA",
    "JobTitle": "CROSSING GUARD - PER CBA",
    "Department": "OEMC",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 16.65
  },
  {
    "Name": "ADAMS,  RYAN",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  SHEILA",
    "JobTitle": "GENERAL LABORER - DSS",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 23.74
  },
  {
    "Name": "ADAMS,  SHERYLL A",
    "JobTitle": "LIBRARIAN IV",
    "Department": "PUBLIC LIBRARY",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 107208,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  STANLEY",
    "JobTitle": "SUPVSR OF COMPENSATION",
    "Department": "BUSINESS AFFAIRS",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 96096,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  TANERA C",
    "JobTitle": "CIVIL ENGINEER IV",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 117072,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS THOMAS,  CHEEAREASE R",
    "JobTitle": "PUBLIC HEALTH ADMINISTRATOR I",
    "Department": "HEALTH",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 85704,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  TIMOTHY J",
    "JobTitle": "POLICE OFFICER (ASSIGNED AS DETECTIVE)",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 100980,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  VICKY M",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 93354,
    "HourlyRate": ""
  },
  {
    "Name": "ADAMS,  ZACHARY",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "ADCOCK,  DAVID G",
    "JobTitle": "SERGEANT",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 114948,
    "HourlyRate": ""
  },
  {
    "Name": "ADCOCK,  TOMMY W",
    "JobTitle": "CONCRETE LABORER",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 43.72
  },
  {
    "Name": "ADDANTE,  VINCENZO",
    "JobTitle": "POOL MOTOR TRUCK DRIVER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "ADDISON,  LATASHA D",
    "JobTitle": "LIBRARY CLERK",
    "Department": "PUBLIC LIBRARY",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 35124,
    "HourlyRate": ""
  },
  {
    "Name": "ADDISON,  LEWIS",
    "JobTitle": "LIBRARY ASSOCIATE",
    "Department": "PUBLIC LIBRARY",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 73932,
    "HourlyRate": ""
  },
  {
    "Name": "ADEBAYO,  BENJAMIN B",
    "JobTitle": "BUILDING/CONSTRUCTION INSPECTOR",
    "Department": "BUILDINGS",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 130092,
    "HourlyRate": ""
  },
  {
    "Name": "ADEBIMPE,  VENISE A",
    "JobTitle": "SENIOR COMPANION",
    "Department": "FAMILY & SUPPORT",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 2.65
  },
  {
    "Name": "ADE,  JAMES P",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "ADEKA,  IBILOLA I",
    "JobTitle": "SUPERVISING DISEASE CONTROL INVESTIGATOR - EXCL",
    "Department": "HEALTH",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 83628,
    "HourlyRate": ""
  },
  {
    "Name": "ADELAKUN,  NIKTE E",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "ADELMAN,  BRUCE E",
    "JobTitle": "LEGISLATIVE AIDE",
    "Department": "CITY COUNCIL",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 20568,
    "HourlyRate": ""
  },
  {
    "Name": "ADEN,  HIBO",
    "JobTitle": "FREEDOM OF INFORMATION ACT OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 58500,
    "HourlyRate": ""
  },
  {
    "Name": "ADENI,  MOHAMED K",
    "JobTitle": "ACCOUNTANT IV",
    "Department": "FINANCE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 107208,
    "HourlyRate": ""
  },
  {
    "Name": "ADENIYI,  MOSES O",
    "JobTitle": "AVIATION SECURITY OFFICER",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 50412,
    "HourlyRate": ""
  },
  {
    "Name": "ADESANYA,  EMMANUEL S",
    "JobTitle": "ENVIRONMENTAL ENGINEER III",
    "Department": "HEALTH",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 117072,
    "HourlyRate": ""
  },
  {
    "Name": "ADEWOLE,  KAREEM A",
    "JobTitle": "CONSTRUCTION LABORER",
    "Department": "WATER MGMNT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 43.72
  },
  {
    "Name": "ADEYEMO,  HORATIO A",
    "JobTitle": "ENGINEERING TECHNICIAN VI",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 108072,
    "HourlyRate": ""
  },
  {
    "Name": "ADEYEMO,  LATIFA",
    "JobTitle": "ACCOUNTING TECHNICIAN I",
    "Department": "FINANCE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 42960,
    "HourlyRate": ""
  },
  {
    "Name": "ADEYEMO,  MOJIROLA M",
    "JobTitle": "PUBLIC HEALTH ADMINISTRATOR I",
    "Department": "HEALTH",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 81840,
    "HourlyRate": ""
  },
  {
    "Name": "ADKINS,  KERRI M",
    "JobTitle": "POLICE COMMUNICATIONS OPERATOR I",
    "Department": "OEMC",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 85056,
    "HourlyRate": ""
  },
  {
    "Name": "ADKINS,  WILLIAM J",
    "JobTitle": "SUPERVISING FIRE COMMUNICATIONS OPERATOR",
    "Department": "OEMC",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 121472.04,
    "HourlyRate": ""
  },
  {
    "Name": "ADLER,  LAURA R",
    "JobTitle": "LIBRARIAN I",
    "Department": "PUBLIC LIBRARY",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 57384,
    "HourlyRate": ""
  },
  {
    "Name": "ADLER,  TRACY L",
    "JobTitle": "SERGEANT",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 111444,
    "HourlyRate": ""
  },
  {
    "Name": "ADOLFIE,  ELIZABETH U",
    "JobTitle": "ADMINISTRATIVE ASST III",
    "Department": "BUSINESS AFFAIRS",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 81840,
    "HourlyRate": ""
  },
  {
    "Name": "ADOLFIE JR,  WALTER S",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 96060,
    "HourlyRate": ""
  },
  {
    "Name": "ADREANI,  JOHN J",
    "JobTitle": "FIRE ENGINEER-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 107106,
    "HourlyRate": ""
  },
  {
    "Name": "ADRIAN,  CHERI A",
    "JobTitle": "SERGEANT",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 122472,
    "HourlyRate": ""
  },
  {
    "Name": "ADRIAN,  JOHN P",
    "JobTitle": "ASST CHIEF AIRPORT OPERATIONS SUPVSR",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 130092,
    "HourlyRate": ""
  },
  {
    "Name": "AGUILAR,  ELMA M",
    "JobTitle": "ANIMAL CARE AIDE I",
    "Department": "ANIMAL CONTRL",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 74568,
    "HourlyRate": ""
  },
  {
    "Name": "AGUILAR,  EVARISTO P",
    "JobTitle": "MOTOR TRUCK DRIVER",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "AGUILAR,  GUADALUPE",
    "JobTitle": "SIGN HANGER",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 31.12
  },
  {
    "Name": "AGUILAR,  IRENE",
    "JobTitle": "SANITATION CLERK",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 74532,
    "HourlyRate": ""
  },
  {
    "Name": "AGUILAR,  JESUS D",
    "JobTitle": "PARAMEDIC I/C",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 91080,
    "HourlyRate": ""
  },
  {
    "Name": "AGUILAR JR,  CARLOS",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 48078,
    "HourlyRate": ""
  },
  {
    "Name": "AGUILAR JR,  ROBERT",
    "JobTitle": "POOL MOTOR TRUCK DRIVER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "AGUILAR,  JUANITA M",
    "JobTitle": "EDITORIAL ASST",
    "Department": "CITY CLERK",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 71220,
    "HourlyRate": ""
  },
  {
    "Name": "AGUILAR,  KARINA D",
    "JobTitle": "SERGEANT",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 118644,
    "HourlyRate": ""
  },
  {
    "Name": "AGUILAR,  LUIS",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "AGUILAR,  RANDY J",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "AGUILAR,  RAY R",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 87006,
    "HourlyRate": ""
  },
  {
    "Name": "AGUILAR,  RICARDO L",
    "JobTitle": "ANIMAL CONTROL OFFICER",
    "Department": "ANIMAL CONTRL",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 70644,
    "HourlyRate": ""
  },
  {
    "Name": "AGUILAR,  ROBERT",
    "JobTitle": "MOTOR TRUCK DRIVER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "AGUILERA,  HORACIO",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "AGUILERA,  JESUS",
    "JobTitle": "SANITATION LABORER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 38.52
  },
  {
    "Name": "AGUILERA,  JUAN A",
    "JobTitle": "STREET LIGHT REPAIR WORKER",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 111072,
    "HourlyRate": ""
  },
  {
    "Name": "AGUILERA,  LINDA M",
    "JobTitle": "SERGEANT",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 114948,
    "HourlyRate": ""
  },
  {
    "Name": "AGUILERA,  MARIA C",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "AGUILERA,  TONY",
    "JobTitle": "MOTOR TRUCK DRIVER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "AGUILOS,  ALEKHINE P",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 68616,
    "HourlyRate": ""
  },
  {
    "Name": "AGUINAGA,  ALYSSA M",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 68616,
    "HourlyRate": ""
  },
  {
    "Name": "AGUINAGA,  JOHN P",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 96060,
    "HourlyRate": ""
  },
  {
    "Name": "AGUINAGA,  MEGAN E",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 87006,
    "HourlyRate": ""
  },
  {
    "Name": "AGUIRRE,  ALEX",
    "JobTitle": "SANITATION LABORER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 38.52
  },
  {
    "Name": "AGUIRRE,  ANTHONY J",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "AGUIRRE,  ENRIQUE",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 87006,
    "HourlyRate": ""
  },
  {
    "Name": "AGUIRRE,  GUADALUPE",
    "JobTitle": "ADMINISTRATIVE SERVICES OFFICER II",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 118608,
    "HourlyRate": ""
  },
  {
    "Name": "AGUIRRE,  GUADALUPE G",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "AGUIRRE,  JOSEPH R",
    "JobTitle": "POLICE OFFICER (ASSIGNED AS DETECTIVE)",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 103932,
    "HourlyRate": ""
  },
  {
    "Name": "AGUIRRE,  JUAN M",
    "JobTitle": "POLICE OFFICER (ASSIGNED AS EVIDENCE TECHNICIAN)",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 100980,
    "HourlyRate": ""
  },
  {
    "Name": "AGUIRRE,  JULIAN J",
    "JobTitle": "MOTOR TRUCK DRIVER",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "AGUIRRE,  PABLO",
    "JobTitle": "SERGEANT",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 111444,
    "HourlyRate": ""
  },
  {
    "Name": "AGUIRRE,  RAMIRO",
    "JobTitle": "SERGEANT",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 111444,
    "HourlyRate": ""
  },
  {
    "Name": "AGUIRRE,  ROBERT J",
    "JobTitle": "LOAD DISPATCHER",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 111072,
    "HourlyRate": ""
  },
  {
    "Name": "AGUIRRE,  TANYA L",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 96060,
    "HourlyRate": ""
  },
  {
    "Name": "AGUNLOYE,  JOSEPH O",
    "JobTitle": "TITLE V PROGRAM TRAINEE I",
    "Department": "FAMILY & SUPPORT",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 13
  },
  {
    "Name": "AGUSTIN,  DALEN J",
    "JobTitle": "FIREFIGHTER-EMT (RECRUIT)",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "AHARANWA,  ALEXANDER E",
    "JobTitle": "LIBRARIAN I",
    "Department": "PUBLIC LIBRARY",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 81432,
    "HourlyRate": ""
  },
  {
    "Name": "AHEARN,  DORY E",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 93354,
    "HourlyRate": ""
  },
  {
    "Name": "AHERN,  MICHAEL J",
    "JobTitle": "LIEUTENANT-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 117996,
    "HourlyRate": ""
  },
  {
    "Name": "AHERN,  SCOTT E",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 96060,
    "HourlyRate": ""
  },
  {
    "Name": "AHERN,  THOMAS J",
    "JobTitle": "ASST DIR OF NEWS AFFAIRS",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 115656,
    "HourlyRate": ""
  },
  {
    "Name": "AHLGRIM,  MICHAEL L",
    "JobTitle": "FIREFIGHTER-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 89148,
    "HourlyRate": ""
  },
  {
    "Name": "AHLHEIM,  MARGARET L",
    "JobTitle": "CAPTAIN-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 128826,
    "HourlyRate": ""
  },
  {
    "Name": "AHMAD,  FADI M",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 87006,
    "HourlyRate": ""
  },
  {
    "Name": "AHMAD,  FAROOQ",
    "JobTitle": "LABORER",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 38.09
  },
  {
    "Name": "AHMAD,  MOHAMMED A",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 76266,
    "HourlyRate": ""
  },
  {
    "Name": "AHMAD,  MUSA",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 80016,
    "HourlyRate": ""
  },
  {
    "Name": "AHMED,  KHALID",
    "JobTitle": "CHIEF PROGRAMMER/ANALYST",
    "Department": "WATER MGMNT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 136320,
    "HourlyRate": ""
  },
  {
    "Name": "AHMED,  MOHAMMAD A",
    "JobTitle": "PARKING ENFORCEMENT AIDE",
    "Department": "FINANCE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 58644,
    "HourlyRate": ""
  },
  {
    "Name": "AHMED,  MOHAMMED K",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 80016,
    "HourlyRate": ""
  },
  {
    "Name": "AHMED,  NAEEMA",
    "JobTitle": "CHIEF VOUCHER EXPEDITER",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 64236,
    "HourlyRate": ""
  },
  {
    "Name": "AHMED,  NAFEES",
    "JobTitle": "DEPUTY COMMISSIONER",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 126504,
    "HourlyRate": ""
  },
  {
    "Name": "AHMED,  QUAZI S",
    "JobTitle": "CRIMINAL HISTORY ANALYST",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 98496,
    "HourlyRate": ""
  },
  {
    "Name": "AHMED,  RIZWANA P",
    "JobTitle": "SENIOR RESEARCH ANALYST",
    "Department": "HOUSING & ECON DEV",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 89916,
    "HourlyRate": ""
  },
  {
    "Name": "AHMED,  SHAHRUKH Z",
    "JobTitle": "DATA ENTRY OPERATOR",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 53856,
    "HourlyRate": ""
  },
  {
    "Name": "AHMED,  SYED",
    "JobTitle": "FIELD SERVICE SPECIALIST II",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 67212,
    "HourlyRate": ""
  },
  {
    "Name": "AHMED,  TANVIR",
    "JobTitle": "CHIEF AIRPORT OPERATIONS SUPVSR",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 86688,
    "HourlyRate": ""
  },
  {
    "Name": "AHMETI,  FATON",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "AHSAN,  HAMEED M",
    "JobTitle": "DIR OF INFORMATION SYSTEMS",
    "Department": "FAMILY & SUPPORT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 110052,
    "HourlyRate": ""
  },
  {
    "Name": "AHSANULLAH,  SABBIR M",
    "JobTitle": "PARAMEDIC",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 56304,
    "HourlyRate": ""
  },
  {
    "Name": "AICH,  ABRAHAM A",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "AICH,  ALVARO A",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 93354,
    "HourlyRate": ""
  },
  {
    "Name": "AICH,  CHRISTOPHER J",
    "JobTitle": "LIBRARY CLERK - HOURLY",
    "Department": "PUBLIC LIBRARY",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 18.01
  },
  {
    "Name": "AIKENS,  CATHERINE",
    "JobTitle": "PERSONAL COMPUTER OPERATOR I",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 59088,
    "HourlyRate": ""
  },
  {
    "Name": "AIKENS,  CLORA M",
    "JobTitle": "PUBLIC HEALTH NURSE IV",
    "Department": "HEALTH",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 114948,
    "HourlyRate": ""
  },
  {
    "Name": "AIKIN JR,  LAWRENCE J",
    "JobTitle": "POLICE OFFICER (ASSIGNED AS DETECTIVE)",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 100980,
    "HourlyRate": ""
  },
  {
    "Name": "AIKONEDO,  ESTHER",
    "JobTitle": "CUSTODIAL WORKER",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 15.55
  },
  {
    "Name": "AIKONEDO JR,  PAUL E",
    "JobTitle": "TRAFFIC CONTROL AIDE-HOURLY",
    "Department": "OEMC",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 19.86
  },
  {
    "Name": "AIMERS,  JAMES",
    "JobTitle": "POLICE OFFICER / FLD TRNG OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 88296,
    "HourlyRate": ""
  },
  {
    "Name": "AIMONOVITCH,  AMY",
    "JobTitle": "LIBRARIAN I",
    "Department": "PUBLIC LIBRARY",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 63228,
    "HourlyRate": ""
  },
  {
    "Name": "AINALAKIS,  EVAGELOS J",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "AINUDDIN,  SAL N",
    "JobTitle": "MOTOR TRUCK DRIVER",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "AINUDDIN,  ZAHID N",
    "JobTitle": "MOTOR TRUCK DRIVER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "AITKEN,  CAMUHOO R",
    "JobTitle": "POOL MOTOR TRUCK DRIVER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "AJENIFUJA,  OLADIPO I",
    "JobTitle": "POOL MOTOR TRUCK DRIVER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 10,
    "AnnualSalary": "",
    "HourlyRate": 29.96
  },
  {
    "Name": "AJZYK,  EDWARD G",
    "JobTitle": "PRINCIPAL CLERK-ELECTIONS",
    "Department": "BOARD OF ELECTION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 71304,
    "HourlyRate": ""
  },
  {
    "Name": "AKAKPO,  KODJO B",
    "JobTitle": "FIREFIGHTER-EMT (RECRUIT)",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "AKANA,  MARK S",
    "JobTitle": "POLICE OFFICER/EXPLSV DETECT K9 HNDLR",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 100980,
    "HourlyRate": ""
  },
  {
    "Name": "AKERS,  DEREC A",
    "JobTitle": "FIREFIGHTER-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 99324,
    "HourlyRate": ""
  },
  {
    "Name": "AKERSON,  WILLIE D",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 76266,
    "HourlyRate": ""
  },
  {
    "Name": "AKERSON,  WILLIE L",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 96060,
    "HourlyRate": ""
  },
  {
    "Name": "AKHTAR,  SYED J",
    "JobTitle": "OPERATING ENGINEER-GROUP A",
    "Department": "DAIS",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 51.85
  },
  {
    "Name": "AKINBUSUYI,  AYOKUNLE",
    "JobTitle": "POLICE OFFICER (ASSIGNED AS DETECTIVE)",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 94122,
    "HourlyRate": ""
  },
  {
    "Name": "AKINDE,  SARAH",
    "JobTitle": "WATER CHEMIST II",
    "Department": "WATER MGMNT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 63228,
    "HourlyRate": ""
  },
  {
    "Name": "AKINS,  KIMBERLY L",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "AKINS,  LISA",
    "JobTitle": "SANITATION LABORER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 40.78
  },
  {
    "Name": "AKINS,  LOU ANN",
    "JobTitle": "MOTOR TRUCK DRIVER",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "AKINS,  MONICA E",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 87006,
    "HourlyRate": ""
  },
  {
    "Name": "AKINS,  ROBIN G",
    "JobTitle": "POLICE OFFICER (ASSIGNED AS EVIDENCE TECHNICIAN)",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 91338,
    "HourlyRate": ""
  },
  {
    "Name": "AKOMAA,  MERCY",
    "JobTitle": "PUBLIC HEALTH NUTRITIONIST I",
    "Department": "HEALTH",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 45672,
    "HourlyRate": ""
  },
  {
    "Name": "AKRES,  DANIELLE N",
    "JobTitle": "SANITATION CLERK",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 48576,
    "HourlyRate": ""
  },
  {
    "Name": "AKUI,  KHADIJAH M",
    "JobTitle": "TRAFFIC CONTROL AIDE-HOURLY",
    "Department": "OEMC",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 19.86
  },
  {
    "Name": "ALAGNA,  STEVEN O",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 96060,
    "HourlyRate": ""
  },
  {
    "Name": "ALAGNO,  THOMAS",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "ALAKA,  KADIJAT T",
    "JobTitle": "CLINICAL THERAPIST III",
    "Department": "HEALTH",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 74568,
    "HourlyRate": ""
  },
  {
    "Name": "AL AMIN,  HASAN M",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 93354,
    "HourlyRate": ""
  },
  {
    "Name": "AL AMIN,  HASSAN",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 96060,
    "HourlyRate": ""
  },
  {
    "Name": "AL AMIN,  RASHEEDAH K",
    "JobTitle": "SENIOR COMPANION",
    "Department": "FAMILY & SUPPORT",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 2.65
  },
  {
    "Name": "ALAM,  SYED S",
    "JobTitle": "CHIEF VOUCHER EXPEDITER",
    "Department": "FINANCE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 98496,
    "HourlyRate": ""
  },
  {
    "Name": "ALANI,  OMAR",
    "JobTitle": "CIVIL ENGINEER IV",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84780,
    "HourlyRate": ""
  },
  {
    "Name": "ALANIS,  JOSE E",
    "JobTitle": "POLICE OFFICER (ASSIGNED AS DETECTIVE)",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 103932,
    "HourlyRate": ""
  },
  {
    "Name": "ALANIS,  OSCAR",
    "JobTitle": "MACHINIST (AUTOMOTIVE)",
    "Department": "DAIS",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 48.93
  },
  {
    "Name": "ALANIZ,  BRIAN",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "ALANIZ,  CHERI",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "ALANIZ,  ELIZABETH",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "ALANIZ,  MICHAEL R",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "ALANIZ,  SANDRA",
    "JobTitle": "ADMINISTRATIVE ASST III",
    "Department": "PUBLIC SAFETY ADMIN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 78120,
    "HourlyRate": ""
  },
  {
    "Name": "ALANZO,  SHARON",
    "JobTitle": "PUBLIC HEALTH NURSE I",
    "Department": "HEALTH",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 103272,
    "HourlyRate": ""
  },
  {
    "Name": "ALARCON,  ERASMO",
    "JobTitle": "CHIEF AIRPORT OPERATIONS SUPVSR",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 82788,
    "HourlyRate": ""
  },
  {
    "Name": "ALARCON,  LUIS J",
    "JobTitle": "LOAN PROCESSING OFFICER",
    "Department": "HOUSING",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 89808,
    "HourlyRate": ""
  },
  {
    "Name": "ALATORRE,  FRANK J",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 87006,
    "HourlyRate": ""
  },
  {
    "Name": "ALAWAWDA,  RAKAN F",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "ALBAKRI,  FARES",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "ALBANO,  MARC N",
    "JobTitle": "FIREFIGHTER-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 89148,
    "HourlyRate": ""
  },
  {
    "Name": "ALBARILLO,  VERBENA S",
    "JobTitle": "PUBLIC HEALTH NUTRITIONIST III",
    "Department": "HEALTH",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72840,
    "HourlyRate": ""
  },
  {
    "Name": "ALBARRAN,  DAISY",
    "JobTitle": "LIBRARY ASSOCIATE",
    "Department": "PUBLIC LIBRARY",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 54540,
    "HourlyRate": ""
  },
  {
    "Name": "ALBARRAN,  FABIAN",
    "JobTitle": "FIREFIGHTER-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 95484,
    "HourlyRate": ""
  },
  {
    "Name": "ALBARRAN,  FRANK J",
    "JobTitle": "COORDINATING FIRE COMMUNICATIONS OPERATOR",
    "Department": "OEMC",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 129792,
    "HourlyRate": ""
  },
  {
    "Name": "ALBARRAN JR,  JAVIER",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "ALBA,  SAUL B",
    "JobTitle": "MOTOR TRUCK DRIVER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "ALBERT,  DONNA",
    "JobTitle": "POLICE OFFICER (ASSIGNED AS DETECTIVE)",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 91080,
    "HourlyRate": ""
  },
  {
    "Name": "ALBERT III,  THOMAS M",
    "JobTitle": "FIREFIGHTER/PARAMEDIC",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 86892,
    "HourlyRate": ""
  },
  {
    "Name": "ALBERTO,  DAVID",
    "JobTitle": "SHEET METAL WORKER",
    "Department": "DAIS",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 45.5
  },
  {
    "Name": "ALBIN,  RAYMOND M",
    "JobTitle": "EQUIPMENT DISPATCHER",
    "Department": "DAIS",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 38.11
  },
  {
    "Name": "ALBIZUREZ,  HECTOR F",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 80016,
    "HourlyRate": ""
  },
  {
    "Name": "ALBRECHT,  DANIEL R",
    "JobTitle": "MACHINIST (AUTOMOTIVE)",
    "Department": "DAIS",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 48.93
  },
  {
    "Name": "ALBRECHT,  DAWN M",
    "JobTitle": "POLICE OFFICER / FLD TRNG OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 91338,
    "HourlyRate": ""
  },
  {
    "Name": "ALBRIGHT,  ERIK A",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "ALBRIGHT,  KEITH E",
    "JobTitle": "FIRE ENGINEER-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 107106,
    "HourlyRate": ""
  },
  {
    "Name": "ALBRITTON,  DELORES",
    "JobTitle": "TITLE V PROGRAM TRAINEE I",
    "Department": "FAMILY & SUPPORT",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 13
  },
  {
    "Name": "ALBRITTON,  JOSEPH A",
    "JobTitle": "DEPUTY COMMISSIONER",
    "Department": "DISABILITIES",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 104712,
    "HourlyRate": ""
  },
  {
    "Name": "ALCALA,  DAVID A",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "ALCALA,  JOSE P",
    "JobTitle": "CONSTRUCTION LABORER",
    "Department": "WATER MGMNT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 43.72
  },
  {
    "Name": "ALCALA,  RUBEN",
    "JobTitle": "SANITATION LABORER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 38.52
  },
  {
    "Name": "ALCANTARA,  ROSIO",
    "JobTitle": "CROSSING GUARD - PER CBA",
    "Department": "OEMC",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 15.94
  },
  {
    "Name": "ALCANTAR,  DENISE G",
    "JobTitle": "EQUIPMENT DISPATCHER",
    "Department": "DAIS",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 38.11
  },
  {
    "Name": "ALCANTAR,  RAMIRO",
    "JobTitle": "STREET LIGHT REPAIR WORKER",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 111072,
    "HourlyRate": ""
  },
  {
    "Name": "ALCARAZ,  ANGEL G",
    "JobTitle": "ASST CORPORATION COUNSEL SUPVSR",
    "Department": "LAW",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 98424,
    "HourlyRate": ""
  },
  {
    "Name": "ALCARAZ JR,  RICARDO",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 76266,
    "HourlyRate": ""
  },
  {
    "Name": "ALCARAZ,  YOLANDA",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 68616,
    "HourlyRate": ""
  },
  {
    "Name": "ALCAUTER,  BELEN",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 80016,
    "HourlyRate": ""
  },
  {
    "Name": "ALCAUTER,  ELIASARD",
    "JobTitle": "FIREFIGHTER-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 92274,
    "HourlyRate": ""
  },
  {
    "Name": "ALCAUTER,  JESUS",
    "JobTitle": "FIREFIGHTER-EMT (RECRUIT)",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 68616,
    "HourlyRate": ""
  },
  {
    "Name": "ALCAZAR,  ANTOINETTE",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 87006,
    "HourlyRate": ""
  },
  {
    "Name": "ALCAZAR,  CYNTHIA",
    "JobTitle": "CONSTRUCTION LABORER",
    "Department": "WATER MGMNT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 43.72
  },
  {
    "Name": "ALCAZAR,  DAVID E",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 87006,
    "HourlyRate": ""
  },
  {
    "Name": "ALCAZAR,  GUADALUPE R",
    "JobTitle": "PUBLIC HEALTH NURSE II",
    "Department": "HEALTH",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 108468,
    "HourlyRate": ""
  },
  {
    "Name": "ALCAZAR,  VICTOR A",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 93354,
    "HourlyRate": ""
  },
  {
    "Name": "ALCOZER,  JOSEPH",
    "JobTitle": "TRAFFIC SIGNAL REPAIRMAN",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 111072,
    "HourlyRate": ""
  },
  {
    "Name": "ALDAHONDO,  GIL A",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 87006,
    "HourlyRate": ""
  },
  {
    "Name": "ALDANA,  CARLOS J",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 90024,
    "HourlyRate": ""
  },
  {
    "Name": "ALDANA,  J F",
    "JobTitle": "CONSTRUCTION LABORER",
    "Department": "WATER MGMNT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 43.72
  },
  {
    "Name": "ALDERDEN,  JACOB M",
    "JobTitle": "CAPTAIN",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 142032,
    "HourlyRate": ""
  },
  {
    "Name": "ALDRICH,  JEFFREY S",
    "JobTitle": "SERGEANT",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 118644,
    "HourlyRate": ""
  },
  {
    "Name": "ALDRIDGE,  DERRICK",
    "JobTitle": "POOL MOTOR TRUCK DRIVER",
    "Department": "AVIATION",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 10,
    "AnnualSalary": "",
    "HourlyRate": 29.96
  },
  {
    "Name": "ALDUGOM,  NABIL K",
    "JobTitle": "SANITATION CLERK",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 71172,
    "HourlyRate": ""
  },
  {
    "Name": "ALDUINO,  AMANDA R",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 72510,
    "HourlyRate": ""
  },
  {
    "Name": "ALDWORTH,  JAMES P",
    "JobTitle": "LIEUTENANT-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 117996,
    "HourlyRate": ""
  },
  {
    "Name": "ALEGADO,  ROBERTO S",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 93354,
    "HourlyRate": ""
  },
  {
    "Name": "ALEGADO,  SAMUEL M",
    "JobTitle": "OPERATING ENGINEER-GROUP C",
    "Department": "AVIATION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 49.26
  },
  {
    "Name": "ALEGRE,  DAVID",
    "JobTitle": "POLICE OFFICER / FLD TRNG OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 88296,
    "HourlyRate": ""
  },
  {
    "Name": "ALEGRIA,  ARTURO M",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 84054,
    "HourlyRate": ""
  },
  {
    "Name": "ALEGRIA,  CRISTINA G",
    "JobTitle": "SENIOR CLERK-ELECTIONS",
    "Department": "BOARD OF ELECTION",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 34860,
    "HourlyRate": ""
  },
  {
    "Name": "ALEJANDRE-GONZALEZ,  HECTOR",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 68616,
    "HourlyRate": ""
  },
  {
    "Name": "ALEJO,  JUAN A",
    "JobTitle": "TESTING SPECIALIST",
    "Department": "HUMAN RESOURCES",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 78828,
    "HourlyRate": ""
  },
  {
    "Name": "ALEJO,  LUIS F",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 93354,
    "HourlyRate": ""
  },
  {
    "Name": "ALEMAN,  GEORGE",
    "JobTitle": "FIREFIGHTER-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 92274,
    "HourlyRate": ""
  },
  {
    "Name": "ALEMAN,  JESUS",
    "JobTitle": "FOREMAN OF WATER PIPE CONSTRUCTION",
    "Department": "WATER MGMNT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 54.05
  },
  {
    "Name": "ALEMZADEH,  ABDOLREZA",
    "JobTitle": "FILTRATION ENGINEER IV",
    "Department": "WATER MGMNT",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 82236,
    "HourlyRate": ""
  },
  {
    "Name": "ALEQUIN,  ANA I",
    "JobTitle": "PROPERTY CUSTODIAN",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 74568,
    "HourlyRate": ""
  },
  {
    "Name": "ALEQUIN,  CURTIS E",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 76266,
    "HourlyRate": ""
  },
  {
    "Name": "ALESSI,  ROBERT W",
    "JobTitle": "FIREFIGHTER-EMT",
    "Department": "FIRE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 89148,
    "HourlyRate": ""
  },
  {
    "Name": "ALESZCZYK,  ADAM S",
    "JobTitle": "POLICE TECHNICIAN",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 94524,
    "HourlyRate": ""
  },
  {
    "Name": "ALEXA,  MICHELENE A",
    "JobTitle": "LIEUTENANT",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 137538,
    "HourlyRate": ""
  },
  {
    "Name": "ALEXANDER,  CALVIN",
    "JobTitle": "POOL MOTOR TRUCK DRIVER",
    "Department": "STREETS & SAN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 37.45
  },
  {
    "Name": "ALEXANDER,  CLEMMIE",
    "JobTitle": "LABORER",
    "Department": "TRANSPORTN",
    "EmploymentStatus": "FT",
    "EmployeeType": "Hourly",
    "StandardHours": 40,
    "AnnualSalary": "",
    "HourlyRate": 43.72
  },
  {
    "Name": "ALEXANDER,  DANA",
    "JobTitle": "DEPUTY DIR",
    "Department": "OEMC",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 127776,
    "HourlyRate": ""
  },
  {
    "Name": "ALEXANDER,  DARLENE",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 93354,
    "HourlyRate": ""
  },
  {
    "Name": "ALEXANDER,  DOMINIQUE A",
    "JobTitle": "POLICE OFFICER",
    "Department": "POLICE",
    "EmploymentStatus": "FT",
    "EmployeeType": "Salary",
    "StandardHours": "",
    "AnnualSalary": 68616,
    "HourlyRate": ""
  },
  {
    "Name": "ALEXANDER,  DORIS A",
    "JobTitle": "CROSSING GUARD",
    "Department": "OEMC",
    "EmploymentStatus": "PT",
    "EmployeeType": "Hourly",
    "StandardHours": 20,
    "AnnualSalary": "",
    "HourlyRate": 20.31
  }
];

db.EmpRecord.deleteMany({})
  .then(() => db.EmpRecord.collection.insertMany(empRecordSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
