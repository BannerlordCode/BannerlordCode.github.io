<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeObjectArray`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NativeObjectArray

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public sealed class NativeObjectArray : NativeObject, IEnumerable<NativeObject>, IEnumerable`
**Base:** `NativeObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.DotNet/TaleWorlds.DotNet/NativeObjectArray.cs`

## Overview

`NativeObjectArray` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
NativeObjectArray example = NativeObjectArray.Value;
```

## See Also

- [Complete Class Catalog](../catalog)