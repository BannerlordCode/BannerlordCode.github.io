<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialPhase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TutorialPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode.StoryModePhases
**Type:** `public class TutorialPhase`
**Base:** none
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.StoryModePhases/TutorialPhase.cs`

## Overview

`TutorialPhase` lives in `StoryMode.StoryModePhases` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.StoryModePhases` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TutorialFocusSettlement` | `public Settlement TutorialFocusSettlement { get; }` |
| `TutorialFocusMobileParty` | `public MobileParty TutorialFocusMobileParty { get; }` |
| `TalkedWithBrotherForTheFirstTime` | `public bool TalkedWithBrotherForTheFirstTime { get; }` |
| `LockTutorialVillageEnter` | `public bool LockTutorialVillageEnter { get; }` |
| `TutorialQuestPhase` | `public TutorialQuestPhase TutorialQuestPhase { get; }` |
| `IsSkipped` | `public bool IsSkipped { get; }` |
| `TutorialVillageHeadman` | `public Hero TutorialVillageHeadman { get; set; }` |

## Key Methods

### PlayerTalkedWithBrotherForTheFirstTime
`public void PlayerTalkedWithBrotherForTheFirstTime()`

**Purpose:** Handles logic related to `player talked with brother for the first time`.

### SetLockTutorialVillageEnter
`public void SetLockTutorialVillageEnter(bool value)`

**Purpose:** Sets the value or state of `lock tutorial village enter`.

### CompleteTutorial
`public void CompleteTutorial(bool isSkipped)`

**Purpose:** Handles logic related to `complete tutorial`.

### SetTutorialFocusSettlement
`public void SetTutorialFocusSettlement(Settlement settlement)`

**Purpose:** Sets the value or state of `tutorial focus settlement`.

### RemoveTutorialFocusSettlement
`public void RemoveTutorialFocusSettlement()`

**Purpose:** Removes `tutorial focus settlement` from the current collection or state.

### RemoveTutorialFocusMobileParty
`public void RemoveTutorialFocusMobileParty()`

**Purpose:** Removes `tutorial focus mobile party` from the current collection or state.

### PrepareRecruitOptionForTutorial
`public void PrepareRecruitOptionForTutorial()`

**Purpose:** Handles logic related to `prepare recruit option for tutorial`.

### GetAndPrepareBuyProductsOptionForTutorial
`public ItemRoster GetAndPrepareBuyProductsOptionForTutorial(Village village)`

**Purpose:** Gets the current value of `and prepare buy products option for tutorial`.

### SetTutorialQuestPhase
`public void SetTutorialQuestPhase(TutorialQuestPhase tutorialQuestPhase)`

**Purpose:** Sets the value or state of `tutorial quest phase`.

### InitializeTutorialVillageItemRoster
`public void InitializeTutorialVillageItemRoster()`

**Purpose:** Initializes the state, resources, or bindings for `tutorial village item roster`.

## Usage Example

```csharp
var value = new TutorialPhase();
value.PlayerTalkedWithBrotherForTheFirstTime();
```

## See Also

- [Complete Class Catalog](../catalog)