---
title: "FormationArrangementModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FormationArrangementModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FormationArrangementModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class FormationArrangementModel : MBGameModel<FormationArrangementModel>`
**Base:** `MBGameModel<FormationArrangementModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/FormationArrangementModel.cs`

## 概述

`FormationArrangementModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `FormationArrangementModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## 主要方法

### GetBannerBearerPositions
`public abstract List<ArrangementPosition> GetBannerBearerPositions(Formation formation, int maxCount)`

**用途 / Purpose:** 获取 `banner bearer positions` 的当前值。

## 使用示例

```csharp
var implementation = new CustomFormationArrangementModel();
```

## 参见

- [完整类目录](../catalog)