<?php include('view/header.php') ?>
<div class="display_car_options">
    <section>
        <form action="." method="post" class="car_option_form">
        <select class="vehicle_options" id="makes" name="make_id">
            <option value="0">Show all makes</option>
            <?php foreach ($makes as $make): ?>
                <option value="<?=$make['make_id']?>"><?=$make['make_name']?></option>
            <?php endforeach;?>
        </select>    
        <br>
        <select class="vehicle_options" id="types" name="type_id">
            <option value="0">Show all types</option>
            <?php foreach ($types as $type): ?>
                <option value='<?=$type['type_id']?>'><?=$type['type_name']?></option>
            <?php endforeach;?>
        </select>
        <br>    
        <select class="vehicle_options" id="classes" name="class_id">
            <option value="0">Show all classes</option>
            <?php foreach ($classes as $class): ?>
                <option value='<?=$class['class_id']?>'><?=$class['class_name']?></option>
            <?php endforeach;?>
        </select> 
        <br>
        <button class="sortButton" type="submit">Go</button>   
    </section>
    <section class="sort_radios">
        <h4>Sort by:</h4>
        <select name="sort" id="sort" onchange="this.form.submit()">
            <option value="price_desc" <?= isset($_GET['sort']) && $_GET['sort'] == 'price_desc' ? 'selected' : '' ?>>Price (High to Low)</option>
            <option value="year" <?= isset($_GET['sort']) && $_GET['sort'] == 'year' ? 'selected' : '' ?>>Year (Newest to Oldest)</option>
        </select>
    </section>
    </form>
</div>
<div class="display_cars">
    <table class="car_table">
    <thead>
        <tr>
            <th>Class</th>
            <th>Type</th>
            <th>Year</th>
            <th>Make</th>
            <th>Model</th>
            <th>Price</th>
            <th>Delete?</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($cars as $car):?>
            <tr>
                <td><?= $car['class_name']?></td>
                <td><?= $car['type_name']?></td>
                <td><?= $car['year']?></td>
                <td><?= $car['make_name']?></td>
                <td><?= $car['model']?></td>
                <td>$<?= $car['price']?></td>
                <td>                    
                    <form action="." method="POST">
                    <input type="hidden" name="action" value="delete_car">
                    <input type="hidden" name="vehicle_id" value="<?= $car['vehicle_id'] ?>">
                        <button class="car_delete" type="submit">Delete</button>
                    </form>
                </td>
            </tr>
        <?php endforeach; ?>
    </tbody>
    </table>
</div>
<?php include('view/footer.php'); ?>