---
title: "MissionAgentAlarmStateVM"
description: "MissionAgentAlarmStateVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 9 exposed members (6 methods, 2 properties, 0 fields). Source: SandBox.ViewModelCollection/Missions/MissionAgentAlarmStateVM.cs."
---
# MissionAgentAlarmStateVM

**Namespace:** `SandBox.ViewModelCollection.Missions`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionAgentAlarmStateVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MissionAgentAlarmStateVM.cs`

## Overview

MissionAgentAlarmStateVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/MissionAgentAlarmStateVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionAgentAlarmStateVM → ViewModel. It exposes 9 public/protected members: 6 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAgentAlarmStateVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Missions) the module directory; inheritance chain MissionAgentAlarmStateVM → ViewModel. The surface is method-led (methods 6/9, properties 2/9), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/MissionAgentAlarmStateVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionAgentAlarmStateVM` | `public MissionAgentAlarmStateVM()` | constructor |
| `Initialize` | `public void Initialize(Mission mission, Camera camera)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Update` | `public void Update()` | method |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent agent)` | method |
| `OnAgentBuild` | `public void OnAgentBuild(Agent agent, Banner banner)` | method |
| `OnAgentTeamChanged` | `public void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)` | method |
| `MBBindingList` | `public MBBindingList<MissionAgentAlarmTargetVM>Targets` | property |
| `IsMainAgentInSafeArea` | `public bool IsMainAgentInSafeArea` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionAgentAlarmTargetVM](../MissionAgentAlarmTargetVM)
- [same namespace MissionArenaPracticeFightVM](../MissionArenaPracticeFightVM)
- [same namespace MissionQuestBarVM](../MissionQuestBarVM)
