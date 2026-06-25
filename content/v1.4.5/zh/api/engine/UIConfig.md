---
title: "UIConfig"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UIConfig`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# UIConfig

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public static class UIConfig`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine.GauntletUI/TaleWorlds.Engine.GauntletUI/UIConfig.cs`

## 概述

`UIConfig` 位于 `TaleWorlds.Engine.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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
UIConfig.GetIsUsingGeneratedPrefabs();
```

## 参见

- [完整类目录](../catalog)