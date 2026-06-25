---
title: "ObjectInstanceTracker"
description: "Auto-generated class reference for ObjectInstanceTracker."
---
# ObjectInstanceTracker

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ObjectInstanceTracker`
**Base:** none
**File:** `TaleWorlds.Library/ObjectInstanceTracker.cs`

## Overview

`ObjectInstanceTracker` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterTrackedInstance
`public static void RegisterTrackedInstance(string name, WeakReference instance)`

**Purpose:** **Purpose:** Registers tracked instance with the current system so it can later be observed or dispatched.

```csharp
// Static call; no instance required
ObjectInstanceTracker.RegisterTrackedInstance("example", instance);
```

### CheckBlacklistedTypeCounts
`public static bool CheckBlacklistedTypeCounts(Dictionary<string, int> typeNameCounts, ref string outputLog)`

**Purpose:** **Purpose:** Verifies whether blacklisted type counts holds true for the this instance.

```csharp
// Static call; no instance required
ObjectInstanceTracker.CheckBlacklistedTypeCounts(dictionary<string, 0, outputLog);
```

## Usage Example

```csharp
ObjectInstanceTracker.RegisterTrackedInstance("example", instance);
```

## See Also

- [Area Index](../)