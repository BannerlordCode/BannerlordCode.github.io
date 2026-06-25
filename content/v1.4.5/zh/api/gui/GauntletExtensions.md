---
title: "GauntletExtensions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletExtensions`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletExtensions

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class GauntletExtensions`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/GauntletExtensions.cs`

## 概述

`GauntletExtensions` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetGlobalAlphaRecursively
`public static void SetGlobalAlphaRecursively(this Widget widget, float alphaFactor)`

**用途 / Purpose:** 设置 `global alpha recursively` 的值或状态。

### SetAlpha
`public static void SetAlpha(this Widget widget, float alphaFactor)`

**用途 / Purpose:** 设置 `alpha` 的值或状态。

### RegisterBrushStatesOfWidget
`public static void RegisterBrushStatesOfWidget(this Widget widget)`

**用途 / Purpose:** 处理 `register brush states of widget` 相关逻辑。

### GetFullIDPath
`public static string GetFullIDPath(this Widget widget)`

**用途 / Purpose:** 获取 `full i d path` 的当前值。

### ApplyActionForThisAndAllChildren
`public static void ApplyActionForThisAndAllChildren(this Widget widget, Action<Widget> action)`

**用途 / Purpose:** 将 `action for this and all children` 应用到当前对象。

## 使用示例

```csharp
GauntletExtensions.SetGlobalAlphaRecursively(widget, 0);
```

## 参见

- [完整类目录](../catalog)