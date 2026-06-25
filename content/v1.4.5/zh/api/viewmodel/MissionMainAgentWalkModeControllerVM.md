---
title: "MissionMainAgentWalkModeControllerVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMainAgentWalkModeControllerVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMainAgentWalkModeControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentWalkModeControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode/MissionMainAgentWalkModeControllerVM.cs`

## 概述

`MissionMainAgentWalkModeControllerVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ControlModes` | `public MBBindingList<WalkModeItemVM> ControlModes { get; set; }` |
| `LastUsedItem` | `public WalkModeItemVM LastUsedItem { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |

## 主要方法

### GetIsWalkModeActivatedDelegate
`public delegate bool GetIsWalkModeActivatedDelegate()`

**用途 / Purpose:** 获取 `is walk mode activated delegate` 的当前值。

### SetIsWalkModeActivatedDelegate
`public delegate void SetIsWalkModeActivatedDelegate(bool value)`

**用途 / Purpose:** 设置 `is walk mode activated delegate` 的值或状态。

### GetCanChangeWalkModeActivatedDelegate
`public delegate bool GetCanChangeWalkModeActivatedDelegate()`

**用途 / Purpose:** 获取 `can change walk mode activated delegate` 的当前值。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### AddWalkMode
`public void AddWalkMode(string typeId, TextObject name, GetIsWalkModeActivatedDelegate getIsActive, SetIsWalkModeActivatedDelegate setIsActive, GetCanChangeWalkModeActivatedDelegate canChangeActive, HotKey hotKey, bool isHotkeyConsoleOnly)`

**用途 / Purpose:** 向当前集合/状态中添加 `walk mode`。

### AddWalkMode
`public void AddWalkMode(string typeId, TextObject name, GetIsWalkModeActivatedDelegate getIsActive, SetIsWalkModeActivatedDelegate setIsActive, GetCanChangeWalkModeActivatedDelegate canChangeActive, GameKey hotKey, bool isHotkeyConsoleOnly)`

**用途 / Purpose:** 向当前集合/状态中添加 `walk mode`。

### SetEnabled
`public void SetEnabled(bool isEnabled)`

**用途 / Purpose:** 设置 `enabled` 的值或状态。

## 使用示例

```csharp
var value = new MissionMainAgentWalkModeControllerVM();
value.GetIsWalkModeActivatedDelegate();
```

## 参见

- [完整类目录](../catalog)