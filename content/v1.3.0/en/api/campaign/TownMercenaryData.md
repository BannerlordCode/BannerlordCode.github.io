---
title: "TownMercenaryData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TownMercenaryData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TownMercenaryData

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TownMercenaryData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/RecruitmentCampaignBehavior.cs`

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