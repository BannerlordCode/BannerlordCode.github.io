---
title: "CrosshairVM"
description: "CrosshairVM 的自动生成类参考。"
---
# CrosshairVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CrosshairVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CrosshairVM.cs`

## 概述

`CrosshairVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `IsReloadPhasesVisible` | `public bool IsReloadPhasesVisible { get; set; }` |
| `IsHitMarkerVisible` | `public bool IsHitMarkerVisible { get; set; }` |
| `IsVictimDead` | `public bool IsVictimDead { get; set; }` |
| `IsHumanoidHeadshot` | `public bool IsHumanoidHeadshot { get; set; }` |
| `TopArrowOpacity` | `public double TopArrowOpacity { get; set; }` |
| `ReloadPhases` | `public MBBindingList<ReloadPhaseItemVM> ReloadPhases { get; set; }` |
| `BottomArrowOpacity` | `public double BottomArrowOpacity { get; set; }` |
| `RightArrowOpacity` | `public double RightArrowOpacity { get; set; }` |
| `LeftArrowOpacity` | `public double LeftArrowOpacity { get; set; }` |
| `IsTargetInvalid` | `public bool IsTargetInvalid { get; set; }` |
| `CrosshairAccuracy` | `public double CrosshairAccuracy { get; set; }` |
| `CrosshairScale` | `public double CrosshairScale { get; set; }` |
| `CrosshairType` | `public int CrosshairType { get; set; }` |

## 主要方法

### SetProperties
`public void SetProperties(double accuracy, double scale)`

**用途 / Purpose:** 为 properties 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CrosshairVM 实例
CrosshairVM crosshairVM = ...;
crosshairVM.SetProperties(0, 0);
```

### SetArrowProperties
`public void SetArrowProperties(double topArrowOpacity, double rightArrowOpacity, double bottomArrowOpacity, double leftArrowOpacity)`

**用途 / Purpose:** 为 arrow properties 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CrosshairVM 实例
CrosshairVM crosshairVM = ...;
crosshairVM.SetArrowProperties(0, 0, 0, 0);
```

### SetReloadProperties
`public void SetReloadProperties(in StackArray.StackArray10FloatFloatTuple reloadPhases, int reloadPhaseCount)`

**用途 / Purpose:** 为 reload properties 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CrosshairVM 实例
CrosshairVM crosshairVM = ...;
crosshairVM.SetReloadProperties(reloadPhases, 0);
```

### ShowHitMarker
`public void ShowHitMarker(bool isVictimDead, bool isHumanoidHeadShot)`

**用途 / Purpose:** 显示hit marker对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 CrosshairVM 实例
CrosshairVM crosshairVM = ...;
crosshairVM.ShowHitMarker(false, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CrosshairVM crosshairVM = ...;
crosshairVM.SetProperties(0, 0);
```

## 参见

- [本区域目录](../)