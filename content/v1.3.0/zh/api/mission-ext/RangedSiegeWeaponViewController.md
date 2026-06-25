---
title: "RangedSiegeWeaponViewController"
description: "RangedSiegeWeaponViewController 的自动生成类参考。"
---
# RangedSiegeWeaponViewController

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RangedSiegeWeaponViewController : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponViewController.cs`

## 概述

`RangedSiegeWeaponViewController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `RangedSiegeWeaponViewController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** **用途 / Purpose:** 在 object used 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeaponViewController 实例
RangedSiegeWeaponViewController rangedSiegeWeaponViewController = ...;
rangedSiegeWeaponViewController.OnObjectUsed(userAgent, usedObject);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<RangedSiegeWeaponViewController>();
```

## 参见

- [本区域目录](../)