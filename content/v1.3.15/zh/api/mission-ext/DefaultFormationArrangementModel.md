---
title: "DefaultFormationArrangementModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultFormationArrangementModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultFormationArrangementModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultFormationArrangementModel : FormationArrangementModel`
**Base:** `FormationArrangementModel`
**File:** `TaleWorlds.MountAndBlade/DefaultFormationArrangementModel.cs`

## 概述

`DefaultFormationArrangementModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultFormationArrangementModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetBannerBearerPositions
`public override List<FormationArrangementModel.ArrangementPosition> GetBannerBearerPositions(Formation formation, int maxCount)`

**用途 / Purpose:** 获取 `banner bearer positions` 的当前值。

### GetArrangementPosition
`public FormationArrangementModel.ArrangementPosition GetArrangementPosition(int fileCount, int rankCount)`

**用途 / Purpose:** 获取 `arrangement position` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultFormationArrangementModel>(new MyDefaultFormationArrangementModel());
```

## 参见

- [完整类目录](../catalog)