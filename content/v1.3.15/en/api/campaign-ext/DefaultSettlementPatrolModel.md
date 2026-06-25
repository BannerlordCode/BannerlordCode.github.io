---
title: "DefaultSettlementPatrolModel"
description: "Auto-generated class reference for DefaultSettlementPatrolModel."
---
# DefaultSettlementPatrolModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementPatrolModel : SettlementPatrolModel`
**Base:** `SettlementPatrolModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementPatrolModel.cs`

## Overview

`DefaultSettlementPatrolModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementPatrolModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPatrolPartySpawnDuration
`public override CampaignTime GetPatrolPartySpawnDuration(Settlement settlement, bool naval)`

**Purpose:** Reads and returns the `patrol party spawn duration` value held by the current object.

```csharp
// Obtain an instance of DefaultSettlementPatrolModel from the subsystem API first
DefaultSettlementPatrolModel defaultSettlementPatrolModel = ...;
var result = defaultSettlementPatrolModel.GetPatrolPartySpawnDuration(settlement, false);
```

### CanSettlementHavePatrolParties
`public override bool CanSettlementHavePatrolParties(Settlement settlement, bool naval)`

**Purpose:** Checks whether the current object meets the preconditions for `settlement have patrol parties`.

```csharp
// Obtain an instance of DefaultSettlementPatrolModel from the subsystem API first
DefaultSettlementPatrolModel defaultSettlementPatrolModel = ...;
var result = defaultSettlementPatrolModel.CanSettlementHavePatrolParties(settlement, false);
```

### GetPartyTemplateForPatrolParty
`public override PartyTemplateObject GetPartyTemplateForPatrolParty(Settlement settlement, bool naval)`

**Purpose:** Reads and returns the `party template for patrol party` value held by the current object.

```csharp
// Obtain an instance of DefaultSettlementPatrolModel from the subsystem API first
DefaultSettlementPatrolModel defaultSettlementPatrolModel = ...;
var result = defaultSettlementPatrolModel.GetPartyTemplateForPatrolParty(settlement, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementPatrolModel>(new MyDefaultSettlementPatrolModel());
```

## See Also

- [Area Index](../)