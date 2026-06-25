---
title: "GauntletGameVersionView"
description: "GauntletGameVersionView 的自动生成类参考。"
---
# GauntletGameVersionView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletGameVersionView : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletGameVersionView.cs`

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

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 静态调用，不需要实例
GauntletGameVersionView.Initialize();
```

### Refresh
`public static void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 静态调用，不需要实例
GauntletGameVersionView.Refresh();
```

### AddModuleVersionInfo
`public static void AddModuleVersionInfo(string title, string versionStr)`

**用途 / Purpose:** 将 module version info 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
GauntletGameVersionView.AddModuleVersionInfo("example", "example");
```

### RemoveModuleVersionInfo
`public static void RemoveModuleVersionInfo(string title)`

**用途 / Purpose:** 从当前容器或状态中移除 module version info。

```csharp
// 静态调用，不需要实例
GauntletGameVersionView.RemoveModuleVersionInfo("example");
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
GauntletGameVersionView view = ...;
```

## 参见

- [本区域目录](../)