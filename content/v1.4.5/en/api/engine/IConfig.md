---
title: "IConfig"
description: "Auto-generated class reference for IConfig."
---
# IConfig

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal interface IConfig`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/IConfig.cs`

## Overview

`IConfig` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIConfig service = ...;
```

## See Also

- [Area Index](../)