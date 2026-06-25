---
title: "UpgradingTroopsStep3Tutorial"
description: "Auto-generated class reference for UpgradingTroopsStep3Tutorial."
---
# UpgradingTroopsStep3Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class UpgradingTroopsStep3Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/UpgradingTroopsStep3Tutorial.cs`

## Overview

`UpgradingTroopsStep3Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the current object is in the `conditions met for completion` state or condition.

```csharp
// Obtain an instance of UpgradingTroopsStep3Tutorial from the subsystem API first
UpgradingTroopsStep3Tutorial upgradingTroopsStep3Tutorial = ...;
var result = upgradingTroopsStep3Tutorial.IsConditionsMetForCompletion();
```

### OnPlayerUpgradeTroop
`public override void OnPlayerUpgradeTroop(CharacterObject arg1, CharacterObject arg2, int arg3)`

**Purpose:** Invoked when the `player upgrade troop` event is raised.

```csharp
// Obtain an instance of UpgradingTroopsStep3Tutorial from the subsystem API first
UpgradingTroopsStep3Tutorial upgradingTroopsStep3Tutorial = ...;
upgradingTroopsStep3Tutorial.OnPlayerUpgradeTroop(arg1, arg2, 0);
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the current object is in the `conditions met for activation` state or condition.

```csharp
// Obtain an instance of UpgradingTroopsStep3Tutorial from the subsystem API first
UpgradingTroopsStep3Tutorial upgradingTroopsStep3Tutorial = ...;
var result = upgradingTroopsStep3Tutorial.IsConditionsMetForActivation();
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the `tutorials relevant context` value held by the current object.

```csharp
// Obtain an instance of UpgradingTroopsStep3Tutorial from the subsystem API first
UpgradingTroopsStep3Tutorial upgradingTroopsStep3Tutorial = ...;
var result = upgradingTroopsStep3Tutorial.GetTutorialsRelevantContext();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
UpgradingTroopsStep3Tutorial upgradingTroopsStep3Tutorial = ...;
upgradingTroopsStep3Tutorial.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)