---
title: "GauntletSceneNotification"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletSceneNotification`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletSceneNotification

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.SceneNotification
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletSceneNotification : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/SceneNotification/GauntletSceneNotification.cs`

## 概述

`GauntletSceneNotification` 位于 `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static GauntletSceneNotification Current { get; }` |
| `IsActive` | `public bool IsActive { get; }` |

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### RegisterContextProvider
`public void RegisterContextProvider(ISceneNotificationContextProvider provider)`

**用途 / Purpose:** 处理 `register context provider` 相关逻辑。

### RemoveContextProvider
`public bool RemoveContextProvider(ISceneNotificationContextProvider provider)`

**用途 / Purpose:** 从当前集合/状态中移除 `context provider`。

## 使用示例

```csharp
GauntletSceneNotification.Initialize();
```

## 参见

- [完整类目录](../catalog)