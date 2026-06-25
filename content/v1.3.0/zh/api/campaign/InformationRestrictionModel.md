---
title: "InformationRestrictionModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InformationRestrictionModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# InformationRestrictionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class InformationRestrictionModel : MBGameModel<InformationRestrictionModel>`
**Base:** `MBGameModel<InformationRestrictionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/InformationRestrictionModel.cs`

## 概述

`InformationRestrictionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `InformationRestrictionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### DoesPlayerKnowDetailsOf
`public abstract bool DoesPlayerKnowDetailsOf(Settlement settlement)`

**用途 / Purpose:** 处理 `does player know details of` 相关逻辑。

### DoesPlayerKnowDetailsOf
`public abstract bool DoesPlayerKnowDetailsOf(Hero hero)`

**用途 / Purpose:** 处理 `does player know details of` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomInformationRestrictionModel();
```

## 参见

- [完整类目录](../catalog)