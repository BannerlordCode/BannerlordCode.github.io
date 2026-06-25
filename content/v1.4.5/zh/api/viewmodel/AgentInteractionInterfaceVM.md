---
title: "AgentInteractionInterfaceVM"
description: "AgentInteractionInterfaceVM 的自动生成类参考。"
---
# AgentInteractionInterfaceVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentInteractionInterfaceVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction/AgentInteractionInterfaceVM.cs`

## 概述

`AgentInteractionInterfaceVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TargetHealth` | `public int TargetHealth { get; set; }` |
| `ShowHealthBar` | `public bool ShowHealthBar { get; set; }` |
| `PrimaryInteractionMessages` | `public MBBindingList<MissionPrimaryInteractionItemVM> PrimaryInteractionMessages { get; set; }` |
| `SecondaryInteractionMessages` | `public MBBindingList<MissionInteractionItemBaseVM> SecondaryInteractionMessages { get; set; }` |
| `BackgroundColor` | `public string BackgroundColor { get; set; }` |
| `TextColor` | `public string TextColor { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `HasSecondaryMessages` | `public bool HasSecondaryMessages { get; set; }` |
| `DisplayInteractionText` | `public bool DisplayInteractionText { get; set; }` |
| `ForcedInteractionMessages` | `public MBBindingList<MissionPrimaryInteractionItemVM> ForcedInteractionMessages { get; set; }` |
| `HasForcedMessages` | `public bool HasForcedMessages { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 AgentInteractionInterfaceVM 实例
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
agentInteractionInterfaceVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentInteractionInterfaceVM 实例
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
agentInteractionInterfaceVM.OnFinalize();
```

### OnFocusedHealthChanged
`public void OnFocusedHealthChanged(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull)`

**用途 / Purpose:** **用途 / Purpose:** 在 focused health changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentInteractionInterfaceVM 实例
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
agentInteractionInterfaceVM.OnFocusedHealthChanged(focusable, 0, false);
```

### OnActiveMissionHintChanged
`public void OnActiveMissionHintChanged(MissionHint previousHint, MissionHint newHint)`

**用途 / Purpose:** **用途 / Purpose:** 在 active mission hint changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentInteractionInterfaceVM 实例
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
agentInteractionInterfaceVM.OnActiveMissionHintChanged(previousHint, newHint);
```

### AddSecondaryMessage
`public void AddSecondaryMessage(MissionInteractionItemBaseVM message)`

**用途 / Purpose:** **用途 / Purpose:** 将 secondary message 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 AgentInteractionInterfaceVM 实例
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
agentInteractionInterfaceVM.AddSecondaryMessage(message);
```

### RemoveSecondaryMessage
`public bool RemoveSecondaryMessage(MissionInteractionItemBaseVM message)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 secondary message。

```csharp
// 先通过子系统 API 拿到 AgentInteractionInterfaceVM 实例
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
var result = agentInteractionInterfaceVM.RemoveSecondaryMessage(message);
```

### HasSecondaryInteractionMessage
`public bool HasSecondaryInteractionMessage(MissionInteractionItemBaseVM message)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 secondary interaction message。

```csharp
// 先通过子系统 API 拿到 AgentInteractionInterfaceVM 实例
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
var result = agentInteractionInterfaceVM.HasSecondaryInteractionMessage(message);
```

### ResetFocus
`public void ResetFocus()`

**用途 / Purpose:** **用途 / Purpose:** 将 focus 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 AgentInteractionInterfaceVM 实例
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
agentInteractionInterfaceVM.ResetFocus();
```

### SetForcedInteractionTexts
`public void SetForcedInteractionTexts(TextObject text1, bool isDisabled1, TextObject text2, bool isDisabled2)`

**用途 / Purpose:** **用途 / Purpose:** 为 forced interaction texts 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentInteractionInterfaceVM 实例
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
agentInteractionInterfaceVM.SetForcedInteractionTexts(text1, false, text2, false);
```

### ClearForcedInteractionTexts
`public void ClearForcedInteractionTexts()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的forced interaction texts。

```csharp
// 先通过子系统 API 拿到 AgentInteractionInterfaceVM 实例
AgentInteractionInterfaceVM agentInteractionInterfaceVM = ...;
agentInteractionInterfaceVM.ClearForcedInteractionTexts();
```

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IAgentInteractionInterfaceVM service = ...;
```

## 参见

- [本区域目录](../)