---
title: "IGameStateListener"
description: "Auto-generated class reference for IGameStateListener."
---
# IGameStateListener

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public interface IGameStateListener`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/IGameStateListener.cs`

## Overview

`IGameStateListener` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIGameStateListener service = ...;
```

## See Also

- [Area Index](../)