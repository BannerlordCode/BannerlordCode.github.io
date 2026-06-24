<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponComponentMissionExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponComponentMissionExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class WeaponComponentMissionExtensions`
**Area:** mission-ext

## Overview

`WeaponComponentMissionExtensions` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetItemUsageIndex
`public static int GetItemUsageIndex(this WeaponComponentData weaponComponentData)`

**Purpose:** Gets the current value of `item usage index`.

### GetWeaponCenterOfMass
`public static Vec3 GetWeaponCenterOfMass(this PhysicsShape body)`

**Purpose:** Gets the current value of `weapon center of mass`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
WeaponComponentMissionExtensions.GetItemUsageIndex(weaponComponentData);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
