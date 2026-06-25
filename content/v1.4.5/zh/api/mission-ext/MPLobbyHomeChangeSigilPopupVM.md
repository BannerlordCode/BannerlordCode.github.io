---
title: "MPLobbyHomeChangeSigilPopupVM"
description: "MPLobbyHomeChangeSigilPopupVM 的自动生成类参考。"
---
# MPLobbyHomeChangeSigilPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyHomeChangeSigilPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home/MPLobbyHomeChangeSigilPopupVM.cs`

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

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPLobbyHomeChangeSigilPopupVM 实例
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
var result = mPLobbyHomeChangeSigilPopupVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyHomeChangeSigilPopupVM 实例
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
mPLobbyHomeChangeSigilPopupVM.RefreshValues();
```

### Open
`public void Open()`

**用途 / Purpose:** 打开当前对象代表的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPLobbyHomeChangeSigilPopupVM 实例
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
mPLobbyHomeChangeSigilPopupVM.Open();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 「close popup」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyHomeChangeSigilPopupVM 实例
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
mPLobbyHomeChangeSigilPopupVM.ExecuteClosePopup();
```

### ExecuteChangeSigil
`public void ExecuteChangeSigil()`

**用途 / Purpose:** 执行 「change sigil」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyHomeChangeSigilPopupVM 实例
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
mPLobbyHomeChangeSigilPopupVM.ExecuteChangeSigil();
```

### OnLootUpdated
`public void OnLootUpdated(int finalLoot)`

**用途 / Purpose:** 在 「loot updated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyHomeChangeSigilPopupVM 实例
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
mPLobbyHomeChangeSigilPopupVM.OnLootUpdated(0);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyHomeChangeSigilPopupVM 实例
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
mPLobbyHomeChangeSigilPopupVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「cancel input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyHomeChangeSigilPopupVM 实例
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
mPLobbyHomeChangeSigilPopupVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「done input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyHomeChangeSigilPopupVM 实例
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
mPLobbyHomeChangeSigilPopupVM.SetDoneInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
mPLobbyHomeChangeSigilPopupVM.Compare(x, y);
```

## 参见

- [本区域目录](../)