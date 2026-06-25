---
title: "QueryData"
description: "Auto-generated class reference for QueryData."
---
# QueryData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class QueryData<T> : IQueryData`
**Base:** `IQueryData`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/QueryData.cs`

## Overview

`QueryData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `QueryData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Value` | `public T Value { get; }` |

## Key Methods

### Evaluate
`public void Evaluate(float currentTime)`

**Purpose:** **Purpose:** Executes the Evaluate logic.

```csharp
// Obtain an instance of QueryData from the subsystem API first
QueryData queryData = ...;
queryData.Evaluate(0);
```

### SetValue
`public void SetValue(T value, float currentTime)`

**Purpose:** **Purpose:** Assigns a new value to value and updates the object's internal state.

```csharp
// Obtain an instance of QueryData from the subsystem API first
QueryData queryData = ...;
queryData.SetValue(value, 0);
```

### GetCachedValue
`public T GetCachedValue()`

**Purpose:** **Purpose:** Reads and returns the cached value value held by the this instance.

```csharp
// Obtain an instance of QueryData from the subsystem API first
QueryData queryData = ...;
var result = queryData.GetCachedValue();
```

### GetCachedValueUnlessTooOld
`public T GetCachedValueUnlessTooOld()`

**Purpose:** **Purpose:** Reads and returns the cached value unless too old value held by the this instance.

```csharp
// Obtain an instance of QueryData from the subsystem API first
QueryData queryData = ...;
var result = queryData.GetCachedValueUnlessTooOld();
```

### GetCachedValueWithMaxAge
`public T GetCachedValueWithMaxAge(float age)`

**Purpose:** **Purpose:** Reads and returns the cached value with max age value held by the this instance.

```csharp
// Obtain an instance of QueryData from the subsystem API first
QueryData queryData = ...;
var result = queryData.GetCachedValueWithMaxAge(0);
```

### Expire
`public void Expire()`

**Purpose:** **Purpose:** Executes the Expire logic.

```csharp
// Obtain an instance of QueryData from the subsystem API first
QueryData queryData = ...;
queryData.Expire();
```

### SetupSyncGroup
`public static void SetupSyncGroup(params IQueryData groupItems)`

**Purpose:** **Purpose:** Assigns a new value to up sync group and updates the object's internal state.

```csharp
// Static call; no instance required
QueryData.SetupSyncGroup(groupItems);
```

### SetSyncGroup
`public void SetSyncGroup(IQueryData syncGroup)`

**Purpose:** **Purpose:** Assigns a new value to sync group and updates the object's internal state.

```csharp
// Obtain an instance of QueryData from the subsystem API first
QueryData queryData = ...;
queryData.SetSyncGroup(syncGroup);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
QueryData entry = ...;
```

## See Also

- [Area Index](../)