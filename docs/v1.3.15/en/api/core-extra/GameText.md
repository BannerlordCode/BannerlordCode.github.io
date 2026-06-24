<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameText`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameText

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameText`
**Base:** none
**File:** `TaleWorlds.Core/GameText.cs`

## Overview

`GameText` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new GameText();
value.AddVariationWithId("example", text, choiceTags);
```

## See Also

- [Complete Class Catalog](../catalog)