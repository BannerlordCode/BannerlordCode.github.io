---
title: "MBParticleSystem"
description: "Auto-generated class reference for MBParticleSystem."
---
# MBParticleSystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MBParticleSystem`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBParticleSystem.cs`

## Overview

`MBParticleSystem` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public bool Equals(MBParticleSystem a)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MBParticleSystem from the subsystem API first
MBParticleSystem mBParticleSystem = ...;
var result = mBParticleSystem.Equals(a);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of MBParticleSystem from the subsystem API first
MBParticleSystem mBParticleSystem = ...;
var result = mBParticleSystem.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBParticleSystem mBParticleSystem = ...;
mBParticleSystem.Equals(a);
```

## See Also

- [Area Index](../)