---
title: "Missile"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Missile`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Missile

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Missile : MBMissile`
**Base:** `MBMissile`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Mission.cs`

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

**Purpose:** Handles logic related to `calculate passby sound parameters m t`.

### CalculateBounceBackVelocity
`public void CalculateBounceBackVelocity(Vec3 rotationSpeed, AttackCollisionData collisionData, out Vec3 velocity, out Vec3 angularVelocity)`

**Purpose:** Handles logic related to `calculate bounce back velocity`.

### PassThroughEntity
`public void PassThroughEntity(GameEntity entity)`

**Purpose:** Handles logic related to `pass through entity`.

## Usage Example

```csharp
var value = new Missile();
value.CalculatePassbySoundParametersMT(soundEventParameter);
```

## See Also

- [Complete Class Catalog](../catalog)