---
title: "KillingBlow"
description: "Auto-generated class reference for KillingBlow."
---
# KillingBlow

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct KillingBlow`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/KillingBlow.cs`

## Overview

`KillingBlow` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### KillingBlow
`public struct KillingBlow(Blow b, Vec3 ragdollImpulsePoint, Vec3 ragdollImpulseAmount, int deathAction, int weaponItemKind, Agent.KillInfo overrideKillInfo = Agent.KillInfo.Invalid)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of KillingBlow from the subsystem API first
KillingBlow killingBlow = ...;
var result = killingBlow.KillingBlow(b, ragdollImpulsePoint, ragdollImpulseAmount, 0, 0, agent.KillInfo.Invalid);
```

### IsHeadShot
`public bool IsHeadShot()`

**Purpose:** Determines whether the current object is in the `head shot` state or condition.

```csharp
// Obtain an instance of KillingBlow from the subsystem API first
KillingBlow killingBlow = ...;
var result = killingBlow.IsHeadShot();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KillingBlow killingBlow = ...;
killingBlow.KillingBlow(b, ragdollImpulsePoint, ragdollImpulseAmount, 0, 0, agent.KillInfo.Invalid);
```

## See Also

- [Area Index](../)