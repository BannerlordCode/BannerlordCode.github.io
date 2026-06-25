---
title: "BuyingFoodStep3Tutorial"
description: "Auto-generated class reference for BuyingFoodStep3Tutorial."
---
# BuyingFoodStep3Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class BuyingFoodStep3Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/BuyingFoodStep3Tutorial.cs`

## Overview

`BuyingFoodStep3Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of BuyingFoodStep3Tutorial from the subsystem API first
BuyingFoodStep3Tutorial buyingFoodStep3Tutorial = ...;
var result = buyingFoodStep3Tutorial.IsConditionsMetForCompletion();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of BuyingFoodStep3Tutorial from the subsystem API first
BuyingFoodStep3Tutorial buyingFoodStep3Tutorial = ...;
var result = buyingFoodStep3Tutorial.IsConditionsMetForActivation();
```

### OnPlayerInventoryExchange
`public override void OnPlayerInventoryExchange(List<(ItemRosterElement, int)> purchasedItems, List<(ItemRosterElement, int)> soldItems, bool isTrading)`

**Purpose:** **Purpose:** Invoked when the player inventory exchange event is raised.

```csharp
// Obtain an instance of BuyingFoodStep3Tutorial from the subsystem API first
BuyingFoodStep3Tutorial buyingFoodStep3Tutorial = ...;
buyingFoodStep3Tutorial.OnPlayerInventoryExchange(list<(ItemRosterElement, 0, list<(ItemRosterElement, 0, false);
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** **Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of BuyingFoodStep3Tutorial from the subsystem API first
BuyingFoodStep3Tutorial buyingFoodStep3Tutorial = ...;
var result = buyingFoodStep3Tutorial.GetTutorialsRelevantContext();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BuyingFoodStep3Tutorial buyingFoodStep3Tutorial = ...;
buyingFoodStep3Tutorial.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)