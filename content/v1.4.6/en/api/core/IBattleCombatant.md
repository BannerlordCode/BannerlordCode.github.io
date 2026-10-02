---
title: "IBattleCombatant"
description: "IBattleCombatant: a public interface in TaleWorlds.Core; 8 exposed members (2 methods, 6 properties, 0 fields). Source: TaleWorlds.Core/IBattleCombatant.cs."
---
# IBattleCombatant

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IBattleCombatant`
**File:** `TaleWorlds.Core/IBattleCombatant.cs`

## Overview

IBattleCombatant lives in the TaleWorlds.Core module, source file TaleWorlds.Core/IBattleCombatant.cs. It is a public interface; the inheritance chain is IBattleCombatant. It exposes 8 public/protected members: 2 methods, 6 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IBattleCombatant is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain IBattleCombatant. The surface is property-led (properties 6/8, methods 2/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/IBattleCombatant.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
