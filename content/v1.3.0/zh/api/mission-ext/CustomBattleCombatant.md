---
title: "CustomBattleCombatant"
description: "CustomBattleCombatant 的自动生成类参考。"
---
# CustomBattleCombatant

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleCombatant : IBattleCombatant`
**Base:** `IBattleCombatant`
**File:** `TaleWorlds.MountAndBlade/CustomBattleCombatant.cs`

## 概述

`CustomBattleCombatant` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Side` | `public BattleSideEnum Side { get; }` |
| `General` | `public BasicCharacterObject General { get; }` |
| `BasicCulture` | `public BasicCultureObject BasicCulture { get; }` |
| `PrimaryColorPair` | `public Tuple<uint, uint> PrimaryColorPair { get; }` |
| `AlternativeColorPair` | `public Tuple<uint, uint> AlternativeColorPair { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `Characters` | `public IEnumerable<BasicCharacterObject> Characters { get; }` |
| `CountOfCharacters` | `public int CountOfCharacters { get; }` |
| `NumberOfAllMembers` | `public int NumberOfAllMembers { get; }` |
| `NumberOfHealthyMembers` | `public int NumberOfHealthyMembers { get; }` |

## 主要方法

### GetTacticsSkillAmount
`public int GetTacticsSkillAmount()`

**用途 / Purpose:** 读取并返回当前对象中 「tactics skill amount」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleCombatant 实例
CustomBattleCombatant customBattleCombatant = ...;
var result = customBattleCombatant.GetTacticsSkillAmount();
```

### AddCharacter
`public void AddCharacter(BasicCharacterObject characterObject, int number)`

**用途 / Purpose:** 将 「character」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CustomBattleCombatant 实例
CustomBattleCombatant customBattleCombatant = ...;
customBattleCombatant.AddCharacter(characterObject, 0);
```

### SetGeneral
`public void SetGeneral(BasicCharacterObject generalCharacter)`

**用途 / Purpose:** 为 「general」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CustomBattleCombatant 实例
CustomBattleCombatant customBattleCombatant = ...;
customBattleCombatant.SetGeneral(generalCharacter);
```

### KillCharacter
`public void KillCharacter(BasicCharacterObject character)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 CustomBattleCombatant 实例
CustomBattleCombatant customBattleCombatant = ...;
customBattleCombatant.KillCharacter(character);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CustomBattleCombatant customBattleCombatant = ...;
customBattleCombatant.GetTacticsSkillAmount();
```

## 参见

- [本区域目录](../)