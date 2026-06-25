---
title: "MPLobbyClanMatchmakingRequestPopupVM"
description: "MPLobbyClanMatchmakingRequestPopupVM 的自动生成类参考。"
---
# MPLobbyClanMatchmakingRequestPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanMatchmakingRequestPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanMatchmakingRequestPopupVM.cs`

## 概述

`MPLobbyClanMatchmakingRequestPopupVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsClanMatch` | `public bool IsClanMatch { get; set; }` |
| `IsPracticeMatch` | `public bool IsPracticeMatch { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ClanName` | `public string ClanName { get; set; }` |
| `WantsToJoinText` | `public string WantsToJoinText { get; set; }` |
| `DoYouAcceptText` | `public string DoYouAcceptText { get; set; }` |
| `ClanSigil` | `public BannerImageIdentifierVM ClanSigil { get; set; }` |
| `ChallengerPartyLeader` | `public MPLobbyPlayerBaseVM ChallengerPartyLeader { get; set; }` |
| `ChallengerPartyPlayers` | `public MBBindingList<MPLobbyPlayerBaseVM> ChallengerPartyPlayers { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanMatchmakingRequestPopupVM 实例
MPLobbyClanMatchmakingRequestPopupVM mPLobbyClanMatchmakingRequestPopupVM = ...;
mPLobbyClanMatchmakingRequestPopupVM.RefreshValues();
```

### OpenWith
`public void OpenWith(string clanName, string clanSigilCode, Guid partyId, PlayerId challengerPlayerIDs, PlayerId challengerPartyLeaderID, PremadeGameType premadeGameType)`

**用途 / Purpose:** 打开with对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanMatchmakingRequestPopupVM 实例
MPLobbyClanMatchmakingRequestPopupVM mPLobbyClanMatchmakingRequestPopupVM = ...;
mPLobbyClanMatchmakingRequestPopupVM.OpenWith("example", "example", partyId, challengerPlayerIDs, challengerPartyLeaderID, premadeGameType);
```

### Close
`public void Close()`

**用途 / Purpose:** 关闭当前对象代表的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanMatchmakingRequestPopupVM 实例
MPLobbyClanMatchmakingRequestPopupVM mPLobbyClanMatchmakingRequestPopupVM = ...;
mPLobbyClanMatchmakingRequestPopupVM.Close();
```

### ExecuteAcceptMatchmaking
`public void ExecuteAcceptMatchmaking()`

**用途 / Purpose:** 执行 accept matchmaking 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanMatchmakingRequestPopupVM 实例
MPLobbyClanMatchmakingRequestPopupVM mPLobbyClanMatchmakingRequestPopupVM = ...;
mPLobbyClanMatchmakingRequestPopupVM.ExecuteAcceptMatchmaking();
```

### ExecuteDeclineMatchmaking
`public void ExecuteDeclineMatchmaking()`

**用途 / Purpose:** 执行 decline matchmaking 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyClanMatchmakingRequestPopupVM 实例
MPLobbyClanMatchmakingRequestPopupVM mPLobbyClanMatchmakingRequestPopupVM = ...;
mPLobbyClanMatchmakingRequestPopupVM.ExecuteDeclineMatchmaking();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyClanMatchmakingRequestPopupVM mPLobbyClanMatchmakingRequestPopupVM = ...;
mPLobbyClanMatchmakingRequestPopupVM.RefreshValues();
```

## 参见

- [本区域目录](../)