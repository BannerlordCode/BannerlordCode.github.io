<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FactionManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FactionManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FactionManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/FactionManager.cs`

## Overview

`FactionManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `FactionManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### DeclareWar
`public static void DeclareWar(IFaction faction1, IFaction faction2)`

**Purpose:** Handles logic related to `declare war`.

### SetNeutral
`public static void SetNeutral(IFaction faction1, IFaction faction2)`

**Purpose:** Sets the value or state of `neutral`.

### IsAtWarAgainstFaction
`public static bool IsAtWarAgainstFaction(IFaction faction1, IFaction faction2)`

**Purpose:** Handles logic related to `is at war against faction`.

### IsAtConstantWarAgainstFaction
`public static bool IsAtConstantWarAgainstFaction(IFaction faction1, IFaction faction2)`

**Purpose:** Handles logic related to `is at constant war against faction`.

### IsNeutralWithFaction
`public static bool IsNeutralWithFaction(IFaction faction1, IFaction faction2)`

**Purpose:** Handles logic related to `is neutral with faction`.

### GetRelationBetweenClans
`public static int GetRelationBetweenClans(Clan clan1, Clan clan2)`

**Purpose:** Gets the current value of `relation between clans`.

## Usage Example

```csharp
var manager = FactionManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)