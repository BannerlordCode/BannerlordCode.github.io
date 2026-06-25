---
title: "VassalRewardsModel"
description: "Auto-generated class reference for VassalRewardsModel."
---
# VassalRewardsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VassalRewardsModel : MBGameModel<VassalRewardsModel>`
**Base:** `MBGameModel<VassalRewardsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VassalRewardsModel.cs`

## Overview

`VassalRewardsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `VassalRewardsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `InfluenceReward` | `public abstract float InfluenceReward { get; }` |
| `RelationRewardWithLeader` | `public abstract int RelationRewardWithLeader { get; }` |

## Key Methods

### GetTroopRewardsForJoiningKingdom
`public abstract TroopRoster GetTroopRewardsForJoiningKingdom(Kingdom kingdom)`

**Purpose:** **Purpose:** Reads and returns the troop rewards for joining kingdom value held by the this instance.

```csharp
// Obtain an instance of VassalRewardsModel from the subsystem API first
VassalRewardsModel vassalRewardsModel = ...;
var result = vassalRewardsModel.GetTroopRewardsForJoiningKingdom(kingdom);
```

### GetEquipmentRewardsForJoiningKingdom
`public abstract ItemRoster GetEquipmentRewardsForJoiningKingdom(Kingdom kingdom)`

**Purpose:** **Purpose:** Reads and returns the equipment rewards for joining kingdom value held by the this instance.

```csharp
// Obtain an instance of VassalRewardsModel from the subsystem API first
VassalRewardsModel vassalRewardsModel = ...;
var result = vassalRewardsModel.GetEquipmentRewardsForJoiningKingdom(kingdom);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
VassalRewardsModel instance = ...;
```

## See Also

- [Area Index](../)