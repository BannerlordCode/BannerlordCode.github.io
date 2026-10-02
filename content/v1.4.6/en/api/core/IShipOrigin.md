---
title: "IShipOrigin"
description: "IShipOrigin: a public interface in TaleWorlds.Core; 32 exposed members (4 methods, 28 properties, 0 fields). Source: TaleWorlds.Core/IShipOrigin.cs."
---
# IShipOrigin

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IShipOrigin`
**File:** `TaleWorlds.Core/IShipOrigin.cs`

## Overview

IShipOrigin lives in the TaleWorlds.Core module, source file TaleWorlds.Core/IShipOrigin.cs. It is a public interface; the inheritance chain is IShipOrigin. It exposes 32 public/protected members: 4 methods, 28 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IShipOrigin is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain IShipOrigin. The surface is property-led (properties 28/32, methods 4/32), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/IShipOrigin.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Hull` | `ShipHull Hull` | property |
| `Name` | `TextObject Name` | property |
| `OriginShipId` | `string OriginShipId` | property |
| `IsPlayerShip` | `bool IsPlayerShip` | property |
| `HitPoints` | `float HitPoints` | property |
| `MaxHitPoints` | `float MaxHitPoints` | property |
| `MaxFireHitPoints` | `float MaxFireHitPoints` | property |
| `SailHitPoints` | `float SailHitPoints` | property |
| `MaxSailHitPoints` | `float MaxSailHitPoints` | property |
| `TotalCrewCapacity` | `int TotalCrewCapacity` | property |
| `MainDeckCrewCapacity` | `int MainDeckCrewCapacity` | property |
| `SkeletalCrewCapacity` | `int SkeletalCrewCapacity` | property |
| `DefaultFormationGroupIndex` | `int DefaultFormationGroupIndex` | property |
| `ForwardDragFactor` | `float ForwardDragFactor` | property |
| `ShipWeightFactor` | `float ShipWeightFactor` | property |
| `RudderSurfaceAreaFactor` | `float RudderSurfaceAreaFactor` | property |
| `RandomValue` | `int RandomValue` | property |
| `CustomSailPatternId` | `string CustomSailPatternId` | property |
| `MaxRudderForceFactor` | `float MaxRudderForceFactor` | property |
| `MaxOarForceFactor` | `float MaxOarForceFactor` | property |
| `SailForceFactor` | `float SailForceFactor` | property |
| `MaxOarPowerFactor` | `float MaxOarPowerFactor` | property |
| `SailRotationSpeedFactor` | `float SailRotationSpeedFactor` | property |
| `FurlUnfurlSpeedFactor` | `float FurlUnfurlSpeedFactor` | property |
| `CrewShieldHitPointsFactor` | `float CrewShieldHitPointsFactor` | property |
| `CrewMeleeDamageFactor` | `float CrewMeleeDamageFactor` | property |
| `AdditionalArcherQuivers` | `int AdditionalArcherQuivers` | property |
| `AdditionalThrowingWeaponStack` | `int AdditionalThrowingWeaponStack` | property |
| `OnShipDamaged` | `void OnShipDamaged(float rawDamage, IShipOrigin rammingShip, out float modifiedDamage);` | method |
| `OnSailDamaged` | `void OnSailDamaged(float rawDamage, float inflictedDamage);` | method |
| `List` | `List<ShipVisualSlotInfo>GetShipVisualSlotInfos();` | method |
| `List` | `List<ShipSlotAndPieceName>GetShipSlotAndPieceNames();` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
