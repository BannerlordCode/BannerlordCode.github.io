---
title: "CustomBattleAutoBlockModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleAutoBlockModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleAutoBlockModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAutoBlockModel : AutoBlockModel`
**Base:** `AutoBlockModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleAutoBlockModel.cs`

## 概述

`CustomBattleAutoBlockModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CustomBattleAutoBlockModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetBlockDirection
`public override Agent.UsageDirection GetBlockDirection(Mission mission)`

**用途 / Purpose:** 获取 `block direction` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<CustomBattleAutoBlockModel>(new MyCustomBattleAutoBlockModel());
```

## 参见

- [完整类目录](../catalog)