---
title: "BodyPropertiesModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BodyPropertiesModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `hair indices for culture` 的当前值。

### GetBeardIndicesForCulture
`public abstract int GetBeardIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**用途 / Purpose:** 获取 `beard indices for culture` 的当前值。

### GetTattooIndicesForCulture
`public abstract int GetTattooIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**用途 / Purpose:** 获取 `tattoo indices for culture` 的当前值。

## 使用示例

```csharp
var implementation = new CustomBodyPropertiesModel();
```

## 参见

- [完整类目录](../catalog)