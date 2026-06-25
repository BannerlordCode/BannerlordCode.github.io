---
title: "ChoosingPerkUpgradesStep2Tutorial"
description: "Auto-generated class reference for ChoosingPerkUpgradesStep2Tutorial."
---
# ChoosingPerkUpgradesStep2Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class ChoosingPerkUpgradesStep2Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/ChoosingPerkUpgradesStep2Tutorial.cs`

## Overview

`ChoosingPerkUpgradesStep2Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of ChoosingPerkUpgradesStep2Tutorial from the subsystem API first
ChoosingPerkUpgradesStep2Tutorial choosingPerkUpgradesStep2Tutorial = ...;
var result = choosingPerkUpgradesStep2Tutorial.IsConditionsMetForCompletion();
```

### OnPerkSelectionToggle
`public override void OnPerkSelectionToggle(PerkSelectionToggleEvent obj)`

**Purpose:** Invoked when the perk selection toggle event is raised.

```csharp
// Obtain an instance of ChoosingPerkUpgradesStep2Tutorial from the subsystem API first
ChoosingPerkUpgradesStep2Tutorial choosingPerkUpgradesStep2Tutorial = ...;
choosingPerkUpgradesStep2Tutorial.OnPerkSelectionToggle(obj);
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of ChoosingPerkUpgradesStep2Tutorial from the subsystem API first
ChoosingPerkUpgradesStep2Tutorial choosingPerkUpgradesStep2Tutorial = ...;
var result = choosingPerkUpgradesStep2Tutorial.IsConditionsMetForActivation();
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of ChoosingPerkUpgradesStep2Tutorial from the subsystem API first
ChoosingPerkUpgradesStep2Tutorial choosingPerkUpgradesStep2Tutorial = ...;
var result = choosingPerkUpgradesStep2Tutorial.GetTutorialsRelevantContext();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ChoosingPerkUpgradesStep2Tutorial choosingPerkUpgradesStep2Tutorial = ...;
choosingPerkUpgradesStep2Tutorial.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)