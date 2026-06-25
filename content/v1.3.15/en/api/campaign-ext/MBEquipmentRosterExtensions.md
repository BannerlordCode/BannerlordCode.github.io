---
title: "MBEquipmentRosterExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBEquipmentRosterExtensions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBEquipmentRosterExtensions

**Namespace:** TaleWorlds.CampaignSystem.Extensions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class MBEquipmentRosterExtensions`
**Area:** campaign-ext

## Overview

`MBEquipmentRosterExtensions` lives in `TaleWorlds.CampaignSystem.Extensions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Extensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<MBEquipmentRoster> All { get; }` |

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
// Prepare the required context, then call the static entry point directly
MBEquipmentRosterExtensions.GetCivilianEquipments(instance);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
