---
title: "DefaultRidingModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultRidingModel`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultRidingModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DefaultRidingModel : RidingModel`
**Base:** `RidingModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/DefaultRidingModel.cs`

## 概述

`DefaultRidingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultRidingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateAcceleration
`public override float CalculateAcceleration(in EquipmentElement mountElement, in EquipmentElement harnessElement, int ridingSkill)`

**用途 / Purpose:** 处理 `calculate acceleration` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultRidingModel>(new MyDefaultRidingModel());
```

## 参见

- [完整类目录](../catalog)