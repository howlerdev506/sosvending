
"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createAsset } from "@/_actions/assets-actions";

export async function AssetFOrm() {
  
  async function submmitForm(formData: FormData) {
    const response = await createAsset(formData);
  }

  return (
    <form action={submmitForm}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Registrar Maquina</CardTitle>
          <CardDescription>Agregar maquina para telemetria.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="idmaquina">ID</Label>
              <Input name="idmaquina" id="idmaquina" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nombre</Label>
              <Input name="name" id="name" placeholder="Nombre de la maquina" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="proveedor">Proveedor</Label>
              <Select name="proveedor">
                <SelectTrigger id="proveedor">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="veos">VeOs</SelectItem>
                  <SelectItem value="nayax">Nayax</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="tipomaquina">Tipo de maquina</Label>
              <Select name="tipomaquina">
                <SelectTrigger id="tipomaquina">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="vendingcafe">Vending Cafe</SelectItem>
                  <SelectItem value="vendingsnack">Vending Snack</SelectItem>
                  <SelectItem value="otro">otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="reset" variant="outline">Limpiar</Button>
          <Button type="submit">Registrar</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
