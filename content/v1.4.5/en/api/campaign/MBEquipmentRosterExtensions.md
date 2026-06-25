---
title: "MBEquipmentRosterExtensions"
description: "Auto-generated class reference for MBEquipmentRosterExtensions."
---
# MBEquipmentRosterExtensions

**Namespace:** TaleWorlds.CampaignSystem.Extensions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class MBEquipmentRosterExtensions`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Extensions/MBEquipmentRosterExtensions.cs`

## Overview

`MBEquipmentRosterExtensions` lives in `TaleWorlds.CampaignSystem.Extensions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Extensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetCivilianEquipments
`public static IEnumerable<Equipment> GetCivilianEquipments(this MBEquipmentRoster instance)`

**Purpose:** Reads and returns the `civilian equipments` value held by the current object.

```csharp
// Static call; no instance required
MBEquipmentRosterExtensions.GetCivilianEquipments(instance);
```

### GetStealthEquipments
`public static IEnumerable<Equipment> GetStealthEquipments(this MBEquipmentRoster instance)`

**Purpose:** Reads and returns the `stealth equipments` value held by the current object.

```csharp
// Static call; no instance required
MBEquipmentRosterExtensions.GetStealthEquipments(instance);
```

### GetBattleEquipments
`public static IEnumerable<Equipment> GetBattleEquipments(this MBEquipmentRoster instance)`

**Purpose:** Reads and returns the `battle equipments` value held by the current object.

```csharp
// Static call; no instance required
MBEquipmentRosterExtensions.GetBattleEquipments(instance);
```

### GetRandomCivilianEquipment
`public static Equipment GetRandomCivilianEquipment(this MBEquipmentRoster instance)`

**Purpose:** Reads and returns the `random civilian equipment` value held by the current object.

```csharp
// Static call; no instance required
MBEquipmentRosterExtensions.GetRandomCivilianEquipment(instance);
```

### GetRandomStealthEquipment
`public static Equipment GetRandomStealthEquipment(this MBEquipmentRoster instance)`

**Purpose:** Reads and returns the `random stealth equipment` value held by the current object.

```csharp
// Static call; no instance required
MBEquipmentRosterExtensions.GetRandomStealthEquipment(instance);
```

## Usage Example

```csharp
MBEquipmentRosterExtensions.GetCivilianEquipments(instance);
```

## See Also

- [Area Index](../)