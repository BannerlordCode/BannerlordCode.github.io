---
title: "MultiplayerReportPlayerVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerReportPlayerVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerReportPlayerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerReportPlayerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerReportPlayerVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OpenNewReportWithGamePlayerId
`public void OpenNewReportWithGamePlayerId(string gameId, PlayerId playerId, string playerName, bool isRequestedFromMission)`

**用途 / Purpose:** 处理 `open new report with game player id` 相关逻辑。

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 `done` 操作或流程。

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

## 使用示例

```csharp
var value = new MultiplayerReportPlayerVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)