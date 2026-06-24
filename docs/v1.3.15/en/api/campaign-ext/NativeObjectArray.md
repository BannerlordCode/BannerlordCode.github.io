<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeObjectArray`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeObjectArray

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public sealed class NativeObjectArray : NativeObject, IEnumerable<NativeObject>, IEnumerable`
**Base:** `NativeObject`
**Area:** campaign-ext

## Overview

`NativeObjectArray` lives in `TaleWorlds.DotNet`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |

## Key Methods

### Create
`public static NativeObjectArray Create()`

**Purpose:** Creates a new `create` instance or object.

### GetElementAt
`public NativeObject GetElementAt(int index)`

**Purpose:** Gets the current value of `element at`.

### AddElement
`public void AddElement(NativeObject nativeObject)`

**Purpose:** Adds `element` to the current collection or state.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

## Usage Example

```csharp
NativeObjectArray example = NativeObjectArray.Count;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
