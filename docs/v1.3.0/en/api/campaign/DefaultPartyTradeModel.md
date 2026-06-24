<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyTradeModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartyTradeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTradeModel : PartyTradeModel`
**Base:** `PartyTradeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTradeModel.cs`

## Overview

`DefaultPartyTradeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyTradeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CaravanTransactionHighestValueItemCount` | `public override int CaravanTransactionHighestValueItemCount { get; }` |

## Key Methods

### GetTradePenaltyFactor
`public override float GetTradePenaltyFactor(MobileParty party)`

**Purpose:** Gets the current value of `trade penalty factor`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyTradeModel>(new MyDefaultPartyTradeModel());
```

## See Also

- [Complete Class Catalog](../catalog)