const data = {
    area: [
        {areaId: 'Area 1'},
        {areaId: 'Area 2'},
        {areaId: 'Area 3'},
        {areaId: 'Area 4'},
        {areaId: 'Area 5'},
        {areaId: 'Area 6'}
    ],
    subarea : [
        {subAreaId: 'Subarea 1'},
        {subAreaId: 'Subarea 2'},
        {subAreaId: 'Subarea 3'},
        {subAreaId: 'Subarea 4'},
        {subAreaId: 'Subarea 5'},
        {subAreaId: 'Subarea 6'}
    ],
    indexPages : { 
        user : [
          {
            displayText : 'Tool Life Monitoring Details',
            link: '/toolsonshopfloor'
          }
        ],
        admin: [ 
          {
            displayText : 'Tool Database',
            link: '/tooldatabase'
          },
          {
            displayText : 'Tools in Shop',
            link: '/toolsinshop'
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
                value : "Drilling Machine"
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
                value : "M123"
            },
            {
                header : "Tool Life Unit",
                value : "M123"
            },
            {
                header : "Last Drawn Stock",
                value : "M123"
            },
            {
                header : "Remaining units in Store",
                value : "M123"
            },
            {
                header : "Locations",
                value : "M123"
            },
            {
                header : "Order Lead Time",
                value : "M123"
            },
            {
                header : "Supplier Name",
                value : "M123"
            },
            {
                header : "Material",
                value : "M123"
            },
            {
                header : "Critical Parameter measure",
                value : "M123"
            },
            {
                header : "Critical Parameter measure unit",
                value : "M123"
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
                    value : "29-OCt-2021"
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