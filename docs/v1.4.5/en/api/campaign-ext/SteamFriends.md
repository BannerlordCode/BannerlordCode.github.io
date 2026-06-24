<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamFriends`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamFriends

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamFriends`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamFriends.cs`

## Overview

`SteamFriends` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetPersonaName
`public static string GetPersonaName()`

**Purpose:** Gets the current value of `persona name`.

### SetPersonaName
`public static SteamAPICall_t SetPersonaName(string pchPersonaName)`

**Purpose:** Sets the value or state of `persona name`.

### GetPersonaState
`public static EPersonaState GetPersonaState()`

**Purpose:** Gets the current value of `persona state`.

### GetFriendCount
`public static int GetFriendCount(EFriendFlags iFriendFlags)`

**Purpose:** Gets the current value of `friend count`.

### GetFriendByIndex
`public static CSteamID GetFriendByIndex(int iFriend, EFriendFlags iFriendFlags)`

**Purpose:** Gets the current value of `friend by index`.

### GetFriendRelationship
`public static EFriendRelationship GetFriendRelationship(CSteamID steamIDFriend)`

**Purpose:** Gets the current value of `friend relationship`.

### GetFriendPersonaState
`public static EPersonaState GetFriendPersonaState(CSteamID steamIDFriend)`

**Purpose:** Gets the current value of `friend persona state`.

### GetFriendPersonaName
`public static string GetFriendPersonaName(CSteamID steamIDFriend)`

**Purpose:** Gets the current value of `friend persona name`.

### GetFriendGamePlayed
`public static bool GetFriendGamePlayed(CSteamID steamIDFriend, out FriendGameInfo_t pFriendGameInfo)`

**Purpose:** Gets the current value of `friend game played`.

### GetFriendPersonaNameHistory
`public static string GetFriendPersonaNameHistory(CSteamID steamIDFriend, int iPersonaName)`

**Purpose:** Gets the current value of `friend persona name history`.

### GetFriendSteamLevel
`public static int GetFriendSteamLevel(CSteamID steamIDFriend)`

**Purpose:** Gets the current value of `friend steam level`.

### GetPlayerNickname
`public static string GetPlayerNickname(CSteamID steamIDPlayer)`

**Purpose:** Gets the current value of `player nickname`.

### GetFriendsGroupCount
`public static int GetFriendsGroupCount()`

**Purpose:** Gets the current value of `friends group count`.

### GetFriendsGroupIDByIndex
`public static FriendsGroupID_t GetFriendsGroupIDByIndex(int iFG)`

**Purpose:** Gets the current value of `friends group i d by index`.

### GetFriendsGroupName
`public static string GetFriendsGroupName(FriendsGroupID_t friendsGroupID)`

**Purpose:** Gets the current value of `friends group name`.

### GetFriendsGroupMembersCount
`public static int GetFriendsGroupMembersCount(FriendsGroupID_t friendsGroupID)`

**Purpose:** Gets the current value of `friends group members count`.

### GetFriendsGroupMembersList
`public static void GetFriendsGroupMembersList(FriendsGroupID_t friendsGroupID, CSteamID pOutSteamIDMembers, int nMembersCount)`

**Purpose:** Gets the current value of `friends group members list`.

### HasFriend
`public static bool HasFriend(CSteamID steamIDFriend, EFriendFlags iFriendFlags)`

**Purpose:** Checks whether the current object has/contains `friend`.

### GetClanCount
`public static int GetClanCount()`

**Purpose:** Gets the current value of `clan count`.

### GetClanByIndex
`public static CSteamID GetClanByIndex(int iClan)`

**Purpose:** Gets the current value of `clan by index`.

### GetClanName
`public static string GetClanName(CSteamID steamIDClan)`

**Purpose:** Gets the current value of `clan name`.

### GetClanTag
`public static string GetClanTag(CSteamID steamIDClan)`

**Purpose:** Gets the current value of `clan tag`.

### GetClanActivityCounts
`public static bool GetClanActivityCounts(CSteamID steamIDClan, out int pnOnline, out int pnInGame, out int pnChatting)`

**Purpose:** Gets the current value of `clan activity counts`.

### DownloadClanActivityCounts
`public static SteamAPICall_t DownloadClanActivityCounts(CSteamID psteamIDClans, int cClansToRequest)`

**Purpose:** Handles logic related to `download clan activity counts`.

### GetFriendCountFromSource
`public static int GetFriendCountFromSource(CSteamID steamIDSource)`

**Purpose:** Gets the current value of `friend count from source`.

### GetFriendFromSourceByIndex
`public static CSteamID GetFriendFromSourceByIndex(CSteamID steamIDSource, int iFriend)`

**Purpose:** Gets the current value of `friend from source by index`.

### IsUserInSource
`public static bool IsUserInSource(CSteamID steamIDUser, CSteamID steamIDSource)`

**Purpose:** Handles logic related to `is user in source`.

### SetInGameVoiceSpeaking
`public static void SetInGameVoiceSpeaking(CSteamID steamIDUser, bool bSpeaking)`

**Purpose:** Sets the value or state of `in game voice speaking`.

### ActivateGameOverlay
`public static void ActivateGameOverlay(string pchDialog)`

**Purpose:** Handles logic related to `activate game overlay`.

### ActivateGameOverlayToUser
`public static void ActivateGameOverlayToUser(string pchDialog, CSteamID steamID)`

**Purpose:** Handles logic related to `activate game overlay to user`.

### ActivateGameOverlayToWebPage
`public static void ActivateGameOverlayToWebPage(string pchURL, EActivateGameOverlayToWebPageMode eMode = EActivateGameOverlayToWebPageMode.k_EActivateGameOverlayToWebPageMode_Default)`

**Purpose:** Handles logic related to `activate game overlay to web page`.

### ActivateGameOverlayToStore
`public static void ActivateGameOverlayToStore(AppId_t nAppID, EOverlayToStoreFlag eFlag)`

**Purpose:** Handles logic related to `activate game overlay to store`.

### SetPlayedWith
`public static void SetPlayedWith(CSteamID steamIDUserPlayedWith)`

**Purpose:** Sets the value or state of `played with`.

### ActivateGameOverlayInviteDialog
`public static void ActivateGameOverlayInviteDialog(CSteamID steamIDLobby)`

**Purpose:** Handles logic related to `activate game overlay invite dialog`.

### GetSmallFriendAvatar
`public static int GetSmallFriendAvatar(CSteamID steamIDFriend)`

**Purpose:** Gets the current value of `small friend avatar`.

### GetMediumFriendAvatar
`public static int GetMediumFriendAvatar(CSteamID steamIDFriend)`

**Purpose:** Gets the current value of `medium friend avatar`.

### GetLargeFriendAvatar
`public static int GetLargeFriendAvatar(CSteamID steamIDFriend)`

**Purpose:** Gets the current value of `large friend avatar`.

### RequestUserInformation
`public static bool RequestUserInformation(CSteamID steamIDUser, bool bRequireNameOnly)`

**Purpose:** Handles logic related to `request user information`.

### RequestClanOfficerList
`public static SteamAPICall_t RequestClanOfficerList(CSteamID steamIDClan)`

**Purpose:** Handles logic related to `request clan officer list`.

### GetClanOwner
`public static CSteamID GetClanOwner(CSteamID steamIDClan)`

**Purpose:** Gets the current value of `clan owner`.

### GetClanOfficerCount
`public static int GetClanOfficerCount(CSteamID steamIDClan)`

**Purpose:** Gets the current value of `clan officer count`.

### GetClanOfficerByIndex
`public static CSteamID GetClanOfficerByIndex(CSteamID steamIDClan, int iOfficer)`

**Purpose:** Gets the current value of `clan officer by index`.

### GetUserRestrictions
`public static uint GetUserRestrictions()`

**Purpose:** Gets the current value of `user restrictions`.

### SetRichPresence
`public static bool SetRichPresence(string pchKey, string pchValue)`

**Purpose:** Sets the value or state of `rich presence`.

### ClearRichPresence
`public static void ClearRichPresence()`

**Purpose:** Handles logic related to `clear rich presence`.

### GetFriendRichPresence
`public static string GetFriendRichPresence(CSteamID steamIDFriend, string pchKey)`

**Purpose:** Gets the current value of `friend rich presence`.

### GetFriendRichPresenceKeyCount
`public static int GetFriendRichPresenceKeyCount(CSteamID steamIDFriend)`

**Purpose:** Gets the current value of `friend rich presence key count`.

### GetFriendRichPresenceKeyByIndex
`public static string GetFriendRichPresenceKeyByIndex(CSteamID steamIDFriend, int iKey)`

**Purpose:** Gets the current value of `friend rich presence key by index`.

### RequestFriendRichPresence
`public static void RequestFriendRichPresence(CSteamID steamIDFriend)`

**Purpose:** Handles logic related to `request friend rich presence`.

### InviteUserToGame
`public static bool InviteUserToGame(CSteamID steamIDFriend, string pchConnectString)`

**Purpose:** Handles logic related to `invite user to game`.

### GetCoplayFriendCount
`public static int GetCoplayFriendCount()`

**Purpose:** Gets the current value of `coplay friend count`.

### GetCoplayFriend
`public static CSteamID GetCoplayFriend(int iCoplayFriend)`

**Purpose:** Gets the current value of `coplay friend`.

### GetFriendCoplayTime
`public static int GetFriendCoplayTime(CSteamID steamIDFriend)`

**Purpose:** Gets the current value of `friend coplay time`.

### GetFriendCoplayGame
`public static AppId_t GetFriendCoplayGame(CSteamID steamIDFriend)`

**Purpose:** Gets the current value of `friend coplay game`.

### JoinClanChatRoom
`public static SteamAPICall_t JoinClanChatRoom(CSteamID steamIDClan)`

**Purpose:** Handles logic related to `join clan chat room`.

### LeaveClanChatRoom
`public static bool LeaveClanChatRoom(CSteamID steamIDClan)`

**Purpose:** Handles logic related to `leave clan chat room`.

### GetClanChatMemberCount
`public static int GetClanChatMemberCount(CSteamID steamIDClan)`

**Purpose:** Gets the current value of `clan chat member count`.

### GetChatMemberByIndex
`public static CSteamID GetChatMemberByIndex(CSteamID steamIDClan, int iUser)`

**Purpose:** Gets the current value of `chat member by index`.

### SendClanChatMessage
`public static bool SendClanChatMessage(CSteamID steamIDClanChat, string pchText)`

**Purpose:** Handles logic related to `send clan chat message`.

### GetClanChatMessage
`public static int GetClanChatMessage(CSteamID steamIDClanChat, int iMessage, out string prgchText, int cchTextMax, out EChatEntryType peChatEntryType, out CSteamID psteamidChatter)`

**Purpose:** Gets the current value of `clan chat message`.

### IsClanChatAdmin
`public static bool IsClanChatAdmin(CSteamID steamIDClanChat, CSteamID steamIDUser)`

**Purpose:** Handles logic related to `is clan chat admin`.

### IsClanChatWindowOpenInSteam
`public static bool IsClanChatWindowOpenInSteam(CSteamID steamIDClanChat)`

**Purpose:** Handles logic related to `is clan chat window open in steam`.

### OpenClanChatWindowInSteam
`public static bool OpenClanChatWindowInSteam(CSteamID steamIDClanChat)`

**Purpose:** Handles logic related to `open clan chat window in steam`.

### CloseClanChatWindowInSteam
`public static bool CloseClanChatWindowInSteam(CSteamID steamIDClanChat)`

**Purpose:** Handles logic related to `close clan chat window in steam`.

### SetListenForFriendsMessages
`public static bool SetListenForFriendsMessages(bool bInterceptEnabled)`

**Purpose:** Sets the value or state of `listen for friends messages`.

### ReplyToFriendMessage
`public static bool ReplyToFriendMessage(CSteamID steamIDFriend, string pchMsgToSend)`

**Purpose:** Handles logic related to `reply to friend message`.

### GetFriendMessage
`public static int GetFriendMessage(CSteamID steamIDFriend, int iMessageID, out string pvData, int cubData, out EChatEntryType peChatEntryType)`

**Purpose:** Gets the current value of `friend message`.

### GetFollowerCount
`public static SteamAPICall_t GetFollowerCount(CSteamID steamID)`

**Purpose:** Gets the current value of `follower count`.

### IsFollowing
`public static SteamAPICall_t IsFollowing(CSteamID steamID)`

**Purpose:** Handles logic related to `is following`.

### EnumerateFollowingList
`public static SteamAPICall_t EnumerateFollowingList(uint unStartIndex)`

**Purpose:** Handles logic related to `enumerate following list`.

### IsClanPublic
`public static bool IsClanPublic(CSteamID steamIDClan)`

**Purpose:** Handles logic related to `is clan public`.

### IsClanOfficialGameGroup
`public static bool IsClanOfficialGameGroup(CSteamID steamIDClan)`

**Purpose:** Handles logic related to `is clan official game group`.

### GetNumChatsWithUnreadPriorityMessages
`public static int GetNumChatsWithUnreadPriorityMessages()`

**Purpose:** Gets the current value of `num chats with unread priority messages`.

### ActivateGameOverlayRemotePlayTogetherInviteDialog
`public static void ActivateGameOverlayRemotePlayTogetherInviteDialog(CSteamID steamIDLobby)`

**Purpose:** Handles logic related to `activate game overlay remote play together invite dialog`.

### RegisterProtocolInOverlayBrowser
`public static bool RegisterProtocolInOverlayBrowser(string pchProtocol)`

**Purpose:** Handles logic related to `register protocol in overlay browser`.

### ActivateGameOverlayInviteDialogConnectString
`public static void ActivateGameOverlayInviteDialogConnectString(string pchConnectString)`

**Purpose:** Handles logic related to `activate game overlay invite dialog connect string`.

## Usage Example

```csharp
SteamFriends.GetPersonaName();
```

## See Also

- [Complete Class Catalog](../catalog)