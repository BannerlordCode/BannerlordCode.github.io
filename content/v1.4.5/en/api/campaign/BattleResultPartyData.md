---
title: "BattleResultPartyData"
description: "Auto-generated class reference for BattleResultPartyData."
---
# BattleResultPartyData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct BattleResultPartyData`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/BattleResultPartyData.cs`

## Overview

`BattleResultPartyData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BattleResultPartyData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### BattleResultPartyData
`public struct BattleResultPartyData(PartyBase party)`

**Purpose:** Executes the BattleResultPartyData logic.

```csharp
// Obtain an instance of BattleResultPartyData from the subsystem API first
BattleResultPartyData battleResultPartyData = ...;
var result = battleResultPartyData.BattleResultPartyData(party);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
BattleResultPartyData entry = ...;
```

## See Also

- [Area Index](../)