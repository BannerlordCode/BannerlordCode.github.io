---
title: "MapAudioManager"
description: "MapAudioManager 的自动生成类参考。"
---
# MapAudioManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `internal class MapAudioManager : CampaignEntityVisualComponent`
**Base:** `CampaignEntityVisualComponent`
**File:** `SandBox.View/Map/Managers/MapAudioManager.cs`

## 概述

`MapAudioManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MapAudioManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnVisualTick
`public override void OnVisualTick(MapScreen screen, float realDt, float dt)`

**用途 / Purpose:** 在 「visual tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapAudioManager 实例
MapAudioManager mapAudioManager = ...;
mapAudioManager.OnVisualTick(screen, 0, 0);
```

## 使用示例

```csharp
var manager = MapAudioManager.Current;
```

## 参见

- [本区域目录](../../)