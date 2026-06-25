---
title: "GauntletInformationView"
description: "GauntletInformationView 的自动生成类参考。"
---
# GauntletInformationView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletInformationView : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletInformationView.cs`

## 概述

`GauntletInformationView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletInformationView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
GauntletInformationView.Initialize();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
GauntletInformationView view = ...;
```

## 参见

- [本区域目录](../)