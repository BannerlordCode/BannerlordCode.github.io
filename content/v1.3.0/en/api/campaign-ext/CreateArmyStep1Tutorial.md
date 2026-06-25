---
title: "CreateArmyStep1Tutorial"
description: "Auto-generated class reference for CreateArmyStep1Tutorial."
---
# CreateArmyStep1Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class CreateArmyStep1Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/CreateArmyStep1Tutorial.cs`

## Overview

`CreateArmyStep1Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the current object is in the `conditions met for completion` state or condition.

```csharp
// Obtain an instance of CreateArmyStep1Tutorial from the subsystem API first
CreateArmyStep1Tutorial createArmyStep1Tutorial = ...;
var result = createArmyStep1Tutorial.IsConditionsMetForCompletion();
```

### OnTutorialContextChanged
`public override void OnTutorialContextChanged(TutorialContextChangedEvent obj)`

**Purpose:** Invoked when the `tutorial context changed` event is raised.

```csharp
// Obtain an instance of CreateArmyStep1Tutorial from the subsystem API first
CreateArmyStep1Tutorial createArmyStep1Tutorial = ...;
createArmyStep1Tutorial.OnTutorialContextChanged(obj);
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the `tutorials relevant context` value held by the current object.

```csharp
// Obtain an instance of CreateArmyStep1Tutorial from the subsystem API first
CreateArmyStep1Tutorial createArmyStep1Tutorial = ...;
var result = createArmyStep1Tutorial.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the current object is in the `conditions met for activation` state or condition.

```csharp
// Obtain an instance of CreateArmyStep1Tutorial from the subsystem API first
CreateArmyStep1Tutorial createArmyStep1Tutorial = ...;
var result = createArmyStep1Tutorial.IsConditionsMetForActivation();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CreateArmyStep1Tutorial createArmyStep1Tutorial = ...;
createArmyStep1Tutorial.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)