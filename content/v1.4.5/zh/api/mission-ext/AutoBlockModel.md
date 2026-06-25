---
title: "AutoBlockModel"
description: "AutoBlockModel 的自动生成类参考。"
---
# AutoBlockModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AutoBlockModel : MBGameModel<AutoBlockModel>`
**Base:** `MBGameModel<AutoBlockModel>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/AutoBlockModel.cs`

## 概述

`AutoBlockModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `AutoBlockModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetBlockDirection
`public abstract Agent.UsageDirection GetBlockDirection(Mission mission)`

**用途 / Purpose:** 读取并返回当前对象中 block direction 的结果。

```csharp
// 先通过子系统 API 拿到 AutoBlockModel 实例
AutoBlockModel autoBlockModel = ...;
var result = autoBlockModel.GetBlockDirection(mission);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
AutoBlockModel instance = ...;
```

## 参见

- [本区域目录](../)