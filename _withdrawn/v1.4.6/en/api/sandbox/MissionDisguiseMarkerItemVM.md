---
title: "MissionDisguiseMarkerItemVM"
description: "MissionDisguiseMarkerItemVM: a public class in SandBox.ViewModelCollection.Missions.MainAgentDetection, inheriting ViewModel; 17 exposed members (2 methods, 12 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionDisguiseMarkerItemVM

**Namespace:** `SandBox.ViewModelCollection.Missions.MainAgentDetection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionDisguiseMarkerItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionDisguiseMarkerItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionDisguiseMarkerItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 17 public/protected members: 2 methods, 12 properties, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionDisguiseMarkerItemVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Missions.MainAgentDetection`, inheritance chain MissionDisguiseMarkerItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 12/17, methods 2/17), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MainAgentDetectionVM](../MainAgentDetectionVM/)
- [same namespace MissionDisguiseMarkersVM](../MissionDisguiseMarkersVM/)
- [same namespace MissionLosingTargetVM](../MissionLosingTargetVM/)
