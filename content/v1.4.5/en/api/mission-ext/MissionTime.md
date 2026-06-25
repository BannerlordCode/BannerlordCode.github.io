---
title: "MissionTime"
description: "Auto-generated class reference for MissionTime."
---
# MissionTime

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MissionTime : IComparable<MissionTime>`
**Base:** `IComparable<MissionTime>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionTime.cs`

## Overview

`MissionTime` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MillisecondsFromNow
`public static MissionTime MillisecondsFromNow(float valueInMilliseconds)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionTime.MillisecondsFromNow(0);
```

### SecondsFromNow
`public static MissionTime SecondsFromNow(float valueInSeconds)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionTime.SecondsFromNow(0);
```

### Equals
`public bool Equals(MissionTime other)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of MissionTime from the subsystem API first
MissionTime missionTime = ...;
var result = missionTime.Equals(other);
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of MissionTime from the subsystem API first
MissionTime missionTime = ...;
var result = missionTime.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of MissionTime from the subsystem API first
MissionTime missionTime = ...;
var result = missionTime.GetHashCode();
```

### CompareTo
`public int CompareTo(MissionTime other)`

**Purpose:** Compares the current object with the supplied instance for ordering.

```csharp
// Obtain an instance of MissionTime from the subsystem API first
MissionTime missionTime = ...;
var result = missionTime.CompareTo(other);
```

### Milliseconds
`public static MissionTime Milliseconds(float valueInMilliseconds)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionTime.Milliseconds(0);
```

### Seconds
`public static MissionTime Seconds(float valueInSeconds)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionTime.Seconds(0);
```

### Minutes
`public static MissionTime Minutes(float valueInMinutes)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionTime.Minutes(0);
```

### Hours
`public static MissionTime Hours(float valueInHours)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionTime.Hours(0);
```

## Usage Example

```csharp
MissionTime.MillisecondsFromNow(0);
```

## See Also

- [Area Index](../)