---
title: "MultiplayerReportPlayerVM"
description: "MultiplayerReportPlayerVM 的自动生成类参考。"
---
# MultiplayerReportPlayerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerReportPlayerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerReportPlayerVM.cs`

## 概述

`MultiplayerReportPlayerVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `ReportMessage` | `public string ReportMessage { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `ReportReasonText` | `public string ReportReasonText { get; set; }` |
| `CanSendReport` | `public bool CanSendReport { get; set; }` |
| `IsRequestedFromMission` | `public bool IsRequestedFromMission { get; set; }` |
| `MuteDescriptionText` | `public string MuteDescriptionText { get; set; }` |
| `ReportReasons` | `public SelectorVM<SelectorItemVM> ReportReasons { get; set; }` |
| `DisabledReasonHint` | `public HintViewModel DisabledReasonHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MultiplayerReportPlayerVM 实例
MultiplayerReportPlayerVM multiplayerReportPlayerVM = ...;
multiplayerReportPlayerVM.RefreshValues();
```

### OpenNewReportWithGamePlayerId
`public void OpenNewReportWithGamePlayerId(string gameId, PlayerId playerId, string playerName, bool isRequestedFromMission)`

**用途 / Purpose:** 打开new report with game player id对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MultiplayerReportPlayerVM 实例
MultiplayerReportPlayerVM multiplayerReportPlayerVM = ...;
multiplayerReportPlayerVM.OpenNewReportWithGamePlayerId("example", playerId, "example", false);
```

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 done 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MultiplayerReportPlayerVM 实例
MultiplayerReportPlayerVM multiplayerReportPlayerVM = ...;
multiplayerReportPlayerVM.ExecuteDone();
```

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 cancel 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MultiplayerReportPlayerVM 实例
MultiplayerReportPlayerVM multiplayerReportPlayerVM = ...;
multiplayerReportPlayerVM.ExecuteCancel();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerReportPlayerVM 实例
MultiplayerReportPlayerVM multiplayerReportPlayerVM = ...;
multiplayerReportPlayerVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MultiplayerReportPlayerVM 实例
MultiplayerReportPlayerVM multiplayerReportPlayerVM = ...;
multiplayerReportPlayerVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MultiplayerReportPlayerVM 实例
MultiplayerReportPlayerVM multiplayerReportPlayerVM = ...;
multiplayerReportPlayerVM.SetDoneInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiplayerReportPlayerVM multiplayerReportPlayerVM = ...;
multiplayerReportPlayerVM.RefreshValues();
```

## 参见

- [本区域目录](../)