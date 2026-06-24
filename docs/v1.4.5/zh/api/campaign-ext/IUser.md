<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IUser`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# IUser

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class IUser : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IUser.cs`

## 概述

`IUser` 位于 `Galaxy.Api`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Galaxy.Api` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Dispose
`public virtual void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### SignedIn
`public virtual bool SignedIn()`

**用途 / Purpose:** 处理 `signed in` 相关逻辑。

### GetGalaxyID
`public virtual GalaxyID GetGalaxyID()`

**用途 / Purpose:** 获取 `galaxy i d` 的当前值。

### SignInCredentials
`public virtual void SignInCredentials(string login, string password, IAuthListener listener)`

**用途 / Purpose:** 处理 `sign in credentials` 相关逻辑。

### SignInCredentials
`public virtual void SignInCredentials(string login, string password)`

**用途 / Purpose:** 处理 `sign in credentials` 相关逻辑。

### SignInToken
`public virtual void SignInToken(string refreshToken, IAuthListener listener)`

**用途 / Purpose:** 处理 `sign in token` 相关逻辑。

### SignInToken
`public virtual void SignInToken(string refreshToken)`

**用途 / Purpose:** 处理 `sign in token` 相关逻辑。

### SignInSteam
`public virtual void SignInSteam(byte steamAppTicket, uint steamAppTicketSize, string personaName, IAuthListener listener)`

**用途 / Purpose:** 处理 `sign in steam` 相关逻辑。

### SignInSteam
`public virtual void SignInSteam(byte steamAppTicket, uint steamAppTicketSize, string personaName)`

**用途 / Purpose:** 处理 `sign in steam` 相关逻辑。

### SignInEpic
`public virtual void SignInEpic(string epicAccessToken, string epicUsername, IAuthListener listener)`

**用途 / Purpose:** 处理 `sign in epic` 相关逻辑。

### SignInEpic
`public virtual void SignInEpic(string epicAccessToken, string epicUsername)`

**用途 / Purpose:** 处理 `sign in epic` 相关逻辑。

### SignInGalaxy
`public virtual void SignInGalaxy(bool requireOnline, IAuthListener listener)`

**用途 / Purpose:** 处理 `sign in galaxy` 相关逻辑。

### SignInGalaxy
`public virtual void SignInGalaxy(bool requireOnline)`

**用途 / Purpose:** 处理 `sign in galaxy` 相关逻辑。

### SignInGalaxy
`public virtual void SignInGalaxy()`

**用途 / Purpose:** 处理 `sign in galaxy` 相关逻辑。

### SignInUWP
`public virtual void SignInUWP(IAuthListener listener)`

**用途 / Purpose:** 处理 `sign in u w p` 相关逻辑。

### SignInUWP
`public virtual void SignInUWP()`

**用途 / Purpose:** 处理 `sign in u w p` 相关逻辑。

### SignInPS4
`public virtual void SignInPS4(string ps4ClientID, IAuthListener listener)`

**用途 / Purpose:** 处理 `sign in p s4` 相关逻辑。

### SignInPS4
`public virtual void SignInPS4(string ps4ClientID)`

**用途 / Purpose:** 处理 `sign in p s4` 相关逻辑。

### SignInXB1
`public virtual void SignInXB1(string xboxOneUserID, IAuthListener listener)`

**用途 / Purpose:** 处理 `sign in x b1` 相关逻辑。

### SignInXB1
`public virtual void SignInXB1(string xboxOneUserID)`

**用途 / Purpose:** 处理 `sign in x b1` 相关逻辑。

### SignInXBLive
`public virtual void SignInXBLive(string token, string signature, string marketplaceID, string locale, IAuthListener listener)`

**用途 / Purpose:** 处理 `sign in x b live` 相关逻辑。

### SignInXBLive
`public virtual void SignInXBLive(string token, string signature, string marketplaceID, string locale)`

**用途 / Purpose:** 处理 `sign in x b live` 相关逻辑。

### SignInAnonymous
`public virtual void SignInAnonymous(IAuthListener listener)`

**用途 / Purpose:** 处理 `sign in anonymous` 相关逻辑。

### SignInAnonymous
`public virtual void SignInAnonymous()`

**用途 / Purpose:** 处理 `sign in anonymous` 相关逻辑。

### SignInAnonymousTelemetry
`public virtual void SignInAnonymousTelemetry(IAuthListener listener)`

**用途 / Purpose:** 处理 `sign in anonymous telemetry` 相关逻辑。

### SignInAnonymousTelemetry
`public virtual void SignInAnonymousTelemetry()`

**用途 / Purpose:** 处理 `sign in anonymous telemetry` 相关逻辑。

### SignInServerKey
`public virtual void SignInServerKey(string serverKey, IAuthListener listener)`

**用途 / Purpose:** 处理 `sign in server key` 相关逻辑。

### SignInServerKey
`public virtual void SignInServerKey(string serverKey)`

**用途 / Purpose:** 处理 `sign in server key` 相关逻辑。

### SignOut
`public virtual void SignOut()`

**用途 / Purpose:** 处理 `sign out` 相关逻辑。

### RequestUserData
`public virtual void RequestUserData(GalaxyID userID, ISpecificUserDataListener listener)`

**用途 / Purpose:** 处理 `request user data` 相关逻辑。

### RequestUserData
`public virtual void RequestUserData(GalaxyID userID)`

**用途 / Purpose:** 处理 `request user data` 相关逻辑。

### RequestUserData
`public virtual void RequestUserData()`

**用途 / Purpose:** 处理 `request user data` 相关逻辑。

### IsUserDataAvailable
`public virtual bool IsUserDataAvailable(GalaxyID userID)`

**用途 / Purpose:** 处理 `is user data available` 相关逻辑。

### IsUserDataAvailable
`public virtual bool IsUserDataAvailable()`

**用途 / Purpose:** 处理 `is user data available` 相关逻辑。

### GetUserData
`public virtual string GetUserData(string key, GalaxyID userID)`

**用途 / Purpose:** 获取 `user data` 的当前值。

### GetUserData
`public virtual string GetUserData(string key)`

**用途 / Purpose:** 获取 `user data` 的当前值。

### GetUserDataCopy
`public virtual void GetUserDataCopy(string key, out string buffer, uint bufferLength, GalaxyID userID)`

**用途 / Purpose:** 获取 `user data copy` 的当前值。

### GetUserDataCopy
`public virtual void GetUserDataCopy(string key, out string buffer, uint bufferLength)`

**用途 / Purpose:** 获取 `user data copy` 的当前值。

### SetUserData
`public virtual void SetUserData(string key, string value, ISpecificUserDataListener listener)`

**用途 / Purpose:** 设置 `user data` 的值或状态。

### SetUserData
`public virtual void SetUserData(string key, string value)`

**用途 / Purpose:** 设置 `user data` 的值或状态。

### GetUserDataCount
`public virtual uint GetUserDataCount(GalaxyID userID)`

**用途 / Purpose:** 获取 `user data count` 的当前值。

### GetUserDataCount
`public virtual uint GetUserDataCount()`

**用途 / Purpose:** 获取 `user data count` 的当前值。

### GetUserDataByIndex
`public virtual bool GetUserDataByIndex(uint index, ref byte key, uint keyLength, ref byte value, uint valueLength, GalaxyID userID)`

**用途 / Purpose:** 获取 `user data by index` 的当前值。

### GetUserDataByIndex
`public virtual bool GetUserDataByIndex(uint index, ref byte key, uint keyLength, ref byte value, uint valueLength)`

**用途 / Purpose:** 获取 `user data by index` 的当前值。

### DeleteUserData
`public virtual void DeleteUserData(string key, ISpecificUserDataListener listener)`

**用途 / Purpose:** 处理 `delete user data` 相关逻辑。

### DeleteUserData
`public virtual void DeleteUserData(string key)`

**用途 / Purpose:** 处理 `delete user data` 相关逻辑。

### IsLoggedOn
`public virtual bool IsLoggedOn()`

**用途 / Purpose:** 处理 `is logged on` 相关逻辑。

### RequestEncryptedAppTicket
`public virtual void RequestEncryptedAppTicket(byte data, uint dataSize, IEncryptedAppTicketListener listener)`

**用途 / Purpose:** 处理 `request encrypted app ticket` 相关逻辑。

### RequestEncryptedAppTicket
`public virtual void RequestEncryptedAppTicket(byte data, uint dataSize)`

**用途 / Purpose:** 处理 `request encrypted app ticket` 相关逻辑。

### GetEncryptedAppTicket
`public virtual void GetEncryptedAppTicket(byte encryptedAppTicket, uint maxEncryptedAppTicketSize, ref uint currentEncryptedAppTicketSize)`

**用途 / Purpose:** 获取 `encrypted app ticket` 的当前值。

### GetSessionID
`public virtual ulong GetSessionID()`

**用途 / Purpose:** 获取 `session i d` 的当前值。

### GetAccessToken
`public virtual string GetAccessToken()`

**用途 / Purpose:** 获取 `access token` 的当前值。

### GetAccessTokenCopy
`public virtual void GetAccessTokenCopy(out string buffer, uint bufferLength)`

**用途 / Purpose:** 获取 `access token copy` 的当前值。

### ReportInvalidAccessToken
`public virtual bool ReportInvalidAccessToken(string accessToken, string info)`

**用途 / Purpose:** 处理 `report invalid access token` 相关逻辑。

### ReportInvalidAccessToken
`public virtual bool ReportInvalidAccessToken(string accessToken)`

**用途 / Purpose:** 处理 `report invalid access token` 相关逻辑。

## 使用示例

```csharp
var value = new IUser();
value.Dispose();
```

## 参见

- [完整类目录](../catalog)