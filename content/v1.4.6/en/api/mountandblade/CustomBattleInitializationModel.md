---
title: "CustomBattleInitializationModel"
description: "CustomBattleInitializationModel: a public class in TaleWorlds.MountAndBlade, inheriting BattleInitializationModel; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/CustomBattleInitializationModel.cs."
---
# CustomBattleInitializationModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CustomBattleInitializationModel : BattleInitializationModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleInitializationModel.cs`

## Overview

CustomBattleInitializationModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CustomBattleInitializationModel.cs. It is a public class, implementing/inheriting BattleInitializationModel; the inheritance chain is CustomBattleInitializationModel → BattleInitializationModel → MBGameModel. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleInitializationModel is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain CustomBattleInitializationModel → BattleInitializationModel → MBGameModel. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CustomBattleInitializationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public override List<FormationClass>GetAllAvailableTroopTypes()` | method |
| `CanPlayerSideDeployWithOrderOfBattleAux` | `protected override bool CanPlayerSideDeployWithOrderOfBattleAux()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BattleInitializationModel](../BattleInitializationModel)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
