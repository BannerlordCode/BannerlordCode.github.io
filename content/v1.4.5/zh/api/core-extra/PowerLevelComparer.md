---
title: "PowerLevelComparer"
description: "PowerLevelComparer 的自动生成类参考。"
---
# PowerLevelComparer

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class PowerLevelComparer : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection/PowerLevelComparer.cs`

## 概述

`PowerLevelComparer` 位于 `TaleWorlds.Core.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `DefenderBattlePower` | `public double DefenderBattlePower { get; set; }` |
| `DefenderBattlePowerValue` | `public double DefenderBattlePowerValue { get; set; }` |
| `AttackerBattlePower` | `public double AttackerBattlePower { get; set; }` |
| `AttackerBattlePowerValue` | `public double AttackerBattlePowerValue { get; set; }` |
| `InitialDefenderBattlePower` | `public double InitialDefenderBattlePower { get; set; }` |
| `InitialAttackerBattlePower` | `public double InitialAttackerBattlePower { get; set; }` |
| `InitialDefenderBattlePowerValue` | `public double InitialDefenderBattlePowerValue { get; set; }` |
| `InitialAttackerBattlePowerValue` | `public double InitialAttackerBattlePowerValue { get; set; }` |
| `DefenderRelativePower` | `public float DefenderRelativePower { get; set; }` |
| `AttackerRelativePower` | `public float AttackerRelativePower { get; set; }` |
| `DefenderColor` | `public string DefenderColor { get; set; }` |
| `AttackerColor` | `public string AttackerColor { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |

## 主要方法

### SetColors
`public void SetColors(string defenderColor, string attackerColor)`

**用途 / Purpose:** 为 colors 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PowerLevelComparer 实例
PowerLevelComparer powerLevelComparer = ...;
powerLevelComparer.SetColors("example", "example");
```

### Update
`public void Update(double defenderPower, double attackerPower)`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 PowerLevelComparer 实例
PowerLevelComparer powerLevelComparer = ...;
powerLevelComparer.Update(0, 0);
```

### Update
`public void Update(double defenderPower, double attackerPower, double initialDefenderPower, double initialAttackerPower)`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 PowerLevelComparer 实例
PowerLevelComparer powerLevelComparer = ...;
powerLevelComparer.Update(0, 0, 0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PowerLevelComparer powerLevelComparer = ...;
powerLevelComparer.SetColors("example", "example");
```

## 参见

- [本区域目录](../)