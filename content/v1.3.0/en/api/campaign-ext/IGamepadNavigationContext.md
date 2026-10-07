---
title: "IGamepadNavigationContext"
description: "Auto-generated class reference for IGamepadNavigationContext."
---
# IGamepadNavigationContext

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** (global)
**Module:** (global)
**Type:** `public interface IGamepadNavigationContext`
**Base:** none
**File:** `TaleWorlds.GauntletUI/IGamepadNavigationContext.cs`

## Overview

`IGamepadNavigationContext` lives in `(global)` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `(global)` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIGamepadNavigationContext service = ...;
```

## See Also

- [Area Index](../)