<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyClanCreationPopupVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClanCreationPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanCreationPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanCreationPopupVM.cs`

## 概述

`MPLobbyClanCreationPopupVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `HasCreationStarted` | `public bool HasCreationStarted { get; set; }` |
| `IsWaiting` | `public bool IsWaiting { get; set; }` |
| `CreateClanText` | `public string CreateClanText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `NameErrorText` | `public string NameErrorText { get; set; }` |
| `TagText` | `public string TagText { get; set; }` |
| `TagErrorText` | `public string TagErrorText { get; set; }` |
| `FactionText` | `public string FactionText { get; set; }` |
| `FactionErrorText` | `public string FactionErrorText { get; set; }` |
| `SigilText` | `public string SigilText { get; set; }` |
| `SigilIconErrorText` | `public string SigilIconErrorText { get; set; }` |
| `CreateText` | `public string CreateText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `NameInputText` | `public string NameInputText { get; set; }` |
| `TagInputText` | `public string TagInputText { get; set; }` |
| `WaitingForConfirmationText` | `public string WaitingForConfirmationText { get; set; }` |
| `FactionsList` | `public MBBindingList<MPCultureItemVM> FactionsList { get; set; }` |
| `IconsList` | `public MBBindingList<MPLobbySigilItemVM> IconsList { get; set; }` |
| `PartyMembersList` | `public MBBindingList<MPLobbyClanMemberItemVM> PartyMembersList { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**用途 / Purpose:** 执行 `open popup` 操作或流程。

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 `close popup` 操作或流程。

### UpdateFactionErrorText
`public void UpdateFactionErrorText()`

**用途 / Purpose:** 更新 `faction error text` 的状态或数据。

### UpdateSigilIconErrorText
`public void UpdateSigilIconErrorText()`

**用途 / Purpose:** 更新 `sigil icon error text` 的状态或数据。

### UpdateConfirmation
`public void UpdateConfirmation(PlayerId playerId, ClanCreationAnswer answer)`

**用途 / Purpose:** 更新 `confirmation` 的状态或数据。

### ExecuteSwitchToWaiting
`public void ExecuteSwitchToWaiting()`

**用途 / Purpose:** 执行 `switch to waiting` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

## 使用示例

```csharp
var value = new MPLobbyClanCreationPopupVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)