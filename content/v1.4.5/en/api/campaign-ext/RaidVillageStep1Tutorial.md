---
title: "RaidVillageStep1Tutorial"
description: "Auto-generated class reference for RaidVillageStep1Tutorial."
---
# RaidVillageStep1Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class RaidVillageStep1Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/RaidVillageStep1Tutorial.cs`

## Overview

`RaidVillageStep1Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of RaidVillageStep1Tutorial from the subsystem API first
RaidVillageStep1Tutorial raidVillageStep1Tutorial = ...;
var result = raidVillageStep1Tutorial.IsConditionsMetForCompletion();
```

### OnGameMenuOpened
`public override void OnGameMenuOpened(MenuCallbackArgs obj)`

**Purpose:** Invoked when the game menu opened event is raised.

```csharp
// Obtain an instance of RaidVillageStep1Tutorial from the subsystem API first
RaidVillageStep1Tutorial raidVillageStep1Tutorial = ...;
raidVillageStep1Tutorial.OnGameMenuOpened(obj);
```

### OnGameMenuOptionSelected
`public override void OnGameMenuOptionSelected(GameMenuOption obj)`

**Purpose:** Invoked when the game menu option selected event is raised.

```csharp
// Obtain an instance of RaidVillageStep1Tutorial from the subsystem API first
RaidVillageStep1Tutorial raidVillageStep1Tutorial = ...;
raidVillageStep1Tutorial.OnGameMenuOptionSelected(obj);
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of RaidVillageStep1Tutorial from the subsystem API first
RaidVillageStep1Tutorial raidVillageStep1Tutorial = ...;
var result = raidVillageStep1Tutorial.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of RaidVillageStep1Tutorial from the subsystem API first
RaidVillageStep1Tutorial raidVillageStep1Tutorial = ...;
var result = raidVillageStep1Tutorial.IsConditionsMetForActivation();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RaidVillageStep1Tutorial raidVillageStep1Tutorial = ...;
raidVillageStep1Tutorial.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)