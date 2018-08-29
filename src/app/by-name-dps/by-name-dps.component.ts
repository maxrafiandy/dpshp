import { Component, OnInit } from '@angular/core';
import { ByNameDpsService } from './by-name-dps.service';

@Component({
  selector: 'app-by-name-dps',
  templateUrl: './by-name-dps.component.html',
  styleUrls: ['./by-name-dps.component.css']
})
export class ByNameDpsComponent implements OnInit {

  dps: any[] = [];
  tps: any[] = [];
  dpsl: number = 0;
  dpsp: number = 0;
  dpslp: number = 0;

  administrasi: any = {
    kecamatan: '-',
    kelurahan: '-'
  };

  tpsList = 1;
  kodeKecamatan: any;
  kodeKelurahan: any;
  kelurahan: any[];
  censored = 'bintang';

  constructor(private dpsSvc: ByNameDpsService,
    private tpsSvc: ByNameDpsService) { }

  ngOnInit() {


  }

  check(tps) {

    this.tpsSvc.fetchUrl(`dps/administration/${this.kodeKelurahan}`)
      .subscribe(
        (resp: any) => {

          this.administrasi = resp.administrasi;

        },

        (err: any) => {
          console.log(err)
        }
      );

    this.tpsSvc
      .fetchUrl(`dps/view-tps${tps}/${this.kodeKelurahan}`)
      .subscribe(
        (resp: any) => {

          this.tps = resp.dps;
          this.runTps();

        },

        (err: any) => {
          console.log(err)
        }
      );

  }

  runTps() {

    
    this.tps.forEach((item, index) => {

      let url = `dps/by-name/non-bintang/${this.kodeKelurahan}/${item.tps}`;

      this.dpsSvc.fetchUrl(url).subscribe(
        (resp: any) => {
          this.dps[index] = resp.dps;
        },

        (err: any) => {
          console.log(err)
        }
      );

    });
  }

  kecamatanChanged(kodeKecamatan) {
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
