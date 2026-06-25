---
title: "BattleResultPartyData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleResultPartyData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleResultPartyData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct BattleResultPartyData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/BattleResultPartyData.cs`

## Overview

`BattleResultPartyData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BattleResultPartyData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### BattleResultPartyData
`public struct BattleResultPartyData(PartyBase party)`

**Purpose:** Handles logic related to `battle result party data`.

## Usage Example

```csharp
var value = new BattleResultPartyData();
```

## See Also

- [Complete Class Catalog](../catalog)