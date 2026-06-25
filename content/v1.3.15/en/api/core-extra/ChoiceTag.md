---
title: "ChoiceTag"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChoiceTag`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChoiceTag

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct ChoiceTag`
**Area:** core-extra

## Overview

`ChoiceTag` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
// First obtain a ChoiceTag instance from game state, then call one of its public methods
var value = new ChoiceTag();
value.GetGameText("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
