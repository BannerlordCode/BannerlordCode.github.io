<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CSteamID`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CSteamID

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct CSteamID : IEquatable<CSteamID>, IComparable<CSteamID>`
**Base:** `IEquatable<CSteamID>`
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/CSteamID.cs`

## 概述

`CSteamID` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Set
`public void Set(AccountID_t unAccountID, EUniverse eUniverse, EAccountType eAccountType)`

**用途 / Purpose:** 设置 `set` 的值或状态。

### InstancedSet
`public void InstancedSet(AccountID_t unAccountID, uint unInstance, EUniverse eUniverse, EAccountType eAccountType)`

**用途 / Purpose:** 处理 `instanced set` 相关逻辑。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### CreateBlankAnonLogon
`public void CreateBlankAnonLogon(EUniverse eUniverse)`

**用途 / Purpose:** 创建一个 `blank anon logon` 实例或对象。

### CreateBlankAnonUserLogon
`public void CreateBlankAnonUserLogon(EUniverse eUniverse)`

**用途 / Purpose:** 创建一个 `blank anon user logon` 实例或对象。

### BBlankAnonAccount
`public bool BBlankAnonAccount()`

**用途 / Purpose:** 处理 `b blank anon account` 相关逻辑。

### BGameServerAccount
`public bool BGameServerAccount()`

**用途 / Purpose:** 处理 `b game server account` 相关逻辑。

### BPersistentGameServerAccount
`public bool BPersistentGameServerAccount()`

**用途 / Purpose:** 处理 `b persistent game server account` 相关逻辑。

### BAnonGameServerAccount
`public bool BAnonGameServerAccount()`

**用途 / Purpose:** 处理 `b anon game server account` 相关逻辑。

### BContentServerAccount
`public bool BContentServerAccount()`

**用途 / Purpose:** 处理 `b content server account` 相关逻辑。

### BClanAccount
`public bool BClanAccount()`

**用途 / Purpose:** 处理 `b clan account` 相关逻辑。

### BChatAccount
`public bool BChatAccount()`

**用途 / Purpose:** 处理 `b chat account` 相关逻辑。

### IsLobby
`public bool IsLobby()`

**用途 / Purpose:** 处理 `is lobby` 相关逻辑。

### BIndividualAccount
`public bool BIndividualAccount()`

**用途 / Purpose:** 处理 `b individual account` 相关逻辑。

### BAnonAccount
`public bool BAnonAccount()`

**用途 / Purpose:** 处理 `b anon account` 相关逻辑。

### BAnonUserAccount
`public bool BAnonUserAccount()`

**用途 / Purpose:** 处理 `b anon user account` 相关逻辑。

### BConsoleUserAccount
`public bool BConsoleUserAccount()`

**用途 / Purpose:** 处理 `b console user account` 相关逻辑。

### SetAccountID
`public void SetAccountID(AccountID_t other)`

**用途 / Purpose:** 设置 `account i d` 的值或状态。

### SetAccountInstance
`public void SetAccountInstance(uint other)`

**用途 / Purpose:** 设置 `account instance` 的值或状态。

### SetEAccountType
`public void SetEAccountType(EAccountType other)`

**用途 / Purpose:** 设置 `e account type` 的值或状态。

### SetEUniverse
`public void SetEUniverse(EUniverse other)`

**用途 / Purpose:** 设置 `e universe` 的值或状态。

### GetAccountID
`public AccountID_t GetAccountID()`

**用途 / Purpose:** 获取 `account i d` 的当前值。

### GetUnAccountInstance
`public uint GetUnAccountInstance()`

**用途 / Purpose:** 获取 `un account instance` 的当前值。

### GetEAccountType
`public EAccountType GetEAccountType()`

**用途 / Purpose:** 获取 `e account type` 的当前值。

### GetEUniverse
`public EUniverse GetEUniverse()`

**用途 / Purpose:** 获取 `e universe` 的当前值。

### IsValid
`public bool IsValid()`

**用途 / Purpose:** 处理 `is valid` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Equals
`public override bool Equals(object other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### CSteamID
`public static explicit operator CSteamID(ulong value)`

**用途 / Purpose:** 处理 `c steam i d` 相关逻辑。

### ulong
`public static explicit operator ulong(CSteamID that)`

**用途 / Purpose:** 处理 `ulong` 相关逻辑。

### Equals
`public bool Equals(CSteamID other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### CompareTo
`public int CompareTo(CSteamID other)`

**用途 / Purpose:** 处理 `compare to` 相关逻辑。

## 使用示例

```csharp
var value = new CSteamID();
value.Set(unAccountID, eUniverse, eAccountType);
```

## 参见

- [完整类目录](../catalog)