---
title: "MissionAgentMarkerTargetVM"
description: "MissionAgentMarkerTargetVM: a public class in SandBox.ViewModelCollection, inheriting MissionNameMarkerTargetVM<Agent>; 4 exposed members (3 methods, 0 properties, 0 fields). Source: SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionAgentMarkerTargetVM.cs."
---
# MissionAgentMarkerTargetVM

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker.Targets`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionAgentMarkerTargetVM : MissionNameMarkerTargetVM<Agent>`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionAgentMarkerTargetVM.cs`

## Overview

MissionAgentMarkerTargetVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionAgentMarkerTargetVM.cs. It is a public class, implementing/inheriting MissionNameMarkerTargetVM<Agent>; the inheritance chain is MissionAgentMarkerTargetVM → MissionNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAgentMarkerTargetVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Missions.NameMarker.Targets) the module directory; inheritance chain MissionAgentMarkerTargetVM → MissionNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionAgentMarkerTargetVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionAgentMarkerTargetVM` | `public MissionAgentMarkerTargetVM(Agent target) : base(target)` | constructor |
| `UpdatePosition` | `public override void UpdatePosition(Camera missionCamera)` | method |
| `GetName` | `protected override TextObject GetName()` | method |
| `UpdateQuestStatus` | `public void UpdateQuestStatus()` | method |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionNameMarkerTargetVM](../MissionNameMarkerTargetVM__1)
- [same namespace MissionAnimatedBasicAreaIndicatorMarkerTargetVM](../MissionAnimatedBasicAreaIndicatorMarkerTargetVM)
- [same namespace MissionBasicAreaIndicatorMarkerTargetVM](../MissionBasicAreaIndicatorMarkerTargetVM)
- [same namespace MissionCommonAreaMarkerTargetVM](../MissionCommonAreaMarkerTargetVM)
- [same namespace MissionGenericMarkerTargetVM](../MissionGenericMarkerTargetVM)
