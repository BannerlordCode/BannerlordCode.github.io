---
title: "GameModelsManager"
description: "GameModelsManager: a public class in TaleWorlds.Core; 3 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/GameModelsManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameModelsManager

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class GameModelsManager`
**File:** `TaleWorlds.Core/GameModelsManager.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

GameModelsManager lives in the TaleWorlds.Core module, source file TaleWorlds.Core/GameModelsManager.cs. It is a public class (abstract); the inheritance chain is GameModelsManager. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameModelsManager lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain GameModelsManager. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/GameModelsManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GameModelsManager` | `protected GameModelsManager(IEnumerable<GameModel>inputComponents)` | constructor |
| `GetGameModel` | `protected T GetGameModel<T>() where T : GameModel` | method |
| `MBReadOnlyList` | `public MBReadOnlyList<GameModel>GetGameModels()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
