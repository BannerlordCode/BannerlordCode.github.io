---
title: "DiplomacyHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DiplomacyHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DiplomacyHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class DiplomacyHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/DiplomacyHelper.cs`

## Overview

`DiplomacyHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `DiplomacyHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsWarCausedByPlayer
`public static bool IsWarCausedByPlayer(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)`

**Purpose:** Handles logic related to `is war caused by player`.

### IsSameFactionAndNotEliminated
`public static bool IsSameFactionAndNotEliminated(IFaction faction1, IFaction faction2)`

**Purpose:** Handles logic related to `is same faction and not eliminated`.

### GetLogsForWar
`public static List<ValueTuple<LogEntry, IFaction, IFaction>> GetLogsForWar(StanceLink stance)`

**Purpose:** Gets the current value of `logs for war`.

### GetPrisonersOfWarTakenByFaction
`public static List<Hero> GetPrisonersOfWarTakenByFaction(IFaction capturerFaction, IFaction prisonerFaction)`

**Purpose:** Gets the current value of `prisoners of war taken by faction`.

### DidMainHeroSwornNotToAttackFaction
`public static bool DidMainHeroSwornNotToAttackFaction(IFaction faction, out TextObject explanation)`

**Purpose:** Handles logic related to `did main hero sworn not to attack faction`.

## Usage Example

```csharp
DiplomacyHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)