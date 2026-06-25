---
title: "GameTextHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameTextHelper`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameTextHelper

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameTextHelper`
**Area:** core-extra

## Overview

`GameTextHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `GameTextHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
GameTextHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
