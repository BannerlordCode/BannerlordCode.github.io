<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TimedDictionaryCache`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TimedDictionaryCache

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class TimedDictionaryCache<TKey, TValue>`
**Base:** none
**File:** `TaleWorlds.Library/TimedDictionaryCache.cs`

## Overview

`TimedDictionaryCache` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public TValue this { get; set; }` |

## Key Methods

### PruneExpiredItems
`public void PruneExpiredItems()`

**Purpose:** Handles logic related to `prune expired items`.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### ContainsKey
`public bool ContainsKey(TKey key)`

**Purpose:** Handles logic related to `contains key`.

### Remove
`public bool Remove(TKey key)`

**Purpose:** Removes `remove` from the current collection or state.

### TryGetValue
`public bool TryGetValue(TKey key, out TValue value)`

**Purpose:** Attempts to get `get value`, usually returning the result in an out parameter.

### AsReadOnlyDictionary
`public MBReadOnlyDictionary<TKey, TValue> AsReadOnlyDictionary()`

**Purpose:** Handles logic related to `as read only dictionary`.

## Usage Example

```csharp
var value = new TimedDictionaryCache();
value.PruneExpiredItems();
```

## See Also

- [Complete Class Catalog](../catalog)