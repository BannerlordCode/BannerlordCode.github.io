---
title: "MissionGenericMarkerTargetVM"
description: "MissionGenericMarkerTargetVM: a public class in SandBox.ViewModelCollection, inheriting MissionNameMarkerTargetBaseVM; 4 exposed members (3 methods, 0 properties, 0 fields). Source: SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionGenericMarkerTargetVM.cs."
---
# MissionGenericMarkerTargetVM

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker.Targets`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionGenericMarkerTargetVM : MissionNameMarkerTargetBaseVM`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionGenericMarkerTargetVM.cs`

## Overview

MissionGenericMarkerTargetVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionGenericMarkerTargetVM.cs. It is a public class, implementing/inheriting MissionNameMarkerTargetBaseVM; the inheritance chain is MissionGenericMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGenericMarkerTargetVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Missions.NameMarker.Targets) the module directory; inheritance chain MissionGenericMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionGenericMarkerTargetVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionGenericMarkerTargetVM` | `public MissionGenericMarkerTargetVM(string identifier, string nameType, string iconType, Vec3 position, TextObject name)` | constructor |
| `Equals` | `public override bool Equals(MissionNameMarkerTargetBaseVM other)` | method |
| `UpdatePosition` | `public override void UpdatePosition(Camera missionCamera)` | method |
| `GetName` | `protected override TextObject GetName()` | method |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionNameMarkerTargetBaseVM](../MissionNameMarkerTargetBaseVM)
- [same namespace MissionAgentMarkerTargetVM](../MissionAgentMarkerTargetVM)
- [same namespace MissionAnimatedBasicAreaIndicatorMarkerTargetVM](../MissionAnimatedBasicAreaIndicatorMarkerTargetVM)
- [same namespace MissionBasicAreaIndicatorMarkerTargetVM](../MissionBasicAreaIndicatorMarkerTargetVM)
- [same namespace MissionCommonAreaMarkerTargetVM](../MissionCommonAreaMarkerTargetVM)
