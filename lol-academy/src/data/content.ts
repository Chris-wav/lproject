import type { Category } from "../types/types";

export const categories: Category[] = [
  {
    id: "map-awareness",
    title: "Map Awareness",
    icon: "🗺️",
    description:
      "Learn how to read the minimap, track enemy positions, and use vision control to gain a strategic advantage over your opponents.",
    lessons: [
      {
        id: "vision-control",
        title: "Vision Control",
        description: "Learn how to place wards effectively to control the map.",
        difficulty: "beginner",
        questions: [
          {
            id: "vc-q1",
            type: "multiple-choice",
            scenario:
              "It's 5 minutes into the game. You are the support and you have one ward available. Dragon spawns in 2 minutes. Where do you place your ward?",
            options: [
              { id: "a", text: "In the dragon pit" },
              { id: "b", text: "In the river bush near dragon" },
              { id: "c", text: "In the enemy jungle near red buff" },
              { id: "d", text: "In the mid lane bush" },
            ],
            correctAnswer: "b",
            explanation:
              "Warding the river bush gives early vision of enemies approaching dragon before it's too late to react.",
          },
          {
            id: "vc-q2",
            type: "multiple-choice",
            scenario:
              "Your team just killed Baron. The enemy jungler is missing. What is the most important ward to place right now?",
            options: [
              { id: "a", text: "Ward the enemy blue buff" },
              { id: "b", text: "Ward the exit of Baron pit toward mid lane" },
              { id: "c", text: "Ward the dragon pit" },
              { id: "d", text: "Ward the enemy bot lane bush" },
            ],
            correctAnswer: "b",
            explanation:
              "After Baron, your team is vulnerable while doing objectives. Warding the exit prevents the enemy from collapsing on you before you can back or push.",
          },
          {
            id: "vc-q3",
            type: "spot-mistake",
            scenario:
              "Your team is ahead. It's 20 minutes in. Your support places ALL their wards in the bot lane bushes, ignoring the river and enemy jungle entrances. Your jungler then dies to a gank from the enemy mid laner. What went wrong?",
            options: [
              {
                id: "a",
                text: "The jungler should have bought a control ward",
              },
              {
                id: "b",
                text: "Wards were placed in low-priority areas instead of key chokepoints",
              },
              { id: "c", text: "The support should have stayed in base" },
              {
                id: "d",
                text: "The mid laner should have warded for the jungler",
              },
            ],
            correctAnswer: "b",
            explanation:
              "When ahead, vision should cover high-traffic areas like river and jungle entrances — not just lane bushes. This gives your team time to react to flanks.",
          },
        ],
      },
      {
        id: "roaming-reads",
        title: "Roaming Reads",
        description: "Understand when enemies are missing and how to react.",
        difficulty: "intermediate",
        questions: [
          {
            id: "rr-q1",
            type: "multiple-choice",
            scenario:
              "The enemy mid laner has been missing for 30 seconds and you have no vision of them. Your bot lane is pushed up. What should you do?",
            options: [
              { id: "a", text: "Keep farming, it's probably fine" },
              { id: "b", text: "Ping missing and tell bot lane to back off" },
              { id: "c", text: "Immediately recall to base" },
              { id: "d", text: "Invade the enemy jungle" },
            ],
            correctAnswer: "b",
            explanation:
              "When a roaming threat is missing, the safest play is to warn your teammates immediately. A pushed-up bot lane is a perfect target for a roaming mid laner.",
          },
          {
            id: "rr-q2",
            type: "multiple-choice",
            scenario:
              "You're playing mid lane and you see the enemy support leave the bot lane. Your wave is pushed toward enemy tower. What's the best play?",
            options: [
              { id: "a", text: "Roam to bot lane immediately" },
              {
                id: "b",
                text: "Freeze the wave and wait for them to come back",
              },
              {
                id: "c",
                text: "Shove the wave into the tower and roam to bot yourself",
              },
              { id: "d", text: "Back to base and buy items" },
            ],
            correctAnswer: "c",
            explanation:
              "Shoving the wave first denies the enemy mid laner CS while you're gone, and then you can match the roam or create pressure elsewhere.",
          },
          {
            id: "rr-q3",
            type: "spot-mistake",
            scenario:
              "The enemy jungler has been spotted on the top side of the map. Your ADC continues to push the bot lane all the way to the enemy tower without any vision wards placed. Three seconds later, the enemy jungler appears from the river bush and kills the ADC. What was the mistake?",
            options: [
              { id: "a", text: "The ADC should have built more armor" },
              {
                id: "b",
                text: "The ADC pushed without vision in a known danger zone",
              },
              { id: "c", text: "The support should have engaged first" },
              {
                id: "d",
                text: "The jungler should have countered the enemy jungler",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Pushing deep without vision is extremely risky. Even if the jungler was spotted top, they can cross the map quickly. Always ward before extending.",
          },
        ],
      },
      {
        id: "wave-tracking",
        title: "Wave Tracking",
        description:
          "Learn how minion waves affect rotations, roams, and map pressure.",
        difficulty: "beginner",
        questions: [
          {
            id: "wt-q1",
            type: "multiple-choice",
            scenario:
              "The enemy mid laner leaves lane to roam bot, but their wave is slow pushing toward your tower. What is the best response?",
            options: [
              { id: "a", text: "Follow instantly without looking at the wave" },
              {
                id: "b",
                text: "Stay, collect the wave, and ping the roam",
              },
              { id: "c", text: "Recall immediately" },
              { id: "d", text: "Hide in the river bush and wait" },
            ],
            correctAnswer: "b",
            explanation:
              "If the wave is coming toward you, the enemy loses farm and experience by roaming. Punish the roam by collecting the wave and warning your team.",
          },
          {
            id: "wt-q2",
            type: "multiple-choice",
            scenario:
              "You crash a large minion wave into the enemy mid tower. The enemy mid laner must stay to farm it. What can you do next?",
            options: [
              { id: "a", text: "Look for a roam or help with river vision" },
              { id: "b", text: "Stand still in lane and wait" },
              { id: "c", text: "Use all abilities on the next wave instantly" },
              { id: "d", text: "Walk into the enemy base" },
            ],
            correctAnswer: "a",
            explanation:
              "A crashed wave creates a timing window. While the enemy clears under tower, you can roam, ward, or help secure river control.",
          },
          {
            id: "wt-q3",
            type: "spot-mistake",
            scenario:
              "Your bot lane leaves lane to help with a river skirmish while a huge enemy wave is about to crash into their tower. The fight ends with no kills, but they lose two full waves and turret plates. What was the mistake?",
            options: [
              {
                id: "a",
                text: "They rotated at the wrong time and gave up too much farm",
              },
              { id: "b", text: "They should have used more summoner spells" },
              { id: "c", text: "They needed more attack speed" },
              { id: "d", text: "They should have fought under enemy tower" },
            ],
            correctAnswer: "a",
            explanation:
              "Wave state matters. Leaving a massive wave without gaining anything puts your lane behind in gold, XP, and pressure.",
          },
        ],
      },
      {
        id: "jungle-tracking",
        title: "Jungle Tracking",
        description:
          "Predict the enemy jungler’s pathing and avoid dangerous map zones.",
        difficulty: "intermediate",
        questions: [
          {
            id: "jt-q1",
            type: "multiple-choice",
            scenario:
              "The enemy jungler started on red buff and was seen pathing toward top side. It's now 3:10. Which lane is most likely in danger?",
            options: [
              { id: "a", text: "Top lane" },
              { id: "b", text: "Bot lane" },
              { id: "c", text: "No lane is in danger yet" },
              { id: "d", text: "Only mid lane" },
            ],
            correctAnswer: "a",
            explanation:
              "A jungler pathing upward from red side is commonly looking for a top-side play around the early gank timing.",
          },
          {
            id: "jt-q2",
            type: "multiple-choice",
            scenario:
              "You are top lane with no ward, and the enemy jungler has not shown on the map for over a minute. Your wave is pushed far forward. What is the best play?",
            options: [
              { id: "a", text: "Keep pressuring hard for tower damage" },
              { id: "b", text: "Back off until you know where the jungler is" },
              { id: "c", text: "Fight the enemy top laner immediately" },
              { id: "d", text: "Walk into the enemy jungle alone" },
            ],
            correctAnswer: "b",
            explanation:
              "If the jungler is missing and you are overextended without vision, you should assume you are vulnerable and back off.",
          },
          {
            id: "jt-q3",
            type: "spot-mistake",
            scenario:
              "Your mid laner sees the enemy jungler on a ward near raptors heading bot side. Despite this, your bot lane keeps trading aggressively with no flash and no river ward. They die to a gank 10 seconds later. What went wrong?",
            options: [
              { id: "a", text: "Bot lane ignored clear jungle information" },
              { id: "b", text: "Mid lane should have recalled" },
              { id: "c", text: "Support should have sold their ward item" },
              { id: "d", text: "Top lane should have teleported bot" },
            ],
            correctAnswer: "a",
            explanation:
              "Tracking the jungler only helps if your team respects the information. Continuing to play aggressively into a known gank path is the mistake.",
          },
        ],
      },
    ],
  },
  {
    id: "decision-making",
    title: "Decision Making",
    icon: "⚔️",
    description:
      "Master the art of in-game decision making — from objective priority to knowing when to fight or disengage.",
    lessons: [
      {
        id: "objective-priority",
        title: "Objective Priority",
        description: "Learn when to take objectives and when to back off.",
        difficulty: "beginner",
        questions: [
          {
            id: "op-q1",
            type: "multiple-choice",
            scenario:
              "Your team just won a teamfight 5v5 near Baron. All enemies are dead with respawn timers of 40+ seconds. What should you do?",
            options: [
              { id: "a", text: "Chase the enemies to their base" },
              { id: "b", text: "Take Baron and then push a lane" },
              { id: "c", text: "Recall and buy items" },
              { id: "d", text: "Take dragon instead" },
            ],
            correctAnswer: "b",
            explanation:
              "With 40+ second timers, you have enough time to safely take Baron and then use the buff to push and take towers or inhibitors.",
          },
          {
            id: "op-q2",
            type: "multiple-choice",
            scenario:
              "Dragon is spawning in 10 seconds. Your team is 4v5 (one teammate just died). The enemy team is fully alive and nearby. Do you contest?",
            options: [
              { id: "a", text: "Yes, dragon is always worth it" },
              { id: "b", text: "No, back off and wait for your teammate" },
              { id: "c", text: "Send one person to steal with Smite" },
              { id: "d", text: "Fight the enemy team first" },
            ],
            correctAnswer: "b",
            explanation:
              "Fighting 4v5 near an objective is high risk. Losing the fight gives the enemy both the kill advantage AND the dragon. Backing off is the safer play.",
          },
          {
            id: "op-q3",
            type: "spot-mistake",
            scenario:
              "Your team wins a fight in the mid lane. Instead of taking the nearby Baron, your team decides to chase the one surviving enemy all the way to their base and dies to the enemy turrets. The enemy team respawns and takes Baron uncontested. What went wrong?",
            options: [
              { id: "a", text: "Your team should have bought Grievous Wounds" },
              {
                id: "b",
                text: "Your team chased instead of taking the free objective",
              },
              {
                id: "c",
                text: "Your ADC should have stayed to take Baron alone",
              },
              { id: "d", text: "The support should have peeled for the team" },
            ],
            correctAnswer: "b",
            explanation:
              "Chasing a single kill into enemy territory is rarely worth it. A free Baron buff is far more valuable than one kill, especially when you risk dying to turrets.",
          },
        ],
      },
      {
        id: "when-to-fight",
        title: "When to Fight",
        description: "Recognize when you have the advantage to engage.",
        difficulty: "intermediate",
        questions: [
          {
            id: "wtf-q1",
            type: "multiple-choice",
            scenario:
              "Your team has a strong engage composition (Malphite, Amumu, Miss Fortune). The enemy team is clumped together near Baron. What do you do?",
            options: [
              { id: "a", text: "Wait for them to come to you" },
              { id: "b", text: "Engage immediately with your ultimates" },
              { id: "c", text: "Split push a side lane" },
              { id: "d", text: "Recall and buy items first" },
            ],
            correctAnswer: "b",
            explanation:
              "Engage compositions excel when enemies are grouped. An enemy team clumped near Baron is the perfect setup for a multi-person ultimate combo.",
          },
          {
            id: "wtf-q2",
            type: "multiple-choice",
            scenario:
              "Your ADC has just used Flash to escape. The enemy team starts moving toward your team aggressively. What's the correct call?",
            options: [
              { id: "a", text: "Fight — your ADC can still deal damage" },
              { id: "b", text: "Disengage — you're down a key summoner spell" },
              { id: "c", text: "Send your jungler in alone" },
              { id: "d", text: "Take Baron while they chase" },
            ],
            correctAnswer: "b",
            explanation:
              "Flash is a critical survival tool for an ADC. Being down Flash makes your backline vulnerable. Disengaging and waiting for it to come back up is the safer play.",
          },
          {
            id: "wtf-q3",
            type: "spot-mistake",
            scenario:
              "Your team initiates a fight 5v5 in the river. Two of your teammates have already used their ultimates on minions earlier in the lane. Your team loses the fight badly. What was the mistake?",
            options: [
              { id: "a", text: "Your team should have built more damage" },
              {
                id: "b",
                text: "Your team engaged without their key abilities available",
              },
              {
                id: "c",
                text: "The jungler should have smite the enemy jungler",
              },
              {
                id: "d",
                text: "Your team should have fought at Dragon instead",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Never initiate a major fight without your key abilities. Cooldown tracking — knowing when your teammates' ultimates are up — is essential before committing to a fight.",
          },
        ],
      },
      {
        id: "reset-timing",
        title: "Reset Timing",
        description:
          "Learn when to recall, spend gold, and return to the map without losing tempo.",
        difficulty: "beginner",
        questions: [
          {
            id: "rt-q1",
            type: "multiple-choice",
            scenario:
              "You push a full wave into the enemy tower and have 1300 gold. Dragon spawns in 90 seconds. What is the best play?",
            options: [
              { id: "a", text: "Recall, buy, and return with stronger items" },
              { id: "b", text: "Stay for another random wave" },
              { id: "c", text: "Walk into enemy jungle alone" },
              { id: "d", text: "Stand in lane without spending gold" },
            ],
            correctAnswer: "a",
            explanation:
              "A clean wave crash is often the best reset timing. You spend your gold, recover resources, and can return in time for the objective.",
          },
          {
            id: "rt-q2",
            type: "multiple-choice",
            scenario:
              "You are low HP with 1600 unspent gold, but instead of recalling you stay for one more plate. The enemy jungler appears and kills you. What should you have done?",
            options: [
              { id: "a", text: "Kept hitting the tower faster" },
              { id: "b", text: "Reset earlier and avoid the greedy play" },
              { id: "c", text: "Sold an item in lane" },
              { id: "d", text: "Pinged your support to tank tower" },
            ],
            correctAnswer: "b",
            explanation:
              "Greedy overstays lose tempo. Recalling safely with gold is often stronger than risking death for extra tower damage.",
          },
          {
            id: "rt-q3",
            type: "spot-mistake",
            scenario:
              "A top laner recalls instantly without pushing the wave first. The enemy freezes near their tower, and the top laner loses an entire wave walking back. What was the mistake?",
            options: [
              {
                id: "a",
                text: "They reset without fixing the wave state first",
              },
              { id: "b", text: "They needed boots earlier" },
              { id: "c", text: "They should have switched lanes" },
              { id: "d", text: "They should have taken Baron" },
            ],
            correctAnswer: "a",
            explanation:
              "Reset timing is tied to wave control. Recalling without pushing can give the enemy a freeze and cost you gold and experience.",
          },
        ],
      },
      {
        id: "side-lane-pressure",
        title: "Side Lane Pressure",
        description:
          "Understand when to split push, group, or rotate based on map state.",
        difficulty: "intermediate",
        questions: [
          {
            id: "slp-q1",
            type: "multiple-choice",
            scenario:
              "You are playing a strong duelist with Teleport, and Baron is alive. Your team can safely hold mid 4v4. What is usually the best setup?",
            options: [
              { id: "a", text: "Push a side lane and keep TP available" },
              { id: "b", text: "AFK with the team mid permanently" },
              { id: "c", text: "Recall every 30 seconds" },
              { id: "d", text: "Ignore all side waves" },
            ],
            correctAnswer: "a",
            explanation:
              "A strong side laner creates pressure by forcing responses. With Teleport, you can pressure a side lane and still join a major fight.",
          },
          {
            id: "slp-q2",
            type: "multiple-choice",
            scenario:
              "Three enemies are missing on the map, and you are split pushing bot lane with no vision in the jungle. What is the best decision?",
            options: [
              { id: "a", text: "Keep pushing to inhibitor no matter what" },
              { id: "b", text: "Back off until enemy positions are known" },
              {
                id: "c",
                text: "Fight whoever comes alone and ignore the rest",
              },
              { id: "d", text: "Stand still in the lane bush" },
            ],
            correctAnswer: "b",
            explanation:
              "Side lane pressure only works when it is controlled. If multiple enemies are missing and you have no vision, you are likely about to be collapsed on.",
          },
          {
            id: "slp-q3",
            type: "spot-mistake",
            scenario:
              "Your team is grouped mid doing nothing while a huge side wave is crashing into the enemy bot tower. No one rotates, and your team loses that free pressure window. What was the mistake?",
            options: [
              {
                id: "a",
                text: "Your team ignored a valuable side lane pressure opportunity",
              },
              { id: "b", text: "Your support bought the wrong ward item" },
              { id: "c", text: "Your jungler needed more CS" },
              { id: "d", text: "Your ADC should have sold boots" },
            ],
            correctAnswer: "a",
            explanation:
              "Good decision making includes converting side waves into map pressure. Ignoring free side lane value wastes tempo and objective opportunities.",
          },
        ],
      },
    ],
  },
  {
    id: "champion-mechanics",
    title: "Champion Mechanics",
    icon: "🎯",
    description:
      "Improve your mechanical skills by learning ability combos, resource management, and how to maximize your champion's potential.",
    lessons: [
      {
        id: "ability-combos",
        title: "Ability Combos",
        description: "Master basic ability combinations for effective trading.",
        difficulty: "beginner",
        questions: [
          {
            id: "ac-q1",
            type: "multiple-choice",
            scenario:
              "You're playing Annie. You have your Pyromania passive stun ready (4 stacks). The enemy mid laner is slightly out of position. What's the best way to engage?",
            options: [
              { id: "a", text: "Auto attack them first, then use Q" },
              {
                id: "b",
                text: "Use R (Tibbers) first to stun, then follow up with Q and W",
              },
              { id: "c", text: "Use W first since it deals more damage" },
              { id: "d", text: "Wait until they're at 50% HP" },
            ],
            correctAnswer: "b",
            explanation:
              "Annie's R with the passive stun guarantees the stun lands on Tibbers summon. Following up with Q and W while they're stunned maximizes damage output.",
          },
          {
            id: "ac-q2",
            type: "multiple-choice",
            scenario:
              "You're playing Garen and you're trading in lane. Your Q (Decisive Strike) silences the enemy. What should you do immediately after Q?",
            options: [
              { id: "a", text: "Run away to reset" },
              {
                id: "b",
                text: "Use E (Judgment) to spin and deal damage while they can't respond",
              },
              { id: "c", text: "Use R immediately" },
              { id: "d", text: "Auto attack three times, then back off" },
            ],
            correctAnswer: "b",
            explanation:
              "After Q silences the enemy, they can't use abilities for 1.5 seconds. This is the window to spin with E for maximum damage without retaliation.",
          },
          {
            id: "ac-q3",
            type: "spot-mistake",
            scenario:
              "A Zed player sees an opening on the enemy ADC. They use R (Death Mark) to jump on the ADC, then immediately auto attack twice, then use W (Shadow Slash) to slow. The ADC survives and escapes. What did Zed do wrong?",
            options: [
              { id: "a", text: "Zed should have built more lethality" },
              {
                id: "b",
                text: "Zed should have used W immediately after R to slow the ADC and then burst with Q",
              },
              { id: "c", text: "Zed should have used E first" },
              { id: "d", text: "Zed should have targeted the support instead" },
            ],
            correctAnswer: "b",
            explanation:
              "Zed's optimal combo after R is: W (to slow) → Q (to poke) → auto → E → auto. Using W early ensures the enemy can't escape before the Death Mark detonates.",
          },
        ],
      },
      {
        id: "resource-management",
        title: "Resource Management",
        description:
          "Learn how to manage mana, cooldowns and health efficiently.",
        difficulty: "intermediate",
        questions: [
          {
            id: "rm-q1",
            type: "multiple-choice",
            scenario:
              "You're playing Syndra mid lane with 200 mana remaining (out of 800). You have two abilities off cooldown. The enemy mid laner is at 60% HP and slightly mispositioned. What do you do?",
            options: [
              { id: "a", text: "Go all-in with all abilities" },
              {
                id: "b",
                text: "Use one ability to poke, then back off to manage mana",
              },
              { id: "c", text: "Recall immediately" },
              { id: "d", text: "Ignore the enemy and just farm" },
            ],
            correctAnswer: "b",
            explanation:
              "With only 200 mana, going all-in risks leaving you with no mana to defend yourself. One efficient poke keeps pressure without overcommitting your resources.",
          },
          {
            id: "rm-q2",
            type: "multiple-choice",
            scenario:
              "You're at 30% HP and your recall is interrupted by a nearby minion wave. Your abilities are all on cooldown. The enemy jungler's icon just disappeared from the minimap. What's the safest play?",
            options: [
              { id: "a", text: "Stay and farm — your HP is fine" },
              {
                id: "b",
                text: "Walk toward your tower and wait for abilities to come off cooldown before recalling",
              },
              { id: "c", text: "Push the wave aggressively" },
              { id: "d", text: "Stand under enemy tower to bait" },
            ],
            correctAnswer: "b",
            explanation:
              "At 30% HP with no abilities and a missing jungler, you're extremely vulnerable. Retreating toward your tower gives you safety while you wait to recall.",
          },
          {
            id: "rm-q3",
            type: "spot-mistake",
            scenario:
              "A Cassiopeia player uses her full ability rotation on the minion wave every single wave to clear quickly. By the time the enemy laner tries to trade at level 5, Cassiopeia is at 10% mana and can't fight back. She loses the trade and is forced to recall. What was the mistake?",
            options: [
              { id: "a", text: "Cassiopeia should have leveled W first" },
              {
                id: "b",
                text: "Cassiopeia wasted too much mana on wave clear instead of preserving it for trades",
              },
              {
                id: "c",
                text: "Cassiopeia should have built Tear of the Goddess first",
              },
              {
                id: "d",
                text: "Cassiopeia should have roamed instead of farming",
              },
            ],
            correctAnswer: "b",
            explanation:
              "Mana is a resource that must be managed carefully. Using full rotations on minions leaves you with nothing to trade with. Last-hitting with autos and using abilities sparingly preserves mana for fights.",
          },
        ],
      },
      {
        id: "positioning-basics",
        title: "Positioning Basics",
        description:
          "Learn where to stand in fights depending on your role and champion type.",
        difficulty: "beginner",
        questions: [
          {
            id: "pb-q1",
            type: "multiple-choice",
            scenario:
              "You are playing ADC in a 5v5 teamfight. The enemy Malphite is looking for an engage. Where should you position?",
            options: [
              { id: "a", text: "In front of your tank line" },
              {
                id: "b",
                text: "Behind your frontline while keeping safe attack range",
              },
              { id: "c", text: "Inside the enemy backline immediately" },
              { id: "d", text: "Alone in the river brush" },
            ],
            correctAnswer: "b",
            explanation:
              "As an ADC, your job is to deal damage while staying alive. Positioning behind your frontline reduces the risk of getting instantly engaged on.",
          },
          {
            id: "pb-q2",
            type: "multiple-choice",
            scenario:
              "You are playing a control mage and your tank has already started the fight. What is the best positioning choice?",
            options: [
              { id: "a", text: "Follow behind your tank and cast from safety" },
              { id: "b", text: "Dive into melee range for no reason" },
              { id: "c", text: "Walk around the map edge away from the fight" },
              { id: "d", text: "Stand next to the enemy bruiser" },
            ],
            correctAnswer: "a",
            explanation:
              "Most mages want to stay at a safe distance and cast spells while their frontline absorbs pressure.",
          },
          {
            id: "pb-q3",
            type: "spot-mistake",
            scenario:
              "An ADC walks into the front of the fight to auto attack the enemy tank one extra time. They instantly get crowd controlled and die before dealing meaningful damage. What was the mistake?",
            options: [
              {
                id: "a",
                text: "They were too aggressive with their positioning",
              },
              { id: "b", text: "They should have built more lifesteal" },
              { id: "c", text: "They needed a different skin" },
              { id: "d", text: "They should have farmed jungle instead" },
            ],
            correctAnswer: "a",
            explanation:
              "Good mechanics are not only about buttons. Poor positioning can lose a fight even if your champion is mechanically simple.",
          },
        ],
      },
      {
        id: "cooldown-awareness",
        title: "Cooldown Awareness",
        description:
          "Track key abilities and know when you can trade, all-in, or back off.",
        difficulty: "intermediate",
        questions: [
          {
            id: "ca-q1",
            type: "multiple-choice",
            scenario:
              "The enemy Ahri just used Charm and missed. You are playing an aggressive mid champion. What is usually the best response?",
            options: [
              { id: "a", text: "Back away and do nothing" },
              { id: "b", text: "Trade while her main defensive tool is down" },
              { id: "c", text: "Recall instantly" },
              { id: "d", text: "Stop farming for 30 seconds" },
            ],
            correctAnswer: "b",
            explanation:
              "When an important enemy cooldown is unavailable, that is often your window to trade or pressure them.",
          },
          {
            id: "ca-q2",
            type: "multiple-choice",
            scenario:
              "Your own dash ability is on cooldown, and the enemy jungler is missing. The lane is pushed up. What should you do?",
            options: [
              {
                id: "a",
                text: "Play safer until your escape is available again",
              },
              { id: "b", text: "Force a dive immediately" },
              { id: "c", text: "Ignore the cooldown and keep overextending" },
              { id: "d", text: "Sell your boots" },
            ],
            correctAnswer: "a",
            explanation:
              "Your cooldowns matter just as much as the enemy's. If your escape tool is unavailable, your margin for error is much smaller.",
          },
          {
            id: "ca-q3",
            type: "spot-mistake",
            scenario:
              "A Renekton player dashes in for a trade right after using all abilities on the minion wave. The enemy top laner turns and wins the fight easily. What was the mistake?",
            options: [
              {
                id: "a",
                text: "They traded while their important cooldowns were unavailable",
              },
              { id: "b", text: "They should have switched to support" },
              { id: "c", text: "They needed more magic resist" },
              { id: "d", text: "They should have recalled at full HP" },
            ],
            correctAnswer: "a",
            explanation:
              "Cooldown awareness is core to mechanics. Taking a fight with no abilities ready removes your champion's main strengths.",
          },
        ],
      },
    ],
  },
];
