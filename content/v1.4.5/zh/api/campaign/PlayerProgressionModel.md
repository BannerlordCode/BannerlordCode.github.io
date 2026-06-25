---
title: "PlayerProgressionModel"
description: "PlayerProgressionModel 的自动生成类参考。"
---
# PlayerProgressionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PlayerProgressionModel : MBGameModel<PlayerProgressionModel>`
**Base:** `MBGameModel<PlayerProgressionModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PlayerProgressionModel.cs`

## 概述

`PlayerProgressionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PlayerProgressionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPlayerProgress
`public abstract float GetPlayerProgress()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 player progress 的结果。

```csharp
// 先通过子系统 API 拿到 PlayerProgressionModel 实例
PlayerProgressionModel playerProgressionModel = ...;
var result = playerProgressionModel.GetPlayerProgress();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PlayerProgressionModel instance = ...;
```

## 参见

- [本区域目录](../)