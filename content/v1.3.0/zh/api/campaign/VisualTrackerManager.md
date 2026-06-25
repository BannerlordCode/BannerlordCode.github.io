---
title: "VisualTrackerManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VisualTrackerManager`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `register object` 相关逻辑。

### CheckTracked
`public bool CheckTracked(ITrackableBase trackableObject)`

**用途 / Purpose:** 处理 `check tracked` 相关逻辑。

### RemoveTrackedObject
`public void RemoveTrackedObject(ITrackableBase trackableObject, bool forceRemove = false)`

**用途 / Purpose:** 从当前集合/状态中移除 `tracked object`。

### SetDirty
`public void SetDirty()`

**用途 / Purpose:** 设置 `dirty` 的值或状态。

## 使用示例

```csharp
var manager = VisualTrackerManager.Current;
```

## 参见

- [完整类目录](../catalog)