---
title: "GauntletMapConversationBarterView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletMapConversationBarterView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMapConversationBarterView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapConversationBarterView`
**Base:** 无
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapConversationBarterView.cs`

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

**用途 / Purpose:** 当 `barter active state changed` 事件触发时调用此方法。

### CreateBarterView
`public void CreateBarterView(BarterData args)`

**用途 / Purpose:** 创建一个 `barter view` 实例或对象。

### DestroyBarterView
`public void DestroyBarterView()`

**用途 / Purpose:** 处理 `destroy barter view` 相关逻辑。

### Activate
`public void Activate()`

**用途 / Purpose:** 处理 `activate` 相关逻辑。

### Deactivate
`public void Deactivate()`

**用途 / Purpose:** 处理 `deactivate` 相关逻辑。

### TickInput
`public void TickInput()`

**用途 / Purpose:** 处理 `tick input` 相关逻辑。

## 使用示例

```csharp
var view = new GauntletMapConversationBarterView();
```

## 参见

- [完整类目录](../catalog)