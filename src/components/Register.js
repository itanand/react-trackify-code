import React from 'react'

const Register = () => {
    return (
        <div class="content-wrapper">
            <div class="modal fade" id="AddUserModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <form action="code.php" method="POST" >
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" name="name" class="form-control" placeholder="Name" />
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <span class="email_error"></span>
                                    <input type="email" name="email" class="form-control email_id" placeholder="Email" />
                                </div>

                                <div class="form-group">
                                    <label for="number">Mobile No</label>
                                    <span class="number_error"></span>
                                    <input type="number" name="phone" class="form-control mobile_no" placeholder="Mobile Number"/>
                                </div>
                                <div class="form-group">
                                    <label for="city">City</label>
                                    <input type="text" name="city" class="form-control" placeholder="City" />
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="education">Password</label>
                                            <input type="password" name="password" class="form-control" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="education">Confirm Password</label>
                                            <input type="password" name="confirmpassword" class="form-control" placeholder="Confirm Password" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 ">
                                        <input type="text" class="form-control shadow-none" name="referralcode" id="refercode" hidden />
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control shadow-none" name="referred_by" hidden />
                                    </div>
                                </div>


                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" name="addUser" class="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="DeleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Delete User</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form action="code.php" method="POST" >
                            <div class="modal-body">
                                <input type="hidden" name="delete_id" class="delete-user_id" />
                                <p>Are you sure. You want to delete this data?</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" name="DeleteUserbtn" class="btn btn-primary">Yes, Delete.!</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Dashboard</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Register</a></li>
                                <li class="breadcrumb-item active">Registered User</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <section class="content">

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">

                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Registered User</h3>
                                    <a href="" data-toggle="modal" data-target="#AddUserModal" class="btn btn-primary btn-sm float-right">Add User </a>
                                </div>

                                <div class="card-body">
                                    <table id="example1" class="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone No</th>
                                                <th>City</th>
                                                <th>Role</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <a href="registered-user-edit.php?user_id=<?php echo $row['id']; ?>" class="btn btn-info btn-sm">Edit</a>
                                                    <button value="<?php echo $row['id']; ?>" class="btn btn-danger btn-sm deletebtn">Delete</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    No Record Found
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>

    )
}

export default Register