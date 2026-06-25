---
title: "MissionMainAgentCheerBarkControllerVM"
description: "MissionMainAgentCheerBarkControllerVM 的自动生成类参考。"
---
# MissionMainAgentCheerBarkControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentCheerBarkControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentCheerBarkControllerVM.cs`

## 概述

`MissionMainAgentCheerBarkControllerVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `DisabledReasonText` | `public string DisabledReasonText { get; set; }` |
| `SelectedNodeText` | `public string SelectedNodeText { get; set; }` |
| `IsNodesCategories` | `public bool IsNodesCategories { get; set; }` |
| `Nodes` | `public MBBindingList<CheerBarkNodeItemVM> Nodes { get; set; }` |

## 主要方法

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentCheerBarkControllerVM 实例
MissionMainAgentCheerBarkControllerVM missionMainAgentCheerBarkControllerVM = ...;
missionMainAgentCheerBarkControllerVM.OnFinalize();
```

### SelectItem
`public void SelectItem(int itemIndex, int subNodeIndex = -1)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentCheerBarkControllerVM 实例
MissionMainAgentCheerBarkControllerVM missionMainAgentCheerBarkControllerVM = ...;
missionMainAgentCheerBarkControllerVM.SelectItem(0, 0);
```

### ExecuteActivate
`public void ExecuteActivate()`

**用途 / Purpose:** 执行 「activate」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentCheerBarkControllerVM 实例
MissionMainAgentCheerBarkControllerVM missionMainAgentCheerBarkControllerVM = ...;
missionMainAgentCheerBarkControllerVM.ExecuteActivate();
```

### ExecuteDeactivate
`public void ExecuteDeactivate(bool applySelection)`

**用途 / Purpose:** 执行 「deactivate」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentCheerBarkControllerVM 实例
MissionMainAgentCheerBarkControllerVM missionMainAgentCheerBarkControllerVM = ...;
missionMainAgentCheerBarkControllerVM.ExecuteDeactivate(false);
```

### OnNodeFocused
`public void OnNodeFocused(CheerBarkNodeItemVM focusedNode)`

**用途 / Purpose:** 在 「node focused」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentCheerBarkControllerVM 实例
MissionMainAgentCheerBarkControllerVM missionMainAgentCheerBarkControllerVM = ...;
missionMainAgentCheerBarkControllerVM.OnNodeFocused(focusedNode);
```

### OnNodeTooltipToggled
`public void OnNodeTooltipToggled(CheerBarkNodeItemVM node)`

**用途 / Purpose:** 在 「node tooltip toggled」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentCheerBarkControllerVM 实例
MissionMainAgentCheerBarkControllerVM missionMainAgentCheerBarkControllerVM = ...;
missionMainAgentCheerBarkControllerVM.OnNodeTooltipToggled(node);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionMainAgentCheerBarkControllerVM missionMainAgentCheerBarkControllerVM = ...;
missionMainAgentCheerBarkControllerVM.OnFinalize();
```

## 参见

- [本区域目录](../)