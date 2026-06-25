---
title: "Missile"
description: "Auto-generated class reference for Missile."
---
# Missile

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Missile : MBMissile`
**Base:** `MBMissile`
**File:** `TaleWorlds.MountAndBlade/Mission.cs`

## Overview

`Missile` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Entity` | `public GameEntity Entity { get; }` |
| `Weapon` | `public MissionWeapon Weapon { get; }` |
| `ShooterAgent` | `public Agent ShooterAgent { get; }` |
| `MissionObjectToIgnore` | `public MissionObject MissionObjectToIgnore { get; }` |
| `AlreadyHitEntityToIgnore` | `public GameEntity AlreadyHitEntityToIgnore { get; }` |

## Key Methods

### CalculatePassbySoundParametersMT
`public void CalculatePassbySoundParametersMT(ref SoundEventParameter soundEventParameter)`

**Purpose:** Calculates the current value or result of `passby sound parameters m t`.

```csharp
// Obtain an instance of Missile from the subsystem API first
Missile missile = ...;
missile.CalculatePassbySoundParametersMT(soundEventParameter);
```

### CalculateBounceBackVelocity
`public void CalculateBounceBackVelocity(Vec3 rotationSpeed, AttackCollisionData collisionData, out Vec3 velocity, out Vec3 angularVelocity)`

**Purpose:** Calculates the current value or result of `bounce back velocity`.

```csharp
// Obtain an instance of Missile from the subsystem API first
Missile missile = ...;
missile.CalculateBounceBackVelocity(rotationSpeed, collisionData, velocity, angularVelocity);
```

### PassThroughEntity
`public void PassThroughEntity(GameEntity entity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Missile from the subsystem API first
Missile missile = ...;
missile.PassThroughEntity(entity);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Missile missile = ...;
missile.CalculatePassbySoundParametersMT(soundEventParameter);
```

## See Also

- [Area Index](../)