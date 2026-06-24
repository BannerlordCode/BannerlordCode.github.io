<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IChat`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IChat

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class IChat : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IChat.cs`

## Overview

`IChat` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public virtual void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### RequestChatRoomWithUser
`public virtual void RequestChatRoomWithUser(GalaxyID userID, IChatRoomWithUserRetrieveListener listener)`

**Purpose:** Handles logic related to `request chat room with user`.

### RequestChatRoomWithUser
`public virtual void RequestChatRoomWithUser(GalaxyID userID)`

**Purpose:** Handles logic related to `request chat room with user`.

### RequestChatRoomMessages
`public virtual void RequestChatRoomMessages(ulong chatRoomID, uint limit, ulong referenceMessageID, IChatRoomMessagesRetrieveListener listener)`

**Purpose:** Handles logic related to `request chat room messages`.

### RequestChatRoomMessages
`public virtual void RequestChatRoomMessages(ulong chatRoomID, uint limit, ulong referenceMessageID)`

**Purpose:** Handles logic related to `request chat room messages`.

### RequestChatRoomMessages
`public virtual void RequestChatRoomMessages(ulong chatRoomID, uint limit)`

**Purpose:** Handles logic related to `request chat room messages`.

### SendChatRoomMessage
`public virtual uint SendChatRoomMessage(ulong chatRoomID, string msg, IChatRoomMessageSendListener listener)`

**Purpose:** Handles logic related to `send chat room message`.

### SendChatRoomMessage
`public virtual uint SendChatRoomMessage(ulong chatRoomID, string msg)`

**Purpose:** Handles logic related to `send chat room message`.

### GetChatRoomMessageByIndex
`public virtual uint GetChatRoomMessageByIndex(uint index, ref ulong messageID, ref ChatMessageType messageType, ref GalaxyID senderID, ref uint sendTime, out string buffer, uint bufferLength)`

**Purpose:** Gets the current value of `chat room message by index`.

### GetChatRoomMemberCount
`public virtual uint GetChatRoomMemberCount(ulong chatRoomID)`

**Purpose:** Gets the current value of `chat room member count`.

### GetChatRoomMemberUserIDByIndex
`public virtual GalaxyID GetChatRoomMemberUserIDByIndex(ulong chatRoomID, uint index)`

**Purpose:** Gets the current value of `chat room member user i d by index`.

### GetChatRoomUnreadMessageCount
`public virtual uint GetChatRoomUnreadMessageCount(ulong chatRoomID)`

**Purpose:** Gets the current value of `chat room unread message count`.

### MarkChatRoomAsRead
`public virtual void MarkChatRoomAsRead(ulong chatRoomID)`

**Purpose:** Handles logic related to `mark chat room as read`.

## Usage Example

```csharp
var value = new IChat();
value.Dispose();
```

## See Also

- [Complete Class Catalog](../catalog)