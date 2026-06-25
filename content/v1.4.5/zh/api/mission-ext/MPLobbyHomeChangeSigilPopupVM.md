---
title: "MPLobbyHomeChangeSigilPopupVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyHomeChangeSigilPopupVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyHomeChangeSigilPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyHomeChangeSigilPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home/MPLobbyHomeChangeSigilPopupVM.cs`

## 概述

`MPLobbyHomeChangeSigilPopupVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SelectedSigil` | `public MPLobbyCosmeticSigilItemVM SelectedSigil { get; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsLoading` | `public bool IsLoading { get; set; }` |
| `IsInClan` | `public bool IsInClan { get; set; }` |
| `IsUsingClanSigil` | `public bool IsUsingClanSigil { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ChangeText` | `public string ChangeText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `Loot` | `public int Loot { get; set; }` |
| `SigilList` | `public MBBindingList<MPLobbyCosmeticSigilItemVM> SigilList { get; set; }` |

## 主要方法

### Compare
`public int Compare(MPLobbyCosmeticSigilItemVM x, MPLobbyCosmeticSigilItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Open
`public void Open()`

**用途 / Purpose:** 处理 `open` 相关逻辑。

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 `close popup` 操作或流程。

### ExecuteChangeSigil
`public void ExecuteChangeSigil()`

**用途 / Purpose:** 执行 `change sigil` 操作或流程。

### OnLootUpdated
`public void OnLootUpdated(int finalLoot)`

**用途 / Purpose:** 当 `loot updated` 事件触发时调用此方法。

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
var value = new MPLobbyHomeChangeSigilPopupVM();
value.Compare(x, y);
```

## 参见

- [完整类目录](../catalog)