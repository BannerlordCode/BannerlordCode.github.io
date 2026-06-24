<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LoadingWindow`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LoadingWindow

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class LoadingWindow`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/LoadingWindow.cs`

## 概述

`LoadingWindow` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsLoadingWindowActive` | `public static bool IsLoadingWindowActive { get; }` |
| `LoadingWindowManager` | `public static ILoadingWindowManager LoadingWindowManager { get; }` |

## 主要方法

### Destroy
`public static void Destroy()`

**用途 / Purpose:** 处理 `destroy` 相关逻辑。

### DisableGlobalLoadingWindow
`public static void DisableGlobalLoadingWindow()`

**用途 / Purpose:** 处理 `disable global loading window` 相关逻辑。

### EnableGlobalLoadingWindow
`public static void EnableGlobalLoadingWindow()`

**用途 / Purpose:** 处理 `enable global loading window` 相关逻辑。

### SetCurrentModeIsMultiplayer
`public static void SetCurrentModeIsMultiplayer(bool isMultiplayer)`

**用途 / Purpose:** 设置 `current mode is multiplayer` 的值或状态。

## 使用示例

```csharp
LoadingWindow.Destroy();
```

## 参见

- [完整类目录](../catalog)