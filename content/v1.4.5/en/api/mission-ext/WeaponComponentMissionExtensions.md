---
title: "WeaponComponentMissionExtensions"
description: "Auto-generated class reference for WeaponComponentMissionExtensions."
---
# WeaponComponentMissionExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class WeaponComponentMissionExtensions`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/WeaponComponentMissionExtensions.cs`

## Overview

`WeaponComponentMissionExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetItemUsageIndex
`public static int GetItemUsageIndex(this WeaponComponentData weaponComponentData)`

**Purpose:** **Purpose:** Reads and returns the item usage index value held by the this instance.

```csharp
// Static call; no instance required
WeaponComponentMissionExtensions.GetItemUsageIndex(weaponComponentData);
```

### GetWeaponCenterOfMass
`public static Vec3 GetWeaponCenterOfMass(this PhysicsShape body)`

**Purpose:** **Purpose:** Reads and returns the weapon center of mass value held by the this instance.

```csharp
// Static call; no instance required
WeaponComponentMissionExtensions.GetWeaponCenterOfMass(body);
```

## Usage Example

```csharp
WeaponComponentMissionExtensions.GetItemUsageIndex(weaponComponentData);
```

## See Also

- [Area Index](../)