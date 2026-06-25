---
title: "SittableType"
description: "Auto-generated class reference for SittableType."
---
# SittableType

**Namespace:** SandBox.Objects.Usables
**Module:** SandBox.Objects
**Type:** `public enum SittableType`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.Objects.Usables/Chair.cs`

## Overview

`SittableType` lives in `SandBox.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
SittableType instance = ...;
```

## See Also

- [Area Index](../)