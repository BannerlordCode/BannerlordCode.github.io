---
title: "ManagedObjectKeeper"
description: "Auto-generated class reference for ManagedObjectKeeper."
---
# ManagedObjectKeeper

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `internal class ManagedObjectKeeper`
**Base:** none
**File:** `bin/TaleWorlds.DotNet/TaleWorlds.DotNet/ManagedObjectKeeper.cs`

## Overview

`ManagedObjectKeeper` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ManagedObjectKeeper instance = ...;
```

## See Also

- [Area Index](../)