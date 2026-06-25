---
title: "ClanCardSelectionPopupVM"
description: "ClanCardSelectionPopupVM 的自动生成类参考。"
---
# ClanCardSelectionPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanCardSelectionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupVM.cs`

## 概述

`ClanCardSelectionPopupVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Items` | `public MBBindingList<ClanCardSelectionPopupItemVM> Items { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `ActionResult` | `public string ActionResult { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `IsDoneEnabled` | `public bool IsDoneEnabled { get; set; }` |
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanCardSelectionPopupVM 实例
ClanCardSelectionPopupVM clanCardSelectionPopupVM = ...;
clanCardSelectionPopupVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ClanCardSelectionPopupVM 实例
ClanCardSelectionPopupVM clanCardSelectionPopupVM = ...;
clanCardSelectionPopupVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ClanCardSelectionPopupVM 实例
ClanCardSelectionPopupVM clanCardSelectionPopupVM = ...;
clanCardSelectionPopupVM.SetDoneInputKey(hotKey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ClanCardSelectionPopupVM 实例
ClanCardSelectionPopupVM clanCardSelectionPopupVM = ...;
clanCardSelectionPopupVM.SetCancelInputKey(hotKey);
```

### Open
`public void Open(ClanCardSelectionInfo info)`

**用途 / Purpose:** **用途 / Purpose:** 打开当前对象代表的资源或界面。

```csharp
// 先通过子系统 API 拿到 ClanCardSelectionPopupVM 实例
ClanCardSelectionPopupVM clanCardSelectionPopupVM = ...;
clanCardSelectionPopupVM.Open(info);
```

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** **用途 / Purpose:** 执行 cancel 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanCardSelectionPopupVM 实例
ClanCardSelectionPopupVM clanCardSelectionPopupVM = ...;
clanCardSelectionPopupVM.ExecuteCancel();
```

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** **用途 / Purpose:** 执行 done 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanCardSelectionPopupVM 实例
ClanCardSelectionPopupVM clanCardSelectionPopupVM = ...;
clanCardSelectionPopupVM.ExecuteDone();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ClanCardSelectionPopupVM clanCardSelectionPopupVM = ...;
clanCardSelectionPopupVM.RefreshValues();
```

## 参见

- [本区域目录](../)