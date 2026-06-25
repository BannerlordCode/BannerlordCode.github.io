---
title: "PartyBaseHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyBaseHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyBaseHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PartyBaseHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/PartyBaseHelper.cs`

## Overview

`PartyBaseHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `PartyBaseHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SortRoster
`public static void SortRoster(MobileParty mobileParty)`

**Purpose:** Handles logic related to `sort roster`.

### GetPartySizeText
`public static TextObject GetPartySizeText(PartyBase party)`

**Purpose:** Gets the current value of `party size text`.

### GetPartySizeText
`public static TextObject GetPartySizeText(int healtyNumber, int woundedNumber, bool isInspected)`

**Purpose:** Gets the current value of `party size text`.

### GetShipSizeText
`public static string GetShipSizeText(int shipCount, bool isInspected)`

**Purpose:** Gets the current value of `ship size text`.

### FindPartySizeNormalLimit
`public static float FindPartySizeNormalLimit(MobileParty mobileParty)`

**Purpose:** Handles logic related to `find party size normal limit`.

### GetCaptainOfTroop
`public static Hero GetCaptainOfTroop(PartyBase affectorParty, CharacterObject affectorCharacter)`

**Purpose:** Gets the current value of `captain of troop`.

### PrintRosterContents
`public static string PrintRosterContents(TroopRoster roster)`

**Purpose:** Handles logic related to `print roster contents`.

### PrintSummarisedItemRoster
`public static TextObject PrintSummarisedItemRoster(ItemRoster items)`

**Purpose:** Handles logic related to `print summarised item roster`.

### PrintRegularTroopCategories
`public static TextObject PrintRegularTroopCategories(TroopRoster roster)`

**Purpose:** Handles logic related to `print regular troop categories`.

### GetVisualPartyLeader
`public static CharacterObject GetVisualPartyLeader(PartyBase party)`

**Purpose:** Gets the current value of `visual party leader`.

### GetSpeedLimitation
`public static int GetSpeedLimitation(ItemRoster partyItemRoster, out ItemObject speedLimitationItem)`

**Purpose:** Gets the current value of `speed limitation`.

### HasFeat
`public static bool HasFeat(PartyBase party, FeatObject feat)`

**Purpose:** Checks whether the current object has/contains `feat`.

## Usage Example

```csharp
PartyBaseHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)