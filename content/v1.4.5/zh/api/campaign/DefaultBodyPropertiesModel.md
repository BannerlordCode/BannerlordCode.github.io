---
title: "DefaultBodyPropertiesModel"
description: "DefaultBodyPropertiesModel 的自动生成类参考。"
---
# DefaultBodyPropertiesModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBodyPropertiesModel : BodyPropertiesModel`
**Base:** `BodyPropertiesModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBodyPropertiesModel.cs`

## 概述

`DefaultBodyPropertiesModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultBodyPropertiesModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetHairIndicesForCulture
`public override int GetHairIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**用途 / Purpose:** 读取并返回当前对象中 hair indices for culture 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBodyPropertiesModel 实例
DefaultBodyPropertiesModel defaultBodyPropertiesModel = ...;
var result = defaultBodyPropertiesModel.GetHairIndicesForCulture(0, 0, 0, culture);
```

### GetBeardIndicesForCulture
`public override int GetBeardIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**用途 / Purpose:** 读取并返回当前对象中 beard indices for culture 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBodyPropertiesModel 实例
DefaultBodyPropertiesModel defaultBodyPropertiesModel = ...;
var result = defaultBodyPropertiesModel.GetBeardIndicesForCulture(0, 0, 0, culture);
```

### GetTattooIndicesForCulture
`public override int GetTattooIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**用途 / Purpose:** 读取并返回当前对象中 tattoo indices for culture 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBodyPropertiesModel 实例
DefaultBodyPropertiesModel defaultBodyPropertiesModel = ...;
var result = defaultBodyPropertiesModel.GetTattooIndicesForCulture(0, 0, 0, culture);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultBodyPropertiesModel>(new MyDefaultBodyPropertiesModel());
```

## 参见

- [本区域目录](../)