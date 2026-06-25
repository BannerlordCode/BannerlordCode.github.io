---
title: "ReplayCaptureLogic"
description: "ReplayCaptureLogic 的自动生成类参考。"
---
# ReplayCaptureLogic

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReplayCaptureLogic : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/ReplayCaptureLogic.cs`

## 概述

`ReplayCaptureLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `ReplayCaptureLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ReplayCaptureLogic 实例
ReplayCaptureLogic replayCaptureLogic = ...;
replayCaptureLogic.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ReplayCaptureLogic 实例
ReplayCaptureLogic replayCaptureLogic = ...;
replayCaptureLogic.OnMissionTick(0);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<ReplayCaptureLogic>();
```

## 参见

- [本区域目录](../)