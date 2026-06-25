---
title: "GameText"
description: "Auto-generated class reference for GameText."
---
# GameText

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameText`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameText.cs`

## Overview

`GameText` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `DefaultText` | `public TextObject DefaultText { get; }` |

## Key Methods

### AddVariationWithId
`public void AddVariationWithId(string variationId, TextObject text, List<GameTextManager.ChoiceTag> choiceTags)`

**Purpose:** Adds `variation with id` to the current collection or state.

```csharp
// Obtain an instance of GameText from the subsystem API first
GameText gameText = ...;
gameText.AddVariationWithId("example", text, choiceTags);
```

### SetVariationWithId
`public void SetVariationWithId(string variationId, TextObject text, List<GameTextManager.ChoiceTag> choiceTags)`

**Purpose:** Assigns a new value to `variation with id` and updates the object's internal state.

```csharp
// Obtain an instance of GameText from the subsystem API first
GameText gameText = ...;
gameText.SetVariationWithId("example", text, choiceTags);
```

### AddVariation
`public void AddVariation(string text, params object propertiesAndWeights)`

**Purpose:** Adds `variation` to the current collection or state.

```csharp
// Obtain an instance of GameText from the subsystem API first
GameText gameText = ...;
gameText.AddVariation("example", propertiesAndWeights);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameText gameText = ...;
gameText.AddVariationWithId("example", text, choiceTags);
```

## See Also

- [Area Index](../)