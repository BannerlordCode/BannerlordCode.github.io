---
title: "DefaultTradeAgreementModel"
description: "Auto-generated class reference for DefaultTradeAgreementModel."
---
# DefaultTradeAgreementModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTradeAgreementModel : TradeAgreementModel`
**Base:** `TradeAgreementModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTradeAgreementModel.cs`

## Overview

`DefaultTradeAgreementModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultTradeAgreementModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetInfluenceCostOfProposingTradeAgreement
`public override int GetInfluenceCostOfProposingTradeAgreement(Clan proposerClan)`

**Purpose:** **Purpose:** Reads and returns the influence cost of proposing trade agreement value held by the this instance.

```csharp
// Obtain an instance of DefaultTradeAgreementModel from the subsystem API first
DefaultTradeAgreementModel defaultTradeAgreementModel = ...;
var result = defaultTradeAgreementModel.GetInfluenceCostOfProposingTradeAgreement(proposerClan);
```

### GetMaximumTradeAgreementCount
`public override int GetMaximumTradeAgreementCount(Kingdom kingdom)`

**Purpose:** **Purpose:** Reads and returns the maximum trade agreement count value held by the this instance.

```csharp
// Obtain an instance of DefaultTradeAgreementModel from the subsystem API first
DefaultTradeAgreementModel defaultTradeAgreementModel = ...;
var result = defaultTradeAgreementModel.GetMaximumTradeAgreementCount(kingdom);
```

### CanMakeTradeAgreement
`public override bool CanMakeTradeAgreement(Kingdom kingdom, Kingdom other, bool checkOtherSideTradeSupport, out TextObject reason)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for make trade agreement.

```csharp
// Obtain an instance of DefaultTradeAgreementModel from the subsystem API first
DefaultTradeAgreementModel defaultTradeAgreementModel = ...;
var result = defaultTradeAgreementModel.CanMakeTradeAgreement(kingdom, other, false, reason);
```

### GetScoreOfStartingTradeAgreement
`public override float GetScoreOfStartingTradeAgreement(Kingdom kingdom, Kingdom targetKingdom, Clan clan)`

**Purpose:** **Purpose:** Reads and returns the score of starting trade agreement value held by the this instance.

```csharp
// Obtain an instance of DefaultTradeAgreementModel from the subsystem API first
DefaultTradeAgreementModel defaultTradeAgreementModel = ...;
var result = defaultTradeAgreementModel.GetScoreOfStartingTradeAgreement(kingdom, targetKingdom, clan);
```

### GetTradeAgreementDurationInYears
`public override CampaignTime GetTradeAgreementDurationInYears(Kingdom iniatatingKingdom, Kingdom otherKingdom)`

**Purpose:** **Purpose:** Reads and returns the trade agreement duration in years value held by the this instance.

```csharp
// Obtain an instance of DefaultTradeAgreementModel from the subsystem API first
DefaultTradeAgreementModel defaultTradeAgreementModel = ...;
var result = defaultTradeAgreementModel.GetTradeAgreementDurationInYears(iniatatingKingdom, otherKingdom);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultTradeAgreementModel>(new MyDefaultTradeAgreementModel());
```

## See Also

- [Area Index](../)