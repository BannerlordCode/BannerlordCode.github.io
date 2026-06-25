---
title: "GameTexts"
description: "Auto-generated class reference for GameTexts."
---
# GameTexts

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class GameTexts`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameTexts.cs`

## Overview

`GameTexts` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Variation
`public GameTextHelper Variation(string text, params object propertiesAndWeights)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameTexts from the subsystem API first
GameTexts gameTexts = ...;
var result = gameTexts.Variation("example", propertiesAndWeights);
```

### MergeTextObjectsWithComma
`public static TextObject MergeTextObjectsWithComma(List<TextObject> textObjects, bool includeAnd)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameTexts.MergeTextObjectsWithComma(textObjects, false);
```

### MergeTextObjectsWithSymbol
`public static TextObject MergeTextObjectsWithSymbol(List<TextObject> textObjects, TextObject symbol, TextObject lastSymbol = null)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameTexts.MergeTextObjectsWithSymbol(textObjects, symbol, null);
```

### Initialize
`public static void Initialize(GameTextManager gameTextManager)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Static call; no instance required
GameTexts.Initialize(gameTextManager);
```

### FindText
`public static TextObject FindText(string id, string variation = null)`

**Purpose:** Looks up the matching `text` in the current collection or scope.

```csharp
// Static call; no instance required
GameTexts.FindText("example", "example");
```

### TryGetText
`public static bool TryGetText(string id, out TextObject textObject, string variation = null)`

**Purpose:** Attempts to retrieve `get text`, usually returning success through an out parameter.

```csharp
// Static call; no instance required
GameTexts.TryGetText("example", textObject, "example");
```

### FindAllTextVariations
`public static IEnumerable<TextObject> FindAllTextVariations(string id)`

**Purpose:** Looks up the matching `all text variations` in the current collection or scope.

```csharp
// Static call; no instance required
GameTexts.FindAllTextVariations("example");
```

### SetVariable
`public static void SetVariable(string variableName, string content)`

**Purpose:** Assigns a new value to `variable` and updates the object's internal state.

```csharp
// Static call; no instance required
GameTexts.SetVariable("example", "example");
```

### SetVariable
`public static void SetVariable(string variableName, float content)`

**Purpose:** Assigns a new value to `variable` and updates the object's internal state.

```csharp
// Static call; no instance required
GameTexts.SetVariable("example", 0);
```

### SetVariable
`public static void SetVariable(string variableName, int content)`

**Purpose:** Assigns a new value to `variable` and updates the object's internal state.

```csharp
// Static call; no instance required
GameTexts.SetVariable("example", 0);
```

### SetVariable
`public static void SetVariable(string variableName, TextObject content)`

**Purpose:** Assigns a new value to `variable` and updates the object's internal state.

```csharp
// Static call; no instance required
GameTexts.SetVariable("example", content);
```

### ClearInstance
`public static void ClearInstance()`

**Purpose:** Removes all `instance` from the current object.

```csharp
// Static call; no instance required
GameTexts.ClearInstance();
```

### AddGameTextWithVariation
`public static GameTextHelper AddGameTextWithVariation(string id)`

**Purpose:** Adds `game text with variation` to the current collection or state.

```csharp
// Static call; no instance required
GameTexts.AddGameTextWithVariation("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameTexts gameTexts = ...;
gameTexts.Variation("example", propertiesAndWeights);
```

## See Also

- [Area Index](../)