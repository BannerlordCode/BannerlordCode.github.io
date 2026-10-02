---
title: "BattleInitializationModel"
description: "BattleInitializationModel: a public class in TaleWorlds.MountAndBlade.ComponentInterfaces, inheriting MBGameModel<BattleInitializationModel>; 8 exposed members (6 methods, 1 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ComponentInterfaces/BattleInitializationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleInitializationModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class BattleInitializationModel : MBGameModel<BattleInitializationModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleInitializationModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BattleInitializationModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/BattleInitializationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<BattleInitializationModel>; the inheritance chain is BattleInitializationModel → MBGameModel → GameModel. It exposes 8 public/protected members: 6 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleInitializationModel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.ComponentInterfaces`, inheritance chain BattleInitializationModel → MBGameModel → GameModel. The surface is method-led (methods 6/8, properties 1/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/BattleInitializationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BypassPlayerDeployment` | `public static bool BypassPlayerDeployment` | property |
| `List` | `public abstract List<FormationClass>GetAllAvailableTroopTypes();` | method |
| `CanPlayerSideDeployWithOrderOfBattleAux` | `protected abstract bool CanPlayerSideDeployWithOrderOfBattleAux();` | method |
| `CanPlayerSideDeployWithOrderOfBattle` | `public bool CanPlayerSideDeployWithOrderOfBattle()` | method |
| `InitializeModel` | `public void InitializeModel()` | method |
| `FinalizeModel` | `public void FinalizeModel()` | method |
| `SetBypassPlayerDeployment` | `public static void SetBypassPlayerDeployment(bool value)` | method |
| `MinimumTroopCountForPlayerDeployment` | `public const int MinimumTroopCountForPlayerDeployment` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgentApplyDamageModel](../AgentApplyDamageModel/)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel/)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel/)
- [same namespace AutoBlockModel](../AutoBlockModel/)
