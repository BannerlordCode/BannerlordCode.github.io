---
title: "IScreenManagerEngineConnection"
description: "Auto-generated class reference for IScreenManagerEngineConnection."
---
# IScreenManagerEngineConnection

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public interface IScreenManagerEngineConnection`
**Base:** none
**File:** `TaleWorlds.ScreenSystem/IScreenManagerEngineConnection.cs`

## Overview

`IScreenManagerEngineConnection` lives in `TaleWorlds.ScreenSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ScreenSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIScreenManagerEngineConnection service = ...;
```

## See Also

- [Area Index](../)