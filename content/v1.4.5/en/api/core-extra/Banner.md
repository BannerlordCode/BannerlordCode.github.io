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

**Purpose:** **Purpose:** Assigns a new value to banner visual and updates the object's internal state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.SetBannerVisual(visual);
```

### GetBannerDataAtIndex
`public BannerData GetBannerDataAtIndex(int index)`

**Purpose:** **Purpose:** Reads and returns the banner data at index value held by the this instance.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetBannerDataAtIndex(0);
```

### GetBannerDataListCount
`public int GetBannerDataListCount()`

**Purpose:** **Purpose:** Reads and returns the banner data list count value held by the this instance.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetBannerDataListCount();
```

### IsBannerDataListEmpty
`public bool IsBannerDataListEmpty()`

**Purpose:** **Purpose:** Determines whether the this instance is in the banner data list empty state or condition.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.IsBannerDataListEmpty();
```

### GetPrimaryColorId
`public int GetPrimaryColorId()`

**Purpose:** **Purpose:** Reads and returns the primary color id value held by the this instance.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetPrimaryColorId();
```

### GetSecondaryColorId
`public int GetSecondaryColorId()`

**Purpose:** **Purpose:** Reads and returns the secondary color id value held by the this instance.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetSecondaryColorId();
```

### GetIconColorId
`public int GetIconColorId()`

**Purpose:** **Purpose:** Reads and returns the icon color id value held by the this instance.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetIconColorId();
```

### GetIconSize
`public Vec2 GetIconSize()`

**Purpose:** **Purpose:** Reads and returns the icon size value held by the this instance.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetIconSize();
```

### SetPrimaryColorId
`public void SetPrimaryColorId(int colorId)`

**Purpose:** **Purpose:** Assigns a new value to primary color id and updates the object's internal state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.SetPrimaryColorId(0);
```

### SetSecondaryColorId
`public void SetSecondaryColorId(int colorId)`

**Purpose:** **Purpose:** Assigns a new value to secondary color id and updates the object's internal state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.SetSecondaryColorId(0);
```

### SetIconColorId
`public void SetIconColorId(int colorId)`

**Purpose:** **Purpose:** Assigns a new value to icon color id and updates the object's internal state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.SetIconColorId(0);
```

### SetIconSize
`public void SetIconSize(int newSize)`

**Purpose:** **Purpose:** Assigns a new value to icon size and updates the object's internal state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.SetIconSize(0);
```

### ChangePrimaryColor
`public void ChangePrimaryColor(uint mainColor)`

**Purpose:** **Purpose:** Executes the ChangePrimaryColor logic.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.ChangePrimaryColor(0);
```

### ChangeBackgroundColor
`public void ChangeBackgroundColor(uint primaryColor, uint secondaryColor)`

**Purpose:** **Purpose:** Executes the ChangeBackgroundColor logic.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.ChangeBackgroundColor(0, 0);
```

### ChangeIconColors
`public void ChangeIconColors(uint color)`

**Purpose:** **Purpose:** Executes the ChangeIconColors logic.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.ChangeIconColors(0);
```

### RotateBackgroundToRight
`public void RotateBackgroundToRight()`

**Purpose:** **Purpose:** Executes the RotateBackgroundToRight logic.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.RotateBackgroundToRight();
```

### RotateBackgroundToLeft
`public void RotateBackgroundToLeft()`

**Purpose:** **Purpose:** Executes the RotateBackgroundToLeft logic.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.RotateBackgroundToLeft();
```

### GetBackgroundMeshId
`public int GetBackgroundMeshId()`

**Purpose:** **Purpose:** Reads and returns the background mesh id value held by the this instance.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetBackgroundMeshId();
```

### GetIconMeshId
`public int GetIconMeshId()`

**Purpose:** **Purpose:** Reads and returns the icon mesh id value held by the this instance.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetIconMeshId();
```

### SetBackgroundMeshId
`public void SetBackgroundMeshId(int meshId)`

**Purpose:** **Purpose:** Assigns a new value to background mesh id and updates the object's internal state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.SetBackgroundMeshId(0);
```

### SetIconMeshId
`public void SetIconMeshId(int meshId)`

**Purpose:** **Purpose:** Assigns a new value to icon mesh id and updates the object's internal state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.SetIconMeshId(0);
```

### Serialize
`public string Serialize()`

**Purpose:** **Purpose:** Serializes the this instance into a storable or transmittable format.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.Serialize();
```

### Deserialize
`public void Deserialize(string message)`

**Purpose:** **Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.Deserialize("example");
```

### ClearAllIcons
`public void ClearAllIcons()`

**Purpose:** **Purpose:** Removes all all icons from the this instance.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.ClearAllIcons();
```

### AddIconData
`public void AddIconData(BannerData iconData)`

**Purpose:** **Purpose:** Adds icon data to the current collection or state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.AddIconData(iconData);
```

### AddIconData
`public void AddIconData(BannerData iconData, int index)`

**Purpose:** **Purpose:** Adds icon data to the current collection or state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.AddIconData(iconData, 0);
```

### RemoveIconDataAtIndex
`public void RemoveIconDataAtIndex(int index)`

**Purpose:** **Purpose:** Removes icon data at index from the current collection or state.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
banner.RemoveIconDataAtIndex(0);
```

### CreateRandomClanBanner
`public static Banner CreateRandomClanBanner(int seed = -1)`

**Purpose:** **Purpose:** Constructs a new random clan banner entity and returns it to the caller.

```csharp
// Static call; no instance required
Banner.CreateRandomClanBanner(0);
```

### CreateRandomBanner
`public static Banner CreateRandomBanner()`

**Purpose:** **Purpose:** Constructs a new random banner entity and returns it to the caller.

```csharp
// Static call; no instance required
Banner.CreateRandomBanner();
```

### CreateOneColoredEmptyBanner
`public static Banner CreateOneColoredEmptyBanner(int colorIndex)`

**Purpose:** **Purpose:** Constructs a new one colored empty banner entity and returns it to the caller.

```csharp
// Static call; no instance required
Banner.CreateOneColoredEmptyBanner(0);
```

### CreateOneColoredBannerWithOneIcon
`public static Banner CreateOneColoredBannerWithOneIcon(uint backgroundColor, uint iconColor, int iconMeshId)`

**Purpose:** **Purpose:** Constructs a new one colored banner with one icon entity and returns it to the caller.

```csharp
// Static call; no instance required
Banner.CreateOneColoredBannerWithOneIcon(0, 0, 0);
```

### GetPrimaryColor
`public uint GetPrimaryColor()`

**Purpose:** **Purpose:** Reads and returns the primary color value held by the this instance.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetPrimaryColor();
```

### GetSecondaryColor
`public uint GetSecondaryColor()`

**Purpose:** **Purpose:** Reads and returns the secondary color value held by the this instance.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetSecondaryColor();
```

### GetFirstIconColor
`public uint GetFirstIconColor()`

**Purpose:** **Purpose:** Reads and returns the first icon color value held by the this instance.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetFirstIconColor();
```

### GetVersionNo
`public int GetVersionNo()`

**Purpose:** **Purpose:** Reads and returns the version no value held by the this instance.

```csharp
// Obtain an instance of Banner from the subsystem API first
Banner banner = ...;
var result = banner.GetVersionNo();
```

### GetBannerCodeFromBannerDataList
`public static string GetBannerCodeFromBannerDataList(MBList<BannerData> bannerDataList)`

**Purpose:** **Purpose:** Reads and returns the banner code from banner data list value held by the this instance.

```csharp
// Static call; no instance required
Banner.GetBannerCodeFromBannerDataList(bannerDataList);
```

### IsValidBannerCode
`public static bool IsValidBannerCode(string bannerCode)`

**Purpose:** **Purpose:** Determines whether the this instance is in the valid banner code state or condition.

```csharp
// Static call; no instance required
Banner.IsValidBannerCode("example");
```

### TryGetBannerDataFromCode
`public static bool TryGetBannerDataFromCode(string bannerCode, out List<BannerData> bannerDataList)`

**Purpose:** **Purpose:** Attempts to retrieve get banner data from code, usually returning success through an out parameter.

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