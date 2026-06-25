---
title: "WeaponSpawner"
description: "Auto-generated class reference for WeaponSpawner."
---
# WeaponSpawner

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class WeaponSpawner : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/WeaponSpawner.cs`

## Overview

`WeaponSpawner` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SpawnWeapon
`public void SpawnWeapon()`

**Purpose:** **Purpose:** Executes the SpawnWeapon logic.

```csharp
// Obtain an instance of WeaponSpawner from the subsystem API first
WeaponSpawner weaponSpawner = ...;
weaponSpawner.SpawnWeapon();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WeaponSpawner weaponSpawner = ...;
weaponSpawner.SpawnWeapon();
```

## See Also

- [Area Index](../)