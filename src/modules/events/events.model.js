import mongoose from "mongoose";

/* ===========================
   COMMON SUB SCHEMAS
=========================== */

const gallerySchema = new mongoose.Schema({
url:{
type:String,
required:[true,"Gallery image url is required"]
},
altText:{
type:String,
trim:true
}
},{_id:false});


const speakerSchema = new mongoose.Schema({
name:{
type:String,
required:[true,"Speaker name is required"],
trim:true
},
designation:{
type:String,
trim:true
},
image:{
type:String
}
},{_id:false});


const registrationSchema = new mongoose.Schema({
enabled:{
type:Boolean,
default:false
},
registrationLink:{
type:String
},
deadline:{
type:Date
}
},{_id:false});


const seoSchema = new mongoose.Schema({
metaTitle:{
type:String,
trim:true
},
metaDescription:{
type:String,
trim:true
},
keywords:{
type:[String],
default:[]
},
ogImage:{
type:String
}
},{_id:false});


/* ===========================
   MASTER EVENTS
=========================== */

const masterEventSchema = new mongoose.Schema({

title:{
type:String,
required:[true,"Event title is required"],
trim:true,
minlength:3,
maxlength:150
},

type:{
type:String,
required:[true,"Event type is required"],
trim:true
},

slug:{
type:String,
required:[true,"Event slug is required"],
unique:true,
lowercase:true,
trim:true
},

date:{
type:String,
required:[true,"Event date is required"]
},

time:{
type:String,
required:[true,"Event time is required"]
},

venue:{
type:String,
required:[true,"Venue is required"],
trim:true
},

location:{
type:String,
required:[true,"Location is required"],
trim:true
},

googleMapLink:{
type:String,
required:[true,"Google map link is required"]
},

attendance:{
type:Number,
required:[true,"Attendance is required"],
min:1
},

organizer:{
type:String,
required:[true,"Organizer is required"],
trim:true
},

coordinator:{
type:String,
required:[true,"Coordinator is required"],
trim:true
},

budget:{
type:Number,
required:[true,"Budget is required"],
min:0
},

status:{
type:String,
required:true,
enum:[
"Upcoming",
"Completed",
"Cancelled",
"Draft"
],
default:"Draft"
},

accentColor:{
type:String,
default:"#D4AF37"
},

media:{
type:String,
required:[true,"Event banner image is required"]
},

pressKitPdf:{
type:String
},

description:{
type:String,
required:[true,"Description is required"],
minlength:20
},

gallery:{
type:[gallerySchema],
default:[]
},

speakers:{
type:[speakerSchema],
default:[]
},

registration:{
type:registrationSchema,
default:{}
},

seo:{
type:seoSchema,
default:{}
},

visibility:{
type:String,
enum:[
"Public",
"Private"
],
default:"Public"
},

isFeatured:{
type:Boolean,
default:false
},

views:{
type:Number,
default:0
},

order:{
type:Number,
default:0
},

isActive:{
type:Boolean,
default:true
},

isDeleted:{
type:Boolean,
default:false
},

createdBy:{
type:mongoose.Schema.Types.ObjectId,
ref:"Admin"
},

updatedBy:{
type:mongoose.Schema.Types.ObjectId,
ref:"Admin"
}

},{
timestamps:true
});


/* ===========================
   WORKSHOPS
=========================== */

const workshopSchema = new mongoose.Schema({

title:{
type:String,
required:[true,"Workshop title is required"],
trim:true
},

instructor:{
type:String,
required:[true,"Instructor name is required"],
trim:true
},

date:{
type:String,
required:[true,"Workshop date is required"]
},

venue:{
type:String,
required:[true,"Workshop venue is required"]
},

seats:{
type:Number,
required:[true,"Total seats are required"],
min:1
},

price:{
type:Number,
required:[true,"Workshop price is required"],
min:0
},

media:{
type:String
},

description:{
type:String
},

status:{
type:String,
enum:[
"Upcoming",
"Completed",
"Cancelled",
"Active",
"Inactive"
],
default:"Upcoming"
},

isDeleted:{
type:Boolean,
default:false
},

createdBy:{
type:mongoose.Schema.Types.ObjectId,
ref:"Admin"
}

},{
timestamps:true
});



/* ===========================
   CONFERENCES
=========================== */

const conferenceSchema = new mongoose.Schema({

title:{
type:String,
required:[true,"Conference title is required"],
trim:true
},

date:{
type:String,
required:[true,"Conference date is required"]
},

location:{
type:String,
required:[true,"Conference location is required"]
},

guests:{
type:Number,
required:[true,"Guest count is required"],
min:1
},

media:{
type:String
},

description:{
type:String
},

status:{
type:String,
enum:[
"Upcoming",
"Completed",
"Cancelled",
"Active",
"Inactive"
],
default:"Upcoming"
},

isDeleted:{
type:Boolean,
default:false
},

createdBy:{
type:mongoose.Schema.Types.ObjectId,
ref:"Admin"
}

},{
timestamps:true
});



/* ===========================
   BOOKING REQUESTS
=========================== */

const bookingRequestSchema = new mongoose.Schema({

name:{
type:String,
required:[true,"Client name is required"],
trim:true
},

email:{
type:String,
required:[true,"Email is required"],
lowercase:true,
trim:true
},

organization:{
type:String,
required:[true,"Organization name is required"]
},

eventName:{
type:String,
required:[true,"Event name is required"]
},

date:{
type:String,
required:[true,"Requested date is required"]
},

budget:{
type:Number,
required:[true,"Budget is required"]
},

status:{
type:String,
enum:[
"New",
"Contacted",
"Approved",
"Archived"
],
default:"New"
},

message:{
type:String,
required:[true,"Message is required"]
},

isDeleted:{
type:Boolean,
default:false
}

},{
timestamps:true
});



/* ===========================
   EVENTS PAGE BUILDER
=========================== */

const eventsPageSchema = new mongoose.Schema({

heroSettings:{
smallBadge:{
type:String
},
highlightWord:{
type:String
},
headline:{
type:String
},
description:{
type:String
}
},


engagementTypes:[{
title:{
type:String,
required:true
},
status:{
type:String,
default:"Active"
}
}],
mediaArchive:[{
title:{
type:String,
required:true
},
category:{
type:String,
required:true
},
url:{
type:String,
required:true
}
}],


videoHighlights:{
recapBadge:{
type:String
},
title:{
type:String
},
videoUrl:{
type:String
},
thumbnail:{
type:String
}
},


bookingCTA:{
smallBadge:String,
highlightWord:String,
headline:String,
description:String,
awardText:String
},

isActive:{
type:Boolean,
default:true
}

},{
timestamps:true
});



/* ===========================
   EXPORT MODELS
=========================== */

export const MasterEvent = mongoose.model(
"MasterEvent",
masterEventSchema
);

export const Workshop = mongoose.model(
"Workshop",
workshopSchema
);

export const Conference = mongoose.model(
"Conference",
conferenceSchema
);

export const BookingRequest = mongoose.model(
"BookingRequest",
bookingRequestSchema
);

export const EventsPage = mongoose.model(
"EventsPage",
eventsPageSchema
);