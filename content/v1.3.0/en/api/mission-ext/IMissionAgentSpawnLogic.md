---
title: "IMissionAgentSpawnLogic"
description: "Auto-generated class reference for IMissionAgentSpawnLogic."
---
# IMissionAgentSpawnLogic

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IMissionAgentSpawnLogic : IMissionBehavior`
**Base:** `IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/IMissionAgentSpawnLogic.cs`

## Overview

`IMissionAgentSpawnLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `IMissionAgentSpawnLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIMissionAgentSpawnLogic service = ...;
```

## See Also

- [Area Index](../)