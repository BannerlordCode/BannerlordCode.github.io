<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MethodDataEnumerator`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MethodDataEnumerator

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class MethodDataEnumerator : IEnumerator`
**Base:** `IEnumerator`
**Area:** campaign-ext

## Overview

`MethodDataEnumerator` lives in `System.Management`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `System.Management` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public MethodData Current { get; }` |
| `Count` | `public int Count { get; }` |
| `IsSynchronized` | `public bool IsSynchronized { get; }` |
| `this` | `public virtual MethodData this { get; }` |
| `SyncRoot` | `public object SyncRoot { get; }` |

## Key Methods

### MoveNext
`public bool MoveNext()`

**Purpose:** Handles logic related to `move next`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### Add
`public virtual void Add(string methodName)`

**Purpose:** Adds `add` to the current collection or state.

### Add
`public virtual void Add(string methodName, ManagementBaseObject inParameters, ManagementBaseObject outParameters)`

**Purpose:** Adds `add` to the current collection or state.

### CopyTo
`public void CopyTo(Array array, int index)`

**Purpose:** Handles logic related to `copy to`.

### CopyTo
`public void CopyTo(MethodData methodArray, int index)`

**Purpose:** Handles logic related to `copy to`.

### GetEnumerator
`public MethodDataEnumerator GetEnumerator()`

**Purpose:** Gets the current value of `enumerator`.

### Remove
`public virtual void Remove(string methodName)`

**Purpose:** Removes `remove` from the current collection or state.

## Usage Example

```csharp
MethodDataEnumerator example = MethodDataEnumerator.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
