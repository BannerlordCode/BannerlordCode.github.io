---
title: "IObjectTypeRecord"
description: "Auto-generated class reference for IObjectTypeRecord."
---
# IObjectTypeRecord

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `internal interface IObjectTypeRecord : IEnumerable`
**Base:** `IEnumerable`
**File:** `bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MBObjectManager.cs`

## Overview

`IObjectTypeRecord` lives in `TaleWorlds.ObjectSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ObjectSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIObjectTypeRecord service = ...;
```

## See Also

- [Area Index](../)