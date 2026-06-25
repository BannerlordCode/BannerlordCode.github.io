---
title: "GauntletDefaultLoadingWindowManager"
description: "GauntletDefaultLoadingWindowManager 的自动生成类参考。"
---
# GauntletDefaultLoadingWindowManager

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletDefaultLoadingWindowManager : GlobalLayer, ILoadingWindowManager`
**Base:** `GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletDefaultLoadingWindowManager.cs`

## 概述

`GauntletDefaultLoadingWindowManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `GauntletDefaultLoadingWindowManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetCurrentModeIsMultiplayer
`public void SetCurrentModeIsMultiplayer(bool isMultiplayer)`

**用途 / Purpose:** 为 「current mode is multiplayer」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GauntletDefaultLoadingWindowManager 实例
GauntletDefaultLoadingWindowManager gauntletDefaultLoadingWindowManager = ...;
gauntletDefaultLoadingWindowManager.SetCurrentModeIsMultiplayer(false);
```

## 使用示例

```csharp
var manager = GauntletDefaultLoadingWindowManager.Current;
```

## 参见

- [本区域目录](../)