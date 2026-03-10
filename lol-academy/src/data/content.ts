import type { Category } from "../types/types";

export const categories: Category[] = [
  {
    id: "map-awareness",
    title: "Map Awareness",
    icon: "🗺️",
    lessons: [
      {
        id: "vision-control",
        title: "Vision Control",
        description: "Learn when and where to ward to control the map",
        difficulty: "beginner",
        questions: [
          {
            id: "vc-q1",
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
              "Warding the river bush near dragon gives your team early vision of the enemy approaching, allowing you to react in time. Warding inside the pit is too late — the enemy is already there.",
          },
          {
            id: "vc-q2",
            scenario:
              "Your team just lost a teamfight 3v5. You are one of the survivors. The enemy is likely to push objectives. What is the most important thing to do with your ward?",
            options: [
              { id: "a", text: "Ward the Baron pit immediately" },
              { id: "b", text: "Ward your own jungle entrances" },
              { id: "c", text: "Ward the enemy base" },
              { id: "d", text: "Save the ward for later" },
            ],
            correctAnswer: "b",
            explanation:
              "After losing a fight, the enemy will look to invade or push. Warding your own jungle entrances gives your team time to respond and avoid getting caught while regrouping.",
          },
          {
            id: "vc-q3",
            scenario:
              "You are playing jungle and your mid laner just roamed bot. The enemy mid laner is still in lane. What should you do with your vision?",
            options: [
              { id: "a", text: "Ward the enemy mid lane to track the laner" },
              { id: "b", text: "Deep ward the enemy jungle to prepare a dive" },
              {
                id: "c",
                text: "Ward river to protect your bot lane from enemy jungler",
              },
              { id: "d", text: "Do nothing, focus on farming camps" },
            ],
            correctAnswer: "c",
            explanation:
              "When your bot lane is 2v1 (or your mid is away), they are vulnerable. The enemy jungler will likely try to punish this. Warding the river protects them from an unexpected gank.",
          },
        ],
      },
      {
        id: "objective-control",
        title: "Objective Control",
        description: "Understand when to contest or give up objectives",
        difficulty: "intermediate",
        questions: [
          {
            id: "oc-q1",
            scenario:
              "Dragon spawns in 10 seconds. Your team is full HP. The enemy team has their jungler and mid laner missing from the map. What do you do?",
            options: [
              { id: "a", text: "Start dragon immediately" },
              {
                id: "b",
                text: "Wait and ward the area before starting dragon",
              },
              { id: "c", text: "Give up dragon and play safe" },
              { id: "d", text: "Split push top lane instead" },
            ],
            correctAnswer: "b",
            explanation:
              "Two enemies missing is a red flag. Even if you're full HP, starting dragon blind risks a 5v3 ambush. Take 5-10 seconds to ward the pit and river entrances first — then start if it's clear.",
          },
          {
            id: "oc-q2",
            scenario:
              "You just picked up an ace (killed all 5 enemies). Baron Nashor is up. Your team is all alive but most are at 30-40% HP. The Baron respawn timer shows enemies will be back in 35 seconds. What do you do?",
            options: [
              {
                id: "a",
                text: "Start Baron immediately — you have a numbers advantage",
              },
              {
                id: "b",
                text: "Recall, heal, then come back for Baron",
              },
              {
                id: "c",
                text: "Push mid lane with the numbers advantage instead",
              },
              {
                id: "d",
                text: "Take Baron but have one player recall and rejoin",
              },
            ],
            correctAnswer: "a",
            explanation:
              "35 seconds is enough to take Baron at low HP — Baron takes roughly 20-25 seconds with a full team. Recalling wastes your window. The risk of dying to Baron smite steal is lower than giving up the objective entirely.",
          },
          {
            id: "oc-q3",
            scenario:
              "It's 25 minutes in. Your team has 3 Dragon Souls stacked. The enemy team has Baron. Your team's top laner is dead with a 50 second respawn. The enemy is pushing mid with Baron buff. What is the correct play?",
            options: [
              {
                id: "a",
                text: "Contest the push 4v5 to protect your base",
              },
              {
                id: "b",
                text: "Stall, let them take mid tower, and wait for your top laner",
              },
              {
                id: "c",
                text: "Go take Dragon Soul while they push",
              },
              { id: "d", text: "Surrender — the game is lost" },
            ],
            correctAnswer: "b",
            explanation:
              "Fighting 4v5 into Baron buff is almost always a losing fight. Trading a mid tower for a Dragon Soul and a full team fight is worth it. Stall with abilities and minions and regroup when your top laner is back.",
          },
        ],
      },
    ],
  },
];
