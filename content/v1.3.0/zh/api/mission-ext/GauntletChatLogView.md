---
title: "GauntletChatLogView"
description: "GauntletChatLogView 的自动生成类参考。"
---
# GauntletChatLogView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletChatLogView : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletChatLogView.cs`

## 概述

`GauntletChatLogView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `GauntletChatLogView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static GauntletChatLogView Current { get; }` |

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
GauntletChatLogView.Initialize();
```

### SetCanFocusWhileInMission
`public void SetCanFocusWhileInMission(bool canFocusInMission)`

**用途 / Purpose:** **用途 / Purpose:** 为 can focus while in mission 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GauntletChatLogView 实例
GauntletChatLogView gauntletChatLogView = ...;
gauntletChatLogView.SetCanFocusWhileInMission(false);
```

### OnSupportedFeaturesReceived
`public void OnSupportedFeaturesReceived(SupportedFeatures supportedFeatures)`

**用途 / Purpose:** **用途 / Purpose:** 在 supported features received 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletChatLogView 实例
GauntletChatLogView gauntletChatLogView = ...;
gauntletChatLogView.OnSupportedFeaturesReceived(supportedFeatures);
```

### SetEnabled
`public void SetEnabled(bool isEnabled)`

**用途 / Purpose:** **用途 / Purpose:** 为 enabled 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GauntletChatLogView 实例
GauntletChatLogView gauntletChatLogView = ...;
gauntletChatLogView.SetEnabled(false);
```

### LoadMovie
`public void LoadMovie(bool forMultiplayer)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 movie。

```csharp
// 先通过子系统 API 拿到 GauntletChatLogView 实例
GauntletChatLogView gauntletChatLogView = ...;
gauntletChatLogView.LoadMovie(false);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
GauntletChatLogView view = ...;
```

## 参见

- [本区域目录](../)