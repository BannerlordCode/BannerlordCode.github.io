---
title: "WeakNativeObjectReference"
description: "Auto-generated class reference for WeakNativeObjectReference."
---
# WeakNativeObjectReference

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public sealed class WeakNativeObjectReference`
**Base:** none
**File:** `bin/TaleWorlds.DotNet/TaleWorlds.DotNet/WeakNativeObjectReference.cs`

## Overview

`WeakNativeObjectReference` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ManualInvalidate
`public void ManualInvalidate()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WeakNativeObjectReference from the subsystem API first
WeakNativeObjectReference weakNativeObjectReference = ...;
weakNativeObjectReference.ManualInvalidate();
```

### GetNativeObject
`public NativeObject GetNativeObject()`

**Purpose:** Reads and returns the `native object` value held by the current object.

```csharp
// Obtain an instance of WeakNativeObjectReference from the subsystem API first
WeakNativeObjectReference weakNativeObjectReference = ...;
var result = weakNativeObjectReference.GetNativeObject();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WeakNativeObjectReference weakNativeObjectReference = ...;
weakNativeObjectReference.ManualInvalidate();
```

## See Also

- [Area Index](../)