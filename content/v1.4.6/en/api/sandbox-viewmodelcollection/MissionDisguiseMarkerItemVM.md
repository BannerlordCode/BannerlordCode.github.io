---
title: "MissionDisguiseMarkerItemVM"
description: "MissionDisguiseMarkerItemVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 17 exposed members (2 methods, 12 properties, 0 fields). Source: SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs."
---
# MissionDisguiseMarkerItemVM

**Namespace:** `SandBox.ViewModelCollection.Missions.MainAgentDetection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionDisguiseMarkerItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs`

## Overview

MissionDisguiseMarkerItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionDisguiseMarkerItemVM → ViewModel. It exposes 17 public/protected members: 2 methods, 12 properties, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionDisguiseMarkerItemVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Missions.MainAgentDetection) the module directory; inheritance chain MissionDisguiseMarkerItemVM → ViewModel. The surface is property-led (properties 12/17, methods 2/17), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OffenseInfo` | `public DisguiseMissionLogic.ShadowingAgentOffenseInfo OffenseInfo` | property |
| `MissionDisguiseMarkerItemVM` | `public MissionDisguiseMarkerItemVM(Camera missionCamera, DisguiseMissionLogic.ShadowingAgentOffenseInfo offenseInfo)` | constructor |
| `RefreshVisuals` | `public void RefreshVisuals()` | method |
| `UpdatePosition` | `public void UpdatePosition()` | method |
| `ScreenPosition` | `public Vec2 ScreenPosition` | property |
| `AlarmProgress` | `public int AlarmProgress` | property |
| `AlarmState` | `public string AlarmState` | property |
| `OffenseTypeIdentifier` | `public string OffenseTypeIdentifier` | property |
| `IsStealthModeEnabled` | `public bool IsStealthModeEnabled` | property |
| `IsSuspicious` | `public bool IsSuspicious` | property |
| `IsTarget` | `public bool IsTarget` | property |
| `IsInVision` | `public bool IsInVision` | property |
| `IsInVisibilityRange` | `public bool IsInVisibilityRange` | property |
| `AgentAlarmStateEnum` | `public enum AgentAlarmStateEnum` | property |
| `AgentStealthOffenseType` | `public enum AgentStealthOffenseType` | property |
| `AgentAlarmStateEnum` | `public enum AgentAlarmStateEnum` | nested type |
| `AgentStealthOffenseType` | `public enum AgentStealthOffenseType` | nested type |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MainAgentDetectionVM](../MainAgentDetectionVM)
- [same namespace MissionDisguiseMarkersVM](../MissionDisguiseMarkersVM)
- [same namespace MissionLosingTargetVM](../MissionLosingTargetVM)
