---
title: "MissionMainAgentWalkModeControllerVM"
description: "MissionMainAgentWalkModeControllerVM 的自动生成类参考。"
---
# MissionMainAgentWalkModeControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentWalkModeControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode/MissionMainAgentWalkModeControllerVM.cs`

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

**用途 / Purpose:** 读取并返回当前对象中 「is walk mode activated delegate」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentWalkModeControllerVM 实例
MissionMainAgentWalkModeControllerVM missionMainAgentWalkModeControllerVM = ...;
var result = missionMainAgentWalkModeControllerVM.GetIsWalkModeActivatedDelegate();
```

### SetIsWalkModeActivatedDelegate
`public delegate void SetIsWalkModeActivatedDelegate(bool value)`

**用途 / Purpose:** 为 「is walk mode activated delegate」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentWalkModeControllerVM 实例
MissionMainAgentWalkModeControllerVM missionMainAgentWalkModeControllerVM = ...;
missionMainAgentWalkModeControllerVM.SetIsWalkModeActivatedDelegate(false);
```

### GetCanChangeWalkModeActivatedDelegate
`public delegate bool GetCanChangeWalkModeActivatedDelegate()`

**用途 / Purpose:** 读取并返回当前对象中 「can change walk mode activated delegate」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentWalkModeControllerVM 实例
MissionMainAgentWalkModeControllerVM missionMainAgentWalkModeControllerVM = ...;
var result = missionMainAgentWalkModeControllerVM.GetCanChangeWalkModeActivatedDelegate();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentWalkModeControllerVM 实例
MissionMainAgentWalkModeControllerVM missionMainAgentWalkModeControllerVM = ...;
missionMainAgentWalkModeControllerVM.OnFinalize();
```

### AddWalkMode
`public void AddWalkMode(string typeId, TextObject name, GetIsWalkModeActivatedDelegate getIsActive, SetIsWalkModeActivatedDelegate setIsActive, GetCanChangeWalkModeActivatedDelegate canChangeActive, HotKey hotKey, bool isHotkeyConsoleOnly)`

**用途 / Purpose:** 将 「walk mode」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentWalkModeControllerVM 实例
MissionMainAgentWalkModeControllerVM missionMainAgentWalkModeControllerVM = ...;
missionMainAgentWalkModeControllerVM.AddWalkMode("example", name, getIsActive, setIsActive, canChangeActive, hotKey, false);
```

### AddWalkMode
`public void AddWalkMode(string typeId, TextObject name, GetIsWalkModeActivatedDelegate getIsActive, SetIsWalkModeActivatedDelegate setIsActive, GetCanChangeWalkModeActivatedDelegate canChangeActive, GameKey hotKey, bool isHotkeyConsoleOnly)`

**用途 / Purpose:** 将 「walk mode」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentWalkModeControllerVM 实例
MissionMainAgentWalkModeControllerVM missionMainAgentWalkModeControllerVM = ...;
missionMainAgentWalkModeControllerVM.AddWalkMode("example", name, getIsActive, setIsActive, canChangeActive, hotKey, false);
```

### SetEnabled
`public void SetEnabled(bool isEnabled)`

**用途 / Purpose:** 为 「enabled」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentWalkModeControllerVM 实例
MissionMainAgentWalkModeControllerVM missionMainAgentWalkModeControllerVM = ...;
missionMainAgentWalkModeControllerVM.SetEnabled(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionMainAgentWalkModeControllerVM missionMainAgentWalkModeControllerVM = ...;
missionMainAgentWalkModeControllerVM.GetIsWalkModeActivatedDelegate();
```

## 参见

- [本区域目录](../)