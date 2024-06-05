 <template>
<section class="trend">
<div class="container-fluid">
        <div class="row">
        <div v-for="(box,index) in boxs" :key="index" class="col-2">
             <div class="mb-3">
                <label :for=box.name class="form-labe bg-whitel mb-2"><b>KL {{box.name}}</b></label>
                <br>
                <label :for=box.name class="form-labe bg-whitel mb-1">{{box.price}} * {{boxs[index].number}} = <b>{{box.price * boxs[index].number | fixFilter }} EU</b></label>
                <input type="number" class="form-control d-print-none"  v-model.number=boxs[index].number >
              </div>
        </div>
        </div>
    <div class="row">
        <div class="col-6">
             <h3>Netto: <b> {{total | fixFilter}}  </b>EU</h3>
        </div>
        <div class="col-6">
       <h3> <b> {{sum}}  </b>Packet</h3>
        </div>
    </div>
    <h3>MwSt.19% : <b>{{(total*0.19)| fixFilter}}  </b>EU</h3>
    <h3>Gesamt: <b> {{total + (total *0.19) | fixFilter }}  </b>EU</h3>
</div>
</section>
 </template>
<script>
export default {
    data() {
        return {
            boxs:[
                {
                    name:"100",
                    number:0,
                    price:"1.72"
                },
                {
                    name:"101",
                    number:0,
                    price:"1.72"
                },
                {
                    name:"102",
                    number:0,
                    price:"1.55"
                },
                {
                    name:"103",
                    number:0,
                    price:"1.45"
                },
                {
                    name:"107",
                    number:0,
                    price:"1.55"
                },
                {
                    name:"108",
                    number:0,
                    price:"2.1"
                },
                {
                    name:"109",
                    number:0,
                    price:"2.1"
                },
                {
                    name:"110",
                    number:0,
                    price:"1.72"
                },
                {
                    name:"111",
                    number:0,
                    price:"1.55"
                },
                {
                    name:"112",
                    number:0,
                    price:"2.1"
                },
                {
                    name:"113",
                    number:0,
                    price:"2.1"
                },
                {
                    name:"114",
                    number:0,
                    price:"1.2"
                },
                {
                    name:"116",
                    number:0,
                    price:"1.2"
                },
                {
                    name:"118",
                    number:0,
                    price:"1.72"
                },
                {
                    name:"119",
                    number:0,
                    price:"1.55"
                },
                {
                    name:"120",
                    number:0,
                    price:"0.32"
                },
                {
                    name:"121",
                    number:0,
                    price:"0.32"
                },
                {
                    name:"122",
                    number:0,
                    price:"0.32"
                },
                {
                    name:"123",
                    number:0,
                    price:"0.35"
                },
                {
                    name:"124",
                    number:0,
                    price:"0.42"
                },
                {
                    name:"125",
                    number:0,
                    price:"0.42"
                },
                {
                    name:"126",
                    number:0,
                    price:"0.42"
                },
                {
                    name:"128",
                    number:0,
                    price:"0.5"
                },
                {
                    name:"130",
                    number:0,
                    price:"0.6"
                },
                                {
                    name:"160",
                    number:0,
                    price:"1.12"
                },
                {
                    name:"162",
                    number:0,
                    price:"1.4"
                },
                {
                    name:"164",
                    number:0,
                    price:"0.2"
                },
                {
                    name:"165",
                    number:0,
                    price:"1.4"
                },
                {
                    name:"166",
                    number:0,
                    price:"1.67"
                },
                {
                    name:"167",
                    number:0,
                    price:"0.2"
                },
                {
                    name:"170",
                    number:0,
                    price:"1.45"
                },
                {
                    name:"171",
                    number:0,
                    price:"1.45"
                },
                {
                    name:"172",
                    number:0,
                    price:"2.5"
                },
                {
                    name:"200",
                    number:0,
                    price:"2"
                },
                {
                    name:"0",
                    number:0,
                    price:"1.72"
                },
                ],
                        }
    },
    computed:{
        total: function(){
           var total =0;
          for(var i =0 ;i < this.boxs.length;i++){
           total =this.boxs[i].number * this.boxs[i].price+total;
           }
             return total;
        },
        sum: function(){
           var sum =0;
          for(var i =0 ;i < this.boxs.length;i++){
           sum =this.boxs[i].number +sum;
           }
             return sum;
        }
    },
      filters: {
  
  	fixFilter: function(string) {
    	return string.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
        }
  
  }
};
</script>