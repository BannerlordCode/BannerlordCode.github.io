---
title: "DefaultMissionDifficultyModel"
description: "DefaultMissionDifficultyModel: a public class in TaleWorlds.MountAndBlade, inheriting MissionDifficultyModel; 1 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/DefaultMissionDifficultyModel.cs."
---
# DefaultMissionDifficultyModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefaultMissionDifficultyModel : MissionDifficultyModel`
**File:** `TaleWorlds.MountAndBlade/DefaultMissionDifficultyModel.cs`

## Overview

DefaultMissionDifficultyModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DefaultMissionDifficultyModel.cs. It is a public class, implementing/inheriting MissionDifficultyModel; the inheritance chain is DefaultMissionDifficultyModel → MissionDifficultyModel → MBGameModel. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultMissionDifficultyModel is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain DefaultMissionDifficultyModel → MissionDifficultyModel → MBGameModel. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DefaultMissionDifficultyModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetDamageMultiplierOfCombatDifficulty` | `public override float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionDifficultyModel](../MissionDifficultyModel)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
