---
title: "DefaultVassalRewardsModel"
description: "Auto-generated class reference for DefaultVassalRewardsModel."
---
# DefaultVassalRewardsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVassalRewardsModel : VassalRewardsModel`
**Base:** `VassalRewardsModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultVassalRewardsModel.cs`

## Overview

`DefaultVassalRewardsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultVassalRewardsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEquipmentRewardsForJoiningKingdom
`public override ItemRoster GetEquipmentRewardsForJoiningKingdom(Kingdom kingdom)`

**Purpose:** Reads and returns the equipment rewards for joining kingdom value held by the this instance.

```csharp
// Obtain an instance of DefaultVassalRewardsModel from the subsystem API first
DefaultVassalRewardsModel defaultVassalRewardsModel = ...;
var result = defaultVassalRewardsModel.GetEquipmentRewardsForJoiningKingdom(kingdom);
```

### GetTroopRewardsForJoiningKingdom
`public override TroopRoster GetTroopRewardsForJoiningKingdom(Kingdom kingdom)`

**Purpose:** Reads and returns the troop rewards for joining kingdom value held by the this instance.

```csharp
// Obtain an instance of DefaultVassalRewardsModel from the subsystem API first
DefaultVassalRewardsModel defaultVassalRewardsModel = ...;
var result = defaultVassalRewardsModel.GetTroopRewardsForJoiningKingdom(kingdom);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultVassalRewardsModel>(new MyDefaultVassalRewardsModel());
```

## See Also

- [Area Index](../)