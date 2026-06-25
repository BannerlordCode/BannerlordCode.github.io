---
title: "DLCInstallationQueryView"
description: "DLCInstallationQueryView 的自动生成类参考。"
---
# DLCInstallationQueryView

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DLCInstallationQueryView`
**Base:** 无
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/DLCInstallationQueryView.cs`

## 概述

`DLCInstallationQueryView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `DLCInstallationQueryView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 DLCInstallationQueryView 实例
DLCInstallationQueryView dLCInstallationQueryView = ...;
dLCInstallationQueryView.Initialize();
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DLCInstallationQueryView 实例
DLCInstallationQueryView dLCInstallationQueryView = ...;
dLCInstallationQueryView.OnFinalize();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
DLCInstallationQueryView view = ...;
```

## 参见

- [本区域目录](../)