---
title: "NavigateOnMapTutorialStep1"
description: "Auto-generated class reference for NavigateOnMapTutorialStep1."
---
# NavigateOnMapTutorialStep1

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class NavigateOnMapTutorialStep1 : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/NavigateOnMapTutorialStep1.cs`

## Overview

`NavigateOnMapTutorialStep1` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the `tutorials relevant context` value held by the current object.

```csharp
// Obtain an instance of NavigateOnMapTutorialStep1 from the subsystem API first
NavigateOnMapTutorialStep1 navigateOnMapTutorialStep1 = ...;
var result = navigateOnMapTutorialStep1.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the current object is in the `conditions met for activation` state or condition.

```csharp
// Obtain an instance of NavigateOnMapTutorialStep1 from the subsystem API first
NavigateOnMapTutorialStep1 navigateOnMapTutorialStep1 = ...;
var result = navigateOnMapTutorialStep1.IsConditionsMetForActivation();
```

### OnMainMapCameraMove
`public override void OnMainMapCameraMove(MapScreen.MainMapCameraMoveEvent obj)`

**Purpose:** Invoked when the `main map camera move` event is raised.

```csharp
// Obtain an instance of NavigateOnMapTutorialStep1 from the subsystem API first
NavigateOnMapTutorialStep1 navigateOnMapTutorialStep1 = ...;
navigateOnMapTutorialStep1.OnMainMapCameraMove(obj);
```

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the current object is in the `conditions met for completion` state or condition.

```csharp
// Obtain an instance of NavigateOnMapTutorialStep1 from the subsystem API first
NavigateOnMapTutorialStep1 navigateOnMapTutorialStep1 = ...;
var result = navigateOnMapTutorialStep1.IsConditionsMetForCompletion();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NavigateOnMapTutorialStep1 navigateOnMapTutorialStep1 = ...;
navigateOnMapTutorialStep1.GetTutorialsRelevantContext();
```

## See Also

- [Area Index](../)