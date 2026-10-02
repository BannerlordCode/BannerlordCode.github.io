---
title: "IMissionSiegeWeaponsController"
description: "IMissionSiegeWeaponsController: a public interface in TaleWorlds.MountAndBlade; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Missions/IMissionSiegeWeaponsController.cs."
---
# IMissionSiegeWeaponsController

**Namespace:** `TaleWorlds.MountAndBlade.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IMissionSiegeWeaponsController`
**File:** `TaleWorlds.MountAndBlade/Missions/IMissionSiegeWeaponsController.cs`

## Overview

IMissionSiegeWeaponsController lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Missions/IMissionSiegeWeaponsController.cs. It is a public interface; the inheritance chain is IMissionSiegeWeaponsController. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMissionSiegeWeaponsController is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Missions) the module directory; inheritance chain IMissionSiegeWeaponsController. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Missions/IMissionSiegeWeaponsController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetMaxDeployableWeaponCount` | `int GetMaxDeployableWeaponCount(Type t);` | method |
| `IEnumerable` | `IEnumerable<IMissionSiegeWeapon>GetSiegeWeapons();` | method |
| `OnWeaponDeployed` | `void OnWeaponDeployed(SiegeWeapon missionWeapon);` | method |
| `OnWeaponUndeployed` | `void OnWeaponUndeployed(SiegeWeapon missionWeapon);` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentList](../AgentList)
- [same namespace AgentReadOnlyList](../AgentReadOnlyList)
- [same namespace MissionSiegeWeaponsController](../MissionSiegeWeaponsController)
