import { Component, OnInit } from '@angular/core';
import { ByNameDpsService } from '../by-name-dps/by-name-dps.service';

@Component({
  selector: 'app-rekap-ab-kecamatan',
  templateUrl: './rekap-ab-kecamatan.component.html',
  styleUrls: ['./rekap-ab-kecamatan.component.css']
})
export class RekapAbKecamatanComponent implements OnInit {

  dps: any[] = [];
  dps_l: number = 0;
  dps_p: number = 0;
  dps_lp: number = 0;
  
  administrasi: any = {
    kecamatan: '-',
    kelurahan: '-'
  };

  kodeKecamatan = '737101';
  
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
  pindah: any = { l: 0, p: 0, lp: 0 };
  dptb: any = { l: 0, p: 0, lp: 0 };
  dpshp: any = { l: 0, p: 0, lp: 0 };
  msyt: any = { l: 0, p: 0, lp: 0 };
  tps: number = 0;

  detailKecamatan: any = {
    kecamatan: '-',
    ppk1: '-',
    ppk2: '-',
    ppk3: '-'
  };

  constructor(private dpsSvc: ByNameDpsService) { }

  ngOnInit() { }

  showDpshp(kodeKecamatan) {
    let url = `dps/mutasi-kecamatan/dpshp/${kodeKecamatan}`;

    this.dpsSvc.fetchUrl(url).subscribe(
      (resp: any) => {
        this.dps = resp.dps;

        this.dps_l = 0;
        this.dps_p = 0;
        this.dps_lp = 0;

        this.tps = 0;
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
        this.pindah = { l: 0, p: 0, lp: 0 };
        this.dptb = { l: 0, p: 0, lp: 0 };
        this.dpshp = { l: 0, p: 0, lp: 0 };
        this.msyt = { l: 0, p: 0, lp: 0 };

        this.dps.forEach((item) => {
          this.dps_l += Number(item.dps_l);
          this.dps_p += Number(item.dps_p);
          this.dps_lp += Number(item.dps_lp);

          this.tps += Number(item.tps);

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

          this.pindah.l += Number(item.pindah_l);
          this.pindah.p += Number(item.pindah_p);
          this.pindah.lp += Number(item.pindah_lp);

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

  showDpshpa(kodeKecamatan) {
    let url = `dps/mutasi-kecamatan/dpshpa/${kodeKecamatan}`;

    this.dpsSvc.fetchUrl(url).subscribe(
      (resp: any) => {
        this.dps = resp.dps;

        this.dps_l = 0;
        this.dps_p = 0;
        this.dps_lp = 0;

        this.tps = 0;
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
        this.pindah = { l: 0, p: 0, lp: 0 };
        this.dptb = { l: 0, p: 0, lp: 0 };
        this.dpshp = { l: 0, p: 0, lp: 0 };
        this.msyt = { l: 0, p: 0, lp: 0 };

        this.dps.forEach((item) => {
          this.dps_l += Number(item.dps_l);
          this.dps_p += Number(item.dps_p);
          this.dps_lp += Number(item.dps_lp);

          this.tps += Number(item.tps);

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

          this.pindah.l += Number(item.pindah_l);
          this.pindah.p += Number(item.pindah_p);
          this.pindah.lp += Number(item.pindah_lp);

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

  onKecamatanChanged(kodeKecamatan) {
    let url = `dps/kecamatan/detail/${kodeKecamatan}`;

    this.dpsSvc.fetchUrl(url).subscribe(
      (resp: any) => {
        this.detailKecamatan = resp.kecamatan;

        console.log(this.detailKecamatan);
      },

      (err: any) => {
        console.log(err)
      }
    );
  }
}
