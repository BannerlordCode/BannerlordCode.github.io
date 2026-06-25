---
title: "GauntletMapConversationBarterView"
description: "GauntletMapConversationBarterView 的自动生成类参考。"
---
# GauntletMapConversationBarterView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapConversationBarterView`
**Base:** 无
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapConversationBarterView.cs`

## 概述

`GauntletMapConversationBarterView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletMapConversationBarterView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsCreated` | `public bool IsCreated { get; }` |
| `IsActive` | `public bool IsActive { get; }` |

## 主要方法

### OnBarterActiveStateChanged
`public delegate void OnBarterActiveStateChanged(bool isBarterActive)`

**用途 / Purpose:** 在 「barter active state changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletMapConversationBarterView 实例
GauntletMapConversationBarterView gauntletMapConversationBarterView = ...;
gauntletMapConversationBarterView.OnBarterActiveStateChanged(false);
```

### CreateBarterView
`public void CreateBarterView(BarterData args)`

**用途 / Purpose:** 构建一个新的 「barter view」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 GauntletMapConversationBarterView 实例
GauntletMapConversationBarterView gauntletMapConversationBarterView = ...;
gauntletMapConversationBarterView.CreateBarterView(args);
```

### DestroyBarterView
`public void DestroyBarterView()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GauntletMapConversationBarterView 实例
GauntletMapConversationBarterView gauntletMapConversationBarterView = ...;
gauntletMapConversationBarterView.DestroyBarterView();
```

### Activate
`public void Activate()`

**用途 / Purpose:** 激活当前对象对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 GauntletMapConversationBarterView 实例
GauntletMapConversationBarterView gauntletMapConversationBarterView = ...;
gauntletMapConversationBarterView.Activate();
```

### Deactivate
`public void Deactivate()`

**用途 / Purpose:** 停用当前对象对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 GauntletMapConversationBarterView 实例
GauntletMapConversationBarterView gauntletMapConversationBarterView = ...;
gauntletMapConversationBarterView.Deactivate();
```

### TickInput
`public void TickInput()`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「input」的状态。

```csharp
// 先通过子系统 API 拿到 GauntletMapConversationBarterView 实例
GauntletMapConversationBarterView gauntletMapConversationBarterView = ...;
gauntletMapConversationBarterView.TickInput();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
GauntletMapConversationBarterView view = ...;
```

## 参见

- [本区域目录](../)