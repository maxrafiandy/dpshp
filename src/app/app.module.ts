import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ByNameDpsComponent } from './by-name-dps/by-name-dps.component';
import { ByNameDpsService } from './by-name-dps/by-name-dps.service';
import { HttpClientModule } from '@angular/common/http';
import { RekapMutasiComponent } from './rekap-mutasi/rekap-mutasi.component';
import { RekapMutasiKecamatanComponent } from './rekap-mutasi-kecamatan/rekap-mutasi-kecamatan.component';
import { RekapAbComponent } from './rekap-ab/rekap-ab.component';
import { RekapAbKecamatanComponent } from './rekap-mutasi-kecamatan-ab/rekap-ab-kecamatan.component';

const routes: Routes = [

  { path: '', component: ByNameDpsComponent },
  { path: 'by-name-dpshp', component: ByNameDpsComponent },
  { path: 'rekap-mutasi/kelurahan', component: RekapMutasiComponent },
  { path: 'rekap-mutasi/kelurahan/ab', component: RekapAbComponent },
  { path: 'rekap-mutasi/kecamatan', component: RekapMutasiKecamatanComponent },
  { path: 'rekap-mutasi/kecamatan/ab', component: RekapAbKecamatanComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    ByNameDpsComponent,
    RekapMutasiComponent,
    RekapAbComponent,
    RekapMutasiKecamatanComponent,
    RekapAbKecamatanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [ByNameDpsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
