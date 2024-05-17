import { ApiModel, ApiModelProperty } from "swagger-express-ts";

@ApiModel( {
    description : "Product description" ,
    name : "Product"
} )
class Prodcut {
    @ApiModelProperty( {
        description : "Name of Product" ,
        required : true,
    })
    public name?: String;

    @ApiModelProperty( {
        description : "Detail of Product" ,
        required : true,
    })
    public detail?: String;

    @ApiModelProperty( {
        description : "Product Info" ,
        required : true,
    })
    public info?: String;

    @ApiModelProperty( {
        description : "Product Offer" ,
        required : true,
    })
    public offer?: String;

    @ApiModelProperty( {
        description : "Price of Product" ,
        required : true,
    })
    public price?: number;

    @ApiModelProperty( {
        description : "Image of Product" ,
        required : true,
    })
    public image?: String;
}