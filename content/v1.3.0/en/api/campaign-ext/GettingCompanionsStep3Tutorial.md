---
title: "GettingCompanionsStep3Tutorial"
description: "Auto-generated class reference for GettingCompanionsStep3Tutorial."
---
# GettingCompanionsStep3Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class GettingCompanionsStep3Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/GettingCompanionsStep3Tutorial.cs`

## Overview

`GettingCompanionsStep3Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the current object is in the `conditions met for completion` state or condition.

```csharp
// Obtain an instance of GettingCompanionsStep3Tutorial from the subsystem API first
GettingCompanionsStep3Tutorial gettingCompanionsStep3Tutorial = ...;
var result = gettingCompanionsStep3Tutorial.IsConditionsMetForCompletion();
```

### OnPlayerStartTalkFromMenuOverlay
`public override void OnPlayerStartTalkFromMenuOverlay(Hero hero)`

**Purpose:** Invoked when the `player start talk from menu overlay` event is raised.

```csharp
// Obtain an instance of GettingCompanionsStep3Tutorial from the subsystem API first
GettingCompanionsStep3Tutorial gettingCompanionsStep3Tutorial = ...;
gettingCompanionsStep3Tutorial.OnPlayerStartTalkFromMenuOverlay(hero);
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the `tutorials relevant context` value held by the current object.

```csharp
// Obtain an instance of GettingCompanionsStep3Tutorial from the subsystem API first
GettingCompanionsStep3Tutorial gettingCompanionsStep3Tutorial = ...;
var result = gettingCompanionsStep3Tutorial.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the current object is in the `conditions met for activation` state or condition.

```csharp
// Obtain an instance of GettingCompanionsStep3Tutorial from the subsystem API first
GettingCompanionsStep3Tutorial gettingCompanionsStep3Tutorial = ...;
var result = gettingCompanionsStep3Tutorial.IsConditionsMetForActivation();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GettingCompanionsStep3Tutorial gettingCompanionsStep3Tutorial = ...;
gettingCompanionsStep3Tutorial.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)