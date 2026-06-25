---
title: "CapturePointVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CapturePointVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CapturePointVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CapturePointVM : CompassTargetVM`
**Base:** `CompassTargetVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions/CapturePointVM.cs`

## 概述

`CapturePointVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `FlagProgress` | `public float FlagProgress { get; set; }` |
| `IsSpawnAffectorFlag` | `public bool IsSpawnAffectorFlag { get; set; }` |
| `IsKeepFlag` | `public bool IsKeepFlag { get; set; }` |
| `RemainingRemovalTime` | `public int RemainingRemovalTime { get; set; }` |

## 主要方法

### Refresh
`public override void Refresh(float circleX, float x, float distance)`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### OnOwnerChanged
`public void OnOwnerChanged(Team newTeam)`

**用途 / Purpose:** 当 `owner changed` 事件触发时调用此方法。

### ResetFlag
`public void ResetFlag()`

**用途 / Purpose:** 将 `flag` 重置为初始状态。

## 使用示例

```csharp
var value = new CapturePointVM();
value.Refresh(0, 0, 0);
```

## 参见

- [完整类目录](../catalog)