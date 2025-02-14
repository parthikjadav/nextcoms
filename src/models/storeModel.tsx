"use client";

import { z } from "zod";
import { useState } from "react";

import Model from "@/components/ui/model";
import { useStoreModel } from "@/hooks/store-model";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { createStore } from "@/actions/store";

const formSchema = z.object({
  name: z.string().min(3, "Enter the valid name for the store"),
});

const StoreModel = () => {
  const storeModal = useStoreModel();
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async(val: z.infer<typeof formSchema>) => {
    try {
      setLoading(true)
      const res:any = await createStore(val.name)
  
      if(!res.success) {
        toast({
          variant: "destructive",
          title: "Error",
          description: res?.message,
        });
      }
      
      window.location.assign(`/${res.data.id}`)
    } catch (error) {
      console.log(error);
      
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      <Model
        title="Create Store"
        desc="Provide store name to continue"
        isOpen={storeModal.isOpen}
        onClose={() => storeModal.onClose}
      >
        <div>
          <div className="space-y-4 py-2 pb-4">
            <Form {...form}>
              <form className="" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Store Name</FormLabel>
                      <FormControl>
                        <Input disabled={loading} placeholder="Ecommerce" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex space-x-3 justify-end mt-5">
                  <Button
                  disabled={loading}
                    variant="outline"
                    onClick={storeModal.onClose}
                  >
                    Cancle
                  </Button>
                  <Button type="submit" disabled={loading}>Confirm</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Model>
    </>
  );
};

export default StoreModel;
