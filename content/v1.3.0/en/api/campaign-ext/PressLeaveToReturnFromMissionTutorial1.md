---
title: "PressLeaveToReturnFromMissionTutorial1"
description: "Auto-generated class reference for PressLeaveToReturnFromMissionTutorial1."
---
# PressLeaveToReturnFromMissionTutorial1

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class PressLeaveToReturnFromMissionTutorial1 : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/PressLeaveToReturnFromMissionTutorial1.cs`

## Overview

`PressLeaveToReturnFromMissionTutorial1` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of PressLeaveToReturnFromMissionTutorial1 from the subsystem API first
PressLeaveToReturnFromMissionTutorial1 pressLeaveToReturnFromMissionTutorial1 = ...;
var result = pressLeaveToReturnFromMissionTutorial1.IsConditionsMetForCompletion();
```

### OnTutorialContextChanged
`public override void OnTutorialContextChanged(TutorialContextChangedEvent obj)`

**Purpose:** Invoked when the tutorial context changed event is raised.

```csharp
// Obtain an instance of PressLeaveToReturnFromMissionTutorial1 from the subsystem API first
PressLeaveToReturnFromMissionTutorial1 pressLeaveToReturnFromMissionTutorial1 = ...;
pressLeaveToReturnFromMissionTutorial1.OnTutorialContextChanged(obj);
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of PressLeaveToReturnFromMissionTutorial1 from the subsystem API first
PressLeaveToReturnFromMissionTutorial1 pressLeaveToReturnFromMissionTutorial1 = ...;
var result = pressLeaveToReturnFromMissionTutorial1.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of PressLeaveToReturnFromMissionTutorial1 from the subsystem API first
PressLeaveToReturnFromMissionTutorial1 pressLeaveToReturnFromMissionTutorial1 = ...;
var result = pressLeaveToReturnFromMissionTutorial1.IsConditionsMetForActivation();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PressLeaveToReturnFromMissionTutorial1 pressLeaveToReturnFromMissionTutorial1 = ...;
pressLeaveToReturnFromMissionTutorial1.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)