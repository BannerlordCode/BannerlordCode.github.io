---
title: "IBattleObserver"
description: "IBattleObserver: a public interface in TaleWorlds.Core; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/IBattleObserver.cs."
---
# IBattleObserver

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IBattleObserver`
**File:** `TaleWorlds.Core/IBattleObserver.cs`

## Overview

IBattleObserver lives in the TaleWorlds.Core module, source file TaleWorlds.Core/IBattleObserver.cs. It is a public interface; the inheritance chain is IBattleObserver. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IBattleObserver is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain IBattleObserver. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/IBattleObserver.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TroopNumberChanged` | `void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberKilled = 0, int numberWounded = 0, int numberRouted = 0, int killCount = 0, int numberReadyToUpgrade = 0);` | method |
| `TroopSideChanged` | `void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character);` | method |
| `HeroSkillIncreased` | `void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject skill);` | method |
| `BattleResultsReady` | `void BattleResultsReady();` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
