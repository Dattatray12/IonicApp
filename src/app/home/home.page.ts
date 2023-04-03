import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  itemListData: any = [];
  filterData:any = []
  searchTerm: string = '';

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.getPostData()
  }


  getPostData() {


    this.apiService.getListPosts().subscribe((data: any) => {

      for (let i = 0; i < data.length; i++) {
        this.itemListData.push(data[i]);
      }
      this.filterData = this.itemListData

    }, error => {
      console.log(error);
    })
  }


  setFilteredPosts(){
    this.filterData = this.itemListData.filter((item:any) => {
      return item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
}


}
