---
title: "MissionDifficultyModel"
description: "MissionDifficultyModel: a public class in TaleWorlds.MountAndBlade.ComponentInterfaces, inheriting MBGameModel<MissionDifficultyModel>; 1 exposed members (1 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ComponentInterfaces/MissionDifficultyModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionDifficultyModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionDifficultyModel : MBGameModel<MissionDifficultyModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/MissionDifficultyModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionDifficultyModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/MissionDifficultyModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<MissionDifficultyModel>; the inheritance chain is MissionDifficultyModel → MBGameModel → GameModel. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionDifficultyModel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.ComponentInterfaces`, inheritance chain MissionDifficultyModel → MBGameModel → GameModel. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/MissionDifficultyModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetDamageMultiplierOfCombatDifficulty` | `public abstract float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgentApplyDamageModel](../AgentApplyDamageModel/)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel/)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel/)
- [same namespace AutoBlockModel](../AutoBlockModel/)
