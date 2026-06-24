<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IFriends`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# IFriends

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class IFriends : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IFriends.cs`

## 概述

`IFriends` 位于 `Galaxy.Api`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Galaxy.Api` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Dispose
`public virtual void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### GetDefaultAvatarCriteria
`public virtual uint GetDefaultAvatarCriteria()`

**用途 / Purpose:** 获取 `default avatar criteria` 的当前值。

### SetDefaultAvatarCriteria
`public virtual void SetDefaultAvatarCriteria(uint defaultAvatarCriteria)`

**用途 / Purpose:** 设置 `default avatar criteria` 的值或状态。

### RequestUserInformation
`public virtual void RequestUserInformation(GalaxyID userID, uint avatarCriteria, IUserInformationRetrieveListener listener)`

**用途 / Purpose:** 处理 `request user information` 相关逻辑。

### RequestUserInformation
`public virtual void RequestUserInformation(GalaxyID userID, uint avatarCriteria)`

**用途 / Purpose:** 处理 `request user information` 相关逻辑。

### RequestUserInformation
`public virtual void RequestUserInformation(GalaxyID userID)`

**用途 / Purpose:** 处理 `request user information` 相关逻辑。

### IsUserInformationAvailable
`public virtual bool IsUserInformationAvailable(GalaxyID userID)`

**用途 / Purpose:** 处理 `is user information available` 相关逻辑。

### GetPersonaName
`public virtual string GetPersonaName()`

**用途 / Purpose:** 获取 `persona name` 的当前值。

### GetPersonaNameCopy
`public virtual void GetPersonaNameCopy(out string buffer, uint bufferLength)`

**用途 / Purpose:** 获取 `persona name copy` 的当前值。

### GetPersonaState
`public virtual PersonaState GetPersonaState()`

**用途 / Purpose:** 获取 `persona state` 的当前值。

### GetFriendPersonaName
`public virtual string GetFriendPersonaName(GalaxyID userID)`

**用途 / Purpose:** 获取 `friend persona name` 的当前值。

### GetFriendPersonaNameCopy
`public virtual void GetFriendPersonaNameCopy(GalaxyID userID, out string buffer, uint bufferLength)`

**用途 / Purpose:** 获取 `friend persona name copy` 的当前值。

### GetFriendPersonaState
`public virtual PersonaState GetFriendPersonaState(GalaxyID userID)`

**用途 / Purpose:** 获取 `friend persona state` 的当前值。

### GetFriendAvatarUrl
`public virtual string GetFriendAvatarUrl(GalaxyID userID, AvatarType avatarType)`

**用途 / Purpose:** 获取 `friend avatar url` 的当前值。

### GetFriendAvatarUrlCopy
`public virtual void GetFriendAvatarUrlCopy(GalaxyID userID, AvatarType avatarType, out string buffer, uint bufferLength)`

**用途 / Purpose:** 获取 `friend avatar url copy` 的当前值。

### GetFriendAvatarImageID
`public virtual uint GetFriendAvatarImageID(GalaxyID userID, AvatarType avatarType)`

**用途 / Purpose:** 获取 `friend avatar image i d` 的当前值。

### GetFriendAvatarImageRGBA
`public virtual void GetFriendAvatarImageRGBA(GalaxyID userID, AvatarType avatarType, byte buffer, uint bufferLength)`

**用途 / Purpose:** 获取 `friend avatar image r g b a` 的当前值。

### IsFriendAvatarImageRGBAAvailable
`public virtual bool IsFriendAvatarImageRGBAAvailable(GalaxyID userID, AvatarType avatarType)`

**用途 / Purpose:** 处理 `is friend avatar image r g b a available` 相关逻辑。

### RequestFriendList
`public virtual void RequestFriendList(IFriendListListener listener)`

**用途 / Purpose:** 处理 `request friend list` 相关逻辑。

### RequestFriendList
`public virtual void RequestFriendList()`

**用途 / Purpose:** 处理 `request friend list` 相关逻辑。

### IsFriend
`public virtual bool IsFriend(GalaxyID userID)`

**用途 / Purpose:** 处理 `is friend` 相关逻辑。

### GetFriendCount
`public virtual uint GetFriendCount()`

**用途 / Purpose:** 获取 `friend count` 的当前值。

### GetFriendByIndex
`public virtual GalaxyID GetFriendByIndex(uint index)`

**用途 / Purpose:** 获取 `friend by index` 的当前值。

### SendFriendInvitation
`public virtual void SendFriendInvitation(GalaxyID userID, IFriendInvitationSendListener listener)`

**用途 / Purpose:** 处理 `send friend invitation` 相关逻辑。

### SendFriendInvitation
`public virtual void SendFriendInvitation(GalaxyID userID)`

**用途 / Purpose:** 处理 `send friend invitation` 相关逻辑。

### RequestFriendInvitationList
`public virtual void RequestFriendInvitationList(IFriendInvitationListRetrieveListener listener)`

**用途 / Purpose:** 处理 `request friend invitation list` 相关逻辑。

### RequestFriendInvitationList
`public virtual void RequestFriendInvitationList()`

**用途 / Purpose:** 处理 `request friend invitation list` 相关逻辑。

### RequestSentFriendInvitationList
`public virtual void RequestSentFriendInvitationList(ISentFriendInvitationListRetrieveListener listener)`

**用途 / Purpose:** 处理 `request sent friend invitation list` 相关逻辑。

### RequestSentFriendInvitationList
`public virtual void RequestSentFriendInvitationList()`

**用途 / Purpose:** 处理 `request sent friend invitation list` 相关逻辑。

### GetFriendInvitationCount
`public virtual uint GetFriendInvitationCount()`

**用途 / Purpose:** 获取 `friend invitation count` 的当前值。

### GetFriendInvitationByIndex
`public virtual void GetFriendInvitationByIndex(uint index, ref GalaxyID userID, ref uint sendTime)`

**用途 / Purpose:** 获取 `friend invitation by index` 的当前值。

### RespondToFriendInvitation
`public virtual void RespondToFriendInvitation(GalaxyID userID, bool accept, IFriendInvitationRespondToListener listener)`

**用途 / Purpose:** 处理 `respond to friend invitation` 相关逻辑。

### RespondToFriendInvitation
`public virtual void RespondToFriendInvitation(GalaxyID userID, bool accept)`

**用途 / Purpose:** 处理 `respond to friend invitation` 相关逻辑。

### DeleteFriend
`public virtual void DeleteFriend(GalaxyID userID, IFriendDeleteListener listener)`

**用途 / Purpose:** 处理 `delete friend` 相关逻辑。

### DeleteFriend
`public virtual void DeleteFriend(GalaxyID userID)`

**用途 / Purpose:** 处理 `delete friend` 相关逻辑。

### SetRichPresence
`public virtual void SetRichPresence(string key, string value, IRichPresenceChangeListener listener)`

**用途 / Purpose:** 设置 `rich presence` 的值或状态。

### SetRichPresence
`public virtual void SetRichPresence(string key, string value)`

**用途 / Purpose:** 设置 `rich presence` 的值或状态。

### DeleteRichPresence
`public virtual void DeleteRichPresence(string key, IRichPresenceChangeListener listener)`

**用途 / Purpose:** 处理 `delete rich presence` 相关逻辑。

### DeleteRichPresence
`public virtual void DeleteRichPresence(string key)`

**用途 / Purpose:** 处理 `delete rich presence` 相关逻辑。

### ClearRichPresence
`public virtual void ClearRichPresence(IRichPresenceChangeListener listener)`

**用途 / Purpose:** 处理 `clear rich presence` 相关逻辑。

### ClearRichPresence
`public virtual void ClearRichPresence()`

**用途 / Purpose:** 处理 `clear rich presence` 相关逻辑。

### RequestRichPresence
`public virtual void RequestRichPresence(GalaxyID userID, IRichPresenceRetrieveListener listener)`

**用途 / Purpose:** 处理 `request rich presence` 相关逻辑。

### RequestRichPresence
`public virtual void RequestRichPresence(GalaxyID userID)`

**用途 / Purpose:** 处理 `request rich presence` 相关逻辑。

### RequestRichPresence
`public virtual void RequestRichPresence()`

**用途 / Purpose:** 处理 `request rich presence` 相关逻辑。

### GetRichPresence
`public virtual string GetRichPresence(string key, GalaxyID userID)`

**用途 / Purpose:** 获取 `rich presence` 的当前值。

### GetRichPresence
`public virtual string GetRichPresence(string key)`

**用途 / Purpose:** 获取 `rich presence` 的当前值。

### GetRichPresenceCopy
`public virtual void GetRichPresenceCopy(string key, out string buffer, uint bufferLength, GalaxyID userID)`

**用途 / Purpose:** 获取 `rich presence copy` 的当前值。

### GetRichPresenceCopy
`public virtual void GetRichPresenceCopy(string key, out string buffer, uint bufferLength)`

**用途 / Purpose:** 获取 `rich presence copy` 的当前值。

### GetRichPresenceCount
`public virtual uint GetRichPresenceCount(GalaxyID userID)`

**用途 / Purpose:** 获取 `rich presence count` 的当前值。

### GetRichPresenceCount
`public virtual uint GetRichPresenceCount()`

**用途 / Purpose:** 获取 `rich presence count` 的当前值。

### GetRichPresenceByIndex
`public virtual void GetRichPresenceByIndex(uint index, ref byte key, uint keyLength, ref byte value, uint valueLength, GalaxyID userID)`

**用途 / Purpose:** 获取 `rich presence by index` 的当前值。

### GetRichPresenceByIndex
`public virtual void GetRichPresenceByIndex(uint index, ref byte key, uint keyLength, ref byte value, uint valueLength)`

**用途 / Purpose:** 获取 `rich presence by index` 的当前值。

### ShowOverlayInviteDialog
`public virtual void ShowOverlayInviteDialog(string connectionString)`

**用途 / Purpose:** 处理 `show overlay invite dialog` 相关逻辑。

### SendInvitation
`public virtual void SendInvitation(GalaxyID userID, string connectionString, ISendInvitationListener listener)`

**用途 / Purpose:** 处理 `send invitation` 相关逻辑。

### SendInvitation
`public virtual void SendInvitation(GalaxyID userID, string connectionString)`

**用途 / Purpose:** 处理 `send invitation` 相关逻辑。

### FindUser
`public virtual void FindUser(string userSpecifier, IUserFindListener listener)`

**用途 / Purpose:** 处理 `find user` 相关逻辑。

### FindUser
`public virtual void FindUser(string userSpecifier)`

**用途 / Purpose:** 处理 `find user` 相关逻辑。

### IsUserInTheSameGame
`public virtual bool IsUserInTheSameGame(GalaxyID userID)`

**用途 / Purpose:** 处理 `is user in the same game` 相关逻辑。

## 使用示例

```csharp
var value = new IFriends();
value.Dispose();
```

## 参见

- [完整类目录](../catalog)