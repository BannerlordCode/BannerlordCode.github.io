---
title: "DefaultMinorFactionsModel"
description: "Auto-generated class reference for DefaultMinorFactionsModel."
---
# DefaultMinorFactionsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMinorFactionsModel : MinorFactionsModel`
**Base:** `MinorFactionsModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMinorFactionsModel.cs`

## Overview

`DefaultMinorFactionsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMinorFactionsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMercenaryAwardFactorToJoinKingdom
`public override int GetMercenaryAwardFactorToJoinKingdom(Clan mercenaryClan, Kingdom kingdom, bool neededAmountForClanToJoinCalculation = false)`

**Purpose:** **Purpose:** Reads and returns the mercenary award factor to join kingdom value held by the this instance.

```csharp
// Obtain an instance of DefaultMinorFactionsModel from the subsystem API first
DefaultMinorFactionsModel defaultMinorFactionsModel = ...;
var result = defaultMinorFactionsModel.GetMercenaryAwardFactorToJoinKingdom(mercenaryClan, kingdom, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMinorFactionsModel>(new MyDefaultMinorFactionsModel());
```

## See Also

- [Area Index](../)