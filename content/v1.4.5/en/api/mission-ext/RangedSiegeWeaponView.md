---
title: "RangedSiegeWeaponView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RangedSiegeWeaponView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RangedSiegeWeaponView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RangedSiegeWeaponView : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon/RangedSiegeWeaponView.cs`

## Overview

`RangedSiegeWeaponView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `RangedSiegeWeaponView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RangedSiegeWeapon` | `public RangedSiegeWeapon RangedSiegeWeapon { get; }` |
| `MissionScreen` | `public MissionScreen MissionScreen { get; }` |
| `Camera` | `public Camera Camera { get; }` |

## Key Methods

### Initialize
`public void Initialize(RangedSiegeWeapon rangedSiegeWeapon, MissionScreen missionScreen)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### IsOnTickRequired
`public override bool IsOnTickRequired()`

**Purpose:** Handles logic related to `is on tick required`.

## Usage Example

```csharp
var view = new RangedSiegeWeaponView();
```

## See Also

- [Complete Class Catalog](../catalog)