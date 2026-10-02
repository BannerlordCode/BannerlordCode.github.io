---
title: "MissionStealthFailCounterVM"
description: "MissionStealthFailCounterVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 6 exposed members (1 methods, 4 properties, 0 fields). Source: SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthFailCounterVM.cs."
---
# MissionStealthFailCounterVM

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionStealthFailCounterVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthFailCounterVM.cs`

## Overview

MissionStealthFailCounterVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthFailCounterVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionStealthFailCounterVM → ViewModel. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionStealthFailCounterVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout) the module directory; inheritance chain MissionStealthFailCounterVM → ViewModel. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthFailCounterVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionStealthFailCounterVM` | `public MissionStealthFailCounterVM()` | constructor |
| `UpdateFailCounter` | `public void UpdateFailCounter(float failCounterElapsedTime, float failCounterMaxTime, bool isStealthFailCounterMissionLogicActive)` | method |
| `CountDownText` | `public string CountDownText` | property |
| `FailCounterElapsedTime` | `public float FailCounterElapsedTime` | property |
| `FailCounterMaxTime` | `public float FailCounterMaxTime` | property |
| `IsCounterActive` | `public bool IsCounterActive` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionStealthAreaNameMarkerTargetVM](../MissionStealthAreaNameMarkerTargetVM)
- [same namespace MissionStealthAreaUsePointNameMarkerTargetVM](../MissionStealthAreaUsePointNameMarkerTargetVM)
- [same namespace MissionStealthSentryNameMarkerTargetVM](../MissionStealthSentryNameMarkerTargetVM)
