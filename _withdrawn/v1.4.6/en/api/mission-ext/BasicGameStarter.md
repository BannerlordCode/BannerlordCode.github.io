---
title: "BasicGameStarter"
description: "BasicGameStarter: a public class in TaleWorlds.MountAndBlade, inheriting IGameStarter; 4 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/BasicGameStarter.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BasicGameStarter

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BasicGameStarter : IGameStarter`
**File:** `TaleWorlds.MountAndBlade/BasicGameStarter.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BasicGameStarter lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BasicGameStarter.cs. It is a public class, implementing/inheriting IGameStarter; the inheritance chain is BasicGameStarter → IGameStarter. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BasicGameStarter lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain BasicGameStarter → IGameStarter. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BasicGameStarter.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BasicGameStarter` | `public BasicGameStarter()` | constructor |
| `GetModel` | `public T GetModel<T>() where T : GameModel` | method |
| `AddModel` | `public void AddModel(GameModel gameModel)` | method |
| `AddModel` | `public void AddModel<T>(MBGameModel<T>gameModel) where T : GameModel` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IGameStarter](../../core-extra/IGameStarter/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
