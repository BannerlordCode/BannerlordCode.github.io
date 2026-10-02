---
title: "MissionLosingTargetVM"
description: "MissionLosingTargetVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 6 exposed members (2 methods, 3 properties, 0 fields). Source: SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionLosingTargetVM.cs."
---
# MissionLosingTargetVM

**Namespace:** `SandBox.ViewModelCollection.Missions.MainAgentDetection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionLosingTargetVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionLosingTargetVM.cs`

## Overview

MissionLosingTargetVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionLosingTargetVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionLosingTargetVM → ViewModel. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionLosingTargetVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Missions.MainAgentDetection) the module directory; inheritance chain MissionLosingTargetVM → ViewModel. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionLosingTargetVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionLosingTargetVM` | `public MissionLosingTargetVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdateLosingTargetValues` | `public void UpdateLosingTargetValues(bool isLosingTarget, float losingTargetTimer, float losingTargetTreshold)` | method |
| `IsLosingTarget` | `public bool IsLosingTarget` | property |
| `LosingTargetRatio` | `public float LosingTargetRatio` | property |
| `LosingTargetWarningText` | `public string LosingTargetWarningText` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MainAgentDetectionVM](../MainAgentDetectionVM)
- [same namespace MissionDisguiseMarkerItemVM](../MissionDisguiseMarkerItemVM)
- [same namespace MissionDisguiseMarkersVM](../MissionDisguiseMarkersVM)
