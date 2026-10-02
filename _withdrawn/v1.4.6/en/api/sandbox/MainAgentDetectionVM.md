---
title: "MainAgentDetectionVM"
description: "MainAgentDetectionVM: a public class in SandBox.ViewModelCollection.Missions.MainAgentDetection, inheriting ViewModel; 9 exposed members (2 methods, 7 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Missions/MainAgentDetection/MainAgentDetectionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MainAgentDetectionVM

**Namespace:** `SandBox.ViewModelCollection.Missions.MainAgentDetection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MainAgentDetectionVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MainAgentDetection/MainAgentDetectionVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MainAgentDetectionVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/MainAgentDetection/MainAgentDetectionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MainAgentDetectionVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 9 public/protected members: 2 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MainAgentDetectionVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Missions.MainAgentDetection`, inheritance chain MainAgentDetectionVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 7/9, methods 2/9), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/MainAgentDetection/MainAgentDetectionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdateDetectionValues` | `public void UpdateDetectionValues(float minDetectionLevel, float maxDetectionLevel, float currentDetectionLevel)` | method |
| `HasDetection` | `public bool HasDetection` | property |
| `HasReachedSuspicionTreshold` | `public bool HasReachedSuspicionTreshold` | property |
| `MinimumDetectionLevel` | `public float MinimumDetectionLevel` | property |
| `MaximumDetectionLevel` | `public float MaximumDetectionLevel` | property |
| `CurrentDetectionLevel` | `public float CurrentDetectionLevel` | property |
| `CurrentDetectionLevelRatio` | `public float CurrentDetectionLevelRatio` | property |
| `SuspicionFullText` | `public string SuspicionFullText` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MissionDisguiseMarkerItemVM](../MissionDisguiseMarkerItemVM/)
- [same namespace MissionDisguiseMarkersVM](../MissionDisguiseMarkersVM/)
- [same namespace MissionLosingTargetVM](../MissionLosingTargetVM/)
