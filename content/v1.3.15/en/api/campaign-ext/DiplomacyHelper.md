---
title: "DiplomacyHelper"
description: "Auto-generated class reference for DiplomacyHelper."
---
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

**Purpose:** Determines whether the this instance is in the war caused by player state or condition.

```csharp
// Static call; no instance required
DiplomacyHelper.IsWarCausedByPlayer(faction1, faction2, declareWarDetail);
```

### IsSameFactionAndNotEliminated
`public static bool IsSameFactionAndNotEliminated(IFaction faction1, IFaction faction2)`

**Purpose:** Determines whether the this instance is in the same faction and not eliminated state or condition.

```csharp
// Static call; no instance required
DiplomacyHelper.IsSameFactionAndNotEliminated(faction1, faction2);
```

### GetLogsForWar
`public static List<ValueTuple<LogEntry, IFaction, IFaction>> GetLogsForWar(StanceLink stance)`

**Purpose:** Reads and returns the logs for war value held by the this instance.

```csharp
// Static call; no instance required
DiplomacyHelper.GetLogsForWar(stance);
```

### GetPrisonersOfWarTakenByFaction
`public static List<Hero> GetPrisonersOfWarTakenByFaction(IFaction capturerFaction, IFaction prisonerFaction)`

**Purpose:** Reads and returns the prisoners of war taken by faction value held by the this instance.

```csharp
// Static call; no instance required
DiplomacyHelper.GetPrisonersOfWarTakenByFaction(capturerFaction, prisonerFaction);
```

### DidMainHeroSwornNotToAttackFaction
`public static bool DidMainHeroSwornNotToAttackFaction(IFaction faction, out TextObject explanation)`

**Purpose:** Executes the DidMainHeroSwornNotToAttackFaction logic.

```csharp
// Static call; no instance required
DiplomacyHelper.DidMainHeroSwornNotToAttackFaction(faction, explanation);
```

## Usage Example

```csharp
DiplomacyHelper.Initialize();
```

## See Also

- [Area Index](../)