---
title: "CharacterStatsModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterStatsModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterStatsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CharacterStatsModel : MBGameModel<CharacterStatsModel>`
**Base:** `MBGameModel<CharacterStatsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterStatsModel.cs`

## 概述

`CharacterStatsModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CharacterStatsModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxCharacterTier` | `public abstract int MaxCharacterTier { get; }` |

## 主要方法

### MaxHitpoints
`public abstract ExplainedNumber MaxHitpoints(CharacterObject character, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `max hitpoints` 相关逻辑。

### GetTier
`public abstract int GetTier(CharacterObject character)`

**用途 / Purpose:** 获取 `tier` 的当前值。

### WoundedHitPointLimit
`public abstract int WoundedHitPointLimit(Hero hero)`

**用途 / Purpose:** 处理 `wounded hit point limit` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomCharacterStatsModel();
```

## 参见

- [完整类目录](../catalog)