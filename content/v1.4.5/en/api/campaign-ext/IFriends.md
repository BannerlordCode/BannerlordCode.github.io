---
title: "IFriends"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IFriends`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IFriends

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class IFriends : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IFriends.cs`

## Overview

`IFriends` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public virtual void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### GetDefaultAvatarCriteria
`public virtual uint GetDefaultAvatarCriteria()`

**Purpose:** Gets the current value of `default avatar criteria`.

### SetDefaultAvatarCriteria
`public virtual void SetDefaultAvatarCriteria(uint defaultAvatarCriteria)`

**Purpose:** Sets the value or state of `default avatar criteria`.

### RequestUserInformation
`public virtual void RequestUserInformation(GalaxyID userID, uint avatarCriteria, IUserInformationRetrieveListener listener)`

**Purpose:** Handles logic related to `request user information`.

### RequestUserInformation
`public virtual void RequestUserInformation(GalaxyID userID, uint avatarCriteria)`

**Purpose:** Handles logic related to `request user information`.

### RequestUserInformation
`public virtual void RequestUserInformation(GalaxyID userID)`

**Purpose:** Handles logic related to `request user information`.

### IsUserInformationAvailable
`public virtual bool IsUserInformationAvailable(GalaxyID userID)`

**Purpose:** Handles logic related to `is user information available`.

### GetPersonaName
`public virtual string GetPersonaName()`

**Purpose:** Gets the current value of `persona name`.

### GetPersonaNameCopy
`public virtual void GetPersonaNameCopy(out string buffer, uint bufferLength)`

**Purpose:** Gets the current value of `persona name copy`.

### GetPersonaState
`public virtual PersonaState GetPersonaState()`

**Purpose:** Gets the current value of `persona state`.

### GetFriendPersonaName
`public virtual string GetFriendPersonaName(GalaxyID userID)`

**Purpose:** Gets the current value of `friend persona name`.

### GetFriendPersonaNameCopy
`public virtual void GetFriendPersonaNameCopy(GalaxyID userID, out string buffer, uint bufferLength)`

**Purpose:** Gets the current value of `friend persona name copy`.

### GetFriendPersonaState
`public virtual PersonaState GetFriendPersonaState(GalaxyID userID)`

**Purpose:** Gets the current value of `friend persona state`.

### GetFriendAvatarUrl
`public virtual string GetFriendAvatarUrl(GalaxyID userID, AvatarType avatarType)`

**Purpose:** Gets the current value of `friend avatar url`.

### GetFriendAvatarUrlCopy
`public virtual void GetFriendAvatarUrlCopy(GalaxyID userID, AvatarType avatarType, out string buffer, uint bufferLength)`

**Purpose:** Gets the current value of `friend avatar url copy`.

### GetFriendAvatarImageID
`public virtual uint GetFriendAvatarImageID(GalaxyID userID, AvatarType avatarType)`

**Purpose:** Gets the current value of `friend avatar image i d`.

### GetFriendAvatarImageRGBA
`public virtual void GetFriendAvatarImageRGBA(GalaxyID userID, AvatarType avatarType, byte buffer, uint bufferLength)`

**Purpose:** Gets the current value of `friend avatar image r g b a`.

### IsFriendAvatarImageRGBAAvailable
`public virtual bool IsFriendAvatarImageRGBAAvailable(GalaxyID userID, AvatarType avatarType)`

**Purpose:** Handles logic related to `is friend avatar image r g b a available`.

### RequestFriendList
`public virtual void RequestFriendList(IFriendListListener listener)`

**Purpose:** Handles logic related to `request friend list`.

### RequestFriendList
`public virtual void RequestFriendList()`

**Purpose:** Handles logic related to `request friend list`.

### IsFriend
`public virtual bool IsFriend(GalaxyID userID)`

**Purpose:** Handles logic related to `is friend`.

### GetFriendCount
`public virtual uint GetFriendCount()`

**Purpose:** Gets the current value of `friend count`.

### GetFriendByIndex
`public virtual GalaxyID GetFriendByIndex(uint index)`

**Purpose:** Gets the current value of `friend by index`.

### SendFriendInvitation
`public virtual void SendFriendInvitation(GalaxyID userID, IFriendInvitationSendListener listener)`

**Purpose:** Handles logic related to `send friend invitation`.

### SendFriendInvitation
`public virtual void SendFriendInvitation(GalaxyID userID)`

**Purpose:** Handles logic related to `send friend invitation`.

### RequestFriendInvitationList
`public virtual void RequestFriendInvitationList(IFriendInvitationListRetrieveListener listener)`

**Purpose:** Handles logic related to `request friend invitation list`.

### RequestFriendInvitationList
`public virtual void RequestFriendInvitationList()`

**Purpose:** Handles logic related to `request friend invitation list`.

### RequestSentFriendInvitationList
`public virtual void RequestSentFriendInvitationList(ISentFriendInvitationListRetrieveListener listener)`

**Purpose:** Handles logic related to `request sent friend invitation list`.

### RequestSentFriendInvitationList
`public virtual void RequestSentFriendInvitationList()`

**Purpose:** Handles logic related to `request sent friend invitation list`.

### GetFriendInvitationCount
`public virtual uint GetFriendInvitationCount()`

**Purpose:** Gets the current value of `friend invitation count`.

### GetFriendInvitationByIndex
`public virtual void GetFriendInvitationByIndex(uint index, ref GalaxyID userID, ref uint sendTime)`

**Purpose:** Gets the current value of `friend invitation by index`.

### RespondToFriendInvitation
`public virtual void RespondToFriendInvitation(GalaxyID userID, bool accept, IFriendInvitationRespondToListener listener)`

**Purpose:** Handles logic related to `respond to friend invitation`.

### RespondToFriendInvitation
`public virtual void RespondToFriendInvitation(GalaxyID userID, bool accept)`

**Purpose:** Handles logic related to `respond to friend invitation`.

### DeleteFriend
`public virtual void DeleteFriend(GalaxyID userID, IFriendDeleteListener listener)`

**Purpose:** Handles logic related to `delete friend`.

### DeleteFriend
`public virtual void DeleteFriend(GalaxyID userID)`

**Purpose:** Handles logic related to `delete friend`.

### SetRichPresence
`public virtual void SetRichPresence(string key, string value, IRichPresenceChangeListener listener)`

**Purpose:** Sets the value or state of `rich presence`.

### SetRichPresence
`public virtual void SetRichPresence(string key, string value)`

**Purpose:** Sets the value or state of `rich presence`.

### DeleteRichPresence
`public virtual void DeleteRichPresence(string key, IRichPresenceChangeListener listener)`

**Purpose:** Handles logic related to `delete rich presence`.

### DeleteRichPresence
`public virtual void DeleteRichPresence(string key)`

**Purpose:** Handles logic related to `delete rich presence`.

### ClearRichPresence
`public virtual void ClearRichPresence(IRichPresenceChangeListener listener)`

**Purpose:** Handles logic related to `clear rich presence`.

### ClearRichPresence
`public virtual void ClearRichPresence()`

**Purpose:** Handles logic related to `clear rich presence`.

### RequestRichPresence
`public virtual void RequestRichPresence(GalaxyID userID, IRichPresenceRetrieveListener listener)`

**Purpose:** Handles logic related to `request rich presence`.

### RequestRichPresence
`public virtual void RequestRichPresence(GalaxyID userID)`

**Purpose:** Handles logic related to `request rich presence`.

### RequestRichPresence
`public virtual void RequestRichPresence()`

**Purpose:** Handles logic related to `request rich presence`.

### GetRichPresence
`public virtual string GetRichPresence(string key, GalaxyID userID)`

**Purpose:** Gets the current value of `rich presence`.

### GetRichPresence
`public virtual string GetRichPresence(string key)`

**Purpose:** Gets the current value of `rich presence`.

### GetRichPresenceCopy
`public virtual void GetRichPresenceCopy(string key, out string buffer, uint bufferLength, GalaxyID userID)`

**Purpose:** Gets the current value of `rich presence copy`.

### GetRichPresenceCopy
`public virtual void GetRichPresenceCopy(string key, out string buffer, uint bufferLength)`

**Purpose:** Gets the current value of `rich presence copy`.

### GetRichPresenceCount
`public virtual uint GetRichPresenceCount(GalaxyID userID)`

**Purpose:** Gets the current value of `rich presence count`.

### GetRichPresenceCount
`public virtual uint GetRichPresenceCount()`

**Purpose:** Gets the current value of `rich presence count`.

### GetRichPresenceByIndex
`public virtual void GetRichPresenceByIndex(uint index, ref byte key, uint keyLength, ref byte value, uint valueLength, GalaxyID userID)`

**Purpose:** Gets the current value of `rich presence by index`.

### GetRichPresenceByIndex
`public virtual void GetRichPresenceByIndex(uint index, ref byte key, uint keyLength, ref byte value, uint valueLength)`

**Purpose:** Gets the current value of `rich presence by index`.

### ShowOverlayInviteDialog
`public virtual void ShowOverlayInviteDialog(string connectionString)`

**Purpose:** Handles logic related to `show overlay invite dialog`.

### SendInvitation
`public virtual void SendInvitation(GalaxyID userID, string connectionString, ISendInvitationListener listener)`

**Purpose:** Handles logic related to `send invitation`.

### SendInvitation
`public virtual void SendInvitation(GalaxyID userID, string connectionString)`

**Purpose:** Handles logic related to `send invitation`.

### FindUser
`public virtual void FindUser(string userSpecifier, IUserFindListener listener)`

**Purpose:** Handles logic related to `find user`.

### FindUser
`public virtual void FindUser(string userSpecifier)`

**Purpose:** Handles logic related to `find user`.

### IsUserInTheSameGame
`public virtual bool IsUserInTheSameGame(GalaxyID userID)`

**Purpose:** Handles logic related to `is user in the same game`.

## Usage Example

```csharp
var value = new IFriends();
value.Dispose();
```

## See Also

- [Complete Class Catalog](../catalog)