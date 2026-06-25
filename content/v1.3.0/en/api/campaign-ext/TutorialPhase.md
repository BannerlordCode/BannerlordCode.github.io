---
title: "TutorialPhase"
description: "Auto-generated class reference for TutorialPhase."
---
# TutorialPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode.StoryModePhases
**Type:** `public class TutorialPhase`
**Base:** none
**File:** `StoryMode/StoryModePhases/TutorialPhase.cs`

## Overview

`TutorialPhase` lives in `StoryMode.StoryModePhases` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.StoryModePhases` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static TutorialPhase Instance { get; }` |
| `TutorialFocusSettlement` | `public Settlement TutorialFocusSettlement { get; }` |
| `TutorialFocusMobileParty` | `public MobileParty TutorialFocusMobileParty { get; }` |
| `IsCompleted` | `public bool IsCompleted { get; }` |
| `TalkedWithBrotherForTheFirstTime` | `public bool TalkedWithBrotherForTheFirstTime { get; }` |
| `LockTutorialVillageEnter` | `public bool LockTutorialVillageEnter { get; }` |
| `TutorialQuestPhase` | `public TutorialQuestPhase TutorialQuestPhase { get; }` |
| `IsSkipped` | `public bool IsSkipped { get; }` |
| `TutorialVillageHeadman` | `public Hero TutorialVillageHeadman { get; set; }` |

## Key Methods

### PlayerTalkedWithBrotherForTheFirstTime
`public void PlayerTalkedWithBrotherForTheFirstTime()`

**Purpose:** Executes the PlayerTalkedWithBrotherForTheFirstTime logic.

```csharp
// Obtain an instance of TutorialPhase from the subsystem API first
TutorialPhase tutorialPhase = ...;
tutorialPhase.PlayerTalkedWithBrotherForTheFirstTime();
```

### SetLockTutorialVillageEnter
`public void SetLockTutorialVillageEnter(bool value)`

**Purpose:** Assigns a new value to lock tutorial village enter and updates the object's internal state.

```csharp
// Obtain an instance of TutorialPhase from the subsystem API first
TutorialPhase tutorialPhase = ...;
tutorialPhase.SetLockTutorialVillageEnter(false);
```

### CompleteTutorial
`public void CompleteTutorial(bool isSkipped)`

**Purpose:** Executes the CompleteTutorial logic.

```csharp
// Obtain an instance of TutorialPhase from the subsystem API first
TutorialPhase tutorialPhase = ...;
tutorialPhase.CompleteTutorial(false);
```

### SetTutorialFocusSettlement
`public void SetTutorialFocusSettlement(Settlement settlement)`

**Purpose:** Assigns a new value to tutorial focus settlement and updates the object's internal state.

```csharp
// Obtain an instance of TutorialPhase from the subsystem API first
TutorialPhase tutorialPhase = ...;
tutorialPhase.SetTutorialFocusSettlement(settlement);
```

### RemoveTutorialFocusSettlement
`public void RemoveTutorialFocusSettlement()`

**Purpose:** Removes tutorial focus settlement from the current collection or state.

```csharp
// Obtain an instance of TutorialPhase from the subsystem API first
TutorialPhase tutorialPhase = ...;
tutorialPhase.RemoveTutorialFocusSettlement();
```

### RemoveTutorialFocusMobileParty
`public void RemoveTutorialFocusMobileParty()`

**Purpose:** Removes tutorial focus mobile party from the current collection or state.

```csharp
// Obtain an instance of TutorialPhase from the subsystem API first
TutorialPhase tutorialPhase = ...;
tutorialPhase.RemoveTutorialFocusMobileParty();
```

### PrepareRecruitOptionForTutorial
`public void PrepareRecruitOptionForTutorial()`

**Purpose:** Finishes prerequisite setup for the upcoming recruit option for tutorial operation.

```csharp
// Obtain an instance of TutorialPhase from the subsystem API first
TutorialPhase tutorialPhase = ...;
tutorialPhase.PrepareRecruitOptionForTutorial();
```

### GetAndPrepareBuyProductsOptionForTutorial
`public ItemRoster GetAndPrepareBuyProductsOptionForTutorial(Village village)`

**Purpose:** Reads and returns the and prepare buy products option for tutorial value held by the this instance.

```csharp
// Obtain an instance of TutorialPhase from the subsystem API first
TutorialPhase tutorialPhase = ...;
var result = tutorialPhase.GetAndPrepareBuyProductsOptionForTutorial(village);
```

### SetTutorialQuestPhase
`public void SetTutorialQuestPhase(TutorialQuestPhase tutorialQuestPhase)`

**Purpose:** Assigns a new value to tutorial quest phase and updates the object's internal state.

```csharp
// Obtain an instance of TutorialPhase from the subsystem API first
TutorialPhase tutorialPhase = ...;
tutorialPhase.SetTutorialQuestPhase(tutorialQuestPhase);
```

### InitializeTutorialVillageItemRoster
`public void InitializeTutorialVillageItemRoster()`

**Purpose:** Prepares the resources, state, or bindings required by tutorial village item roster.

```csharp
// Obtain an instance of TutorialPhase from the subsystem API first
TutorialPhase tutorialPhase = ...;
tutorialPhase.InitializeTutorialVillageItemRoster();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TutorialPhase tutorialPhase = ...;
tutorialPhase.PlayerTalkedWithBrotherForTheFirstTime();
```

## See Also

- [Area Index](../)