---
title: "MissionLosingTargetVM"
description: "MissionLosingTargetVM: a public class in SandBox.ViewModelCollection.Missions.MainAgentDetection, inheriting ViewModel; 6 exposed members (2 methods, 3 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionLosingTargetVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionLosingTargetVM

**Namespace:** `SandBox.ViewModelCollection.Missions.MainAgentDetection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionLosingTargetVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionLosingTargetVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionLosingTargetVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionLosingTargetVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionLosingTargetVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionLosingTargetVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Missions.MainAgentDetection`, inheritance chain MissionLosingTargetVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionLosingTargetVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionLosingTargetVM` | `public MissionLosingTargetVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdateLosingTargetValues` | `public void UpdateLosingTargetValues(bool isLosingTarget, float losingTargetTimer, float losingTargetTreshold)` | method |
| `IsLosingTarget` | `public bool IsLosingTarget` | property |
| `LosingTargetRatio` | `public float LosingTargetRatio` | property |
| `LosingTargetWarningText` | `public string LosingTargetWarningText` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MainAgentDetectionVM](../MainAgentDetectionVM/)
- [same namespace MissionDisguiseMarkerItemVM](../MissionDisguiseMarkerItemVM/)
- [same namespace MissionDisguiseMarkersVM](../MissionDisguiseMarkersVM/)
