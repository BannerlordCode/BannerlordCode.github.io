---
title: "MissionSpectatorControlVM"
description: "MissionSpectatorControlVM 的自动生成类参考。"
---
# MissionSpectatorControlVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSpectatorControlVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/MissionSpectatorControlVM.cs`

## 概述

`MissionSpectatorControlVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `PrevCharacterText` | `public string PrevCharacterText { get; set; }` |
| `NextCharacterText` | `public string NextCharacterText { get; set; }` |
| `TakeControlText` | `public string TakeControlText { get; set; }` |
| `StatusText` | `public string StatusText { get; set; }` |
| `IsTakeControlRelevant` | `public bool IsTakeControlRelevant { get; set; }` |
| `IsTakeControlEnabled` | `public bool IsTakeControlEnabled { get; set; }` |
| `SpectatedAgentName` | `public string SpectatedAgentName { get; set; }` |
| `PrevCharacterKey` | `public InputKeyItemVM PrevCharacterKey { get; set; }` |
| `NextCharacterKey` | `public InputKeyItemVM NextCharacterKey { get; set; }` |
| `TakeControlKey` | `public InputKeyItemVM TakeControlKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionSpectatorControlVM 实例
MissionSpectatorControlVM missionSpectatorControlVM = ...;
missionSpectatorControlVM.RefreshValues();
```

### OnSpectatedAgentFocusIn
`public void OnSpectatedAgentFocusIn(Agent followedAgent)`

**用途 / Purpose:** 在 spectated agent focus in 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionSpectatorControlVM 实例
MissionSpectatorControlVM missionSpectatorControlVM = ...;
missionSpectatorControlVM.OnSpectatedAgentFocusIn(followedAgent);
```

### OnSpectatedAgentFocusOut
`public void OnSpectatedAgentFocusOut(Agent followedAgent)`

**用途 / Purpose:** 在 spectated agent focus out 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionSpectatorControlVM 实例
MissionSpectatorControlVM missionSpectatorControlVM = ...;
missionSpectatorControlVM.OnSpectatedAgentFocusOut(followedAgent);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionSpectatorControlVM 实例
MissionSpectatorControlVM missionSpectatorControlVM = ...;
missionSpectatorControlVM.OnFinalize();
```

### SetMainAgentStatus
`public void SetMainAgentStatus(bool isDead)`

**用途 / Purpose:** 为 main agent status 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionSpectatorControlVM 实例
MissionSpectatorControlVM missionSpectatorControlVM = ...;
missionSpectatorControlVM.SetMainAgentStatus(false);
```

### SetPrevCharacterInputKey
`public void SetPrevCharacterInputKey(GameKey gameKey)`

**用途 / Purpose:** 为 prev character input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionSpectatorControlVM 实例
MissionSpectatorControlVM missionSpectatorControlVM = ...;
missionSpectatorControlVM.SetPrevCharacterInputKey(gameKey);
```

### SetNextCharacterInputKey
`public void SetNextCharacterInputKey(GameKey gameKey)`

**用途 / Purpose:** 为 next character input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionSpectatorControlVM 实例
MissionSpectatorControlVM missionSpectatorControlVM = ...;
missionSpectatorControlVM.SetNextCharacterInputKey(gameKey);
```

### SetTakeControlInputKey
`public void SetTakeControlInputKey(GameKey gameKey)`

**用途 / Purpose:** 为 take control input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionSpectatorControlVM 实例
MissionSpectatorControlVM missionSpectatorControlVM = ...;
missionSpectatorControlVM.SetTakeControlInputKey(gameKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionSpectatorControlVM missionSpectatorControlVM = ...;
missionSpectatorControlVM.RefreshValues();
```

## 参见

- [本区域目录](../)