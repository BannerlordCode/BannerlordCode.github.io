---
title: "CraftingStep1Tutorial"
description: "Auto-generated class reference for CraftingStep1Tutorial."
---
# CraftingStep1Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class CraftingStep1Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/CraftingStep1Tutorial.cs`

## Overview

`CraftingStep1Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of CraftingStep1Tutorial from the subsystem API first
CraftingStep1Tutorial craftingStep1Tutorial = ...;
var result = craftingStep1Tutorial.GetTutorialsRelevantContext();
```

### OnCraftingWeaponClassSelectionOpened
`public override void OnCraftingWeaponClassSelectionOpened(CraftingWeaponClassSelectionOpenedEvent obj)`

**Purpose:** Invoked when the crafting weapon class selection opened event is raised.

```csharp
// Obtain an instance of CraftingStep1Tutorial from the subsystem API first
CraftingStep1Tutorial craftingStep1Tutorial = ...;
craftingStep1Tutorial.OnCraftingWeaponClassSelectionOpened(obj);
```

### OnCraftingOrderSelectionOpened
`public override void OnCraftingOrderSelectionOpened(CraftingOrderSelectionOpenedEvent obj)`

**Purpose:** Invoked when the crafting order selection opened event is raised.

```csharp
// Obtain an instance of CraftingStep1Tutorial from the subsystem API first
CraftingStep1Tutorial craftingStep1Tutorial = ...;
craftingStep1Tutorial.OnCraftingOrderSelectionOpened(obj);
```

### OnCraftingOnWeaponResultPopupOpened
`public override void OnCraftingOnWeaponResultPopupOpened(CraftingWeaponResultPopupToggledEvent obj)`

**Purpose:** Invoked when the crafting on weapon result popup opened event is raised.

```csharp
// Obtain an instance of CraftingStep1Tutorial from the subsystem API first
CraftingStep1Tutorial craftingStep1Tutorial = ...;
craftingStep1Tutorial.OnCraftingOnWeaponResultPopupOpened(obj);
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of CraftingStep1Tutorial from the subsystem API first
CraftingStep1Tutorial craftingStep1Tutorial = ...;
var result = craftingStep1Tutorial.IsConditionsMetForActivation();
```

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of CraftingStep1Tutorial from the subsystem API first
CraftingStep1Tutorial craftingStep1Tutorial = ...;
var result = craftingStep1Tutorial.IsConditionsMetForCompletion();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CraftingStep1Tutorial craftingStep1Tutorial = ...;
craftingStep1Tutorial.GetTutorialsRelevantContext();
```

## See Also

- [Area Index](../)