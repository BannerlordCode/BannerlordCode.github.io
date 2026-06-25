---
title: "DefaultHeroAgentLocationModel"
description: "DefaultHeroAgentLocationModel 的自动生成类参考。"
---
# DefaultHeroAgentLocationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroAgentLocationModel : HeroAgentLocationModel`
**Base:** `HeroAgentLocationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeroAgentLocationModel.cs`

## 概述

`DefaultHeroAgentLocationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultHeroAgentLocationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### WillBeListedInOverlay
`public override bool WillBeListedInOverlay(LocationCharacter locationCharacter)`

**用途 / Purpose:** **用途 / Purpose:** 调用 WillBeListedInOverlay 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultHeroAgentLocationModel 实例
DefaultHeroAgentLocationModel defaultHeroAgentLocationModel = ...;
var result = defaultHeroAgentLocationModel.WillBeListedInOverlay(locationCharacter);
```

### GetLocationForHero
`public override Location GetLocationForHero(Hero hero, Settlement settlement, out HeroAgentLocationModel.HeroLocationDetail heroLocationDetail)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 location for hero 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultHeroAgentLocationModel 实例
DefaultHeroAgentLocationModel defaultHeroAgentLocationModel = ...;
var result = defaultHeroAgentLocationModel.GetLocationForHero(hero, settlement, heroLocationDetail);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultHeroAgentLocationModel>(new MyDefaultHeroAgentLocationModel());
```

## 参见

- [本区域目录](../)