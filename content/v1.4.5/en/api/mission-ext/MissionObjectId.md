---
title: "MissionObjectId"
description: "Auto-generated class reference for MissionObjectId."
---
# MissionObjectId

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MissionObjectId`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionObjectId.cs`

## Overview

`MissionObjectId` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MissionObjectId
`public struct MissionObjectId(int id, bool createdAtRuntime = false)`

**Purpose:** **Purpose:** Executes the MissionObjectId logic.

```csharp
// Obtain an instance of MissionObjectId from the subsystem API first
MissionObjectId missionObjectId = ...;
var result = missionObjectId.MissionObjectId(0, false);
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MissionObjectId from the subsystem API first
MissionObjectId missionObjectId = ...;
var result = missionObjectId.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of MissionObjectId from the subsystem API first
MissionObjectId missionObjectId = ...;
var result = missionObjectId.GetHashCode();
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of MissionObjectId from the subsystem API first
MissionObjectId missionObjectId = ...;
var result = missionObjectId.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionObjectId missionObjectId = ...;
missionObjectId.MissionObjectId(0, false);
```

## See Also

- [Area Index](../)