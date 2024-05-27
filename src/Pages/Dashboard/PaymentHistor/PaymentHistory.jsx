import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payment=[] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h3 className="text-3xl">Total Payments: {payment?.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>price</th>
              <th>Transaction Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
           {
            payment.map((pay, index)=> <tr key={pay._id}>
            <th>{index + 1}</th>
            <td>${pay.price}</td>
            <td>{pay.transactionId}</td>
            <td>{pay.status}</td>
          </tr>)
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
