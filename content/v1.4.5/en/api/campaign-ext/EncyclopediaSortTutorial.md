---
title: "EncyclopediaSortTutorial"
description: "Auto-generated class reference for EncyclopediaSortTutorial."
---
# EncyclopediaSortTutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class EncyclopediaSortTutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/EncyclopediaSortTutorial.cs`

## Overview

`EncyclopediaSortTutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** **Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaSortTutorial from the subsystem API first
EncyclopediaSortTutorial encyclopediaSortTutorial = ...;
var result = encyclopediaSortTutorial.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of EncyclopediaSortTutorial from the subsystem API first
EncyclopediaSortTutorial encyclopediaSortTutorial = ...;
var result = encyclopediaSortTutorial.IsConditionsMetForActivation();
```

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of EncyclopediaSortTutorial from the subsystem API first
EncyclopediaSortTutorial encyclopediaSortTutorial = ...;
var result = encyclopediaSortTutorial.IsConditionsMetForCompletion();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaSortTutorial encyclopediaSortTutorial = ...;
encyclopediaSortTutorial.GetTutorialsRelevantContext();
```

## See Also

- [Area Index](../)