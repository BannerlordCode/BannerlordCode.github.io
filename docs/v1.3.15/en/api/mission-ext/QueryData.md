<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QueryData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QueryData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class QueryData<T> : IQueryData`
**Base:** `IQueryData`
**File:** `TaleWorlds.MountAndBlade/QueryData.cs`

## Overview

`QueryData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `Value` | `public T Value { get; }` |

## Key Methods

### Evaluate
```csharp
public void Evaluate(float currentTime)
```

### SetValue
```csharp
public void SetValue(T value, float currentTime)
```

### GetCachedValue
```csharp
public T GetCachedValue()
```

### GetCachedValueUnlessTooOld
```csharp
public T GetCachedValueUnlessTooOld()
```

### GetCachedValueWithMaxAge
```csharp
public T GetCachedValueWithMaxAge(float age)
```

### Expire
```csharp
public void Expire()
```

### SetupSyncGroup
```csharp
public static void SetupSyncGroup(params IQueryData groupItems)
```

### SetSyncGroup
```csharp
public void SetSyncGroup(IQueryData syncGroup)
```

## Usage Example

```csharp
// Typical usage of QueryData (Data)
new QueryData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)