---
title: "IUser"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IUser`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IUser

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class IUser : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IUser.cs`

## Overview

`IUser` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public virtual void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### SignedIn
`public virtual bool SignedIn()`

**Purpose:** Handles logic related to `signed in`.

### GetGalaxyID
`public virtual GalaxyID GetGalaxyID()`

**Purpose:** Gets the current value of `galaxy i d`.

### SignInCredentials
`public virtual void SignInCredentials(string login, string password, IAuthListener listener)`

**Purpose:** Handles logic related to `sign in credentials`.

### SignInCredentials
`public virtual void SignInCredentials(string login, string password)`

**Purpose:** Handles logic related to `sign in credentials`.

### SignInToken
`public virtual void SignInToken(string refreshToken, IAuthListener listener)`

**Purpose:** Handles logic related to `sign in token`.

### SignInToken
`public virtual void SignInToken(string refreshToken)`

**Purpose:** Handles logic related to `sign in token`.

### SignInSteam
`public virtual void SignInSteam(byte steamAppTicket, uint steamAppTicketSize, string personaName, IAuthListener listener)`

**Purpose:** Handles logic related to `sign in steam`.

### SignInSteam
`public virtual void SignInSteam(byte steamAppTicket, uint steamAppTicketSize, string personaName)`

**Purpose:** Handles logic related to `sign in steam`.

### SignInEpic
`public virtual void SignInEpic(string epicAccessToken, string epicUsername, IAuthListener listener)`

**Purpose:** Handles logic related to `sign in epic`.

### SignInEpic
`public virtual void SignInEpic(string epicAccessToken, string epicUsername)`

**Purpose:** Handles logic related to `sign in epic`.

### SignInGalaxy
`public virtual void SignInGalaxy(bool requireOnline, IAuthListener listener)`

**Purpose:** Handles logic related to `sign in galaxy`.

### SignInGalaxy
`public virtual void SignInGalaxy(bool requireOnline)`

**Purpose:** Handles logic related to `sign in galaxy`.

### SignInGalaxy
`public virtual void SignInGalaxy()`

**Purpose:** Handles logic related to `sign in galaxy`.

### SignInUWP
`public virtual void SignInUWP(IAuthListener listener)`

**Purpose:** Handles logic related to `sign in u w p`.

### SignInUWP
`public virtual void SignInUWP()`

**Purpose:** Handles logic related to `sign in u w p`.

### SignInPS4
`public virtual void SignInPS4(string ps4ClientID, IAuthListener listener)`

**Purpose:** Handles logic related to `sign in p s4`.

### SignInPS4
`public virtual void SignInPS4(string ps4ClientID)`

**Purpose:** Handles logic related to `sign in p s4`.

### SignInXB1
`public virtual void SignInXB1(string xboxOneUserID, IAuthListener listener)`

**Purpose:** Handles logic related to `sign in x b1`.

### SignInXB1
`public virtual void SignInXB1(string xboxOneUserID)`

**Purpose:** Handles logic related to `sign in x b1`.

### SignInXBLive
`public virtual void SignInXBLive(string token, string signature, string marketplaceID, string locale, IAuthListener listener)`

**Purpose:** Handles logic related to `sign in x b live`.

### SignInXBLive
`public virtual void SignInXBLive(string token, string signature, string marketplaceID, string locale)`

**Purpose:** Handles logic related to `sign in x b live`.

### SignInAnonymous
`public virtual void SignInAnonymous(IAuthListener listener)`

**Purpose:** Handles logic related to `sign in anonymous`.

### SignInAnonymous
`public virtual void SignInAnonymous()`

**Purpose:** Handles logic related to `sign in anonymous`.

### SignInAnonymousTelemetry
`public virtual void SignInAnonymousTelemetry(IAuthListener listener)`

**Purpose:** Handles logic related to `sign in anonymous telemetry`.

### SignInAnonymousTelemetry
`public virtual void SignInAnonymousTelemetry()`

**Purpose:** Handles logic related to `sign in anonymous telemetry`.

### SignInServerKey
`public virtual void SignInServerKey(string serverKey, IAuthListener listener)`

**Purpose:** Handles logic related to `sign in server key`.

### SignInServerKey
`public virtual void SignInServerKey(string serverKey)`

**Purpose:** Handles logic related to `sign in server key`.

### SignOut
`public virtual void SignOut()`

**Purpose:** Handles logic related to `sign out`.

### RequestUserData
`public virtual void RequestUserData(GalaxyID userID, ISpecificUserDataListener listener)`

**Purpose:** Handles logic related to `request user data`.

### RequestUserData
`public virtual void RequestUserData(GalaxyID userID)`

**Purpose:** Handles logic related to `request user data`.

### RequestUserData
`public virtual void RequestUserData()`

**Purpose:** Handles logic related to `request user data`.

### IsUserDataAvailable
`public virtual bool IsUserDataAvailable(GalaxyID userID)`

**Purpose:** Handles logic related to `is user data available`.

### IsUserDataAvailable
`public virtual bool IsUserDataAvailable()`

**Purpose:** Handles logic related to `is user data available`.

### GetUserData
`public virtual string GetUserData(string key, GalaxyID userID)`

**Purpose:** Gets the current value of `user data`.

### GetUserData
`public virtual string GetUserData(string key)`

**Purpose:** Gets the current value of `user data`.

### GetUserDataCopy
`public virtual void GetUserDataCopy(string key, out string buffer, uint bufferLength, GalaxyID userID)`

**Purpose:** Gets the current value of `user data copy`.

### GetUserDataCopy
`public virtual void GetUserDataCopy(string key, out string buffer, uint bufferLength)`

**Purpose:** Gets the current value of `user data copy`.

### SetUserData
`public virtual void SetUserData(string key, string value, ISpecificUserDataListener listener)`

**Purpose:** Sets the value or state of `user data`.

### SetUserData
`public virtual void SetUserData(string key, string value)`

**Purpose:** Sets the value or state of `user data`.

### GetUserDataCount
`public virtual uint GetUserDataCount(GalaxyID userID)`

**Purpose:** Gets the current value of `user data count`.

### GetUserDataCount
`public virtual uint GetUserDataCount()`

**Purpose:** Gets the current value of `user data count`.

### GetUserDataByIndex
`public virtual bool GetUserDataByIndex(uint index, ref byte key, uint keyLength, ref byte value, uint valueLength, GalaxyID userID)`

**Purpose:** Gets the current value of `user data by index`.

### GetUserDataByIndex
`public virtual bool GetUserDataByIndex(uint index, ref byte key, uint keyLength, ref byte value, uint valueLength)`

**Purpose:** Gets the current value of `user data by index`.

### DeleteUserData
`public virtual void DeleteUserData(string key, ISpecificUserDataListener listener)`

**Purpose:** Handles logic related to `delete user data`.

### DeleteUserData
`public virtual void DeleteUserData(string key)`

**Purpose:** Handles logic related to `delete user data`.

### IsLoggedOn
`public virtual bool IsLoggedOn()`

**Purpose:** Handles logic related to `is logged on`.

### RequestEncryptedAppTicket
`public virtual void RequestEncryptedAppTicket(byte data, uint dataSize, IEncryptedAppTicketListener listener)`

**Purpose:** Handles logic related to `request encrypted app ticket`.

### RequestEncryptedAppTicket
`public virtual void RequestEncryptedAppTicket(byte data, uint dataSize)`

**Purpose:** Handles logic related to `request encrypted app ticket`.

### GetEncryptedAppTicket
`public virtual void GetEncryptedAppTicket(byte encryptedAppTicket, uint maxEncryptedAppTicketSize, ref uint currentEncryptedAppTicketSize)`

**Purpose:** Gets the current value of `encrypted app ticket`.

### GetSessionID
`public virtual ulong GetSessionID()`

**Purpose:** Gets the current value of `session i d`.

### GetAccessToken
`public virtual string GetAccessToken()`

**Purpose:** Gets the current value of `access token`.

### GetAccessTokenCopy
`public virtual void GetAccessTokenCopy(out string buffer, uint bufferLength)`

**Purpose:** Gets the current value of `access token copy`.

### ReportInvalidAccessToken
`public virtual bool ReportInvalidAccessToken(string accessToken, string info)`

**Purpose:** Handles logic related to `report invalid access token`.

### ReportInvalidAccessToken
`public virtual bool ReportInvalidAccessToken(string accessToken)`

**Purpose:** Handles logic related to `report invalid access token`.

## Usage Example

```csharp
var value = new IUser();
value.Dispose();
```

## See Also

- [Complete Class Catalog](../catalog)