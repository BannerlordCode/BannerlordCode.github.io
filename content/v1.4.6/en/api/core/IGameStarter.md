---
title: "IGameStarter"
description: "IGameStarter: a public interface in TaleWorlds.Core; 3 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.Core/IGameStarter.cs."
---
# IGameStarter

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IGameStarter`
**File:** `TaleWorlds.Core/IGameStarter.cs`

## Overview

IGameStarter lives in the TaleWorlds.Core module, source file TaleWorlds.Core/IGameStarter.cs. It is a public interface; the inheritance chain is IGameStarter. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IGameStarter is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain IGameStarter. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/IGameStarter.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddModel` | `void AddModel(GameModel gameModel);` | method |
| `AddModel` | `void AddModel<T>(MBGameModel<T>gameModel) where T : GameModel;` | method |
| `IEnumerable` | `IEnumerable<GameModel>Models` | property |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
