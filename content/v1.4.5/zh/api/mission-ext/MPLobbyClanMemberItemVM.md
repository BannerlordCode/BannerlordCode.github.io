---
title: "MPLobbyClanMemberItemVM"
description: "MPLobbyClanMemberItemVM 的自动生成类参考。"
---
# MPLobbyClanMemberItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanMemberItemVM : MPLobbyPlayerBaseVM`
**Base:** `MPLobbyPlayerBaseVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanMemberItemVM.cs`

## 概述

`MPLobbyClanMemberItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public PlayerId Id { get; }` |
| `IsOnline` | `public bool IsOnline { get; set; }` |
| `IsClanLeader` | `public bool IsClanLeader { get; set; }` |
| `NotEligibleInfo` | `public string NotEligibleInfo { get; set; }` |
| `InviteAcceptInfo` | `public string InviteAcceptInfo { get; set; }` |
| `Rank` | `public int Rank { get; set; }` |
| `UserActionsList` | `public MBBindingList<StringPairItemWithActionVM> UserActionsList { get; set; }` |
| `RankHint` | `public HintViewModel RankHint { get; set; }` |

## 主要方法

### MPLobbyClanMemberItemVM
`public unsafe MPLobbyClanMemberItemVM(ClanPlayer member, bool isOnline, string selectedBadgeID, AnotherPlayerState state, Action<MPLobbyClanMemberItemVM> executeActivate = null)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MPLobbyClanMemberItemVM 对应的操作。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanMemberItemVM 实例
MPLobbyClanMemberItemVM mPLobbyClanMemberItemVM = ...;
var result = mPLobbyClanMemberItemVM.MPLobbyClanMemberItemVM(member, false, "example", state, null);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanMemberItemVM 实例
MPLobbyClanMemberItemVM mPLobbyClanMemberItemVM = ...;
mPLobbyClanMemberItemVM.RefreshValues();
```

### SetNotEligibleInfo
`public void SetNotEligibleInfo(PlayerNotEligibleError notEligibleError)`

**用途 / Purpose:** **用途 / Purpose:** 为 not eligible info 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanMemberItemVM 实例
MPLobbyClanMemberItemVM mPLobbyClanMemberItemVM = ...;
mPLobbyClanMemberItemVM.SetNotEligibleInfo(notEligibleError);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyClanMemberItemVM mPLobbyClanMemberItemVM = ...;
mPLobbyClanMemberItemVM.MPLobbyClanMemberItemVM(member, false, "example", state, null);
```

## 参见

- [本区域目录](../)