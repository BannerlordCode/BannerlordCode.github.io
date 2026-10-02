---
title: "MissionArenaPracticeFightVM"
description: "MissionArenaPracticeFightVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 7 exposed members (2 methods, 4 properties, 0 fields). Source: SandBox.ViewModelCollection/Missions/MissionArenaPracticeFightVM.cs."
---
# MissionArenaPracticeFightVM

**Namespace:** `SandBox.ViewModelCollection.Missions`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionArenaPracticeFightVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MissionArenaPracticeFightVM.cs`

## Overview

MissionArenaPracticeFightVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/MissionArenaPracticeFightVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionArenaPracticeFightVM → ViewModel. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionArenaPracticeFightVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Missions) the module directory; inheritance chain MissionArenaPracticeFightVM → ViewModel. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/MissionArenaPracticeFightVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionArenaPracticeFightVM` | `public MissionArenaPracticeFightVM(ArenaPracticeFightMissionController practiceMissionController)` | constructor |
| `Tick` | `public void Tick()` | method |
| `UpdatePrizeText` | `public void UpdatePrizeText()` | method |
| `OpponentsBeatenText` | `public string OpponentsBeatenText` | property |
| `PrizeText` | `public string PrizeText` | property |
| `OpponentsRemainingText` | `public string OpponentsRemainingText` | property |
| `IsPlayerPracticing` | `public bool IsPlayerPracticing` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionAgentAlarmStateVM](../MissionAgentAlarmStateVM)
- [same namespace MissionAgentAlarmTargetVM](../MissionAgentAlarmTargetVM)
- [same namespace MissionQuestBarVM](../MissionQuestBarVM)
