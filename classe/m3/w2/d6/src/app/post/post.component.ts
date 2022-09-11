import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../Models/post';
import { PostsService } from '../Models/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  allPost: Post[] = []

  isActive!:boolean

  constructor(
    private postSvc: PostsService,
    private route: ActivatedRoute,
    private router: Router
    ) {
  }

  async ngOnInit(): Promise<void> {

    let posts = await this.postSvc.getAllPost();

    this.route.params.subscribe((params: any) =>{

      (params.isActive != 'active' && params.isActive != 'inactive') && this.router.navigate(['/'])

      this.isActive = params.isActive == 'active' && true || 'inactive' && false;

      this.allPost = this.postSvc.activeFilter(posts, this.isActive)
    })

  }

  changeActive(id: number): void {
    this.allPost = this.postSvc.activeFilter(this.postSvc.changeActive(id), this.isActive)
  }

}
