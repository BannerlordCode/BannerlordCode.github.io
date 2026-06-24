<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QualifierDataCollection`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# QualifierDataCollection

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class QualifierDataCollection : ICollection, IEnumerable`
**Base:** `ICollection`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/QualifierDataCollection.cs`

## Overview

`QualifierDataCollection` lives in `System.Management` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `System.Management` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public QualifierData Current { get; }` |
| `Count` | `public int Count { get; }` |
| `IsSynchronized` | `public bool IsSynchronized { get; }` |
| `this` | `public virtual QualifierData this { get; }` |
| `SyncRoot` | `public object SyncRoot { get; }` |

## Key Methods

### MoveNext
`public bool MoveNext()`

**Purpose:** Handles logic related to `move next`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### Add
`public virtual void Add(string qualifierName, object qualifierValue)`

**Purpose:** Adds `add` to the current collection or state.

### Add
`public virtual void Add(string qualifierName, object qualifierValue, bool isAmended, bool propagatesToInstance, bool propagatesToSubclass, bool isOverridable)`

**Purpose:** Adds `add` to the current collection or state.

### CopyTo
`public void CopyTo(Array array, int index)`

**Purpose:** Handles logic related to `copy to`.

### CopyTo
`public void CopyTo(QualifierData qualifierArray, int index)`

**Purpose:** Handles logic related to `copy to`.

### GetEnumerator
`public QualifierDataEnumerator GetEnumerator()`

**Purpose:** Gets the current value of `enumerator`.

### Remove
`public virtual void Remove(string qualifierName)`

**Purpose:** Removes `remove` from the current collection or state.

## Usage Example

```csharp
QualifierDataCollection example = QualifierDataCollection.Current;
```

## See Also

- [Complete Class Catalog](../catalog)