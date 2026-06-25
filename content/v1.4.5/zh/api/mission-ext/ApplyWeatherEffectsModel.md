---
title: "ApplyWeatherEffectsModel"
description: "ApplyWeatherEffectsModel 的自动生成类参考。"
---
# ApplyWeatherEffectsModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ApplyWeatherEffectsModel : MBGameModel<ApplyWeatherEffectsModel>`
**Base:** `MBGameModel<ApplyWeatherEffectsModel>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/ApplyWeatherEffectsModel.cs`

## 概述

`ApplyWeatherEffectsModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ApplyWeatherEffectsModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ApplyWeatherEffects
`public abstract void ApplyWeatherEffects()`

**用途 / Purpose:** 将 「weather effects」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 ApplyWeatherEffectsModel 实例
ApplyWeatherEffectsModel applyWeatherEffectsModel = ...;
applyWeatherEffectsModel.ApplyWeatherEffects();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ApplyWeatherEffectsModel instance = ...;
```

## 参见

- [本区域目录](../)