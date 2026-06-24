<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameTextHelper`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameTextHelper

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameTextHelper`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/GameTexts.cs`

## Overview

`GameTextHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `GameTextHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Variation
`public GameTextHelper Variation(string text, params object propertiesAndWeights)`

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