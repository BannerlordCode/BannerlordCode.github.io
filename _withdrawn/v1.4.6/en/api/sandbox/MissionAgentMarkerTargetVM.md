---
title: "MissionAgentMarkerTargetVM"
description: "MissionAgentMarkerTargetVM: a public class in SandBox.ViewModelCollection.Missions.NameMarker.Targets, inheriting MissionNameMarkerTargetVM<Agent>; 4 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionAgentMarkerTargetVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionAgentMarkerTargetVM

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker.Targets`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionAgentMarkerTargetVM : MissionNameMarkerTargetVM<Agent>`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionAgentMarkerTargetVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionAgentMarkerTargetVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionAgentMarkerTargetVM.cs. It is a public class, implementing/inheriting MissionNameMarkerTargetVM<Agent>; the inheritance chain is MissionAgentMarkerTargetVM → MissionNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAgentMarkerTargetVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Missions.NameMarker.Targets`, inheritance chain MissionAgentMarkerTargetVM → MissionNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionAgentMarkerTargetVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionAgentMarkerTargetVM` | `public MissionAgentMarkerTargetVM(Agent target) : base(target)` | constructor |
| `UpdatePosition` | `public override void UpdatePosition(Camera missionCamera)` | method |
| `GetName` | `protected override TextObject GetName()` | method |
| `UpdateQuestStatus` | `public void UpdateQuestStatus()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionNameMarkerTargetVM](../MissionNameMarkerTargetVM__1/)
- [same namespace MissionAnimatedBasicAreaIndicatorMarkerTargetVM](../MissionAnimatedBasicAreaIndicatorMarkerTargetVM/)
- [same namespace MissionBasicAreaIndicatorMarkerTargetVM](../MissionBasicAreaIndicatorMarkerTargetVM/)
- [same namespace MissionCommonAreaMarkerTargetVM](../MissionCommonAreaMarkerTargetVM/)
- [same namespace MissionGenericMarkerTargetVM](../MissionGenericMarkerTargetVM/)
