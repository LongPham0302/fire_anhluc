<template>
    <div class="main-content">
        <page-title v-bind:title="'Task #' + id"/>
       
        <div class="create-board">
            <div class="row">
                <div class="col-xs-12 input-group">
                    <label>Tiêu đề</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="col-xs-12 input-group">
                    <label>Mô tả tác vụ</label>
                    <textarea type="text" class="form-control"></textarea>
                </div>
                <div class="col-xs-12 input-group">
                    <label>Tên Project</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="col-xs-6 input-group">
                    <label>Ngày giờ bắt đầu</label>
                    <datetime type="datetime"></datetime>
                </div>
                <div class="col-xs-6 input-group">
                    <label>Deadline</label>
                    <datetime type="datetime" ></datetime>
                </div>
                <div class="col-xs-6 input-group">
                    <label>Trang thái</label>
                    <select class="input-group input-select">
                        <!-- <option value="0">Todo</option>
                        <option value="1">In process</option>
                        <option value="2">To verify</option>
                        <option value="3">Done</option> -->
                        <option ></option>
                    </select>
                </div>
                <div class="col-xs-6 input-group">
                    <label>Độ ưu tiên</label>
                    <select class="input-group input-select">
                        <!-- <option value="0" >Normal</option>
                        <option value="1">Low</option>
                        <option value="2">Urgent</option>
                        <option value="3">Important</option> -->
                        <option></option>
                    </select>
                </div>
                <div class="col-xs-6 input-group">
                    <label>Giai đoạn</label>
                    <select class="input-group input-select">
                        <!-- <option value="Front End" >Front End</option>
                        <option value="Backend">Back End</option>
                        <option value="Design">Design</option> -->
                        <option></option>
                    </select>
                </div>
                <div class="col-xs-6 input-group">
                    <label>Thành viên đảm nhận</label>
                    <select class="input-group input-select">
                        <option value="" disabled>Thành viên</option>
                        <option ></option>
                    </select>
                </div>
                <div class="col-xs-12 btn-submit-create">
                    <button 
                        class="btn btn-success" type="submit" >Cap nhat</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'edit-task',
}
</script>


<style>
    .vdatetime .vdatetime-input {
        display: block;
        width: 100%;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    }
</style>