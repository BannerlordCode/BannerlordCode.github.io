---
title: "NarrativeMenuOptionArgs"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NarrativeMenuOptionArgs`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NarrativeMenuOptionArgs

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NarrativeMenuOptionArgs`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuOptionArgs.cs`

## 概述

`NarrativeMenuOptionArgs` 位于 `TaleWorlds.CampaignSystem.CharacterCreationContent`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterCreationContent` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AffectedSkills` | `public MBList<SkillObject> AffectedSkills { get; }` |
| `SkillLevelToAdd` | `public int SkillLevelToAdd { get; }` |
| `AffectedTraits` | `public MBList<TraitObject> AffectedTraits { get; }` |
| `TraitLevelToAdd` | `public int TraitLevelToAdd { get; }` |
| `FocusToAdd` | `public int FocusToAdd { get; }` |
| `UnspentFocusToAdd` | `public int UnspentFocusToAdd { get; }` |
| `EffectedAttribute` | `public CharacterAttribute EffectedAttribute { get; }` |
| `AttributeLevelToAdd` | `public int AttributeLevelToAdd { get; }` |
| `UnspentAttributeToAdd` | `public int UnspentAttributeToAdd { get; }` |
| `RenownToAdd` | `public int RenownToAdd { get; }` |
| `GoldToAdd` | `public int GoldToAdd { get; }` |
| `PositiveEffectText` | `public TextObject PositiveEffectText { get; }` |

## 主要方法

### SetAffectedSkills
`public void SetAffectedSkills(SkillObject affectedSkills)`

**用途 / Purpose:** 设置 `affected skills` 的值或状态。

### SetFocusToSkills
`public void SetFocusToSkills(int focusToAdd)`

**用途 / Purpose:** 设置 `focus to skills` 的值或状态。

### SetLevelToSkills
`public void SetLevelToSkills(int levelToAdd)`

**用途 / Purpose:** 设置 `level to skills` 的值或状态。

### SetAffectedTraits
`public void SetAffectedTraits(TraitObject affectedTraits)`

**用途 / Purpose:** 设置 `affected traits` 的值或状态。

### SetLevelToTraits
`public void SetLevelToTraits(int levelToAdd)`

**用途 / Purpose:** 设置 `level to traits` 的值或状态。

### SetLevelToAttribute
`public void SetLevelToAttribute(CharacterAttribute characterAttribute, int levelToAdd)`

**用途 / Purpose:** 设置 `level to attribute` 的值或状态。

### SetRenownToAdd
`public void SetRenownToAdd(int value)`

**用途 / Purpose:** 设置 `renown to add` 的值或状态。

### SetUnspentFocusToAdd
`public void SetUnspentFocusToAdd(int value)`

**用途 / Purpose:** 设置 `unspent focus to add` 的值或状态。

### SetUnspentAttributeToAdd
`public void SetUnspentAttributeToAdd(int value)`

**用途 / Purpose:** 设置 `unspent attribute to add` 的值或状态。

## 使用示例

```csharp
var value = new NarrativeMenuOptionArgs();
value.SetAffectedSkills(affectedSkills);
```

## 参见

- [完整类目录](../catalog)