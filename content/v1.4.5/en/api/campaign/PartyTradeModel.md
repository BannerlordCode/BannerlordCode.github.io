---
title: "PartyTradeModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTradeModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyTradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTradeModel : MBGameModel<PartyTradeModel>`
**Base:** `MBGameModel<PartyTradeModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyTradeModel.cs`

## Overview

`PartyTradeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyTradeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CaravanTransactionHighestValueItemCount` | `public abstract int CaravanTransactionHighestValueItemCount { get; }` |

## Key Methods

### GetTradePenaltyFactor
`public abstract float GetTradePenaltyFactor(MobileParty party)`

**Purpose:** Gets the current value of `trade penalty factor`.

## Usage Example

```csharp
var implementation = new CustomPartyTradeModel();
```

## See Also

- [Complete Class Catalog](../catalog)