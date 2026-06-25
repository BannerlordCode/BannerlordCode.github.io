---
title: "BodyPropertiesModel"
description: "BodyPropertiesModel 的自动生成类参考。"
---
# BodyPropertiesModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BodyPropertiesModel : MBGameModel<BodyPropertiesModel>`
**Base:** `MBGameModel<BodyPropertiesModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BodyPropertiesModel.cs`

## 概述

`BodyPropertiesModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BodyPropertiesModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetHairIndicesForCulture
`public abstract int GetHairIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hair indices for culture 的结果。

```csharp
// 先通过子系统 API 拿到 BodyPropertiesModel 实例
BodyPropertiesModel bodyPropertiesModel = ...;
var result = bodyPropertiesModel.GetHairIndicesForCulture(0, 0, 0, culture);
```

### GetBeardIndicesForCulture
`public abstract int GetBeardIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 beard indices for culture 的结果。

```csharp
// 先通过子系统 API 拿到 BodyPropertiesModel 实例
BodyPropertiesModel bodyPropertiesModel = ...;
var result = bodyPropertiesModel.GetBeardIndicesForCulture(0, 0, 0, culture);
```

### GetTattooIndicesForCulture
`public abstract int GetTattooIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tattoo indices for culture 的结果。

```csharp
// 先通过子系统 API 拿到 BodyPropertiesModel 实例
BodyPropertiesModel bodyPropertiesModel = ...;
var result = bodyPropertiesModel.GetTattooIndicesForCulture(0, 0, 0, culture);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BodyPropertiesModel instance = ...;
```

## 参见

- [本区域目录](../)