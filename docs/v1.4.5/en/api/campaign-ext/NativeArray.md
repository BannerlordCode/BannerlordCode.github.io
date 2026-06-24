<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeArray`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NativeArray

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public sealed class NativeArray : NativeObject`
**Base:** `NativeObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.DotNet/TaleWorlds.DotNet/NativeArray.cs`

## Overview

`NativeArray` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
NativeArray.Create();
```

## See Also

- [Complete Class Catalog](../catalog)