---
title: "RecruitmentStep2Tutorial"
description: "Auto-generated class reference for RecruitmentStep2Tutorial."
---
# RecruitmentStep2Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class RecruitmentStep2Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/RecruitmentStep2Tutorial.cs`

## Overview

`RecruitmentStep2Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of RecruitmentStep2Tutorial from the subsystem API first
RecruitmentStep2Tutorial recruitmentStep2Tutorial = ...;
var result = recruitmentStep2Tutorial.IsConditionsMetForCompletion();
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of RecruitmentStep2Tutorial from the subsystem API first
RecruitmentStep2Tutorial recruitmentStep2Tutorial = ...;
var result = recruitmentStep2Tutorial.GetTutorialsRelevantContext();
```

### OnPlayerRecruitedUnit
`public override void OnPlayerRecruitedUnit(CharacterObject obj, int count)`

**Purpose:** Invoked when the player recruited unit event is raised.

```csharp
// Obtain an instance of RecruitmentStep2Tutorial from the subsystem API first
RecruitmentStep2Tutorial recruitmentStep2Tutorial = ...;
recruitmentStep2Tutorial.OnPlayerRecruitedUnit(obj, 0);
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of RecruitmentStep2Tutorial from the subsystem API first
RecruitmentStep2Tutorial recruitmentStep2Tutorial = ...;
var result = recruitmentStep2Tutorial.IsConditionsMetForActivation();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RecruitmentStep2Tutorial recruitmentStep2Tutorial = ...;
recruitmentStep2Tutorial.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)