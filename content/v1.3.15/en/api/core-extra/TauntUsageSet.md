---
title: "TauntUsageSet"
description: "Auto-generated class reference for TauntUsageSet."
---
# TauntUsageSet

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class TauntUsageSet`
**Base:** none
**File:** `TaleWorlds.Core/TauntUsageManager.cs`

## Overview

`TauntUsageSet` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddUsage
`public void AddUsage(TauntUsageManager.TauntUsage usage)`

**Purpose:** Adds usage to the current collection or state.

```csharp
// Obtain an instance of TauntUsageSet from the subsystem API first
TauntUsageSet tauntUsageSet = ...;
tauntUsageSet.AddUsage(usage);
```

### GetUsages
`public MBReadOnlyList<TauntUsageManager.TauntUsage> GetUsages()`

**Purpose:** Reads and returns the usages value held by the this instance.

```csharp
// Obtain an instance of TauntUsageSet from the subsystem API first
TauntUsageSet tauntUsageSet = ...;
var result = tauntUsageSet.GetUsages();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TauntUsageSet tauntUsageSet = ...;
tauntUsageSet.AddUsage(usage);
```

## See Also

- [Area Index](../)