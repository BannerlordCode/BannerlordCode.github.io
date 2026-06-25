---
title: "MissionMainAgentCheerBarkControllerVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMainAgentCheerBarkControllerVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMainAgentCheerBarkControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentCheerBarkControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/MissionMainAgentCheerBarkControllerVM.cs`

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

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SelectItem
`public void SelectItem(int itemIndex, int subNodeIndex = -1)`

**用途 / Purpose:** 处理 `select item` 相关逻辑。

### ExecuteActivate
`public void ExecuteActivate()`

**用途 / Purpose:** 执行 `activate` 操作或流程。

### ExecuteDeactivate
`public void ExecuteDeactivate(bool applySelection)`

**用途 / Purpose:** 执行 `deactivate` 操作或流程。

### OnNodeFocused
`public void OnNodeFocused(CheerBarkNodeItemVM focusedNode)`

**用途 / Purpose:** 当 `node focused` 事件触发时调用此方法。

### OnNodeTooltipToggled
`public void OnNodeTooltipToggled(CheerBarkNodeItemVM node)`

**用途 / Purpose:** 当 `node tooltip toggled` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionMainAgentCheerBarkControllerVM();
value.OnFinalize();
```

## 参见

- [完整类目录](../catalog)