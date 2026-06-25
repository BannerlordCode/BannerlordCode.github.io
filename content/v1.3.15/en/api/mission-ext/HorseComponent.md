---
title: "HorseComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HorseComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HorseComponent

## Mental Model

Treat `HorseComponent` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Class Overview

| Item | Description |
|------|-------------|
| **Namespace** | TaleWorlds.Core |
| **File Path** | TaleWorlds.Core/HorseComponent.cs |
| **Base Class** | ItemComponent |
| **Type** | Public class |

## Description

`HorseComponent` is the component for horse items, storing attributes like speed, maneuverability, and charge damage. Used to distinguish between rideable horses, pack animals, and livestock.

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| Monster | Monster | Monster/creature definition |
| Maneuver | int | Maneuverability attribute |
| ChargeDamage | int | Charge damage |
| Speed | int | Speed attribute |
| BodyLength | int | Body length |
| HitPoints | int | Hit points (read-only, from Monster) |
| HitPointBonus | int | Extra hit point bonus |
| IsRideable | bool | Whether rideable |
| IsPackAnimal | bool | Whether pack animal |
| IsMount | bool | Whether a mount (read-only) |
| IsLiveStock | bool | Whether livestock (read-only) |
| HorseMaterialNames | MBReadOnlyList | Horse material name list |
| MeatCount | int | Meat count (read-only) |
| HideCount | int | Hide count (read-only) |
| SkeletonScale | SkeletonScale | Skeleton scale |

## Enumeration Types

### MaterialProperty

| Property | Type | Description |
|----------|------|-------------|
| Name | string | Material name |
| MeshMultiplier | List | Mesh multiplier list |

## Usage Example

```csharp
// Get horse component from item
ItemObject horse = // Get horse item;
HorseComponent horseComp = horse.GetComponent<HorseComponent>();

if (horseComp != null)
{
    if (horseComp.IsMount)
    {
        // Rideable mount
        int speed = horseComp.Speed;
        int maneuver = horseComp.Maneuver;
        int charge = horseComp.ChargeDamage;
    }
    else if (horseComp.IsPackAnimal)
    {
        // Pack animal
    }
    else if (horseComp.IsLiveStock)
    {
        // Livestock
    }
}
```
