---
title: "GauntletFullScreenNoticeView"
description: "GauntletFullScreenNoticeView 的自动生成类参考。"
---
# GauntletFullScreenNoticeView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletFullScreenNoticeView : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletFullScreenNoticeView.cs`

## 概述

`GauntletFullScreenNoticeView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletFullScreenNoticeView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static GauntletFullScreenNoticeView Current { get; }` |

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 静态调用，不需要实例
GauntletFullScreenNoticeView.Initialize();
```

### SkipNotice
`public static void SkipNotice()`

**用途 / Purpose:** 调用 SkipNotice 对应的操作。

```csharp
// 静态调用，不需要实例
GauntletFullScreenNoticeView.SkipNotice();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
GauntletFullScreenNoticeView view = ...;
```

## 参见

- [本区域目录](../)