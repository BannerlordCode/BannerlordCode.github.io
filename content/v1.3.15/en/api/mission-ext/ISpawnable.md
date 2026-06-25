---
title: "ISpawnable"
description: "Auto-generated class reference for ISpawnable."
---
# ISpawnable

**Namespace:** TaleWorlds.MountAndBlade.Objects.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface ISpawnable`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/ISpawnable.cs`

## Overview

`ISpawnable` lives in `TaleWorlds.MountAndBlade.Objects.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IISpawnable service = ...;
```

## See Also

- [Area Index](../)