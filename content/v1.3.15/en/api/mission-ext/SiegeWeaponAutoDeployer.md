---
title: "SiegeWeaponAutoDeployer"
description: "Auto-generated class reference for SiegeWeaponAutoDeployer."
---
# SiegeWeaponAutoDeployer

**Namespace:** TaleWorlds.MountAndBlade.AI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeWeaponAutoDeployer`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AI/SiegeWeaponAutoDeployer.cs`

## Overview

`SiegeWeaponAutoDeployer` lives in `TaleWorlds.MountAndBlade.AI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.AI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DeployAll
`public void DeployAll(BattleSideEnum side)`

**Purpose:** **Purpose:** Executes the DeployAll logic.

```csharp
// Obtain an instance of SiegeWeaponAutoDeployer from the subsystem API first
SiegeWeaponAutoDeployer siegeWeaponAutoDeployer = ...;
siegeWeaponAutoDeployer.DeployAll(side);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeWeaponAutoDeployer siegeWeaponAutoDeployer = ...;
siegeWeaponAutoDeployer.DeployAll(side);
```

## See Also

- [Area Index](../)