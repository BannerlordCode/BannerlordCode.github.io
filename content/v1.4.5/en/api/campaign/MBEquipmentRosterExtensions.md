---
title: "MBEquipmentRosterExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBEquipmentRosterExtensions`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBEquipmentRosterExtensions

**Namespace:** TaleWorlds.CampaignSystem.Extensions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class MBEquipmentRosterExtensions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Extensions/MBEquipmentRosterExtensions.cs`

## Overview

`MBEquipmentRosterExtensions` lives in `TaleWorlds.CampaignSystem.Extensions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Extensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetCivilianEquipments
`public static IEnumerable<Equipment> GetCivilianEquipments(this MBEquipmentRoster instance)`

**Purpose:** Gets the current value of `civilian equipments`.

### GetStealthEquipments
`public static IEnumerable<Equipment> GetStealthEquipments(this MBEquipmentRoster instance)`

**Purpose:** Gets the current value of `stealth equipments`.

### GetBattleEquipments
`public static IEnumerable<Equipment> GetBattleEquipments(this MBEquipmentRoster instance)`

**Purpose:** Gets the current value of `battle equipments`.

### GetRandomCivilianEquipment
`public static Equipment GetRandomCivilianEquipment(this MBEquipmentRoster instance)`

**Purpose:** Gets the current value of `random civilian equipment`.

### GetRandomStealthEquipment
`public static Equipment GetRandomStealthEquipment(this MBEquipmentRoster instance)`

**Purpose:** Gets the current value of `random stealth equipment`.

## Usage Example

```csharp
MBEquipmentRosterExtensions.GetCivilianEquipments(instance);
```

## See Also

- [Complete Class Catalog](../catalog)