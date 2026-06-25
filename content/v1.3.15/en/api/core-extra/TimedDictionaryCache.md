---
title: "TimedDictionaryCache"
description: "Auto-generated class reference for TimedDictionaryCache."
---
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

**Purpose:** Executes the PruneExpiredItems logic.

```csharp
// Obtain an instance of TimedDictionaryCache from the subsystem API first
TimedDictionaryCache timedDictionaryCache = ...;
timedDictionaryCache.PruneExpiredItems();
```

### Clear
`public void Clear()`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of TimedDictionaryCache from the subsystem API first
TimedDictionaryCache timedDictionaryCache = ...;
timedDictionaryCache.Clear();
```

### ContainsKey
`public bool ContainsKey(TKey key)`

**Purpose:** Indicates whether the this instance contains key.

```csharp
// Obtain an instance of TimedDictionaryCache from the subsystem API first
TimedDictionaryCache timedDictionaryCache = ...;
var result = timedDictionaryCache.ContainsKey(key);
```

### Remove
`public bool Remove(TKey key)`

**Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of TimedDictionaryCache from the subsystem API first
TimedDictionaryCache timedDictionaryCache = ...;
var result = timedDictionaryCache.Remove(key);
```

### TryGetValue
`public bool TryGetValue(TKey key, out TValue value)`

**Purpose:** Attempts to retrieve get value, usually returning success through an out parameter.

```csharp
// Obtain an instance of TimedDictionaryCache from the subsystem API first
TimedDictionaryCache timedDictionaryCache = ...;
var result = timedDictionaryCache.TryGetValue(key, value);
```

### AsReadOnlyDictionary
`public MBReadOnlyDictionary<TKey, TValue> AsReadOnlyDictionary()`

**Purpose:** Executes the AsReadOnlyDictionary logic.

```csharp
// Obtain an instance of TimedDictionaryCache from the subsystem API first
TimedDictionaryCache timedDictionaryCache = ...;
var result = timedDictionaryCache.AsReadOnlyDictionary();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TimedDictionaryCache timedDictionaryCache = ...;
timedDictionaryCache.PruneExpiredItems();
```

## See Also

- [Area Index](../)