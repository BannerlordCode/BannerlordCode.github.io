---
title: "GameTextVariation"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameTextVariation`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameTextVariation

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct GameTextVariation`
**Area:** core-extra

## Overview

`GameTextVariation` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `Variations` | `public IEnumerable<GameText.GameTextVariation> Variations { get; }` |
| `DefaultText` | `public TextObject DefaultText { get; }` |

## Key Methods

### AddVariationWithId
`public void AddVariationWithId(string variationId, TextObject text, List<GameTextManager.ChoiceTag> choiceTags)`

**Purpose:** Adds `variation with id` to the current collection or state.

### SetVariationWithId
`public void SetVariationWithId(string variationId, TextObject text, List<GameTextManager.ChoiceTag> choiceTags)`

**Purpose:** Sets the value or state of `variation with id`.

### AddVariation
`public void AddVariation(string text, params object propertiesAndWeights)`

**Purpose:** Adds `variation` to the current collection or state.

## Usage Example

```csharp
// First obtain a GameTextVariation instance from game state, then call one of its public methods
var value = new GameTextVariation();
value.AddVariationWithId("example", text, choiceTags);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
