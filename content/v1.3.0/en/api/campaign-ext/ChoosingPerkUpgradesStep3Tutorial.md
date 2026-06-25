---
title: "ChoosingPerkUpgradesStep3Tutorial"
description: "Auto-generated class reference for ChoosingPerkUpgradesStep3Tutorial."
---
# ChoosingPerkUpgradesStep3Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class ChoosingPerkUpgradesStep3Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/ChoosingPerkUpgradesStep3Tutorial.cs`

## Overview

`ChoosingPerkUpgradesStep3Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of ChoosingPerkUpgradesStep3Tutorial from the subsystem API first
ChoosingPerkUpgradesStep3Tutorial choosingPerkUpgradesStep3Tutorial = ...;
var result = choosingPerkUpgradesStep3Tutorial.IsConditionsMetForCompletion();
```

### OnPerkSelectedByPlayer
`public override void OnPerkSelectedByPlayer(PerkSelectedByPlayerEvent obj)`

**Purpose:** **Purpose:** Invoked when the perk selected by player event is raised.

```csharp
// Obtain an instance of ChoosingPerkUpgradesStep3Tutorial from the subsystem API first
ChoosingPerkUpgradesStep3Tutorial choosingPerkUpgradesStep3Tutorial = ...;
choosingPerkUpgradesStep3Tutorial.OnPerkSelectedByPlayer(obj);
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of ChoosingPerkUpgradesStep3Tutorial from the subsystem API first
ChoosingPerkUpgradesStep3Tutorial choosingPerkUpgradesStep3Tutorial = ...;
var result = choosingPerkUpgradesStep3Tutorial.IsConditionsMetForActivation();
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** **Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of ChoosingPerkUpgradesStep3Tutorial from the subsystem API first
ChoosingPerkUpgradesStep3Tutorial choosingPerkUpgradesStep3Tutorial = ...;
var result = choosingPerkUpgradesStep3Tutorial.GetTutorialsRelevantContext();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ChoosingPerkUpgradesStep3Tutorial choosingPerkUpgradesStep3Tutorial = ...;
choosingPerkUpgradesStep3Tutorial.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)