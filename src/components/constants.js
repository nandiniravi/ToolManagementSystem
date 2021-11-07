const data = {
    indexPages : { 
        user : [
          {
            displayText : 'Tool Life Monitoring Details',
            link: '/toolsonshopfloor'
          },
          {
            displayText : 'Alerts',
            link: '/alerts'
          },
          {
            displayText : 'Logout',
            link: '/'
          }
        ],
        admin: [ 
          {
            displayText : 'Master Tool List',
            link: '/tooldatabase'
          },
          {
            displayText : 'Tools History',
            link: '/toolshistory'
          },
          {
            displayText : 'Tools In Shop',
            link: '/toolsonshopfloor'
          },
          {
            displayText : 'Reports',
            link: '/reports'
          },
          {
            displayText : 'Logout',
            link: '/'
          }
        ]
    },
    dummyData : [
        {
            data : [{
                header : "Tool Number",
                value : "M123"
            },
            {
                header : "Tool Name",
                value : "Drilling Bit"
            },
            {
                header : "Description",
                value : "Drills a hole"
            },
            {
                header : "Machines Compatibility",
                value : "M123"
            },
            {
                header : "Tool Life",
                value : "50"
            },
            {
                header : "Tool Life Unit",
                value : "jobs"
            },
            {
                header : "Last Drawn Stock",
                value : "28-10-2021"
            },
            {
                header : "Remaining units in Store",
                value : "20"
            },
            // {
            //     header : "Locations",
            //     value : "Workshop"
            // },
            {
                header : "Order Lead Time",
                value : "2 days"
            },
            {
                header : "Supplier Name",
                value : "Bosch Tools"
            },
            // {
            //     header : "Material",
            //     value : "xyz"
            // },
            {
                header : "Critical Parameter measure",
                value : "10"
            },
            {
                header : "Critical Parameter measure unit",
                value : "cm"
            }]},
            {
                data : [{
                    header : "SNo.",
                    value : "1"
                },
                {
                    header : "Tool Number",
                    value : "TN1"
                },
                {
                    header : "Tool Name",
                    value : "Drilling Machine"
                },
                {
                    header : "Machine",
                    value : "M123"
                },
                {
                    header : "Workshop",
                    value : "Workshop 1"
                },
                {
                    header : "Changed On",
                    value : "29-OCT-2021"
                },
                {
                    header : "Changed By",
                    value : "S9050757"
                },
                {
                    header : "Pieces Worked upon",
                    value : "25"
                },
                {
                    header : "Expected Remaining Life",
                    value : "40"
                },
                {
                    header : "Expected Change Date",
                    value : "29-Nov-2021"
                },
                {
                    header : "Remaining Stock",
                    value : "15"
                }]
            },
            {
                data : [{
                    header : "Request Id",
                    value : "1"
                },
                {
                    header : "Tool Number",
                    value : "TN1"
                },
                {
                    header : "Drawn Date",
                    value : "18-10-2021"
                },
                {
                    header : "Disposed Date",
                    value : "28-10-2021"
                },
                {
                    header : "Disposed Reason",
                    value : "Tool broken"
                },
                {
                    header : "Tool Life",
                    value : "25 jobs"
                },
                {
                    header : "Machine Used",
                    value : "M123"
                },
                {
                    header : "Comments",
                    value : "Tool broken"
                },
                {
                    header : "Change in Operator ID",
                    value : "S9050757"
                },
                {
                    header : "Change out Operator ID",
                    value : "S9050757"
                }]
            }
    ],
    toolLifeData : [{
        toolName: 'Tool A',
        avgLife : 25
    },
    {toolName: 'Tool B',
    avgLife : 30},
    {toolName: 'Tool C',
    avgLife : 33},
    {toolName: 'Tool D',
    avgLife : 40},
    {toolName: 'Tool E',
    avgLife : 42}
    ],
    toolOrderHistory : [{
        toolName: 'Tool A',
        noOfOrders : 150
    },
    {toolName: 'Tool B',
    noOfOrders : 80},
    {toolName: 'Tool C',
    noOfOrders : 133},
    {toolName: 'Tool D',
    noOfOrders : 140},
    {toolName: 'Tool E',
    noOfOrders : 62}
    ]
} 

export default data;