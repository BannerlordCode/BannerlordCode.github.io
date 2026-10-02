---
title: "SiegeWeaponAutoDeployer"
description: "SiegeWeaponAutoDeployer: a public class in TaleWorlds.MountAndBlade; 3 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/AI/SiegeWeaponAutoDeployer.cs."
---
# SiegeWeaponAutoDeployer

**Namespace:** `TaleWorlds.MountAndBlade.AI`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeWeaponAutoDeployer`
**File:** `TaleWorlds.MountAndBlade/AI/SiegeWeaponAutoDeployer.cs`

## Overview

SiegeWeaponAutoDeployer lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/AI/SiegeWeaponAutoDeployer.cs. It is a public class; the inheritance chain is SiegeWeaponAutoDeployer. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeWeaponAutoDeployer is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.AI) the module directory; inheritance chain SiegeWeaponAutoDeployer. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/AI/SiegeWeaponAutoDeployer.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SiegeWeaponAutoDeployer` | `public SiegeWeaponAutoDeployer(List<DeploymentPoint>deploymentPoints, IMissionSiegeWeaponsController weaponsController)` | constructor |
| `DeployAll` | `public void DeployAll(BattleSideEnum side)` | method |
| `GetWeaponValue` | `protected virtual float GetWeaponValue(Type weaponType)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
