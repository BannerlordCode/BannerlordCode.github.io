---
title: "CustomGameManager"
description: "CustomGameManager 的自动生成类参考。"
---
# CustomGameManager

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomGameManager : MBGameManager`
**Base:** `MBGameManager`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomGameManager.cs`

## 概述

`CustomGameManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CustomGameManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnAfterCampaignStart
`public override void OnAfterCampaignStart(Game game)`

**用途 / Purpose:** **用途 / Purpose:** 在 after campaign start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CustomGameManager 实例
CustomGameManager customGameManager = ...;
customGameManager.OnAfterCampaignStart(game);
```

### OnLoadFinished
`public override void OnLoadFinished()`

**用途 / Purpose:** **用途 / Purpose:** 在 load finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CustomGameManager 实例
CustomGameManager customGameManager = ...;
customGameManager.OnLoadFinished();
```

## 使用示例

```csharp
var manager = CustomGameManager.Current;
```

## 参见

- [本区域目录](../)