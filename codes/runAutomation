
<script>
Platform.load("core", "1")
try {
    //chave utilizada para rodar a automação com a query, deve ser alterada para a automação que você deseja rodar
    var automationCustomerKey = "12457585-j2j3-48t9-s4as-15f17r3fd5vd"
    var rr = Platform.Function.CreateObject("RetrieveRequest");
    Platform.Function.SetObjectProperty(rr,"ObjectType", "Automation");
    Platform.Function.AddObjectArrayItem(rr,"Properties", "ProgramID");
    Platform.Function.AddObjectArrayItem(rr,"Properties", "CustomerKey");
    Platform.Function.AddObjectArrayItem(rr,"Properties", "Status");
    var sfp = Platform.Function.CreateObject("SimpleFilterPart");
    Platform.Function.SetObjectProperty(sfp,"Property", "CustomerKey");
    Platform.Function.SetObjectProperty(sfp,"SimpleOperator", "Equals");
    Platform.Function.AddObjectArrayItem(sfp,"Automation", "CustomerKey");
    Platform.Function.SetObjectProperty(rr,"Filter", sfp);
    var retrieveStatus = [0,0,0];
    var automationResult = Platform.Function.InvokeRetrieve(rr,retrieveStatus);
    var objID = automationResult[0]["ObjectID"];
    var status = automationResult[0]["Status"];

    if (ObjectID != null) {
        if (Status ==2) {
            var obj = Platform.Function.CreateObject("Automation");
            Platform.Function.SetObjectProperty(obj, "ObjectID", objID);
            var performOptions = Platform.Function.CreateObject("PerformOptions");
            var pResult = [0,0,0];
            var pStatus = Platform.Function.InvokePerform(obj,"start", pResult, performOptions);
                        }
    }

    catch (e) {
        Platform.Function.InsertData('DE_LOG', ['dictMessages'], [Platform.Function.Stringify(e)])
    }
    </script>


    
