---
title: "PartyGroupTroopSupplier"
description: "PartyGroupTroopSupplier: a public class in TaleWorlds.CampaignSystem.TroopSuppliers, inheriting IMissionTroopSupplier; 14 exposed members (10 methods, 3 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/TroopSuppliers/PartyGroupTroopSupplier.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyGroupTroopSupplier

**Namespace:** `TaleWorlds.CampaignSystem.TroopSuppliers`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PartyGroupTroopSupplier : IMissionTroopSupplier`
**File:** `TaleWorlds.CampaignSystem/TroopSuppliers/PartyGroupTroopSupplier.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

PartyGroupTroopSupplier lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/TroopSuppliers/PartyGroupTroopSupplier.cs. It is a public class, implementing/inheriting IMissionTroopSupplier; the inheritance chain is PartyGroupTroopSupplier → IMissionTroopSupplier. It exposes 14 public/protected members: 10 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyGroupTroopSupplier lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.TroopSuppliers`, inheritance chain PartyGroupTroopSupplier → IMissionTroopSupplier. The surface is method-led (methods 10/14, properties 3/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/TroopSuppliers/PartyGroupTroopSupplier.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMissionTroopSupplier](../../core-extra/IMissionTroopSupplier/)
