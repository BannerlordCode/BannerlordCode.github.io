<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameTextManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameTextManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameTextManager`
**Base:** none
**File:** `TaleWorlds.Core/GameTextManager.cs`

## Overview

`GameTextManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `GameTextManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TagName` | `public string TagName { get; }` |
| `Weight` | `public uint Weight { get; }` |
| `IsTagReversed` | `public bool IsTagReversed { get; }` |

## Key Methods

### GetGameText
`public GameText GetGameText(string id)`

**Purpose:** Gets the current value of `game text`.

### AddGameText
`public GameText AddGameText(string id)`

**Purpose:** Adds `game text` to the current collection or state.

### TryGetText
`public bool TryGetText(string id, string variation, out TextObject text)`

**Purpose:** Attempts to get `get text`, usually returning the result in an out parameter.

### FindText
`public TextObject FindText(string id, string variation = null)`

**Purpose:** Handles logic related to `find text`.

### FindAllTextVariations
`public IEnumerable<TextObject> FindAllTextVariations(string id)`

**Purpose:** Handles logic related to `find all text variations`.

### LoadGameTexts
`public void LoadGameTexts()`

**Purpose:** Loads `game texts` data.

### LoadDefaultTexts
`public void LoadDefaultTexts()`

**Purpose:** Loads `default texts` data.

## Usage Example

```csharp
var manager = GameTextManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)