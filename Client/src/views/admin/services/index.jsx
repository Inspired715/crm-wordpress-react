import Table from "components/table";
import buy from "assets/img/layout/buy.png";
import book from "assets/img/layout/book.png";

export default function Services() {

const eventTableData = [
  {
    created_at: 'January 1, 2023',
    service: 'Social Media Management - Instagram Management',
    ser_name:'@sarahschwartz',
    commission: "$1000.00"
  },{
    created_at: 'January 1, 2023',
    service: 'Social Media Management - Instagram Management',
    ser_name:'@sarahschwartz',
    commission: "$1000.00"
  },{
    created_at: 'January 1, 2023',
    service: 'Social Media Management - Instagram Management',
    ser_name:'@sarahschwartz',
    commission: "$1000.00"
  },{
    created_at: 'January 1, 2023',
    service: 'Social Media Management - Instagram Management',
    ser_name:'@sarahschwartz',
    commission: "$1000.00"
  },{
    created_at: 'January 1, 2023',
    service: 'Social Media Management - Instagram Management',
    ser_name:'@sarahschwartz',
    commission: "$1000.00"
  },{
    created_at: 'January 1, 2023',
    service: 'Social Media Management - Instagram Management',
    ser_name:'@sarahschwartz',
    commission: "$1000.00"
  }
];

const columns = [
    {
      Header: "servicelist",
      hideHeader: true,
      columns: [
        {
          Header: "Date",
          accessor: "created_at"
        },
        {
          Header: "Services",
          accessor: "service",
          Cell:(row) => {
            return (
              <div>{row.row.original.service}<br/>{row.row.original.ser_name}</div>
            )
          }
        },
        {
          Header: "Commission",
          accessor: "commission",
          Cell:(row) => {
            return(
              <div className="text-center">{row.row.original.commission}</div>
            )
          }
        },
        {
          Header: "Action",
          Cell: () => {
            return (
              <div className="flex justify-between">
                <img src={book} className="w-[45px] h-[45px] cursor-pointer" alt="gateway book"/>
                <img src={buy} className="w-[45px] h-[45px] cursor-pointer" alt="gateway buy"/>
              </div>
            )
          }
        },
      ],
    },
  ];

  return (
    <div className="h-full overflow-auto">
      <div className="flex w-full flex-col rounded-[22px] bg-cover px-[20px] py-[20px] bg-yellow">
        <div className="w-full">
          <div className="bg-black rounded-[20px] p-5 grid grid-cols-1 gap-5 md:grid-cols-5 lg:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5 text-white">
            <div className="flex justify-center flex-col col-span-3">
                <label className="text-[12px] text-grey">CLIENT'S NAME</label>
                <label className="">BRADO'BRIEN</label> 
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 col-span-2">
                <div className="flex justify-center flex-col col-span-1">
                    <label className="text-[12px] text-grey">EMAIL</label>
                    <label  className="text-[10px] text-grey">bradobren@gmail.com</label> 
                </div>
                <div className="flex justify-center flex-col col-span-1">
                    <label className="text-[12px] text-grey">PHONE NUMBER</label>
                    <label  className="text-[10px] text-grey">+1 (123) 456-7890</label> 
                </div>
            </div>
          </div>
          <div>
            <Table columns={columns} data={eventTableData} />
          </div>
        </div>
      </div>
    </div>

  );
}