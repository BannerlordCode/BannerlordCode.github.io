---
title: "OrderOfBattleTutorialStep2Tutorial"
description: "Auto-generated class reference for OrderOfBattleTutorialStep2Tutorial."
---
# OrderOfBattleTutorialStep2Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class OrderOfBattleTutorialStep2Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/OrderOfBattleTutorialStep2Tutorial.cs`

## Overview

`OrderOfBattleTutorialStep2Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** **Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of OrderOfBattleTutorialStep2Tutorial from the subsystem API first
OrderOfBattleTutorialStep2Tutorial orderOfBattleTutorialStep2Tutorial = ...;
var result = orderOfBattleTutorialStep2Tutorial.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of OrderOfBattleTutorialStep2Tutorial from the subsystem API first
OrderOfBattleTutorialStep2Tutorial orderOfBattleTutorialStep2Tutorial = ...;
var result = orderOfBattleTutorialStep2Tutorial.IsConditionsMetForActivation();
```

### OnOrderOfBattleFormationClassChanged
`public override void OnOrderOfBattleFormationClassChanged(OrderOfBattleFormationClassChangedEvent obj)`

**Purpose:** **Purpose:** Invoked when the order of battle formation class changed event is raised.

```csharp
// Obtain an instance of OrderOfBattleTutorialStep2Tutorial from the subsystem API first
OrderOfBattleTutorialStep2Tutorial orderOfBattleTutorialStep2Tutorial = ...;
orderOfBattleTutorialStep2Tutorial.OnOrderOfBattleFormationClassChanged(obj);
```

### OnOrderOfBattleFormationWeightChanged
`public override void OnOrderOfBattleFormationWeightChanged(OrderOfBattleFormationWeightChangedEvent obj)`

**Purpose:** **Purpose:** Invoked when the order of battle formation weight changed event is raised.

```csharp
// Obtain an instance of OrderOfBattleTutorialStep2Tutorial from the subsystem API first
OrderOfBattleTutorialStep2Tutorial orderOfBattleTutorialStep2Tutorial = ...;
orderOfBattleTutorialStep2Tutorial.OnOrderOfBattleFormationWeightChanged(obj);
```

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of OrderOfBattleTutorialStep2Tutorial from the subsystem API first
OrderOfBattleTutorialStep2Tutorial orderOfBattleTutorialStep2Tutorial = ...;
var result = orderOfBattleTutorialStep2Tutorial.IsConditionsMetForCompletion();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OrderOfBattleTutorialStep2Tutorial orderOfBattleTutorialStep2Tutorial = ...;
orderOfBattleTutorialStep2Tutorial.GetTutorialsRelevantContext();
```

## See Also

- [Area Index](../)