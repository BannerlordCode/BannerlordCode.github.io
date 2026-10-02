---
title: "TutorialPhase"
description: "TutorialPhase — class in StoryMode.StoryModePhases. 21 public members (1 static)."
---

<!-- v147-skeleton -->
# TutorialPhase

**Namespace:** `StoryMode.StoryModePhases`  
**Module:** `StoryMode`  
**Type:** `public class TutorialPhase`  
**Source:** `StoryMode/StoryModePhases/TutorialPhase.cs`

## Overview

`TutorialPhase` is a named type in the StoryMode.StoryModePhases namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `TutorialPhase`.
- **Static entry points** (1): `Instance`.
- **Instance members** (11): `IsCompleted`, `PlayerTalkedWithBrotherForTheFirstTime`, `SetLockTutorialVillageEnter`, `CompleteTutorial`, `SetTutorialFocusSettlement`, `RemoveTutorialFocusSettlement`, ….
- **Data and constants** (8): `RestrictedModePriority`, `QuestVillageStringId`, `TrainingFieldStringId`, `RadagosRaidersStringId`, `TutorialVolunteerStringId`, `TutorialFemaleRefugeeStringId`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Instance` | property (static) | Static entry point `TutorialPhase` property. Read it for current state; a declared setter writes that state in place. |
| `CompleteTutorial` | method | Instance entry point. Takes 1 argument: `bool isSkipped`. |
| `GetAndPrepareBuyProductsOptionForTutorial` | method | Instance entry point. Takes 1 argument: `Village village`. Returns `ItemRoster`. Read path: prefer it over reaching for the backing store. |
| `InitializeTutorialVillageItemRoster` | method | Instance entry point. Takes no arguments. |
| `IsCompleted` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `PlayerTalkedWithBrotherForTheFirstTime` | method | Instance entry point. Takes no arguments. |
| `PrepareRecruitOptionForTutorial` | method | Instance entry point. Takes no arguments. |
| `RemoveTutorialFocusMobileParty` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `RemoveTutorialFocusSettlement` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `SetLockTutorialVillageEnter` | method | Instance entry point. Takes 1 argument: `bool value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetTutorialFocusSettlement` | method | Instance entry point. Takes 1 argument: `Settlement settlement`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetTutorialQuestPhase` | method | Instance entry point. Takes 1 argument: `TutorialQuestPhase tutorialQuestPhase`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `QuestVillageStringId` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `RadagosRaidersStringId` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `RestrictedModePriority` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `TrainingFieldStringId` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `TutorialFemaleRefugeeStringId` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `TutorialHeadmanStringId` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `TutorialMaleRefugeeStringId` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `TutorialVolunteerStringId` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `TutorialPhase` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public TutorialPhase()`.

## Usage Example

```csharp
var tutorialPhase = new TutorialPhase();
tutorialPhase.PlayerTalkedWithBrotherForTheFirstTime();
// Read current state through tutorialPhase.IsCompleted.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `StoryMode/StoryModePhases/TutorialPhase.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [TutorialQuestPhase](../TutorialQuestPhase/) — `StoryMode.StoryModePhases`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [ItemRoster](../../campaign/ItemRoster/) — `TaleWorlds.CampaignSystem.Roster`.

Section: [api/storymode/](../) — the other types in this bucket.
