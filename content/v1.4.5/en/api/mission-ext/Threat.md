---
title: "Threat"
description: "Auto-generated class reference for Threat."
---
# Threat

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Threat`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Threat.cs`

## Overview

`Threat` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `TargetingPosition` | `public Vec3 TargetingPosition { get; }` |

## Key Methods

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of Threat from the subsystem API first
Threat threat = ...;
var result = threat.GetHashCode();
```

### GetGlobalVelocity
`public Vec3 GetGlobalVelocity()`

**Purpose:** Reads and returns the global velocity value held by the this instance.

```csharp
// Obtain an instance of Threat from the subsystem API first
Threat threat = ...;
var result = threat.GetGlobalVelocity();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of Threat from the subsystem API first
Threat threat = ...;
var result = threat.Equals(obj);
```

### DisplayDebugInfo
`public void DisplayDebugInfo()`

**Purpose:** Executes the DisplayDebugInfo logic.

```csharp
// Obtain an instance of Threat from the subsystem API first
Threat threat = ...;
threat.DisplayDebugInfo();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Threat threat = ...;
threat.GetHashCode();
```

## See Also

- [Area Index](../)