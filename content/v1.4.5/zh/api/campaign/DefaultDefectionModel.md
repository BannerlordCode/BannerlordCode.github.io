---
title: "DefaultDefectionModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultDefectionModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultDefectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDefectionModel : DefectionModel`
**Base:** `DefectionModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultDefectionModel.cs`

## 概述

`DefaultDefectionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultDefectionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CanHeroDefectToFaction
`public override bool CanHeroDefectToFaction(Hero hero, Kingdom kingdom)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero defect to faction`。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultDefectionModel>(new MyDefaultDefectionModel());
```

## 参见

- [完整类目录](../catalog)