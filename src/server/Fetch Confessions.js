
; (function (root, factory) {
  root.CC_SIMPLE_CONFESSIONS_POPULATOR = factory()
})(this, function () {

  const { REFERENCES_MANAGER } = CCLIBRARIES
  const REQUIRED_REFERENCES = ["CCJSONSimpleConfessionsIndex"];
  const initDB = JSON_DB_HANDLER.init

  const MASTER_INDEX_FILE_ID = "1ohC9kPnMxyptp8SadRBGAofibGiYTTev"
  const DIVISION = "CCMAIN"

  let indexFileId
  let jsonDBManager
  let allConfessions

  function loadConfessions() {
    console.log("Starting..")
    getReferences()
    getAllConfessions()

  }

  function getReferences() {
    referencesObj = REFERENCES_MANAGER.init(MASTER_INDEX_FILE_ID).requireFiles(REQUIRED_REFERENCES).requiredFiles;
    indexFileId = referencesObj.CCJSONSimpleConfessionsIndex.fileId // Get DB Index File Id to start Connection
    jsonDBManager = initDB(indexFileId) // Start Connection with DB
  }

  function getAllConfessions() {
    allConfessions = jsonDBManager.lookupByCriteria([], { dbMain: DIVISION })
    console.log("loaded")
    console.log(allConfessions.length + " Confessions in DB")
  }


  return {
    loadConfessions
  }

})

function loadConfessions() {
  CC_SIMPLE_CONFESSIONS_POPULATOR.loadConfessions()
}