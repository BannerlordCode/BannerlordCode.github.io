---
title: "MultiplayerAdminPanelVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerAdminPanelVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerAdminPanelVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminPanelVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel/MultiplayerAdminPanelVM.cs`

## 概述

`MultiplayerAdminPanelVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsApplyDisabled` | `public bool IsApplyDisabled { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `ApplyText` | `public string ApplyText { get; set; }` |
| `StartMissionText` | `public string StartMissionText { get; set; }` |
| `ApplyDisabledHint` | `public HintViewModel ApplyDisabledHint { get; set; }` |
| `OptionGroups` | `public MBBindingList<MultiplayerAdminPanelOptionGroupVM> OptionGroups { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### ExecuteApplyChanges
`public void ExecuteApplyChanges()`

**用途 / Purpose:** 执行 `apply changes` 操作或流程。

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

## 使用示例

```csharp
var value = new MultiplayerAdminPanelVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)