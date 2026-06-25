---
title: "DefaultBodyPropertiesModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultBodyPropertiesModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBodyPropertiesModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBodyPropertiesModel : BodyPropertiesModel`
**Base:** `BodyPropertiesModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBodyPropertiesModel.cs`

## 概述

`DefaultBodyPropertiesModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultBodyPropertiesModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetHairIndicesForCulture
`public override int GetHairIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**用途 / Purpose:** 获取 `hair indices for culture` 的当前值。

### GetBeardIndicesForCulture
`public override int GetBeardIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**用途 / Purpose:** 获取 `beard indices for culture` 的当前值。

### GetTattooIndicesForCulture
`public override int GetTattooIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**用途 / Purpose:** 获取 `tattoo indices for culture` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultBodyPropertiesModel>(new MyDefaultBodyPropertiesModel());
```

## 参见

- [完整类目录](../catalog)