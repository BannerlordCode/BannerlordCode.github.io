---
title: "MissionAgentAlarmTargetVM"
description: "MissionAgentAlarmTargetVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 14 exposed members (3 methods, 10 properties, 0 fields). Source: SandBox.ViewModelCollection/Missions/MissionAgentAlarmTargetVM.cs."
---
# MissionAgentAlarmTargetVM

**Namespace:** `SandBox.ViewModelCollection.Missions`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionAgentAlarmTargetVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MissionAgentAlarmTargetVM.cs`

## Overview

MissionAgentAlarmTargetVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/MissionAgentAlarmTargetVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionAgentAlarmTargetVM → ViewModel. It exposes 14 public/protected members: 3 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAgentAlarmTargetVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Missions) the module directory; inheritance chain MissionAgentAlarmTargetVM → ViewModel. The surface is property-led (properties 10/14, methods 3/14), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/MissionAgentAlarmTargetVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HasCautiousness` | `public bool HasCautiousness` | property |
| `AlarmedBehaviorGroup` | `public AlarmedBehaviorGroup AlarmedBehaviorGroup` | property |
| `MissionAgentAlarmTargetVM` | `public MissionAgentAlarmTargetVM(Agent agent, Action<MissionAgentAlarmTargetVM>onRemove)` | constructor |
| `UpdateValues` | `public void UpdateValues()` | method |
| `UpdateScreenPosition` | `public void UpdateScreenPosition(Camera missionCamera)` | method |
| `ExecuteRemove` | `public void ExecuteRemove()` | method |
| `IsStealthModeEnabled` | `public bool IsStealthModeEnabled` | property |
| `IsMainAgentInVisibilityRange` | `public bool IsMainAgentInVisibilityRange` | property |
| `IsInVision` | `public bool IsInVision` | property |
| `IsSuspected` | `public bool IsSuspected` | property |
| `AlarmProgress` | `public int AlarmProgress` | property |
| `AlarmState` | `public string AlarmState` | property |
| `WSign` | `public int WSign` | property |
| `ScreenPosition` | `public Vec2 ScreenPosition` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionAgentAlarmStateVM](../MissionAgentAlarmStateVM)
- [same namespace MissionArenaPracticeFightVM](../MissionArenaPracticeFightVM)
- [same namespace MissionQuestBarVM](../MissionQuestBarVM)
