---
title: "TownMercenaryData"
description: "Auto-generated class reference for TownMercenaryData."
---
# TownMercenaryData

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TownMercenaryData`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/RecruitmentCampaignBehavior.cs`

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

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TownMercenaryData from the subsystem API first
TownMercenaryData townMercenaryData = ...;
townMercenaryData.ChangeMercenaryType(troopType, 0);
```

### ChangeMercenaryCount
`public void ChangeMercenaryCount(int difference)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TownMercenaryData from the subsystem API first
TownMercenaryData townMercenaryData = ...;
townMercenaryData.ChangeMercenaryCount(0);
```

### HasAvailableMercenary
`public bool HasAvailableMercenary(Occupation occupation = Occupation.NotAssigned)`

**Purpose:** Determines whether the current object already holds `available mercenary`.

```csharp
// Obtain an instance of TownMercenaryData from the subsystem API first
TownMercenaryData townMercenaryData = ...;
var result = townMercenaryData.HasAvailableMercenary(occupation.NotAssigned);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
TownMercenaryData entry = ...;
```

## See Also

- [Area Index](../)