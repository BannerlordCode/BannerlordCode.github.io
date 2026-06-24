<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeArray`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeArray

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public sealed class NativeArray : NativeObject`
**Base:** `NativeObject`
**Area:** campaign-ext

## Overview

`NativeArray` lives in `TaleWorlds.DotNet`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DataSize` | `public int DataSize { get; }` |

## Key Methods

### Create
`public static NativeArray Create()`

**Purpose:** Creates a new `create` instance or object.

### AddElement
`public void AddElement(int value)`

**Purpose:** Adds `element` to the current collection or state.

### AddElement
`public void AddElement(float value)`

**Purpose:** Adds `element` to the current collection or state.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
NativeArray.Create();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
