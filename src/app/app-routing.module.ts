import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RomsComponent } from "./roms/roms.component";

const routes: Routes = [
  { path: "", component: RomsComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
