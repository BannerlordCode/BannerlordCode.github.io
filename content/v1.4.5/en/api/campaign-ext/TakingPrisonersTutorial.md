---
title: "TakingPrisonersTutorial"
description: "Auto-generated class reference for TakingPrisonersTutorial."
---
# TakingPrisonersTutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class TakingPrisonersTutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/TakingPrisonersTutorial.cs`

## Overview

`TakingPrisonersTutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** **Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of TakingPrisonersTutorial from the subsystem API first
TakingPrisonersTutorial takingPrisonersTutorial = ...;
var result = takingPrisonersTutorial.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of TakingPrisonersTutorial from the subsystem API first
TakingPrisonersTutorial takingPrisonersTutorial = ...;
var result = takingPrisonersTutorial.IsConditionsMetForActivation();
```

### OnPlayerMoveTroop
`public override void OnPlayerMoveTroop(PlayerMoveTroopEvent obj)`

**Purpose:** **Purpose:** Invoked when the player move troop event is raised.

```csharp
// Obtain an instance of TakingPrisonersTutorial from the subsystem API first
TakingPrisonersTutorial takingPrisonersTutorial = ...;
takingPrisonersTutorial.OnPlayerMoveTroop(obj);
```

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of TakingPrisonersTutorial from the subsystem API first
TakingPrisonersTutorial takingPrisonersTutorial = ...;
var result = takingPrisonersTutorial.IsConditionsMetForCompletion();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TakingPrisonersTutorial takingPrisonersTutorial = ...;
takingPrisonersTutorial.GetTutorialsRelevantContext();
```

## See Also

- [Area Index](../)