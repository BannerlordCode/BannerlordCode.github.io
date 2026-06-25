---
title: "PartyTradeModel"
description: "Auto-generated class reference for PartyTradeModel."
---
# PartyTradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTradeModel : MBGameModel<PartyTradeModel>`
**Base:** `MBGameModel<PartyTradeModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyTradeModel.cs`

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

**Purpose:** Reads and returns the trade penalty factor value held by the this instance.

```csharp
// Obtain an instance of PartyTradeModel from the subsystem API first
PartyTradeModel partyTradeModel = ...;
var result = partyTradeModel.GetTradePenaltyFactor(party);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PartyTradeModel instance = ...;
```

## See Also

- [Area Index](../)