<template>
  <div class="bookform">
    <div class="book-info col"> 
    <h3>Добавить новую книгу</h3>
    <small id="formHelpBlock" class="form-text text-muted">
        <p class="danger">* - this value is required</p>
    </small>
    <form>
        <div class="form-group-sm">
            <label>Title* <input class="form-control" name="title" required/></label>            
            <div class="form-control-feedback">
                <p v-show="invalid">Title is required</p>
                <p class="visually-hidden">
                    Title must be at least 3 characters long
                </p>
            </div>
        </div>
        <div class="form-group-sm">
            <label>Author* <input class="form-control" name="author"/></label>
            <div class="form-control-feedback">
                <p class="visually-hidden">Author is required</p>
            </div>
        </div>
        <div class="form-group-sm">
            <label>Pages* <input type="number" class="form-control" name="pages"/></label>
            <div class="form-control-feedback">
                <p class="visually-hidden">Pages number is required</p>
                <p class="visually-hidden">
                    Book can not contain nuber of pages less than 0
                </p>
                <p class="visually-hidden">
                    Book can not contain nuber of pages more than 10000
                </p>
            </div>
        </div>
        <div class="form-group-sm">
            <label>Publisher Name <input class="form-control" name="publisherName"/></label>
            <div class="form-control-feedback">
                <p class="visually-hidden">Publisher name can not be longer than 30 characters</p>
            </div>
        </div>
        <div class="form-group-sm">
            <label>Year of publication <input class="form-control" name="yearOfPublication"/></label>
            <div class="form-control-feedback">
                <p class="visually-hidden">Book can not be published before 1800</p>
            </div>
        </div>
        <div class="form-group-sm"> 
            <label>Here's gonna be datepicker <input class="form-control"/></label>  
        </div>      
        <div class="form-group-sm">
            <label>ISBN <input class="form-control" name="isbn"/></label>
            <div class="form-control-feedback">
                <p class="visually-hidden">Valid ISBN should contain numbers and hyphens. Example: 2-266-11156-6</p>
            </div>
        </div>
        <div class="form-group-sm">
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile" />
                <label class="custom-file-label" for="customFile">Choose an image</label> 
                <div class="form-group">
                    <input class="form-control visually-hidden" name="image"/>
                </div>
            </div>
        </div>
        <div class="form-group-sm">
            <button class="btn submit-btn" type="submit">
            Добавить
            </button>
        </div>
    </form>
</div>
  </div>
</template>

<script>
export default {
  name: "BookForm",
  data() {
    return {
      invalid: false,
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped>
input {
  float: right;
}

.form-group {
  padding-bottom: 20px;
}

.book-info {
  width: 200px;
}

.add-author-btn {
  position: absolute;
  left: 265px;
  background-color: #fff;
}

label {
  display: flow-root;
}

.form-control-feedback {
  position: absolute;
  display: block;
  width: 213px;
  left: 285px;
  top: 18px;
}
.error {
  box-shadow: 0px 0px 8px red;
}

.has-success {
  box-shadow: 0px 0px 8px rgb(4, 167, 4);
}
.danger {
  color: red;
}

.form-group-sm {
  position: relative;
}

.submit-btn {
  margin-top: 10px;
}

.visually-hidden {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;

  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);

  clip: rect(0 0 0 0);
  overflow: hidden;
}
</style>
