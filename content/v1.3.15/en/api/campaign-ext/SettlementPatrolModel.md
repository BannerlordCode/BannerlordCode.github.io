---
title: "SettlementPatrolModel"
description: "Auto-generated class reference for SettlementPatrolModel."
---
# SettlementPatrolModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementPatrolModel : MBGameModel<SettlementPatrolModel>`
**Base:** `MBGameModel<SettlementPatrolModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementPatrolModel.cs`

## Overview

`SettlementPatrolModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SettlementPatrolModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPatrolPartySpawnDuration
`public abstract CampaignTime GetPatrolPartySpawnDuration(Settlement settlement, bool naval)`

**Purpose:** Reads and returns the `patrol party spawn duration` value held by the current object.

```csharp
// Obtain an instance of SettlementPatrolModel from the subsystem API first
SettlementPatrolModel settlementPatrolModel = ...;
var result = settlementPatrolModel.GetPatrolPartySpawnDuration(settlement, false);
```

### CanSettlementHavePatrolParties
`public abstract bool CanSettlementHavePatrolParties(Settlement settlement, bool naval)`

**Purpose:** Checks whether the current object meets the preconditions for `settlement have patrol parties`.

```csharp
// Obtain an instance of SettlementPatrolModel from the subsystem API first
SettlementPatrolModel settlementPatrolModel = ...;
var result = settlementPatrolModel.CanSettlementHavePatrolParties(settlement, false);
```

### GetPartyTemplateForPatrolParty
`public abstract PartyTemplateObject GetPartyTemplateForPatrolParty(Settlement settlement, bool naval)`

**Purpose:** Reads and returns the `party template for patrol party` value held by the current object.

```csharp
// Obtain an instance of SettlementPatrolModel from the subsystem API first
SettlementPatrolModel settlementPatrolModel = ...;
var result = settlementPatrolModel.GetPartyTemplateForPatrolParty(settlement, false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SettlementPatrolModel instance = ...;
```

## See Also

- [Area Index](../)