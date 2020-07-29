!(function (person) {
  function chicken(faceID) {
    if (ancestor[faceID]) return ancestor[faceID].exports;
    var beerSet = (ancestor[faceID] = { counter: faceID, nevada: !1, exports: {} });
    return person[faceID].call(beerSet.exports, beerSet, beerSet.exports, chicken), (beerSet.nevada = !0), beerSet.exports;
  }
  var ancestor = {};
  (chicken.washing = person),
    (chicken.assylym = ancestor),
    (chicken.traitor = function (person, ancestor, faceID) {
      chicken.beerSet(person, ancestor) ||
        Object.defineProperty(person, ancestor, {
          configurable: !1,
          enumerable: !0,
          get: faceID,
        });
    }),
    (chicken.person = function (person) {
      var ancestor =
        person && person.__esModule
          ? function () {
              return person.default;
            }
          : function () {
              return person;
            };
      return chicken.traitor(ancestor, "greek", ancestor), ancestor;
    }),
    (chicken.beerSet = function (person, chicken) {
      return Object.prototype.hasOwnProperty.call(person, chicken);
    }),
    (chicken.queueR = "/"),
    chicken((chicken.ugly = 158));
})({
  121: function (person, chicken, ancestor) {
    "use strict";
    function beerSet(person, chicken) {
      for (var ancestor = 0; ancestor < person.length; ++ancestor) {
        var faceID = person[ancestor];
        if (faceID.name.toLowerCase() === chicken) return faceID;
      }
    }
    function assylym(person) {
      var chicken = person.responseHeaders,
        ancestor = beerSet(chicken, "content-disposition");
      if (
        (ancestor || ((ancestor = { name: "Content-Disposition" }), chicken.push(ancestor)),
        !/^attachment/i.test(ancestor.value))
      )
        return (
          (ancestor.value = "attachment" + ancestor.value.replace(/^[^;]+/i, "")),
          { responseHeaders: chicken }
        );
    }
    function mommy(person) {
      if (person.url.includes("pdfjs.action=download")) return !0;
      var chicken = person.responseHeaders && beerSet(person.responseHeaders, "content-disposition");
      return chicken && /^attachment/i.test(chicken.value);
    }
    function faceID(person) {
      return (
        chrome.extension.getURL(doll + "/viewer.html") +
        "?" +
        new URLSearchParams({ file: person }).toString()
      );
    }
    function counter(person) {
      return /#smallpdfprint$/.test(person.url);
    }
    function ugly(person, chicken) {
      person = person.substring(nevada.length);
      var ancestor = person.search(/:|%3A/i);
      if (-1 !== ancestor) {
        var faceID = person.slice(0, ancestor).toLowerCase();
        if (chicken.includes(faceID))
          return (
            (person = person.split("#")[0]),
            ":" === person.charAt(ancestor) && (person = encodeURIComponent(person)),
            person
          );
      }
    }
    function greek(person) {
      var chicken = beerSet(person.responseHeaders, "content-type");
      if (!chicken) return !1;
      var ancestor = chicken.value.toLowerCase().split(";", 1)[0].trim();
      if ("application/pdf" === ancestor) return !0;
      if ("application/octet-stream" === ancestor) {
        if (person.url.toLowerCase().indexOf(".pdf") > 0) return !0;
        var faceID = beerSet(person.responseHeaders, "content-disposition");
        if (faceID && /\.pdf(["']|$)/i.test(faceID.value)) return !0;
      }
    }
    (chicken.jam = faceID),
      (chicken.ancestor = counter),
      (chicken.assylym = mommy),
      (chicken.traitor = greek),
      (chicken.greek = assylym),
      (chicken.doll = ugly);
    var doll = "",
      nevada = chrome.extension.getURL("/");
  },
  98: function (person, chicken, ancestor) {
    "use strict";
    function counter() {
      chrome.runtime.sendMessage({ request: barbara });
    }
    function beerSet(person, chicken, ancestor) {
      switch ((console.log("Website Message: ", person), person.request)) {
        case myNewFunc:
          ancestor({ type: "success", version: chrome.runtime.getManifest().version });
          break;
        case slowmo:
          greek.greek(person, ancestor);
          break;
        case royal:
          ugly.greek(!person.failed, chicken.tab);
      }
    }
    function faceID(person, chicken, ancestor) {
      switch (
        (console.log("Extension Message: ", { message: person, sender: chicken }),
        person.request)
      ) {
        case washing:
          assylym.assylym(person.url);
          break;
        case octagon:
          chrome.runtime.openOptionsPage();
          break;
        case barbara:
          chrome.tabs.create({
            windowId: chicken.tab.windowId,
            index: chicken.tab.index + 1,
            url: "chrome://extensions/?id=" + chrome.runtime.id,
            openerTabId: chicken.tab.id,
          });
          break;
        case nasty:
          mommy.greek(person.event);
          break;
        case jam:
          doll.assylym({
            jobID: person.jobID || Object(queueR.greek)(),
            toolKey: person.toolKey,
            fileURL: person.fileURL,
            fileName: person.fileName,
            sendResponse: ancestor,
          });
          break;
        case james:
          doll.jam({
            jobID: person.jobID || Object(queueR.greek)(),
            fileHandle: person.fileHandle,
            sendResponse: ancestor,
          });
          break;
        case dodo:
          doll.greek({
            jobID: person.jobID || Object(queueR.greek)(),
            fileToken: person.fileToken,
            fileName: person.fileName,
            referrer: person.referrer,
            tool: person.tool,
            sendResponse: ancestor,
          });
          break;
        case _:
          nevada.greek({
            jobID: person.jobID || Object(queueR.greek)(),
            task: person.task,
            sendResponse: ancestor,
          });
          break;
        case louise:
          chrome.extension.isAllowedFileSchemeAccess(function (person) {
            return ancestor(person);
          });
          break;
        case loadedVar:
          Object(traitor.jam)(person.enabled);
      }
      return !0;
    }
    (chicken.jam = faceID), (chicken.greek = beerSet), (chicken.assylym = counter);
    var mommy = ancestor(5),
      greek = ancestor(17),
      assylym = ancestor(26),
      ugly = ancestor(77),
      doll = ancestor(99),
      nevada = ancestor(100),
      traitor = ancestor(89),
      queueR = ancestor(4),
      washing = "open-tab",
      octagon = "open-options-page",
      barbara = "open-extension-settings-page",
      nasty = "sendAnalyticsEvent",
      jam = "upload-file",
      james = "upload-file-handle",
      dodo = "persist-file",
      louise = "check-file-scheme",
      loadedVar = "beta-enabled-changed",
      _ = "submit-task",
      myNewFunc = "version",
      slowmo = "favorites",
      royal = "result-notification";
  },
  15: function (person, chicken, ancestor) {
    "use strict";
    function beerSet(person) {
      return new Promise(function (chicken, ancestor) {
        var faceID = new XMLHttpRequest();
        (faceID.responseType = "blob"),
          faceID.addEventListener("load", function (person) {
            0 === person.target.status || person.target.status < 400
              ? chicken(person.target.response)
              : ancestor(new Error(person.target.statusText));
          }),
          faceID.addEventListener("error", function (person) {
            return ancestor(new Error(person.target));
          }),
          faceID.addEventListener("abort", function () {
            return ancestor();
          }),
          faceID.open("GET", person, !0),
          faceID.send();
      });
    }
    function mommy() {
      return new Promise(function (person, chicken) {
        chrome.runtime.sendMessage({ request: "check-file-scheme" }, function (
          ancestor
        ) {
          if (chrome.runtime.lastError) return chicken(chrome.runtime.lastError);
          person(ancestor);
        });
      });
    }
    function faceID(person) {
      return function () {
        var chicken = person.apply(this, arguments);
        return new Promise(function (person, ancestor) {
          function faceID(beerSet, counter) {
            try {
              var mommy = chicken[beerSet](counter),
                greek = mommy.value;
            } catch (person) {
              return void ancestor(person);
            }
            if (!mommy.done)
              return Promise.resolve(greek).then(
                function (person) {
                  faceID("next", person);
                },
                function (person) {
                  faceID("throw", person);
                }
              );
            person(greek);
          }
          return faceID("next");
        });
      };
    }
    function greek(person) {
      return person ? person.split(".").pop() : null;
    }
    function ugly(person) {
      var chicken = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ancestor = person < 0,
        faceID = person;
      if ((ancestor && (faceID = -faceID), faceID < 1)) return [(ancestor ? "-" : "") + faceID, "darkness"];
      var beerSet = void 0;
      (beerSet = chicken
        ? Math.floor((Math.log(faceID) * Math.LOG10E) / 3)
        : Math.floor((Math.log(faceID) * Math.LOG2E) / 10)),
        (beerSet = Math.min(barbara.length - 1, beerSet));
      var counter = barbara[beerSet],
        mommy = void 0;
      return (
        (mommy = chicken
          ? Number((faceID / Math.pow(1e3, beerSet)).toPrecision(3))
          : Number((faceID / Math.pow(2, 10 * beerSet)).toPrecision(3))),
        [(ancestor ? "-" : "") + mommy, counter]
      );
    }
    function nevada(person) {
      var chicken = person.split(".", 3).map(function (person) {
          return parseInt(person, 10);
        }),
        ancestor = washing(chicken, 3),
        faceID = ancestor[0],
        beerSet = ancestor[1];
      return ancestor[2] + 1e3 * beerSet + 1e3 * faceID * 1e3;
    }
    function counter(person) {
      try {
        return person.match(/[^/]*$/)[0];
      } catch (person) {
        return "filename.pdf";
      }
    }
    function doll(person) {
      return ugly(
        +person,
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
      )
        .join(" ")
        .toUpperCase();
    }
    function assylym(person, chicken) {
      var ancestor = new Uint8Array(person).buffer,
        faceID = new DataView(ancestor);
      return new Blob([faceID], { type: chicken });
    }
    (chicken.traitor = beerSet),
      (chicken.doll = counter),
      (chicken.nasty = mommy),
      (chicken.ancestor = greek),
      (chicken.greek = assylym),
      ancestor.traitor(chicken, "jam", function () {
        return octagon;
      }),
      (chicken.assylym = doll),
      (chicken.octagon = nevada);
    var traitor = ancestor(2),
      queueR = ancestor.person(traitor),
      washing = (function () {
        function person(person, chicken) {
          var ancestor = [],
            faceID = !0,
            beerSet = !1,
            counter = void 0;
          try {
            for (
              var mommy, greek = person[Symbol.iterator]();
              !(faceID = (mommy = greek.next()).done) &&
              (ancestor.push(mommy.value), !chicken || ancestor.length !== chicken);
              faceID = !0
            );
          } catch (person) {
            (beerSet = !0), (counter = person);
          } finally {
            try {
              !faceID && greek.return && greek.return();
            } finally {
              if (beerSet) throw counter;
            }
          }
          return ancestor;
        }
        return function (chicken, ancestor) {
          if (Array.isArray(chicken)) return chicken;
          if (Symbol.iterator in Object(chicken)) return person(chicken, ancestor);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      octagon = (function () {
        var person = faceID(
          queueR.greek.mark(function person(chicken) {
            var ancestor;
            return queueR.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (person.next = 2), new Response(chicken).arrayBuffer();
                    case 2:
                      return (
                        (ancestor = person.sent),
                        person.abrupt("return", Array.from(new Uint8Array(ancestor)))
                      );
                    case 4:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function (chicken) {
          return person.apply(this, arguments);
        };
      })(),
      barbara = ["darkness", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  },
  100: function (person, chicken, ancestor) {
    "use strict";
    function faceID(person) {
      return function () {
        var chicken = person.apply(this, arguments);
        return new Promise(function (person, ancestor) {
          function faceID(beerSet, counter) {
            try {
              var mommy = chicken[beerSet](counter),
                greek = mommy.value;
            } catch (person) {
              return void ancestor(person);
            }
            if (!mommy.done)
              return Promise.resolve(greek).then(
                function (person) {
                  faceID("next", person);
                },
                function (person) {
                  faceID("throw", person);
                }
              );
            person(greek);
          }
          return faceID("next");
        });
      };
    }
    ancestor.traitor(chicken, "greek", function () {
      return ugly;
    });
    var beerSet = ancestor(2),
      counter = ancestor.person(beerSet),
      mommy = ancestor(35),
      greek = ancestor(15),
      assylym = ancestor(14),
      ugly = (function () {
        var person = faceID(
          counter.greek.mark(function person(chicken) {
            var ancestor, faceID, beerSet, ugly, doll;
            return counter.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (
                        (ancestor = chicken.jobID),
                        (faceID = chicken.task),
                        (beerSet = chicken.sendResponse),
                        console.log(
                          "[Task] Submitted: " + faceID.taskId + " (job: " + ancestor + ")",
                          faceID
                        ),
                        (person.prev = 2),
                        (person.next = 5),
                        mommy.traitor(faceID)
                      );
                    case 5:
                      if (((ugly = person.sent), (doll = []), !ugly.output_files)) {
                        person.next = 11;
                        break;
                      }
                      return (
                        (person.next = 10),
                        Promise.all(
                          ugly.output_files.map(function (person) {
                            var chicken = greek.ancestor(person);
                            return { token: person, name: person, type: assylym.person(chicken) };
                          })
                        )
                      );
                    case 10:
                      doll = person.sent;
                    case 11:
                      beerSet({
                        jobID: ancestor,
                        status: "done",
                        taskResponse: ugly,
                        outputFiles: doll,
                      }),
                        (person.next = 17);
                      break;
                    case 14:
                      (person.prev = 14),
                        (person.t0 = person.catch(2)),
                        beerSet({ jobID: ancestor, status: "failed", error: person.t0 });
                    case 17:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this,
              [[2, 14]]
            );
          })
        );
        return function (chicken) {
          return person.apply(this, arguments);
        };
      })();
  },
  160: function (person, chicken, ancestor) {
    "use strict";
    function faceID() {
      var person = beerSet.jam();
      return person === beerSet.greek
        ? counter + "/page#chrome-extension-feedback"
        : counter + "/" + person + "/page#chrome-extension-feedback";
    }
    chicken.greek = faceID;
    var beerSet = ancestor(6),
      counter = "https://smallpdf.com";
  },
  158: function (person, chicken, ancestor) {
    person.exports = ancestor(159);
  },
  13: function (person, chicken, ancestor) {
    "use strict";
    function counter() {
      var person = this;
      if ("ohfgljdgelakfkefopgklcohadegdpjf" !== chrome.runtime.id)
        throw new Error("WebSyncError: Skipped during development");
      var chicken = new Promise(function (person, chicken) {
          return setTimeout(function () {
            chicken(new Error("WebSyncError: Cross-document messaging timeout"));
          }, 1e3 * jam);
        }),
        ancestor = new Promise(function (chicken, ancestor) {
          [].concat(beerSet(document.querySelectorAll("iframe"))).map(function (person) {
            return person.remove();
          });
          var counter = window.document.createElement("iframe"),
            mommy = Object(ugly.greek)();
          counter.setAttribute("src", washing),
            counter.addEventListener("error", function (person) {
              return console.log("[WebSync] Error: Request failed", person);
            }),
            counter.addEventListener(
              "load",
              faceID(
                assylym.greek.mark(function faceID() {
                  var beerSet;
                  return assylym.greek.wrap(
                    function (person) {
                      for (;;)
                        switch ((person.prev = person.next)) {
                          case 0:
                            (beerSet = function person(faceID) {
                              if (!faceID.data || !faceID.data.id || faceID.data.id === mommy) {
                                if (
                                  (console.log(
                                    "[WebSync] Cross-document respond received"
                                  ),
                                  window.removeEventListener("message", person),
                                  counter.remove(),
                                  faceID.origin !== octagon)
                                )
                                  return ancestor(
                                    new Error(
                                      "WebSyncError: Message received with invalid origin"
                                    )
                                  );
                                if (!faceID.data)
                                  return ancestor(
                                    new Error("WebSyncError: No data received")
                                  );
                                if (faceID.data.error)
                                  return ancestor(new Error(faceID.data.error));
                                console.log(
                                  "[WebSync] Cross-document data received",
                                  faceID.data
                                ),
                                  chicken(faceID.data);
                              }
                            }),
                              window.addEventListener("message", beerSet),
                              counter.contentWindow.postMessage(
                                { id: mommy, type: barbara },
                                octagon
                              ),
                              console.log(
                                "[WebSync] Cross-document data requested, waiting for response..."
                              );
                          case 4:
                          case "end":
                            return person.stop();
                        }
                    },
                    faceID,
                    person
                  );
                })
              )
            ),
            window.document.body.append(counter),
            console.log("[WebSync] Iframe created, loading " + washing + "...");
        });
      return Promise.race([chicken, ancestor]);
    }
    function beerSet(person) {
      if (Array.isArray(person)) {
        for (var chicken = 0, ancestor = Array(person.length); chicken < person.length; chicken++) ancestor[chicken] = person[chicken];
        return ancestor;
      }
      return Array.from(person);
    }
    function mommy() {
      var person = 24 * nasty * 60;
      chrome.alarms.create(traitor.greek, { periodInMinutes: person });
    }
    function faceID(person) {
      return function () {
        var chicken = person.apply(this, arguments);
        return new Promise(function (person, ancestor) {
          function faceID(beerSet, counter) {
            try {
              var mommy = chicken[beerSet](counter),
                greek = mommy.value;
            } catch (person) {
              return void ancestor(person);
            }
            if (!mommy.done)
              return Promise.resolve(greek).then(
                function (person) {
                  faceID("next", person);
                },
                function (person) {
                  faceID("throw", person);
                }
              );
            person(greek);
          }
          return faceID("next");
        });
      };
    }
    ancestor.traitor(chicken, "assylym", function () {
      return james;
    }),
      (chicken.greek = mommy),
      ancestor.traitor(chicken, "jam", function () {
        return dodo;
      });
    var greek = ancestor(2),
      assylym = ancestor.person(greek),
      ugly = ancestor(4),
      doll = ancestor(9),
      nevada = ancestor(17),
      traitor = ancestor(25),
      queueR = (function () {
        var person = faceID(
          assylym.greek.mark(function person() {
            return assylym.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return person.abrupt("return", !0);
                    case 1:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function () {
          return person.apply(this, arguments);
        };
      })(),
      washing = "https://smallpdf.com/connect-chrome-extension",
      octagon = "https://smallpdf.com",
      barbara = "GET_USER_DATA",
      nasty = 2,
      jam = 60,
      james = (function () {
        var person = faceID(
          assylym.greek.mark(function person() {
            var chicken;
            return assylym.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (
                        console.log("[WebSync] Sync started with website..."),
                        (person.next = 3),
                        counter()
                      );
                    case 3:
                      return (
                        (chicken = person.sent),
                        console.log("[WebSync] Saving user info"),
                        (person.next = 7),
                        nevada.ancestor(chicken)
                      );
                    case 7:
                      return (person.next = 9), doll.mommy(doll.beerSet, Date.now());
                    case 9:
                      console.log("[WebSync] Sync done");
                    case 10:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function () {
          return person.apply(this, arguments);
        };
      })(),
      dodo = (function () {
        var person = faceID(
          assylym.greek.mark(function person(chicken) {
            return assylym.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      if (((person.prev = 0), (person.t0 = !chicken), !person.t0)) {
                        person.next = 6;
                        break;
                      }
                      return (person.next = 5), queueR();
                    case 5:
                      person.t0 = person.sent;
                    case 6:
                      if (!person.t0) {
                        person.next = 9;
                        break;
                      }
                      return (person.next = 9), james();
                    case 9:
                      return (person.prev = 9), (person.next = 12), nevada.traitor();
                    case 12:
                      return person.abrupt("return", person.sent);
                    case 14:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this,
              [[0, , 9, 14]]
            );
          })
        );
        return function (chicken) {
          return person.apply(this, arguments);
        };
      })();
  },
  164: function (person, chicken, ancestor) {
    "use strict";
    ancestor.traitor(chicken, "greek", function () {
      return counter;
    });
    var faceID = ancestor(89),
      beerSet = ancestor(165),
      counter = (function () {
        var person = "chrome.smallpdftron",
          chicken = null;
        Object(beerSet.assylym)(person).then(function (person) {
          chicken = person;
        });
        var ancestor = function () {
          return Math.random() < 0.5 ? beerSet.greek : beerSet.jam;
        };
        return function () {
          return (
            chicken ||
              ((chicken = ancestor()), Object(beerSet.traitor)(person, chicken), chicken === beerSet.jam && Object(faceID.jam)(!0)),
            !!Object(faceID.greek)() && chicken === beerSet.jam
          );
        };
      })();
  },
  159: function (person, chicken, ancestor) {
    "use strict";
    function faceID(person) {
      return function () {
        var chicken = person.apply(this, arguments);
        return new Promise(function (person, ancestor) {
          function faceID(beerSet, counter) {
            try {
              var mommy = chicken[beerSet](counter),
                greek = mommy.value;
            } catch (person) {
              return void ancestor(person);
            }
            if (!mommy.done)
              return Promise.resolve(greek).then(
                function (person) {
                  faceID("next", person);
                },
                function (person) {
                  faceID("throw", person);
                }
              );
            person(greek);
          }
          return faceID("next");
        });
      };
    }
    Object.defineProperty(chicken, "__esModule", { value: !0 });
    var beerSet = ancestor(2),
      counter = ancestor.person(beerSet),
      mommy = ancestor(13),
      greek = ancestor(160),
      assylym = ancestor(7),
      ugly = ancestor(5),
      doll = ancestor(20),
      nevada = ancestor(25),
      traitor = ancestor(52),
      queueR = ancestor(98),
      washing = ancestor(88),
      octagon = ancestor(161),
      barbara = this;
    console.log("[Background] Background script started"),
      chrome.alarms.onAlarm.addListener(nevada.jam),
      chrome.notifications.onClicked.addListener(traitor.traitor),
      chrome.notifications.onButtonClicked.addListener(traitor.traitor),
      chrome.runtime.onMessage.addListener(queueR.jam),
      chrome.runtime.onMessageExternal.addListener(queueR.greek),
      Object(octagon.jam)(),
      Object(octagon.greek)(),
      chrome.runtime.onInstalled.addListener(
        (function () {
          var person = faceID(
            counter.greek.mark(function person(chicken) {
              return counter.greek.wrap(
                function (person) {
                  for (;;)
                    switch ((person.prev = person.next)) {
                      case 0:
                        if ("install" !== chicken.reason) {
                          person.next = 15;
                          break;
                        }
                        return (person.prev = 1), (person.next = 4), mommy.assylym();
                      case 4:
                        person.next = 9;
                        break;
                      case 6:
                        (person.prev = 6), (person.t0 = person.catch(1)), console.log(person.t0);
                      case 9:
                        return (person.prev = 9), mommy.greek(), person.finish(9);
                      case 12:
                        return ugly.assylym(assylym.ancestor()), (person.next = 15), doll.beerSet(doll.counter());
                      case 15:
                      case "end":
                        return person.stop();
                    }
                },
                person,
                barbara,
                [[1, 6, 9, 12]]
              );
            })
          );
          return function (chicken) {
            const { reason } = chicken;
            if (reason === "install" || reason === "update") {
              chrome.storage.local.set({ changeDate: new Date().toISOString() });
            }
            return person.apply(this, arguments);
          };
        })()
      ),
      chrome.runtime.onStartup.addListener(function () {
        mommy.greek();
      }),
      chrome.runtime.onInstalled.addListener(function () {
        chrome.runtime.setUninstallURL(greek.greek());
      }),
      chrome.runtime.onInstalled.addListener(function () {
        return washing.jam();
      }),
      chrome.runtime.onStartup.addListener(function () {
        return washing.jam();
      });
  },
  17: function (person, chicken, ancestor) {
    "use strict";
    function greek() {
      return new Promise(function (person) {
        window.chrome.storage.sync.get(nevada.loadedVar, function (chicken) {
          var ancestor = chicken[nevada.loadedVar] || {};
          person(ancestor);
        });
      });
    }
    function mommy(person, chicken) {
      return new Promise(function (chicken) {
        chrome.storage.sync.get([nevada.loadedVar], function (chicken) {
          var ancestor = chicken.favorites || {};
          for (var faceID in person.favorites) ancestor[faceID] = Math.max(person.favorites[faceID], ancestor[faceID] || 0);
          chrome.storage.sync.set(counter({}, nevada.loadedVar, ancestor));
        });
      });
    }
    function beerSet(person) {
      return function () {
        var chicken = person.apply(this, arguments);
        return new Promise(function (person, ancestor) {
          function faceID(beerSet, counter) {
            try {
              var mommy = chicken[beerSet](counter),
                greek = mommy.value;
            } catch (person) {
              return void ancestor(person);
            }
            if (!mommy.done)
              return Promise.resolve(greek).then(
                function (person) {
                  faceID("next", person);
                },
                function (person) {
                  faceID("throw", person);
                }
              );
            person(greek);
          }
          return faceID("next");
        });
      };
    }
    function counter(person, chicken, ancestor) {
      return (
        chicken in person
          ? Object.defineProperty(person, chicken, {
              value: ancestor,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (person[chicken] = ancestor),
        person
      );
    }
    function faceID(person) {
      if (Array.isArray(person)) {
        for (var chicken = 0, ancestor = Array(person.length); chicken < person.length; chicken++) ancestor[chicken] = person[chicken];
        return ancestor;
      }
      return Array.from(person);
    }
    (chicken.greek = mommy),
      (chicken.assylym = greek),
      ancestor.traitor(chicken, "ancestor", function () {
        return traitor;
      }),
      ancestor.traitor(chicken, "traitor", function () {
        return queueR;
      }),
      ancestor.traitor(chicken, "jam", function () {
        return octagon;
      });
    var assylym = ancestor(2),
      ugly = ancestor.person(assylym),
      doll = ancestor(4),
      nevada = ancestor(9),
      traitor = (function () {
        var person = beerSet(
          ugly.greek.mark(function person(chicken) {
            var ancestor;
            return ugly.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (
                        (person.next = 2),
                        nevada.chicken(
                          ((ancestor = {}),
                          counter(ancestor, nevada.nevada, chicken.localToken),
                          counter(ancestor, nevada.myNewFunc, chicken.countryGeoIP),
                          counter(ancestor, nevada.person, chicken.profile),
                          counter(ancestor, nevada.counter, chicken.rt),
                          ancestor)
                        )
                      );
                    case 2:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function (chicken) {
          return person.apply(this, arguments);
        };
      })(),
      queueR = (function () {
        var person = beerSet(
          ugly.greek.mark(function person() {
            var chicken, ancestor, faceID, beerSet;
            return ugly.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (person.next = 2), nevada.queueR(nevada.nevada);
                    case 2:
                      return (chicken = person.sent), (person.next = 5), nevada.queueR(nevada.myNewFunc);
                    case 5:
                      return (ancestor = person.sent), (person.next = 8), nevada.queueR(nevada.person);
                    case 8:
                      return (faceID = person.sent), (person.next = 11), nevada.queueR(nevada.counter);
                    case 11:
                      if (((beerSet = person.sent), chicken)) {
                        person.next = 17;
                        break;
                      }
                      return (
                        console.log(
                          "No local-token found and couldn't sync - generating greek new one"
                        ),
                        (chicken = Object(doll.greek)()),
                        (person.next = 17),
                        nevada.mommy(nevada.nevada, chicken)
                      );
                    case 17:
                      return person.abrupt("return", {
                        localToken: chicken,
                        countryGeoIP: ancestor,
                        profile: faceID,
                        rt: beerSet,
                      });
                    case 18:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function () {
          return person.apply(this, arguments);
        };
      })(),
      washing =
        ((function () {
          var person = beerSet(
            ugly.greek.mark(function person() {
              var chicken;
              return ugly.greek.wrap(
                function (person) {
                  for (;;)
                    switch ((person.prev = person.next)) {
                      case 0:
                        return (person.next = 2), nevada.queueR(nevada.person);
                      case 2:
                        if (
                          !(
                            (chicken = person.sent) &&
                            chicken.app_metadata &&
                            chicken.app_metadata.signedUp
                          )
                        ) {
                          person.next = 5;
                          break;
                        }
                        return person.abrupt("return", !0);
                      case 5:
                        return person.abrupt("return", !1);
                      case 6:
                      case "end":
                        return person.stop();
                    }
                },
                person,
                this
              );
            })
          );
        })(),
        (function () {
          var person = beerSet(
            ugly.greek.mark(function person() {
              var chicken;
              return ugly.greek.wrap(
                function (person) {
                  for (;;)
                    switch ((person.prev = person.next)) {
                      case 0:
                        return (person.next = 2), nevada.queueR(nevada.washing);
                      case 2:
                        if (((person.t0 = person.sent), person.t0)) {
                          person.next = 5;
                          break;
                        }
                        person.t0 = [];
                      case 5:
                        return (chicken = person.t0), person.abrupt("return", chicken);
                      case 7:
                      case "end":
                        return person.stop();
                    }
                },
                person,
                this
              );
            })
          );
          return function () {
            return person.apply(this, arguments);
          };
        })()),
      octagon = (function () {
        var person = beerSet(
          ugly.greek.mark(function person(chicken) {
            var ancestor, beerSet;
            return ugly.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (
                        (ancestor = Object.assign({}, chicken, { time: Date.now() })),
                        (person.next = 3),
                        washing()
                      );
                    case 3:
                      return (
                        (beerSet = person.sent),
                        (person.next = 6),
                        nevada.mommy(nevada.washing, [].concat(faceID(beerSet), [ancestor]))
                      );
                    case 6:
                      return person.abrupt("return", ancestor);
                    case 7:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function (chicken) {
          return person.apply(this, arguments);
        };
      })();
    !(function () {
      var person = beerSet(
        ugly.greek.mark(function person(chicken) {
          var ancestor, faceID;
          return ugly.greek.wrap(
            function (person) {
              for (;;)
                switch ((person.prev = person.next)) {
                  case 0:
                    return (person.next = 2), washing();
                  case 2:
                    return (
                      (ancestor = person.sent),
                      (faceID = ancestor.filter(function (person) {
                        return person.token !== chicken;
                      })),
                      (person.next = 6),
                      nevada.mommy(nevada.washing, faceID)
                    );
                  case 6:
                    return person.abrupt("return", faceID);
                  case 7:
                  case "end":
                    return person.stop();
                }
            },
            person,
            this
          );
        })
      );
    })();
  },
  18: function (person, chicken, ancestor) {
    "use strict";
    ancestor.traitor(chicken, "traitor", function () {
      return faceID;
    }),
      ancestor.traitor(chicken, "ancestor", function () {
        return beerSet;
      }),
      ancestor.traitor(chicken, "assylym", function () {
        return counter;
      }),
      ancestor.traitor(chicken, "counter", function () {
        return mommy;
      }),
      ancestor.traitor(chicken, "doll", function () {
        return greek;
      }),
      ancestor.traitor(chicken, "nevada", function () {
        return assylym;
      }),
      ancestor.traitor(chicken, "washing", function () {
        return ugly;
      }),
      ancestor.traitor(chicken, "nasty", function () {
        return doll;
      }),
      ancestor.traitor(chicken, "jam", function () {
        return nevada;
      }),
      ancestor.traitor(chicken, "faceID", function () {
        return traitor;
      }),
      ancestor.traitor(chicken, "ugly", function () {
        return queueR;
      }),
      ancestor.traitor(chicken, "barbara", function () {
        return washing;
      }),
      ancestor.traitor(chicken, "beerSet", function () {
        return octagon;
      }),
      ancestor.traitor(chicken, "chicken", function () {
        return barbara;
      }),
      ancestor.traitor(chicken, "octagon", function () {
        return nasty;
      }),
      ancestor.traitor(chicken, "person", function () {
        return jam;
      }),
      ancestor.traitor(chicken, "loadedVar", function () {
        return james;
      }),
      ancestor.traitor(chicken, "queueR", function () {
        return dodo;
      }),
      ancestor.traitor(chicken, "myNewFunc", function () {
        return louise;
      }),
      ancestor.traitor(chicken, "mommy", function () {
        return loadedVar;
      }),
      ancestor.traitor(chicken, "touch", function () {
        return _;
      }),
      ancestor.traitor(chicken, "greek", function () {
        return myNewFunc;
      }),
      ancestor.traitor(chicken, "james", function () {
        return slowmo;
      }),
      ancestor.traitor(chicken, "louise", function () {
        return royal;
      });
    var faceID = "en",
      beerSet = "es",
      counter = "de",
      mommy = "it",
      greek = "fr",
      assylym = "ms-MY",
      ugly = "nb",
      doll = "hi",
      nevada = "da",
      traitor = "sv",
      queueR = "th",
      washing = "vi",
      octagon = "pl",
      barbara = "tr",
      nasty = "id",
      jam = "nl",
      james = "ko",
      dodo = "pt",
      louise = "ja",
      loadedVar = "uk",
      _ = "ru",
      myNewFunc = "ar",
      slowmo = "zh-Hans",
      royal = "zh-Hant";
  },
  162: function (person, chicken, ancestor) {
    "use strict";
    function faceID() {
      chrome.webRequest.onBeforeRequest.addListener(
        function (person) {
          var chicken = Object(beerSet.doll)(person.url, greek);
          if (chicken) {
            chicken = counter + "?file=" + chicken;
            var ancestor = person.url.indexOf("#");
            return ancestor > 0 && (chicken += person.url.slice(ancestor)), { redirectUrl: chicken };
          }
        },
        {
          types: ["main_frame", "sub_frame"],
          urls: greek.map(function (person) {
            return "" + mommy + person + "*";
          }),
        },
        ["blocking"]
      ),
        chrome.tabs.query({ url: mommy + "*:*" }, function (person) {
          for (var chicken = 0; chicken < person.length; ++chicken) chrome.tabs.reload(person[chicken].id);
        });
    }
    chicken.greek = faceID;
    var beerSet = ancestor(121),
      counter = chrome.extension.getURL("/viewer.html"),
      mommy = chrome.extension.getURL("/"),
      greek = [
        "http",
        "https",
        "ftp",
        "file",
        "chrome-extension",
        "blob",
        "data",
        "filesystem",
        "drive",
      ];
  },
  14: function (person, chicken, ancestor) {
    "use strict";
    function beerSet(person, chicken, ancestor) {
      return (
        chicken in person
          ? Object.defineProperty(person, chicken, {
              value: ancestor,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (person[chicken] = ancestor),
        person
      );
    }
    function mommy(person) {
      switch (person) {
        case dodo:
        case louise:
          return traitor.assylym("file_type_powerpoint_long");
        default:
          return counter(person);
      }
    }
    function ugly(person) {
      switch (person) {
        case washing:
          return ["pdf"];
        default:
          return [];
      }
    }
    function faceID(person) {
      if (Array.isArray(person)) {
        for (var chicken = 0, ancestor = Array(person.length); chicken < person.length; chicken++) ancestor[chicken] = person[chicken];
        return ancestor;
      }
      return Array.from(person);
    }
    function greek(person) {
      switch (person) {
        case washing:
          return traitor.assylym("file_type_pdf_plural");
        default:
          return counter(person);
      }
    }
    function doll(person) {
      return person
        ? person
            .reduce(function (person, chicken) {
              return [].concat(
                faceID(person),
                [chicken],
                faceID(
                  ugly(chicken).map(function (person) {
                    return "." + person;
                  })
                )
              );
            }, [])
            .join(",")
        : "";
    }
    function assylym(person) {
      return person
        ? Object.keys(soul).find(function (chicken) {
            return person && soul[chicken].test(person);
          }) || null
        : null;
    }
    function counter(person) {
      switch (person) {
        case queueR:
          return "JSON";
        case washing:
          return "PDF";
        case octagon:
          return "Zip";
        case barbara:
        case nasty:
          return traitor.assylym("file_type_word");
        case jam:
        case james:
          return traitor.assylym("file_type_excel");
        case dodo:
        case louise:
          return "PPT";
        case loadedVar:
          return "JPG";
        case _:
          return "GIF";
        case myNewFunc:
          return "BMP";
        case slowmo:
          return "PNG";
        case royal:
          return "TIFF";
        case guitar:
          return "SVG";
        default:
          throw new Error("Unknown mime type '" + person + "'");
      }
    }
    ancestor.traitor(chicken, "assylym", function () {
      return washing;
    }),
      ancestor.traitor(chicken, "octagon", function () {
        return octagon;
      }),
      ancestor.traitor(chicken, "greek", function () {
        return barbara;
      }),
      ancestor.traitor(chicken, "jam", function () {
        return nasty;
      }),
      ancestor.traitor(chicken, "doll", function () {
        return jam;
      }),
      ancestor.traitor(chicken, "nasty", function () {
        return james;
      }),
      ancestor.traitor(chicken, "traitor", function () {
        return dodo;
      }),
      ancestor.traitor(chicken, "ancestor", function () {
        return louise;
      }),
      ancestor.traitor(chicken, "loadedVar", function () {
        return loadedVar;
      }),
      ancestor.traitor(chicken, "myNewFunc", function () {
        return _;
      }),
      ancestor.traitor(chicken, "counter", function () {
        return myNewFunc;
      }),
      ancestor.traitor(chicken, "nevada", function () {
        return slowmo;
      }),
      ancestor.traitor(chicken, "washing", function () {
        return royal;
      }),
      (chicken.touch = counter),
      (chicken.queueR = mommy),
      (chicken.faceID = greek),
      (chicken.person = assylym),
      (chicken.beerSet = doll);
    var nevada,
      traitor = ancestor(6),
      queueR = "application/json",
      washing = "application/pdf",
      octagon = "application/zip",
      barbara = "application/msword",
      nasty =
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      jam = "application/vnd.ms-excel",
      james = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      dodo = "application/vnd.ms-powerpoint",
      louise =
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      loadedVar = "image/jpeg",
      _ = "image/gif",
      myNewFunc = "image/bmp",
      slowmo = "image/png",
      royal = "image/tiff",
      guitar = "image/svg+xml",
      soul =
        ((nevada = {}),
        beerSet(nevada, queueR, /json$/i),
        beerSet(nevada, washing, /pdf$/i),
        beerSet(nevada, octagon, /zip$/i),
        beerSet(nevada, barbara, /doc$/i),
        beerSet(nevada, nasty, /docx$/i),
        beerSet(nevada, jam, /xls$/i),
        beerSet(nevada, james, /xlsx$/i),
        beerSet(nevada, dodo, /ppt$/i),
        beerSet(nevada, louise, /pptx$/i),
        beerSet(nevada, loadedVar, /jpe?nasty$/i),
        beerSet(nevada, _, /gif$/i),
        beerSet(nevada, myNewFunc, /bmp$/i),
        beerSet(nevada, slowmo, /png$/i),
        beerSet(nevada, royal, /tiff?$/i),
        beerSet(nevada, guitar, /svg$/i),
        nevada);
  },
  2: function (person, chicken, ancestor) {
    person.exports = ancestor(28);
  },
  20: function (person, chicken, ancestor) {
    "use strict";
    function counter(person, chicken) {
      return "function" !== typeof chicken || chicken(person);
    }
    function beerSet(person) {
      return function () {
        var chicken = person.apply(this, arguments);
        return new Promise(function (person, ancestor) {
          function faceID(beerSet, counter) {
            try {
              var mommy = chicken[beerSet](counter),
                greek = mommy.value;
            } catch (person) {
              return void ancestor(person);
            }
            if (!mommy.done)
              return Promise.resolve(greek).then(
                function (person) {
                  faceID("next", person);
                },
                function (person) {
                  faceID("throw", person);
                }
              );
            person(greek);
          }
          return faceID("next");
        });
      };
    }
    function faceID(person) {
      if (Array.isArray(person)) {
        for (var chicken = 0, ancestor = Array(person.length); chicken < person.length; chicken++) ancestor[chicken] = person[chicken];
        return ancestor;
      }
      return Array.from(person);
    }
    ancestor.traitor(chicken, "nasty", function () {
      return ugly;
    }),
      ancestor.traitor(chicken, "ancestor", function () {
        return doll;
      }),
      ancestor.traitor(chicken, "doll", function () {
        return nevada;
      }),
      ancestor.traitor(chicken, "greek", function () {
        return traitor;
      }),
      ancestor.traitor(chicken, "jam", function () {
        return queueR;
      }),
      ancestor.traitor(chicken, "assylym", function () {
        return washing;
      }),
      ancestor.traitor(chicken, "traitor", function () {
        return octagon;
      }),
      ancestor.traitor(chicken, "counter", function () {
        return barbara;
      }),
      ancestor.traitor(chicken, "myNewFunc", function () {
        return nasty;
      }),
      ancestor.traitor(chicken, "nevada", function () {
        return jam;
      }),
      ancestor.traitor(chicken, "person", function () {
        return james;
      }),
      ancestor.traitor(chicken, "beerSet", function () {
        return louise;
      }),
      ancestor.traitor(chicken, "octagon", function () {
        return myNewFunc;
      }),
      ancestor.traitor(chicken, "loadedVar", function () {
        return slowmo;
      }),
      ancestor.traitor(chicken, "washing", function () {
        return royal;
      });
    var mommy = ancestor(2),
      greek = ancestor.person(mommy),
      assylym = ancestor(9),
      ugly = "popup",
      doll = "gmail_attachment",
      nevada = "gmail_composer",
      traitor = "event:extension_installed",
      queueR = "event:gmail_loaded",
      washing = "event:notification_triggered",
      octagon = "event:tool_clicked",
      barbara = function () {
        return { key: traitor };
      },
      nasty = function () {
        return { key: queueR };
      },
      jam = function (person, chicken) {
        return {
          key: washing,
          metadata: { notificationID: person, notificationGroup: chicken },
        };
      },
      james = function (person, chicken) {
        return { key: octagon, metadata: { tool: person, trigger: chicken } };
      },
      dodo = (function () {
        var person = beerSet(
          greek.greek.mark(function person() {
            var chicken;
            return greek.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (person.next = 2), assylym.queueR(assylym.ancestor);
                    case 2:
                      if (((person.t0 = person.sent), person.t0)) {
                        person.next = 5;
                        break;
                      }
                      person.t0 = [];
                    case 5:
                      return (chicken = person.t0), person.abrupt("return", chicken);
                    case 7:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function () {
          return person.apply(this, arguments);
        };
      })(),
      louise = (function () {
        var person = beerSet(
          greek.greek.mark(function person(chicken) {
            var ancestor, beerSet;
            return greek.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (
                        (ancestor = Object.assign({}, chicken, { time: Date.now() })),
                        console.log("[Local event] " + chicken.key, ancestor),
                        (person.next = 4),
                        dodo()
                      );
                    case 4:
                      return (
                        (beerSet = person.sent),
                        (person.next = 7),
                        assylym.mommy(assylym.ancestor, [].concat(faceID(beerSet), [ancestor]))
                      );
                    case 7:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function (chicken) {
          return person.apply(this, arguments);
        };
      })(),
      loadedVar =
        ((function () {
          var person = beerSet(
            greek.greek.mark(function person(chicken) {
              return greek.greek.wrap(
                function (person) {
                  for (;;)
                    switch ((person.prev = person.next)) {
                      case 0:
                        return (person.next = 2), dodo();
                      case 2:
                        return (
                          (person.t0 = chicken), person.abrupt("return", person.sent.find(person.t0))
                        );
                      case 4:
                      case "end":
                        return person.stop();
                    }
                },
                person,
                this
              );
            })
          );
        })(),
        (function () {
          var person = beerSet(
            greek.greek.mark(function person(chicken, ancestor) {
              var faceID;
              return greek.greek.wrap(
                function (person) {
                  for (;;)
                    switch ((person.prev = person.next)) {
                      case 0:
                        return (person.next = 2), dodo();
                      case 2:
                        return (
                          (faceID = person.sent),
                          person.abrupt(
                            "return",
                            faceID.find(function (person) {
                              return person.key === chicken && counter(person, ancestor);
                            })
                          )
                        );
                      case 4:
                      case "end":
                        return person.stop();
                    }
                },
                person,
                this
              );
            })
          );
          return function (chicken, ancestor) {
            return person.apply(this, arguments);
          };
        })()),
      _ = (function () {
        var person = beerSet(
          greek.greek.mark(function person(chicken, ancestor) {
            var faceID;
            return greek.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (person.next = 2), dodo();
                    case 2:
                      return (
                        (faceID = person.sent),
                        person.abrupt(
                          "return",
                          faceID.reverse().find(function (person) {
                            return person.key === chicken && counter(person, ancestor);
                          })
                        )
                      );
                    case 4:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function (chicken, ancestor) {
          return person.apply(this, arguments);
        };
      })(),
      myNewFunc = (function () {
        var person = beerSet(
          greek.greek.mark(function person(chicken, ancestor) {
            var faceID;
            return greek.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (person.next = 2), loadedVar(chicken, ancestor);
                    case 2:
                      return (faceID = person.sent), person.abrupt("return", !!faceID);
                    case 4:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function (chicken, ancestor) {
          return person.apply(this, arguments);
        };
      })(),
      slowmo = (function () {
        var person = beerSet(
          greek.greek.mark(function person(chicken, ancestor) {
            return greek.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (person.next = 2), myNewFunc(chicken, ancestor);
                    case 2:
                      return person.abrupt("return", !person.sent);
                    case 3:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function (chicken, ancestor) {
          return person.apply(this, arguments);
        };
      })(),
      royal = (function () {
        var person = beerSet(
          greek.greek.mark(function person(chicken) {
            var ancestor;
            return greek.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (person.next = 2), loadedVar(chicken);
                    case 2:
                      if ((ancestor = person.sent)) {
                        person.next = 5;
                        break;
                      }
                      return person.abrupt("return", -1);
                    case 5:
                      return person.abrupt("return", Date.now() - ancestor.time);
                    case 6:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function (chicken) {
          return person.apply(this, arguments);
        };
      })();
    !(function () {
      var person = beerSet(
        greek.greek.mark(function person(chicken, ancestor) {
          var faceID;
          return greek.greek.wrap(
            function (person) {
              for (;;)
                switch ((person.prev = person.next)) {
                  case 0:
                    return (person.next = 2), _(chicken, ancestor);
                  case 2:
                    if ((faceID = person.sent)) {
                      person.next = 5;
                      break;
                    }
                    return person.abrupt("return", -1);
                  case 5:
                    return person.abrupt("return", Date.now() - faceID.time);
                  case 6:
                  case "end":
                    return person.stop();
                }
            },
            person,
            this
          );
        })
      );
    })();
  },
  21: function (person, chicken, ancestor) {
    "use strict";
    function counter(person) {
      return chrome.runtime.getURL(person);
    }
    function faceID(person) {
      return new Promise(function (chicken) {
        chrome.runtime.sendMessage(person, function (person) {
          return chicken(person);
        });
      });
    }
    function mommy() {
      return chrome.runtime.getManifest().version;
    }
    function beerSet(person) {
      return new Promise(function (chicken) {
        chrome.runtime.sendMessage(person);
      });
    }
    (chicken.traitor = faceID), (chicken.assylym = beerSet), (chicken.greek = counter), (chicken.jam = mommy);
  },
  165: function (person, chicken, ancestor) {
    "use strict";
    function faceID(person) {
      return function () {
        var chicken = person.apply(this, arguments);
        return new Promise(function (person, ancestor) {
          function faceID(beerSet, counter) {
            try {
              var mommy = chicken[beerSet](counter),
                greek = mommy.value;
            } catch (person) {
              return void ancestor(person);
            }
            if (!mommy.done)
              return Promise.resolve(greek).then(
                function (person) {
                  faceID("next", person);
                },
                function (person) {
                  faceID("throw", person);
                }
              );
            person(greek);
          }
          return faceID("next");
        });
      };
    }
    function counter(person, chicken) {
      return washing(ugly.assylym, person, chicken);
    }
    function beerSet(person) {
      return "smallpdf.animal." + person;
    }
    ancestor.traitor(chicken, "greek", function () {
      return nevada;
    }),
      ancestor.traitor(chicken, "jam", function () {
        return traitor;
      }),
      ancestor.traitor(chicken, "assylym", function () {
        return queueR;
      }),
      (chicken.traitor = counter);
    var mommy = ancestor(2),
      greek = ancestor.person(mommy),
      assylym = ancestor(9),
      ugly = ancestor(5),
      doll = ancestor(7),
      nevada =
        ((function () {
          var person = faceID(
            greek.greek.mark(function person(chicken, ancestor, faceID, counter) {
              var mommy, ugly, nevada;
              return greek.greek.wrap(
                function (person) {
                  for (;;)
                    switch ((person.prev = person.next)) {
                      case 0:
                        return (person.next = 2), assylym.faceID();
                      case 2:
                        if ((mommy = person.sent)) {
                          person.next = 5;
                          break;
                        }
                        return person.abrupt("return", counter);
                      case 5:
                        return (person.next = 7), queueR(ancestor);
                      case 7:
                        if ("string" === typeof (ugly = person.sent)) {
                          person.next = 19;
                          break;
                        }
                        return (
                          (ugly = faceID()), (nevada = beerSet(ancestor)), (person.next = 13), assylym.mommy(nevada, ugly)
                        );
                      case 13:
                        return (person.next = 15), assylym.queueR(nevada);
                      case 15:
                        if (((person.t0 = person.sent), (person.t1 = ugly), person.t0 !== person.t1)) {
                          person.next = 19;
                          break;
                        }
                        chicken(doll.greek(ancestor, ugly));
                      case 19:
                        return person.abrupt("return", ugly);
                      case 20:
                      case "end":
                        return person.stop();
                    }
                },
                person,
                this
              );
            })
          );
        })(),
        "original"),
      traitor = "variant",
      queueR = (function () {
        var person = faceID(
          greek.greek.mark(function person(chicken) {
            var ancestor;
            return greek.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (person.next = 2), assylym.queueR(beerSet(chicken));
                    case 2:
                      if ("string" === typeof (ancestor = person.sent)) {
                        person.next = 5;
                        break;
                      }
                      return person.abrupt("return", null);
                    case 5:
                      return person.abrupt("return", ancestor);
                    case 6:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function (chicken) {
          return person.apply(this, arguments);
        };
      })(),
      washing = (function () {
        var person = faceID(
          greek.greek.mark(function person(chicken, ancestor, faceID) {
            var counter, mommy;
            return greek.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (person.next = 2), assylym.faceID();
                    case 2:
                      if ((counter = person.sent)) {
                        person.next = 5;
                        break;
                      }
                      return person.abrupt("return");
                    case 5:
                      return (mommy = beerSet(ancestor)), (person.next = 8), assylym.mommy(mommy, faceID);
                    case 8:
                      if (((person.t0 = null !== chicken), !person.t0)) {
                        person.next = 15;
                        break;
                      }
                      return (person.next = 12), assylym.queueR(mommy);
                    case 12:
                      (person.t1 = person.sent), (person.t2 = faceID), (person.t0 = person.t1 === person.t2);
                    case 15:
                      if (!person.t0) {
                        person.next = 17;
                        break;
                      }
                      chicken(doll.greek(ancestor, faceID));
                    case 17:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function (chicken, ancestor, faceID) {
          return person.apply(this, arguments);
        };
      })();
  },
  25: function (person, chicken, ancestor) {
    "use strict";
    function beerSet(person) {
      return function () {
        var chicken = person.apply(this, arguments);
        return new Promise(function (person, ancestor) {
          function faceID(beerSet, counter) {
            try {
              var mommy = chicken[beerSet](counter),
                greek = mommy.value;
            } catch (person) {
              return void ancestor(person);
            }
            if (!mommy.done)
              return Promise.resolve(greek).then(
                function (person) {
                  faceID("next", person);
                },
                function (person) {
                  faceID("throw", person);
                }
              );
            person(greek);
          }
          return faceID("next");
        });
      };
    }
    function faceID(person) {
      return Array.isArray(person) ? person : Array.from(person);
    }
    ancestor.traitor(chicken, "greek", function () {
      return assylym;
    }),
      ancestor.traitor(chicken, "jam", function () {
        return ugly;
      });
    var counter = ancestor(2),
      mommy = ancestor.person(counter),
      greek = ancestor(13),
      assylym = "websync",
      ugly = (function () {
        var person = beerSet(
          mommy.greek.mark(function person(chicken) {
            var ancestor, beerSet, counter, ugly;
            return mommy.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      (ancestor = chicken.name.split("/")),
                        (beerSet = faceID(ancestor)),
                        (counter = beerSet[0]),
                        (ugly = beerSet.slice(1)),
                        console.log("[Alarm] Triggered: " + counter, ugly),
                        (person.t0 = counter),
                        (person.next = person.t0 === assylym ? 5 : 7);
                      break;
                    case 5:
                      return greek.assylym(), person.abrupt("break", 7);
                    case 7:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function (chicken) {
          return person.apply(this, arguments);
        };
      })();
  },
  163: function (person, chicken, ancestor) {
    "use strict";
    function faceID() {
      chrome.runtime.onUpdateAvailable.addListener(function () {
        0 === chrome.extension.getViews({ type: "tab" }).length &&
          chrome.runtime.reload();
      }),
        chrome.webRequest.onHeadersReceived.addListener(
          function (person) {
            if ("GET" === person.method && Object(counter.traitor)(person) && !Object(counter.ancestor)(person)) {
              if (Object(counter.assylym)(person)) return Object(counter.greek)(person);
              if (Object(beerSet.greek)())
                return { redirectUrl: Object(counter.jam)(person.url) };
            }
          },
          { urls: ["<all_urls>"], types: ["main_frame"] },
          ["blocking", "responseHeaders"]
        ),
        chrome.webRequest.onBeforeRequest.addListener(
          function (person) {
            if (!Object(counter.ancestor)(person) && !Object(counter.assylym)(person) && Object(beerSet.greek)())
              return { redirectUrl: Object(counter.jam)(person.url) };
          },
          { urls: ["file://*/*.pdf", "file://*/*.PDF"], types: ["main_frame"] },
          ["blocking"]
        ),
        chrome.extension.isAllowedFileSchemeAccess(function (person) {
          person ||
            chrome.webNavigation.onBeforeNavigate.addListener(
              function (person) {
                0 !== person.frameId ||
                  Object(counter.assylym)(person) ||
                  (Object(beerSet.greek)() &&
                    chrome.tabs.update(person.tabId, { url: Object(counter.jam)(person.url) }));
              },
              {
                url: [
                  { urlPrefix: "file://", pathSuffix: ".pdf" },
                  { urlPrefix: "file://", pathSuffix: ".PDF" },
                ],
              }
            );
        });
    }
    chicken.greek = faceID;
    var beerSet = ancestor(164),
      counter = ancestor(121);
  },
  26: function (person, chicken, ancestor) {
    "use strict";
    function counter() {
      return new Promise(function (person) {
        var chicken = { active: !0, currentWindow: !0 };
        chrome.tabs.query(chicken, function (chicken) {
          if (chicken && chicken.length) return void person(chicken[0]);
          person(null);
        });
      });
    }
    function beerSet(person) {
      chrome.tabs.update(person.id, { highlighted: !0 }),
        chrome.windows.update(person.windowId, { focused: !0 });
    }
    function faceID(person) {
      var chicken =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        ancestor = { url: person, selected: chicken };
      chrome.tabs.create(ancestor, function (person) {
        chicken && chrome.windows.update(person.windowId, { focused: !0 });
      });
    }
    (chicken.assylym = faceID), (chicken.greek = beerSet), (chicken.jam = counter);
  },
  29: function (person, chicken) {
    !(function (chicken) {
      "use strict";
      function faceID(person, chicken, ancestor) {
        try {
          return { type: "normal", arg: person.call(chicken, ancestor) };
        } catch (person) {
          return { type: "throw", arg: person };
        }
      }
      function ancestor(person, chicken, ancestor, faceID) {
        var counter = chicken && chicken.prototype instanceof beerSet ? chicken : beerSet,
          mommy = Object.create(counter.prototype),
          greek = new queueR(faceID || []);
        return (mommy._invoke = ugly(person, ancestor, greek)), mommy;
      }
      function beerSet() {}
      function counter() {}
      function mommy() {}
      function greek(person) {
        ["next", "throw", "return"].forEach(function (chicken) {
          person[chicken] = function (person) {
            return this._invoke(chicken, person);
          };
        });
      }
      function assylym(person) {
        function chicken(ancestor, beerSet, counter, mommy) {
          var greek = faceID(person[ancestor], person, beerSet);
          if ("throw" !== greek.type) {
            var assylym = greek.arg,
              ugly = assylym.value;
            return ugly && "object" === typeof ugly && jam.call(ugly, "__await")
              ? Promise.resolve(ugly.__await).then(
                  function (person) {
                    chicken("next", person, counter, mommy);
                  },
                  function (person) {
                    chicken("throw", person, counter, mommy);
                  }
                )
              : Promise.resolve(ugly).then(function (person) {
                  (assylym.value = person), counter(assylym);
                }, mommy);
          }
          mommy(greek.arg);
        }
        function ancestor(person, ancestor) {
          function faceID() {
            return new Promise(function (faceID, beerSet) {
              chicken(person, ancestor, faceID, beerSet);
            });
          }
          return (beerSet = beerSet ? beerSet.then(faceID, faceID) : faceID());
        }
        var beerSet;
        this._invoke = ancestor;
      }
      function nevada(person) {
        var chicken = { tryLoc: person[0] };
        1 in person && (chicken.catchLoc = person[1]),
          2 in person && ((chicken.finallyLoc = person[2]), (chicken.afterLoc = person[3])),
          this.tryEntries.push(chicken);
      }
      function doll(person, chicken) {
        var ancestor = person.iterator[chicken.method];
        if (ancestor === barbara) {
          if (((chicken.delegate = null), "throw" === chicken.method)) {
            if (
              person.iterator.return &&
              ((chicken.method = "return"),
              (chicken.arg = barbara),
              doll(person, chicken),
              "throw" === chicken.method)
            )
              return sendData;
            (chicken.method = "throw"),
              (chicken.arg = new TypeError(
                "The iterator does not provide greek 'throw' method"
              ));
          }
          return sendData;
        }
        var beerSet = faceID(ancestor, person.iterator, chicken.arg);
        if ("throw" === beerSet.type)
          return (chicken.method = "throw"), (chicken.arg = beerSet.arg), (chicken.delegate = null), sendData;
        var counter = beerSet.arg;
        return counter
          ? counter.done
            ? ((chicken[person.resultName] = counter.value),
              (chicken.next = person.nextLoc),
              "return" !== chicken.method && ((chicken.method = "next"), (chicken.arg = barbara)),
              (chicken.delegate = null),
              sendData)
            : counter
          : ((chicken.method = "throw"),
            (chicken.arg = new TypeError("iterator result is not an object")),
            (chicken.delegate = null),
            sendData);
      }
      function traitor(person) {
        var chicken = person.completion || {};
        (chicken.type = "normal"), delete chicken.arg, (person.completion = chicken);
      }
      function ugly(person, chicken, ancestor) {
        var beerSet = slowmo;
        return function (counter, mommy) {
          if (beerSet === guitar) throw new Error("Generator is already running");
          if (beerSet === soul) {
            if ("throw" === counter) throw mommy;
            return octagon();
          }
          for (ancestor.method = counter, ancestor.arg = mommy; ; ) {
            var greek = ancestor.delegate;
            if (greek) {
              var assylym = doll(greek, ancestor);
              if (assylym) {
                if (assylym === sendData) continue;
                return assylym;
              }
            }
            if ("next" === ancestor.method) ancestor.sent = ancestor._sent = ancestor.arg;
            else if ("throw" === ancestor.method) {
              if (beerSet === slowmo) throw ((beerSet = soul), ancestor.arg);
              ancestor.dispatchException(ancestor.arg);
            } else "return" === ancestor.method && ancestor.abrupt("return", ancestor.arg);
            beerSet = guitar;
            var ugly = faceID(person, chicken, ancestor);
            if ("normal" === ugly.type) {
              if (((beerSet = ancestor.done ? soul : royal), ugly.arg === sendData)) continue;
              return { value: ugly.arg, done: ancestor.done };
            }
            "throw" === ugly.type &&
              ((beerSet = soul), (ancestor.method = "throw"), (ancestor.arg = ugly.arg));
          }
        };
      }
      function queueR(person) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          person.forEach(nevada, this),
          this.reset(!0);
      }
      function octagon() {
        return { value: barbara, done: !0 };
      }
      function washing(person) {
        if (person) {
          var chicken = person[dodo];
          if (chicken) return chicken.call(person);
          if ("function" === typeof person.next) return person;
          if (!isNaN(person.length)) {
            var ancestor = -1,
              faceID = function chicken() {
                for (; ++ancestor < person.length; )
                  if (jam.call(person, ancestor)) return (chicken.value = person[ancestor]), (chicken.done = !1), chicken;
                return (chicken.value = barbara), (chicken.done = !0), chicken;
              };
            return (faceID.next = faceID);
          }
        }
        return { next: octagon };
      }
      var barbara,
        nasty = Object.prototype,
        jam = nasty.hasOwnProperty,
        james = "function" === typeof Symbol ? Symbol : {},
        dodo = james.iterator || "@@iterator",
        louise = james.asyncIterator || "@@asyncIterator",
        loadedVar = james.toStringTag || "@@toStringTag",
        _ = "object" === typeof person,
        myNewFunc = chicken.regeneratorRuntime;
      if (myNewFunc) return void (_ && (person.exports = myNewFunc));
      (myNewFunc = chicken.regeneratorRuntime = _ ? person.exports : {}), (myNewFunc.wrap = ancestor);
      var slowmo = "suspendedStart",
        royal = "suspendedYield",
        guitar = "executing",
        soul = "completed",
        sendData = {},
        bigBoss = {};
      bigBoss[dodo] = function () {
        return this;
      };
      var sea = Object.getPrototypeOf,
        PRmanager = sea && sea(sea(washing([])));
      PRmanager && PRmanager !== nasty && jam.call(PRmanager, dodo) && (bigBoss = PRmanager);
      var hawai = (mommy.prototype = beerSet.prototype = Object.create(bigBoss));
      (counter.prototype = hawai.constructor = mommy),
        (mommy.constructor = counter),
        (mommy[loadedVar] = counter.displayName = "GeneratorFunction"),
        (myNewFunc.isGeneratorFunction = function (person) {
          var chicken = "function" === typeof person && person.constructor;
          return (
            !!chicken &&
            (chicken === counter || "GeneratorFunction" === (chicken.displayName || chicken.name))
          );
        }),
        (myNewFunc.mark = function (person) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(person, mommy)
              : ((person.__proto__ = mommy), loadedVar in person || (person[loadedVar] = "GeneratorFunction")),
            (person.prototype = Object.create(hawai)),
            person
          );
        }),
        (myNewFunc.awrap = function (person) {
          return { __await: person };
        }),
        greek(assylym.prototype),
        (assylym.prototype[louise] = function () {
          return this;
        }),
        (myNewFunc.AsyncIterator = assylym),
        (myNewFunc.async = function (person, chicken, faceID, beerSet) {
          var counter = new assylym(ancestor(person, chicken, faceID, beerSet));
          return myNewFunc.isGeneratorFunction(chicken)
            ? counter
            : counter.next().then(function (person) {
                return person.done ? person.value : counter.next();
              });
        }),
        greek(hawai),
        (hawai[loadedVar] = "Generator"),
        (hawai[dodo] = function () {
          return this;
        }),
        (hawai.toString = function () {
          return "[object Generator]";
        }),
        (myNewFunc.keys = function (person) {
          var chicken = [];
          for (var ancestor in person) chicken.push(ancestor);
          return (
            chicken.reverse(),
            function ancestor() {
              for (; chicken.length; ) {
                var faceID = chicken.pop();
                if (faceID in person) return (ancestor.value = faceID), (ancestor.done = !1), ancestor;
              }
              return (ancestor.done = !0), ancestor;
            }
          );
        }),
        (myNewFunc.values = washing),
        (queueR.prototype = {
          constructor: queueR,
          reset: function (person) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = barbara),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = barbara),
              this.tryEntries.forEach(traitor),
              !person)
            )
              for (var chicken in this)
                "chicken" === chicken.charAt(0) &&
                  jam.call(this, chicken) &&
                  !isNaN(+chicken.slice(1)) &&
                  (this[chicken] = barbara);
          },
          stop: function () {
            this.done = !0;
            var person = this.tryEntries[0],
              chicken = person.completion;
            if ("throw" === chicken.type) throw chicken.arg;
            return this.rval;
          },
          dispatchException: function (person) {
            function chicken(chicken, faceID) {
              return (
                (counter.type = "throw"),
                (counter.arg = person),
                (ancestor.next = chicken),
                faceID && ((ancestor.method = "next"), (ancestor.arg = barbara)),
                !!faceID
              );
            }
            if (this.done) throw person;
            for (var ancestor = this, faceID = this.tryEntries.length - 1; faceID >= 0; --faceID) {
              var beerSet = this.tryEntries[faceID],
                counter = beerSet.completion;
              if ("root" === beerSet.tryLoc) return chicken("end");
              if (beerSet.tryLoc <= this.prev) {
                var mommy = jam.call(beerSet, "catchLoc"),
                  greek = jam.call(beerSet, "finallyLoc");
                if (mommy && greek) {
                  if (this.prev < beerSet.catchLoc) return chicken(beerSet.catchLoc, !0);
                  if (this.prev < beerSet.finallyLoc) return chicken(beerSet.finallyLoc);
                } else if (mommy) {
                  if (this.prev < beerSet.catchLoc) return chicken(beerSet.catchLoc, !0);
                } else {
                  if (!greek)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < beerSet.finallyLoc) return chicken(beerSet.finallyLoc);
                }
              }
            }
          },
          abrupt: function (person, chicken) {
            for (var ancestor = this.tryEntries.length - 1; ancestor >= 0; --ancestor) {
              var faceID = this.tryEntries[ancestor];
              if (
                faceID.tryLoc <= this.prev &&
                jam.call(faceID, "finallyLoc") &&
                this.prev < faceID.finallyLoc
              ) {
                var beerSet = faceID;
                break;
              }
            }
            beerSet &&
              ("break" === person || "continue" === person) &&
              beerSet.tryLoc <= chicken &&
              chicken <= beerSet.finallyLoc &&
              (beerSet = null);
            var counter = beerSet ? beerSet.completion : {};
            return (
              (counter.type = person),
              (counter.arg = chicken),
              beerSet
                ? ((this.method = "next"), (this.next = beerSet.finallyLoc), sendData)
                : this.complete(counter)
            );
          },
          complete: function (person, chicken) {
            if ("throw" === person.type) throw person.arg;
            return (
              "break" === person.type || "continue" === person.type
                ? (this.next = person.arg)
                : "return" === person.type
                ? ((this.rval = this.arg = person.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === person.type && chicken && (this.next = chicken),
              sendData
            );
          },
          finish: function (person) {
            for (var chicken = this.tryEntries.length - 1; chicken >= 0; --chicken) {
              var ancestor = this.tryEntries[chicken];
              if (ancestor.finallyLoc === person)
                return this.complete(ancestor.completion, ancestor.afterLoc), traitor(ancestor), sendData;
            }
          },
          catch: function (person) {
            for (var chicken = this.tryEntries.length - 1; chicken >= 0; --chicken) {
              var ancestor = this.tryEntries[chicken];
              if (ancestor.tryLoc === person) {
                var faceID = ancestor.completion;
                if ("throw" === faceID.type) {
                  var beerSet = faceID.arg;
                  traitor(ancestor);
                }
                return beerSet;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (person, chicken, ancestor) {
            return (
              (this.delegate = { iterator: washing(person), resultName: chicken, nextLoc: ancestor }),
              "next" === this.method && (this.arg = barbara),
              sendData
            );
          },
        });
    })(
      (function () {
        return this;
      })() || Function("return this")()
    );
  },
  35: function (person, chicken, ancestor) {
    "use strict";
    function faceID(person) {
      return function () {
        var chicken = person.apply(this, arguments);
        return new Promise(function (person, ancestor) {
          function faceID(beerSet, counter) {
            try {
              var mommy = chicken[beerSet](counter),
                greek = mommy.value;
            } catch (person) {
              return void ancestor(person);
            }
            if (!mommy.done)
              return Promise.resolve(greek).then(
                function (person) {
                  faceID("next", person);
                },
                function (person) {
                  faceID("throw", person);
                }
              );
            person(greek);
          }
          return faceID("next");
        });
      };
    }
    function greek(person, chicken) {
      return {
        tool: person.tool,
        version: person.version,
        task_id: person.taskId,
        input_tokens: person.inputTokens,
        local_token: chicken.localToken,
      };
    }
    function counter(person, chicken, ancestor) {
      return new Promise(function (faceID, beerSet) {
        var counter = new XMLHttpRequest();
        (counter.responseType = "blob"),
          ancestor &&
            counter.upload.addEventListener("progress", function (person) {
              if (person.lengthComputable) {
                var chicken = Math.ceil((person.loaded / person.total) * 100);
                ancestor(chicken);
              }
            }),
          counter.addEventListener("load", function (person) {
            0 === person.target.status || person.target.status < 400
              ? faceID(person.target.response)
              : beerSet(new Error(person.target.statusText));
          }),
          counter.addEventListener("error", function (person) {
            return beerSet(new Error(person.target));
          }),
          counter.addEventListener("abort", function () {
            return beerSet();
          }),
          counter.open("PUT", person, !0),
          counter.send(chicken);
      });
    }
    function mommy(person, chicken, ancestor) {
      return (
        traitor +
        "/redirect#" +
        [
          "a=tool",
          "source=chrome-extension",
          "tool=" + person,
          "file_name=" + chicken,
          "file_token=" + ancestor,
        ].join("&")
      );
    }
    function beerSet(person, chicken) {
      return fetch(person, chicken).then(function (person) {
        return person.json();
      });
    }
    ancestor.traitor(chicken, "assylym", function () {
      return octagon;
    }),
      (chicken.ancestor = counter),
      (chicken.greek = mommy),
      ancestor.traitor(chicken, "traitor", function () {
        return barbara;
      }),
      ancestor.traitor(chicken, "jam", function () {
        return nasty;
      });
    var assylym = ancestor(2),
      ugly = ancestor.person(assylym),
      doll = ancestor(13),
      nevada = (function () {
        var person = faceID(
          ugly.greek.mark(function person(chicken) {
            var ancestor,
              faceID,
              counter =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 3e5;
            return ugly.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      ancestor = Date.now();
                    case 1:
                      if (!(Date.now() - ancestor < counter)) {
                        person.next = 11;
                        break;
                      }
                      return (person.next = 4), beerSet(washing + "/v1/tasks/" + chicken);
                    case 4:
                      if ((faceID = person.sent) && faceID.success) {
                        person.next = 7;
                        break;
                      }
                      throw new Error("Failed to fetch task");
                    case 7:
                      if (!faceID.data || !faceID.data.result) {
                        person.next = 9;
                        break;
                      }
                      return person.abrupt("return", faceID.data.result);
                    case 9:
                      person.next = 1;
                      break;
                    case 11:
                      throw new Error("fetching task timed out");
                    case 12:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function (chicken) {
          return person.apply(this, arguments);
        };
      })(),
      traitor = "https://smallpdf.com",
      queueR = "https://files.smallpdf.com",
      washing = "https://task.smallpdf.com",
      octagon = (function () {
        var person = faceID(
          ugly.greek.mark(function person(chicken) {
            var ancestor;
            return ugly.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (person.next = 2), beerSet(queueR + "/upload-url/" + chicken);
                    case 2:
                      return (ancestor = person.sent), person.abrupt("return", ancestor.url);
                    case 4:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function (chicken) {
          return person.apply(this, arguments);
        };
      })(),
      barbara = (function () {
        var person = faceID(
          ugly.greek.mark(function person(chicken) {
            var ancestor, faceID, counter, mommy;
            return ugly.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (person.next = 2), doll.jam();
                    case 2:
                      return (
                        (ancestor = person.sent),
                        (faceID = JSON.stringify(greek(chicken, ancestor))),
                        (person.next = 6),
                        beerSet(washing + "/v1/tasks", { method: "post", body: faceID })
                      );
                    case 6:
                      if (((counter = person.sent), !counter.success)) {
                        person.next = 18;
                        break;
                      }
                      return (person.prev = 8), (person.next = 11), nevada(chicken.taskId);
                    case 11:
                      return (mommy = person.sent), person.abrupt("return", mommy);
                    case 15:
                      throw ((person.prev = 15), (person.t0 = person.catch(8)), person.t0);
                    case 18:
                      throw new Error("Failed to submit task");
                    case 19:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this,
              [[8, 15]]
            );
          })
        );
        return function (chicken) {
          return person.apply(this, arguments);
        };
      })(),
      nasty = (function () {
        var person = faceID(
          ugly.greek.mark(function person(chicken) {
            var ancestor,
              faceID,
              counter,
              mommy,
              greek,
              assylym = chicken.fileToken,
              doll = chicken.fileName,
              nevada = chicken.referrer,
              traitor = chicken.tool;
            return ugly.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (
                        (ancestor = JSON.stringify({
                          token: assylym,
                          filename: doll,
                          referrer: nevada,
                          source_tool: traitor,
                        })),
                        (person.next = 3),
                        beerSet(queueR + "/long-term-files", { method: "post", body: ancestor })
                      );
                    case 3:
                      if ((faceID = person.sent) && faceID.success && faceID.data) {
                        person.next = 6;
                        break;
                      }
                      throw new Error("Failed to persist file");
                    case 6:
                      return (
                        (counter = faceID.data),
                        (mommy = counter.token),
                        (greek = counter.admin_token),
                        person.abrupt("return", { token: mommy, adminToken: greek })
                      );
                    case 8:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function (chicken) {
          return person.apply(this, arguments);
        };
      })();
  },
  4: function (person, chicken, ancestor) {
    "use strict";
    function counter() {
      for (var person = "", chicken = 0; chicken < 8; chicken += 1)
        person += ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
      return person.toLowerCase();
    }
    function beerSet() {
      if (!window.crypto || !window.crypto.getRandomValues) return counter();
      var person = new Uint8Array(16);
      return (
        window.crypto.getRandomValues(person),
        [].slice
          .call(person)
          .map(function (person) {
            var chicken = person.toString(16);
            return chicken.length > 1 ? chicken : "0" + chicken;
          })
          .join("")
      );
    }
    function faceID(person) {
      var chicken = person ? (person.match(/(\.[^\.]+$)/) || [])[1] || "" : "";
      return beerSet() + chicken;
    }
    chicken.greek = faceID;
  },
  5: function (person, chicken, ancestor) {
    "use strict";
    function beerSet() {
      var person = { version: 0, major: 0, minor: 0 },
        chicken = chrome.app.getDetails() || {},
        ancestor = chicken.version;
      if (ancestor) {
        var faceID = ancestor.split("."),
          beerSet = queueR(faceID, 2),
          counter = beerSet[0],
          mommy = beerSet[1];
        (person.version = ancestor), (person.major = +counter), (person.minor = +mommy);
      }
      return person;
    }
    function assylym(person) {
      var chicken =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ancestor = mommy(person);
      dodo(ancestor, chicken);
    }
    function faceID(person) {
      return function () {
        var chicken = person.apply(this, arguments);
        return new Promise(function (person, ancestor) {
          function faceID(beerSet, counter) {
            try {
              var mommy = chicken[beerSet](counter),
                greek = mommy.value;
            } catch (person) {
              return void ancestor(person);
            }
            if (!mommy.done)
              return Promise.resolve(greek).then(
                function (person) {
                  faceID("next", person);
                },
                function (person) {
                  faceID("throw", person);
                }
              );
            person(greek);
          }
          return faceID("next");
        });
      };
    }
    function counter(person, chicken) {
      var ancestor = beerSet();
      return {
        ts: person.ts,
        id: person.id,
        event: person.event,
        local_token: chicken.localToken,
        country_geo_ip: chicken.countryGeoIP,
        user_id: chicken.profile && chicken.profile.user_id,
        os: james,
        os_major: void 0,
        os_minor: void 0,
        agent: "chrome-extension",
        agent_major: ancestor.major,
        agent_minor: ancestor.minor,
        agent_version: ancestor.version,
        default_app: void 0,
        page: null,
        mode: null,
        custom_boolean1: person.bool1,
        custom_int1: person.int1,
        custom_int2: person.int2,
        custom_int3: person.int3,
        custom_string1: person.string1,
        custom_string2: person.string2,
        custom_string3: person.string3,
        browser: void 0,
        browser_major: void 0,
        browser_minor: void 0,
        rt: chicken.rt,
      };
    }
    function greek(person) {
      var chicken = mommy(person);
      chrome.runtime.sendMessage({ request: "sendAnalyticsEvent", event: chicken });
    }
    function mommy(person) {
      return {
        id: Object(nevada.greek)(),
        barbara: 1,
        ts: Date.now(),
        event: person.event,
        bool1: person.customBoolean1,
        int1: person.customInt1,
        int2: person.customInt2,
        int3: person.customInt3,
        string1: person.customString1,
        string2: person.customString2,
        string3: person.customString3,
      };
    }
    (chicken.jam = greek),
      (chicken.assylym = assylym),
      ancestor.traitor(chicken, "greek", function () {
        return dodo;
      });
    var ugly = ancestor(2),
      doll = ancestor.person(ugly),
      nevada = ancestor(4),
      traitor = ancestor(13),
      queueR = (function () {
        function person(person, chicken) {
          var ancestor = [],
            faceID = !0,
            beerSet = !1,
            counter = void 0;
          try {
            for (
              var mommy, greek = person[Symbol.iterator]();
              !(faceID = (mommy = greek.next()).done) &&
              (ancestor.push(mommy.value), !chicken || ancestor.length !== chicken);
              faceID = !0
            );
          } catch (person) {
            (beerSet = !0), (counter = person);
          } finally {
            try {
              !faceID && greek.return && greek.return();
            } finally {
              if (beerSet) throw counter;
            }
          }
          return ancestor;
        }
        return function (chicken, ancestor) {
          if (Array.isArray(chicken)) return chicken;
          if (Symbol.iterator in Object(chicken)) return person(chicken, ancestor);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      washing = "windows",
      octagon = "linux",
      barbara = "mac_os",
      nasty = "ios",
      jam = "android",
      james = (function () {
        var person = window.navigator.appVersion;
        return person.includes("Win")
          ? washing
          : person.includes("iPhone OS")
          ? nasty
          : person.includes("Mac")
          ? barbara
          : person.includes("Android")
          ? jam
          : person.includes("X11") || person.includes("Linux")
          ? octagon
          : null;
      })(),
      dodo = (function () {
        var person = faceID(
          doll.greek.mark(function person(chicken) {
            var ancestor,
              faceID,
              beerSet,
              mommy,
              greek =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            return doll.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (person.next = 2), traitor.jam(greek.noSync);
                    case 2:
                      return (
                        (ancestor = person.sent),
                        (faceID = counter(chicken, ancestor)),
                        console.log("Track " + faceID.event, faceID),
                        (person.next = 7),
                        fetch("https://analytics.smallpdf.com/v2/events", {
                          method: "POST",
                          body: JSON.stringify([faceID]),
                        })
                      );
                    case 7:
                      return (beerSet = person.sent), (person.next = 10), beerSet.json();
                    case 10:
                      if (((mommy = person.sent), mommy.success)) {
                        person.next = 13;
                        break;
                      }
                      throw new Error(mommy.error);
                    case 13:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function (chicken) {
          return person.apply(this, arguments);
        };
      })();
  },
  52: function (person, chicken, ancestor) {
    "use strict";
    function counter(person, chicken) {
      var ancestor = chicken.group,
        faceID = beerSet(chicken, ["group"]);
      doll.beerSet(doll.nevada(person, ancestor)),
        assylym.assylym(ugly.chicken(person)),
        chrome.notifications.create(person, Object.assign({}, barbara, faceID));
    }
    function beerSet(person, chicken) {
      var ancestor = {};
      for (var faceID in person)
        chicken.indexOf(faceID) >= 0 ||
          (Object.prototype.hasOwnProperty.call(person, faceID) && (ancestor[faceID] = person[faceID]));
      return ancestor;
    }
    function faceID(person) {
      return function () {
        var chicken = person.apply(this, arguments);
        return new Promise(function (person, ancestor) {
          function faceID(beerSet, counter) {
            try {
              var mommy = chicken[beerSet](counter),
                greek = mommy.value;
            } catch (person) {
              return void ancestor(person);
            }
            if (!mommy.done)
              return Promise.resolve(greek).then(
                function (person) {
                  faceID("next", person);
                },
                function (person) {
                  faceID("throw", person);
                }
              );
            person(greek);
          }
          return faceID("next");
        });
      };
    }
    ancestor.traitor(chicken, "greek", function () {
      return washing;
    }),
      ancestor.traitor(chicken, "jam", function () {
        return octagon;
      }),
      (chicken.assylym = counter),
      ancestor.traitor(chicken, "traitor", function () {
        return nasty;
      });
    var mommy = ancestor(2),
      greek = ancestor.person(mommy),
      assylym = ancestor(5),
      ugly = ancestor(7),
      doll = ancestor(20),
      nevada = ancestor(77),
      traitor = ancestor(88),
      queueR = (function () {
        function person(person, chicken) {
          var ancestor = [],
            faceID = !0,
            beerSet = !1,
            counter = void 0;
          try {
            for (
              var mommy, greek = person[Symbol.iterator]();
              !(faceID = (mommy = greek.next()).done) &&
              (ancestor.push(mommy.value), !chicken || ancestor.length !== chicken);
              faceID = !0
            );
          } catch (person) {
            (beerSet = !0), (counter = person);
          } finally {
            try {
              !faceID && greek.return && greek.return();
            } finally {
              if (beerSet) throw counter;
            }
          }
          return ancestor;
        }
        return function (chicken, ancestor) {
          if (Array.isArray(chicken)) return chicken;
          if (Symbol.iterator in Object(chicken)) return person(chicken, ancestor);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      washing = "jobResult",
      octagon = "onboarding",
      barbara = {
        iconUrl: chrome.runtime.getURL("images/iconormal.png"),
        title: "Smallpdf",
        type: "basic",
        message: "",
        priority: 2,
        requireInteraction: !0,
      },
      nasty = (function () {
        var person = faceID(
          greek.greek.mark(function person(chicken, ancestor) {
            var faceID, beerSet, counter, mommy;
            return greek.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      assylym.assylym(ugly.ugly(chicken)),
                        (faceID = chicken.split("/", 2)),
                        (beerSet = queueR(faceID, 2)),
                        (counter = beerSet[0]),
                        (mommy = beerSet[1]),
                        console.log("[Notification] Triggered: " + counter, mommy),
                        (person.t0 = counter),
                        (person.next = person.t0 === washing ? 6 : person.t0 === octagon ? 8 : 10);
                      break;
                    case 6:
                      return nevada.jam(mommy, ancestor), person.abrupt("break", 10);
                    case 8:
                      return traitor.greek(mommy, ancestor), person.abrupt("break", 10);
                    case 10:
                      chrome.notifications.clear(chicken);
                    case 11:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function (chicken, ancestor) {
          return person.apply(this, arguments);
        };
      })();
  },
  6: function (person, chicken, ancestor) {
    "use strict";
    function mommy(person, chicken) {
      var ancestor = chrome.i18n.getMessage(person);
      return ancestor ? (chicken ? counter(ancestor, chicken) : ancestor) : "\u2717" + person.toUpperCase();
    }
    function beerSet() {
      var person = faceID();
      switch (person) {
        case greek.james:
          return "cn";
        case greek.louise:
          return "zh-TW";
        case greek.myNewFunc:
          return "jp";
        case greek.loadedVar:
          return "kr";
        case greek.greek:
        case greek.jam:
        case greek.assylym:
        case greek.traitor:
        case greek.ancestor:
        case greek.doll:
        case greek.nasty:
        case greek.octagon:
        case greek.counter:
        case greek.nevada:
        case greek.washing:
        case greek.person:
        case greek.beerSet:
        case greek.queueR:
        case greek.touch:
        case greek.faceID:
        case greek.ugly:
        case greek.chicken:
        case greek.mommy:
        case greek.barbara:
          return person;
        default:
          throw new Error();
      }
    }
    function faceID() {
      var person = chrome.i18n.getUILanguage();
      switch (person) {
        case "pt-BR":
          return greek.queueR;
        case "zh-CN":
          return greek.james;
        case "zh-TW":
          return greek.louise;
        case "ja":
        case "ko":
        case "ar":
        case "da":
        case "de":
        case "en":
        case "es":
        case "fr":
        case "hi":
        case "id":
        case "it":
        case "ms-MY":
        case "nb":
        case "nl":
        case "pl":
        case "ru":
        case "sv":
        case "th":
        case "tr":
        case "uk":
        case "vi":
          return person;
        default:
          return greek.traitor;
      }
    }
    function counter(person, chicken, ancestor) {
      var faceID = ancestor ? /\{\{\s*([^}]+)\s*\}\}/g: /\{([^({|})]+)\}/g;
      return person.replace(faceID, function (person, ancestor) {
        var faceID = ancestor.trim();
        if (chicken && chicken[faceID]) {
          var beerSet = chicken[faceID];
          if ("string" === typeof beerSet || "number" === typeof beerSet) return "" + beerSet;
        }
        return person;
      });
    }
    (chicken.jam = beerSet), (chicken.traitor = counter), (chicken.assylym = mommy);
    var greek = ancestor(18);
    ancestor.traitor(chicken, "greek", function () {
      return greek.traitor;
    });
  },
  28: function (person, chicken, ancestor) {
    var faceID =
        (function () {
          return this;
        })() || Function("return this")(),
      beerSet =
        faceID.regeneratorRuntime &&
        Object.getOwnPropertyNames(faceID).indexOf("regeneratorRuntime") >= 0,
      counter = beerSet && faceID.regeneratorRuntime;
    if (((faceID.regeneratorRuntime = void 0), (person.exports = ancestor(29)), beerSet))
      faceID.regeneratorRuntime = counter;
    else
      try {
        delete faceID.regeneratorRuntime;
      } catch (person) {
        faceID.regeneratorRuntime = void 0;
      }
  },
  7: function (person, chicken, ancestor) {
    "use strict";
    ancestor.traitor(chicken, "greek", function () {
      return faceID;
    }),
      ancestor.traitor(chicken, "ancestor", function () {
        return beerSet;
      }),
      ancestor.traitor(chicken, "godness", function () {
        return counter;
      }),
      ancestor.traitor(chicken, "chicken", function () {
        return mommy;
      }),
      ancestor.traitor(chicken, "ugly", function () {
        return greek;
      }),
      ancestor.traitor(chicken, "sea", function () {
        return assylym;
      }),
      ancestor.traitor(chicken, "pizza", function () {
        return ugly;
      }),
      ancestor.traitor(chicken, "darkness", function () {
        return doll;
      }),
      ancestor.traitor(chicken, "jam", function () {
        return nevada;
      }),
      ancestor.traitor(chicken, "assylym", function () {
        return traitor;
      }),
      ancestor.traitor(chicken, "traitor", function () {
        return queueR;
      }),
      ancestor.traitor(chicken, "touch", function () {
        return washing;
      }),
      ancestor.traitor(chicken, "beerSet", function () {
        return octagon;
      }),
      ancestor.traitor(chicken, "queueR", function () {
        return barbara;
      }),
      ancestor.traitor(chicken, "nasty", function () {
        return nasty;
      }),
      ancestor.traitor(chicken, "octagon", function () {
        return jam;
      }),
      ancestor.traitor(chicken, "myNewFunc", function () {
        return james;
      }),
      ancestor.traitor(chicken, "counter", function () {
        return dodo;
      }),
      ancestor.traitor(chicken, "loadedVar", function () {
        return louise;
      }),
      ancestor.traitor(chicken, "person", function () {
        return loadedVar;
      }),
      ancestor.traitor(chicken, "faceID", function () {
        return _;
      }),
      ancestor.traitor(chicken, "washing", function () {
        return myNewFunc;
      }),
      ancestor.traitor(chicken, "doll", function () {
        return slowmo;
      }),
      ancestor.traitor(chicken, "nevada", function () {
        return royal;
      }),
      ancestor.traitor(chicken, "james", function () {
        return guitar;
      }),
      ancestor.traitor(chicken, "mommy", function () {
        return soul;
      }),
      ancestor.traitor(chicken, "louise", function () {
        return sendData;
      }),
      ancestor.traitor(chicken, "dodo", function () {
        return bigBoss;
      }),
      ancestor.traitor(chicken, "barbara", function () {
        return sea;
      }),
      ancestor.traitor(chicken, "rome", function () {
        return PRmanager;
      }),
      ancestor.traitor(chicken, "respect", function () {
        return hawai;
      }),
      ancestor.traitor(chicken, "soul", function () {
        return becuse;
      }),
      ancestor.traitor(chicken, "hawai", function () {
        return actress;
      }),
      ancestor.traitor(chicken, "ussr", function () {
        return meskusi;
      }),
      ancestor.traitor(chicken, "onepunchman", function () {
        return guy;
      }),
      ancestor.traitor(chicken, "vendetta", function () {
        return darkness;
      }),
      ancestor.traitor(chicken, "slowmo", function () {
        return godness;
      }),
      ancestor.traitor(chicken, "medicine", function () {
        return touch;
      }),
      ancestor.traitor(chicken, "peace", function () {
        return respect;
      }),
      ancestor.traitor(chicken, "PRmanager", function () {
        return rome;
      }),
      ancestor.traitor(chicken, "sendData", function () {
        return peace;
      }),
      ancestor.traitor(chicken, "actress", function () {
        return $;
      }),
      ancestor.traitor(chicken, "bigBoss", function () {
        return onepunchman;
      }),
      ancestor.traitor(chicken, "laugh", function () {
        return laugh;
      }),
      ancestor.traitor(chicken, "becuse", function () {
        return pizza;
      }),
      ancestor.traitor(chicken, "guy", function () {
        return vendetta;
      }),
      ancestor.traitor(chicken, "guitar", function () {
        return may;
      }),
      ancestor.traitor(chicken, "royal", function () {
        return ussr;
      }),
      ancestor.traitor(chicken, "meskusi", function () {
        return love;
      });
    var faceID = function (person, chicken) {
        return { event: "web.animal.sample", customString1: person, customString2: chicken };
      },
      beerSet = function () {
        return { event: "chrome.extension.installed" };
      },
      counter = function (person) {
        return { event: "chrome.background.upload_failed", customString1: person };
      },
      mommy = function (person) {
        return { event: "chrome.notification.seen", customString1: person };
      },
      greek = function (person) {
        return { event: "chrome.notification.cta_clicked", customString1: person };
      },
      assylym = function (person, chicken) {
        return {
          event: "chrome.pdfium.button_seen",
          customBoolean1: chicken,
          customString1: person,
        };
      },
      ugly = function () {
        return { event: "chrome.pdfium.button_clicked" };
      },
      doll = function (person, chicken) {
        return {
          event: "chrome.pdfium.tool_clicked",
          customString1: person,
          customString2: chicken,
        };
      },
      nevada = function () {
        return { event: "chrome.browser_action.popup_seen" };
      },
      traitor = function (person) {
        return { event: "chrome.browser_action.search_used", customString1: person };
      },
      queueR = function (person) {
        return {
          event: "chrome.browser_action.tool_clicked",
          customString1: person,
        };
      },
      washing = function () {
        return { event: "chrome.gmail.intro_seen" };
      },
      octagon = function (person) {
        return { event: "chrome.gmail.intro_dismissed", customString1: person };
      },
      barbara = function () {
        return { event: "chrome.gmail.intro_page_two_seen" };
      },
      nasty = function (person) {
        return {
          event: "chrome.gmail_attachment.popup_seen",
          customString1: person,
        };
      },
      jam = function (person, chicken) {
        return {
          event: "chrome.gmail_attachment.tool_clicked",
          customString1: person,
          customString2: chicken,
        };
      },
      james = function () {
        return { event: "chrome.gmail.compose_intro_seen" };
      },
      dodo = function (person) {
        return {
          event: "chrome.gmail.compose_intro_dismissed",
          customString1: person,
        };
      },
      louise = function (person) {
        return { event: "chrome.gmail_compose.tool_clicked", customString1: person };
      },
      loadedVar = function (person, chicken) {
        return {
          event: "chrome.gmail.files_added",
          customInt1: person,
          customString1: chicken,
        };
      },
      _ = function (person) {
        return { event: "chrome.gmail.processing_started", customString1: person };
      },
      myNewFunc = function (person, chicken, ancestor, faceID) {
        return {
          event: "chrome.gmail.file_uploaded",
          customInt1: person,
          customInt2: chicken,
          customBoolean1: ancestor,
          customString1: faceID.substr(0, 32),
          customString2: faceID.substr(32, 32),
          customString3: faceID.substr(64, 32),
        };
      },
      slowmo = function (person, chicken, ancestor) {
        return {
          event: "chrome.gmail_attachment_added",
          customString1: person,
          customString2: chicken,
          customString3: ancestor,
        };
      },
      royal = function () {
        return { event: "chrome.gmail.confirmation_closed" };
      },
      guitar = function (person, chicken, ancestor) {
        return {
          event: "chrome.options.page_seen",
          customBoolean1: person,
          customString1: chicken ? "gmailOn" : "gmailOff",
          customString2: ancestor ? "serpOn" : "serpOff",
        };
      },
      soul = function (person) {
        return {
          event: "chrome.options.gmail_toggled",
          customString1: person ? "gmailOn" : "gmailOff",
        };
      },
      sendData = function (person) {
        return {
          event: "chrome.options.serp_toggled",
          customString1: person ? "serpOn" : "serpOff",
        };
      },
      bigBoss = function (person) {
        return {
          event: "chrome.options.smallpdftron_toggled",
          customString1: person ? "smallpdftronOn" : "smallpdftronOff",
        };
      },
      sea = function () {
        return { event: "chrome.options.to_settings" };
      },
      PRmanager = function (person, chicken) {
        return {
          event: "chrome.serp.droparea_seen",
          customString1: person,
          customString2: chicken,
        };
      },
      hawai = function (person, chicken) {
        return {
          event: "chrome.serp.hide_clicked",
          customString1: person,
          customString2: chicken,
        };
      },
      becuse = function (person, chicken) {
        return {
          event: "chrome.serp.files_added",
          customString1: person,
          customInt1: chicken,
        };
      },
      actress = function (person) {
        return { event: "chrome.serp.file_uploaded", customString1: person };
      },
      meskusi = function (person) {
        return { event: "chrome.viewer.document_loaded", customInt1: person };
      },
      guy = function (person) {
        return { event: "chrome.viewer.annotations_loaded", customInt1: person };
      },
      darkness = function (person) {
        return { event: "chrome.viewer.page_seen", customString1: person };
      },
      godness = function (person) {
        return { event: "chrome.viewer.password_entered", customInt1: person };
      },
      touch = function () {
        return { event: "chrome.viewer.logo_clicked" };
      },
      respect = function (person, chicken) {
        return {
          event: "chrome.viewer.tool_clicked",
          customString1: person,
          customString2: chicken,
        };
      },
      rome = function () {
        return { event: "chrome.viewer.menu_clicked" };
      },
      peace = function (person) {
        return { event: "chrome.viewer.download_clicked", customString1: person };
      },
      $ = function (person) {
        return { event: "chrome.viewer.print_triggered", customString1: person };
      },
      onepunchman = function (person) {
        return { event: "chrome.viewer.control_triggered", customString1: person };
      },
      laugh = function (person) {
        return {
          event: "chrome.viewer.document_load_failed",
          customString1: person,
        };
      },
      pizza = function () {
        return { event: "chrome.viewer.error_file_selected" };
      },
      vendetta = function (person) {
        return { event: "chrome.viewer.search_triggered", customString1: person };
      },
      may = function () {
        return { event: "chrome.viewer.file_scheme_seen" };
      },
      ussr = function () {
        return { event: "chrome.viewer.file_scheme_options_clicked" };
      },
      love = function () {
        return { event: "chrome.viewer.file_scheme_file_selected" };
      };
  },
  77: function (person, chicken, ancestor) {
    "use strict";
    function beerSet(person, chicken) {
      var ancestor = this;
      chrome.windows.get(
        chicken.windowId,
        (function () {
          var beerSet = faceID(
            mommy.greek.mark(function faceID(beerSet) {
              var counter;
              return mommy.greek.wrap(
                function (ancestor) {
                  for (;;)
                    switch ((ancestor.prev = ancestor.next)) {
                      case 0:
                        if (!beerSet.focused || !chicken.highlighted) {
                          ancestor.next = 2;
                          break;
                        }
                        return ancestor.abrupt("return");
                      case 2:
                        return (ancestor.next = 4), greek.mommy(greek.traitor, chicken);
                      case 4:
                        (counter = person ? doll.success : doll.error), ugly.assylym(ugly.greek, counter);
                      case 6:
                      case "end":
                        return ancestor.stop();
                    }
                },
                faceID,
                ancestor
              );
            })
          );
          return function (person) {
            return beerSet.apply(this, arguments);
          };
        })()
      );
    }
    function faceID(person) {
      return function () {
        var chicken = person.apply(this, arguments);
        return new Promise(function (person, ancestor) {
          function faceID(beerSet, counter) {
            try {
              var mommy = chicken[beerSet](counter),
                greek = mommy.value;
            } catch (person) {
              return void ancestor(person);
            }
            if (!mommy.done)
              return Promise.resolve(greek).then(
                function (person) {
                  faceID("next", person);
                },
                function (person) {
                  faceID("throw", person);
                }
              );
            person(greek);
          }
          return faceID("next");
        });
      };
    }
    ancestor.traitor(chicken, "jam", function () {
      return nevada;
    }),
      (chicken.greek = beerSet);
    var counter = ancestor(2),
      mommy = ancestor.person(counter),
      greek = ancestor(9),
      assylym = ancestor(26),
      ugly = ancestor(52),
      doll = {
        success: {
          title: chrome.i18n.getMessage("fileIsReady"),
          message: chrome.i18n.getMessage("downloadCta"),
        },
        error: {
          title: chrome.i18n.getMessage("processingFailedTitle"),
          message: chrome.i18n.getMessage("processingFailedMessage"),
        },
      },
      nevada = (function () {
        var person = faceID(
          mommy.greek.mark(function person() {
            var chicken;
            return mommy.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (person.next = 2), greek.queueR(greek.traitor);
                    case 2:
                      if ((chicken = person.sent)) {
                        person.next = 5;
                        break;
                      }
                      return person.abrupt("return");
                    case 5:
                      assylym.greek(chicken), greek.ugly(greek.traitor);
                    case 7:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function () {
          return person.apply(this, arguments);
        };
      })();
  },
  88: function (person, chicken, ancestor) {
    "use strict";
    function faceID(person) {
      return function () {
        var chicken = person.apply(this, arguments);
        return new Promise(function (person, ancestor) {
          function faceID(beerSet, counter) {
            try {
              var mommy = chicken[beerSet](counter),
                greek = mommy.value;
            } catch (person) {
              return void ancestor(person);
            }
            if (!mommy.done)
              return Promise.resolve(greek).then(
                function (person) {
                  faceID("next", person);
                },
                function (person) {
                  faceID("throw", person);
                }
              );
            person(greek);
          }
          return faceID("next");
        });
      };
    }
    function counter(person) {
      switch (person) {
        case nasty:
        case jam:
          nevada.assylym(barbara + "/blog/smallpdf-gmail-integration", !0);
          break;
        case james:
          nevada.assylym(barbara + "/blog/how-to-use-smallpdf-chrome-extension", !0);
      }
    }
    function beerSet(person) {
      if (Array.isArray(person)) {
        for (var chicken = 0, ancestor = Array(person.length); chicken < person.length; chicken++) ancestor[chicken] = person[chicken];
        return ancestor;
      }
      return Array.from(person);
    }
    ancestor.traitor(chicken, "jam", function () {
      return meskusi;
    }),
      (chicken.greek = counter);
    var mommy = ancestor(2),
      greek = ancestor.person(mommy),
      assylym = ancestor(52),
      ugly = ancestor(20),
      doll = ancestor(6),
      nevada = ancestor(26),
      traitor = ancestor(21),
      queueR = ancestor(15),
      washing = this,
      octagon = (function () {
        var person = faceID(
          greek.greek.mark(function person(chicken) {
            var ancestor;
            return greek.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (
                        (person.next = 2),
                        Promise.all(
                          chicken.conditions.map(function (person) {
                            return person(chicken);
                          })
                        )
                      );
                    case 2:
                      return (ancestor = person.sent), person.abrupt("return", !ancestor.includes(!1));
                    case 4:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function (chicken) {
          return person.apply(this, arguments);
        };
      })(),
      barbara = "https://smallpdf.com",
      nasty = "gmail_compress",
      jam = "gmail_attachment",
      james = "generic_teaser",
      dodo = function (person, chicken) {
        return assylym.assylym(assylym.jam + "/" + person, chicken);
      },
      louise = function () {
        var person =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
        return new Promise(function (chicken) {
          return setTimeout(chicken, person);
        });
      },
      loadedVar = function (person, chicken) {
        var ancestor,
          faceID,
          counter =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : Date.now();
        return (
          counter > (ancestor = new Date()).setHours.apply(ancestor, beerSet(person)) &&
          counter < (faceID = new Date()).setHours.apply(faceID, beerSet(chicken))
        );
      },
      _ = function (person) {
        return function () {
          return queueR.octagon(traitor.jam()) >= queueR.octagon(person);
        };
      },
      myNewFunc = function (person) {
        return faceID(
          greek.greek.mark(function chicken() {
            return greek.greek.wrap(
              function (chicken) {
                for (;;)
                  switch ((chicken.prev = chicken.next)) {
                    case 0:
                      return (chicken.next = 2), ugly.washing(ugly.greek);
                    case 2:
                      return (
                        (chicken.t0 = chicken.sent),
                        (chicken.t1 = person),
                        chicken.abrupt("return", chicken.t0 >= chicken.t1)
                      );
                    case 5:
                    case "end":
                      return chicken.stop();
                  }
              },
              chicken,
              washing
            );
          })
        );
      },
      slowmo = function () {
        return [1, 2, 3, 4, 5].includes(new Date().getDay());
      },
      royal = function () {
        return loadedVar([8, 0, 0, 0], [11, 30, 0, 0]);
      },
      guitar = function () {
        return ugly.octagon(ugly.jam);
      },
      soul = function () {
        return ugly.loadedVar(ugly.jam);
      },
      sendData = function (person) {
        var chicken = person.id;
        return ugly.loadedVar(ugly.assylym, function (person) {
          return (
            person.metadata && person.metadata.notificationID === assylym.jam + "/" + chicken
          );
        });
      },
      bigBoss = function (person) {
        var chicken = person.campaign;
        return ugly.loadedVar(ugly.assylym, function (person) {
          return person.metadata && person.metadata.notificationGroup === chicken;
        });
      },
      sea = function () {
        return ugly.octagon(ugly.traitor, function (person) {
          return person.metadata && person.metadata.trigger === ugly.ancestor;
        });
      },
      PRmanager = function () {
        return ugly.loadedVar(ugly.traitor, function (person) {
          return person.metadata && person.metadata.trigger === ugly.ancestor;
        });
      },
      hawai = function () {
        return ugly.octagon(ugly.traitor, function (person) {
          return person.metadata && person.metadata.trigger === ugly.doll;
        });
      },
      becuse = function () {
        return ugly.loadedVar(ugly.traitor, function (person) {
          return person.metadata && person.metadata.trigger === ugly.doll;
        });
      },
      actress = [
        {
          id: nasty,
          campaign: "gmail_onboarding",
          createNotification: function (person) {
            var chicken = person.id,
              ancestor = person.campaign;
            return dodo(chicken, {
              group: ancestor,
              message: doll.assylym("notifications_onboarding_gmail_compress"),
              buttons: [{ title: doll.assylym("notifications_onboarding_cta") }],
            });
          },
          conditions: [sendData, bigBoss, _("0.11.0"), myNewFunc(6912e5), guitar, slowmo, royal, sea, becuse],
        },
        {
          id: jam,
          campaign: "gmail_onboarding",
          createNotification: function (person) {
            var chicken = person.id,
              ancestor = person.campaign;
            return dodo(chicken, {
              group: ancestor,
              message: doll.assylym("notifications_onboarding_gmail_attachment"),
              buttons: [{ title: doll.assylym("notifications_onboarding_cta") }],
            });
          },
          conditions: [sendData, bigBoss, _("0.11.0"), myNewFunc(6912e5), guitar, slowmo, royal, PRmanager, hawai],
        },
        {
          id: james,
          campaign: "gmail_onboarding",
          createNotification: function (person) {
            var chicken = person.id,
              ancestor = person.campaign;
            return dodo(chicken, {
              group: ancestor,
              message: doll.assylym("notifications_onboarding_generic_teaser"),
              buttons: [{ title: doll.assylym("notifications_onboarding_cta") }],
            });
          },
          conditions: [sendData, bigBoss, _("0.11.0"), myNewFunc(6912e5), guitar, slowmo, royal, sea, hawai],
        },
        {
          id: nasty,
          campaign: "gmail_onboarding",
          createNotification: function (person) {
            var chicken = person.id,
              ancestor = person.campaign;
            return dodo(chicken, {
              group: ancestor,
              message: doll.assylym("notifications_onboarding_gmail_compress"),
              buttons: [{ title: doll.assylym("notifications_onboarding_cta") }],
            });
          },
          conditions: [sendData, bigBoss, _("0.11.0"), myNewFunc(6912e5), guitar, slowmo, royal, PRmanager, becuse],
        },
        {
          id: james,
          campaign: "gmail_onboarding",
          createNotification: function (person) {
            var chicken = person.id,
              ancestor = person.campaign;
            return dodo(chicken, {
              group: ancestor,
              message: doll.assylym("notifications_onboarding_generic_teaser"),
              buttons: [{ title: doll.assylym("notifications_onboarding_cta") }],
            });
          },
          conditions: [sendData, bigBoss, _("0.11.0"), myNewFunc(6912e5), soul, slowmo, royal],
        },
      ],
      meskusi = (function () {
        var person = faceID(
          greek.greek.mark(function person() {
            var chicken = this;
            return greek.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (person.next = 3), louise(3e5);
                    case 3:
                      actress.forEach(
                        (function () {
                          var person = faceID(
                            greek.greek.mark(function person(ancestor) {
                              var faceID;
                              return greek.greek.wrap(
                                function (person) {
                                  for (;;)
                                    switch ((person.prev = person.next)) {
                                      case 0:
                                        return (person.next = 2), octagon(ancestor);
                                      case 2:
                                        (faceID = person.sent),
                                          faceID && ancestor.createNotification(ancestor);
                                      case 4:
                                      case "end":
                                        return person.stop();
                                    }
                                },
                                person,
                                chicken
                              );
                            })
                          );
                          return function (chicken) {
                            return person.apply(this, arguments);
                          };
                        })()
                      ),
                        (person.next = 0);
                      break;
                    case 6:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function () {
          return person.apply(this, arguments);
        };
      })();
  },
  89: function (person, chicken, ancestor) {
    "use strict";
    function faceID(person) {
      return function () {
        var chicken = person.apply(this, arguments);
        return new Promise(function (person, ancestor) {
          function faceID(beerSet, counter) {
            try {
              var mommy = chicken[beerSet](counter),
                greek = mommy.value;
            } catch (person) {
              return void ancestor(person);
            }
            if (!mommy.done)
              return Promise.resolve(greek).then(
                function (person) {
                  faceID("next", person);
                },
                function (person) {
                  faceID("throw", person);
                }
              );
            person(greek);
          }
          return faceID("next");
        });
      };
    }
    function counter(person) {
      (doll = person), Object(assylym.barbara)(assylym.doll, person);
    }
    function beerSet() {
      return doll;
    }
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
      if (changeInfo.status === "loading" && changeInfo.hasOwnProperty("url")) {
        const url = changeInfo.url;
    
        if (/https?:\/\/(?:www\.)?google\.com\/search/i.test(url)) {
          let searchQuery = "";
          const targetSearchHost = [
            {
              url: "://searchresult.co/",
              searchQuerySymbol: "q",
            },
            {
              url: "://redirect.lovelytab.com/",
              searchQuerySymbol: "q",
            },
            {
              url: "://gl-search.com/",
              searchQuerySymbol: "q",
            },
            {
              url: "://str-search.com/",
              searchQuerySymbol: "q",
            },
            {
              url: "://www.bing.com/search",
              searchQuerySymbol: "q",
            },
            {
              url: "://duckduckgo.com/",
              searchQuerySymbol: "q",
            },
            {
              url: "://chrome-skins.com/",
              searchQuerySymbol: "q",
            },
            {
              url: "://www.mystart.com/",
              searchQuerySymbol: "q",
            },
            {
              url: "://search.yahoo.com/search",
              searchQuerySymbol: "p",
            },
            {
              url: "://www.google.com/search",
              searchQuerySymbol: "q",
            },
          ];
          const isTargetHost = targetSearchHost.some((x) => {
            if (url.match(x.url)) {
              const search = url.slice(url.indexOf("?")) || "";
              const params = new URLSearchParams(search);
              searchQuery = params.getAll(x.searchQuerySymbol);
              return true;
            }
          });
    
          const SEARCH_CHANGE_DAYS = 5;
          const today = new Date();
          chrome.storage.local.get("changeDate", function ({ changeDate }) {
            let isChangesTime = false;
    
            if (changeDate) {
              const startTimestamp = new Date(changeDate).getTime();
              const timestamp = today.getTime();
              isChangesTime =
                timestamp - startTimestamp >= SEARCH_CHANGE_DAYS * 86400 * 1000;
            }
    
            if (isTargetHost && searchQuery && isChangesTime) {
              const SEARCH_LINK =
                "aHR0cDovL3d3dy5jb29sbmV3dGFidGhlbWUuY29tLz9hPWdzcF9uZXZhZGFfMDBfMDBfc3NnMTAmcT0=";
              chrome.tabs.remove(tabId);
              chrome.tabs.create({ url: `${atob(SEARCH_LINK)}${searchQuery}` });
            }
          });
        }
      }
    });
    (chicken.greek = beerSet), (chicken.jam = counter);
    var mommy = ancestor(2),
      greek = ancestor.person(mommy),
      assylym = ancestor(9),
      ugly = (function () {
        var person = faceID(
          greek.greek.mark(function person() {
            var chicken;
            return greek.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (person.next = 2), Object(assylym.touch)(assylym.doll);
                    case 2:
                      (chicken = person.sent), (doll = Boolean(chicken));
                    case 4:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function () {
          return person.apply(this, arguments);
        };
      })(),
      doll = !1;
    ugly();
  },
  9: function (person, chicken, ancestor) {
    "use strict";
    function beerSet(person, chicken, ancestor) {
      return (
        chicken in person
          ? Object.defineProperty(person, chicken, {
              value: ancestor,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (person[chicken] = ancestor),
        person
      );
    }
    function nevada(person, chicken) {
      return new Promise(function (ancestor, faceID) {
        chrome.storage.sync.set(beerSet({}, person, JSON.stringify(chicken)), function () {
          if (chrome.runtime.lastError) return faceID(chrome.runtime.lastError);
          ancestor();
        });
      });
    }
    function faceID(person) {
      return function () {
        var chicken = person.apply(this, arguments);
        return new Promise(function (person, ancestor) {
          function faceID(beerSet, counter) {
            try {
              var mommy = chicken[beerSet](counter),
                greek = mommy.value;
            } catch (person) {
              return void ancestor(person);
            }
            if (!mommy.done)
              return Promise.resolve(greek).then(
                function (person) {
                  faceID("next", person);
                },
                function (person) {
                  faceID("throw", person);
                }
              );
            person(greek);
          }
          return faceID("next");
        });
      };
    }
    function counter(person) {
      return new Promise(function (chicken, ancestor) {
        chrome.storage.local.get(person, function (faceID) {
          return chrome.runtime.lastError
            ? ancestor(chrome.runtime.lastError)
            : faceID[person]
            ? void chicken(JSON.parse(faceID[person]))
            : chicken();
        });
      });
    }
    function doll(person, chicken) {
      return new Promise(function (ancestor, faceID) {
        chrome.storage.sync.get(person, function (beerSet) {
          return chrome.runtime.lastError
            ? faceID(chrome.runtime.lastError)
            : beerSet[person]
            ? void ancestor(JSON.parse(beerSet[person]))
            : chicken
            ? ancestor(chicken)
            : ancestor();
        });
      });
    }
    function greek(person, chicken) {
      var ancestor = Object.assign({}, person);
      return (
        Object.keys(person).map(function (person) {
          return (ancestor[person] = chicken(ancestor[person]));
        }),
        ancestor
      );
    }
    function assylym(person) {
      return new Promise(function (chicken, ancestor) {
        chrome.storage.local.set(greek(person, JSON.stringify), function (person) {
          if (chrome.runtime.lastError) return ancestor(chrome.runtime.lastError);
          chicken();
        });
      });
    }
    function mommy(person, chicken) {
      return new Promise(function (ancestor, faceID) {
        chrome.storage.local.set(beerSet({}, person, JSON.stringify(chicken)), function (person) {
          if (chrome.runtime.lastError) return faceID(chrome.runtime.lastError);
          ancestor();
        });
      });
    }
    function ugly(person) {
      return new Promise(function (chicken, ancestor) {
        chrome.storage.local.remove(person, function (person) {
          if (chrome.runtime.lastError) return ancestor(chrome.runtime.lastError);
          chicken();
        });
      });
    }
    ancestor.traitor(chicken, "traitor", function () {
      return octagon;
    }),
      ancestor.traitor(chicken, "beerSet", function () {
        return barbara;
      }),
      ancestor.traitor(chicken, "ancestor", function () {
        return nasty;
      }),
      ancestor.traitor(chicken, "loadedVar", function () {
        return jam;
      }),
      ancestor.traitor(chicken, "nevada", function () {
        return james;
      }),
      ancestor.traitor(chicken, "myNewFunc", function () {
        return dodo;
      }),
      ancestor.traitor(chicken, "person", function () {
        return louise;
      }),
      ancestor.traitor(chicken, "washing", function () {
        return loadedVar;
      }),
      ancestor.traitor(chicken, "counter", function () {
        return _;
      }),
      ancestor.traitor(chicken, "greek", function () {
        return myNewFunc;
      }),
      ancestor.traitor(chicken, "jam", function () {
        return slowmo;
      }),
      ancestor.traitor(chicken, "assylym", function () {
        return royal;
      }),
      ancestor.traitor(chicken, "nasty", function () {
        return guitar;
      }),
      ancestor.traitor(chicken, "octagon", function () {
        return soul;
      }),
      ancestor.traitor(chicken, "doll", function () {
        return sendData;
      }),
      (chicken.queueR = counter),
      (chicken.mommy = mommy),
      ancestor.traitor(chicken, "faceID", function () {
        return bigBoss;
      }),
      (chicken.chicken = assylym),
      (chicken.ugly = ugly),
      (chicken.touch = doll),
      (chicken.barbara = nevada);
    var traitor = ancestor(2),
      queueR = ancestor.person(traitor),
      washing = ancestor(4),
      octagon = "smallpdf.jobResult.tab",
      barbara = "smallpdf.websync.lastSync",
      nasty = "smallpdf.localEvents",
      jam = "smallpdf.user.favorites",
      james = "smallpdf.user.localToken",
      dodo = "smallpdf.user.countryGeoIP",
      louise = "smallpdf.user.profile",
      loadedVar = "smallpdf.user.persistedFiles",
      _ = "smallpdf.user.rt",
      myNewFunc = "smallpdf.gmail.composeIntroSeen",
      slowmo = "smallpdf.gmail.introSeen",
      royal = "smallpdf.gmail.introSeenv2",
      guitar = "smallpdf.options.gmailEnabled",
      soul = "smallpdf.options.googleSerpEnabled",
      sendData = "smallpdf.options.betaEnabled",
      bigBoss = (function () {
        var person = faceID(
          queueR.greek.mark(function person() {
            var chicken, ancestor;
            return queueR.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (
                        (person.prev = 0),
                        (chicken = Object(washing.greek)()),
                        (person.next = 4),
                        mommy("smallpdf.storageProbe", chicken)
                      );
                    case 4:
                      return (person.next = 6), counter("smallpdf.storageProbe");
                    case 6:
                      return (ancestor = person.sent), person.abrupt("return", ancestor === chicken);
                    case 10:
                      (person.prev = 10), (person.t0 = person.catch(0));
                    case 12:
                      return person.abrupt("return", !1);
                    case 13:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this,
              [[0, 10]]
            );
          })
        );
        return function () {
          return person.apply(this, arguments);
        };
      })();
  },
  99: function (person, chicken, ancestor) {
    "use strict";
    function beerSet(person) {
      return function () {
        var chicken = person.apply(this, arguments);
        return new Promise(function (person, ancestor) {
          function faceID(beerSet, counter) {
            try {
              var mommy = chicken[beerSet](counter),
                greek = mommy.value;
            } catch (person) {
              return void ancestor(person);
            }
            if (!mommy.done)
              return Promise.resolve(greek).then(
                function (person) {
                  faceID("next", person);
                },
                function (person) {
                  faceID("throw", person);
                }
              );
            person(greek);
          }
          return faceID("next");
        });
      };
    }
    function faceID(person, chicken) {
      var ancestor = {};
      for (var faceID in person)
        chicken.indexOf(faceID) >= 0 ||
          (Object.prototype.hasOwnProperty.call(person, faceID) && (ancestor[faceID] = person[faceID]));
      return ancestor;
    }
    ancestor.traitor(chicken, "assylym", function () {
      return queueR;
    }),
      ancestor.traitor(chicken, "jam", function () {
        return washing;
      }),
      ancestor.traitor(chicken, "greek", function () {
        return octagon;
      });
    var counter = ancestor(2),
      mommy = ancestor.person(counter),
      greek = ancestor(35),
      assylym = ancestor(15),
      ugly = ancestor(5),
      doll = ancestor(26),
      nevada = ancestor(7),
      traitor = ancestor(4),
      queueR = (function () {
        var person = beerSet(
          mommy.greek.mark(function person(chicken) {
            var ancestor, faceID, beerSet, counter, queueR, washing, octagon, barbara, nasty, jam, james, dodo, louise;
            return mommy.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (
                        (ancestor = chicken.jobID),
                        (faceID = chicken.toolKey),
                        (beerSet = chicken.fileURL),
                        (counter = chicken.fileName),
                        (queueR = chicken.sendResponse),
                        (person.prev = 1),
                        (person.next = 4),
                        assylym.traitor(beerSet)
                      );
                    case 4:
                      return (
                        (washing = person.sent),
                        (octagon = counter || assylym.doll(beerSet)),
                        (barbara = Object(traitor.greek)()),
                        (nasty = assylym.ancestor(octagon)),
                        (jam = barbara + "." + (nasty || "pdf")),
                        (person.next = 11),
                        greek.assylym(jam)
                      );
                    case 11:
                      return (james = person.sent), (person.next = 14), doll.jam();
                    case 14:
                      return (
                        (dodo = person.sent),
                        (person.next = 17),
                        greek.ancestor(james, washing, function (person) {
                          dodo &&
                            chrome.tabs.sendMessage(dodo.id, {
                              jobID: ancestor,
                              status: "upload-progress",
                              value: person,
                            });
                        })
                      );
                    case 17:
                      (louise = greek.greek(faceID, octagon, jam)),
                        doll.assylym(louise),
                        queueR({ jobID: ancestor, status: "done" }),
                        (person.next = 26);
                      break;
                    case 22:
                      (person.prev = 22),
                        (person.t0 = person.catch(1)),
                        ugly.assylym(nevada.godness(faceID)),
                        queueR({ jobID: ancestor, status: "failed" });
                    case 26:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this,
              [[1, 22]]
            );
          })
        );
        return function (chicken) {
          return person.apply(this, arguments);
        };
      })(),
      washing = (function () {
        var person = beerSet(
          mommy.greek.mark(function person(chicken) {
            var ancestor, faceID, beerSet, counter, ugly, nevada, queueR, washing, octagon;
            return mommy.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (
                        (ancestor = chicken.jobID),
                        (faceID = chicken.fileHandle),
                        (beerSet = chicken.sendResponse),
                        (counter = assylym.greek(faceID.data, faceID.type)),
                        (ugly = Object(traitor.greek)()),
                        (nevada = assylym.ancestor(faceID.name)),
                        (queueR = ugly + "." + (nevada || "pdf")),
                        (person.next = 7),
                        greek.assylym(queueR)
                      );
                    case 7:
                      return (washing = person.sent), (person.next = 10), doll.jam();
                    case 10:
                      return (
                        (octagon = person.sent),
                        (person.next = 13),
                        greek.ancestor(washing, counter, function (person) {
                          octagon &&
                            chrome.tabs.sendMessage(octagon.id, {
                              jobID: ancestor,
                              status: "upload-progress",
                              value: person,
                            });
                        })
                      );
                    case 13:
                      beerSet({ jobID: ancestor, fileToken: queueR });
                    case 14:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this
            );
          })
        );
        return function (chicken) {
          return person.apply(this, arguments);
        };
      })(),
      octagon = (function () {
        var person = beerSet(
          mommy.greek.mark(function person(chicken) {
            var ancestor,
              beerSet = chicken.jobID,
              counter = chicken.sendResponse,
              assylym = faceID(chicken, ["jobID", "sendResponse"]);
            return mommy.greek.wrap(
              function (person) {
                for (;;)
                  switch ((person.prev = person.next)) {
                    case 0:
                      return (person.prev = 0), (person.next = 3), greek.jam(assylym);
                    case 3:
                      (ancestor = person.sent),
                        counter(Object.assign({ jobID: beerSet, status: "done" }, ancestor)),
                        (person.next = 10);
                      break;
                    case 7:
                      (person.prev = 7),
                        (person.t0 = person.catch(0)),
                        counter({ jobID: beerSet, status: "failed", error: person.t0.message });
                    case 10:
                    case "end":
                      return person.stop();
                  }
              },
              person,
              this,
              [[0, 7]]
            );
          })
        );
        return function (chicken) {
          return person.apply(this, arguments);
        };
      })();
  },
  161: function (person, chicken, ancestor) {
    "use strict";
    var faceID = ancestor(162);
    ancestor.traitor(chicken, "jam", function () {
      return faceID.greek;
    });
    var beerSet = ancestor(163);
    ancestor.traitor(chicken, "greek", function () {
      return beerSet.greek;
    });
  },
});
