---
title: "MissionStealthAreaNameMarkerTargetVM"
description: "MissionStealthAreaNameMarkerTargetVM: a public class in SandBox.ViewModelCollection, inheriting MissionNameMarkerTargetVM<StealthAreaMarker>; 3 exposed members (2 methods, 0 properties, 0 fields). Source: SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthAreaNameMarkerTargetVM.cs."
---
# MissionStealthAreaNameMarkerTargetVM

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionStealthAreaNameMarkerTargetVM : MissionNameMarkerTargetVM<StealthAreaMarker>`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthAreaNameMarkerTargetVM.cs`

## Overview

MissionStealthAreaNameMarkerTargetVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthAreaNameMarkerTargetVM.cs. It is a public class, implementing/inheriting MissionNameMarkerTargetVM<StealthAreaMarker>; the inheritance chain is MissionStealthAreaNameMarkerTargetVM → MissionNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionStealthAreaNameMarkerTargetVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout) the module directory; inheritance chain MissionStealthAreaNameMarkerTargetVM → MissionNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthAreaNameMarkerTargetVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionStealthAreaNameMarkerTargetVM` | `public MissionStealthAreaNameMarkerTargetVM(StealthAreaMarker target, Vec3 position) : base(target)` | constructor |
| `UpdatePosition` | `public override void UpdatePosition(Camera missionCamera)` | method |
| `GetName` | `protected override TextObject GetName()` | method |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionNameMarkerTargetVM](../MissionNameMarkerTargetVM__1)
- [same namespace MissionStealthAreaUsePointNameMarkerTargetVM](../MissionStealthAreaUsePointNameMarkerTargetVM)
- [same namespace MissionStealthFailCounterVM](../MissionStealthFailCounterVM)
- [same namespace MissionStealthSentryNameMarkerTargetVM](../MissionStealthSentryNameMarkerTargetVM)
