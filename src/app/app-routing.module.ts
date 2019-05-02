import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 

import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { ArticalComponent } from './artical/artical.component';


const routes: Routes = [
  {path: 'Home' , component: HeaderComponent},
  {path: 'About' , component: IntroComponent},
  {path: 'Gallery' , component: GalleryComponent},
  {path: 'Service' , component: ContentComponent},
  {path: 'Testimonials' , component: TestimonialsComponent },
  {path: 'Clients' , component: ClientsComponent},
  {path: 'Pricing' , component: PricingComponent},
  {path: 'Blog' , component: BlogComponent},
  {path: 'Artical/:id' , component: ArticalComponent},

  {path: '' , redirectTo:"Home",pathMatch:'full'}
 


];
 
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
