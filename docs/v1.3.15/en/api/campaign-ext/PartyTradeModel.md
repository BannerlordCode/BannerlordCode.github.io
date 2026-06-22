<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTradeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTradeModel : MBGameModel<PartyTradeModel>`
**Base:** `MBGameModel<PartyTradeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTradeModel.cs`

## Overview

`PartyTradeModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PartyTradeModel>(new MyPartyTradeModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `CaravanTransactionHighestValueItemCount` | `public abstract int CaravanTransactionHighestValueItemCount { get; }` |

## Key Methods

### GetTradePenaltyFactor
```csharp
public abstract float GetTradePenaltyFactor(MobileParty party)
```

## Usage Example

```csharp
// Typical usage of PartyTradeModel (Model)
Game.Current.ReplaceModel<PartyTradeModel>(new MyPartyTradeModel());
```

## See Also

- [Complete Class Catalog](../catalog)