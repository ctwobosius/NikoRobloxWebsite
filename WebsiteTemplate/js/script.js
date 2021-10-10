const replyList = ["Yo mama!", 
                 "...Dad? Is that you?",
                 "...ha...", 
                 "Do you always crack bad jokes?",
                 "Why would I tell my name to a random stranger on the internet?",
                 "Good.",
                 "TLDR, keep your backstory to 10 words or less.",
                 "For someone who codes, you really can't count.",
                 "Ok boomer"];

const responseList = ["You must've come to the Wong place, because I don't know your name!", 
                    "Well, you never know who you're talking to on the internet! I could be"
                    + " your dad in disguise, who knows!", 
                    "Yeah, no laughter, I guess dad jokes are kind of old. Well, dads in general are kind of old.",
                    "Well, I try. Not to make bad ones, that is! Ah, where are my manners? My name is Mr. Wong!",
                    "Nice job, listening to your mother! Or your common sense, anyways, you're in luck!"
                    + " I respect your privacy, so no need to tell me! Please don't.",
                    "Well, I like turning thoughts into reality, whether that be written on paper or"
                    + " in code, digital or physical. This website happened to pop into my brain one day, so now here it is!",
                    "Uh, read about me, see some art, play a game or two, and enjoy your stay here?",
                    "You youngsters just can't pay attention these days...",
                    ">:("];
var chatIndex = 0;
var deviated = false;
const deviantResponse = "Ooh, we have a deviant here, changing up the default text! " 
                        + "Well, I'm not a chatbot, so I don't know how to respond to that."
                        + " Refresh the site if you'd like to see the full-course, scrumptious conversation!"; 
const endResponse = "Sorry, there is no more dialogue. Please leave your message after the tone. *Beep*"
const responseTime = 1000;

function navSlide() {
    const nav = document.getElementById("nav");
    const menu = document.getElementById("mobileMenu");
    const navLinks = document.getElementById("navLinks");
    const navList = document.querySelectorAll(".navbar li");

    menu.addEventListener("click", () => {
        menu.setAttribute("background-color", "")
        navLinks.classList.toggle("mobileActive");
        navList.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                index = (index / 7) + 0.42;
                link.style.animation = "navFade 0.5s ease forwards " + index + "s";
            }
        });
        menu.classList.toggle("close");
        nav.classList.toggle("mobileActive");
    });
}

var canConverse = true;

function converse() {
    if (canConverse) {
        canConverse = false;
        const chatboxInput = document.getElementById("chatboxInput");
            const chat = document.getElementById("chat");
            if (conversationOver(chatIndex)) {
                let input = chatboxInput.value;
                if (input == "") {
                    reply(chat, "...");
                } else {
                    reply(chat, input);
                }
                setTimeout(webRespond, responseTime, chat, endResponse);
                chatboxInput.value = "";
            } else {
        
                let input = chatboxInput.value;
            
                chatboxInput.value = checkIfDeviatedReply(input);
                reply(chat, input);
                if (deviated) {
                    setTimeout(webRespond, responseTime, chat, deviantResponse);
                } else {
                    setTimeout(webRespond, responseTime, chat, responseList[chatIndex]);
                }
                chatIndex++;
            }
        setTimeout(function() {
            canConverse = true;
        }, responseTime);
    }

   
    
}


function reply(chatElement, msg) {
    let node = document.createElement("LI");
    node.className = "rightTextbox";
    let textnode = document.createTextNode(msg);
    node.appendChild(textnode);     
    chatElement.appendChild(node);
    chatElement.appendChild(document.createElement("br"));
    scrollWin();
}

/* Sets default to true if the user editted the default chatbox input and
 * returns the user input, else returns the normal conversation. 
 */
function checkIfDeviatedReply(input) {
    if (input != replyList[chatIndex]) {
        deviated = true;
        return input;
    } else {
        if (conversationOver(chatIndex + 1)) {
            return "";
        } else {
            return replyList[chatIndex + 1];
        }
    }
    
}

/* Returns true if user has reached the end of the intro conversation. */
function conversationOver(index) {
    return index >= replyList.length;
}


function webRespond(chatElement, msg) {
  let node = document.createElement("LI");
  node.className = "textbox";
  let textnode = document.createTextNode(msg);
  node.appendChild(textnode);     
  chatElement.appendChild(node);
  chatElement.appendChild(document.createElement("br"));
  scrollWin();
}



function scrollWin() {
    window.scrollBy(0, document.body.scrollHeight);
  }


function main() {
    navSlide();
  
}

window.onload = function() {
    const chatboxInput = document.getElementById("chatboxInput");
    chatboxInput.value = replyList[0];
}
/*
(function($) {
      Nav.
    var $nav = $('#nav');

    if ($nav.length > 0) {

        Shrink effect.
            $main
                .scrollex({
                    mode: 'top',
                    enter: function() {
                        $nav.addClass('alt');
                    },
                    leave: function() {
                        $nav.removeClass('alt');
                    },
                });

        Links.
            var $nav_a = $nav.find('a');

            $nav_a
                .scrolly({
                    speed: 1000,
                    offset: function() { return $nav.height(); }
                })
                .on('click', function() {

                    var $this = $(this);

                    External link? Bail.
                        if ($this.attr('href').charAt(0) != '#')
                            return;

                    Deactivate all links.
                        $nav_a
                            .removeClass('active')
                            .removeClass('active-locked');

                    Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
                        $this
                            .addClass('active')
                            .addClass('active-locked');

                })
                .each(function() {

                    var	$this = $(this),
                        id = $this.attr('href'),
                        $section = $(id);

                    No section for this link? Bail.
                        if ($section.length < 1)
                            return;

                    Scrollex.
                        $section.scrollex({
                            mode: 'middle',
                            initialize: function() {

                                Deactivate section.
                                    if (browser.canUse('transition'))
                                        $section.addClass('inactive');

                            },
                            enter: function() {

                                Activate section.
                                    $section.removeClass('inactive');

                                No locked links? Deactivate all links and activate this section's one.
                                    if ($nav_a.filter('.active-locked').length == 0) {

                                        $nav_a.removeClass('active');
                                        $this.addClass('active');

                                    }

                                Otherwise, if this section's link is the one that's locked, unlock it.
                                    else if ($this.hasClass('active-locked'))
                                        $this.removeClass('active-locked');

                            }
                        });

                });

    }
})(jQuery);*/

main();
