<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamParties`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamParties

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamParties`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamParties.cs`

## 概述

`SteamParties` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetNumActiveBeacons
`public static uint GetNumActiveBeacons()`

**用途 / Purpose:** 获取 `num active beacons` 的当前值。

### GetBeaconByIndex
`public static PartyBeaconID_t GetBeaconByIndex(uint unIndex)`

**用途 / Purpose:** 获取 `beacon by index` 的当前值。

### GetBeaconDetails
`public static bool GetBeaconDetails(PartyBeaconID_t ulBeaconID, out CSteamID pSteamIDBeaconOwner, out SteamPartyBeaconLocation_t pLocation, out string pchMetadata, int cchMetadata)`

**用途 / Purpose:** 获取 `beacon details` 的当前值。

### JoinParty
`public static SteamAPICall_t JoinParty(PartyBeaconID_t ulBeaconID)`

**用途 / Purpose:** 处理 `join party` 相关逻辑。

### GetNumAvailableBeaconLocations
`public static bool GetNumAvailableBeaconLocations(out uint puNumLocations)`

**用途 / Purpose:** 获取 `num available beacon locations` 的当前值。

### GetAvailableBeaconLocations
`public static bool GetAvailableBeaconLocations(SteamPartyBeaconLocation_t pLocationList, uint uMaxNumLocations)`

**用途 / Purpose:** 获取 `available beacon locations` 的当前值。

### CreateBeacon
`public static SteamAPICall_t CreateBeacon(uint unOpenSlots, ref SteamPartyBeaconLocation_t pBeaconLocation, string pchConnectString, string pchMetadata)`

**用途 / Purpose:** 创建一个 `beacon` 实例或对象。

### OnReservationCompleted
`public static void OnReservationCompleted(PartyBeaconID_t ulBeacon, CSteamID steamIDUser)`

**用途 / Purpose:** 当 `reservation completed` 事件触发时调用此方法。

### CancelReservation
`public static void CancelReservation(PartyBeaconID_t ulBeacon, CSteamID steamIDUser)`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel reservation`。

### ChangeNumOpenSlots
`public static SteamAPICall_t ChangeNumOpenSlots(PartyBeaconID_t ulBeacon, uint unOpenSlots)`

**用途 / Purpose:** 处理 `change num open slots` 相关逻辑。

### DestroyBeacon
`public static bool DestroyBeacon(PartyBeaconID_t ulBeacon)`

**用途 / Purpose:** 处理 `destroy beacon` 相关逻辑。

### GetBeaconLocationData
`public static bool GetBeaconLocationData(SteamPartyBeaconLocation_t BeaconLocation, ESteamPartyBeaconLocationData eData, out string pchDataStringOut, int cchDataStringOut)`

**用途 / Purpose:** 获取 `beacon location data` 的当前值。

## 使用示例

```csharp
SteamParties.GetNumActiveBeacons();
```

## 参见

- [完整类目录](../catalog)