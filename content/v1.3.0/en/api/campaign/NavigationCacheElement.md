---
title: "NavigationCacheElement"
description: "Auto-generated class reference for NavigationCacheElement."
---
# NavigationCacheElement

**Namespace:** TaleWorlds.CampaignSystem.Map.DistanceCache
**Module:** TaleWorlds.CampaignSystem
**Type:** `struct NavigationCacheElement<T> : IEquatable<NavigationCacheElement<T>> where T : ISettlementDataHolder`
**Base:** `IEquatable<NavigationCacheElement<T>> where T : ISettlementDataHolder`
**File:** `TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCacheElement.cs`

## Overview

`NavigationCacheElement` lives in `TaleWorlds.CampaignSystem.Map.DistanceCache` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Map.DistanceCache` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PortPosition` | `public CampaignVec2 PortPosition { get; }` |
| `GatePosition` | `public CampaignVec2 GatePosition { get; }` |
| `StringId` | `public string StringId { get; }` |

## Key Methods

### Sort
`public static void Sort(ref NavigationCacheElement<T> settlement1, ref NavigationCacheElement<T> settlement2, out bool isPairChanged)`

**Purpose:** Sorts the content inside the current object.

```csharp
// Static call; no instance required
NavigationCacheElement.Sort(settlement1, settlement2, isPairChanged);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of NavigationCacheElement from the subsystem API first
NavigationCacheElement navigationCacheElement = ...;
var result = navigationCacheElement.GetHashCode();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of NavigationCacheElement from the subsystem API first
NavigationCacheElement navigationCacheElement = ...;
var result = navigationCacheElement.Equals(obj);
```

### Equals
`public bool Equals(NavigationCacheElement<T> other)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of NavigationCacheElement from the subsystem API first
NavigationCacheElement navigationCacheElement = ...;
var result = navigationCacheElement.Equals(other);
```

## Usage Example

```csharp
NavigationCacheElement.Sort(settlement1, settlement2, isPairChanged);
```

## See Also

- [Area Index](../)