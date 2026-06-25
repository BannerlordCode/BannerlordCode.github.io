---
title: "GettingCompanionsStep1Tutorial"
description: "Auto-generated class reference for GettingCompanionsStep1Tutorial."
---
# GettingCompanionsStep1Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class GettingCompanionsStep1Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/GettingCompanionsStep1Tutorial.cs`

## Overview

`GettingCompanionsStep1Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the current object is in the `conditions met for completion` state or condition.

```csharp
// Obtain an instance of GettingCompanionsStep1Tutorial from the subsystem API first
GettingCompanionsStep1Tutorial gettingCompanionsStep1Tutorial = ...;
var result = gettingCompanionsStep1Tutorial.IsConditionsMetForCompletion();
```

### OnGameMenuOpened
`public override void OnGameMenuOpened(MenuCallbackArgs obj)`

**Purpose:** Invoked when the `game menu opened` event is raised.

```csharp
// Obtain an instance of GettingCompanionsStep1Tutorial from the subsystem API first
GettingCompanionsStep1Tutorial gettingCompanionsStep1Tutorial = ...;
gettingCompanionsStep1Tutorial.OnGameMenuOpened(obj);
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the current object is in the `conditions met for activation` state or condition.

```csharp
// Obtain an instance of GettingCompanionsStep1Tutorial from the subsystem API first
GettingCompanionsStep1Tutorial gettingCompanionsStep1Tutorial = ...;
var result = gettingCompanionsStep1Tutorial.IsConditionsMetForActivation();
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the `tutorials relevant context` value held by the current object.

```csharp
// Obtain an instance of GettingCompanionsStep1Tutorial from the subsystem API first
GettingCompanionsStep1Tutorial gettingCompanionsStep1Tutorial = ...;
var result = gettingCompanionsStep1Tutorial.GetTutorialsRelevantContext();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GettingCompanionsStep1Tutorial gettingCompanionsStep1Tutorial = ...;
gettingCompanionsStep1Tutorial.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)