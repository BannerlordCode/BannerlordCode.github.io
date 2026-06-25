---
title: "VisualTrackerManager"
description: "VisualTrackerManager 的自动生成类参考。"
---
# VisualTrackerManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VisualTrackerManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/VisualTrackerManager.cs`

## 概述

`VisualTrackerManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `VisualTrackerManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TrackedObjectsVersion` | `public int TrackedObjectsVersion { get; }` |

## 主要方法

### RegisterObject
`public void RegisterObject(ITrackableCampaignObject trackableObject)`

**用途 / Purpose:** 将「object」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 VisualTrackerManager 实例
VisualTrackerManager visualTrackerManager = ...;
visualTrackerManager.RegisterObject(trackableObject);
```

### CheckTracked
`public bool CheckTracked(ITrackableBase trackableObject)`

**用途 / Purpose:** 检查「tracked」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 VisualTrackerManager 实例
VisualTrackerManager visualTrackerManager = ...;
var result = visualTrackerManager.CheckTracked(trackableObject);
```

### RemoveTrackedObject
`public void RemoveTrackedObject(ITrackableBase trackableObject, bool forceRemove = false)`

**用途 / Purpose:** 从当前容器或状态中移除 「tracked object」。

```csharp
// 先通过子系统 API 拿到 VisualTrackerManager 实例
VisualTrackerManager visualTrackerManager = ...;
visualTrackerManager.RemoveTrackedObject(trackableObject, false);
```

### SetDirty
`public void SetDirty()`

**用途 / Purpose:** 为 「dirty」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 VisualTrackerManager 实例
VisualTrackerManager visualTrackerManager = ...;
visualTrackerManager.SetDirty();
```

## 使用示例

```csharp
var manager = VisualTrackerManager.Current;
```

## 参见

- [本区域目录](../)