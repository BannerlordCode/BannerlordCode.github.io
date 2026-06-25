---
title: "SandboxAutoBlockModel"
description: "SandboxAutoBlockModel 的自动生成类参考。"
---
# SandboxAutoBlockModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxAutoBlockModel : AutoBlockModel`
**Base:** `AutoBlockModel`
**File:** `Modules.SandBox/SandBox/SandBox.GameComponents/SandboxAutoBlockModel.cs`

## 概述

`SandboxAutoBlockModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SandboxAutoBlockModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetBlockDirection
`public override UsageDirection GetBlockDirection(Mission mission)`

**用途 / Purpose:** 读取并返回当前对象中 block direction 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAutoBlockModel 实例
SandboxAutoBlockModel sandboxAutoBlockModel = ...;
var result = sandboxAutoBlockModel.GetBlockDirection(mission);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<SandboxAutoBlockModel>(new MySandboxAutoBlockModel());
```

## 参见

- [本区域目录](../)