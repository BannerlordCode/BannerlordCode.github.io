<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyTradeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyTradeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTradeModel : PartyTradeModel`
**Base:** `PartyTradeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTradeModel.cs`

## Overview

`DefaultPartyTradeModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultPartyTradeModel>(new MyDefaultPartyTradeModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `CaravanTransactionHighestValueItemCount` | `public override int CaravanTransactionHighestValueItemCount { get; }` |

## Key Methods

### GetTradePenaltyFactor
```csharp
public override float GetTradePenaltyFactor(MobileParty party)
```

## Usage Example

```csharp
// Typical usage of DefaultPartyTradeModel (Model)
Game.Current.ReplaceModel<DefaultPartyTradeModel>(new MyDefaultPartyTradeModel());
```

## See Also

- [Complete Class Catalog](../catalog)