<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TimedDictionaryCache`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TimedDictionaryCache

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class TimedDictionaryCache<TKey, TValue>`
**Base:** none
**File:** `TaleWorlds.Library/TimedDictionaryCache.cs`

## Overview

> TODO: add this class's responsibility and typical use-cases from a developer perspective.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public TValue this { get; set; }` |

## Key Methods

### PruneExpiredItems
```csharp
public void PruneExpiredItems()
```

### Clear
```csharp
public void Clear()
```

### ContainsKey
```csharp
public bool ContainsKey(TKey key)
```

### Remove
```csharp
public bool Remove(TKey key)
```

### TryGetValue
```csharp
public bool TryGetValue(TKey key, out TValue value)
```

### AsReadOnlyDictionary
```csharp
public MBReadOnlyDictionary<TKey, TValue> AsReadOnlyDictionary()
```

## Usage Example

```csharp
// TODO: add a typical use-case
```

## See Also

- [Complete Class Catalog](../catalog)