<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EmissaryModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EmissaryModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EmissaryModel : MBGameModel<EmissaryModel>`
**Base:** `MBGameModel<EmissaryModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EmissaryModel.cs`

## Overview

`EmissaryModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<EmissaryModel>(new MyEmissaryModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `EmissaryRelationBonusForMainClan` | `public abstract int EmissaryRelationBonusForMainClan { get; }` |

## Key Methods

### IsEmissary
```csharp
public abstract bool IsEmissary(Hero hero)
```

## Usage Example

```csharp
// Typical usage of EmissaryModel (Model)
Game.Current.ReplaceModel<EmissaryModel>(new MyEmissaryModel());
```

## See Also

- [Complete Class Catalog](../catalog)