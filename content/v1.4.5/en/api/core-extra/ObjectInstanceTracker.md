---
title: "ObjectInstanceTracker"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ObjectInstanceTracker`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ObjectInstanceTracker

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ObjectInstanceTracker`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/ObjectInstanceTracker.cs`

## Overview

`ObjectInstanceTracker` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterTrackedInstance
`public static void RegisterTrackedInstance(string name, WeakReference instance)`

**Purpose:** Handles logic related to `register tracked instance`.

### CheckBlacklistedTypeCounts
`public static bool CheckBlacklistedTypeCounts(Dictionary<string, int> typeNameCounts, ref string outputLog)`

**Purpose:** Handles logic related to `check blacklisted type counts`.

## Usage Example

```csharp
ObjectInstanceTracker.RegisterTrackedInstance("example", instance);
```

## See Also

- [Complete Class Catalog](../catalog)