---
title: "SteamFriends"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamFriends`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamFriends

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamFriends`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamFriends.cs`

## 概述

`SteamFriends` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetPersonaName
`public static string GetPersonaName()`

**用途 / Purpose:** 获取 `persona name` 的当前值。

### SetPersonaName
`public static SteamAPICall_t SetPersonaName(string pchPersonaName)`

**用途 / Purpose:** 设置 `persona name` 的值或状态。

### GetPersonaState
`public static EPersonaState GetPersonaState()`

**用途 / Purpose:** 获取 `persona state` 的当前值。

### GetFriendCount
`public static int GetFriendCount(EFriendFlags iFriendFlags)`

**用途 / Purpose:** 获取 `friend count` 的当前值。

### GetFriendByIndex
`public static CSteamID GetFriendByIndex(int iFriend, EFriendFlags iFriendFlags)`

**用途 / Purpose:** 获取 `friend by index` 的当前值。

### GetFriendRelationship
`public static EFriendRelationship GetFriendRelationship(CSteamID steamIDFriend)`

**用途 / Purpose:** 获取 `friend relationship` 的当前值。

### GetFriendPersonaState
`public static EPersonaState GetFriendPersonaState(CSteamID steamIDFriend)`

**用途 / Purpose:** 获取 `friend persona state` 的当前值。

### GetFriendPersonaName
`public static string GetFriendPersonaName(CSteamID steamIDFriend)`

**用途 / Purpose:** 获取 `friend persona name` 的当前值。

### GetFriendGamePlayed
`public static bool GetFriendGamePlayed(CSteamID steamIDFriend, out FriendGameInfo_t pFriendGameInfo)`

**用途 / Purpose:** 获取 `friend game played` 的当前值。

### GetFriendPersonaNameHistory
`public static string GetFriendPersonaNameHistory(CSteamID steamIDFriend, int iPersonaName)`

**用途 / Purpose:** 获取 `friend persona name history` 的当前值。

### GetFriendSteamLevel
`public static int GetFriendSteamLevel(CSteamID steamIDFriend)`

**用途 / Purpose:** 获取 `friend steam level` 的当前值。

### GetPlayerNickname
`public static string GetPlayerNickname(CSteamID steamIDPlayer)`

**用途 / Purpose:** 获取 `player nickname` 的当前值。

### GetFriendsGroupCount
`public static int GetFriendsGroupCount()`

**用途 / Purpose:** 获取 `friends group count` 的当前值。

### GetFriendsGroupIDByIndex
`public static FriendsGroupID_t GetFriendsGroupIDByIndex(int iFG)`

**用途 / Purpose:** 获取 `friends group i d by index` 的当前值。

### GetFriendsGroupName
`public static string GetFriendsGroupName(FriendsGroupID_t friendsGroupID)`

**用途 / Purpose:** 获取 `friends group name` 的当前值。

### GetFriendsGroupMembersCount
`public static int GetFriendsGroupMembersCount(FriendsGroupID_t friendsGroupID)`

**用途 / Purpose:** 获取 `friends group members count` 的当前值。

### GetFriendsGroupMembersList
`public static void GetFriendsGroupMembersList(FriendsGroupID_t friendsGroupID, CSteamID pOutSteamIDMembers, int nMembersCount)`

**用途 / Purpose:** 获取 `friends group members list` 的当前值。

### HasFriend
`public static bool HasFriend(CSteamID steamIDFriend, EFriendFlags iFriendFlags)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `friend`。

### GetClanCount
`public static int GetClanCount()`

**用途 / Purpose:** 获取 `clan count` 的当前值。

### GetClanByIndex
`public static CSteamID GetClanByIndex(int iClan)`

**用途 / Purpose:** 获取 `clan by index` 的当前值。

### GetClanName
`public static string GetClanName(CSteamID steamIDClan)`

**用途 / Purpose:** 获取 `clan name` 的当前值。

### GetClanTag
`public static string GetClanTag(CSteamID steamIDClan)`

**用途 / Purpose:** 获取 `clan tag` 的当前值。

### GetClanActivityCounts
`public static bool GetClanActivityCounts(CSteamID steamIDClan, out int pnOnline, out int pnInGame, out int pnChatting)`

**用途 / Purpose:** 获取 `clan activity counts` 的当前值。

### DownloadClanActivityCounts
`public static SteamAPICall_t DownloadClanActivityCounts(CSteamID psteamIDClans, int cClansToRequest)`

**用途 / Purpose:** 处理 `download clan activity counts` 相关逻辑。

### GetFriendCountFromSource
`public static int GetFriendCountFromSource(CSteamID steamIDSource)`

**用途 / Purpose:** 获取 `friend count from source` 的当前值。

### GetFriendFromSourceByIndex
`public static CSteamID GetFriendFromSourceByIndex(CSteamID steamIDSource, int iFriend)`

**用途 / Purpose:** 获取 `friend from source by index` 的当前值。

### IsUserInSource
`public static bool IsUserInSource(CSteamID steamIDUser, CSteamID steamIDSource)`

**用途 / Purpose:** 处理 `is user in source` 相关逻辑。

### SetInGameVoiceSpeaking
`public static void SetInGameVoiceSpeaking(CSteamID steamIDUser, bool bSpeaking)`

**用途 / Purpose:** 设置 `in game voice speaking` 的值或状态。

### ActivateGameOverlay
`public static void ActivateGameOverlay(string pchDialog)`

**用途 / Purpose:** 处理 `activate game overlay` 相关逻辑。

### ActivateGameOverlayToUser
`public static void ActivateGameOverlayToUser(string pchDialog, CSteamID steamID)`

**用途 / Purpose:** 处理 `activate game overlay to user` 相关逻辑。

### ActivateGameOverlayToWebPage
`public static void ActivateGameOverlayToWebPage(string pchURL, EActivateGameOverlayToWebPageMode eMode = EActivateGameOverlayToWebPageMode.k_EActivateGameOverlayToWebPageMode_Default)`

**用途 / Purpose:** 处理 `activate game overlay to web page` 相关逻辑。

### ActivateGameOverlayToStore
`public static void ActivateGameOverlayToStore(AppId_t nAppID, EOverlayToStoreFlag eFlag)`

**用途 / Purpose:** 处理 `activate game overlay to store` 相关逻辑。

### SetPlayedWith
`public static void SetPlayedWith(CSteamID steamIDUserPlayedWith)`

**用途 / Purpose:** 设置 `played with` 的值或状态。

### ActivateGameOverlayInviteDialog
`public static void ActivateGameOverlayInviteDialog(CSteamID steamIDLobby)`

**用途 / Purpose:** 处理 `activate game overlay invite dialog` 相关逻辑。

### GetSmallFriendAvatar
`public static int GetSmallFriendAvatar(CSteamID steamIDFriend)`

**用途 / Purpose:** 获取 `small friend avatar` 的当前值。

### GetMediumFriendAvatar
`public static int GetMediumFriendAvatar(CSteamID steamIDFriend)`

**用途 / Purpose:** 获取 `medium friend avatar` 的当前值。

### GetLargeFriendAvatar
`public static int GetLargeFriendAvatar(CSteamID steamIDFriend)`

**用途 / Purpose:** 获取 `large friend avatar` 的当前值。

### RequestUserInformation
`public static bool RequestUserInformation(CSteamID steamIDUser, bool bRequireNameOnly)`

**用途 / Purpose:** 处理 `request user information` 相关逻辑。

### RequestClanOfficerList
`public static SteamAPICall_t RequestClanOfficerList(CSteamID steamIDClan)`

**用途 / Purpose:** 处理 `request clan officer list` 相关逻辑。

### GetClanOwner
`public static CSteamID GetClanOwner(CSteamID steamIDClan)`

**用途 / Purpose:** 获取 `clan owner` 的当前值。

### GetClanOfficerCount
`public static int GetClanOfficerCount(CSteamID steamIDClan)`

**用途 / Purpose:** 获取 `clan officer count` 的当前值。

### GetClanOfficerByIndex
`public static CSteamID GetClanOfficerByIndex(CSteamID steamIDClan, int iOfficer)`

**用途 / Purpose:** 获取 `clan officer by index` 的当前值。

### GetUserRestrictions
`public static uint GetUserRestrictions()`

**用途 / Purpose:** 获取 `user restrictions` 的当前值。

### SetRichPresence
`public static bool SetRichPresence(string pchKey, string pchValue)`

**用途 / Purpose:** 设置 `rich presence` 的值或状态。

### ClearRichPresence
`public static void ClearRichPresence()`

**用途 / Purpose:** 处理 `clear rich presence` 相关逻辑。

### GetFriendRichPresence
`public static string GetFriendRichPresence(CSteamID steamIDFriend, string pchKey)`

**用途 / Purpose:** 获取 `friend rich presence` 的当前值。

### GetFriendRichPresenceKeyCount
`public static int GetFriendRichPresenceKeyCount(CSteamID steamIDFriend)`

**用途 / Purpose:** 获取 `friend rich presence key count` 的当前值。

### GetFriendRichPresenceKeyByIndex
`public static string GetFriendRichPresenceKeyByIndex(CSteamID steamIDFriend, int iKey)`

**用途 / Purpose:** 获取 `friend rich presence key by index` 的当前值。

### RequestFriendRichPresence
`public static void RequestFriendRichPresence(CSteamID steamIDFriend)`

**用途 / Purpose:** 处理 `request friend rich presence` 相关逻辑。

### InviteUserToGame
`public static bool InviteUserToGame(CSteamID steamIDFriend, string pchConnectString)`

**用途 / Purpose:** 处理 `invite user to game` 相关逻辑。

### GetCoplayFriendCount
`public static int GetCoplayFriendCount()`

**用途 / Purpose:** 获取 `coplay friend count` 的当前值。

### GetCoplayFriend
`public static CSteamID GetCoplayFriend(int iCoplayFriend)`

**用途 / Purpose:** 获取 `coplay friend` 的当前值。

### GetFriendCoplayTime
`public static int GetFriendCoplayTime(CSteamID steamIDFriend)`

**用途 / Purpose:** 获取 `friend coplay time` 的当前值。

### GetFriendCoplayGame
`public static AppId_t GetFriendCoplayGame(CSteamID steamIDFriend)`

**用途 / Purpose:** 获取 `friend coplay game` 的当前值。

### JoinClanChatRoom
`public static SteamAPICall_t JoinClanChatRoom(CSteamID steamIDClan)`

**用途 / Purpose:** 处理 `join clan chat room` 相关逻辑。

### LeaveClanChatRoom
`public static bool LeaveClanChatRoom(CSteamID steamIDClan)`

**用途 / Purpose:** 处理 `leave clan chat room` 相关逻辑。

### GetClanChatMemberCount
`public static int GetClanChatMemberCount(CSteamID steamIDClan)`

**用途 / Purpose:** 获取 `clan chat member count` 的当前值。

### GetChatMemberByIndex
`public static CSteamID GetChatMemberByIndex(CSteamID steamIDClan, int iUser)`

**用途 / Purpose:** 获取 `chat member by index` 的当前值。

### SendClanChatMessage
`public static bool SendClanChatMessage(CSteamID steamIDClanChat, string pchText)`

**用途 / Purpose:** 处理 `send clan chat message` 相关逻辑。

### GetClanChatMessage
`public static int GetClanChatMessage(CSteamID steamIDClanChat, int iMessage, out string prgchText, int cchTextMax, out EChatEntryType peChatEntryType, out CSteamID psteamidChatter)`

**用途 / Purpose:** 获取 `clan chat message` 的当前值。

### IsClanChatAdmin
`public static bool IsClanChatAdmin(CSteamID steamIDClanChat, CSteamID steamIDUser)`

**用途 / Purpose:** 处理 `is clan chat admin` 相关逻辑。

### IsClanChatWindowOpenInSteam
`public static bool IsClanChatWindowOpenInSteam(CSteamID steamIDClanChat)`

**用途 / Purpose:** 处理 `is clan chat window open in steam` 相关逻辑。

### OpenClanChatWindowInSteam
`public static bool OpenClanChatWindowInSteam(CSteamID steamIDClanChat)`

**用途 / Purpose:** 处理 `open clan chat window in steam` 相关逻辑。

### CloseClanChatWindowInSteam
`public static bool CloseClanChatWindowInSteam(CSteamID steamIDClanChat)`

**用途 / Purpose:** 处理 `close clan chat window in steam` 相关逻辑。

### SetListenForFriendsMessages
`public static bool SetListenForFriendsMessages(bool bInterceptEnabled)`

**用途 / Purpose:** 设置 `listen for friends messages` 的值或状态。

### ReplyToFriendMessage
`public static bool ReplyToFriendMessage(CSteamID steamIDFriend, string pchMsgToSend)`

**用途 / Purpose:** 处理 `reply to friend message` 相关逻辑。

### GetFriendMessage
`public static int GetFriendMessage(CSteamID steamIDFriend, int iMessageID, out string pvData, int cubData, out EChatEntryType peChatEntryType)`

**用途 / Purpose:** 获取 `friend message` 的当前值。

### GetFollowerCount
`public static SteamAPICall_t GetFollowerCount(CSteamID steamID)`

**用途 / Purpose:** 获取 `follower count` 的当前值。

### IsFollowing
`public static SteamAPICall_t IsFollowing(CSteamID steamID)`

**用途 / Purpose:** 处理 `is following` 相关逻辑。

### EnumerateFollowingList
`public static SteamAPICall_t EnumerateFollowingList(uint unStartIndex)`

**用途 / Purpose:** 处理 `enumerate following list` 相关逻辑。

### IsClanPublic
`public static bool IsClanPublic(CSteamID steamIDClan)`

**用途 / Purpose:** 处理 `is clan public` 相关逻辑。

### IsClanOfficialGameGroup
`public static bool IsClanOfficialGameGroup(CSteamID steamIDClan)`

**用途 / Purpose:** 处理 `is clan official game group` 相关逻辑。

### GetNumChatsWithUnreadPriorityMessages
`public static int GetNumChatsWithUnreadPriorityMessages()`

**用途 / Purpose:** 获取 `num chats with unread priority messages` 的当前值。

### ActivateGameOverlayRemotePlayTogetherInviteDialog
`public static void ActivateGameOverlayRemotePlayTogetherInviteDialog(CSteamID steamIDLobby)`

**用途 / Purpose:** 处理 `activate game overlay remote play together invite dialog` 相关逻辑。

### RegisterProtocolInOverlayBrowser
`public static bool RegisterProtocolInOverlayBrowser(string pchProtocol)`

**用途 / Purpose:** 处理 `register protocol in overlay browser` 相关逻辑。

### ActivateGameOverlayInviteDialogConnectString
`public static void ActivateGameOverlayInviteDialogConnectString(string pchConnectString)`

**用途 / Purpose:** 处理 `activate game overlay invite dialog connect string` 相关逻辑。

## 使用示例

```csharp
SteamFriends.GetPersonaName();
```

## 参见

- [完整类目录](../catalog)