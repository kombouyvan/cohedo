import {Component} from '@angular/core';
import {BlogHelperService} from 'src/app/components/services/blog-helper.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends BlogHelperService {

  projects = [
    {
      image: '/assets/img/projects-local.jpg',
      date: '2018-10-02',
      project: 'Gemeinsam statt alleine',
      description: '    Mit dem Besuch des „One World Festival 2018“ im DKH (Dietrich-Keuning-Haus) startete das\n' +
        '                            Projekt. Den\n' +
        '                            Teilnehmenden wurde durch ein vielseitiges inter-kulturelles Programm, incl. kulinarischem\n' +
        '                            Angebot, die\n' +
        '                            Teilhabe an der städtischen Veranstaltung ermöglicht. Hierbei wurden die Beteiligten aus\n' +
        '                            ihrer Isolation\n' +
        '                            herausgeholt und Schwellenängste konnten abgebaut werden.'
    },
    {
      image: '/assets/img/projects-local.jpg',
      date: '2018-11-02',
      project: 'Globe Café – eine Welt in der Kiste',
      description: 'Im Projekt „Globe Café – eine Welt in der Kiste“, mit kulinarischem Essen vom bunten Kontinent, wurde nicht nur geschlemmt, sondern auch diskutiert. Zum Thema „Wie gelingt Integration“ konnten Ralf Stoltze (Bezirksbürgermeister Innenstadt-West), Olaf Mayer (Sprecher SPD Fraktion in der Bezirksvertretung Innenstadt-West) und Anne Eberle (Sprecherin für die Linke) befragt werden. Die Teilnehmenden konnten vor Ort ihre Fragen, Wünsche und Vorstellungen mit den Kommunalpolitikern besprechen.'
    },
    {
      image: '/assets/img/projects-local.jpg',
      date: '2018-12-01',
      project: 'Meet & Greet – dein Engagement ist gefragt',
      description: ' Das Projekt „Meet & Greet – dein Engagement ist gefragt“ ermöglicht die Begegnung zwischen Flüchtlingen und Neuzugewanderten mit engagierten Ehrenamtler aus der afrikanischen Szene. Hierbei konnten die Teilnehmenden die Aktivitäten der MSOs (Migrantenselbstorganisationen) und deren Akteure kennenlernen.'
    },
    {
      image: '/assets/img/projects-local.jpg',
      date: '2018-12-24',
      project: 'COHEDO e.V. – Jahresfeier',
      description: 'Die Jahresfeier wurde im festlichen Rahmen am Weihnachtsabend durchgeführt.\n' +
        'Für alle Teilnehmenden wurde durch die Feier mit gemeinsamem Essen und Geschenken ein christlicher Brauch im Ankunftsland näher gebracht. Danach wurden die besten Projekte und besonders engagierte Personen des Jahres 2018 ausgezeichnet'
    },
    {
      image: '/assets/img/projects-local.jpg',
      date: '2018-12-24',
      project: '„ Deine Stimme für Integration“ - Ein Photovoice-Projekt mit Geflüchteten und Neuzugewanderter',
      description: 'Das Projekt „Deine Stimme für Integration“ der COHEDO e.V (Community at Heart Dortmund e.V.) gehört zu einem von der „KOMM-AN NRW“ geförderten Maßnahme zur Integration der Flüchtlinge und Neuzugewanderten in NRW, in diesem Fall Dortmund. Der Raumplaner Kevin Ndeme Nguba Matuke und sein Team vom COHEDO e.V. haben mit Flüchtlingen aus Subsahara Afrika und anderen Neuzugewanderten aus dem afrikanischen Kulturkreis gesprochen.'
    },
    {
      image: '/assets/img/projects-local.jpg',
      date: '2018-12-24',
      project: 'COHEDO e.V. – Jahresfeier',
      description: 'Die Jahresfeier wurde im festlichen Rahmen am Weihnachtsabend durchgeführt.\n' +
        'Für alle Teilnehmenden wurde durch die Feier mit gemeinsamem Essen und Geschenken ein christlicher Brauch im Ankunftsland näher gebracht. Danach wurden die besten Projekte und besonders engagierte Personen des Jahres 2018 ausgezeichnet.'
    },
    {
      image: '/assets/img/projects-local.jpg',
      date: '2018-12-01',
      project: 'Meet & Greet – dein Engagement ist gefragt',
      description: 'Das Projekt „Meet & Greet – dein Engagement ist gefragt“ ermöglicht die Begegnung zwischen Flüchtlingen und Neuzugewanderten mit engagierten Ehrenamtler aus der afrikanischen Szene. Hierbei konnten die Teilnehmenden die Aktivitäten der MSOs (Migrantenselbstorganisationen) und deren Akteure kennenlernen.'
    },
    {
      image: '/assets/img/projects-local.jpg',
      date: '2018-11-02',
      project: 'Globe Café – eine Welt in der Kiste',
      description: 'Im Projekt „Globe Café – eine Welt in der Kiste“, mit kulinarischem Essen vom bunten Kontinent, wurde nicht nur geschlemmt, sondern auch diskutiert. Zum Thema „Wie gelingt Integration“ konnten Ralf Stoltze (Bezirksbürgermeister Innenstadt-West), Olaf Mayer (Sprecher SPD Fraktion in der Bezirksvertretung Innenstadt-West) und Anne Eberle (Sprecherin für die Linke) befragt werden. Die Teilnehmenden konnten vor Ort ihre Fragen, Wünsche und Vorstellungen mit den Kommunalpolitikern besprechen.'
    },
    {
      image: '/assets/img/projects-local.jpg',
      date: '2018-10-02',
      project: 'Gemeinsam statt alleine',
      description: 'Mit dem Besuch des „One World Festival 2018“ im DKH (Dietrich-Keuning-Haus) startete das Projekt. Den Teilnehmenden wurde durch ein vielseitiges inter-kulturelles Programm, incl. kulinarischem Angebot, die Teilhabe an der städtischen Veranstaltung ermöglicht. Hierbei wurden die Beteiligten aus ihrer Isolation herausgeholt und Schwellenängste konnten abgebaut werden.'
    },
    {
      image: '/assets/img/projects-local.jpg',
      date: '',
      project: 'Internationale Küche des Miteinanders Fair-binden!',
      description: ''
    },
    {
      image: '/assets/img/projects-local.jpg',
      date: '',
      project: 'FRAUENTREFF „TALK TOGETHER“',
      description: ''
    },
    {
      image: '/assets/img/projects-local.jpg',
      date: '',
      project: 'FAIRFRIENDS-MESSE, 06. – 09.09.2018, FOTOSBERICHT',
      description: '<a href="https://cohedo.de/wp-content/uploads/2019/07/FAIRFRIENDS-MESSE 2018_Fotoprotokoll.pdf">FAIRFRIENDS-MESSE 2018</a>'
    }
  ];
}
