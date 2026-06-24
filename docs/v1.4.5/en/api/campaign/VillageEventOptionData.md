<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillageEventOptionData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VillageEventOptionData

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct VillageEventOptionData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/RevenueFarmingIssueBehavior.cs`

## Overview

`VillageEventOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `VillageEventOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### VillageEventOptionData
`public struct VillageEventOptionData(string text, GameMenuOption.OnConditionDelegate onCondition, GameMenuOption.OnConsequenceDelegate onConsequence, bool isLeave = false)`

**Purpose:** Handles logic related to `village event option data`.

## Usage Example

```csharp
var value = new VillageEventOptionData();
```

## See Also

- [Complete Class Catalog](../catalog)