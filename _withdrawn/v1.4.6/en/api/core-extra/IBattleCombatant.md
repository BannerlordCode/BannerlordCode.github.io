---
title: "IBattleCombatant"
description: "IBattleCombatant: a public interface in TaleWorlds.Core; 8 exposed members (2 methods, 6 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/IBattleCombatant.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IBattleCombatant

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IBattleCombatant`
**File:** `TaleWorlds.Core/IBattleCombatant.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

IBattleCombatant lives in the TaleWorlds.Core module, source file TaleWorlds.Core/IBattleCombatant.cs. It is a public interface; the inheritance chain is IBattleCombatant. It exposes 8 public/protected members: 2 methods, 6 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IBattleCombatant lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain IBattleCombatant. The surface is property-led (properties 6/8, methods 2/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/IBattleCombatant.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Name` | `TextObject Name` | property |
| `Side` | `BattleSideEnum Side` | property |
| `BasicCulture` | `BasicCultureObject BasicCulture` | property |
| `General` | `BasicCharacterObject General` | property |
| `uint>PrimaryColorPair` | `Tuple<uint, uint>PrimaryColorPair` | property |
| `Banner` | `Banner Banner` | property |
| `GetTacticsSkillAmount` | `int GetTacticsSkillAmount();` | method |
| `IsUnderPlayersCommand` | `bool IsUnderPlayersCommand(BattleSideEnum playerSide);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
