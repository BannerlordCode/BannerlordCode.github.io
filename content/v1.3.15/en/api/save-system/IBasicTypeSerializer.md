---
title: "IBasicTypeSerializer"
description: "Auto-generated class reference for IBasicTypeSerializer."
---
# IBasicTypeSerializer

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public interface IBasicTypeSerializer`
**Base:** none
**File:** `TaleWorlds.SaveSystem/Definition/IBasicTypeSerializer.cs`

## Overview

`IBasicTypeSerializer` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIBasicTypeSerializer service = ...;
```

## See Also

- [Area Index](../)