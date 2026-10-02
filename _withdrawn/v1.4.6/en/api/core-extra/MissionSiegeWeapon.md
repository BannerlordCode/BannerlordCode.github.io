---
title: "MissionSiegeWeapon"
description: "MissionSiegeWeapon: a public class in TaleWorlds.Core, inheriting IMissionSiegeWeapon; 8 exposed members (3 methods, 5 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/MissionSiegeWeapon.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionSiegeWeapon

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MissionSiegeWeapon : IMissionSiegeWeapon`
**File:** `TaleWorlds.Core/MissionSiegeWeapon.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

MissionSiegeWeapon lives in the TaleWorlds.Core module, source file TaleWorlds.Core/MissionSiegeWeapon.cs. It is a public class, implementing/inheriting IMissionSiegeWeapon; the inheritance chain is MissionSiegeWeapon → IMissionSiegeWeapon. It exposes 8 public/protected members: 3 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionSiegeWeapon lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain MissionSiegeWeapon → IMissionSiegeWeapon. The surface is property-led (properties 5/8, methods 3/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/MissionSiegeWeapon.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Index` | `public int Index` | property |
| `Type` | `public SiegeEngineType Type` | property |
| `Health` | `public float Health` | property |
| `InitialHealth` | `public float InitialHealth` | property |
| `MaxHealth` | `public float MaxHealth` | property |
| `CreateDefaultWeapon` | `public static MissionSiegeWeapon CreateDefaultWeapon(SiegeEngineType type)` | method |
| `CreateCampaignWeapon` | `public static MissionSiegeWeapon CreateCampaignWeapon(SiegeEngineType type, int index, float health, float maxHealth)` | method |
| `SetHealth` | `public void SetHealth(float health)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMissionSiegeWeapon](../IMissionSiegeWeapon/)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
