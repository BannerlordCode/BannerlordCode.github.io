<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBBoundaryCollection`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBBoundaryCollection

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBBoundaryCollection : IDictionary<string, ICollection<Vec2>>, ICollection<KeyValuePair<string, ICollection<Vec2>>>, IEnumerable<KeyValuePair<string, ICollection<Vec2>>>, IEnumerable, INotifyCollectionChanged`
**Base:** `IDictionary<string`
**File:** `TaleWorlds.MountAndBlade/Mission.cs`

## Overview

`MBBoundaryCollection` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |
| `IsReadOnly` | `public bool IsReadOnly { get; }` |
| `Keys` | `public ICollection<string> Keys { get; }` |
| `Values` | `public ICollection<ICollection<Vec2>> Values { get; }` |
| `this` | `public ICollection<Vec2> this { get; }` |

## Key Methods

### GetEnumerator
`public IEnumerator<KeyValuePair<string, ICollection<Vec2>>> GetEnumerator()`

**Purpose:** Gets the current value of `enumerator`.

### GetBoundaryRadius
`public float GetBoundaryRadius(string name)`

**Purpose:** Gets the current value of `boundary radius`.

### GetOrientedBoundariesBox
`public void GetOrientedBoundariesBox(out Vec2 boxMinimum, out Vec2 boxMaximum, float rotationInRadians = 0f)`

**Purpose:** Gets the current value of `oriented boundaries box`.

### Add
`public void Add(KeyValuePair<string, ICollection<Vec2>> item)`

**Purpose:** Adds `add` to the current collection or state.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### Contains
`public bool Contains(KeyValuePair<string, ICollection<Vec2>> item)`

**Purpose:** Handles logic related to `contains`.

### CopyTo
`public void CopyTo(KeyValuePair<string, ICollection<Vec2>> array, int arrayIndex)`

**Purpose:** Handles logic related to `copy to`.

### Remove
`public bool Remove(KeyValuePair<string, ICollection<Vec2>> item)`

**Purpose:** Removes `remove` from the current collection or state.

### Add
`public void Add(string name, ICollection<Vec2> points)`

**Purpose:** Adds `add` to the current collection or state.

### Add
`public void Add(string name, ICollection<Vec2> points, bool isAllowanceInside)`

**Purpose:** Adds `add` to the current collection or state.

### ContainsKey
`public bool ContainsKey(string name)`

**Purpose:** Handles logic related to `contains key`.

### Remove
`public bool Remove(string name)`

**Purpose:** Removes `remove` from the current collection or state.

### TryGetValue
`public bool TryGetValue(string name, out ICollection<Vec2> points)`

**Purpose:** Attempts to get `get value`, usually returning the result in an out parameter.

## Usage Example

```csharp
MBBoundaryCollection example = MBBoundaryCollection.Count;
```

## See Also

- [Complete Class Catalog](../catalog)