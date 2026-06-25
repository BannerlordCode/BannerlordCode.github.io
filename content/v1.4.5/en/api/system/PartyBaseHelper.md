---
title: "PartyBaseHelper"
description: "Auto-generated class reference for PartyBaseHelper."
---
# PartyBaseHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PartyBaseHelper`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/PartyBaseHelper.cs`

## Overview

`PartyBaseHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `PartyBaseHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SortRoster
`public static void SortRoster(MobileParty mobileParty)`

**Purpose:** **Purpose:** Executes the SortRoster logic.

```csharp
// Static call; no instance required
PartyBaseHelper.SortRoster(mobileParty);
```

### GetPartySizeText
`public static TextObject GetPartySizeText(PartyBase party)`

**Purpose:** **Purpose:** Reads and returns the party size text value held by the this instance.

```csharp
// Static call; no instance required
PartyBaseHelper.GetPartySizeText(party);
```

### GetPartySizeText
`public static TextObject GetPartySizeText(int healtyNumber, int woundedNumber, bool isInspected)`

**Purpose:** **Purpose:** Reads and returns the party size text value held by the this instance.

```csharp
// Static call; no instance required
PartyBaseHelper.GetPartySizeText(0, 0, false);
```

### GetShipSizeText
`public static string GetShipSizeText(int shipCount, bool isInspected)`

**Purpose:** **Purpose:** Reads and returns the ship size text value held by the this instance.

```csharp
// Static call; no instance required
PartyBaseHelper.GetShipSizeText(0, false);
```

### FindPartySizeNormalLimit
`public static float FindPartySizeNormalLimit(MobileParty mobileParty)`

**Purpose:** **Purpose:** Looks up the matching party size normal limit in the current collection or scope.

```csharp
// Static call; no instance required
PartyBaseHelper.FindPartySizeNormalLimit(mobileParty);
```

### GetCaptainOfTroop
`public static Hero GetCaptainOfTroop(PartyBase affectorParty, CharacterObject affectorCharacter)`

**Purpose:** **Purpose:** Reads and returns the captain of troop value held by the this instance.

```csharp
// Static call; no instance required
PartyBaseHelper.GetCaptainOfTroop(affectorParty, affectorCharacter);
```

### PrintRosterContents
`public static string PrintRosterContents(TroopRoster roster)`

**Purpose:** **Purpose:** Executes the PrintRosterContents logic.

```csharp
// Static call; no instance required
PartyBaseHelper.PrintRosterContents(roster);
```

### PrintSummarisedItemRoster
`public static TextObject PrintSummarisedItemRoster(ItemRoster items)`

**Purpose:** **Purpose:** Executes the PrintSummarisedItemRoster logic.

```csharp
// Static call; no instance required
PartyBaseHelper.PrintSummarisedItemRoster(items);
```

### PrintRegularTroopCategories
`public static TextObject PrintRegularTroopCategories(TroopRoster roster)`

**Purpose:** **Purpose:** Executes the PrintRegularTroopCategories logic.

```csharp
// Static call; no instance required
PartyBaseHelper.PrintRegularTroopCategories(roster);
```

### GetVisualPartyLeader
`public static CharacterObject GetVisualPartyLeader(PartyBase party)`

**Purpose:** **Purpose:** Reads and returns the visual party leader value held by the this instance.

```csharp
// Static call; no instance required
PartyBaseHelper.GetVisualPartyLeader(party);
```

### GetSpeedLimitation
`public static int GetSpeedLimitation(ItemRoster partyItemRoster, out ItemObject speedLimitationItem)`

**Purpose:** **Purpose:** Reads and returns the speed limitation value held by the this instance.

```csharp
// Static call; no instance required
PartyBaseHelper.GetSpeedLimitation(partyItemRoster, speedLimitationItem);
```

### HasFeat
`public static bool HasFeat(PartyBase party, FeatObject feat)`

**Purpose:** **Purpose:** Determines whether the this instance already holds feat.

```csharp
// Static call; no instance required
PartyBaseHelper.HasFeat(party, feat);
```

## Usage Example

```csharp
PartyBaseHelper.Initialize();
```

## See Also

- [Area Index](../)