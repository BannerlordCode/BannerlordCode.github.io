---
title: "ShadingModel"
description: "ShadingModel 的自动生成类参考。"
---
# ShadingModel

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.OpenGL
**Module:** TaleWorlds.TwoDimension
**Type:** `internal enum ShadingModel : uint`
**Base:** `uint`
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone.Native.OpenGL/ShadingModel.cs`

## 概述

`ShadingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ShadingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
Game.Current.ReplaceModel<ShadingModel>(new MyShadingModel());
```

## 参见

- [本区域目录](../)