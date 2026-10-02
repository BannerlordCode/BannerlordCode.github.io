---
title: "BallistaSpawner"
description: "BallistaSpawner: a public class in TaleWorlds.MountAndBlade, inheriting SpawnerBase; 5 exposed members (2 methods, 0 properties, 3 fields). Source: TaleWorlds.MountAndBlade/Objects/Siege/BallistaSpawner.cs."
---
# BallistaSpawner

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Siege`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BallistaSpawner : SpawnerBase`
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/BallistaSpawner.cs`

## Overview

BallistaSpawner lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/Siege/BallistaSpawner.cs. It is a public class, implementing/inheriting SpawnerBase; the inheritance chain is BallistaSpawner → SpawnerBase → ScriptComponentBehavior. It exposes 5 public/protected members: 2 methods, 3 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BallistaSpawner is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Objects.Siege) the module directory; inheritance chain BallistaSpawner → SpawnerBase → ScriptComponentBehavior. The surface is method-led (methods 2/5, properties 0/5), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/Siege/BallistaSpawner.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnPreInit` | `protected internal override void OnPreInit()` | method |
| `AssignParameters` | `public override void AssignParameters(SpawnerEntityMissionHelper _spawnerMissionHelper)` | method |
| `AddOnDeployTag` | `public string AddOnDeployTag` | field |
| `RemoveOnDeployTag` | `public string RemoveOnDeployTag` | field |
| `DirectionRestrictionDegree` | `public float DirectionRestrictionDegree` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SpawnerBase](../SpawnerBase)
- [same namespace BatteringRamSpawner](../BatteringRamSpawner)
- [same namespace FireTrebuchet](../FireTrebuchet)
- [same namespace ISpawnable](../ISpawnable)
- [same namespace MangonelSpawner](../MangonelSpawner)
