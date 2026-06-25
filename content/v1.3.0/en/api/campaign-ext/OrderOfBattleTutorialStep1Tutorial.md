---
title: "OrderOfBattleTutorialStep1Tutorial"
description: "Auto-generated class reference for OrderOfBattleTutorialStep1Tutorial."
---
# OrderOfBattleTutorialStep1Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class OrderOfBattleTutorialStep1Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/OrderOfBattleTutorialStep1Tutorial.cs`

## Overview

`OrderOfBattleTutorialStep1Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** **Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of OrderOfBattleTutorialStep1Tutorial from the subsystem API first
OrderOfBattleTutorialStep1Tutorial orderOfBattleTutorialStep1Tutorial = ...;
var result = orderOfBattleTutorialStep1Tutorial.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of OrderOfBattleTutorialStep1Tutorial from the subsystem API first
OrderOfBattleTutorialStep1Tutorial orderOfBattleTutorialStep1Tutorial = ...;
var result = orderOfBattleTutorialStep1Tutorial.IsConditionsMetForActivation();
```

### OnOrderOfBattleHeroAssignedToFormation
`public override void OnOrderOfBattleHeroAssignedToFormation(OrderOfBattleHeroAssignedToFormationEvent obj)`

**Purpose:** **Purpose:** Invoked when the order of battle hero assigned to formation event is raised.

```csharp
// Obtain an instance of OrderOfBattleTutorialStep1Tutorial from the subsystem API first
OrderOfBattleTutorialStep1Tutorial orderOfBattleTutorialStep1Tutorial = ...;
orderOfBattleTutorialStep1Tutorial.OnOrderOfBattleHeroAssignedToFormation(obj);
```

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of OrderOfBattleTutorialStep1Tutorial from the subsystem API first
OrderOfBattleTutorialStep1Tutorial orderOfBattleTutorialStep1Tutorial = ...;
var result = orderOfBattleTutorialStep1Tutorial.IsConditionsMetForCompletion();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OrderOfBattleTutorialStep1Tutorial orderOfBattleTutorialStep1Tutorial = ...;
orderOfBattleTutorialStep1Tutorial.GetTutorialsRelevantContext();
```

## See Also

- [Area Index](../)