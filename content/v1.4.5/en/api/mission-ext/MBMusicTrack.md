---
title: "MBMusicTrack"
description: "Auto-generated class reference for MBMusicTrack."
---
# MBMusicTrack

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MBMusicTrack`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBMusicTrack.cs`

## Overview

`MBMusicTrack` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public bool Equals(MBMusicTrack obj)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MBMusicTrack from the subsystem API first
MBMusicTrack mBMusicTrack = ...;
var result = mBMusicTrack.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of MBMusicTrack from the subsystem API first
MBMusicTrack mBMusicTrack = ...;
var result = mBMusicTrack.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBMusicTrack mBMusicTrack = ...;
mBMusicTrack.Equals(obj);
```

## See Also

- [Area Index](../)