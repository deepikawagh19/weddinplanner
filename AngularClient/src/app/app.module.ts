import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminPlannerComponent } from './admin-planner/admin-planner.component';
import { AddeventComponent } from './addevent/addevent.component';
import { UserComponent } from './user/user.component';
import { LogoutComponent } from './logout/logout.component';
import { BookingComponent } from './booking/booking.component';
import { PlannerComponent } from './planner/planner.component';
import { PackageComponent } from './package/package.component';
import { ViewpackageComponent } from './viewpackage/viewpackage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    AdminHomeComponent,
    AdminPlannerComponent,
    AddeventComponent,
    LogoutComponent,
    BookingComponent,
    PlannerComponent,
    PackageComponent,
    ViewpackageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    
      {path: "register",component:RegisterComponent},
      {path: "login",component:LoginComponent},
      {path:"home",component:HomeComponent},
      {path:"user",component:UserComponent},

    {path:"",component:HomeComponent},
    {path:"adminHome",component:AdminHomeComponent},
    {path:"adminPlanner",component:AdminPlannerComponent},
    {path:"addevent",component:AddeventComponent},
    {path:"planner",component:PlannerComponent},
    {path:"package",component:PackageComponent},
    {path:"viewpackage",component:ViewpackageComponent},

    {path:"logout",component:LogoutComponent}

    


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

















/* import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { ContactComponent } from './contact/contact.component';
import { NoShowComponent } from './no-show/no-show.component';
import { Router, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { PlannerComponent } from './planner/planner.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InformationComponent } from './information/information.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { CheckbookavailabiltyComponent } from './checkbookavailabilty/checkbookavailabilty.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { ListofbookComponent } from './listofbook/listofbook.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';
import { TakepaymentComponent } from './takepayment/takepayment.component';
import { PaymenthistoryComponent } from './paymenthistory/paymenthistory.component';
import { ListofalluserComponent } from './listofalluser/listofalluser.component';
import { FeesComponent } from './fees/fees.component';
import { SubjectwisecopyComponent } from './subjectwisecopy/subjectwisecopy.component';
import { FindbookComponent } from './findbook/findbook.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddeventComponent } from './addevent/addevent.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminPlannerComponent } from './admin-planner/admin-planner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NoShowComponent,
    RegisterComponent,
    EditComponent,
    LoginComponent,
    UserComponent,
    PlannerComponent,
    GalleryComponent,
    AboutusComponent,
    InformationComponent,
    UserdetailsComponent,
    CheckbookavailabiltyComponent,
    EditprofileComponent,
    IssuebookComponent,
    ListofbookComponent,
    ReturnbookComponent,
    TakepaymentComponent,
    PaymenthistoryComponent,
    ListofalluserComponent,
    FeesComponent,
    SubjectwisecopyComponent,
    FindbookComponent,
    ChangepasswordComponent,
    SignupComponent,
    DashboardComponent,
    AddeventComponent,
    AdminHomeComponent,
    AdminPlannerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent },
      {path: "home", component: HomeComponent},
     {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent },
     {path: "user", component: UserComponent},
      {path: "gallery", component: GalleryComponent},
      {path: "aboutus", component: AboutusComponent},
      {path: "information", component: InformationComponent},
      {path: "userdetails", component: UserdetailsComponent},
      {path: "checkbookavailability", component: CheckbookavailabiltyComponent},
      {path: "editprofile", component: EditprofileComponent},
      {path: "issuebook", component: IssuebookComponent},
      {path: "returnbook", component:ReturnbookComponent},
      {path: "takepayment", component:TakepaymentComponent},
      {path: "paymenthistory", component:PaymenthistoryComponent},
      {path: "listofalluser", component:ListofalluserComponent},
      {path: "subjectwisecopy", component:SubjectwisecopyComponent},
      {path: "fees", component:FeesComponent},
      {path: "changepassword", component:ChangepasswordComponent},

      {path: "findbook", component:FindbookComponent},

      {path: "signup", component:SignupComponent},
      {path:"planner",component:PlannerComponent},

      {path:"dash",component:DashboardComponent}

     {path: "**", component: NoShowComponent}
     ])
  ],
  providers: [HttpClientModule, DataService],
  bootstrap: [AppComponent]
})
export class AppModule 
{
  constructor(){
    console.log("App.Module.JS: App Module Created");
  }
 }
 */