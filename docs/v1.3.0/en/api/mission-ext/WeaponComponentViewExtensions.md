<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponComponentViewExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WeaponComponentViewExtensions

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class WeaponComponentViewExtensions`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/WeaponComponentViewExtensions.cs`

## Overview

`WeaponComponentViewExtensions` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetFlyingMeshCopy
`public static MetaMesh GetFlyingMeshCopy(this WeaponComponentData weaponComponentData, ItemObject item)`

**Purpose:** Gets the current value of `flying mesh copy`.

### GetFlyingMeshIfExists
`public static MetaMesh GetFlyingMeshIfExists(this WeaponComponentData weaponComponentData, ItemObject item)`

**Purpose:** Gets the current value of `flying mesh if exists`.

## Usage Example

```csharp
WeaponComponentViewExtensions.GetFlyingMeshCopy(weaponComponentData, item);
```

## See Also

- [Complete Class Catalog](../catalog)