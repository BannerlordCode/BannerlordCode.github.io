---
title: "MonsterMissionData"
description: "MonsterMissionData: a public class in TaleWorlds.MountAndBlade, inheriting IMonsterMissionData; 6 exposed members (0 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MonsterMissionData.cs."
---
# MonsterMissionData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MonsterMissionData : IMonsterMissionData`
**File:** `TaleWorlds.MountAndBlade/MonsterMissionData.cs`

## Overview

MonsterMissionData lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MonsterMissionData.cs. It is a public class, implementing/inheriting IMonsterMissionData; the inheritance chain is MonsterMissionData → IMonsterMissionData. It exposes 6 public/protected members: 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MonsterMissionData is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MonsterMissionData → IMonsterMissionData. The surface is property-led (properties 5/6, methods 0/6), so it mostly exposes state for reading. IMonsterMissionData on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MonsterMissionData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Monster` | `public Monster Monster` | property |
| `BodyCapsule` | `public CapsuleData BodyCapsule` | property |
| `CrouchedBodyCapsule` | `public CapsuleData CrouchedBodyCapsule` | property |
| `ActionSet` | `public MBActionSet ActionSet` | property |
| `FemaleActionSet` | `public MBActionSet FemaleActionSet` | property |
| `MonsterMissionData` | `public MonsterMissionData(Monster monster)` | constructor |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
