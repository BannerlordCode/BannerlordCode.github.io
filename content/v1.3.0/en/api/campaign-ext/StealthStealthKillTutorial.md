---
title: "StealthStealthKillTutorial"
description: "Auto-generated class reference for StealthStealthKillTutorial."
---
# StealthStealthKillTutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class StealthStealthKillTutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/StealthStealthKillTutorial.cs`

## Overview

`StealthStealthKillTutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of StealthStealthKillTutorial from the subsystem API first
StealthStealthKillTutorial stealthStealthKillTutorial = ...;
var result = stealthStealthKillTutorial.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of StealthStealthKillTutorial from the subsystem API first
StealthStealthKillTutorial stealthStealthKillTutorial = ...;
var result = stealthStealthKillTutorial.IsConditionsMetForActivation();
```

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of StealthStealthKillTutorial from the subsystem API first
StealthStealthKillTutorial stealthStealthKillTutorial = ...;
var result = stealthStealthKillTutorial.IsConditionsMetForCompletion();
```

### IsConditionsMetForVisibility
`public override bool IsConditionsMetForVisibility()`

**Purpose:** Determines whether the this instance is in the conditions met for visibility state or condition.

```csharp
// Obtain an instance of StealthStealthKillTutorial from the subsystem API first
StealthStealthKillTutorial stealthStealthKillTutorial = ...;
var result = stealthStealthKillTutorial.IsConditionsMetForVisibility();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StealthStealthKillTutorial stealthStealthKillTutorial = ...;
stealthStealthKillTutorial.GetTutorialsRelevantContext();
```

## See Also

- [Area Index](../)