---
title: "IChat"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IChat`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# IChat

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class IChat : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IChat.cs`

## 概述

`IChat` 位于 `Galaxy.Api`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Galaxy.Api` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Dispose
`public virtual void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### RequestChatRoomWithUser
`public virtual void RequestChatRoomWithUser(GalaxyID userID, IChatRoomWithUserRetrieveListener listener)`

**用途 / Purpose:** 处理 `request chat room with user` 相关逻辑。

### RequestChatRoomWithUser
`public virtual void RequestChatRoomWithUser(GalaxyID userID)`

**用途 / Purpose:** 处理 `request chat room with user` 相关逻辑。

### RequestChatRoomMessages
`public virtual void RequestChatRoomMessages(ulong chatRoomID, uint limit, ulong referenceMessageID, IChatRoomMessagesRetrieveListener listener)`

**用途 / Purpose:** 处理 `request chat room messages` 相关逻辑。

### RequestChatRoomMessages
`public virtual void RequestChatRoomMessages(ulong chatRoomID, uint limit, ulong referenceMessageID)`

**用途 / Purpose:** 处理 `request chat room messages` 相关逻辑。

### RequestChatRoomMessages
`public virtual void RequestChatRoomMessages(ulong chatRoomID, uint limit)`

**用途 / Purpose:** 处理 `request chat room messages` 相关逻辑。

### SendChatRoomMessage
`public virtual uint SendChatRoomMessage(ulong chatRoomID, string msg, IChatRoomMessageSendListener listener)`

**用途 / Purpose:** 处理 `send chat room message` 相关逻辑。

### SendChatRoomMessage
`public virtual uint SendChatRoomMessage(ulong chatRoomID, string msg)`

**用途 / Purpose:** 处理 `send chat room message` 相关逻辑。

### GetChatRoomMessageByIndex
`public virtual uint GetChatRoomMessageByIndex(uint index, ref ulong messageID, ref ChatMessageType messageType, ref GalaxyID senderID, ref uint sendTime, out string buffer, uint bufferLength)`

**用途 / Purpose:** 获取 `chat room message by index` 的当前值。

### GetChatRoomMemberCount
`public virtual uint GetChatRoomMemberCount(ulong chatRoomID)`

**用途 / Purpose:** 获取 `chat room member count` 的当前值。

### GetChatRoomMemberUserIDByIndex
`public virtual GalaxyID GetChatRoomMemberUserIDByIndex(ulong chatRoomID, uint index)`

**用途 / Purpose:** 获取 `chat room member user i d by index` 的当前值。

### GetChatRoomUnreadMessageCount
`public virtual uint GetChatRoomUnreadMessageCount(ulong chatRoomID)`

**用途 / Purpose:** 获取 `chat room unread message count` 的当前值。

### MarkChatRoomAsRead
`public virtual void MarkChatRoomAsRead(ulong chatRoomID)`

**用途 / Purpose:** 处理 `mark chat room as read` 相关逻辑。

## 使用示例

```csharp
var value = new IChat();
value.Dispose();
```

## 参见

- [完整类目录](../catalog)