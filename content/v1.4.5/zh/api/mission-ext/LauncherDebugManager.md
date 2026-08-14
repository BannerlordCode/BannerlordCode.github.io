---
title: "LauncherDebugManager"
description: "LauncherDebugManager 的自动生成类参考。"
---
# LauncherDebugManager

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherDebugManager : IDebugManager`
**Base:** `IDebugManager`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherDebugManager.cs`

## 概述

`LauncherDebugManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `LauncherDebugManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LauncherDebugManager 实例
LauncherDebugManager launcherDebugManager = ...;
launcherDebugManager.OnFinalize();
```

## 使用示例

```csharp
var manager = LauncherDebugManager.Current;
```

## 参见

- [本区域目录](../)