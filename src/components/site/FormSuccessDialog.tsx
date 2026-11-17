import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CTAButton } from "@/components/site/SiteLayout";

type FormSuccessDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
};

export function FormSuccessDialog({ open, onOpenChange, title, description }: FormSuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-primary/25 bg-white p-8 text-center shadow-xl shadow-primary/15 sm:rounded-xl">
        <DialogHeader className="space-y-3 text-center sm:text-center">
          <div
            className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-2xl font-bold text-[color:var(--navy)]"
            aria-hidden
          >
            ✓
          </div>
          <DialogTitle className="font-display text-2xl text-[color:var(--navy)]">{title}</DialogTitle>
          <DialogDescription className="text-base leading-relaxed text-[color:var(--navy)]/75">
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-2 sm:justify-center">
          <CTAButton type="button" className="w-full sm:w-auto" onClick={() => onOpenChange(false)}>
            Continue browsing
          </CTAButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
