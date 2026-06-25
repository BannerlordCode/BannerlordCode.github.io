---
title: "Banner"
description: "Auto-generated class reference for Banner."
---
# Banner

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class Banner`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/Banner.cs`

## Overview

`Banner` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetBannerVisual
`public void SetBannerVisual(IBannerVisual visual)`

**Purpose:** Assigns a new value to `banner visual` and updates the object's internal state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.SetBannerVisual(visual);
```

### GetBannerDataAtIndex
`public BannerData GetBannerDataAtIndex(int index)`

**Purpose:** Reads and returns the `banner data at index` value held by the current object.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetBannerDataAtIndex(0);
```

### GetBannerDataListCount
`public int GetBannerDataListCount()`

**Purpose:** Reads and returns the `banner data list count` value held by the current object.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetBannerDataListCount();
```

### IsBannerDataListEmpty
`public bool IsBannerDataListEmpty()`

**Purpose:** Determines whether the current object is in the `banner data list empty` state or condition.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.IsBannerDataListEmpty();
```

### GetPrimaryColorId
`public int GetPrimaryColorId()`

**Purpose:** Reads and returns the `primary color id` value held by the current object.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetPrimaryColorId();
```

### GetSecondaryColorId
`public int GetSecondaryColorId()`

**Purpose:** Reads and returns the `secondary color id` value held by the current object.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetSecondaryColorId();
```

### GetIconColorId
`public int GetIconColorId()`

**Purpose:** Reads and returns the `icon color id` value held by the current object.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetIconColorId();
```

### GetIconSize
`public Vec2 GetIconSize()`

**Purpose:** Reads and returns the `icon size` value held by the current object.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetIconSize();
```

### SetPrimaryColorId
`public void SetPrimaryColorId(int colorId)`

**Purpose:** Assigns a new value to `primary color id` and updates the object's internal state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.SetPrimaryColorId(0);
```

### SetSecondaryColorId
`public void SetSecondaryColorId(int colorId)`

**Purpose:** Assigns a new value to `secondary color id` and updates the object's internal state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.SetSecondaryColorId(0);
```

### SetIconColorId
`public void SetIconColorId(int colorId)`

**Purpose:** Assigns a new value to `icon color id` and updates the object's internal state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.SetIconColorId(0);
```

### SetIconSize
`public void SetIconSize(int newSize)`

**Purpose:** Assigns a new value to `icon size` and updates the object's internal state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.SetIconSize(0);
```

### ChangePrimaryColor
`public void ChangePrimaryColor(uint mainColor)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.ChangePrimaryColor(0);
```

### ChangeBackgroundColor
`public void ChangeBackgroundColor(uint primaryColor, uint secondaryColor)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.ChangeBackgroundColor(0, 0);
```

### ChangeIconColors
`public void ChangeIconColors(uint color)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.ChangeIconColors(0);
```

### RotateBackgroundToRight
`public void RotateBackgroundToRight()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.RotateBackgroundToRight();
```

### RotateBackgroundToLeft
`public void RotateBackgroundToLeft()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.RotateBackgroundToLeft();
```

### GetBackgroundMeshId
`public int GetBackgroundMeshId()`

**Purpose:** Reads and returns the `background mesh id` value held by the current object.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetBackgroundMeshId();
```

### GetIconMeshId
`public int GetIconMeshId()`

**Purpose:** Reads and returns the `icon mesh id` value held by the current object.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetIconMeshId();
```

### SetBackgroundMeshId
`public void SetBackgroundMeshId(int meshId)`

**Purpose:** Assigns a new value to `background mesh id` and updates the object's internal state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.SetBackgroundMeshId(0);
```

### SetIconMeshId
`public void SetIconMeshId(int meshId)`

**Purpose:** Assigns a new value to `icon mesh id` and updates the object's internal state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.SetIconMeshId(0);
```

### Serialize
`public string Serialize()`

**Purpose:** Serializes the current object into a storable or transmittable format.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.Serialize();
```

### Deserialize
`public void Deserialize(string message)`

**Purpose:** Restores the current object from serialized data.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.Deserialize("example");
```

### ClearAllIcons
`public void ClearAllIcons()`

**Purpose:** Removes all `all icons` from the current object.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.ClearAllIcons();
```

### AddIconData
`public void AddIconData(BannerData iconData)`

**Purpose:** Adds `icon data` to the current collection or state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.AddIconData(iconData);
```

### AddIconData
`public void AddIconData(BannerData iconData, int index)`

**Purpose:** Adds `icon data` to the current collection or state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.AddIconData(iconData, 0);
```

### RemoveIconDataAtIndex
`public void RemoveIconDataAtIndex(int index)`

**Purpose:** Removes `icon data at index` from the current collection or state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.RemoveIconDataAtIndex(0);
```

### CreateRandomClanBanner
`public static Banner CreateRandomClanBanner(int seed = -1)`

**Purpose:** Constructs a new `random clan banner` entity and returns it to the caller.

```csharp
// Static call; no instance required
Banner.CreateRandomClanBanner(0);
```

### CreateRandomBanner
`public static Banner CreateRandomBanner()`

**Purpose:** Constructs a new `random banner` entity and returns it to the caller.

```csharp
// Static call; no instance required
Banner.CreateRandomBanner();
```

### CreateOneColoredEmptyBanner
`public static Banner CreateOneColoredEmptyBanner(int colorIndex)`

**Purpose:** Constructs a new `one colored empty banner` entity and returns it to the caller.

```csharp
// Static call; no instance required
Banner.CreateOneColoredEmptyBanner(0);
```

### CreateOneColoredBannerWithOneIcon
`public static Banner CreateOneColoredBannerWithOneIcon(uint backgroundColor, uint iconColor, int iconMeshId)`

**Purpose:** Constructs a new `one colored banner with one icon` entity and returns it to the caller.

```csharp
// Static call; no instance required
Banner.CreateOneColoredBannerWithOneIcon(0, 0, 0);
```

### GetPrimaryColor
`public uint GetPrimaryColor()`

**Purpose:** Reads and returns the `primary color` value held by the current object.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetPrimaryColor();
```

### GetSecondaryColor
`public uint GetSecondaryColor()`

**Purpose:** Reads and returns the `secondary color` value held by the current object.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetSecondaryColor();
```

### GetFirstIconColor
`public uint GetFirstIconColor()`

**Purpose:** Reads and returns the `first icon color` value held by the current object.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetFirstIconColor();
```

### GetVersionNo
`public int GetVersionNo()`

**Purpose:** Reads and returns the `version no` value held by the current object.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetVersionNo();
```

### GetBannerCodeFromBannerDataList
`public static string GetBannerCodeFromBannerDataList(MBList<BannerData> bannerDataList)`

**Purpose:** Reads and returns the `banner code from banner data list` value held by the current object.

```csharp
// Static call; no instance required
Banner.GetBannerCodeFromBannerDataList(bannerDataList);
```

### IsValidBannerCode
`public static bool IsValidBannerCode(string bannerCode)`

**Purpose:** Determines whether the current object is in the `valid banner code` state or condition.

```csharp
// Static call; no instance required
Banner.IsValidBannerCode("example");
```

### TryGetBannerDataFromCode
`public static bool TryGetBannerDataFromCode(string bannerCode, out List<BannerData> bannerDataList)`

**Purpose:** Attempts to retrieve `get banner data from code`, usually returning success through an out parameter.

```csharp
// Static call; no instance required
Banner.TryGetBannerDataFromCode("example", bannerDataList);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Banner banner = ...;
banner.SetBannerVisual(visual);
```

## See Also

- [Area Index](../)