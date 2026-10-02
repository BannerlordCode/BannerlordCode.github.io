---
title: "MissionStealthFailCounterVM"
description: "MissionStealthFailCounterVM: a public class in SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout, inheriting ViewModel; 6 exposed members (1 methods, 4 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthFailCounterVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionStealthFailCounterVM

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionStealthFailCounterVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthFailCounterVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionStealthFailCounterVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthFailCounterVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionStealthFailCounterVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionStealthFailCounterVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout`, inheritance chain MissionStealthFailCounterVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthFailCounterVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionStealthFailCounterVM` | `public MissionStealthFailCounterVM()` | constructor |
| `UpdateFailCounter` | `public void UpdateFailCounter(float failCounterElapsedTime, float failCounterMaxTime, bool isStealthFailCounterMissionLogicActive)` | method |
| `CountDownText` | `public string CountDownText` | property |
| `FailCounterElapsedTime` | `public float FailCounterElapsedTime` | property |
| `FailCounterMaxTime` | `public float FailCounterMaxTime` | property |
| `IsCounterActive` | `public bool IsCounterActive` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MissionStealthAreaNameMarkerTargetVM](../MissionStealthAreaNameMarkerTargetVM/)
- [same namespace MissionStealthAreaUsePointNameMarkerTargetVM](../MissionStealthAreaUsePointNameMarkerTargetVM/)
- [same namespace MissionStealthSentryNameMarkerTargetVM](../MissionStealthSentryNameMarkerTargetVM/)
