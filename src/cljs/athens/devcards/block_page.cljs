(ns athens.devcards.block-page
  (:require
    [athens.db :as db]
    [athens.devcards.blocks :refer [block-el]]
    [athens.router :refer [navigate-uid]]
    [cljsjs.react]
    [cljsjs.react.dom]
    [devcards.core :refer-macros [defcard-rg]]
    [komponentit.autosize :as autosize]
    [posh.reagent :refer [transact! pull]]
    [re-frame.core :refer [subscribe]]))


;;; Globals


(def datoms
  [{:db/id          2381,
    :block/uid      "OaSVyM_nr",
    :block/open     true,
    :node/title     "Athens FAQ",
    :block/children [{:db/id          2158,
                      :block/uid      "BjIm6GeRP",
                      :block/string   "Why open-source?",
                      :block/open     true,
                      :block/order    3,
                      :block/children [{:db/id        2163,
                                        :block/uid    "GNaf3XzpE",
                                        :block/string "The short answer is the security and privacy of your data.",
                                        :block/open   true,
                                        :block/order  1}
                                       {:db/id          2347,
                                        :block/uid      "jbiKpcmIX",
                                        :block/string   "Firstly, I wouldn't be surprised if Roam was eventually open-sourced.",
                                        :block/open     true,
                                        :block/order    0,
                                        :block/children [{:db/id        2176,
                                                          :block/uid    "gVINXaN8Y",
                                                          :block/string "Suffice it to say that Roam being open-source is undeniably something that the team has already considered. Why is it not open-source already? You'd have to ask the Roam team, but Roam, a business, is not obligated to open-source anything.",
                                                          :block/open   true,
                                                          :block/order  2}
                                                         {:db/id          2346,
                                                          :block/uid      "ZOxwo0K_7",
                                                          :block/string   "The conclusion of the [[Roam White Paper]] states that Roam's vision is a collective, \"open-source\" intelligence.",
                                                          :block/open     true,
                                                          :block/order    0,
                                                          :block/children [{:db/id        2174,
                                                                            :block/uid    "WKWPPSYQa",
                                                                            :block/string "((iWmBJaChO))",
                                                                            :block/open   true,
                                                                            :block/order  0}]}
                                                         {:db/id        2349,
                                                          :block/uid    "VQ-ybRmNh",
                                                          :block/string "In the Roam Slack, I recall Conor saying one eventual goal is to work on a protocol that affords interoperability between open source alternatives. I would share the message but can't find it because of Slack's 10k message limit.",
                                                          :block/open   true,
                                                          :block/order  1}
                                                         {:db/id        2351,
                                                          :block/uid    "PGGS8MFH_",
                                                          :block/string "Ultimately, we don't know when/if Roam will be open-sourced, but it's possible that Athens could accelerate or catalyze this. Regardless, there will always be some who are open-source maximalists and some who want to self-host, because that's probably really the most secure thing you can do (if you know what you're doing).",
                                                          :block/open   true,
                                                          :block/order  3}]}]}]}])


(transact! db/dsdb datoms)


;;; Components


;; TODO: replace " > " with an icon. Get a TypeError when doing this, though. Maybe same problem as "->" issue in Athena results
(defn block-page-el
  [{:block/keys [string children uid]} parents editing-uid]

  [:div
   ;; Parent Context
   [:span {:style {:color "gray"}}
    (interpose
      " > "
      (for [p parents]
        (let [{:keys [node/title block/uid block/string]} p]
          [:span {:key uid :style {:cursor "pointer"} :on-click #(navigate-uid uid)} (or string title)])))]

   ;; Header
   [:div {:data-uid uid :class "block-header"}
    (if (= uid editing-uid)
      [:h1
       [autosize/textarea
        {:value       string
         :style       {:width "100%"}
         :auto-focus  true
         :on-change   (fn [e]
                        ;;(prn (.. e -target -value))
                        (transact! db/dsdb [[:db/add [:block/uid uid] :block/string (.. e -target -value)]]))}]]
      [:h1 (str "• " string)])]

   ;; Children
   [:div (for [child children]
           (let [{:keys [db/id]} child]
             ^{:key id} [block-el child]))]])


(defn block-page-component
  [ident]
  (let [block   @(pull db/dsdb db/block-pull-pattern ident)
        parents (->> @(pull db/dsdb db/parents-pull-pattern ident)
                     (db/shape-parent-query))
        editing-uid @(subscribe [:editing-uid])]
    ;;(prn block parents)
    [block-page-el block parents editing-uid]))


;;; Devcards


(defcard-rg Block-Page
  "pull entity 2347: a block within Athens FAQ"
  [block-page-component 2347])
