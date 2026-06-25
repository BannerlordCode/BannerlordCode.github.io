---
title: "RansomingPrisonersStep1Tutorial"
description: "Auto-generated class reference for RansomingPrisonersStep1Tutorial."
---
# RansomingPrisonersStep1Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class RansomingPrisonersStep1Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/RansomingPrisonersStep1Tutorial.cs`

## Overview

`RansomingPrisonersStep1Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of RansomingPrisonersStep1Tutorial from the subsystem API first
RansomingPrisonersStep1Tutorial ransomingPrisonersStep1Tutorial = ...;
var result = ransomingPrisonersStep1Tutorial.IsConditionsMetForCompletion();
```

### OnGameMenuOpened
`public override void OnGameMenuOpened(MenuCallbackArgs obj)`

**Purpose:** Invoked when the game menu opened event is raised.

```csharp
// Obtain an instance of RansomingPrisonersStep1Tutorial from the subsystem API first
RansomingPrisonersStep1Tutorial ransomingPrisonersStep1Tutorial = ...;
ransomingPrisonersStep1Tutorial.OnGameMenuOpened(obj);
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of RansomingPrisonersStep1Tutorial from the subsystem API first
RansomingPrisonersStep1Tutorial ransomingPrisonersStep1Tutorial = ...;
var result = ransomingPrisonersStep1Tutorial.IsConditionsMetForActivation();
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of RansomingPrisonersStep1Tutorial from the subsystem API first
RansomingPrisonersStep1Tutorial ransomingPrisonersStep1Tutorial = ...;
var result = ransomingPrisonersStep1Tutorial.GetTutorialsRelevantContext();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RansomingPrisonersStep1Tutorial ransomingPrisonersStep1Tutorial = ...;
ransomingPrisonersStep1Tutorial.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)