---
title: "SteamUser"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamUser`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamUser

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamUser`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamUser.cs`

## Overview

`SteamUser` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetHSteamUser
`public static HSteamUser GetHSteamUser()`

**Purpose:** Gets the current value of `h steam user`.

### BLoggedOn
`public static bool BLoggedOn()`

**Purpose:** Handles logic related to `b logged on`.

### GetSteamID
`public static CSteamID GetSteamID()`

**Purpose:** Gets the current value of `steam i d`.

### InitiateGameConnection_DEPRECATED
`public static int InitiateGameConnection_DEPRECATED(byte pAuthBlob, int cbMaxAuthBlob, CSteamID steamIDGameServer, uint unIPServer, ushort usPortServer, bool bSecure)`

**Purpose:** Initializes the state, resources, or bindings for `iate game connection_ d e p r e c a t e d`.

### TerminateGameConnection_DEPRECATED
`public static void TerminateGameConnection_DEPRECATED(uint unIPServer, ushort usPortServer)`

**Purpose:** Handles logic related to `terminate game connection_ d e p r e c a t e d`.

### TrackAppUsageEvent
`public static void TrackAppUsageEvent(CGameID gameID, int eAppUsageEvent, string pchExtraInfo = "")`

**Purpose:** Handles logic related to `track app usage event`.

### GetUserDataFolder
`public static bool GetUserDataFolder(out string pchBuffer, int cubBuffer)`

**Purpose:** Gets the current value of `user data folder`.

### StartVoiceRecording
`public static void StartVoiceRecording()`

**Purpose:** Handles logic related to `start voice recording`.

### StopVoiceRecording
`public static void StopVoiceRecording()`

**Purpose:** Handles logic related to `stop voice recording`.

### GetAvailableVoice
`public static EVoiceResult GetAvailableVoice(out uint pcbCompressed)`

**Purpose:** Gets the current value of `available voice`.

### GetVoice
`public static EVoiceResult GetVoice(bool bWantCompressed, byte pDestBuffer, uint cbDestBufferSize, out uint nBytesWritten)`

**Purpose:** Gets the current value of `voice`.

### DecompressVoice
`public static EVoiceResult DecompressVoice(byte pCompressed, uint cbCompressed, byte pDestBuffer, uint cbDestBufferSize, out uint nBytesWritten, uint nDesiredSampleRate)`

**Purpose:** Handles logic related to `decompress voice`.

### GetVoiceOptimalSampleRate
`public static uint GetVoiceOptimalSampleRate()`

**Purpose:** Gets the current value of `voice optimal sample rate`.

### GetAuthSessionTicket
`public static HAuthTicket GetAuthSessionTicket(byte pTicket, int cbMaxTicket, out uint pcbTicket)`

**Purpose:** Gets the current value of `auth session ticket`.

### BeginAuthSession
`public static EBeginAuthSessionResult BeginAuthSession(byte pAuthTicket, int cbAuthTicket, CSteamID steamID)`

**Purpose:** Handles logic related to `begin auth session`.

### EndAuthSession
`public static void EndAuthSession(CSteamID steamID)`

**Purpose:** Handles logic related to `end auth session`.

### CancelAuthTicket
`public static void CancelAuthTicket(HAuthTicket hAuthTicket)`

**Purpose:** Checks whether the current object can `cel auth ticket`.

### UserHasLicenseForApp
`public static EUserHasLicenseForAppResult UserHasLicenseForApp(CSteamID steamID, AppId_t appID)`

**Purpose:** Handles logic related to `user has license for app`.

### BIsBehindNAT
`public static bool BIsBehindNAT()`

**Purpose:** Handles logic related to `b is behind n a t`.

### AdvertiseGame
`public static void AdvertiseGame(CSteamID steamIDGameServer, uint unIPServer, ushort usPortServer)`

**Purpose:** Handles logic related to `advertise game`.

### RequestEncryptedAppTicket
`public static SteamAPICall_t RequestEncryptedAppTicket(byte pDataToInclude, int cbDataToInclude)`

**Purpose:** Handles logic related to `request encrypted app ticket`.

### GetEncryptedAppTicket
`public static bool GetEncryptedAppTicket(byte pTicket, int cbMaxTicket, out uint pcbTicket)`

**Purpose:** Gets the current value of `encrypted app ticket`.

### GetGameBadgeLevel
`public static int GetGameBadgeLevel(int nSeries, bool bFoil)`

**Purpose:** Gets the current value of `game badge level`.

### GetPlayerSteamLevel
`public static int GetPlayerSteamLevel()`

**Purpose:** Gets the current value of `player steam level`.

### RequestStoreAuthURL
`public static SteamAPICall_t RequestStoreAuthURL(string pchRedirectURL)`

**Purpose:** Handles logic related to `request store auth u r l`.

### BIsPhoneVerified
`public static bool BIsPhoneVerified()`

**Purpose:** Handles logic related to `b is phone verified`.

### BIsTwoFactorEnabled
`public static bool BIsTwoFactorEnabled()`

**Purpose:** Handles logic related to `b is two factor enabled`.

### BIsPhoneIdentifying
`public static bool BIsPhoneIdentifying()`

**Purpose:** Handles logic related to `b is phone identifying`.

### BIsPhoneRequiringVerification
`public static bool BIsPhoneRequiringVerification()`

**Purpose:** Handles logic related to `b is phone requiring verification`.

### GetMarketEligibility
`public static SteamAPICall_t GetMarketEligibility()`

**Purpose:** Gets the current value of `market eligibility`.

### GetDurationControl
`public static SteamAPICall_t GetDurationControl()`

**Purpose:** Gets the current value of `duration control`.

### BSetDurationControlOnlineState
`public static bool BSetDurationControlOnlineState(EDurationControlOnlineState eNewState)`

**Purpose:** Handles logic related to `b set duration control online state`.

## Usage Example

```csharp
SteamUser.GetHSteamUser();
```

## See Also

- [Complete Class Catalog](../catalog)