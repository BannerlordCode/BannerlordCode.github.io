---
title: "MPHeroClassGroup"
description: "Auto-generated class reference for MPHeroClassGroup."
---
# MPHeroClassGroup

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPHeroClassGroup`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs`

## Overview

`MPHeroClassGroup` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MPHeroClassGroup from the subsystem API first
MPHeroClassGroup mPHeroClassGroup = ...;
var result = mPHeroClassGroup.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of MPHeroClassGroup from the subsystem API first
MPHeroClassGroup mPHeroClassGroup = ...;
var result = mPHeroClassGroup.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPHeroClassGroup mPHeroClassGroup = ...;
mPHeroClassGroup.Equals(obj);
```

## See Also

- [Area Index](../)