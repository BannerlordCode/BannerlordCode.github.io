<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultEmissaryModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultEmissaryModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEmissaryModel : EmissaryModel`
**Base:** `EmissaryModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEmissaryModel.cs`

## Overview

`DefaultEmissaryModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultEmissaryModel>(new MyDefaultEmissaryModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `EmissaryRelationBonusForMainClan` | `public override int EmissaryRelationBonusForMainClan { get; }` |

## Key Methods

### IsEmissary
```csharp
public override bool IsEmissary(Hero hero)
```

## Usage Example

```csharp
// Typical usage of DefaultEmissaryModel (Model)
Game.Current.ReplaceModel<DefaultEmissaryModel>(new MyDefaultEmissaryModel());
```

## See Also

- [Complete Class Catalog](../catalog)