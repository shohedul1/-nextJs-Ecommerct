// import { IProduct } from "@/app/admin/dashboard/page";
// import { setLoading } from "@/redux/features/loadingSlice";
// import { setProduct } from "@/redux/features/productSlice";
// import { useAppDispatch } from "@/redux/hooks";
// import axios from "axios";
// import Image from "next/image";
// import { Dispatch, SetStateAction } from "react";
// import { CiEdit } from "react-icons/ci";
// import { MdDelete } from "react-icons/md";


// interface PropsType {
//     srNo: number;
//     setOpenPopUp: Dispatch<SetStateAction<boolean>>;
//     setUpdateTable: Dispatch<SetStateAction<boolean>>;
//     product: IProduct;
// }
// const ProductRow = ({ srNo, setOpenPopUp, setUpdateTable, product }: PropsType) => {
//     const dispatch = useAppDispatch();

//     const onEidt = () => {
//         dispatch(setProduct(product));
//         setOpenPopUp(true);
//     };

//     const onDelete = () => {
//         dispatch(setLoading(true));

//         const payload = {
//             fileKey: product.fileKey
//         }
//         axios.delete("/api/uploadthing", { data: payload }).then(res => {
//             console.log(res);

//             axios.delete(`/api/delete_product/${product._id}`).then(res => {
//                 console.log(res);
//                 setUpdateTable((prevState) => !prevState)
//             }).catch((err) => {
//                 console.log(err);
//             }).finally(() => {
//                 dispatch(setLoading(false))
//             })
//         }).catch((err)=>{
//             console.log(err);
//             dispatch(setLoading(false));
//         });

//     };
//     return (
//         <tr>
//             <td>
//                 <div>{srNo}</div>
//             </td>
//             <td>
//                 <div>{product.name}</div>
//             </td>
//             <td>
//                 <div>{product.price}</div>
//             </td>
//             <td className="py-2">
//                 <Image
//                     src={product.imgSrc}
//                     alt="product image"
//                     width={40}
//                     height={40}
//                     priority
//                     property="treu"
//                 />
//             </td>
//             <td>
//                 <div className="text-2xl flex items-center gap-2 text-gray-600">
//                     <CiEdit onClick={onEidt} className="cursor-pointer hover:text-black" />
//                     <MdDelete onClick={onDelete} className="text-lg cursor-pointer hover:text-red-500" />
//                 </div>
//             </td>
//         </tr>
//     )
// }

// export default ProductRow;
import { IProduct } from "@/app/admin/dashboard/page";
import { setLoading } from "@/redux/features/loadingSlice";
import { setProduct } from "@/redux/features/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import axios from "axios";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

interface PropsType {
    srNo: number;
    setOpenPopUp: Dispatch<SetStateAction<boolean>>;
    setUpdateTable: Dispatch<SetStateAction<boolean>>;
    product: IProduct;
}

const ProductRow = ({ srNo, setOpenPopUp, setUpdateTable, product }: PropsType) => {
    const dispatch = useAppDispatch();

    const onEdit = () => {
        dispatch(setProduct(product));
        setOpenPopUp(true);
    };

    const onDelete = async () => {
        dispatch(setLoading(true));

        try {
            const payload = {
                fileKey: product.fileKey
            };
            await axios.delete("/api/uploadthing", { data: payload });

            await axios.delete(`/api/delete_product/${product._id}`);
            setUpdateTable(prevState => !prevState);
        } catch (err) {
            console.error(err);
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <tr>
            <td>
                <div>{srNo}</div>
            </td>
            <td>
                <div>{product.name}</div>
            </td>
            <td>
                <div>{product.price}</div>
            </td>
            <td className="py-2">
                <Image
                    src={product.imgSrc}
                    alt="product image"
                    width={40}
                    height={40}
                    priority
                />
            </td>
            <td>
                <div className="text-2xl flex items-center gap-2 text-gray-600">
                    <CiEdit onClick={onEdit} className="cursor-pointer hover:text-black" />
                    <MdDelete onClick={onDelete} className="text-lg cursor-pointer hover:text-red-500" />
                </div>
            </td>
        </tr>
    );
};

export default ProductRow;
