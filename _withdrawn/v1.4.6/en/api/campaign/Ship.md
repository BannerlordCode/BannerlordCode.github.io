---
title: "Ship"
description: "Ship: a public class in TaleWorlds.CampaignSystem.Naval, inheriting IShipOrigin, IRandomOwner; 52 exposed members (13 methods, 38 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Naval/Ship.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Ship

**Namespace:** `TaleWorlds.CampaignSystem.Naval`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class Ship : IShipOrigin, IRandomOwner`
**File:** `TaleWorlds.CampaignSystem/Naval/Ship.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

Ship lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Naval/Ship.cs. It is a public class (sealed), implementing/inheriting IShipOrigin, IRandomOwner; the inheritance chain is Ship → IShipOrigin. It exposes 52 public/protected members: 13 methods, 38 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Ship lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Naval`, inheritance chain Ship → IShipOrigin. The surface is property-led (properties 38/52, methods 13/52), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Naval/Ship.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Figurehead` | `public Figurehead Figurehead` | property |
| `IsInvulnerable` | `public bool IsInvulnerable` | property |
| `IsTradeable` | `public bool IsTradeable` | property |
| `IsUsedByQuest` | `public bool IsUsedByQuest` | property |
| `RandomValue` | `public int RandomValue` | property |
| `CustomSailPatternId` | `public string CustomSailPatternId` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<ShipUpgradePiece>UnlockedUpgradePieces` | property |
| `Name` | `public TextObject Name` | property |
| `VersionNo` | `public uint VersionNo` | property |
| `Owner` | `public PartyBase Owner` | property |
| `HitPoints` | `public float HitPoints` | property |
| `MaxHitPoints` | `public float MaxHitPoints` | property |
| `MaxFireHitPoints` | `public float MaxFireHitPoints` | property |
| `SailHitPoints` | `public float SailHitPoints` | property |
| `TotalCrewCapacity` | `public int TotalCrewCapacity` | property |
| `MaxSailHitPoints` | `public float MaxSailHitPoints` | property |
| `SeaWorthiness` | `public int SeaWorthiness` | property |
| `FlagshipScore` | `public float FlagshipScore` | property |
| `MainDeckCrewCapacity` | `public int MainDeckCrewCapacity` | property |
| `InventoryCapacity` | `public float InventoryCapacity` | property |
| `SkeletalCrewCapacity` | `public int SkeletalCrewCapacity` | property |
| `CrewCapacityBonusFactor` | `public float CrewCapacityBonusFactor` | property |
| `ShipWeightFactor` | `public float ShipWeightFactor` | property |
| `ForwardDragFactor` | `public float ForwardDragFactor` | property |
| `CrewShieldHitPointsFactor` | `public float CrewShieldHitPointsFactor` | property |
| `AdditionalAmmo` | `public int AdditionalAmmo` | property |
| `MaxOarPowerFactor` | `public float MaxOarPowerFactor` | property |
| `MaxOarForceFactor` | `public float MaxOarForceFactor` | property |
| `SailForceFactor` | `public float SailForceFactor` | property |
| `CrewMeleeDamageFactor` | `public float CrewMeleeDamageFactor` | property |
| `AdditionalArcherQuivers` | `public int AdditionalArcherQuivers` | property |
| `AdditionalThrowingWeaponStack` | `public int AdditionalThrowingWeaponStack` | property |
| `SailRotationSpeedFactor` | `public float SailRotationSpeedFactor` | property |
| `FurlUnfurlSpeedFactor` | `public float FurlUnfurlSpeedFactor` | property |
| `RudderSurfaceAreaFactor` | `public float RudderSurfaceAreaFactor` | property |
| `MaxRudderForceFactor` | `public float MaxRudderForceFactor` | property |
| `CanEquipFigurehead` | `public bool CanEquipFigurehead` | property |
| `ChangeFigurehead` | `public void ChangeFigurehead(Figurehead figurehead)` | method |
| `GetPieceAtSlot` | `public ShipUpgradePiece GetPieceAtSlot(string slotTag)` | method |
| `EquipUpgradePiece` | `public void EquipUpgradePiece(string slotTag, ShipUpgradePiece newUpgradePiece)` | method |
| `HasSlot` | `public bool HasSlot(string slotTag)` | method |
| `CampaignSpeedBonusFactor` | `public float CampaignSpeedBonusFactor` | property |
| `SetName` | `public void SetName(TextObject name)` | method |
| `Ship` | `public Ship(ShipHull shipHull)` | constructor |
| `GetCampaignSpeed` | `public float GetCampaignSpeed()` | method |
| `MBList` | `public MBList<SiegeEngineType>GetSiegeEngines()` | method |
| `UpdateVersionNo` | `public void UpdateVersionNo()` | method |
| `GetCombatFactor` | `public float GetCombatFactor()` | method |
| `OnShipDamaged` | `public void OnShipDamaged(float rawDamage, IShipOrigin rammingShip, out float modifiedDamage)` | method |
| `List` | `public List<ShipVisualSlotInfo>GetShipVisualSlotInfos()` | method |
| `List` | `public List<ShipSlotAndPieceName>GetShipSlotAndPieceNames()` | method |
| `OnPlayerCharacterChanged` | `public void OnPlayerCharacterChanged()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IShipOrigin](../../core-extra/IShipOrigin/)
- [base / interface IRandomOwner](../IRandomOwner/)
- [same namespace AnchorPoint](../AnchorPoint/)
- [same namespace DefaultFigureheads](../DefaultFigureheads/)
- [same namespace Figurehead](../Figurehead/)
