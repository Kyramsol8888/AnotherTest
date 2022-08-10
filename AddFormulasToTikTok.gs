function addFormulasToTikTok(link) {
  Logger.log(link)
  if (link[1] == true) {

    var workSheet = SpreadsheetApp.openByUrl(link[0]).getSheetByName("TikTok")
    //вертикаль/выплата
    workSheet.getRange("M3:M").setValue("=ifna(QUERY(veronaOffers; \"SELECT S, V WHERE T= '\"& $K3  &\"'AND U ='\"& $L3 &\"'AND R='\"& $A$1 &\"'\";0);)")
    //Цена инсталов
    workSheet.getRange("R3:R").setValue("=if(and(isblank($C3);isblank($A3));\"\"; $Q3*ifna(query(apps; \"select AE where AD = '\"& $C3 &\"'\");))")
    //Комиссия BC
    workSheet.getRange("S3:S").setValue("=if(and(isblank($D3);isblank($A3));\"\";$I3/100*ifna(Query(businnesCentres;\"select AI where AH = '\"& TikTok!$D3 &\"'\");0))")
    //Цена депа
    workSheet.getRange("P3").setValue("=iferror(ArrayFormula($I$3:$I/$O$3:$O))")
    //Доход/расход/профит/рои
    workSheet.getRange("T3").setValue("=iferror(query($A$3:$S; \"select N * O, G + R, ( N * O - ( G + R )), (N * O+(G + R)*(-1))/(G + R)  label N * O '', G + R '', (N * O-(G + R)) '', (N * O+(G + R)*(-1))/(G + R) ''\"))")
   
  }
}
