---
title: "SkillHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SkillHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SkillHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class SkillHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/SkillHelper.cs`

## 概述

`SkillHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `SkillHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AddSkillBonusForSkillLevel
`public static void AddSkillBonusForSkillLevel(SkillEffect skillEffect, ref ExplainedNumber explainedNumber, int skillLevel)`

**用途 / Purpose:** 向当前集合/状态中添加 `skill bonus for skill level`。

### AddSkillBonusForParty
`public static void AddSkillBonusForParty(SkillEffect skillEffect, MobileParty party, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 向当前集合/状态中添加 `skill bonus for party`。

### AddSkillBonusForTown
`public static void AddSkillBonusForTown(SkillEffect skillEffect, Town town, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 向当前集合/状态中添加 `skill bonus for town`。

### AddSkillBonusForCharacter
`public static void AddSkillBonusForCharacter(SkillEffect skillEffect, CharacterObject character, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 向当前集合/状态中添加 `skill bonus for character`。

### GetEffectDescriptionForSkillLevel
`public static TextObject GetEffectDescriptionForSkillLevel(SkillEffect effect, int level)`

**用途 / Purpose:** 获取 `effect description for skill level` 的当前值。

### GetEffectivePartyLeaderForSkill
`public static CharacterObject GetEffectivePartyLeaderForSkill(PartyBase party)`

**用途 / Purpose:** 获取 `effective party leader for skill` 的当前值。

## 使用示例

```csharp
SkillHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)