---
title: "MissionQuestBarVM"
description: "MissionQuestBarVM: a public class in SandBox.ViewModelCollection.Missions, inheriting ViewModel; 6 exposed members (1 methods, 5 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Missions/MissionQuestBarVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionQuestBarVM

**Namespace:** `SandBox.ViewModelCollection.Missions`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionQuestBarVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MissionQuestBarVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionQuestBarVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/MissionQuestBarVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionQuestBarVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 1 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionQuestBarVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Missions`, inheritance chain MissionQuestBarVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 5/6, methods 1/6), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/MissionQuestBarVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `UpdateQuestValues` | `public void UpdateQuestValues(float minDetectionLevel, float maxDetectionLevel, float currentDetectionLevel)` | method |
| `HasQuestLevel` | `public bool HasQuestLevel` | property |
| `MinimumQuestLevel` | `public float MinimumQuestLevel` | property |
| `MaximumQuestLevel` | `public float MaximumQuestLevel` | property |
| `CurrentQuestLevel` | `public float CurrentQuestLevel` | property |
| `CurrentQuestLevelRatio` | `public float CurrentQuestLevelRatio` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MissionAgentAlarmStateVM](../MissionAgentAlarmStateVM/)
- [same namespace MissionAgentAlarmTargetVM](../MissionAgentAlarmTargetVM/)
- [same namespace MissionArenaPracticeFightVM](../MissionArenaPracticeFightVM/)
