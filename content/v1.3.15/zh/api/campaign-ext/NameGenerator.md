---
title: "NameGenerator"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NameGenerator`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NameGenerator

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NameGenerator`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/NameGenerator.cs`

## 概述

`NameGenerator` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static NameGenerator Current { get; }` |

## 主要方法

### GenerateHeroNameAndHeroFullName
`public void GenerateHeroNameAndHeroFullName(Hero hero, out TextObject firstName, out TextObject fullName, bool useDeterministicValues = true)`

**用途 / Purpose:** 处理 `generate hero name and hero full name` 相关逻辑。

### GenerateHeroFirstName
`public TextObject GenerateHeroFirstName(Hero hero)`

**用途 / Purpose:** 处理 `generate hero first name` 相关逻辑。

### GenerateFirstNameForPlayer
`public TextObject GenerateFirstNameForPlayer(CultureObject culture, bool isFemale)`

**用途 / Purpose:** 处理 `generate first name for player` 相关逻辑。

### GenerateClanName
`public TextObject GenerateClanName(CultureObject culture, Settlement clanOriginSettlement)`

**用途 / Purpose:** 处理 `generate clan name` 相关逻辑。

### GetNameListForCulture
`public MBReadOnlyList<TextObject> GetNameListForCulture(CultureObject npcCulture, bool isFemale)`

**用途 / Purpose:** 获取 `name list for culture` 的当前值。

### AddName
`public void AddName(TextObject name)`

**用途 / Purpose:** 向当前集合/状态中添加 `name`。

## 使用示例

```csharp
var value = new NameGenerator();
value.GenerateHeroNameAndHeroFullName(hero, firstName, fullName, false);
```

## 参见

- [完整类目录](../catalog)