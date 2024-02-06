import { Component } from '@angular/core';
import { AsteroidServiceService } from 'src/app/asteroid-services/asteroid-service.service';
import { Apod, AsteroidsResultInterface } from 'src/app/models/asteroids.models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  asteroidResultCopy!: AsteroidsResultInterface

  dataInicial! : string 
  dataFinal! : string 

 chaves! : any;
 chavesEntradas! : any;
 nEObjects! : any;

 arrivedApod!: Apod;
 isApodFound!: boolean;

  constructor(private asteroidService : AsteroidServiceService) {
    this.getData()
  }

  getData(){
    console.log('Bruno')
    console.log(this.dataInicial)
    this.getAsteroids()
    this.getApod()
  }

 

    getAsteroids(): void{
     // console.log("testeyyy "+this.dataInicial+"testeoooo  "+this.dataFinal)
      this.asteroidService.getAll(this.dataInicial, this.dataInicial).subscribe((arrivedAsteroids: AsteroidsResultInterface ) => {
        this.asteroidResultCopy = arrivedAsteroids
        console.log("teste de chegada no ts do homecomponent: "+JSON.stringify(this.asteroidResultCopy, null,2))
        console.log("this.asteroidResultCopy.near_earth_objects: " + this.asteroidResultCopy.near_earth_objects)
        //console.log("this.nEObjects"+ this.nEObjects)
        
        

        this.chaves = Object.keys(this.asteroidResultCopy.near_earth_objects);
        this.chavesEntradas = Object.entries(this.asteroidResultCopy.near_earth_objects);
        this.nEObjects = this.asteroidResultCopy.near_earth_objects;
    }     
      );
      ;
    }


    getApod(): void{
         console.log("teste chamamento getll2")
         this.asteroidService.getAll2(this.dataInicial).subscribe((arrivedApod: Apod ) => {
           this.arrivedApod = arrivedApod
            this.isApodFound = arrivedApod.explanation.length != 0 
           
          }     
         );
         ;
       }

}

/*

{
    "links": {
        "next": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-09&end_date=2015-09-10&detailed=false&api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV",
        "previous": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&detailed=false&api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV",
        "self": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-08&end_date=2015-09-09&detailed=false&api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
    },
    "element_count": 25,
    "near_earth_objects": {
        "2015-09-08": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2465633?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "2465633",
                "neo_reference_id": "2465633",
                "name": "465633 (2009 JR5)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2465633",
                "absolute_magnitude_h": 20.44,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.2170475943,
                        "estimated_diameter_max": 0.4853331752
                    },
                    "meters": {
                        "estimated_diameter_min": 217.0475943071,
                        "estimated_diameter_max": 485.3331752235
                    },
                    "miles": {
                        "estimated_diameter_min": 0.1348670807,
                        "estimated_diameter_max": 0.3015719604
                    },
                    "feet": {
                        "estimated_diameter_min": 712.0984293066,
                        "estimated_diameter_max": 1592.3004946003
                    }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-08",
                        "close_approach_date_full": "2015-Sep-08 20:28",
                        "epoch_date_close_approach": 1441744080000,
                        "relative_velocity": {
                            "kilometers_per_second": "18.1279360862",
                            "kilometers_per_hour": "65260.5699103704",
                            "miles_per_hour": "40550.3802312521"
                        },
                        "miss_distance": {
                            "astronomical": "0.3027469457",
                            "lunar": "117.7685618773",
                            "kilometers": "45290298.225725659",
                            "miles": "28142086.3515817342"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3426410?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "3426410",
                "neo_reference_id": "3426410",
                "name": "(2008 QV11)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3426410",
                "absolute_magnitude_h": 21.34,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1434019235,
                        "estimated_diameter_max": 0.320656449
                    },
                    "meters": {
                        "estimated_diameter_min": 143.4019234645,
                        "estimated_diameter_max": 320.6564489709
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0891057966,
                        "estimated_diameter_max": 0.1992466184
                    },
                    "feet": {
                        "estimated_diameter_min": 470.4787665793,
                        "estimated_diameter_max": 1052.0225040417
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-08",
                        "close_approach_date_full": "2015-Sep-08 14:31",
                        "epoch_date_close_approach": 1441722660000,
                        "relative_velocity": {
                            "kilometers_per_second": "19.7498128142",
                            "kilometers_per_hour": "71099.3261312856",
                            "miles_per_hour": "44178.3562841869"
                        },
                        "miss_distance": {
                            "astronomical": "0.2591250701",
                            "lunar": "100.7996522689",
                            "kilometers": "38764558.550560687",
                            "miles": "24087179.7459520006"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3553060?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "3553060",
                "neo_reference_id": "3553060",
                "name": "(2010 XT10)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3553060",
                "absolute_magnitude_h": 26.5,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0133215567,
                        "estimated_diameter_max": 0.0297879063
                    },
                    "meters": {
                        "estimated_diameter_min": 13.3215566698,
                        "estimated_diameter_max": 29.7879062798
                    },
                    "miles": {
                        "estimated_diameter_min": 0.008277629,
                        "estimated_diameter_max": 0.0185093411
                    },
                    "feet": {
                        "estimated_diameter_min": 43.7058959846,
                        "estimated_diameter_max": 97.7293544391
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-08",
                        "close_approach_date_full": "2015-Sep-08 12:07",
                        "epoch_date_close_approach": 1441714020000,
                        "relative_velocity": {
                            "kilometers_per_second": "19.1530348886",
                            "kilometers_per_hour": "68950.9255988812",
                            "miles_per_hour": "42843.4237422604"
                        },
                        "miss_distance": {
                            "astronomical": "0.4917435147",
                            "lunar": "191.2882272183",
                            "kilometers": "73563782.385433689",
                            "miles": "45710414.7542113482"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3726710?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "3726710",
                "neo_reference_id": "3726710",
                "name": "(2015 RC)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3726710",
                "absolute_magnitude_h": 24.3,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0366906138,
                        "estimated_diameter_max": 0.0820427065
                    },
                    "meters": {
                        "estimated_diameter_min": 36.6906137531,
                        "estimated_diameter_max": 82.0427064882
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0227984834,
                        "estimated_diameter_max": 0.0509789586
                    },
                    "feet": {
                        "estimated_diameter_min": 120.3760332259,
                        "estimated_diameter_max": 269.1689931548
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-08",
                        "close_approach_date_full": "2015-Sep-08 09:45",
                        "epoch_date_close_approach": 1441705500000,
                        "relative_velocity": {
                            "kilometers_per_second": "19.486643553",
                            "kilometers_per_hour": "70151.9167909206",
                            "miles_per_hour": "43589.6729637806"
                        },
                        "miss_distance": {
                            "astronomical": "0.0269252677",
                            "lunar": "10.4739291353",
                            "kilometers": "4027962.697099799",
                            "miles": "2502859.9608192662"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3727181?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "3727181",
                "neo_reference_id": "3727181",
                "name": "(2015 RO36)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727181",
                "absolute_magnitude_h": 22.9,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0699125232,
                        "estimated_diameter_max": 0.1563291544
                    },
                    "meters": {
                        "estimated_diameter_min": 69.9125232246,
                        "estimated_diameter_max": 156.3291544087
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0434416145,
                        "estimated_diameter_max": 0.097138403
                    },
                    "feet": {
                        "estimated_diameter_min": 229.3718026961,
                        "estimated_diameter_max": 512.8909429502
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-08",
                        "close_approach_date_full": "2015-Sep-08 14:36",
                        "epoch_date_close_approach": 1441722960000,
                        "relative_velocity": {
                            "kilometers_per_second": "15.8053596703",
                            "kilometers_per_hour": "56899.294813224",
                            "miles_per_hour": "35355.0090465835"
                        },
                        "miss_distance": {
                            "astronomical": "0.0540392535",
                            "lunar": "21.0212696115",
                            "kilometers": "8084157.219990045",
                            "miles": "5023262.364730821"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3727639?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "3727639",
                "neo_reference_id": "3727639",
                "name": "(2015 RN83)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727639",
                "absolute_magnitude_h": 21.7,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1214940408,
                        "estimated_diameter_max": 0.2716689341
                    },
                    "meters": {
                        "estimated_diameter_min": 121.4940407996,
                        "estimated_diameter_max": 271.6689340891
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0754928736,
                        "estimated_diameter_max": 0.1688071972
                    },
                    "feet": {
                        "estimated_diameter_min": 398.6025088171,
                        "estimated_diameter_max": 891.3023057169
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-08",
                        "close_approach_date_full": "2015-Sep-08 15:42",
                        "epoch_date_close_approach": 1441726920000,
                        "relative_velocity": {
                            "kilometers_per_second": "12.0811420305",
                            "kilometers_per_hour": "43492.1113096542",
                            "miles_per_hour": "27024.3066079349"
                        },
                        "miss_distance": {
                            "astronomical": "0.1684193589",
                            "lunar": "65.5151306121",
                            "kilometers": "25195177.358205543",
                            "miles": "15655557.2525527734"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3730577?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "3730577",
                "neo_reference_id": "3730577",
                "name": "(2015 TX237)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3730577",
                "absolute_magnitude_h": 23.3,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.058150704,
                        "estimated_diameter_max": 0.130028927
                    },
                    "meters": {
                        "estimated_diameter_min": 58.1507039646,
                        "estimated_diameter_max": 130.0289270043
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0361331611,
                        "estimated_diameter_max": 0.0807962044
                    },
                    "feet": {
                        "estimated_diameter_min": 190.7831555951,
                        "estimated_diameter_max": 426.6041048727
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-08",
                        "close_approach_date_full": "2015-Sep-08 14:19",
                        "epoch_date_close_approach": 1441721940000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.573400491",
                            "kilometers_per_hour": "23664.2417675863",
                            "miles_per_hour": "14704.0395583094"
                        },
                        "miss_distance": {
                            "astronomical": "0.0795238758",
                            "lunar": "30.9347876862",
                            "kilometers": "11896602.433824546",
                            "miles": "7392205.9712328948"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3731587?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "3731587",
                "neo_reference_id": "3731587",
                "name": "(2015 UG)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3731587",
                "absolute_magnitude_h": 22.81,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0728710415,
                        "estimated_diameter_max": 0.1629446024
                    },
                    "meters": {
                        "estimated_diameter_min": 72.8710414898,
                        "estimated_diameter_max": 162.9446023625
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0452799519,
                        "estimated_diameter_max": 0.1012490505
                    },
                    "feet": {
                        "estimated_diameter_min": 239.0782277615,
                        "estimated_diameter_max": 534.595169215
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-08",
                        "close_approach_date_full": "2015-Sep-08 18:50",
                        "epoch_date_close_approach": 1441738200000,
                        "relative_velocity": {
                            "kilometers_per_second": "11.9557600601",
                            "kilometers_per_hour": "43040.7362163935",
                            "miles_per_hour": "26743.8396784585"
                        },
                        "miss_distance": {
                            "astronomical": "0.1132399881",
                            "lunar": "44.0503553709",
                            "kilometers": "16940461.018585347",
                            "miles": "10526314.3652659086"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3747356?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "3747356",
                "neo_reference_id": "3747356",
                "name": "(2016 EK158)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3747356",
                "absolute_magnitude_h": 20.49,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.2121069879,
                        "estimated_diameter_max": 0.4742856434
                    },
                    "meters": {
                        "estimated_diameter_min": 212.1069878758,
                        "estimated_diameter_max": 474.2856433931
                    },
                    "miles": {
                        "estimated_diameter_min": 0.1317971312,
                        "estimated_diameter_max": 0.2947073445
                    },
                    "feet": {
                        "estimated_diameter_min": 695.8890901025,
                        "estimated_diameter_max": 1556.0553102697
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-08",
                        "close_approach_date_full": "2015-Sep-08 10:26",
                        "epoch_date_close_approach": 1441707960000,
                        "relative_velocity": {
                            "kilometers_per_second": "16.9572895141",
                            "kilometers_per_hour": "61046.242250638",
                            "miles_per_hour": "37931.7609140145"
                        },
                        "miss_distance": {
                            "astronomical": "0.2804752346",
                            "lunar": "109.1048662594",
                            "kilometers": "41958497.683910302",
                            "miles": "26071801.4952820876"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3758838?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "3758838",
                "neo_reference_id": "3758838",
                "name": "(2016 RT)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3758838",
                "absolute_magnitude_h": 24.4,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0350392641,
                        "estimated_diameter_max": 0.0783501764
                    },
                    "meters": {
                        "estimated_diameter_min": 35.0392641108,
                        "estimated_diameter_max": 78.3501764334
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0217723826,
                        "estimated_diameter_max": 0.0486845275
                    },
                    "feet": {
                        "estimated_diameter_min": 114.9582192654,
                        "estimated_diameter_max": 257.0543928497
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-08",
                        "close_approach_date_full": "2015-Sep-08 01:02",
                        "epoch_date_close_approach": 1441674120000,
                        "relative_velocity": {
                            "kilometers_per_second": "19.0983945697",
                            "kilometers_per_hour": "68754.220451069",
                            "miles_per_hour": "42721.1988130545"
                        },
                        "miss_distance": {
                            "astronomical": "0.170705627",
                            "lunar": "66.404488903",
                            "kilometers": "25537198.19621449",
                            "miles": "15868079.146520362"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54191333?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "54191333",
                "neo_reference_id": "54191333",
                "name": "(2021 QP3)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54191333",
                "absolute_magnitude_h": 22.7,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0766575574,
                        "estimated_diameter_max": 0.1714115092
                    },
                    "meters": {
                        "estimated_diameter_min": 76.6575573531,
                        "estimated_diameter_max": 171.4115092306
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0476327831,
                        "estimated_diameter_max": 0.1065101409
                    },
                    "feet": {
                        "estimated_diameter_min": 251.5011804664,
                        "estimated_diameter_max": 562.3737359442
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-08",
                        "close_approach_date_full": "2015-Sep-08 00:22",
                        "epoch_date_close_approach": 1441671720000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.3106795473",
                            "kilometers_per_hour": "33518.4463701775",
                            "miles_per_hour": "20827.0590792917"
                        },
                        "miss_distance": {
                            "astronomical": "0.3949696486",
                            "lunar": "153.6431933054",
                            "kilometers": "59086618.145208482",
                            "miles": "36714722.0311497716"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54218591?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "54218591",
                "neo_reference_id": "54218591",
                "name": "(2021 VC9)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54218591",
                "absolute_magnitude_h": 27.06,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0102933082,
                        "estimated_diameter_max": 0.0230165369
                    },
                    "meters": {
                        "estimated_diameter_min": 10.293308202,
                        "estimated_diameter_max": 23.0165368531
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0063959632,
                        "estimated_diameter_max": 0.0143018085
                    },
                    "feet": {
                        "estimated_diameter_min": 33.7706972815,
                        "estimated_diameter_max": 75.513574769
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-08",
                        "close_approach_date_full": "2015-Sep-08 16:40",
                        "epoch_date_close_approach": 1441730400000,
                        "relative_velocity": {
                            "kilometers_per_second": "5.2026208953",
                            "kilometers_per_hour": "18729.435222936",
                            "miles_per_hour": "11637.7426806071"
                        },
                        "miss_distance": {
                            "astronomical": "0.4431941124",
                            "lunar": "172.4025097236",
                            "kilometers": "66300895.211580588",
                            "miles": "41197465.9325965944"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            }
        ],
        "2015-09-09": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2537342?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "2537342",
                "neo_reference_id": "2537342",
                "name": "537342 (2015 KN120)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2537342",
                "absolute_magnitude_h": 20.43,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.2180494405,
                        "estimated_diameter_max": 0.4875733714
                    },
                    "meters": {
                        "estimated_diameter_min": 218.0494404829,
                        "estimated_diameter_max": 487.5733713755
                    },
                    "miles": {
                        "estimated_diameter_min": 0.1354895989,
                        "estimated_diameter_max": 0.3029639533
                    },
                    "feet": {
                        "estimated_diameter_min": 715.3853263138,
                        "estimated_diameter_max": 1599.6502197435
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-09",
                        "close_approach_date_full": "2015-Sep-09 08:06",
                        "epoch_date_close_approach": 1441785960000,
                        "relative_velocity": {
                            "kilometers_per_second": "10.2523277019",
                            "kilometers_per_hour": "36908.379726845",
                            "miles_per_hour": "22933.4318363832"
                        },
                        "miss_distance": {
                            "astronomical": "0.2479056142",
                            "lunar": "96.4352839238",
                            "kilometers": "37086151.845361754",
                            "miles": "23044266.1798860452"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3117424?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "3117424",
                "neo_reference_id": "3117424",
                "name": "(2002 EC3)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3117424",
                "absolute_magnitude_h": 21.35,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1427430515,
                        "estimated_diameter_max": 0.3191831664
                    },
                    "meters": {
                        "estimated_diameter_min": 142.7430514752,
                        "estimated_diameter_max": 319.1831664143
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0886963926,
                        "estimated_diameter_max": 0.1983311633
                    },
                    "feet": {
                        "estimated_diameter_min": 468.3171130019,
                        "estimated_diameter_max": 1047.1888996988
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-09",
                        "close_approach_date_full": "2015-Sep-09 22:47",
                        "epoch_date_close_approach": 1441838820000,
                        "relative_velocity": {
                            "kilometers_per_second": "17.8745264128",
                            "kilometers_per_hour": "64348.2950861308",
                            "miles_per_hour": "39983.5281328239"
                        },
                        "miss_distance": {
                            "astronomical": "0.2441773438",
                            "lunar": "94.9849867382",
                            "kilometers": "36528410.534737706",
                            "miles": "22697701.7998681028"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3727636?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "3727636",
                "neo_reference_id": "3727636",
                "name": "(2015 RO83)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727636",
                "absolute_magnitude_h": 25.0,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.02658,
                        "estimated_diameter_max": 0.0594346868
                    },
                    "meters": {
                        "estimated_diameter_min": 26.58,
                        "estimated_diameter_max": 59.4346868419
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0165160412,
                        "estimated_diameter_max": 0.0369309908
                    },
                    "feet": {
                        "estimated_diameter_min": 87.2047272,
                        "estimated_diameter_max": 194.9956979785
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-09",
                        "close_approach_date_full": "2015-Sep-09 00:47",
                        "epoch_date_close_approach": 1441759620000,
                        "relative_velocity": {
                            "kilometers_per_second": "6.3299545716",
                            "kilometers_per_hour": "22787.8364579031",
                            "miles_per_hour": "14159.475381301"
                        },
                        "miss_distance": {
                            "astronomical": "0.0137559767",
                            "lunar": "5.3510749363",
                            "kilometers": "2057864.814089629",
                            "miles": "1278697.9014657202"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3727660?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "3727660",
                "neo_reference_id": "3727660",
                "name": "(2015 RW83)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3727660",
                "absolute_magnitude_h": 24.1,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.040230458,
                        "estimated_diameter_max": 0.0899580388
                    },
                    "meters": {
                        "estimated_diameter_min": 40.2304579834,
                        "estimated_diameter_max": 89.9580388169
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0249980399,
                        "estimated_diameter_max": 0.0558973165
                    },
                    "feet": {
                        "estimated_diameter_min": 131.9896957704,
                        "estimated_diameter_max": 295.1379320721
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-09",
                        "close_approach_date_full": "2015-Sep-09 12:01",
                        "epoch_date_close_approach": 1441800060000,
                        "relative_velocity": {
                            "kilometers_per_second": "4.1564195815",
                            "kilometers_per_hour": "14963.1104934397",
                            "miles_per_hour": "9297.494961882"
                        },
                        "miss_distance": {
                            "astronomical": "0.1991376978",
                            "lunar": "77.4645644442",
                            "kilometers": "29790575.427583686",
                            "miles": "18511005.2039834268"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3728374?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "3728374",
                "neo_reference_id": "3728374",
                "name": "(2015 RU178)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3728374",
                "absolute_magnitude_h": 27.8,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0073207399,
                        "estimated_diameter_max": 0.016369672
                    },
                    "meters": {
                        "estimated_diameter_min": 7.3207398935,
                        "estimated_diameter_max": 16.3696720474
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0045488955,
                        "estimated_diameter_max": 0.0101716395
                    },
                    "feet": {
                        "estimated_diameter_min": 24.0181762721,
                        "estimated_diameter_max": 53.70627484
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-09",
                        "close_approach_date_full": "2015-Sep-09 04:46",
                        "epoch_date_close_approach": 1441773960000,
                        "relative_velocity": {
                            "kilometers_per_second": "18.4483403571",
                            "kilometers_per_hour": "66414.0252857062",
                            "miles_per_hour": "41267.0925448878"
                        },
                        "miss_distance": {
                            "astronomical": "0.0036347107",
                            "lunar": "1.4139024623",
                            "kilometers": "543744.978786209",
                            "miles": "337867.4626953242"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3728370?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "3728370",
                "neo_reference_id": "3728370",
                "name": "(2015 ST)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3728370",
                "absolute_magnitude_h": 26.2,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0152951935,
                        "estimated_diameter_max": 0.0342010925
                    },
                    "meters": {
                        "estimated_diameter_min": 15.2951935344,
                        "estimated_diameter_max": 34.201092472
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0095039897,
                        "estimated_diameter_max": 0.021251567
                    },
                    "feet": {
                        "estimated_diameter_min": 50.1810827555,
                        "estimated_diameter_max": 112.2083122258
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-09",
                        "close_approach_date_full": "2015-Sep-09 03:46",
                        "epoch_date_close_approach": 1441770360000,
                        "relative_velocity": {
                            "kilometers_per_second": "10.8739479077",
                            "kilometers_per_hour": "39146.2124677276",
                            "miles_per_hour": "24323.9340747388"
                        },
                        "miss_distance": {
                            "astronomical": "0.0254030974",
                            "lunar": "9.8818048886",
                            "kilometers": "3800249.262442538",
                            "miles": "2361365.3937135044"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3740494?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "3740494",
                "neo_reference_id": "3740494",
                "name": "(2016 AF193)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3740494",
                "absolute_magnitude_h": 21.9,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1108038821,
                        "estimated_diameter_max": 0.2477650126
                    },
                    "meters": {
                        "estimated_diameter_min": 110.8038821264,
                        "estimated_diameter_max": 247.7650126055
                    },
                    "miles": {
                        "estimated_diameter_min": 0.068850319,
                        "estimated_diameter_max": 0.1539539936
                    },
                    "feet": {
                        "estimated_diameter_min": 363.5298086356,
                        "estimated_diameter_max": 812.8773639568
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-09",
                        "close_approach_date_full": "2015-Sep-09 08:25",
                        "epoch_date_close_approach": 1441787100000,
                        "relative_velocity": {
                            "kilometers_per_second": "10.3181367289",
                            "kilometers_per_hour": "37145.2922241556",
                            "miles_per_hour": "23080.6400489482"
                        },
                        "miss_distance": {
                            "astronomical": "0.3527365432",
                            "lunar": "137.2145153048",
                            "kilometers": "52768635.533882984",
                            "miles": "32788909.6788098192"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3758926?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "3758926",
                "neo_reference_id": "3758926",
                "name": "(2016 RT1)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3758926",
                "absolute_magnitude_h": 21.9,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1108038821,
                        "estimated_diameter_max": 0.2477650126
                    },
                    "meters": {
                        "estimated_diameter_min": 110.8038821264,
                        "estimated_diameter_max": 247.7650126055
                    },
                    "miles": {
                        "estimated_diameter_min": 0.068850319,
                        "estimated_diameter_max": 0.1539539936
                    },
                    "feet": {
                        "estimated_diameter_min": 363.5298086356,
                        "estimated_diameter_max": 812.8773639568
                    }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-09",
                        "close_approach_date_full": "2015-Sep-09 01:13",
                        "epoch_date_close_approach": 1441761180000,
                        "relative_velocity": {
                            "kilometers_per_second": "16.4285523516",
                            "kilometers_per_hour": "59142.7884657722",
                            "miles_per_hour": "36749.0287553016"
                        },
                        "miss_distance": {
                            "astronomical": "0.2718411215",
                            "lunar": "105.7461962635",
                            "kilometers": "40666852.754811205",
                            "miles": "25269210.552976429"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3771641?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "3771641",
                "neo_reference_id": "3771641",
                "name": "(2017 FB3)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3771641",
                "absolute_magnitude_h": 25.9,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0175612318,
                        "estimated_diameter_max": 0.0392681082
                    },
                    "meters": {
                        "estimated_diameter_min": 17.561231848,
                        "estimated_diameter_max": 39.2681081809
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0109120402,
                        "estimated_diameter_max": 0.0244000636
                    },
                    "feet": {
                        "estimated_diameter_min": 57.6155918963,
                        "estimated_diameter_max": 128.8323800441
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-09",
                        "close_approach_date_full": "2015-Sep-09 10:41",
                        "epoch_date_close_approach": 1441795260000,
                        "relative_velocity": {
                            "kilometers_per_second": "4.6258151259",
                            "kilometers_per_hour": "16652.9344532213",
                            "miles_per_hour": "10347.4858551141"
                        },
                        "miss_distance": {
                            "astronomical": "0.0222402295",
                            "lunar": "8.6514492755",
                            "kilometers": "3327090.961511165",
                            "miles": "2067358.458797477"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3773922?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "3773922",
                "neo_reference_id": "3773922",
                "name": "(2017 GW6)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3773922",
                "absolute_magnitude_h": 21.1,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.160160338,
                        "estimated_diameter_max": 0.358129403
                    },
                    "meters": {
                        "estimated_diameter_min": 160.1603379786,
                        "estimated_diameter_max": 358.1294030194
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0995189894,
                        "estimated_diameter_max": 0.2225312253
                    },
                    "feet": {
                        "estimated_diameter_min": 525.4604432536,
                        "estimated_diameter_max": 1174.9652706022
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-09",
                        "close_approach_date_full": "2015-Sep-09 05:52",
                        "epoch_date_close_approach": 1441777920000,
                        "relative_velocity": {
                            "kilometers_per_second": "16.7035752211",
                            "kilometers_per_hour": "60132.8707958966",
                            "miles_per_hour": "37364.2274120392"
                        },
                        "miss_distance": {
                            "astronomical": "0.3204607155",
                            "lunar": "124.6592183295",
                            "kilometers": "47940240.457475985",
                            "miles": "29788684.100639193"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54016507?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "54016507",
                "neo_reference_id": "54016507",
                "name": "(2020 GN2)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54016507",
                "absolute_magnitude_h": 25.6,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0201629919,
                        "estimated_diameter_max": 0.0450858206
                    },
                    "meters": {
                        "estimated_diameter_min": 20.1629919443,
                        "estimated_diameter_max": 45.0858206172
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0125286985,
                        "estimated_diameter_max": 0.0280150214
                    },
                    "feet": {
                        "estimated_diameter_min": 66.1515504905,
                        "estimated_diameter_max": 147.9193637137
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-09",
                        "close_approach_date_full": "2015-Sep-09 02:50",
                        "epoch_date_close_approach": 1441767000000,
                        "relative_velocity": {
                            "kilometers_per_second": "17.8655656746",
                            "kilometers_per_hour": "64316.0364285917",
                            "miles_per_hour": "39963.4838575324"
                        },
                        "miss_distance": {
                            "astronomical": "0.2887950696",
                            "lunar": "112.3412820744",
                            "kilometers": "43203127.278661752",
                            "miles": "26845178.4634940976"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54139092?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "54139092",
                "neo_reference_id": "54139092",
                "name": "(2021 HA2)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54139092",
                "absolute_magnitude_h": 27.09,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0101520787,
                        "estimated_diameter_max": 0.0227007381
                    },
                    "meters": {
                        "estimated_diameter_min": 10.1520787189,
                        "estimated_diameter_max": 22.7007381285
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0063082073,
                        "estimated_diameter_max": 0.0141055804
                    },
                    "feet": {
                        "estimated_diameter_min": 33.3073459442,
                        "estimated_diameter_max": 74.4774896814
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-09",
                        "close_approach_date_full": "2015-Sep-09 10:02",
                        "epoch_date_close_approach": 1441792920000,
                        "relative_velocity": {
                            "kilometers_per_second": "14.2055866777",
                            "kilometers_per_hour": "51140.1120398276",
                            "miles_per_hour": "31776.476839414"
                        },
                        "miss_distance": {
                            "astronomical": "0.1221474479",
                            "lunar": "47.5153572331",
                            "kilometers": "18272998.031775973",
                            "miles": "11354314.4703875074"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/54373932?api_key=LW650oAngMX5QfafIhZHZLUpgW2idxIX1FEXOioV"
                },
                "id": "54373932",
                "neo_reference_id": "54373932",
                "name": "(2023 MB3)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54373932",
                "absolute_magnitude_h": 30.0,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.002658,
                        "estimated_diameter_max": 0.0059434687
                    },
                    "meters": {
                        "estimated_diameter_min": 2.658,
                        "estimated_diameter_max": 5.9434686842
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0016516041,
                        "estimated_diameter_max": 0.0036930991
                    },
                    "feet": {
                        "estimated_diameter_min": 8.72047272,
                        "estimated_diameter_max": 19.4995697979
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-09",
                        "close_approach_date_full": "2015-Sep-09 05:44",
                        "epoch_date_close_approach": 1441777440000,
                        "relative_velocity": {
                            "kilometers_per_second": "23.0114767934",
                            "kilometers_per_hour": "82841.3164564031",
                            "miles_per_hour": "51474.3724392578"
                        },
                        "miss_distance": {
                            "astronomical": "0.4755885234",
                            "lunar": "185.0039356026",
                            "kilometers": "71147030.097085158",
                            "miles": "44208714.5169968604"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            }
        ]
    }
}

*/