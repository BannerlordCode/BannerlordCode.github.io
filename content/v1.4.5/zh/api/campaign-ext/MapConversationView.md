---
title: "MapConversationView"
description: "MapConversationView 的自动生成类参考。"
---
# MapConversationView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapConversationView : MapView`
**Base:** `MapView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapConversationView.cs`

## 概述

`MapConversationView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MapConversationView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ConversationTableau` | `public MapConversationTableau ConversationTableau { get; }` |
| `IsConversationActive` | `public bool IsConversationActive { get; set; }` |

## 主要方法

### ConversationPlayArgs
`public struct ConversationPlayArgs(string idleActionId, string idleFaceAnimId, string reactionId, string reactionFaceAnimId, string soundPath)`

**用途 / Purpose:** 调用 ConversationPlayArgs 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapConversationView 实例
MapConversationView mapConversationView = ...;
var result = mapConversationView.ConversationPlayArgs("example", "example", "example", "example", "example");
```

### SetConversationTableau
`public void SetConversationTableau(MapConversationTableau tableau)`

**用途 / Purpose:** 为 conversation tableau 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapConversationView 实例
MapConversationView mapConversationView = ...;
mapConversationView.SetConversationTableau(tableau);
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MapConversationView 实例
MapConversationView mapConversationView = ...;
mapConversationView.Tick(0);
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapConversationView 实例
MapConversationView mapConversationView = ...;
mapConversationView.OnFinalize();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MapConversationView view = ...;
```

## 参见

- [本区域目录](../)