---
title: "DefaultSettlementSecurityModel"
description: "Auto-generated class reference for DefaultSettlementSecurityModel."
---
# DefaultSettlementSecurityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementSecurityModel : SettlementSecurityModel`
**Base:** `SettlementSecurityModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementSecurityModel.cs`

## Overview

`DefaultSettlementSecurityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementSecurityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateSecurityChange
`public override ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of security change.

```csharp
// Obtain an instance of DefaultSettlementSecurityModel from the subsystem API first
DefaultSettlementSecurityModel defaultSettlementSecurityModel = ...;
var result = defaultSettlementSecurityModel.CalculateSecurityChange(town, false);
```

### GetLootedNearbyPartySecurityEffect
`public override float GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)`

**Purpose:** Reads and returns the looted nearby party security effect value held by the this instance.

```csharp
// Obtain an instance of DefaultSettlementSecurityModel from the subsystem API first
DefaultSettlementSecurityModel defaultSettlementSecurityModel = ...;
var result = defaultSettlementSecurityModel.GetLootedNearbyPartySecurityEffect(town, 0);
```

### GetNearbyBanditPartyDefeatedSecurityEffect
`public override float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)`

**Purpose:** Reads and returns the nearby bandit party defeated security effect value held by the this instance.

```csharp
// Obtain an instance of DefaultSettlementSecurityModel from the subsystem API first
DefaultSettlementSecurityModel defaultSettlementSecurityModel = ...;
var result = defaultSettlementSecurityModel.GetNearbyBanditPartyDefeatedSecurityEffect(town, 0);
```

### CalculateGoldGainDueToHighSecurity
`public override void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** Calculates the current value or result of gold gain due to high security.

```csharp
// Obtain an instance of DefaultSettlementSecurityModel from the subsystem API first
DefaultSettlementSecurityModel defaultSettlementSecurityModel = ...;
defaultSettlementSecurityModel.CalculateGoldGainDueToHighSecurity(town, explainedNumber);
```

### CalculateGoldCutDueToLowSecurity
`public override void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** Calculates the current value or result of gold cut due to low security.

```csharp
// Obtain an instance of DefaultSettlementSecurityModel from the subsystem API first
DefaultSettlementSecurityModel defaultSettlementSecurityModel = ...;
defaultSettlementSecurityModel.CalculateGoldCutDueToLowSecurity(town, explainedNumber);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementSecurityModel>(new MyDefaultSettlementSecurityModel());
```

## See Also

- [Area Index](../)