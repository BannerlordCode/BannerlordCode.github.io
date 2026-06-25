---
title: "SkillHelper"
description: "SkillHelper 的自动生成类参考。"
---
# SkillHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class SkillHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/SkillHelper.cs`

## 概述

`SkillHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `SkillHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AddSkillBonusForSkillLevel
`public static void AddSkillBonusForSkillLevel(SkillEffect skillEffect, ref ExplainedNumber explainedNumber, int skillLevel)`

**用途 / Purpose:** 将 「skill bonus for skill level」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
SkillHelper.AddSkillBonusForSkillLevel(skillEffect, explainedNumber, 0);
```

### AddSkillBonusForParty
`public static void AddSkillBonusForParty(SkillEffect skillEffect, MobileParty party, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 将 「skill bonus for party」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
SkillHelper.AddSkillBonusForParty(skillEffect, party, explainedNumber);
```

### AddSkillBonusForTown
`public static void AddSkillBonusForTown(SkillEffect skillEffect, Town town, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 将 「skill bonus for town」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
SkillHelper.AddSkillBonusForTown(skillEffect, town, explainedNumber);
```

### AddSkillBonusForCharacter
`public static void AddSkillBonusForCharacter(SkillEffect skillEffect, CharacterObject character, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 将 「skill bonus for character」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
SkillHelper.AddSkillBonusForCharacter(skillEffect, character, explainedNumber);
```

### GetEffectDescriptionForSkillLevel
`public static TextObject GetEffectDescriptionForSkillLevel(SkillEffect effect, int level)`

**用途 / Purpose:** 读取并返回当前对象中 「effect description for skill level」 的结果。

```csharp
// 静态调用，不需要实例
SkillHelper.GetEffectDescriptionForSkillLevel(effect, 0);
```

### GetEffectivePartyLeaderForSkill
`public static CharacterObject GetEffectivePartyLeaderForSkill(PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 「effective party leader for skill」 的结果。

```csharp
// 静态调用，不需要实例
SkillHelper.GetEffectivePartyLeaderForSkill(party);
```

## 使用示例

```csharp
SkillHelper.Initialize();
```

## 参见

- [本区域目录](../)