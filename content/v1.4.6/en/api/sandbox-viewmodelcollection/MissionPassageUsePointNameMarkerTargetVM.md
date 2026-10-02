---
title: "MissionPassageUsePointNameMarkerTargetVM"
description: "MissionPassageUsePointNameMarkerTargetVM: a public class in SandBox.ViewModelCollection, inheriting MissionNameMarkerTargetVM<PassageUsePoint>; 3 exposed members (2 methods, 0 properties, 0 fields). Source: SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionPassageUsePointNameMarkerTargetVM.cs."
---
# MissionPassageUsePointNameMarkerTargetVM

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker.Targets`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionPassageUsePointNameMarkerTargetVM : MissionNameMarkerTargetVM<PassageUsePoint>`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionPassageUsePointNameMarkerTargetVM.cs`

## Overview

MissionPassageUsePointNameMarkerTargetVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionPassageUsePointNameMarkerTargetVM.cs. It is a public class, implementing/inheriting MissionNameMarkerTargetVM<PassageUsePoint>; the inheritance chain is MissionPassageUsePointNameMarkerTargetVM → MissionNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionPassageUsePointNameMarkerTargetVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Missions.NameMarker.Targets) the module directory; inheritance chain MissionPassageUsePointNameMarkerTargetVM → MissionNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionPassageUsePointNameMarkerTargetVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionPassageUsePointNameMarkerTargetVM` | `public MissionPassageUsePointNameMarkerTargetVM(PassageUsePoint target) : base(target)` | constructor |
| `UpdatePosition` | `public override void UpdatePosition(Camera missionCamera)` | method |
| `GetName` | `protected override TextObject GetName()` | method |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionNameMarkerTargetVM](../MissionNameMarkerTargetVM__1)
- [same namespace MissionAgentMarkerTargetVM](../MissionAgentMarkerTargetVM)
- [same namespace MissionAnimatedBasicAreaIndicatorMarkerTargetVM](../MissionAnimatedBasicAreaIndicatorMarkerTargetVM)
- [same namespace MissionBasicAreaIndicatorMarkerTargetVM](../MissionBasicAreaIndicatorMarkerTargetVM)
- [same namespace MissionCommonAreaMarkerTargetVM](../MissionCommonAreaMarkerTargetVM)
