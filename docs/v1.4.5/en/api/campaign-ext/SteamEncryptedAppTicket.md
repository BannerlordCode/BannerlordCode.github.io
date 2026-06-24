<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamEncryptedAppTicket`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamEncryptedAppTicket

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamEncryptedAppTicket`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamEncryptedAppTicket.cs`

## Overview

`SteamEncryptedAppTicket` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BDecryptTicket
`public static bool BDecryptTicket(byte rgubTicketEncrypted, uint cubTicketEncrypted, byte rgubTicketDecrypted, ref uint pcubTicketDecrypted, byte rgubKey, int cubKey)`

**Purpose:** Handles logic related to `b decrypt ticket`.

### BIsTicketForApp
`public static bool BIsTicketForApp(byte rgubTicketDecrypted, uint cubTicketDecrypted, AppId_t nAppID)`

**Purpose:** Handles logic related to `b is ticket for app`.

### GetTicketIssueTime
`public static uint GetTicketIssueTime(byte rgubTicketDecrypted, uint cubTicketDecrypted)`

**Purpose:** Gets the current value of `ticket issue time`.

### GetTicketSteamID
`public static void GetTicketSteamID(byte rgubTicketDecrypted, uint cubTicketDecrypted, out CSteamID psteamID)`

**Purpose:** Gets the current value of `ticket steam i d`.

### GetTicketAppID
`public static uint GetTicketAppID(byte rgubTicketDecrypted, uint cubTicketDecrypted)`

**Purpose:** Gets the current value of `ticket app i d`.

### BUserOwnsAppInTicket
`public static bool BUserOwnsAppInTicket(byte rgubTicketDecrypted, uint cubTicketDecrypted, AppId_t nAppID)`

**Purpose:** Handles logic related to `b user owns app in ticket`.

### BUserIsVacBanned
`public static bool BUserIsVacBanned(byte rgubTicketDecrypted, uint cubTicketDecrypted)`

**Purpose:** Handles logic related to `b user is vac banned`.

### GetUserVariableData
`public static byte GetUserVariableData(byte rgubTicketDecrypted, uint cubTicketDecrypted, out uint pcubUserData)`

**Purpose:** Gets the current value of `user variable data`.

### BIsTicketSigned
`public static bool BIsTicketSigned(byte rgubTicketDecrypted, uint cubTicketDecrypted, byte pubRSAKey, uint cubRSAKey)`

**Purpose:** Handles logic related to `b is ticket signed`.

## Usage Example

```csharp
SteamEncryptedAppTicket.BDecryptTicket(0, 0, 0, pcubTicketDecrypted, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)