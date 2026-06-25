---
title: "MPPerkCondition"
description: "Auto-generated class reference for MPPerkCondition."
---
# MPPerkCondition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPPerkCondition`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPPerkCondition.cs`

## Overview

`MPPerkCondition` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Check
`public abstract bool Check(MissionPeer peer)`

**Purpose:** Verifies whether the this instance meets the specified condition.

```csharp
// Obtain an instance of MPPerkCondition from the subsystem API first
MPPerkCondition mPPerkCondition = ...;
var result = mPPerkCondition.Check(peer);
```

### Check
`public abstract bool Check(Agent agent)`

**Purpose:** Verifies whether the this instance meets the specified condition.

```csharp
// Obtain an instance of MPPerkCondition from the subsystem API first
MPPerkCondition mPPerkCondition = ...;
var result = mPPerkCondition.Check(agent);
```

### CreateFrom
`public static MPPerkCondition CreateFrom(List<string> gameModes, XmlNode node)`

**Purpose:** Constructs a new from entity and returns it to the caller.

```csharp
// Static call; no instance required
MPPerkCondition.CreateFrom(gameModes, node);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MPPerkCondition instance = ...;
```

## See Also

- [Area Index](../)