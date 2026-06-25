---
title: "DefaultRomanceModel"
description: "DefaultRomanceModel 的自动生成类参考。"
---
# DefaultRomanceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultRomanceModel : RomanceModel`
**Base:** `RomanceModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultRomanceModel.cs`

## 概述

`DefaultRomanceModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultRomanceModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAttractionValuePercentage
`public override int GetAttractionValuePercentage(Hero potentiallyInterestedCharacter, Hero heroOfInterest)`

**用途 / Purpose:** 读取并返回当前对象中 「attraction value percentage」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultRomanceModel 实例
DefaultRomanceModel defaultRomanceModel = ...;
var result = defaultRomanceModel.GetAttractionValuePercentage(potentiallyInterestedCharacter, heroOfInterest);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultRomanceModel>(new MyDefaultRomanceModel());
```

## 参见

- [本区域目录](../)