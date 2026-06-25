---
title: "HeroAgentLocationModel"
description: "HeroAgentLocationModel 的自动生成类参考。"
---
# HeroAgentLocationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeroAgentLocationModel : MBGameModel<HeroAgentLocationModel>`
**Base:** `MBGameModel<HeroAgentLocationModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/HeroAgentLocationModel.cs`

## 概述

`HeroAgentLocationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `HeroAgentLocationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### WillBeListedInOverlay
`public abstract bool WillBeListedInOverlay(LocationCharacter locationCharacter)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 HeroAgentLocationModel 实例
HeroAgentLocationModel heroAgentLocationModel = ...;
var result = heroAgentLocationModel.WillBeListedInOverlay(locationCharacter);
```

### GetLocationForHero
`public abstract Location GetLocationForHero(Hero hero, Settlement settlement, out HeroLocationDetail heroSpawnDetail)`

**用途 / Purpose:** 读取并返回当前对象中 「location for hero」 的结果。

```csharp
// 先通过子系统 API 拿到 HeroAgentLocationModel 实例
HeroAgentLocationModel heroAgentLocationModel = ...;
var result = heroAgentLocationModel.GetLocationForHero(hero, settlement, heroSpawnDetail);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
HeroAgentLocationModel instance = ...;
```

## 参见

- [本区域目录](../)