---
title: "DefaultCharacterStatsModel"
description: "DefaultCharacterStatsModel 的自动生成类参考。"
---
# DefaultCharacterStatsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCharacterStatsModel : CharacterStatsModel`
**Base:** `CharacterStatsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterStatsModel.cs`

## 概述

`DefaultCharacterStatsModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultCharacterStatsModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxCharacterTier` | `public override int MaxCharacterTier { get; }` |

## 主要方法

### WoundedHitPointLimit
`public override int WoundedHitPointLimit(Hero hero)`

**用途 / Purpose:** 调用 WoundedHitPointLimit 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultCharacterStatsModel 实例
DefaultCharacterStatsModel defaultCharacterStatsModel = ...;
var result = defaultCharacterStatsModel.WoundedHitPointLimit(hero);
```

### GetTier
`public override int GetTier(CharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 tier 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCharacterStatsModel 实例
DefaultCharacterStatsModel defaultCharacterStatsModel = ...;
var result = defaultCharacterStatsModel.GetTier(character);
```

### MaxHitpoints
`public override ExplainedNumber MaxHitpoints(CharacterObject character, bool includeDescriptions = false)`

**用途 / Purpose:** 调用 MaxHitpoints 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultCharacterStatsModel 实例
DefaultCharacterStatsModel defaultCharacterStatsModel = ...;
var result = defaultCharacterStatsModel.MaxHitpoints(character, false);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultCharacterStatsModel>(new MyDefaultCharacterStatsModel());
```

## 参见

- [本区域目录](../)