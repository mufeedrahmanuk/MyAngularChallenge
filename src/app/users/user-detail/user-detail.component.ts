import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userForm: FormGroup;
  user: any; // Store the user details
  isUpdated: boolean = false; // Flag to show success message

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]]
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Get the user ID from the route
    this.user = USERS.find(u => u.id === id); // Find the user in the mock data
    
    if (this.user) {
      this.userForm.patchValue({
        name: this.user.name,
        email: this.user.email,
        age: this.user.age
      });
    }
  }

  onSubmit() {
    if (this.userForm.valid && this.user) {
      // Update the user object with form values
      this.user.name = this.userForm.value.name;
      this.user.email = this.userForm.value.email;
      this.user.age = this.userForm.value.age;

      // Show success message
      this.isUpdated = true;
      setTimeout(() => this.isUpdated = false, 3000); // Hide message after 3 seconds
    } else {
      console.log('Form not valid');
    }
  }
}