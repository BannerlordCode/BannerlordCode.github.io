<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TownMercenaryData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TownMercenaryData

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TownMercenaryData`
**Area:** campaign-ext

## Overview

`TownMercenaryData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TownMercenaryData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopType` | `public CharacterObject TroopType { get; }` |
| `Number` | `public int Number { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### GetMercenaryData
`public RecruitmentCampaignBehavior.TownMercenaryData GetMercenaryData(Town town)`

**Purpose:** Gets the current value of `mercenary data`.

### HourlyTickParty
`public void HourlyTickParty(MobileParty mobileParty)`

**Purpose:** Handles logic related to `hourly tick party`.

### OnBeforeSettlementEntered
`public void OnBeforeSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**Purpose:** Called when the `before settlement entered` event is raised.

### ChangeMercenaryType
`public void ChangeMercenaryType(CharacterObject troopType, int number)`

**Purpose:** Handles logic related to `change mercenary type`.

### ChangeMercenaryCount
`public void ChangeMercenaryCount(int difference)`

**Purpose:** Handles logic related to `change mercenary count`.

### HasAvailableMercenary
`public bool HasAvailableMercenary(Occupation occupation = Occupation.NotAssigned)`

**Purpose:** Checks whether the current object has/contains `available mercenary`.

## Usage Example

```csharp
var value = new TownMercenaryData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
