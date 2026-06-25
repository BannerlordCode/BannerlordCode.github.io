---
title: "RansomingPrisonersStep2Tutorial"
description: "Auto-generated class reference for RansomingPrisonersStep2Tutorial."
---
# RansomingPrisonersStep2Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class RansomingPrisonersStep2Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/RansomingPrisonersStep2Tutorial.cs`

## Overview

`RansomingPrisonersStep2Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of RansomingPrisonersStep2Tutorial from the subsystem API first
RansomingPrisonersStep2Tutorial ransomingPrisonersStep2Tutorial = ...;
var result = ransomingPrisonersStep2Tutorial.IsConditionsMetForCompletion();
```

### OnGameMenuOptionSelected
`public override void OnGameMenuOptionSelected(GameMenuOption obj)`

**Purpose:** **Purpose:** Invoked when the game menu option selected event is raised.

```csharp
// Obtain an instance of RansomingPrisonersStep2Tutorial from the subsystem API first
RansomingPrisonersStep2Tutorial ransomingPrisonersStep2Tutorial = ...;
ransomingPrisonersStep2Tutorial.OnGameMenuOptionSelected(obj);
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** **Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of RansomingPrisonersStep2Tutorial from the subsystem API first
RansomingPrisonersStep2Tutorial ransomingPrisonersStep2Tutorial = ...;
var result = ransomingPrisonersStep2Tutorial.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of RansomingPrisonersStep2Tutorial from the subsystem API first
RansomingPrisonersStep2Tutorial ransomingPrisonersStep2Tutorial = ...;
var result = ransomingPrisonersStep2Tutorial.IsConditionsMetForActivation();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RansomingPrisonersStep2Tutorial ransomingPrisonersStep2Tutorial = ...;
ransomingPrisonersStep2Tutorial.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)