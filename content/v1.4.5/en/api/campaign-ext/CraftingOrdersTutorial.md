---
title: "CraftingOrdersTutorial"
description: "Auto-generated class reference for CraftingOrdersTutorial."
---
# CraftingOrdersTutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class CraftingOrdersTutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/CraftingOrdersTutorial.cs`

## Overview

`CraftingOrdersTutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of CraftingOrdersTutorial from the subsystem API first
CraftingOrdersTutorial craftingOrdersTutorial = ...;
var result = craftingOrdersTutorial.GetTutorialsRelevantContext();
```

### OnCraftingWeaponClassSelectionOpened
`public override void OnCraftingWeaponClassSelectionOpened(CraftingWeaponClassSelectionOpenedEvent obj)`

**Purpose:** Invoked when the crafting weapon class selection opened event is raised.

```csharp
// Obtain an instance of CraftingOrdersTutorial from the subsystem API first
CraftingOrdersTutorial craftingOrdersTutorial = ...;
craftingOrdersTutorial.OnCraftingWeaponClassSelectionOpened(obj);
```

### OnCraftingOrderTabOpened
`public override void OnCraftingOrderTabOpened(CraftingOrderTabOpenedEvent obj)`

**Purpose:** Invoked when the crafting order tab opened event is raised.

```csharp
// Obtain an instance of CraftingOrdersTutorial from the subsystem API first
CraftingOrdersTutorial craftingOrdersTutorial = ...;
craftingOrdersTutorial.OnCraftingOrderTabOpened(obj);
```

### OnCraftingOrderSelectionOpened
`public override void OnCraftingOrderSelectionOpened(CraftingOrderSelectionOpenedEvent obj)`

**Purpose:** Invoked when the crafting order selection opened event is raised.

```csharp
// Obtain an instance of CraftingOrdersTutorial from the subsystem API first
CraftingOrdersTutorial craftingOrdersTutorial = ...;
craftingOrdersTutorial.OnCraftingOrderSelectionOpened(obj);
```

### OnCraftingOnWeaponResultPopupOpened
`public override void OnCraftingOnWeaponResultPopupOpened(CraftingWeaponResultPopupToggledEvent obj)`

**Purpose:** Invoked when the crafting on weapon result popup opened event is raised.

```csharp
// Obtain an instance of CraftingOrdersTutorial from the subsystem API first
CraftingOrdersTutorial craftingOrdersTutorial = ...;
craftingOrdersTutorial.OnCraftingOnWeaponResultPopupOpened(obj);
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of CraftingOrdersTutorial from the subsystem API first
CraftingOrdersTutorial craftingOrdersTutorial = ...;
var result = craftingOrdersTutorial.IsConditionsMetForActivation();
```

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of CraftingOrdersTutorial from the subsystem API first
CraftingOrdersTutorial craftingOrdersTutorial = ...;
var result = craftingOrdersTutorial.IsConditionsMetForCompletion();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CraftingOrdersTutorial craftingOrdersTutorial = ...;
craftingOrdersTutorial.GetTutorialsRelevantContext();
```

## See Also

- [Area Index](../)