import { Component, OnInit } from '@angular/core';
import { ByNameDpsService } from '../by-name-dps/by-name-dps.service';

@Component({
  selector: 'app-rekap-mutasi',
  templateUrl: './rekap-mutasi.component.html',
  styleUrls: ['./rekap-mutasi.component.css']
})
export class RekapMutasiComponent implements OnInit {

  dps: any[] = [];
  dps_l: number = 0;
  dps_p: number = 0;
  dps_lp: number = 0;
  administrasi: any = {
    kecamatan: '-',
    kelurahan: '-'
  };

  kelurahan: any[] = [];
  k1: any = { l: 0, p: 0, lp: 0 };
  k6: any = { l: 0, p: 0, lp: 0 };
  k2: any = { l: 0, p: 0, lp: 0 };
  k7: any = { l: 0, p: 0, lp: 0 };
  k3: any = { l: 0, p: 0, lp: 0 };
  k8: any = { l: 0, p: 0, lp: 0 };
  k4: any = { l: 0, p: 0, lp: 0 };
  k9: any = { l: 0, p: 0, lp: 0 };
  k5: any = { l: 0, p: 0, lp: 0 };
  k10: any = { l: 0, p: 0, lp: 0 };
  tms: any = { l: 0, p: 0, lp: 0 };
  ubah: any = { l: 0, p: 0, lp: 0 };
  masuk: any = { l: 0, p: 0, lp: 0 };
  keluar: any = { l: 0, p: 0, lp: 0 };
  dptb: any = { l: 0, p: 0, lp: 0 };
  dpshp: any = { l: 0, p: 0, lp: 0 };
  msyt: any = { l: 0, p: 0, lp: 0 };

  detailKelurahan: any = {
    kelurahan: '-',
    pps1: '-',
    pps2: '-',
    pps3: '-'
  };
  kodeKecamatan = '737101';
  kodeKelurahan = '7371011001';

  status: any = {
    awal: 'DPS',
    hasil: 'DPSHP'
  };

  dpsToDpshp: boolean = false;

  constructor(private dpsSvc: ByNameDpsService) { }

  ngOnInit() { }

  showDpshp(kodeKelurahan) {
    
    this.dpsToDpshp = true;

    this.status = {
      awal: 'DPS',
      hasil: 'DPSHP'
    };

    let url = `dps/mutasi-kelurahan/dpshp/${kodeKelurahan}`;

    this.dpsSvc.fetchUrl(url).subscribe(
      (resp: any) => {
        this.dps = resp.dps;

        this.dps_l = 0;
        this.dps_p = 0;
        this.dps_lp = 0;

        this.k1 = { l: 0, p: 0, lp: 0 };
        this.k6 = { l: 0, p: 0, lp: 0 };
        this.k2 = { l: 0, p: 0, lp: 0 };
        this.k7 = { l: 0, p: 0, lp: 0 };
        this.k3 = { l: 0, p: 0, lp: 0 };
        this.k8 = { l: 0, p: 0, lp: 0 };
        this.k4 = { l: 0, p: 0, lp: 0 };
        this.k9 = { l: 0, p: 0, lp: 0 };
        this.k5 = { l: 0, p: 0, lp: 0 };
        this.k10 = { l: 0, p: 0, lp: 0 };
        this.tms = { l: 0, p: 0, lp: 0 };
        this.ubah = { l: 0, p: 0, lp: 0 };
        this.masuk = { l: 0, p: 0, lp: 0 };
        this.keluar = { l: 0, p: 0, lp: 0 };
        this.dptb = { l: 0, p: 0, lp: 0 };
        this.dpshp = { l: 0, p: 0, lp: 0 };
        this.msyt = { l: 0, p: 0, lp: 0 };

        this.dps.forEach((item) => {
          this.dps_l += Number(item.dps_l);
          this.dps_p += Number(item.dps_p);
          this.dps_lp += Number(item.dps_lp);

          this.k1.l += Number(item.l1);
          this.k1.p += Number(item.p1);
          this.k1.lp += Number(item.lp1);

          this.k2.l += Number(item.l2);
          this.k2.p += Number(item.p2);
          this.k2.lp += Number(item.lp2);

          this.k3.l += Number(item.l3);
          this.k3.p += Number(item.p3);
          this.k3.lp += Number(item.lp3);

          this.k4.l += Number(item.l4);
          this.k4.p += Number(item.p4);
          this.k4.lp += Number(item.lp4);

          this.k5.l += Number(item.l5);
          this.k5.p += Number(item.p5);
          this.k5.lp += Number(item.lp5);

          this.k6.l += Number(item.l6);
          this.k6.p += Number(item.p6);
          this.k6.lp += Number(item.lp6);

          this.k7.l += Number(item.l7);
          this.k7.p += Number(item.p7);
          this.k7.lp += Number(item.lp7);

          this.k8.l += Number(item.l8);
          this.k8.p += Number(item.p8);
          this.k8.lp += Number(item.lp8);

          this.k9.l += Number(item.l9);
          this.k9.p += Number(item.p9);
          this.k9.lp += Number(item.lp9);

          this.k10.l += Number(item.l10);
          this.k10.p += Number(item.p10);
          this.k10.lp += Number(item.lp10);

          this.tms.l += Number(item.tms_l);
          this.tms.p += Number(item.tms_p);
          this.tms.lp += Number(item.tms_lp);

          this.ubah.l += Number(item.u_l);
          this.ubah.p += Number(item.u_p);
          this.ubah.lp += Number(item.u_lp);

          this.masuk.l += Number(item.masuk_l);
          this.masuk.p += Number(item.masuk_p);
          this.masuk.lp += Number(item.masuk_lp);

          this.keluar.l += Number(item.keluar_l);
          this.keluar.p += Number(item.keluar_p);
          this.keluar.lp += Number(item.keluar_lp);

          this.dptb.l += Number(item.dptb_l);
          this.dptb.p += Number(item.dptb_p);
          this.dptb.lp += Number(item.dptb_lp);

          this.msyt.l += Number(item.msyt_l);
          this.msyt.p += Number(item.msyt_p);
          this.msyt.lp += Number(item.msyt_lp);

          this.dpshp.l += Number(item.dpshp_l);
          this.dpshp.p += Number(item.dpshp_p);
          this.dpshp.lp += Number(item.dpshp_lp);
        });
      },

      (err: any) => {
        console.log(err)
      }
    );

  }

  showDpshpa(kodeKelurahan) {

    this.dpsToDpshp = false;

    this.status = {
      awal: 'DPSHP',
      hasil: 'DPSHPA'
    };

    let url = `dps/mutasi-kelurahan/dpshpa/${kodeKelurahan}`;

    this.dpsSvc.fetchUrl(url).subscribe(
      (resp: any) => {
        this.dps = resp.dps;

        this.dps_l = 0;
        this.dps_p = 0;
        this.dps_lp = 0;

        this.k1 = { l: 0, p: 0, lp: 0 };
        this.k6 = { l: 0, p: 0, lp: 0 };
        this.k2 = { l: 0, p: 0, lp: 0 };
        this.k7 = { l: 0, p: 0, lp: 0 };
        this.k3 = { l: 0, p: 0, lp: 0 };
        this.k8 = { l: 0, p: 0, lp: 0 };
        this.k4 = { l: 0, p: 0, lp: 0 };
        this.k9 = { l: 0, p: 0, lp: 0 };
        this.k5 = { l: 0, p: 0, lp: 0 };
        this.k10 = { l: 0, p: 0, lp: 0 };
        this.tms = { l: 0, p: 0, lp: 0 };
        this.ubah = { l: 0, p: 0, lp: 0 };
        this.masuk = { l: 0, p: 0, lp: 0 };
        this.keluar = { l: 0, p: 0, lp: 0 };
        this.dptb = { l: 0, p: 0, lp: 0 };
        this.dpshp = { l: 0, p: 0, lp: 0 };
        this.msyt = { l: 0, p: 0, lp: 0 };

        this.dps.forEach((item) => {
          this.dps_l += Number(item.dps_l);
          this.dps_p += Number(item.dps_p);
          this.dps_lp += Number(item.dps_lp);

          this.k1.l += Number(item.l1);
          this.k1.p += Number(item.p1);
          this.k1.lp += Number(item.lp1);

          this.k2.l += Number(item.l2);
          this.k2.p += Number(item.p2);
          this.k2.lp += Number(item.lp2);

          this.k3.l += Number(item.l3);
          this.k3.p += Number(item.p3);
          this.k3.lp += Number(item.lp3);

          this.k4.l += Number(item.l4);
          this.k4.p += Number(item.p4);
          this.k4.lp += Number(item.lp4);

          this.k5.l += Number(item.l5);
          this.k5.p += Number(item.p5);
          this.k5.lp += Number(item.lp5);

          this.k6.l += Number(item.l6);
          this.k6.p += Number(item.p6);
          this.k6.lp += Number(item.lp6);

          this.k7.l += Number(item.l7);
          this.k7.p += Number(item.p7);
          this.k7.lp += Number(item.lp7);

          this.k8.l += Number(item.l8);
          this.k8.p += Number(item.p8);
          this.k8.lp += Number(item.lp8);

          this.k9.l += Number(item.l9);
          this.k9.p += Number(item.p9);
          this.k9.lp += Number(item.lp9);

          this.k10.l += Number(item.l10);
          this.k10.p += Number(item.p10);
          this.k10.lp += Number(item.lp10);

          this.tms.l += Number(item.tms_l);
          this.tms.p += Number(item.tms_p);
          this.tms.lp += Number(item.tms_lp);

          this.ubah.l += Number(item.u_l);
          this.ubah.p += Number(item.u_p);
          this.ubah.lp += Number(item.u_lp);

          this.masuk.l += Number(item.masuk_l);
          this.masuk.p += Number(item.masuk_p);
          this.masuk.lp += Number(item.masuk_lp);

          this.keluar.l += Number(item.keluar_l);
          this.keluar.p += Number(item.keluar_p);
          this.keluar.lp += Number(item.keluar_lp);

          this.dptb.l += Number(item.dptb_l);
          this.dptb.p += Number(item.dptb_p);
          this.dptb.lp += Number(item.dptb_lp);

          this.msyt.l += Number(item.msyt_l);
          this.msyt.p += Number(item.msyt_p);
          this.msyt.lp += Number(item.msyt_lp);

          this.dpshp.l += Number(item.dpshp_l);
          this.dpshp.p += Number(item.dpshp_p);
          this.dpshp.lp += Number(item.dpshp_lp);
        });
      },

      (err: any) => {
        console.log(err)
      }
    );

  }

  onKelurahanChanged(kodeKelurahan) {
    let url = `dps/kelurahan/detail/${kodeKelurahan}`;

    // console.log(url);
    this.dpsSvc.fetchUrl(url).subscribe(
      (resp: any) => {
        this.detailKelurahan = resp.kelurahan[0];

        console.log(this.detailKelurahan);
      },

      (err: any) => {
        console.log(err)
      }
    );
  }

  onKecamatanChanged(kodeKecamatan) {
    let url = `dps/kelurahan/${kodeKecamatan}`;

    this.dpsSvc.fetchUrl(url).subscribe(
      (resp: any) => {
        this.kelurahan = resp.kelurahan;
      },

      (err: any) => {
        console.log(err)
      }
    );
  }
}
