---
title: "RangedSiegeWeaponView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RangedSiegeWeaponView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RangedSiegeWeaponView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RangedSiegeWeaponView : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon/RangedSiegeWeaponView.cs`

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

## 主要方法

### Initialize
`public void Initialize(RangedSiegeWeapon rangedSiegeWeapon, MissionScreen missionScreen)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### IsOnTickRequired
`public override bool IsOnTickRequired()`

**用途 / Purpose:** 处理 `is on tick required` 相关逻辑。

## 使用示例

```csharp
var view = new RangedSiegeWeaponView();
```

## 参见

- [完整类目录](../catalog)