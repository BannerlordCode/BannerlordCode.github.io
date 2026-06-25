---
title: "IMatchmaking"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IMatchmaking`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# IMatchmaking

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class IMatchmaking : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IMatchmaking.cs`

## 概述

`IMatchmaking` 位于 `Galaxy.Api`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Galaxy.Api` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Dispose
`public virtual void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### SendLobbyMessage
`public bool SendLobbyMessage(GalaxyID lobbyID, string msg)`

**用途 / Purpose:** 处理 `send lobby message` 相关逻辑。

### GetLobbyMessage
`public uint GetLobbyMessage(GalaxyID lobbyID, uint messageID, ref GalaxyID _senderID, out string msg, uint internalBufferLen = 1024u)`

**用途 / Purpose:** 获取 `lobby message` 的当前值。

### CreateLobby
`public virtual void CreateLobby(LobbyType lobbyType, uint maxMembers, bool joinable, LobbyTopologyType lobbyTopologyType, ILobbyCreatedListener lobbyCreatedListener, ILobbyEnteredListener lobbyEnteredListener)`

**用途 / Purpose:** 创建一个 `lobby` 实例或对象。

### CreateLobby
`public virtual void CreateLobby(LobbyType lobbyType, uint maxMembers, bool joinable, LobbyTopologyType lobbyTopologyType, ILobbyCreatedListener lobbyCreatedListener)`

**用途 / Purpose:** 创建一个 `lobby` 实例或对象。

### CreateLobby
`public virtual void CreateLobby(LobbyType lobbyType, uint maxMembers, bool joinable, LobbyTopologyType lobbyTopologyType)`

**用途 / Purpose:** 创建一个 `lobby` 实例或对象。

### RequestLobbyList
`public virtual void RequestLobbyList(bool allowFullLobbies, ILobbyListListener listener)`

**用途 / Purpose:** 处理 `request lobby list` 相关逻辑。

### RequestLobbyList
`public virtual void RequestLobbyList(bool allowFullLobbies)`

**用途 / Purpose:** 处理 `request lobby list` 相关逻辑。

### RequestLobbyList
`public virtual void RequestLobbyList()`

**用途 / Purpose:** 处理 `request lobby list` 相关逻辑。

### AddRequestLobbyListResultCountFilter
`public virtual void AddRequestLobbyListResultCountFilter(uint limit)`

**用途 / Purpose:** 向当前集合/状态中添加 `request lobby list result count filter`。

### AddRequestLobbyListStringFilter
`public virtual void AddRequestLobbyListStringFilter(string keyToMatch, string valueToMatch, LobbyComparisonType comparisonType)`

**用途 / Purpose:** 向当前集合/状态中添加 `request lobby list string filter`。

### AddRequestLobbyListNumericalFilter
`public virtual void AddRequestLobbyListNumericalFilter(string keyToMatch, int valueToMatch, LobbyComparisonType comparisonType)`

**用途 / Purpose:** 向当前集合/状态中添加 `request lobby list numerical filter`。

### AddRequestLobbyListNearValueFilter
`public virtual void AddRequestLobbyListNearValueFilter(string keyToMatch, int valueToBeCloseTo)`

**用途 / Purpose:** 向当前集合/状态中添加 `request lobby list near value filter`。

### GetLobbyByIndex
`public virtual GalaxyID GetLobbyByIndex(uint index)`

**用途 / Purpose:** 获取 `lobby by index` 的当前值。

### JoinLobby
`public virtual void JoinLobby(GalaxyID lobbyID, ILobbyEnteredListener listener)`

**用途 / Purpose:** 处理 `join lobby` 相关逻辑。

### JoinLobby
`public virtual void JoinLobby(GalaxyID lobbyID)`

**用途 / Purpose:** 处理 `join lobby` 相关逻辑。

### LeaveLobby
`public virtual void LeaveLobby(GalaxyID lobbyID, ILobbyLeftListener listener)`

**用途 / Purpose:** 处理 `leave lobby` 相关逻辑。

### LeaveLobby
`public virtual void LeaveLobby(GalaxyID lobbyID)`

**用途 / Purpose:** 处理 `leave lobby` 相关逻辑。

### SetMaxNumLobbyMembers
`public virtual void SetMaxNumLobbyMembers(GalaxyID lobbyID, uint maxNumLobbyMembers, ILobbyDataUpdateListener listener)`

**用途 / Purpose:** 设置 `max num lobby members` 的值或状态。

### SetMaxNumLobbyMembers
`public virtual void SetMaxNumLobbyMembers(GalaxyID lobbyID, uint maxNumLobbyMembers)`

**用途 / Purpose:** 设置 `max num lobby members` 的值或状态。

### GetMaxNumLobbyMembers
`public virtual uint GetMaxNumLobbyMembers(GalaxyID lobbyID)`

**用途 / Purpose:** 获取 `max num lobby members` 的当前值。

### GetNumLobbyMembers
`public virtual uint GetNumLobbyMembers(GalaxyID lobbyID)`

**用途 / Purpose:** 获取 `num lobby members` 的当前值。

### GetLobbyMemberByIndex
`public virtual GalaxyID GetLobbyMemberByIndex(GalaxyID lobbyID, uint index)`

**用途 / Purpose:** 获取 `lobby member by index` 的当前值。

### SetLobbyType
`public virtual void SetLobbyType(GalaxyID lobbyID, LobbyType lobbyType, ILobbyDataUpdateListener listener)`

**用途 / Purpose:** 设置 `lobby type` 的值或状态。

### SetLobbyType
`public virtual void SetLobbyType(GalaxyID lobbyID, LobbyType lobbyType)`

**用途 / Purpose:** 设置 `lobby type` 的值或状态。

### GetLobbyType
`public virtual LobbyType GetLobbyType(GalaxyID lobbyID)`

**用途 / Purpose:** 获取 `lobby type` 的当前值。

### SetLobbyJoinable
`public virtual void SetLobbyJoinable(GalaxyID lobbyID, bool joinable, ILobbyDataUpdateListener listener)`

**用途 / Purpose:** 设置 `lobby joinable` 的值或状态。

### SetLobbyJoinable
`public virtual void SetLobbyJoinable(GalaxyID lobbyID, bool joinable)`

**用途 / Purpose:** 设置 `lobby joinable` 的值或状态。

### IsLobbyJoinable
`public virtual bool IsLobbyJoinable(GalaxyID lobbyID)`

**用途 / Purpose:** 处理 `is lobby joinable` 相关逻辑。

### RequestLobbyData
`public virtual void RequestLobbyData(GalaxyID lobbyID, ILobbyDataRetrieveListener listener)`

**用途 / Purpose:** 处理 `request lobby data` 相关逻辑。

### RequestLobbyData
`public virtual void RequestLobbyData(GalaxyID lobbyID)`

**用途 / Purpose:** 处理 `request lobby data` 相关逻辑。

### GetLobbyData
`public virtual string GetLobbyData(GalaxyID lobbyID, string key)`

**用途 / Purpose:** 获取 `lobby data` 的当前值。

### GetLobbyDataCopy
`public virtual void GetLobbyDataCopy(GalaxyID lobbyID, string key, out string buffer, uint bufferLength)`

**用途 / Purpose:** 获取 `lobby data copy` 的当前值。

### SetLobbyData
`public virtual void SetLobbyData(GalaxyID lobbyID, string key, string value, ILobbyDataUpdateListener listener)`

**用途 / Purpose:** 设置 `lobby data` 的值或状态。

### SetLobbyData
`public virtual void SetLobbyData(GalaxyID lobbyID, string key, string value)`

**用途 / Purpose:** 设置 `lobby data` 的值或状态。

### GetLobbyDataCount
`public virtual uint GetLobbyDataCount(GalaxyID lobbyID)`

**用途 / Purpose:** 获取 `lobby data count` 的当前值。

### GetLobbyDataByIndex
`public virtual bool GetLobbyDataByIndex(GalaxyID lobbyID, uint index, ref byte key, uint keyLength, ref byte value, uint valueLength)`

**用途 / Purpose:** 获取 `lobby data by index` 的当前值。

### DeleteLobbyData
`public virtual void DeleteLobbyData(GalaxyID lobbyID, string key, ILobbyDataUpdateListener listener)`

**用途 / Purpose:** 处理 `delete lobby data` 相关逻辑。

### DeleteLobbyData
`public virtual void DeleteLobbyData(GalaxyID lobbyID, string key)`

**用途 / Purpose:** 处理 `delete lobby data` 相关逻辑。

### GetLobbyMemberData
`public virtual string GetLobbyMemberData(GalaxyID lobbyID, GalaxyID memberID, string key)`

**用途 / Purpose:** 获取 `lobby member data` 的当前值。

### GetLobbyMemberDataCopy
`public virtual void GetLobbyMemberDataCopy(GalaxyID lobbyID, GalaxyID memberID, string key, out string buffer, uint bufferLength)`

**用途 / Purpose:** 获取 `lobby member data copy` 的当前值。

### SetLobbyMemberData
`public virtual void SetLobbyMemberData(GalaxyID lobbyID, string key, string value, ILobbyMemberDataUpdateListener listener)`

**用途 / Purpose:** 设置 `lobby member data` 的值或状态。

### SetLobbyMemberData
`public virtual void SetLobbyMemberData(GalaxyID lobbyID, string key, string value)`

**用途 / Purpose:** 设置 `lobby member data` 的值或状态。

### GetLobbyMemberDataCount
`public virtual uint GetLobbyMemberDataCount(GalaxyID lobbyID, GalaxyID memberID)`

**用途 / Purpose:** 获取 `lobby member data count` 的当前值。

### GetLobbyMemberDataByIndex
`public virtual bool GetLobbyMemberDataByIndex(GalaxyID lobbyID, GalaxyID memberID, uint index, ref byte key, uint keyLength, ref byte value, uint valueLength)`

**用途 / Purpose:** 获取 `lobby member data by index` 的当前值。

### DeleteLobbyMemberData
`public virtual void DeleteLobbyMemberData(GalaxyID lobbyID, string key, ILobbyMemberDataUpdateListener listener)`

**用途 / Purpose:** 处理 `delete lobby member data` 相关逻辑。

### DeleteLobbyMemberData
`public virtual void DeleteLobbyMemberData(GalaxyID lobbyID, string key)`

**用途 / Purpose:** 处理 `delete lobby member data` 相关逻辑。

### GetLobbyOwner
`public virtual GalaxyID GetLobbyOwner(GalaxyID lobbyID)`

**用途 / Purpose:** 获取 `lobby owner` 的当前值。

### SendLobbyMessage
`public virtual bool SendLobbyMessage(GalaxyID lobbyID, byte data, uint dataSize)`

**用途 / Purpose:** 处理 `send lobby message` 相关逻辑。

### GetLobbyMessage
`public virtual uint GetLobbyMessage(GalaxyID lobbyID, uint messageID, ref GalaxyID senderID, ref byte msg, uint msgLength)`

**用途 / Purpose:** 获取 `lobby message` 的当前值。

## 使用示例

```csharp
var value = new IMatchmaking();
value.Dispose();
```

## 参见

- [完整类目录](../catalog)