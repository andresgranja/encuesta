import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as Survey from 'survey-angular';
import * as SurveyEditor from 'surveyjs-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "App Encuesta...";
  
  editor: SurveyEditor.SurveyEditor;
  @Input() json: any;
  @Output() surveySaved: EventEmitter<Object> = new EventEmitter();



  ngOnInit() {

    /* --------- CARGAR ENCUESTA ---------
    var surveyJSON = { title: "Tell us, what technologies do you use?", pages: [
      { name:"page1", questions: [ 
          { type: "radiogroup", choices: [ "Yes", "No" ], isRequired: true, name: "usoDeFramework",title: "Do you use any front-end framework like Bootstrap?" },
          { type: "checkbox", choices: ["Bootstrap","Foundation"], hasOther: true, isRequired: true, name: "elFramework", title: "What front-end framework do you use?", visibleIf: "{usoDeFramework} = 'Yes'" }
       ]},
      { name: "page2", questions: [
        { type: "radiogroup", choices: ["Yes","No"],isRequired: true, name: "framoworkQueUsas", title: "Do you use any MVVM framework?" },
        { type: "checkbox", choices: [ "AngularJS", "KnockoutJS", "React" ], hasOther: true, isRequired: true, name: "mvvm", title: "What MVVM framework do you use?", visibleIf: "{framoworkQueUsas} = 'Yes'" } ] },
      { name: "page3",questions: [
        { type: "comment", name: "acercaDe", title: "Please tell us about your main requirements for Survey library" } ] }
     ]
    };


    //console.log(surveyJSON);
    
    
    var survey = new Survey.ReactSurveyModel(surveyJSON);

    Survey.SurveyNG.render("surveyElement", {model:survey});


    survey.onComplete.add(function (sender) {
      var mySurvey = sender;
      var surveyData = sender.data;

      console.log(surveyData);
      console.log(JSON.stringify(surveyData));
    }); ----------------------------*/

    //------------CARGAR SURVEY-EDITOR UUFFFF-----------
    
    //let editorOptions = { questionTypes : ["text", "checkbox", "radiogroup", "dropdown"], showJSONEditorTab:false, showTestSurveyTab: false, showEmbededSurveyTab: false, generateValidJSON : true};
    let editorOptions = { showJSONEditorTab:false, showTestSurveyTab: false, showEmbededSurveyTab: false, generateValidJSON : true};
    
    this.editor = new SurveyEditor.SurveyEditor('survey-editor', editorOptions);
    
    this.editor.text = JSON.stringify(this.json);
    
    this.editor.saveSurveyFunc = this.saveEncuesta;
    
  } 

  saveEncuesta = () =>{
    console.log(JSON.stringify(this.editor.text));
  }
  
}
