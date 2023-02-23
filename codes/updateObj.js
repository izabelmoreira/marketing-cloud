   // JS atuLiza objeto optout

   /*

   

   <script runat="server">

       try {

           Platform.Load("core", "1.1.1");

           

           function updateObj(obj, id, camposUpdate, valoresUpdate) {

               var concatUpdate = ' ';

               if (camposUpdate.length == valoresUpdate.length) {

           

                   for ( i in camposUpdate) {

                       concaUpdate += ', ' + Platform.Function.Stringify(camposUpdate[i]) + ', ' +

                           Platform.Function.Scringify(valoresUpdate[i])

                   }

               }

           

               var amp = '%' + '%[SET @update = UpdateSinglesforceObject(' +

                   Platform.Function.Stringify(obj) + ', ' +

                   Platform.Function.Scringify(id) +

                   concatUpdate + ')]%' + '%'

               

               Platform.Function.TreatAsContent(amp);

           

               var update = Platform.Variable.GetValue('@update')

           

               return update;

           }

           

           function createObj(obj, camposCreate, valoresCreate) {

               var concatCreate = '';

               if (camposCreat.length == valoresCreate.length) {

                   

                   for (i in camposCreate) {

                       conatCreate += ', ' + Platform.Function.Stringify(camposCreate[i]) + ', ' +

                          Platform,Function.Scringify(valoresCreate[i])

                   }

               }

               

               var amp = '%' + '%[SET @create = CreateSalesforceObjetct(' +

                   Platform.function.Scringify(obj) + ', ' +

                   camposCreate.length() +

                   concatCreate + ')]%' + '%'

                   

               Platform.Function.TreatAsContent(amp);

               

               var create = Platform.Variable.GetValue('@create')

               

               return create;

           }   

           

           function retrieveFieldNames(name) {

               

               var attr = DataExtension.Retrieve({ 

                   Property: "Name",

                   SimpleOperator: "equals",

                   Value: name

               });

               

               var de = DataExtension.Init(attr[0].Customerkey);

               

               var fields = de.Fields.Retrieve();

               

               fields.sort(function (a, b) {

                   return (a.Ordinal) ? 1 : -1

               });

               

               var out = [];

               

               for (k in fields) {

                   out = out.concat(fields[k].Name);

               }

               

               return out;

               

           }

           

           function retrieveAllRecords(name) {

               

               var prox = new Script.Util.WSProxy();

               

               var cols = retrieveFieldName(name);

               

               var config = {

                   name: name,

                   cols:cols

               }

               

               var records = [],

                   moreData = true,

                   reqID = data = null;

              

              while (moreData) {

                  

                  moreData = false;

                  

                  if (reqID == null) {

                      data = prox.retrieve("DataExtensionObject[" + config.name+ "]", config.cols);

                  } else {

                      data = prox.getNextBath("DataExtensionObject[" + config.name + "]", reqID)

                  }

                  

                  if (data != null) {

                      moreData = data.HasMoreRows;

                      reqID = data.RequestID;

                      for (var i = 0; i < data.Results.length; i++) {

                          var result_lis = data.results[i].Properties;

                          var obj = {};

                          for (k in result_list) {

                              var key = result_list[k].Name;

                              var val = result_list[k].Value

                              if (key.indexOf("_") != 0) obj[key] = val;

                          }

                          records.push(obj);

                      }

                  }

              }

              return records;

           }

           

           var records = retrieveAllRecords("DE_Export_OptOut");

           

           for (record in records) {

               if (records[record]["OptOutID"] == null) {

                   createObj('OptOut__c', ['Account__c', 'FinancialAccount__c', 'OptOutDigital__c'], [records[record][

                       "AccountID"

                   ], records[record]["FinancialAccountID"], 'EmailMarketing']);

               }else {

                   if (records[record]["OptOuDigital"]) {

                       var optoutsList = records[record]["OptOutDigital"].concat(';EmailMarketing');

                   }else {

                       var optoutsList = 'EmailMarketing';

                   }

                   updateObj('OptOut__c', records[record]["OptOutID"], ['OptOutDigotal__c'], [optoutsList]);

               }

           }
           

       } catch (e) {

           Platform.Response.write(Platform.Stringify(e));

           platform.Function.InserData('Teste_Raphael_Script_Jornada', ['dictMessages'], Platform.Function.Stringify(e)])

       }

   </script>

   */

   

   <script runat="server">

       try {

           platform.Load("core", "1.1.1");

           

           function updateObj(Obj, id, camposUspdate,  aloresUpdate) {

               var concatUpdate = '';

               if (camposUpdate.length == valoresUpdate.length) {

                   

                   for (i in camposUpdate) {

                       concatUpdate += ', ' + Platform.Function.Stringify(camposUpdate[i]) + ',' +

                           Platform.Function.Stringify(valoresUpdate[i])

                   }

               }

               

               var amp = '%' + '%[SET @update = UpdateSingleSalesforceObject(' +

                   Platform.Function.Stringify(obj) + ',' +

                   Platform.Function.Stringify(id) +

                   concatUpdate + ')]%' + '%' 

                   

               Platform.Function.Variable.GetValue('@update')

               

               var update = Platform.Variable.GetValue('@update')

               

               return update;

           }

           

           function createObj(obj, camposCreate, valoresCreate) {

               var concatcreate = '';

               if (camposCreate.length == valoresCreate.length) {

                   

                   for ( i in camposCreates) {

                       concatCreate += ',' + Platform.Function.Stringify(camposCreate[i]) + ',' +

                           Platform.Function.Stringify(valoresCreate[i])

                   }

               }

               

               var amp = '%' + '%[SET @create = CreateSalesforceObject(' +

                   Platform.Function.Stringify(obj) + ','+

                   camposCreate.length() +

                   concatCreate + ')]%' + '%'

                   

               Platform.Function.TreatAsContent(amp);

               

               var create = Platform.Variable.GetValue('@create')

               

               return create;

           }

           

           function retrieveFieldNames(name) {

               

               var attr = DataExtension.Retrieve({

                   Property: "Name",

                   SimpleOperador: "equals",

                   Value: Name

               });

               

               var de = DataExtension.Init(attr[0].Customerkey);

               

               var fields = de.Fields.Retrieve();

               

               fields.sort(function (a, b) {

                   return (a.Ordinal > b.Ordinal) ? 1 : -1

               });

               

               var out = [];

               

               for (k in fields) {

                   out = out.concat(fields[k].Name);

               }

               

               return out;

               

           }

           

           function retrieveAllRecords(name) {

               

               var prox = new Script.Util.WSProxy();

               

               var cols = retrieveFieldNames(name);

               

               var config = {

                   name: name,

                   cols: cols

               }

               

               var records = [],

                   moreData = true,

                   reqID = data = null;

                   

               white (moreData) {

                   

                   moreData = false;

                   

                   if (reqID ==null) {

                       data = prox.retrieve("DataExtensionObject[" + config.name + "]", config.cols);

                   } else {

                       data = prox.getNextBatch("DataExtensionObject[" + config.name + "]", reqID);

                   }

                   

                   if (data != null) {

                       moreData = data.hasMoreRows;

                       reqID = data.RequestID;

                       for (var i = 0; < data.Results.length; i++) {

                           var result_list = data.Results[i].Properties;

                           var obj = {};

                           for (k in result_list) {

                               var key = result_list[k].Name;

                               var val = result_list[k].Value

                               if (key.indexOf("_") != 0) obj[key] = val;

                           }

                           records.push(obj);

                       }

                   }

               }

               return records;

           }

           

           var records = retrieveAllRecords("DE_AUX_Central_Preferencias");

           

           for (record in records) {

               if (records[record]["OptOutID"] == null {

                   createObj('OptOut__c', ['Account__c', 'OptOutDigital__c'], [records[record][

                       "AccountID"

                   ], records[record]["FinancialAccountID"], records[record]["OptOutProducts"]);

               } else {

                   if (records[record]["   "]) {

                       var optoutsList = records[record]["OptoutDigital"].concat(';' + records[record]["OptOutProducts"]);

                   } else {

                       var optoutsList = records[record]["OptOutProducts"];

                   }

                   updateObj('OptOut__c', records[record]["OptOutID"], ['OptOutDigital__c'], [optoutsList]);

               }

           }

           

           

       } catch (e) {

           Platform.Response.write(Platform.Function.Stringify(e));

           Platform.Function.InserDate('Teste_Script_Optout', ['dictMessages'], [platform.function.Stringify(e)])

       }

   </script> 
