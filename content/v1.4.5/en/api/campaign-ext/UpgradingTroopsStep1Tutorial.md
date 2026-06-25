---
title: "UpgradingTroopsStep1Tutorial"
description: "Auto-generated class reference for UpgradingTroopsStep1Tutorial."
---
# UpgradingTroopsStep1Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class UpgradingTroopsStep1Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/UpgradingTroopsStep1Tutorial.cs`

## Overview

`UpgradingTroopsStep1Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of UpgradingTroopsStep1Tutorial from the subsystem API first
UpgradingTroopsStep1Tutorial upgradingTroopsStep1Tutorial = ...;
var result = upgradingTroopsStep1Tutorial.IsConditionsMetForCompletion();
```

### OnPlayerUpgradeTroop
`public override void OnPlayerUpgradeTroop(CharacterObject arg1, CharacterObject arg2, int arg3)`

**Purpose:** Invoked when the player upgrade troop event is raised.

```csharp
// Obtain an instance of UpgradingTroopsStep1Tutorial from the subsystem API first
UpgradingTroopsStep1Tutorial upgradingTroopsStep1Tutorial = ...;
upgradingTroopsStep1Tutorial.OnPlayerUpgradeTroop(arg1, arg2, 0);
```

### OnTutorialContextChanged
`public override void OnTutorialContextChanged(TutorialContextChangedEvent obj)`

**Purpose:** Invoked when the tutorial context changed event is raised.

```csharp
// Obtain an instance of UpgradingTroopsStep1Tutorial from the subsystem API first
UpgradingTroopsStep1Tutorial upgradingTroopsStep1Tutorial = ...;
upgradingTroopsStep1Tutorial.OnTutorialContextChanged(obj);
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of UpgradingTroopsStep1Tutorial from the subsystem API first
UpgradingTroopsStep1Tutorial upgradingTroopsStep1Tutorial = ...;
var result = upgradingTroopsStep1Tutorial.IsConditionsMetForActivation();
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of UpgradingTroopsStep1Tutorial from the subsystem API first
UpgradingTroopsStep1Tutorial upgradingTroopsStep1Tutorial = ...;
var result = upgradingTroopsStep1Tutorial.GetTutorialsRelevantContext();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
UpgradingTroopsStep1Tutorial upgradingTroopsStep1Tutorial = ...;
upgradingTroopsStep1Tutorial.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)