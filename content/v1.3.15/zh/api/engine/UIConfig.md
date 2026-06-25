---
title: "UIConfig"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UIConfig`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UIConfig

**命名空间:** TaleWorlds.Engine.GauntletUI
**模块:** TaleWorlds.Engine
**类型:** `public static class UIConfig`
**领域:** engine

## 概述

`UIConfig` 位于 `TaleWorlds.Engine.GauntletUI`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Engine.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DoNotUseGeneratedPrefabs` | `public static bool DoNotUseGeneratedPrefabs { get; set; }` |
| `DebugModeEnabled` | `public static bool DebugModeEnabled { get; set; }` |

## 主要方法

### GetIsUsingGeneratedPrefabs
`public static bool GetIsUsingGeneratedPrefabs()`

**用途 / Purpose:** 获取 `is using generated prefabs` 的当前值。

### GetIsHotReloadEnabled
`public static bool GetIsHotReloadEnabled()`

**用途 / Purpose:** 获取 `is hot reload enabled` 的当前值。

### SetDebugMode
`public static string SetDebugMode(List<string> args)`

**用途 / Purpose:** 设置 `debug mode` 的值或状态。

### SetUsingGeneratedPrefabs
`public static string SetUsingGeneratedPrefabs(List<string> args)`

**用途 / Purpose:** 设置 `using generated prefabs` 的值或状态。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
UIConfig.GetIsUsingGeneratedPrefabs();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
