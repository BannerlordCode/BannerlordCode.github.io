---
title: "PathTracker"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PathTracker`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PathTracker

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PathTracker`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/PathTracker.cs`

## 概述

`PathTracker` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TotalDistanceTraveled` | `public float TotalDistanceTraveled { get; set; }` |
| `HasChanged` | `public bool HasChanged { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `HasReachedEnd` | `public bool HasReachedEnd { get; }` |
| `PathTraveledPercentage` | `public float PathTraveledPercentage { get; }` |
| `CurrentFrame` | `public MatrixFrame CurrentFrame { get; }` |

## 主要方法

### UpdateVersion
`public void UpdateVersion()`

**用途 / Purpose:** 更新 `version` 的状态或数据。

### PathExists
`public bool PathExists()`

**用途 / Purpose:** 处理 `path exists` 相关逻辑。

### Advance
`public void Advance(float deltaDistance)`

**用途 / Purpose:** 处理 `advance` 相关逻辑。

### GetPathLength
`public float GetPathLength()`

**用途 / Purpose:** 获取 `path length` 的当前值。

### CurrentFrameAndColor
`public void CurrentFrameAndColor(out MatrixFrame frame, out Vec3 color)`

**用途 / Purpose:** 处理 `current frame and color` 相关逻辑。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

## 使用示例

```csharp
var value = new PathTracker();
value.UpdateVersion();
```

## 参见

- [完整类目录](../catalog)