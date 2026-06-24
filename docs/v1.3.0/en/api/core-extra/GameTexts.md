<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameTexts`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameTexts

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class GameTexts`
**Base:** none
**File:** `TaleWorlds.Core/GameTexts.cs`

## Overview

`GameTexts` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize(GameTextManager gameTextManager)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### FindText
`public static TextObject FindText(string id, string variation = null)`

**Purpose:** Handles logic related to `find text`.

### TryGetText
`public static bool TryGetText(string id, out TextObject textObject, string variation = null)`

**Purpose:** Attempts to get `get text`, usually returning the result in an out parameter.

### FindAllTextVariations
`public static IEnumerable<TextObject> FindAllTextVariations(string id)`

**Purpose:** Handles logic related to `find all text variations`.

### SetVariable
`public static void SetVariable(string variableName, string content)`

**Purpose:** Sets the value or state of `variable`.

### SetVariable
`public static void SetVariable(string variableName, float content)`

**Purpose:** Sets the value or state of `variable`.

### SetVariable
`public static void SetVariable(string variableName, int content)`

**Purpose:** Sets the value or state of `variable`.

### SetVariable
`public static void SetVariable(string variableName, TextObject content)`

**Purpose:** Sets the value or state of `variable`.

### ClearInstance
`public static void ClearInstance()`

**Purpose:** Handles logic related to `clear instance`.

### AddGameTextWithVariation
`public static GameTexts.GameTextHelper AddGameTextWithVariation(string id)`

**Purpose:** Adds `game text with variation` to the current collection or state.

### Variation
`public GameTexts.GameTextHelper Variation(string text, params object propertiesAndWeights)`

**Purpose:** Handles logic related to `variation`.

### MergeTextObjectsWithComma
`public static TextObject MergeTextObjectsWithComma(List<TextObject> textObjects, bool includeAnd)`

**Purpose:** Handles logic related to `merge text objects with comma`.

### MergeTextObjectsWithSymbol
`public static TextObject MergeTextObjectsWithSymbol(List<TextObject> textObjects, TextObject symbol, TextObject lastSymbol = null)`

**Purpose:** Handles logic related to `merge text objects with symbol`.

## Usage Example

```csharp
GameTexts.Initialize(gameTextManager);
```

## See Also

- [Complete Class Catalog](../catalog)