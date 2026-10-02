---
title: "MissionQuestBarVM"
description: "MissionQuestBarVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 6 exposed members (1 methods, 5 properties, 0 fields). Source: SandBox.ViewModelCollection/Missions/MissionQuestBarVM.cs."
---
# MissionQuestBarVM

**Namespace:** `SandBox.ViewModelCollection.Missions`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionQuestBarVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MissionQuestBarVM.cs`

## Overview

MissionQuestBarVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Missions/MissionQuestBarVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionQuestBarVM → ViewModel. It exposes 6 public/protected members: 1 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionQuestBarVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Missions) the module directory; inheritance chain MissionQuestBarVM → ViewModel. The surface is property-led (properties 5/6, methods 1/6), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Missions/MissionQuestBarVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UpdateQuestValues` | `public void UpdateQuestValues(float minDetectionLevel, float maxDetectionLevel, float currentDetectionLevel)` | method |
| `HasQuestLevel` | `public bool HasQuestLevel` | property |
| `MinimumQuestLevel` | `public float MinimumQuestLevel` | property |
| `MaximumQuestLevel` | `public float MaximumQuestLevel` | property |
| `CurrentQuestLevel` | `public float CurrentQuestLevel` | property |
| `CurrentQuestLevelRatio` | `public float CurrentQuestLevelRatio` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionAgentAlarmStateVM](../MissionAgentAlarmStateVM)
- [same namespace MissionAgentAlarmTargetVM](../MissionAgentAlarmTargetVM)
- [same namespace MissionArenaPracticeFightVM](../MissionArenaPracticeFightVM)
