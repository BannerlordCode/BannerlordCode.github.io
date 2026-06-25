---
title: "CustomBattleAutoBlockModel"
description: "CustomBattleAutoBlockModel 的自动生成类参考。"
---
# CustomBattleAutoBlockModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAutoBlockModel : AutoBlockModel`
**Base:** `AutoBlockModel`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CustomBattleAutoBlockModel.cs`

## 概述

`CustomBattleAutoBlockModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CustomBattleAutoBlockModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetBlockDirection
`public override Agent.UsageDirection GetBlockDirection(Mission mission)`

**用途 / Purpose:** 读取并返回当前对象中 「block direction」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleAutoBlockModel 实例
CustomBattleAutoBlockModel customBattleAutoBlockModel = ...;
var result = customBattleAutoBlockModel.GetBlockDirection(mission);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<CustomBattleAutoBlockModel>(new MyCustomBattleAutoBlockModel());
```

## 参见

- [本区域目录](../)