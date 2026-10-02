---
title: "AnimalSpawnSettings"
description: "AnimalSpawnSettings: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 2 exposed members (1 methods, 0 properties, 1 fields). Source: TaleWorlds.MountAndBlade/Objects/AnimalSpawnSettings.cs."
---
# AnimalSpawnSettings

**Namespace:** `TaleWorlds.MountAndBlade.Objects`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AnimalSpawnSettings : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/Objects/AnimalSpawnSettings.cs`

## Overview

AnimalSpawnSettings lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/AnimalSpawnSettings.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is AnimalSpawnSettings → ScriptComponentBehavior. It exposes 2 public/protected members: 1 methods, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AnimalSpawnSettings is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Objects) the module directory; inheritance chain AnimalSpawnSettings → ScriptComponentBehavior. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/AnimalSpawnSettings.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CheckAndSetAnimalAgentFlags` | `public static void CheckAndSetAnimalAgentFlags(GameEntity spawnEntity, Agent animalAgent)` | method |
| `DisableWandering` | `public bool DisableWandering` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AreaMarker](../AreaMarker)
- [same namespace FightAreaMarker](../FightAreaMarker)
- [same namespace FlagCapturePoint](../FlagCapturePoint)
- [same namespace GenericMissionEvent](../GenericMissionEvent)
