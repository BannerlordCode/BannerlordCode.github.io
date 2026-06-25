---
title: "CustomBattleCombatant"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleCombatant`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `tactics skill amount` 的当前值。

### AddCharacter
`public void AddCharacter(BasicCharacterObject characterObject, int number)`

**用途 / Purpose:** 向当前集合/状态中添加 `character`。

### SetGeneral
`public void SetGeneral(BasicCharacterObject generalCharacter)`

**用途 / Purpose:** 设置 `general` 的值或状态。

### KillCharacter
`public void KillCharacter(BasicCharacterObject character)`

**用途 / Purpose:** 处理 `kill character` 相关逻辑。

## 使用示例

```csharp
var value = new CustomBattleCombatant();
value.GetTacticsSkillAmount();
```

## 参见

- [完整类目录](../catalog)