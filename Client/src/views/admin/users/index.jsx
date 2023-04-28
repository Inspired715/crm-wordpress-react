import Table from "components/table";

export default function Users() {

  const eventTableData = [
    {
      created_at: 'January 1, 2023',
      name: 'Jacob Dane',
      email: 'jcobdane@service.com',
      phone: "+1 213 262 0113",
      status: '1',
    }, {
      created_at: 'January 1, 2023',
      name: 'Jacob Dane',
      email: 'jcobdane@service.com',
      phone: "+1 213 262 0113",
      status: '2',
    }, {
      created_at: 'January 1, 2023',
      name: 'Jacob Dane',
      email: 'jcobdane@service.com',
      phone: "+1 213 262 0113",
      status: '1',
    }, {
      created_at: 'January 1, 2023',
      name: 'Jacob Dane',
      email: 'jcobdane@service.com',
      phone: "+1 213 262 0113",
      status: '1',
    }, {
      created_at: 'January 1, 2023',
      name: 'Jacob Dane',
      email: 'jcobdane@service.com',
      phone: "+1 213 262 0113",
      status: '2',
    }, {
      created_at: 'January 1, 2023',
      name: 'Jacob Dane',
      email: 'jcobdane@service.com',
      phone: "+1 213 262 0113",
      status: '1',
    }, {
      created_at: 'January 1, 2023',
      name: 'Jacob Dane',
      email: 'jcobdane@service.com',
      phone: "+1 213 262 0113",
      status: '2',
    }, {
      created_at: 'January 1, 2023',
      name: 'Jacob Dane',
      email: 'jcobdane@service.com',
      phone: "+1 213 262 0113",
      status: '1',
    }, {
      created_at: 'January 1, 2023',
      name: 'Jacob Dane',
      email: 'jcobdane@service.com',
      phone: "+1 213 262 0113",
      status: '1',
    }, {
      created_at: 'January 1, 2023',
      name: 'Jacob Dane',
      email: 'jcobdane@service.com',
      phone: "+1 213 262 0113",
      status: '1',
    }, {
      created_at: 'January 1, 2023',
      name: 'Jacob Dane',
      email: 'jcobdane@service.com',
      phone: "+1 213 262 0113",
      status: '1',
    }, {
      created_at: 'January 1, 2023',
      name: 'Jacob Dane',
      email: 'jcobdane@service.com',
      phone: "+1 213 262 0113",
      status: '1',
    }, {
      created_at: 'January 1, 2023',
      name: 'Jacob Dane',
      email: 'jcobdane@service.com',
      phone: "+1 213 262 0113",
      status: '1',
    }, {
      created_at: 'January 1, 2023',
      name: 'Jacob Dane',
      email: 'jcobdane@service.com',
      phone: "+1 213 262 0113",
      status: '1',
    }, {
      created_at: 'January 1, 2023',
      name: 'Jacob Dane',
      email: 'jcobdane@service.com',
      phone: "+1 213 262 0113",
      status: '1',
    }, {
      created_at: 'January 1, 2023',
      name: 'Jacob Dane',
      email: 'jcobdane@service.com',
      phone: "+1 213 262 0113",
      status: '1',
    },
  ];

  const columns = [
    {
      Header: "userlist",
      hideHeader: true,
      columns: [
        {
          Header: "All",
          Cell: () => {
            return (
              <input type="checkbox" className="w-[25px] h-[25px] mt-[5px]" />
            )
          }
        }, {
          Header: "Date",
          accessor: "created_at"
        }, {
          Header: "NAME",
          accessor: "name"
        }, {
          Header: "EMAIL",
          accessor: "email"
        }, {
          Header: "PHONE",
          accessor: "phone"
        },
        {
          Header: "STATUS",
          Cell: (row) => {
            return row.row.original.status === '1' ? (
              <label className="text-blue">Active</label>
            ) : (
              <label className="text-red">Inactive</label>
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
                <label className="text-[10px] text-grey">bradobren@gmail.com</label>
              </div>
              <div className="flex justify-center flex-col col-span-1">
                <label className="text-[12px] text-grey">PHONE NUMBER</label>
                <label className="text-[10px] text-grey">+1 (123) 456-7890</label>
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