---
title: "CustomBattleCombatant"
description: "CustomBattleCombatant：TaleWorlds.MountAndBlade 的 public 类，继承 IBattleCombatant；公开成员 16 个（方法 4、属性 11、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/CustomBattleCombatant.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleCombatant

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CustomBattleCombatant : IBattleCombatant`
**File:** `TaleWorlds.MountAndBlade/CustomBattleCombatant.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

CustomBattleCombatant 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/CustomBattleCombatant.cs。它是一个 public 类，实现/继承 IBattleCombatant，继承链为 CustomBattleCombatant → IBattleCombatant。public/protected 成员共 16 个：4 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomBattleCombatant 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 CustomBattleCombatant → IBattleCombatant。成员构成以属性为主（属性 11/16，方法 4/16），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/CustomBattleCombatant.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public TextObject Name` | 属性 |
| `Side` | `public BattleSideEnum Side` | 属性 |
| `General` | `public BasicCharacterObject General` | 属性 |
| `BasicCulture` | `public BasicCultureObject BasicCulture` | 属性 |
| `uint>PrimaryColorPair` | `public Tuple<uint, uint>PrimaryColorPair` | 属性 |
| `uint>AlternativeColorPair` | `public Tuple<uint, uint>AlternativeColorPair` | 属性 |
| `Banner` | `public Banner Banner` | 属性 |
| `GetTacticsSkillAmount` | `public int GetTacticsSkillAmount()` | 方法 |
| `IEnumerable` | `public IEnumerable<BasicCharacterObject>Characters` | 属性 |
| `CountOfCharacters` | `public int CountOfCharacters` | 属性 |
| `NumberOfAllMembers` | `public int NumberOfAllMembers` | 属性 |
| `NumberOfHealthyMembers` | `public int NumberOfHealthyMembers` | 属性 |
| `CustomBattleCombatant` | `public CustomBattleCombatant(TextObject name, BasicCultureObject culture, Banner banner)` | 构造函数 |
| `AddCharacter` | `public void AddCharacter(BasicCharacterObject characterObject, int number)` | 方法 |
| `SetGeneral` | `public void SetGeneral(BasicCharacterObject generalCharacter)` | 方法 |
| `IsUnderPlayersCommand` | `public bool IsUnderPlayersCommand(BattleSideEnum playerSide)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IBattleCombatant](../../core-extra/IBattleCombatant/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
