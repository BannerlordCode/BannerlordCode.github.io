<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBReadOnlyDictionary`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBReadOnlyDictionary

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBReadOnlyDictionary<TKey, TValue> : ICollection, IEnumerable, IReadOnlyDictionary<TKey, TValue>, IEnumerable<KeyValuePair<TKey, TValue>>, IReadOnlyCollection<KeyValuePair<TKey, TValue>>`
**Base:** `ICollection`
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/MBReadOnlyDictionary.cs`

## Overview

`MBReadOnlyDictionary` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetEnumerator
`public Dictionary<TKey, TValue>.Enumerator GetEnumerator()`

**Purpose:** Gets the current value of `enumerator`.

### ContainsKey
`public bool ContainsKey(TKey key)`

**Purpose:** Handles logic related to `contains key`.

### TryGetValue
`public bool TryGetValue(TKey key, out TValue value)`

**Purpose:** Attempts to get `get value`, usually returning the result in an out parameter.

### CopyTo
`public void CopyTo(Array array, int index)`

**Purpose:** Handles logic related to `copy to`.

## Usage Example

```csharp
MBReadOnlyDictionary example = MBReadOnlyDictionary.Value;
```

## See Also

- [Complete Class Catalog](../catalog)