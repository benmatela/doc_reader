import { Component } from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  page: number = 1;
  totalPages: number;
  isLoaded: boolean = false;
  src: string = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  html: string = '';
  result: string = '';
  text: string = '';
  speech: any;
  speechData: any;
  constructor() {
    this.speech = new Speech() // will throw an exception if not browser supported
    if (this.speech.hasBrowserSupport()) { // returns a boolean
      console.log("speech synthesis supported")
      this.speech.init({
        'volume': 1,
        'lang': 'en-GB',
        'rate': 1,
        'pitch': 1,
        'voice': 'Google UK English Male',
        'splitSentences': true,
        'listeners': {
          'onvoiceschanged': (voices) => {
            console.log("Event voiceschanged", voices)
          }
        }
      }).then((data) => {
        // The "data" object contains the list of available voices and the voice synthesis params
        console.log("Speech is ready, voices are available", data)
        this.speechData = data;
        data.voices.forEach(voice => {
          console.log(voice.name + " " + voice.lang)
        });
      }).catch(e => {
        console.error("An error occured while initializing : ", e)
      })
    }
  }

  //PDF
  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

  start() {
    this.html = '<h1 _ngcontent-serverapp-c13="" class="r ng-star-inserted" style="text-align:center">Here’s why you need to visit Puerto Rico</h1><figure _ngcontent-serverapp-c13="" style="text-align:center" class="ng-star-inserted"><img _ngcontent-serverapp-c13="" class="img-zoomable" style="max-width: 100%; max-height: 100%; width: 100%; cursor: zoom-in;" ng-reflect-ng-style="[object Object]" ng-reflect-ng-style.xs="[object Object]" src="https://firebasestorage.googleapis.com/v0/b/pwatest-a462e.appspot.com/o/images%2FFIOqhlVoUvnBLQjxTUrY%2Fmain.jpeg?alt=media&amp;token=cd033b06-56f8-43cc-94cd-519b8c867fe4"><figcaption _ngcontent-serverapp-c13="">Puerto Rico</figcaption></figure><p _ngcontent-serverapp-c13="" class="r ng-star-inserted"> You hear your friends and family talk about a beautiful island far-far away? You then go on to watch commercials of cruise lines (MSC) making stops at Puerto Rico. </p><p _ngcontent-serverapp-c13="" class="r ng-star-inserted"> Have you ever wondered why? In this post, you will find ‘Top 10 reasons to visit Puerto Rico.’ If you frequent our posts, you know that we like to keep things short and simple so let’s jump right into it. </p><h2 _ngcontent-serverapp-c13="" class="r ng-star-inserted">1. Old San Juan</h2><p _ngcontent-serverapp-c13="" class="r ng-star-inserted"> There is no better way to describe this charming part of San Juan than ‘romantic’. This tiny corner of the city is breathtaking every which way. A peninsula surrounded by water from all sides, with several fountains, forts romantic nooks, and restaurants is simply mesmerizing. Bricked, narrow streets and the architect give it a very relaxed vibe. If you are thinking of travelling with family, it still has that serenity to offer that you can enjoy as a group. 3 days will be plenty to tour, but you could easily spend more time exploring. It’s most definitely one of those places you could keep going back to without getting bored. </p><figure _ngcontent-serverapp-c13="" style="text-align:center" class="ng-star-inserted"><img _ngcontent-serverapp-c13="" class="img-zoomable" style="max-width: 100%; max-height: 100%; width: 70%; cursor: zoom-in;" ng-reflect-ng-style="[object Object]" ng-reflect-ng-style.xs="[object Object]" src="https://firebasestorage.googleapis.com/v0/b/pwatest-a462e.appspot.com/o/images%2FFIOqhlVoUvnBLQjxTUrY%2Fstreet.jpg?alt=media&amp;token=38faec74-4e17-46ad-b07e-f97101105c32"><figcaption _ngcontent-serverapp-c13="">Puerto Rico</figcaption></figure><h2 _ngcontent-serverapp-c13="" class="r ng-star-inserted">2. Weather</h2><p _ngcontent-serverapp-c13="" class="r ng-star-inserted"> It’s amazing how a short 3-hour flight means you can go from freezing New York temperatures to warm tropical weather. Probably pack a change of clothes in your carry on so can change right at the airport to avoid cooking and looking cuckoo (we are still using this yes?) while driving around San Juan in turtle necks and endless layers of sweaters! Puerto Rico has the perfect weather and we would highly recommend February as one of the best times to visit. The days are warm, and the nights are pleasant with a cool breeze, a perfect blendito (that’s right we just created a new word). </p><h2 _ngcontent-serverapp-c13="" class="r ng-star-inserted">3. Distance</h2><p _ngcontent-serverapp-c13="" class="r ng-star-inserted"> This one is applicable to you if you are living on the east coast. Let’s face it, who doesn’t want to catch a short flight and be someplace tropical, lying on the beach with a margarita. Sign us up any day! Essentially, Puerto Rico is to east coasters what Hawaii is to west coasters. </p><h2 _ngcontent-serverapp-c13="" class="r ng-star-inserted">4. Activities</h2><p _ngcontent-serverapp-c13="" class="r ng-star-inserted"> One activity that needs special mention is the Bioluminescent bay — there are 3 different places you can experience this (more details to follow in the next post). It’s truly magical and you must experience it. Other than this, there is hiking, cave tubbing, scuba diving, snorkeling, rappelling, surfing, possibility to explore and relax at endless hotels/resorts, several ultra-romantic nooks, restaurants, forts, etc. </p><figure _ngcontent-serverapp-c13="" style="text-align:center" class="ng-star-inserted"><img _ngcontent-serverapp-c13="" class="img-zoomable" style="max-width: 100%; max-height: 100%; width: 50%; cursor: zoom-in;" ng-reflect-ng-style="[object Object]" ng-reflect-ng-style.xs="[object Object]" src="https://firebasestorage.googleapis.com/v0/b/pwatest-a462e.appspot.com/o/images%2FFIOqhlVoUvnBLQjxTUrY%2Ffort.png?alt=media&amp;token=78114b14-8400-4bcd-b54f-bab567236469"><figcaption _ngcontent-serverapp-c13="">Puerto Rico</figcaption></figure><p _ngcontent-serverapp-c13="" class="r ng-star-inserted"> If you are looking for places to stay, our favorite 3 properties are Sheraton in Old San Juan; perfect to be right in the middle of it all with an amazing roof top pool, Gran Melia in Río Grande; rightly situated on Coco Beach is a huge resort with endless list of amenities and services, and Royal Isabela in Isabela is truly a hidden gem providing privacy and luxury such as a private plunge pool for each of their villas. </p><h2 _ngcontent-serverapp-c13="" class="r ng-star-inserted">5. Food</h2><p _ngcontent-serverapp-c13="" class="r ng-star-inserted"> Looking for amazing Mexican and Caribbean food? We present to you, Puerto Rico! Make sure to try local cuisine while there and be prepared to fall in love with their Mofongos! Do not board your return flight unless you have tried these out. One of our favorites places to eat at Old San Juan that we would definitely recommend you try is Verde Mesa, amazing food and unique interior. From there walk over to Señor Paleta for some overly delicious ice cream but be prepared to line up especially on a really hot day. Calle del Cristo is another must visit street that is packed with amazing boutiques and yummy restaurants. Puerto Rico has a great variety of cuisines to offer, so you will find anything you may crave. </p><h2 _ngcontent-serverapp-c13="" class="r ng-star-inserted">6. RUM!!</h2><p _ngcontent-serverapp-c13="" class="r ng-star-inserted"> We have all heard of, if not tried Bacardi at least once? If you absolutely love Bacardi, there is a distillery you could visit (FREE!) across from Old San Juan. </p><p _ngcontent-serverapp-c13="" style="text-align: center;" class="ng-star-inserted"><em _ngcontent-serverapp-c13=""><span _ngcontent-serverapp-c13="" class="r" style="font-size: 18pt;">"Fun Fact: Did you know that Puerto Rico is the Rum Capital of the world"</span></em></p><p _ngcontent-serverapp-c13="" class="r ng-star-inserted"> A local favorite you must try is Don Q. Puerto Rico has some of the best and may we add cheapest rums! You will not have a better piña colada than at Puerto Rico. </p><h2 _ngcontent-serverapp-c13="" class="r ng-star-inserted">7. Island hopping</h2><p _ngcontent-serverapp-c13="" class="r ng-star-inserted"> Yes, this is a thing and if you haven’t already tried it, it’s about time. Puerto Rico is part of the Caribbean Islands, and if you passed your geography class, you will know that Caribbean is made up of clusters of islands. Meaning? You can easily go from Puerto Rico to St. Thomas or even visit the British Virgin Islands via ferry (do check with immigration for visa or any other requirements there may be prior to booking your travel) </p><figure _ngcontent-serverapp-c13="" style="text-align:center" class="ng-star-inserted"><img _ngcontent-serverapp-c13="" class="img-zoomable" style="max-width: 100%; max-height: 100%; width: 50%; cursor: zoom-in;" ng-reflect-ng-style="[object Object]" ng-reflect-ng-style.xs="[object Object]" src="https://firebasestorage.googleapis.com/v0/b/pwatest-a462e.appspot.com/o/images%2FFIOqhlVoUvnBLQjxTUrY%2Fresort.jpeg?alt=media&amp;token=2ae6312f-30e2-4121-9eaf-4006c06bae15"><figcaption _ngcontent-serverapp-c13="">Puerto Rico</figcaption></figure><h2 _ngcontent-serverapp-c13="" class="r ng-star-inserted">8. Duty Free</h2><p _ngcontent-serverapp-c13="" class="r ng-star-inserted"> Where else can you go duty free shopping without leaving the US? St. Thomas has duty free shopping allowing you to unwind and shop, win-win for all. </p><h2 _ngcontent-serverapp-c13="" class="r ng-star-inserted">9. US but not US</h2><p _ngcontent-serverapp-c13="" class="r ng-star-inserted"> A lot of people have the misconception that travelling to Puerto Rico won’t feel exotic enough or won’t feel like being at some place new since it is technically part of the US. However, that is not the case whatsoever. You will thoroughly enjoy Puerto Rico’s very different culture, cuisine (their mofongos are to die for; a must try when you are there #repeat) and all the likes of travelling to a new and different place. This brings us to our last point, Visa. </p><figure _ngcontent-serverapp-c13="" style="text-align:center" class="ng-star-inserted"><img _ngcontent-serverapp-c13="" class="img-zoomable" style="max-width: 100%; max-height: 100%; width: 70%; cursor: zoom-in;" ng-reflect-ng-style="[object Object]" ng-reflect-ng-style.xs="[object Object]" src="https://firebasestorage.googleapis.com/v0/b/pwatest-a462e.appspot.com/o/images%2FFIOqhlVoUvnBLQjxTUrY%2Froyal.jpg?alt=media&amp;token=7debbf0e-cd8b-4be9-9b57-bfd095a6f1a4"><figcaption _ngcontent-serverapp-c13="">Puerto Rico</figcaption></figure><h2 _ngcontent-serverapp-c13="" class="r ng-star-inserted">10. Visa (Non-Immigrants)</h2><p _ngcontent-serverapp-c13="" class="r ng-star-inserted"> This isn’t applicable to all, but for non-immigrants who are here on various visas, such as H1, L1, F1, etc. Puerto Rico is an unincorporated territory of the US, meaning you can travel here just as you would any other part of the country as far as you have valid status in the country such as a I-94, regardless of your visa stamp status. We were confused before booking our tickets, but a call to the TSA confirmed that visiting Puerto Rico is no different than visiting any other state in the US. Please note, everyone’s circumstances are different, and we are by no means experts on this matter, but merely sharing our knowledge and experience. Please do verify with officials prior to making any travel plans. You can find relevant TSA numbers to call here. </p><p _ngcontent-serverapp-c13="" style="max-width: 600px;margin: auto;" class="ng-star-inserted"><iframe _ngcontent-serverapp-c13="" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="300px" style="width: 100%" src="https://www.youtube.com/embed/tuvRpX6wqFE"></iframe></p><!---->';


    var temporalDivElement = document.createElement("div");
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = this.html;
    // Retrieve the text property of the element (cross-browser support)
    this.result = temporalDivElement.textContent || temporalDivElement.innerText || "";

    this.speech.speak({
      text: this.result,
    }).then(() => {
      console.log("Success !")
    }).catch(e => {
      console.error("An error occurred :", e)
    })
  }
  pause() {
    this.speech.pause();
  }
  resume() {
    this.speech.resume();
  }

  setLanguage(i) {
    console.log(i);
    console.log(this.speechData.voices[i].lang + this.speechData.voices[i].name);
    this.speech.setLanguage(this.speechData.voices[i].lang);
    this.speech.setVoice(this.speechData.voices[i].name);
  }

}
