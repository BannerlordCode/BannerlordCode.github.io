---
title: "IBattleObserver"
description: "IBattleObserver: a public interface in TaleWorlds.Core; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/IBattleObserver.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IBattleObserver

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IBattleObserver`
**File:** `TaleWorlds.Core/IBattleObserver.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

IBattleObserver lives in the TaleWorlds.Core module, source file TaleWorlds.Core/IBattleObserver.cs. It is a public interface; the inheritance chain is IBattleObserver. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IBattleObserver lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain IBattleObserver. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/IBattleObserver.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TroopNumberChanged` | `void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberKilled = 0, int numberWounded = 0, int numberRouted = 0, int killCount = 0, int numberReadyToUpgrade = 0);` | method |
| `TroopSideChanged` | `void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character);` | method |
| `HeroSkillIncreased` | `void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject skill);` | method |
| `BattleResultsReady` | `void BattleResultsReady();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
