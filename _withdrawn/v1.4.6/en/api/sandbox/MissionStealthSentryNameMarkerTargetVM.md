---
title: "MissionStealthSentryNameMarkerTargetVM"
description: "MissionStealthSentryNameMarkerTargetVM: a public class in SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout, inheriting MissionNameMarkerTargetVM<Agent>; 3 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthSentryNameMarkerTargetVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionStealthSentryNameMarkerTargetVM

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionStealthSentryNameMarkerTargetVM : MissionNameMarkerTargetVM<Agent>`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthSentryNameMarkerTargetVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionStealthSentryNameMarkerTargetVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthSentryNameMarkerTargetVM.cs. It is a public class, implementing/inheriting MissionNameMarkerTargetVM<Agent>; the inheritance chain is MissionStealthSentryNameMarkerTargetVM → MissionNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionStealthSentryNameMarkerTargetVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout`, inheritance chain MissionStealthSentryNameMarkerTargetVM → MissionNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthSentryNameMarkerTargetVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionStealthSentryNameMarkerTargetVM` | `public MissionStealthSentryNameMarkerTargetVM(Agent target) : base(target)` | constructor |
| `UpdatePosition` | `public override void UpdatePosition(Camera missionCamera)` | method |
| `GetName` | `protected override TextObject GetName()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionNameMarkerTargetVM](../MissionNameMarkerTargetVM__1/)
- [same namespace MissionStealthAreaNameMarkerTargetVM](../MissionStealthAreaNameMarkerTargetVM/)
- [same namespace MissionStealthAreaUsePointNameMarkerTargetVM](../MissionStealthAreaUsePointNameMarkerTargetVM/)
- [same namespace MissionStealthFailCounterVM](../MissionStealthFailCounterVM/)
