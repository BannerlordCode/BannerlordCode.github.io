---
title: "ManagementObjectEnumerator"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagementObjectEnumerator`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementObjectEnumerator

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ManagementObjectEnumerator : IEnumerator, IDisposable`
**Base:** `IEnumerator`
**Area:** campaign-ext

## Overview

`ManagementObjectEnumerator` lives in `System.Management`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `System.Management` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public ManagementBaseObject Current { get; }` |
| `Count` | `public int Count { get; }` |
| `IsSynchronized` | `public bool IsSynchronized { get; }` |
| `SyncRoot` | `public object SyncRoot { get; }` |

## Key Methods

### Dispose
`public void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### MoveNext
`public bool MoveNext()`

**Purpose:** Handles logic related to `move next`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### CopyTo
`public void CopyTo(Array array, int index)`

**Purpose:** Handles logic related to `copy to`.

### CopyTo
`public void CopyTo(ManagementBaseObject objectCollection, int index)`

**Purpose:** Handles logic related to `copy to`.

### Dispose
`public void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### GetEnumerator
`public ManagementObjectEnumerator GetEnumerator()`

**Purpose:** Gets the current value of `enumerator`.

## Usage Example

```csharp
ManagementObjectEnumerator example = ManagementObjectEnumerator.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
