---
title: "DefaultFormationArrangementModel"
description: "DefaultFormationArrangementModel 的自动生成类参考。"
---
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

**用途 / Purpose:** 读取并返回当前对象中 「banner bearer positions」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultFormationArrangementModel 实例
DefaultFormationArrangementModel defaultFormationArrangementModel = ...;
var result = defaultFormationArrangementModel.GetBannerBearerPositions(formation, 0);
```

### GetArrangementPosition
`public FormationArrangementModel.ArrangementPosition GetArrangementPosition(int fileCount, int rankCount)`

**用途 / Purpose:** 读取并返回当前对象中 「arrangement position」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultFormationArrangementModel 实例
DefaultFormationArrangementModel defaultFormationArrangementModel = ...;
var result = defaultFormationArrangementModel.GetArrangementPosition(0, 0);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultFormationArrangementModel>(new MyDefaultFormationArrangementModel());
```

## 参见

- [本区域目录](../)