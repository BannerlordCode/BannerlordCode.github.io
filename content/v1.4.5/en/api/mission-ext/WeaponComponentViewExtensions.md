---
title: "WeaponComponentViewExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponComponentViewExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WeaponComponentViewExtensions

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class WeaponComponentViewExtensions`
**Area:** mission-ext

## Overview

`WeaponComponentViewExtensions` lives in `TaleWorlds.MountAndBlade.View`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
WeaponComponentViewExtensions.GetFlyingMeshCopy(weaponComponentData, item);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
