---
title: "DefaultTradeAgreementModel"
description: "Auto-generated class reference for DefaultTradeAgreementModel."
---
# DefaultTradeAgreementModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTradeAgreementModel : TradeAgreementModel`
**Base:** `TradeAgreementModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultTradeAgreementModel.cs`

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
`public override bool CanMakeTradeAgreement(Kingdom querierKingdom, Kingdom queriedKingdom, bool checkOtherSideSupport, out TextObject reason, bool includeReason = false)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for make trade agreement.

```csharp
// Obtain an instance of DefaultTradeAgreementModel from the subsystem API first
DefaultTradeAgreementModel defaultTradeAgreementModel = ...;
var result = defaultTradeAgreementModel.CanMakeTradeAgreement(querierKingdom, queriedKingdom, false, reason, false);
```

### GetScoreOfStartingTradeAgreement
`public override float GetScoreOfStartingTradeAgreement(Kingdom querierKingdom, Kingdom queriedKingdom, Clan clan, out TextObject detailedBreakdownTooltip, bool includeExplanation = false)`

**Purpose:** **Purpose:** Reads and returns the score of starting trade agreement value held by the this instance.

```csharp
// Obtain an instance of DefaultTradeAgreementModel from the subsystem API first
DefaultTradeAgreementModel defaultTradeAgreementModel = ...;
var result = defaultTradeAgreementModel.GetScoreOfStartingTradeAgreement(querierKingdom, queriedKingdom, clan, detailedBreakdownTooltip, false);
```

### GetTradeAgreementDurationInYears
`public override CampaignTime GetTradeAgreementDurationInYears(Kingdom iniatatingKingdom, Kingdom otherKingdom)`

**Purpose:** **Purpose:** Reads and returns the trade agreement duration in years value held by the this instance.

```csharp
// Obtain an instance of DefaultTradeAgreementModel from the subsystem API first
DefaultTradeAgreementModel defaultTradeAgreementModel = ...;
var result = defaultTradeAgreementModel.GetTradeAgreementDurationInYears(iniatatingKingdom, otherKingdom);
```

### GetProfitPerCaravanVisit
`public override int GetProfitPerCaravanVisit(MobileParty mobileParty)`

**Purpose:** **Purpose:** Reads and returns the profit per caravan visit value held by the this instance.

```csharp
// Obtain an instance of DefaultTradeAgreementModel from the subsystem API first
DefaultTradeAgreementModel defaultTradeAgreementModel = ...;
var result = defaultTradeAgreementModel.GetProfitPerCaravanVisit(mobileParty);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultTradeAgreementModel>(new MyDefaultTradeAgreementModel());
```

## See Also

- [Area Index](../)