---
title: "MissionLogic"
description: "MissionLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionBehavior; 10 exposed members (9 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionLogic.cs."
---
# MissionLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionLogic : MissionBehavior`
**File:** `TaleWorlds.MountAndBlade/MissionLogic.cs`

## Overview

MissionLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionLogic.cs. It is a public class (abstract), implementing/inheriting MissionBehavior; the inheritance chain is MissionLogic → MissionBehavior → IMissionBehavior. It exposes 10 public/protected members: 9 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionLogic is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 9/10, properties 1/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BehaviorType` | `public override MissionBehaviorType BehaviorType` | property |
| `OnEndMissionRequest` | `public virtual InquiryData OnEndMissionRequest(out bool canLeave)` | method |
| `MissionEnded` | `public virtual bool MissionEnded(ref MissionResult missionResult)` | method |
| `OnBattleEnded` | `public virtual void OnBattleEnded()` | method |
| `ShowBattleResults` | `public virtual void ShowBattleResults()` | method |
| `OnRetreatMission` | `public virtual void OnRetreatMission()` | method |
| `OnSurrenderMission` | `public virtual void OnSurrenderMission()` | method |
| `OnAutoDeployTeam` | `public virtual void OnAutoDeployTeam(Team team)` | method |
| `List` | `public virtual List<EquipmentElement>GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments = false)` | method |
| `OnMissionResultReady` | `public virtual void OnMissionResultReady(MissionResult missionResult)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
