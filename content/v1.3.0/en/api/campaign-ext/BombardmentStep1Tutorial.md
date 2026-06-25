---
title: "BombardmentStep1Tutorial"
description: "Auto-generated class reference for BombardmentStep1Tutorial."
---
# BombardmentStep1Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class BombardmentStep1Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/BombardmentStep1Tutorial.cs`

## Overview

`BombardmentStep1Tutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the current object is in the `conditions met for completion` state or condition.

```csharp
// Obtain an instance of BombardmentStep1Tutorial from the subsystem API first
BombardmentStep1Tutorial bombardmentStep1Tutorial = ...;
var result = bombardmentStep1Tutorial.IsConditionsMetForCompletion();
```

### OnPlayerStartEngineConstruction
`public override void OnPlayerStartEngineConstruction(PlayerStartEngineConstructionEvent obj)`

**Purpose:** Invoked when the `player start engine construction` event is raised.

```csharp
// Obtain an instance of BombardmentStep1Tutorial from the subsystem API first
BombardmentStep1Tutorial bombardmentStep1Tutorial = ...;
bombardmentStep1Tutorial.OnPlayerStartEngineConstruction(obj);
```

### OnGameMenuOptionSelected
`public override void OnGameMenuOptionSelected(GameMenuOption obj)`

**Purpose:** Invoked when the `game menu option selected` event is raised.

```csharp
// Obtain an instance of BombardmentStep1Tutorial from the subsystem API first
BombardmentStep1Tutorial bombardmentStep1Tutorial = ...;
bombardmentStep1Tutorial.OnGameMenuOptionSelected(obj);
```

### OnGameMenuOpened
`public override void OnGameMenuOpened(MenuCallbackArgs obj)`

**Purpose:** Invoked when the `game menu opened` event is raised.

```csharp
// Obtain an instance of BombardmentStep1Tutorial from the subsystem API first
BombardmentStep1Tutorial bombardmentStep1Tutorial = ...;
bombardmentStep1Tutorial.OnGameMenuOpened(obj);
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the `tutorials relevant context` value held by the current object.

```csharp
// Obtain an instance of BombardmentStep1Tutorial from the subsystem API first
BombardmentStep1Tutorial bombardmentStep1Tutorial = ...;
var result = bombardmentStep1Tutorial.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the current object is in the `conditions met for activation` state or condition.

```csharp
// Obtain an instance of BombardmentStep1Tutorial from the subsystem API first
BombardmentStep1Tutorial bombardmentStep1Tutorial = ...;
var result = bombardmentStep1Tutorial.IsConditionsMetForActivation();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BombardmentStep1Tutorial bombardmentStep1Tutorial = ...;
bombardmentStep1Tutorial.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)