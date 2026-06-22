<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VisualTrackerManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualTrackerManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VisualTrackerManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/VisualTrackerManager.cs`

## 概述

`VisualTrackerManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `TrackedObjectsVersion` | `public int TrackedObjectsVersion { get; }` |

## 主要方法

### RegisterObject
```csharp
public void RegisterObject(ITrackableCampaignObject trackableObject)
```

### CheckTracked
```csharp
public bool CheckTracked(ITrackableBase trackableObject)
```

### RemoveTrackedObject
```csharp
public void RemoveTrackedObject(ITrackableBase trackableObject, bool forceRemove = false)
```

### SetDirty
```csharp
public void SetDirty()
```

## 使用示例

```csharp
// VisualTrackerManager (Manager) 的典型用法
VisualTrackerManager.Current;
```

## 参见

- [完整类目录](../catalog)