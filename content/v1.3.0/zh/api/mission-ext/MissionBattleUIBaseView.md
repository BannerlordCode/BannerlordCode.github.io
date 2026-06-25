---
title: "MissionBattleUIBaseView"
description: "MissionBattleUIBaseView 的自动生成类参考。"
---
# MissionBattleUIBaseView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionBattleUIBaseView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionBattleUIBaseView.cs`

## 概述

`MissionBattleUIBaseView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionBattleUIBaseView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsViewCreated` | `public bool IsViewCreated { get; }` |

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 「mission screen initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBattleUIBaseView 实例
MissionBattleUIBaseView missionBattleUIBaseView = ...;
missionBattleUIBaseView.OnMissionScreenInitialize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 「mission screen tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBattleUIBaseView 实例
MissionBattleUIBaseView missionBattleUIBaseView = ...;
missionBattleUIBaseView.OnMissionScreenTick(0);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 「mission screen finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBattleUIBaseView 实例
MissionBattleUIBaseView missionBattleUIBaseView = ...;
missionBattleUIBaseView.OnMissionScreenFinalize();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionBattleUIBaseView instance = ...;
```

## 参见

- [本区域目录](../)