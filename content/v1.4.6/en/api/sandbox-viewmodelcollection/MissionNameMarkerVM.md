---
title: "MissionNameMarkerVM"
description: "MissionNameMarkerVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 8 exposed members (4 methods, 3 properties, 0 fields). Source: SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerVM.cs."
---
# MissionNameMarkerVM

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionNameMarkerVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerVM.cs`

## Overview

MissionNameMarkerVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionNameMarkerVM → ViewModel. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionNameMarkerVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Missions.NameMarker) the module directory; inheritance chain MissionNameMarkerVM → ViewModel. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsTargetsAdded` | `public bool IsTargetsAdded` | property |
| `MissionNameMarkerVM` | `public MissionNameMarkerVM(List<MissionNameMarkerProvider>providers, Camera missionCamera)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `SetTargetsDirty` | `public void SetTargetsDirty()` | method |
| `MBBindingList` | `public MBBindingList<MissionNameMarkerTargetBaseVM>Targets` | property |
| `IsEnabled` | `public bool IsEnabled` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionNameMarkerFactory](../MissionNameMarkerFactory)
- [same namespace MissionNameMarkerHelper](../MissionNameMarkerHelper)
- [same namespace MissionNameMarkerProvider](../MissionNameMarkerProvider)
- [same namespace MissionNameMarkerTargetBaseVM](../MissionNameMarkerTargetBaseVM)
