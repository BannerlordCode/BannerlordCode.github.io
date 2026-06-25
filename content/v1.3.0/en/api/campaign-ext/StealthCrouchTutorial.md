---
title: "StealthCrouchTutorial"
description: "Auto-generated class reference for StealthCrouchTutorial."
---
# StealthCrouchTutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class StealthCrouchTutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/StealthCrouchTutorial.cs`

## Overview

`StealthCrouchTutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of StealthCrouchTutorial from the subsystem API first
StealthCrouchTutorial stealthCrouchTutorial = ...;
var result = stealthCrouchTutorial.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of StealthCrouchTutorial from the subsystem API first
StealthCrouchTutorial stealthCrouchTutorial = ...;
var result = stealthCrouchTutorial.IsConditionsMetForActivation();
```

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of StealthCrouchTutorial from the subsystem API first
StealthCrouchTutorial stealthCrouchTutorial = ...;
var result = stealthCrouchTutorial.IsConditionsMetForCompletion();
```

### IsConditionsMetForVisibility
`public override bool IsConditionsMetForVisibility()`

**Purpose:** Determines whether the this instance is in the conditions met for visibility state or condition.

```csharp
// Obtain an instance of StealthCrouchTutorial from the subsystem API first
StealthCrouchTutorial stealthCrouchTutorial = ...;
var result = stealthCrouchTutorial.IsConditionsMetForVisibility();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StealthCrouchTutorial stealthCrouchTutorial = ...;
stealthCrouchTutorial.GetTutorialsRelevantContext();
```

## See Also

- [Area Index](../)