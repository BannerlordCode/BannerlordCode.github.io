---
title: "MPLobbyClanMemberItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyClanMemberItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClanMemberItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanMemberItemVM : MPLobbyPlayerBaseVM`
**Base:** `MPLobbyPlayerBaseVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanMemberItemVM.cs`

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

**用途 / Purpose:** 处理 `m p lobby clan member item v m` 相关逻辑。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### SetNotEligibleInfo
`public void SetNotEligibleInfo(PlayerNotEligibleError notEligibleError)`

**用途 / Purpose:** 设置 `not eligible info` 的值或状态。

## 使用示例

```csharp
var value = new MPLobbyClanMemberItemVM();
value.MPLobbyClanMemberItemVM(member, false, "example", state, null);
```

## 参见

- [完整类目录](../catalog)