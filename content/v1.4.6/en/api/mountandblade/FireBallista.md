---
title: "FireBallista"
description: "FireBallista: a public class in TaleWorlds.MountAndBlade, inheriting Ballista; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/FireBallista.cs."
---
# FireBallista

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FireBallista : Ballista`
**File:** `TaleWorlds.MountAndBlade/FireBallista.cs`

## Overview

FireBallista lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/FireBallista.cs. It is a public class, implementing/inheriting Ballista; the inheritance chain is FireBallista → Ballista → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FireBallista is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain FireBallista → Ballista → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/FireBallista.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSiegeEngineType` | `public override SiegeEngineType GetSiegeEngineType()` | method |
| `ProcessTargetValue` | `public override float ProcessTargetValue(float baseValue, TargetFlags flags)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface Ballista](../Ballista)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
