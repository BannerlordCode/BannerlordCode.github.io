---
title: "MBBoundaryCollection"
description: "Auto-generated class reference for MBBoundaryCollection."
---
# MBBoundaryCollection

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBBoundaryCollection : IDictionary<string, ICollection<Vec2>>, ICollection<KeyValuePair<string, ICollection<Vec2>>>, IEnumerable<KeyValuePair<string, ICollection<Vec2>>>, IEnumerable, INotifyCollectionChanged`
**Base:** `IDictionary<string`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Mission.cs`

## Overview

`MBBoundaryCollection` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Keys` | `public ICollection<string> Keys { get; }` |
| `Values` | `public ICollection<ICollection<Vec2>> Values { get; }` |
| `this` | `public ICollection<Vec2> this { get; }` |

## Key Methods

### GetEnumerator
`public IEnumerator<KeyValuePair<string, ICollection<Vec2>>> GetEnumerator()`

**Purpose:** Reads and returns the enumerator value held by the this instance.

```csharp
// Obtain an instance of MBBoundaryCollection from the subsystem API first
MBBoundaryCollection mBBoundaryCollection = ...;
var result = mBBoundaryCollection.GetEnumerator();
```

### GetBoundaryRadius
`public float GetBoundaryRadius(string name)`

**Purpose:** Reads and returns the boundary radius value held by the this instance.

```csharp
// Obtain an instance of MBBoundaryCollection from the subsystem API first
MBBoundaryCollection mBBoundaryCollection = ...;
var result = mBBoundaryCollection.GetBoundaryRadius("example");
```

### GetOrientedBoundariesBox
`public void GetOrientedBoundariesBox(out Vec2 boxMinimum, out Vec2 boxMaximum, float rotationInRadians = 0f)`

**Purpose:** Reads and returns the oriented boundaries box value held by the this instance.

```csharp
// Obtain an instance of MBBoundaryCollection from the subsystem API first
MBBoundaryCollection mBBoundaryCollection = ...;
mBBoundaryCollection.GetOrientedBoundariesBox(boxMinimum, boxMaximum, 0);
```

### Add
`public void Add(KeyValuePair<string, ICollection<Vec2>> item)`

**Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of MBBoundaryCollection from the subsystem API first
MBBoundaryCollection mBBoundaryCollection = ...;
mBBoundaryCollection.Add(keyValuePair<string, item);
```

### Clear
`public void Clear()`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of MBBoundaryCollection from the subsystem API first
MBBoundaryCollection mBBoundaryCollection = ...;
mBBoundaryCollection.Clear();
```

### Contains
`public bool Contains(KeyValuePair<string, ICollection<Vec2>> item)`

**Purpose:** Indicates whether the this instance contains the specified item.

```csharp
// Obtain an instance of MBBoundaryCollection from the subsystem API first
MBBoundaryCollection mBBoundaryCollection = ...;
var result = mBBoundaryCollection.Contains(keyValuePair<string, item);
```

### CopyTo
`public void CopyTo(KeyValuePair<string, ICollection<Vec2>> array, int arrayIndex)`

**Purpose:** Copies the to state of the this instance to a target.

```csharp
// Obtain an instance of MBBoundaryCollection from the subsystem API first
MBBoundaryCollection mBBoundaryCollection = ...;
mBBoundaryCollection.CopyTo(keyValuePair<string, array, 0);
```

### Remove
`public bool Remove(KeyValuePair<string, ICollection<Vec2>> item)`

**Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of MBBoundaryCollection from the subsystem API first
MBBoundaryCollection mBBoundaryCollection = ...;
var result = mBBoundaryCollection.Remove(keyValuePair<string, item);
```

### Add
`public void Add(string name, ICollection<Vec2> points)`

**Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of MBBoundaryCollection from the subsystem API first
MBBoundaryCollection mBBoundaryCollection = ...;
mBBoundaryCollection.Add("example", points);
```

### Add
`public void Add(string name, ICollection<Vec2> points, bool isAllowanceInside)`

**Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of MBBoundaryCollection from the subsystem API first
MBBoundaryCollection mBBoundaryCollection = ...;
mBBoundaryCollection.Add("example", points, false);
```

### ContainsKey
`public bool ContainsKey(string name)`

**Purpose:** Indicates whether the this instance contains key.

```csharp
// Obtain an instance of MBBoundaryCollection from the subsystem API first
MBBoundaryCollection mBBoundaryCollection = ...;
var result = mBBoundaryCollection.ContainsKey("example");
```

### Remove
`public bool Remove(string name)`

**Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of MBBoundaryCollection from the subsystem API first
MBBoundaryCollection mBBoundaryCollection = ...;
var result = mBBoundaryCollection.Remove("example");
```

### TryGetValue
`public bool TryGetValue(string name, out ICollection<Vec2> points)`

**Purpose:** Attempts to retrieve get value, usually returning success through an out parameter.

```csharp
// Obtain an instance of MBBoundaryCollection from the subsystem API first
MBBoundaryCollection mBBoundaryCollection = ...;
var result = mBBoundaryCollection.TryGetValue("example", points);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBBoundaryCollection mBBoundaryCollection = ...;
mBBoundaryCollection.GetEnumerator();
```

## See Also

- [Area Index](../)