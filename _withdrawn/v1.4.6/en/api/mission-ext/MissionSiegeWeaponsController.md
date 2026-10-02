---
title: "MissionSiegeWeaponsController"
description: "MissionSiegeWeaponsController: a public class in TaleWorlds.MountAndBlade.Missions, inheriting IMissionSiegeWeaponsController; 6 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Missions/MissionSiegeWeaponsController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionSiegeWeaponsController

**Namespace:** `TaleWorlds.MountAndBlade.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionSiegeWeaponsController : IMissionSiegeWeaponsController`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionSiegeWeaponsController.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionSiegeWeaponsController lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Missions/MissionSiegeWeaponsController.cs. It is a public class, implementing/inheriting IMissionSiegeWeaponsController; the inheritance chain is MissionSiegeWeaponsController → IMissionSiegeWeaponsController. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionSiegeWeaponsController lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Missions`, inheritance chain MissionSiegeWeaponsController → IMissionSiegeWeaponsController. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Missions/MissionSiegeWeaponsController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionSiegeWeaponsController` | `public MissionSiegeWeaponsController(BattleSideEnum side, List<MissionSiegeWeapon>weapons)` | constructor |
| `GetMaxDeployableWeaponCount` | `public int GetMaxDeployableWeaponCount(Type t)` | method |
| `IEnumerable` | `public IEnumerable<IMissionSiegeWeapon>GetSiegeWeapons()` | method |
| `OnWeaponDeployed` | `public void OnWeaponDeployed(SiegeWeapon missionWeapon)` | method |
| `OnWeaponUndeployed` | `public void OnWeaponUndeployed(SiegeWeapon missionWeapon)` | method |
| `GetWeaponType` | `public static Type GetWeaponType(ScriptComponentBehavior weapon)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMissionSiegeWeaponsController](../IMissionSiegeWeaponsController/)
- [same namespace AgentList](../AgentList/)
- [same namespace AgentReadOnlyList](../AgentReadOnlyList/)
- [same namespace IMissionSiegeWeaponsController](../IMissionSiegeWeaponsController/)
