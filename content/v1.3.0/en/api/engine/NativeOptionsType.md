---
title: "NativeOptionsType"
description: "Auto-generated class reference for NativeOptionsType."
---
# NativeOptionsType

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public enum NativeOptionsType`
**Base:** none
**File:** `TaleWorlds.Engine/Options/NativeOptions.cs`

## Overview

`NativeOptionsType` lives in `TaleWorlds.Engine.Options` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine.Options` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
NativeOptionsType instance = ...;
```

## See Also

- [Area Index](../)