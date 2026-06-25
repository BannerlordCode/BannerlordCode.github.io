---
title: "ArmyCohesionStep2Tutorial"
description: "Auto-generated class reference for ArmyCohesionStep2Tutorial."
---
# ArmyCohesionStep2Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class ArmyCohesionStep2Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/ArmyCohesionStep2Tutorial.cs`

## Overview

`ArmyCohesionStep2Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of ArmyCohesionStep2Tutorial from the subsystem API first
ArmyCohesionStep2Tutorial armyCohesionStep2Tutorial = ...;
var result = armyCohesionStep2Tutorial.IsConditionsMetForCompletion();
```

### OnArmyCohesionByPlayerBoosted
`public override void OnArmyCohesionByPlayerBoosted(ArmyCohesionBoostedByPlayerEvent obj)`

**Purpose:** **Purpose:** Invoked when the army cohesion by player boosted event is raised.

```csharp
// Obtain an instance of ArmyCohesionStep2Tutorial from the subsystem API first
ArmyCohesionStep2Tutorial armyCohesionStep2Tutorial = ...;
armyCohesionStep2Tutorial.OnArmyCohesionByPlayerBoosted(obj);
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** **Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of ArmyCohesionStep2Tutorial from the subsystem API first
ArmyCohesionStep2Tutorial armyCohesionStep2Tutorial = ...;
var result = armyCohesionStep2Tutorial.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of ArmyCohesionStep2Tutorial from the subsystem API first
ArmyCohesionStep2Tutorial armyCohesionStep2Tutorial = ...;
var result = armyCohesionStep2Tutorial.IsConditionsMetForActivation();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArmyCohesionStep2Tutorial armyCohesionStep2Tutorial = ...;
armyCohesionStep2Tutorial.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)