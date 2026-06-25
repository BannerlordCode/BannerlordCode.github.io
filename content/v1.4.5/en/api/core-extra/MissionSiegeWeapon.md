---
title: "MissionSiegeWeapon"
description: "Auto-generated class reference for MissionSiegeWeapon."
---
# MissionSiegeWeapon

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MissionSiegeWeapon : IMissionSiegeWeapon`
**Base:** `IMissionSiegeWeapon`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MissionSiegeWeapon.cs`

## Overview

`MissionSiegeWeapon` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateDefaultWeapon
`public static MissionSiegeWeapon CreateDefaultWeapon(SiegeEngineType type)`

**Purpose:** Constructs a new default weapon entity and returns it to the caller.

```csharp
// Static call; no instance required
MissionSiegeWeapon.CreateDefaultWeapon(type);
```

### CreateCampaignWeapon
`public static MissionSiegeWeapon CreateCampaignWeapon(SiegeEngineType type, int index, float health, float maxHealth)`

**Purpose:** Constructs a new campaign weapon entity and returns it to the caller.

```csharp
// Static call; no instance required
MissionSiegeWeapon.CreateCampaignWeapon(type, 0, 0, 0);
```

### SetHealth
`public void SetHealth(float health)`

**Purpose:** Assigns a new value to health and updates the object's internal state.

```csharp
// Obtain an instance of MissionSiegeWeapon from the subsystem API first
MissionSiegeWeapon missionSiegeWeapon = ...;
missionSiegeWeapon.SetHealth(0);
```

## Usage Example

```csharp
MissionSiegeWeapon.CreateDefaultWeapon(type);
```

## See Also

- [Area Index](../)