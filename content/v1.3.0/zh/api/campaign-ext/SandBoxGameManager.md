---
title: "SandBoxGameManager"
description: "SandBoxGameManager 的自动生成类参考。"
---
# SandBoxGameManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class SandBoxGameManager : MBGameManager`
**Base:** `MBGameManager`
**File:** `SandBox/SandBoxGameManager.cs`

## 概述

`SandBoxGameManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `SandBoxGameManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `LoadingSavedGame` | `public bool LoadingSavedGame { get; }` |
| `MetaData` | `public MetaData MetaData { get; }` |

## 主要方法

### OnGameEnd
`public override void OnGameEnd(Game game)`

**用途 / Purpose:** 在 「game end」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxGameManager 实例
SandBoxGameManager sandBoxGameManager = ...;
sandBoxGameManager.OnGameEnd(game);
```

### OnAfterCampaignStart
`public override void OnAfterCampaignStart(Game game)`

**用途 / Purpose:** 在 「after campaign start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxGameManager 实例
SandBoxGameManager sandBoxGameManager = ...;
sandBoxGameManager.OnAfterCampaignStart(game);
```

### OnLoadFinished
`public override void OnLoadFinished()`

**用途 / Purpose:** 在 「load finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxGameManager 实例
SandBoxGameManager sandBoxGameManager = ...;
sandBoxGameManager.OnLoadFinished();
```

### CampaignCreatorDelegate
`public delegate Campaign CampaignCreatorDelegate()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SandBoxGameManager 实例
SandBoxGameManager sandBoxGameManager = ...;
var result = sandBoxGameManager.CampaignCreatorDelegate();
```

## 使用示例

```csharp
var manager = SandBoxGameManager.Current;
```

## 参见

- [本区域目录](../)