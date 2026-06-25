---
title: "NavigateOnMapTutorialStep2"
description: "Auto-generated class reference for NavigateOnMapTutorialStep2."
---
# NavigateOnMapTutorialStep2

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class NavigateOnMapTutorialStep2 : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/NavigateOnMapTutorialStep2.cs`

## Overview

`NavigateOnMapTutorialStep2` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of NavigateOnMapTutorialStep2 from the subsystem API first
NavigateOnMapTutorialStep2 navigateOnMapTutorialStep2 = ...;
var result = navigateOnMapTutorialStep2.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of NavigateOnMapTutorialStep2 from the subsystem API first
NavigateOnMapTutorialStep2 navigateOnMapTutorialStep2 = ...;
var result = navigateOnMapTutorialStep2.IsConditionsMetForActivation();
```

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of NavigateOnMapTutorialStep2 from the subsystem API first
NavigateOnMapTutorialStep2 navigateOnMapTutorialStep2 = ...;
var result = navigateOnMapTutorialStep2.IsConditionsMetForCompletion();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NavigateOnMapTutorialStep2 navigateOnMapTutorialStep2 = ...;
navigateOnMapTutorialStep2.GetTutorialsRelevantContext();
```

## See Also

- [Area Index](../)