---
title: "GameModelsManager"
description: "GameModelsManager: a public class in TaleWorlds.Core; 3 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/GameModelsManager.cs."
---
# GameModelsManager

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class GameModelsManager`
**File:** `TaleWorlds.Core/GameModelsManager.cs`

## Overview

GameModelsManager lives in the TaleWorlds.Core module, source file TaleWorlds.Core/GameModelsManager.cs. It is a public class (abstract); the inheritance chain is GameModelsManager. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameModelsManager is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain GameModelsManager. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/GameModelsManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameModelsManager` | `protected GameModelsManager(IEnumerable<GameModel>inputComponents)` | constructor |
| `GetGameModel` | `protected T GetGameModel<T>() where T : GameModel` | method |
| `MBReadOnlyList` | `public MBReadOnlyList<GameModel>GetGameModels()` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
