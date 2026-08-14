---
title: "CharacterStatsModel"
description: "CharacterStatsModel 的自动生成类参考。"
---
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

**用途 / Purpose:** 调用 MaxHitpoints 对应的操作。

```csharp
// 先通过子系统 API 拿到 CharacterStatsModel 实例
CharacterStatsModel characterStatsModel = ...;
var result = characterStatsModel.MaxHitpoints(character, false);
```

### GetTier
`public abstract int GetTier(CharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 tier 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterStatsModel 实例
CharacterStatsModel characterStatsModel = ...;
var result = characterStatsModel.GetTier(character);
```

### WoundedHitPointLimit
`public abstract int WoundedHitPointLimit(Hero hero)`

**用途 / Purpose:** 调用 WoundedHitPointLimit 对应的操作。

```csharp
// 先通过子系统 API 拿到 CharacterStatsModel 实例
CharacterStatsModel characterStatsModel = ...;
var result = characterStatsModel.WoundedHitPointLimit(hero);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
CharacterStatsModel instance = ...;
```

## 参见

- [本区域目录](../)