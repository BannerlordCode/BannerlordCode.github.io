---
title: "CustomBattleApplyWeatherEffectsModel"
description: "CustomBattleApplyWeatherEffectsModel 的自动生成类参考。"
---
# CustomBattleApplyWeatherEffectsModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleApplyWeatherEffectsModel : ApplyWeatherEffectsModel`
**Base:** `ApplyWeatherEffectsModel`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CustomBattleApplyWeatherEffectsModel.cs`

## 概述

`CustomBattleApplyWeatherEffectsModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CustomBattleApplyWeatherEffectsModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ApplyWeatherEffects
`public override void ApplyWeatherEffects()`

**用途 / Purpose:** **用途 / Purpose:** 将 weather effects 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 CustomBattleApplyWeatherEffectsModel 实例
CustomBattleApplyWeatherEffectsModel customBattleApplyWeatherEffectsModel = ...;
customBattleApplyWeatherEffectsModel.ApplyWeatherEffects();
```

## 使用示例

```csharp
Game.Current.ReplaceModel<CustomBattleApplyWeatherEffectsModel>(new MyCustomBattleApplyWeatherEffectsModel());
```

## 参见

- [本区域目录](../)