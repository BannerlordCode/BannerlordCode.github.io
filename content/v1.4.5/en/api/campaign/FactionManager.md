---
title: "FactionManager"
description: "Auto-generated class reference for FactionManager."
---
# FactionManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FactionManager`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/FactionManager.cs`

## Overview

`FactionManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `FactionManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### DeclareWar
`public static void DeclareWar(IFaction faction1, IFaction faction2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
FactionManager.DeclareWar(faction1, faction2);
```

### SetNeutral
`public static void SetNeutral(IFaction faction1, IFaction faction2)`

**Purpose:** Assigns a new value to `neutral` and updates the object's internal state.

```csharp
// Static call; no instance required
FactionManager.SetNeutral(faction1, faction2);
```

### IsAtWarAgainstFaction
`public static bool IsAtWarAgainstFaction(IFaction faction1, IFaction faction2)`

**Purpose:** Determines whether the current object is in the `at war against faction` state or condition.

```csharp
// Static call; no instance required
FactionManager.IsAtWarAgainstFaction(faction1, faction2);
```

### IsAtConstantWarAgainstFaction
`public static bool IsAtConstantWarAgainstFaction(IFaction faction1, IFaction faction2)`

**Purpose:** Determines whether the current object is in the `at constant war against faction` state or condition.

```csharp
// Static call; no instance required
FactionManager.IsAtConstantWarAgainstFaction(faction1, faction2);
```

### IsNeutralWithFaction
`public static bool IsNeutralWithFaction(IFaction faction1, IFaction faction2)`

**Purpose:** Determines whether the current object is in the `neutral with faction` state or condition.

```csharp
// Static call; no instance required
FactionManager.IsNeutralWithFaction(faction1, faction2);
```

### GetRelationBetweenClans
`public static int GetRelationBetweenClans(Clan clan1, Clan clan2)`

**Purpose:** Reads and returns the `relation between clans` value held by the current object.

```csharp
// Static call; no instance required
FactionManager.GetRelationBetweenClans(clan1, clan2);
```

## Usage Example

```csharp
var manager = FactionManager.Current;
```

## See Also

- [Area Index](../)