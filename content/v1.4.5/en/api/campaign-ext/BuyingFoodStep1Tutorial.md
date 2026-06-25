---
title: "BuyingFoodStep1Tutorial"
description: "Auto-generated class reference for BuyingFoodStep1Tutorial."
---
# BuyingFoodStep1Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class BuyingFoodStep1Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/BuyingFoodStep1Tutorial.cs`

## Overview

`BuyingFoodStep1Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of BuyingFoodStep1Tutorial from the subsystem API first
BuyingFoodStep1Tutorial buyingFoodStep1Tutorial = ...;
var result = buyingFoodStep1Tutorial.IsConditionsMetForCompletion();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of BuyingFoodStep1Tutorial from the subsystem API first
BuyingFoodStep1Tutorial buyingFoodStep1Tutorial = ...;
var result = buyingFoodStep1Tutorial.IsConditionsMetForActivation();
```

### OnTutorialContextChanged
`public override void OnTutorialContextChanged(TutorialContextChangedEvent obj)`

**Purpose:** **Purpose:** Invoked when the tutorial context changed event is raised.

```csharp
// Obtain an instance of BuyingFoodStep1Tutorial from the subsystem API first
BuyingFoodStep1Tutorial buyingFoodStep1Tutorial = ...;
buyingFoodStep1Tutorial.OnTutorialContextChanged(obj);
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** **Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of BuyingFoodStep1Tutorial from the subsystem API first
BuyingFoodStep1Tutorial buyingFoodStep1Tutorial = ...;
var result = buyingFoodStep1Tutorial.GetTutorialsRelevantContext();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BuyingFoodStep1Tutorial buyingFoodStep1Tutorial = ...;
buyingFoodStep1Tutorial.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)