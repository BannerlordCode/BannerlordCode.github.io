<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QueryData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QueryData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class QueryData<T> : IQueryData`
**Base:** `IQueryData`
**File:** `TaleWorlds.MountAndBlade/QueryData.cs`

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

**Purpose:** Handles logic related to `evaluate`.

### SetValue
`public void SetValue(T value, float currentTime)`

**Purpose:** Sets the value or state of `value`.

### GetCachedValue
`public T GetCachedValue()`

**Purpose:** Gets the current value of `cached value`.

### GetCachedValueUnlessTooOld
`public T GetCachedValueUnlessTooOld()`

**Purpose:** Gets the current value of `cached value unless too old`.

### GetCachedValueWithMaxAge
`public T GetCachedValueWithMaxAge(float age)`

**Purpose:** Gets the current value of `cached value with max age`.

### Expire
`public void Expire()`

**Purpose:** Handles logic related to `expire`.

### SetupSyncGroup
`public static void SetupSyncGroup(params IQueryData groupItems)`

**Purpose:** Sets the value or state of `up sync group`.

### SetSyncGroup
`public void SetSyncGroup(IQueryData syncGroup)`

**Purpose:** Sets the value or state of `sync group`.

## Usage Example

```csharp
var value = new QueryData();
```

## See Also

- [Complete Class Catalog](../catalog)