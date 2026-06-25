---
title: "KillingBlow"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KillingBlow`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KillingBlow

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct KillingBlow`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/KillingBlow.cs`

## Overview

`KillingBlow` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### KillingBlow
`public struct KillingBlow(Blow b, Vec3 ragdollImpulsePoint, Vec3 ragdollImpulseAmount, int deathAction, int weaponItemKind, Agent.KillInfo overrideKillInfo = Agent.KillInfo.Invalid)`

**Purpose:** Handles logic related to `killing blow`.

### IsHeadShot
`public bool IsHeadShot()`

**Purpose:** Handles logic related to `is head shot`.

## Usage Example

```csharp
var value = new KillingBlow();
value.KillingBlow(b, ragdollImpulsePoint, ragdollImpulseAmount, 0, 0, agent.KillInfo.Invalid);
```

## See Also

- [Complete Class Catalog](../catalog)