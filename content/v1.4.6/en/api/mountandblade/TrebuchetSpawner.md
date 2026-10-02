---
title: "TrebuchetSpawner"
description: "TrebuchetSpawner: a public class in TaleWorlds.MountAndBlade, inheriting SpawnerBase; 13 exposed members (2 methods, 0 properties, 11 fields). Source: TaleWorlds.MountAndBlade/TrebuchetSpawner.cs."
---
# TrebuchetSpawner

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TrebuchetSpawner : SpawnerBase`
**File:** `TaleWorlds.MountAndBlade/TrebuchetSpawner.cs`

## Overview

TrebuchetSpawner lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TrebuchetSpawner.cs. It is a public class, implementing/inheriting SpawnerBase; the inheritance chain is TrebuchetSpawner → SpawnerBase → ScriptComponentBehavior. It exposes 13 public/protected members: 2 methods, 11 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TrebuchetSpawner is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TrebuchetSpawner → SpawnerBase → ScriptComponentBehavior. The surface is method-led (methods 2/13, properties 0/13), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TrebuchetSpawner.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnPreInit` | `protected internal override void OnPreInit()` | method |
| `AssignParameters` | `public override void AssignParameters(SpawnerEntityMissionHelper _spawnerMissionHelper)` | method |
| `projectile_pile` | `public MatrixFrame projectile_pile` | field |
| `AddOnDeployTag` | `public string AddOnDeployTag` | field |
| `RemoveOnDeployTag` | `public string RemoveOnDeployTag` | field |
| `ammo_pos_a_enabled` | `public bool ammo_pos_a_enabled` | field |
| `ammo_pos_b_enabled` | `public bool ammo_pos_b_enabled` | field |
| `ammo_pos_c_enabled` | `public bool ammo_pos_c_enabled` | field |
| `ammo_pos_d_enabled` | `public bool ammo_pos_d_enabled` | field |
| `ammo_pos_e_enabled` | `public bool ammo_pos_e_enabled` | field |
| `ammo_pos_f_enabled` | `public bool ammo_pos_f_enabled` | field |
| `ammo_pos_g_enabled` | `public bool ammo_pos_g_enabled` | field |
| `ammo_pos_h_enabled` | `public bool ammo_pos_h_enabled` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SpawnerBase](../SpawnerBase)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
