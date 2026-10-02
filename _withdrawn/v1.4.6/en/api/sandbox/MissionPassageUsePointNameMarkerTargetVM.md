---
title: "MissionPassageUsePointNameMarkerTargetVM"
description: "MissionPassageUsePointNameMarkerTargetVM: a public class in SandBox.ViewModelCollection.Missions.NameMarker.Targets, inheriting MissionNameMarkerTargetVM<PassageUsePoint>; 3 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionPassageUsePointNameMarkerTargetVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionPassageUsePointNameMarkerTargetVM

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker.Targets`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionPassageUsePointNameMarkerTargetVM : MissionNameMarkerTargetVM<PassageUsePoint>`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionPassageUsePointNameMarkerTargetVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionPassageUsePointNameMarkerTargetVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionPassageUsePointNameMarkerTargetVM.cs. It is a public class, implementing/inheriting MissionNameMarkerTargetVM<PassageUsePoint>; the inheritance chain is MissionPassageUsePointNameMarkerTargetVM → MissionNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionPassageUsePointNameMarkerTargetVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Missions.NameMarker.Targets`, inheritance chain MissionPassageUsePointNameMarkerTargetVM → MissionNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionPassageUsePointNameMarkerTargetVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionPassageUsePointNameMarkerTargetVM` | `public MissionPassageUsePointNameMarkerTargetVM(PassageUsePoint target) : base(target)` | constructor |
| `UpdatePosition` | `public override void UpdatePosition(Camera missionCamera)` | method |
| `GetName` | `protected override TextObject GetName()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionNameMarkerTargetVM](../MissionNameMarkerTargetVM__1/)
- [same namespace MissionAgentMarkerTargetVM](../MissionAgentMarkerTargetVM/)
- [same namespace MissionAnimatedBasicAreaIndicatorMarkerTargetVM](../MissionAnimatedBasicAreaIndicatorMarkerTargetVM/)
- [same namespace MissionBasicAreaIndicatorMarkerTargetVM](../MissionBasicAreaIndicatorMarkerTargetVM/)
- [same namespace MissionCommonAreaMarkerTargetVM](../MissionCommonAreaMarkerTargetVM/)
