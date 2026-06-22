<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameTextVariation`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameTextVariation

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** struct
**Area:** Core

## Overview

> This is an auto-generated stub. `GameTextVariation` is a struct in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `Variations` | `public IEnumerable<GameText.GameTextVariation> Variations { get; }` |
| `DefaultText` | `public TextObject DefaultText { get; }` |


## Key Methods

### AddVariationWithId

```csharp
public void AddVariationWithId(string variationId, TextObject text, List<GameTextManager.ChoiceTag> choiceTags)
```

### SetVariationWithId

```csharp
public void SetVariationWithId(string variationId, TextObject text, List<GameTextManager.ChoiceTag> choiceTags)
```

### AddVariation

```csharp
public void AddVariation(string text, params object propertiesAndWeights)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)