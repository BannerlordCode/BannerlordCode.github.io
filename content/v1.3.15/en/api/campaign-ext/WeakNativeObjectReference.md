---
title: "WeakNativeObjectReference"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeakNativeObjectReference`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeakNativeObjectReference

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public sealed class WeakNativeObjectReference`
**Base:** none
**File:** `TaleWorlds.DotNet/WeakNativeObjectReference.cs`

## Overview

`WeakNativeObjectReference` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ManualInvalidate
`public void ManualInvalidate()`

**Purpose:** Handles logic related to `manual invalidate`.

### GetNativeObject
`public NativeObject GetNativeObject()`

**Purpose:** Gets the current value of `native object`.

## Usage Example

```csharp
var value = new WeakNativeObjectReference();
value.ManualInvalidate();
```

## See Also

- [Complete Class Catalog](../catalog)