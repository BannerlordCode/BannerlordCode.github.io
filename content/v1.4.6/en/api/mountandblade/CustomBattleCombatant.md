---
title: "CustomBattleCombatant"
description: "CustomBattleCombatant: a public class in TaleWorlds.MountAndBlade, inheriting IBattleCombatant; 16 exposed members (4 methods, 11 properties, 0 fields). Source: TaleWorlds.MountAndBlade/CustomBattleCombatant.cs."
---
# CustomBattleCombatant

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CustomBattleCombatant : IBattleCombatant`
**File:** `TaleWorlds.MountAndBlade/CustomBattleCombatant.cs`

## Overview

CustomBattleCombatant lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CustomBattleCombatant.cs. It is a public class, implementing/inheriting IBattleCombatant; the inheritance chain is CustomBattleCombatant → IBattleCombatant. It exposes 16 public/protected members: 4 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleCombatant is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain CustomBattleCombatant → IBattleCombatant. The surface is property-led (properties 11/16, methods 4/16), so it mostly exposes state for reading. IBattleCombatant on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CustomBattleCombatant.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public TextObject Name` | property |
| `Side` | `public BattleSideEnum Side` | property |
| `General` | `public BasicCharacterObject General` | property |
| `BasicCulture` | `public BasicCultureObject BasicCulture` | property |
| `uint>PrimaryColorPair` | `public Tuple<uint, uint>PrimaryColorPair` | property |
| `uint>AlternativeColorPair` | `public Tuple<uint, uint>AlternativeColorPair` | property |
| `Banner` | `public Banner Banner` | property |
| `GetTacticsSkillAmount` | `public int GetTacticsSkillAmount()` | method |
| `IEnumerable` | `public IEnumerable<BasicCharacterObject>Characters` | property |
| `CountOfCharacters` | `public int CountOfCharacters` | property |
| `NumberOfAllMembers` | `public int NumberOfAllMembers` | property |
| `NumberOfHealthyMembers` | `public int NumberOfHealthyMembers` | property |
| `CustomBattleCombatant` | `public CustomBattleCombatant(TextObject name, BasicCultureObject culture, Banner banner)` | constructor |
| `AddCharacter` | `public void AddCharacter(BasicCharacterObject characterObject, int number)` | method |
| `SetGeneral` | `public void SetGeneral(BasicCharacterObject generalCharacter)` | method |
| `IsUnderPlayersCommand` | `public bool IsUnderPlayersCommand(BattleSideEnum playerSide)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
