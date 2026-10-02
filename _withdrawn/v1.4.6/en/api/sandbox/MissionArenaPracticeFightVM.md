---
title: "MissionArenaPracticeFightVM"
description: "MissionArenaPracticeFightVM: a public class in SandBox.ViewModelCollection.Missions, inheriting ViewModel; 7 exposed members (2 methods, 4 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Missions/MissionArenaPracticeFightVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionArenaPracticeFightVM

**Namespace:** `SandBox.ViewModelCollection.Missions`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionArenaPracticeFightVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MissionArenaPracticeFightVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionArenaPracticeFightVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/MissionArenaPracticeFightVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionArenaPracticeFightVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionArenaPracticeFightVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Missions`, inheritance chain MissionArenaPracticeFightVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/MissionArenaPracticeFightVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionArenaPracticeFightVM` | `public MissionArenaPracticeFightVM(ArenaPracticeFightMissionController practiceMissionController)` | constructor |
| `Tick` | `public void Tick()` | method |
| `UpdatePrizeText` | `public void UpdatePrizeText()` | method |
| `OpponentsBeatenText` | `public string OpponentsBeatenText` | property |
| `PrizeText` | `public string PrizeText` | property |
| `OpponentsRemainingText` | `public string OpponentsRemainingText` | property |
| `IsPlayerPracticing` | `public bool IsPlayerPracticing` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MissionAgentAlarmStateVM](../MissionAgentAlarmStateVM/)
- [same namespace MissionAgentAlarmTargetVM](../MissionAgentAlarmTargetVM/)
- [same namespace MissionQuestBarVM](../MissionQuestBarVM/)
