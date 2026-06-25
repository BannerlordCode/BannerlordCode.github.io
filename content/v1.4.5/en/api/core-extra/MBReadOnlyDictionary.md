---
title: "MBReadOnlyDictionary"
description: "Auto-generated class reference for MBReadOnlyDictionary."
---
# MBReadOnlyDictionary

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBReadOnlyDictionary<TKey, TValue> : ICollection, IEnumerable, IReadOnlyDictionary<TKey, TValue>, IEnumerable<KeyValuePair<TKey, TValue>>, IReadOnlyCollection<KeyValuePair<TKey, TValue>>`
**Base:** `ICollection`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/MBReadOnlyDictionary.cs`

## Overview

`MBReadOnlyDictionary` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetEnumerator
`public Dictionary<TKey, TValue>.Enumerator GetEnumerator()`

**Purpose:** **Purpose:** Reads and returns the enumerator value held by the this instance.

```csharp
// Obtain an instance of MBReadOnlyDictionary from the subsystem API first
MBReadOnlyDictionary mBReadOnlyDictionary = ...;
var result = mBReadOnlyDictionary.GetEnumerator();
```

### ContainsKey
`public bool ContainsKey(TKey key)`

**Purpose:** **Purpose:** Indicates whether the this instance contains key.

```csharp
// Obtain an instance of MBReadOnlyDictionary from the subsystem API first
MBReadOnlyDictionary mBReadOnlyDictionary = ...;
var result = mBReadOnlyDictionary.ContainsKey(key);
```

### TryGetValue
`public bool TryGetValue(TKey key, out TValue value)`

**Purpose:** **Purpose:** Attempts to retrieve get value, usually returning success through an out parameter.

```csharp
// Obtain an instance of MBReadOnlyDictionary from the subsystem API first
MBReadOnlyDictionary mBReadOnlyDictionary = ...;
var result = mBReadOnlyDictionary.TryGetValue(key, value);
```

### CopyTo
`public void CopyTo(Array array, int index)`

**Purpose:** **Purpose:** Copies the to state of the this instance to a target.

```csharp
// Obtain an instance of MBReadOnlyDictionary from the subsystem API first
MBReadOnlyDictionary mBReadOnlyDictionary = ...;
mBReadOnlyDictionary.CopyTo(array, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBReadOnlyDictionary mBReadOnlyDictionary = ...;
mBReadOnlyDictionary.GetEnumerator();
```

## See Also

- [Area Index](../)