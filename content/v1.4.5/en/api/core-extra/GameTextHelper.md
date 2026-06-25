---
title: "GameTextHelper"
description: "Auto-generated class reference for GameTextHelper."
---
# GameTextHelper

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameTextHelper`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameTexts.cs`

## Overview

`GameTextHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `GameTextHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Variation
`public GameTextHelper Variation(string text, params object propertiesAndWeights)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameTextHelper from the subsystem API first
GameTextHelper gameTextHelper = ...;
var result = gameTextHelper.Variation("example", propertiesAndWeights);
```

### MergeTextObjectsWithComma
`public static TextObject MergeTextObjectsWithComma(List<TextObject> textObjects, bool includeAnd)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameTextHelper.MergeTextObjectsWithComma(textObjects, false);
```

### MergeTextObjectsWithSymbol
`public static TextObject MergeTextObjectsWithSymbol(List<TextObject> textObjects, TextObject symbol, TextObject lastSymbol = null)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameTextHelper.MergeTextObjectsWithSymbol(textObjects, symbol, null);
```

## Usage Example

```csharp
GameTextHelper.Initialize();
```

## See Also

- [Area Index](../)