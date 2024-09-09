import { Badge } from "@/components/ui/badge";
import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const maquinas = [
  {
    id: "inv001",
    maquina: "Hospital catolica",
    tipo: "vending cafe",
    proveedor: "veOs",
    estado: "online",
    acciones: "reiniciar",
  },
  {
    id: "inv002",
    maquina: "Hospital catolica",
    tipo: "vending snack",
    proveedor: "Nayax",
    estado: "online",
    acciones: "reiniciar",
  },
  {
    id: "inv003",
    maquina: "Hospital catolica",
    tipo: "vending cafe",
    proveedor: "veOs",
    estado: "offline",
    acciones: "reiniciar",
  },
  {
    id: "inv004",
    maquina: "Hospital catolica",
    tipo: "vending snack",
    proveedor: "Nayax",
    estado: "online",
    acciones: "reiniciar",
  },
  {
    id: "inv005",
    maquina: "Hospital catolica",
    tipo: "otro",
    proveedor: "veOs",
    estado: "offline",
    acciones: "reiniciar",
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption>Inventario de maquinas.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead className="w-[100px]">Maquina</TableHead>
          <TableHead className="w-[100px]">Tipo</TableHead>
          <TableHead className="w-[100px]">Proveedor</TableHead>
          <TableHead className="w-[100px]">Estado</TableHead>
          <TableHead className="text-right w-[100px]">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {maquinas.map((maquina) => (
          <TableRow key={maquina.maquina}>
            <TableCell className="w-[100px]">{maquina.id}</TableCell>
            <TableCell className="w-[100px]">{maquina.maquina}</TableCell>
            <TableCell className="w-[100px]">{maquina.tipo}</TableCell>
            <TableCell className="w-[100px]">
              {maquina.proveedor === "veOs" ? (
                <Badge>
                  {maquina.proveedor}
                </Badge>
              ) : (
                <Badge variant={"outline"}>
                  {maquina.proveedor}
                </Badge>
              )}
            </TableCell>
            <TableCell className="w-[100px]">
              {maquina.estado === "online" ? (
                <Badge variant={"outline"} className="bg-green-400">
                  {maquina.estado}
                </Badge>
              ) : (
                <Badge variant={"destructive"}>
                  {maquina.estado}
                </Badge>
              )}
            </TableCell>
            <TableCell className="text-right w-[100px]">
            {maquina.estado === "online" ? (
              <Link href="#" className={badgeVariants({ variant: "outline" })}>
                reiniciar
                </Link>
              ) : (
                <Link href="#" className={badgeVariants({ variant:  "destructive"})}>
                reportar
                </Link>
              )}

            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className="bg-slate-100">
        <TableRow>
          <TableCell colSpan={5} className="text-left ">
            Inventario de maquinas
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
