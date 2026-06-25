---
title: "MBTeam"
description: "Auto-generated class reference for MBTeam."
---
# MBTeam

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MBTeam`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBTeam.cs`

## Overview

`MBTeam` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of MBTeam from the subsystem API first
MBTeam mBTeam = ...;
var result = mBTeam.GetHashCode();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MBTeam from the subsystem API first
MBTeam mBTeam = ...;
var result = mBTeam.Equals(obj);
```

### IsEnemyOf
`public bool IsEnemyOf(MBTeam otherTeam)`

**Purpose:** Determines whether the this instance is in the enemy of state or condition.

```csharp
// Obtain an instance of MBTeam from the subsystem API first
MBTeam mBTeam = ...;
var result = mBTeam.IsEnemyOf(otherTeam);
```

### SetIsEnemyOf
`public void SetIsEnemyOf(MBTeam otherTeam, bool isEnemyOf)`

**Purpose:** Assigns a new value to is enemy of and updates the object's internal state.

```csharp
// Obtain an instance of MBTeam from the subsystem API first
MBTeam mBTeam = ...;
mBTeam.SetIsEnemyOf(otherTeam, false);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of MBTeam from the subsystem API first
MBTeam mBTeam = ...;
var result = mBTeam.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBTeam mBTeam = ...;
mBTeam.GetHashCode();
```

## See Also

- [Area Index](../)