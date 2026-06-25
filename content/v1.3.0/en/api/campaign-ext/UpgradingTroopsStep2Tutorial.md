---
title: "UpgradingTroopsStep2Tutorial"
description: "Auto-generated class reference for UpgradingTroopsStep2Tutorial."
---
# UpgradingTroopsStep2Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class UpgradingTroopsStep2Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/UpgradingTroopsStep2Tutorial.cs`

## Overview

`UpgradingTroopsStep2Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of UpgradingTroopsStep2Tutorial from the subsystem API first
UpgradingTroopsStep2Tutorial upgradingTroopsStep2Tutorial = ...;
var result = upgradingTroopsStep2Tutorial.IsConditionsMetForCompletion();
```

### OnPlayerToggledUpgradePopup
`public override void OnPlayerToggledUpgradePopup(PlayerToggledUpgradePopupEvent obj)`

**Purpose:** **Purpose:** Invoked when the player toggled upgrade popup event is raised.

```csharp
// Obtain an instance of UpgradingTroopsStep2Tutorial from the subsystem API first
UpgradingTroopsStep2Tutorial upgradingTroopsStep2Tutorial = ...;
upgradingTroopsStep2Tutorial.OnPlayerToggledUpgradePopup(obj);
```

### OnPlayerUpgradeTroop
`public override void OnPlayerUpgradeTroop(CharacterObject arg1, CharacterObject arg2, int arg3)`

**Purpose:** **Purpose:** Invoked when the player upgrade troop event is raised.

```csharp
// Obtain an instance of UpgradingTroopsStep2Tutorial from the subsystem API first
UpgradingTroopsStep2Tutorial upgradingTroopsStep2Tutorial = ...;
upgradingTroopsStep2Tutorial.OnPlayerUpgradeTroop(arg1, arg2, 0);
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of UpgradingTroopsStep2Tutorial from the subsystem API first
UpgradingTroopsStep2Tutorial upgradingTroopsStep2Tutorial = ...;
var result = upgradingTroopsStep2Tutorial.IsConditionsMetForActivation();
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** **Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of UpgradingTroopsStep2Tutorial from the subsystem API first
UpgradingTroopsStep2Tutorial upgradingTroopsStep2Tutorial = ...;
var result = upgradingTroopsStep2Tutorial.GetTutorialsRelevantContext();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
UpgradingTroopsStep2Tutorial upgradingTroopsStep2Tutorial = ...;
upgradingTroopsStep2Tutorial.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)