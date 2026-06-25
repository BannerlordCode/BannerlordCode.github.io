---
title: "EncyclopediaPageTutorialBase"
description: "Auto-generated class reference for EncyclopediaPageTutorialBase."
---
# EncyclopediaPageTutorialBase

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public abstract class EncyclopediaPageTutorialBase : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/EncyclopediaPageTutorialBase.cs`

## Overview

`EncyclopediaPageTutorialBase` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** **Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaPageTutorialBase from the subsystem API first
EncyclopediaPageTutorialBase encyclopediaPageTutorialBase = ...;
var result = encyclopediaPageTutorialBase.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of EncyclopediaPageTutorialBase from the subsystem API first
EncyclopediaPageTutorialBase encyclopediaPageTutorialBase = ...;
var result = encyclopediaPageTutorialBase.IsConditionsMetForActivation();
```

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** **Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of EncyclopediaPageTutorialBase from the subsystem API first
EncyclopediaPageTutorialBase encyclopediaPageTutorialBase = ...;
var result = encyclopediaPageTutorialBase.IsConditionsMetForCompletion();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
EncyclopediaPageTutorialBase instance = ...;
```

## See Also

- [Area Index](../)