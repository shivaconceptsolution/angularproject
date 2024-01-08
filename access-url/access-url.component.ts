import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-access-url',
  templateUrl: './access-url.component.html',
  styleUrl: './access-url.component.css'
})
export class AccessUrlComponent {
  posts:any;
  
  constructor(private service:PostService) {}

  ngOnInit() {

    
}
findPosts()
{
  this.service.findPosts().subscribe(response => {
        this.posts = response;
      });
}
viewData()
{
  this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
      });
}
submitData()
{
  const dataToSend = {name:'shahshi'}; // Replace with your data
    this.service.addPosts(dataToSend).subscribe(
      (response) => {
        console.log('Post successful:', response);
        // Handle the response as needed
      },
      (error) => {
        console.error('Error:', error);
        // Handle errors
      }
    );
}
submitData1()
{
  const dataToSend = {name:'updated data'}; // Replace with your data
    this.service.updatePosts(2,dataToSend).subscribe(
      (response) => {
        console.log('Edit successful:', response);
        // Handle the response as needed
      },
      (error) => {
        console.error('Error:', error);
        // Handle errors
      }
    );
}
submitData2()
{
 this.service.deletePosts(4).subscribe(
      (response) => {
        console.log('Delete successful:', response);
        // Handle the response as needed
      },
      (error) => {
        console.error('Error:', error);
        // Handle errors
      }
    );
}
}
