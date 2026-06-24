<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LoadingWindow`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LoadingWindow

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** `public static class LoadingWindow`
**领域:** engine

## 概述

`LoadingWindow` 位于 `TaleWorlds.Engine`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
LoadingWindow.Destroy();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
