---
title: "RomanceModel"
description: "RomanceModel 的自动生成类参考。"
---
# RomanceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class RomanceModel : MBGameModel<RomanceModel>`
**Base:** `MBGameModel<RomanceModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/RomanceModel.cs`

## 概述

`RomanceModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `RomanceModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAttractionValuePercentage
`public abstract int GetAttractionValuePercentage(Hero potentiallyInterestedCharacter, Hero heroOfInterest)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 attraction value percentage 的结果。

```csharp
// 先通过子系统 API 拿到 RomanceModel 实例
RomanceModel romanceModel = ...;
var result = romanceModel.GetAttractionValuePercentage(potentiallyInterestedCharacter, heroOfInterest);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
RomanceModel instance = ...;
```

## 参见

- [本区域目录](../)