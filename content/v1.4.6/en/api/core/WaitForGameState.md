---
title: "WaitForGameState"
description: "WaitForGameState: a public class in TaleWorlds.Core, inheriting CoroutineState; 2 exposed members (0 methods, 1 properties, 0 fields). Source: TaleWorlds.Core/WaitForGameState.cs."
---
# WaitForGameState

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class WaitForGameState : CoroutineState`
**File:** `TaleWorlds.Core/WaitForGameState.cs`

## Overview

WaitForGameState lives in the TaleWorlds.Core module, source file TaleWorlds.Core/WaitForGameState.cs. It is a public class, implementing/inheriting CoroutineState; the inheritance chain is WaitForGameState → CoroutineState. It exposes 2 public/protected members: 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WaitForGameState is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain WaitForGameState → CoroutineState. The surface is property-led (properties 1/2, methods 0/2), so it mostly exposes state for reading. CoroutineState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/WaitForGameState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WaitForGameState` | `public WaitForGameState(Type stateType)` | constructor |
| `IsFinished` | `protected override bool IsFinished` | property |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
