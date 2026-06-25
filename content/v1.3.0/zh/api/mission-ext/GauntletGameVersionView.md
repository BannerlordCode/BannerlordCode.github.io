---
title: "GauntletGameVersionView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletGameVersionView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletGameVersionView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletGameVersionView : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletGameVersionView.cs`

## 概述

`GauntletGameVersionView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletGameVersionView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static GauntletGameVersionView Current { get; }` |

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Refresh
`public static void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### AddModuleVersionInfo
`public static void AddModuleVersionInfo(string title, string versionStr)`

**用途 / Purpose:** 向当前集合/状态中添加 `module version info`。

### RemoveModuleVersionInfo
`public static void RemoveModuleVersionInfo(string title)`

**用途 / Purpose:** 从当前集合/状态中移除 `module version info`。

## 使用示例

```csharp
var view = new GauntletGameVersionView();
```

## 参见

- [完整类目录](../catalog)