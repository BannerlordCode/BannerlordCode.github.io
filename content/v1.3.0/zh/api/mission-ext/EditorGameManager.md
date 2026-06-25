---
title: "EditorGameManager"
description: "EditorGameManager 的自动生成类参考。"
---
# EditorGameManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EditorGameManager : MBGameManager`
**Base:** `MBGameManager`
**File:** `TaleWorlds.MountAndBlade/EditorGameManager.cs`

## 概述

`EditorGameManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `EditorGameManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnAfterCampaignStart
`public override void OnAfterCampaignStart(Game game)`

**用途 / Purpose:** 在 after campaign start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EditorGameManager 实例
EditorGameManager editorGameManager = ...;
editorGameManager.OnAfterCampaignStart(game);
```

### OnLoadFinished
`public override void OnLoadFinished()`

**用途 / Purpose:** 在 load finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EditorGameManager 实例
EditorGameManager editorGameManager = ...;
editorGameManager.OnLoadFinished();
```

## 使用示例

```csharp
var manager = EditorGameManager.Current;
```

## 参见

- [本区域目录](../)