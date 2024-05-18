
'use client';

import Popup from "@/components/admin-pannal/Popup";
import ProductRow from "@/components/admin-pannal/ProductRow";
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export interface IProduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  price: string;
  category: string;
}

const Dashboard = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const fetchProducts = async () => {
    dispatch(setLoading(true));
    try {
      const res = await axios.get("/api/get_product");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [updateTable]); // Add updateTable as a dependency to refetch data when it changes

  return (
    <div>
      <div className='bg-white h-[calc(100vh-96px)] rounded-lg p-4'>
        <h2 className='text-3xl'>All Products</h2>
        <div className='mt-4 h-[calc(100vh-180px)] overflow-y-auto'>
          <table className="w-full">
            <thead>
              <tr className='text-gray-500 border-t border-[#ececec]'>
                <th>SR No.</th>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: IProduct, index: number) => (
                <ProductRow
                  setOpenPopUp={setOpenPopUp}
                  setUpdateTable={setUpdateTable}
                  key={product._id}
                  srNo={index + 1}
                  product={product}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {openPopUp && (
        <Popup setOpenPopup={setOpenPopUp} setUpdateTable={setUpdateTable} />
      )}
    </div>
  );
};

export default Dashboard;
