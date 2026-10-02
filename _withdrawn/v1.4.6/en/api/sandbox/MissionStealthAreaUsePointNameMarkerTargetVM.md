---
title: "MissionStealthAreaUsePointNameMarkerTargetVM"
description: "MissionStealthAreaUsePointNameMarkerTargetVM: a public class in SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout, inheriting MissionNameMarkerTargetBaseVM; 4 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthAreaUsePointNameMarkerTargetVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionStealthAreaUsePointNameMarkerTargetVM

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionStealthAreaUsePointNameMarkerTargetVM : MissionNameMarkerTargetBaseVM`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthAreaUsePointNameMarkerTargetVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionStealthAreaUsePointNameMarkerTargetVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthAreaUsePointNameMarkerTargetVM.cs. It is a public class, implementing/inheriting MissionNameMarkerTargetBaseVM; the inheritance chain is MissionStealthAreaUsePointNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionStealthAreaUsePointNameMarkerTargetVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout`, inheritance chain MissionStealthAreaUsePointNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthAreaUsePointNameMarkerTargetVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionStealthAreaUsePointNameMarkerTargetVM` | `public MissionStealthAreaUsePointNameMarkerTargetVM(StealthAreaUsePoint usePoint)` | constructor |
| `Equals` | `public override bool Equals(MissionNameMarkerTargetBaseVM other)` | method |
| `UpdatePosition` | `public override void UpdatePosition(Camera missionCamera)` | method |
| `GetName` | `protected override TextObject GetName()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionNameMarkerTargetBaseVM](../MissionNameMarkerTargetBaseVM/)
- [same namespace MissionStealthAreaNameMarkerTargetVM](../MissionStealthAreaNameMarkerTargetVM/)
- [same namespace MissionStealthFailCounterVM](../MissionStealthFailCounterVM/)
- [same namespace MissionStealthSentryNameMarkerTargetVM](../MissionStealthSentryNameMarkerTargetVM/)
