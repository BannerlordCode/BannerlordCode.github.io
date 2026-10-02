---
title: "PartyGroupTroopSupplier"
description: "PartyGroupTroopSupplier: a public class in TaleWorlds.CampaignSystem, inheriting IMissionTroopSupplier; 14 exposed members (10 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem/TroopSuppliers/PartyGroupTroopSupplier.cs."
---
# PartyGroupTroopSupplier

**Namespace:** `TaleWorlds.CampaignSystem.TroopSuppliers`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PartyGroupTroopSupplier : IMissionTroopSupplier`
**File:** `TaleWorlds.CampaignSystem/TroopSuppliers/PartyGroupTroopSupplier.cs`

## Overview

PartyGroupTroopSupplier lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/TroopSuppliers/PartyGroupTroopSupplier.cs. It is a public class, implementing/inheriting IMissionTroopSupplier; the inheritance chain is PartyGroupTroopSupplier → IMissionTroopSupplier. It exposes 14 public/protected members: 10 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyGroupTroopSupplier is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.TroopSuppliers) the module directory; inheritance chain PartyGroupTroopSupplier → IMissionTroopSupplier. The surface is method-led (methods 10/14, properties 3/14), so it mostly exposes operations. IMissionTroopSupplier on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/TroopSuppliers/PartyGroupTroopSupplier.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyGroupTroopSupplier` | `public PartyGroupTroopSupplier(MapEvent mapEvent, BattleSideEnum side, FlattenedTroopRoster priorTroops = null, Func<UniqueTroopDescriptor, MapEventParty, bool>customAllocationConditions = null)` | constructor |
| `IEnumerable` | `public IEnumerable<IAgentOriginBase>SupplyTroops(int numberToAllocate)` | method |
| `SupplyOneTroop` | `public IAgentOriginBase SupplyOneTroop()` | method |
| `IEnumerable` | `public IEnumerable<IAgentOriginBase>GetAllTroops()` | method |
| `GetGeneralCharacter` | `public BasicCharacterObject GetGeneralCharacter()` | method |
| `NumRemovedTroops` | `public int NumRemovedTroops` | property |
| `NumTroopsNotSupplied` | `public int NumTroopsNotSupplied` | property |
| `AnyTroopRemainsToBeSupplied` | `public bool AnyTroopRemainsToBeSupplied` | property |
| `GetNumberOfPlayerControllableTroops` | `public int GetNumberOfPlayerControllableTroops()` | method |
| `OnTroopWounded` | `public void OnTroopWounded(UniqueTroopDescriptor troopDescriptor)` | method |
| `OnTroopKilled` | `public void OnTroopKilled(UniqueTroopDescriptor troopDescriptor)` | method |
| `OnTroopRouted` | `public void OnTroopRouted(UniqueTroopDescriptor troopDescriptor, bool isOrderRetreat)` | method |
| `GetParty` | `public PartyBase GetParty(UniqueTroopDescriptor troopDescriptor)` | method |
| `OnTroopScoreHit` | `public void OnTroopScoreHit(UniqueTroopDescriptor descriptor, BasicCharacterObject attackedCharacter, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
