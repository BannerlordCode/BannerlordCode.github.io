---
title: "NativeObjectPointer"
description: "Auto-generated class reference for NativeObjectPointer."
---
# NativeObjectPointer

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `internal struct NativeObjectPointer`
**Base:** none
**File:** `TaleWorlds.DotNet/NativeObjectPointer.cs`

## Overview

`NativeObjectPointer` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
NativeObjectPointer instance = ...;
```

## See Also

- [Area Index](../)