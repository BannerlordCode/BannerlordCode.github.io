---
title: "Blow"
description: "Auto-generated class reference for Blow."
---
# Blow

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct Blow`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Blow.cs`

## Overview

`Blow` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsBlowCrit
`public bool IsBlowCrit(int maxHitPointsOfVictim)`

**Purpose:** Determines whether the this instance is in the blow crit state or condition.

```csharp
// Obtain an instance of Blow from the subsystem API first
Blow blow = ...;
var result = blow.IsBlowCrit(0);
```

### IsBlowLow
`public bool IsBlowLow(int maxHitPointsOfVictim)`

**Purpose:** Determines whether the this instance is in the blow low state or condition.

```csharp
// Obtain an instance of Blow from the subsystem API first
Blow blow = ...;
var result = blow.IsBlowLow(0);
```

### IsHeadShot
`public bool IsHeadShot()`

**Purpose:** Determines whether the this instance is in the head shot state or condition.

```csharp
// Obtain an instance of Blow from the subsystem API first
Blow blow = ...;
var result = blow.IsHeadShot();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Blow blow = ...;
blow.IsBlowCrit(0);
```

## See Also

- [Area Index](../)