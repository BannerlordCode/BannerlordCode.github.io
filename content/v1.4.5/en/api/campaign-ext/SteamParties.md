---
title: "SteamParties"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamParties`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamParties

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamParties`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamParties.cs`

## Overview

`SteamParties` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetNumActiveBeacons
`public static uint GetNumActiveBeacons()`

**Purpose:** Gets the current value of `num active beacons`.

### GetBeaconByIndex
`public static PartyBeaconID_t GetBeaconByIndex(uint unIndex)`

**Purpose:** Gets the current value of `beacon by index`.

### GetBeaconDetails
`public static bool GetBeaconDetails(PartyBeaconID_t ulBeaconID, out CSteamID pSteamIDBeaconOwner, out SteamPartyBeaconLocation_t pLocation, out string pchMetadata, int cchMetadata)`

**Purpose:** Gets the current value of `beacon details`.

### JoinParty
`public static SteamAPICall_t JoinParty(PartyBeaconID_t ulBeaconID)`

**Purpose:** Handles logic related to `join party`.

### GetNumAvailableBeaconLocations
`public static bool GetNumAvailableBeaconLocations(out uint puNumLocations)`

**Purpose:** Gets the current value of `num available beacon locations`.

### GetAvailableBeaconLocations
`public static bool GetAvailableBeaconLocations(SteamPartyBeaconLocation_t pLocationList, uint uMaxNumLocations)`

**Purpose:** Gets the current value of `available beacon locations`.

### CreateBeacon
`public static SteamAPICall_t CreateBeacon(uint unOpenSlots, ref SteamPartyBeaconLocation_t pBeaconLocation, string pchConnectString, string pchMetadata)`

**Purpose:** Creates a new `beacon` instance or object.

### OnReservationCompleted
`public static void OnReservationCompleted(PartyBeaconID_t ulBeacon, CSteamID steamIDUser)`

**Purpose:** Called when the `reservation completed` event is raised.

### CancelReservation
`public static void CancelReservation(PartyBeaconID_t ulBeacon, CSteamID steamIDUser)`

**Purpose:** Checks whether the current object can `cel reservation`.

### ChangeNumOpenSlots
`public static SteamAPICall_t ChangeNumOpenSlots(PartyBeaconID_t ulBeacon, uint unOpenSlots)`

**Purpose:** Handles logic related to `change num open slots`.

### DestroyBeacon
`public static bool DestroyBeacon(PartyBeaconID_t ulBeacon)`

**Purpose:** Handles logic related to `destroy beacon`.

### GetBeaconLocationData
`public static bool GetBeaconLocationData(SteamPartyBeaconLocation_t BeaconLocation, ESteamPartyBeaconLocationData eData, out string pchDataStringOut, int cchDataStringOut)`

**Purpose:** Gets the current value of `beacon location data`.

## Usage Example

```csharp
SteamParties.GetNumActiveBeacons();
```

## See Also

- [Complete Class Catalog](../catalog)