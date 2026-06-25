---
title: "RangedSiegeWeaponView"
description: "RangedSiegeWeaponView 的自动生成类参考。"
---
# RangedSiegeWeaponView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RangedSiegeWeaponView : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponView.cs`

## 概述

`RangedSiegeWeaponView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `RangedSiegeWeaponView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `RangedSiegeWeapon` | `public RangedSiegeWeapon RangedSiegeWeapon { get; }` |
| `MissionScreen` | `public MissionScreen MissionScreen { get; }` |
| `Camera` | `public Camera Camera { get; }` |
| `CameraHolder` | `public GameEntity CameraHolder { get; }` |
| `PilotAgent` | `public Agent PilotAgent { get; }` |

## 主要方法

### Initialize
`public void Initialize(RangedSiegeWeapon rangedSiegeWeapon, MissionScreen missionScreen)`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeaponView 实例
RangedSiegeWeaponView rangedSiegeWeaponView = ...;
rangedSiegeWeaponView.Initialize(rangedSiegeWeapon, missionScreen);
```

### IsOnTickRequired
`public override bool IsOnTickRequired()`

**用途 / Purpose:** 判断当前对象是否处于 on tick required 状态或条件。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeaponView 实例
RangedSiegeWeaponView rangedSiegeWeaponView = ...;
var result = rangedSiegeWeaponView.IsOnTickRequired();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
RangedSiegeWeaponView view = ...;
```

## 参见

- [本区域目录](../)