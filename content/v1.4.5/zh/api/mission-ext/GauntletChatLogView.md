---
title: "GauntletChatLogView"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletChatLogView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletChatLogView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletChatLogView : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletChatLogView.cs`

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

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### SetCanFocusWhileInMission
`public void SetCanFocusWhileInMission(bool canFocusInMission)`

**用途 / Purpose:** 设置 `can focus while in mission` 的值或状态。

### OnSupportedFeaturesReceived
`public void OnSupportedFeaturesReceived(SupportedFeatures supportedFeatures)`

**用途 / Purpose:** 当 `supported features received` 事件触发时调用此方法。

### SetEnabled
`public void SetEnabled(bool isEnabled)`

**用途 / Purpose:** 设置 `enabled` 的值或状态。

### LoadMovie
`public void LoadMovie(bool forMultiplayer)`

**用途 / Purpose:** 加载 `movie` 数据。

## 使用示例

```csharp
var view = new GauntletChatLogView();
```

## 参见

- [完整类目录](../catalog)