---
title: "ApplicationPlatform"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ApplicationPlatform`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ApplicationPlatform

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** `public static class ApplicationPlatform`
**领域:** core-extra

## 概述

`ApplicationPlatform` 位于 `TaleWorlds.Library`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentEngine` | `public static EngineType CurrentEngine { get; }` |
| `CurrentPlatform` | `public static Platform CurrentPlatform { get; }` |
| `CurrentRuntimeLibrary` | `public static Runtime CurrentRuntimeLibrary { get; }` |

## 主要方法

### Initialize
`public static void Initialize(EngineType engineType, Platform currentPlatform, Runtime currentRuntimeLibrary)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### IsPlatformWindows
`public static bool IsPlatformWindows()`

**用途 / Purpose:** 处理 `is platform windows` 相关逻辑。

### IsPlatformConsole
`public static bool IsPlatformConsole()`

**用途 / Purpose:** 处理 `is platform console` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
ApplicationPlatform.Initialize(engineType, currentPlatform, currentRuntimeLibrary);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
