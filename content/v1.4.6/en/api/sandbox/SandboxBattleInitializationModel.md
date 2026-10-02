---
title: "SandboxBattleInitializationModel"
description: "SandboxBattleInitializationModel: a public class in SandBox, inheriting BattleInitializationModel; 2 exposed members (2 methods, 0 properties, 0 fields). Source: SandBox/GameComponents/SandboxBattleInitializationModel.cs."
---
# SandboxBattleInitializationModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxBattleInitializationModel : BattleInitializationModel`
**File:** `SandBox/GameComponents/SandboxBattleInitializationModel.cs`

## Overview

SandboxBattleInitializationModel lives in the SandBox module, source file SandBox/GameComponents/SandboxBattleInitializationModel.cs. It is a public class, implementing/inheriting BattleInitializationModel; the inheritance chain is SandboxBattleInitializationModel → BattleInitializationModel. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandboxBattleInitializationModel is a top-level type in SandBox, namespace differing from (SandBox.GameComponents) the module directory; inheritance chain SandboxBattleInitializationModel → BattleInitializationModel. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. BattleInitializationModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/GameComponents/SandboxBattleInitializationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public override List<FormationClass>GetAllAvailableTroopTypes()` | method |
| `CanPlayerSideDeployWithOrderOfBattleAux` | `protected override bool CanPlayerSideDeployWithOrderOfBattleAux()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler)
- [same namespace SandboxAgentApplyDamageModel](../SandboxAgentApplyDamageModel)
- [same namespace SandboxAgentDecideKilledOrUnconsciousModel](../SandboxAgentDecideKilledOrUnconsciousModel)
- [same namespace SandboxAgentStatCalculateModel](../SandboxAgentStatCalculateModel)
