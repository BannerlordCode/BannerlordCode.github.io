---
title: "CustomBattleTroopSupplier"
description: "CustomBattleTroopSupplier: a public class in TaleWorlds.MountAndBlade, inheriting IMissionTroopSupplier; 12 exposed members (8 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/CustomBattleTroopSupplier.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleTroopSupplier

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CustomBattleTroopSupplier : IMissionTroopSupplier`
**File:** `TaleWorlds.MountAndBlade/CustomBattleTroopSupplier.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CustomBattleTroopSupplier lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CustomBattleTroopSupplier.cs. It is a public class, implementing/inheriting IMissionTroopSupplier; the inheritance chain is CustomBattleTroopSupplier → IMissionTroopSupplier. It exposes 12 public/protected members: 8 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleTroopSupplier lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain CustomBattleTroopSupplier → IMissionTroopSupplier. The surface is method-led (methods 8/12, properties 3/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CustomBattleTroopSupplier.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CustomBattleTroopSupplier` | `public CustomBattleTroopSupplier(CustomBattleCombatant customBattleCombatant, bool isPlayerSide, bool isPlayerGeneral, bool isSallyOut, Func<BasicCharacterObject, bool>customAllocationConditions = null)` | constructor |
| `IEnumerable` | `public IEnumerable<IAgentOriginBase>SupplyTroops(int numberToAllocate)` | method |
| `SupplyOneTroop` | `public IAgentOriginBase SupplyOneTroop()` | method |
| `IEnumerable` | `public IEnumerable<IAgentOriginBase>GetAllTroops()` | method |
| `GetGeneralCharacter` | `public BasicCharacterObject GetGeneralCharacter()` | method |
| `OnTroopWounded` | `public void OnTroopWounded()` | method |
| `OnTroopKilled` | `public void OnTroopKilled()` | method |
| `OnTroopRouted` | `public void OnTroopRouted()` | method |
| `NumRemovedTroops` | `public int NumRemovedTroops` | property |
| `NumTroopsNotSupplied` | `public int NumTroopsNotSupplied` | property |
| `GetNumberOfPlayerControllableTroops` | `public int GetNumberOfPlayerControllableTroops()` | method |
| `AnyTroopRemainsToBeSupplied` | `public bool AnyTroopRemainsToBeSupplied` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMissionTroopSupplier](../../core-extra/IMissionTroopSupplier/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
