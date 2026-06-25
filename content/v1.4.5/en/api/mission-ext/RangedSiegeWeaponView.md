---
title: "RangedSiegeWeaponView"
description: "Auto-generated class reference for RangedSiegeWeaponView."
---
# RangedSiegeWeaponView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RangedSiegeWeaponView : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon/RangedSiegeWeaponView.cs`

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

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of RangedSiegeWeaponView from the subsystem API first
RangedSiegeWeaponView rangedSiegeWeaponView = ...;
rangedSiegeWeaponView.Initialize(rangedSiegeWeapon, missionScreen);
```

### IsOnTickRequired
`public override bool IsOnTickRequired()`

**Purpose:** Determines whether the this instance is in the on tick required state or condition.

```csharp
// Obtain an instance of RangedSiegeWeaponView from the subsystem API first
RangedSiegeWeaponView rangedSiegeWeaponView = ...;
var result = rangedSiegeWeaponView.IsOnTickRequired();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
RangedSiegeWeaponView view = ...;
```

## See Also

- [Area Index](../)