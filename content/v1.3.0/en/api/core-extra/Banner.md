---
title: "Banner"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Banner`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Banner

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class Banner`
**Base:** none
**File:** `TaleWorlds.Core/Banner.cs`

## Overview

`Banner` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BannerCode` | `public string BannerCode { get; }` |
| `BannerDataList` | `public MBReadOnlyList<BannerData> BannerDataList { get; }` |
| `BannerVisual` | `public IBannerVisual BannerVisual { get; }` |

## Key Methods

### SetBannerVisual
`public void SetBannerVisual(IBannerVisual visual)`

**Purpose:** Sets the value or state of `banner visual`.

### GetBannerDataAtIndex
`public BannerData GetBannerDataAtIndex(int index)`

**Purpose:** Gets the current value of `banner data at index`.

### GetBannerDataListCount
`public int GetBannerDataListCount()`

**Purpose:** Gets the current value of `banner data list count`.

### IsBannerDataListEmpty
`public bool IsBannerDataListEmpty()`

**Purpose:** Handles logic related to `is banner data list empty`.

### GetPrimaryColorId
`public int GetPrimaryColorId()`

**Purpose:** Gets the current value of `primary color id`.

### GetSecondaryColorId
`public int GetSecondaryColorId()`

**Purpose:** Gets the current value of `secondary color id`.

### GetIconColorId
`public int GetIconColorId()`

**Purpose:** Gets the current value of `icon color id`.

### GetIconSize
`public Vec2 GetIconSize()`

**Purpose:** Gets the current value of `icon size`.

### SetPrimaryColorId
`public void SetPrimaryColorId(int colorId)`

**Purpose:** Sets the value or state of `primary color id`.

### SetSecondaryColorId
`public void SetSecondaryColorId(int colorId)`

**Purpose:** Sets the value or state of `secondary color id`.

### SetIconColorId
`public void SetIconColorId(int colorId)`

**Purpose:** Sets the value or state of `icon color id`.

### SetIconSize
`public void SetIconSize(int newSize)`

**Purpose:** Sets the value or state of `icon size`.

### ChangePrimaryColor
`public void ChangePrimaryColor(uint mainColor)`

**Purpose:** Handles logic related to `change primary color`.

### ChangeBackgroundColor
`public void ChangeBackgroundColor(uint primaryColor, uint secondaryColor)`

**Purpose:** Handles logic related to `change background color`.

### ChangeIconColors
`public void ChangeIconColors(uint color)`

**Purpose:** Handles logic related to `change icon colors`.

### RotateBackgroundToRight
`public void RotateBackgroundToRight()`

**Purpose:** Handles logic related to `rotate background to right`.

### RotateBackgroundToLeft
`public void RotateBackgroundToLeft()`

**Purpose:** Handles logic related to `rotate background to left`.

### GetBackgroundMeshId
`public int GetBackgroundMeshId()`

**Purpose:** Gets the current value of `background mesh id`.

### GetIconMeshId
`public int GetIconMeshId()`

**Purpose:** Gets the current value of `icon mesh id`.

### SetBackgroundMeshId
`public void SetBackgroundMeshId(int meshId)`

**Purpose:** Sets the value or state of `background mesh id`.

### SetIconMeshId
`public void SetIconMeshId(int meshId)`

**Purpose:** Sets the value or state of `icon mesh id`.

### Serialize
`public string Serialize()`

**Purpose:** Handles logic related to `serialize`.

### Deserialize
`public void Deserialize(string message)`

**Purpose:** Handles logic related to `deserialize`.

### ClearAllIcons
`public void ClearAllIcons()`

**Purpose:** Handles logic related to `clear all icons`.

### AddIconData
`public void AddIconData(BannerData iconData)`

**Purpose:** Adds `icon data` to the current collection or state.

### AddIconData
`public void AddIconData(BannerData iconData, int index)`

**Purpose:** Adds `icon data` to the current collection or state.

### RemoveIconDataAtIndex
`public void RemoveIconDataAtIndex(int index)`

**Purpose:** Removes `icon data at index` from the current collection or state.

### CreateRandomClanBanner
`public static Banner CreateRandomClanBanner(int seed = -1)`

**Purpose:** Creates a new `random clan banner` instance or object.

### CreateRandomBanner
`public static Banner CreateRandomBanner()`

**Purpose:** Creates a new `random banner` instance or object.

### CreateOneColoredEmptyBanner
`public static Banner CreateOneColoredEmptyBanner(int colorIndex)`

**Purpose:** Creates a new `one colored empty banner` instance or object.

### CreateOneColoredBannerWithOneIcon
`public static Banner CreateOneColoredBannerWithOneIcon(uint backgroundColor, uint iconColor, int iconMeshId)`

**Purpose:** Creates a new `one colored banner with one icon` instance or object.

### GetPrimaryColor
`public uint GetPrimaryColor()`

**Purpose:** Gets the current value of `primary color`.

### GetSecondaryColor
`public uint GetSecondaryColor()`

**Purpose:** Gets the current value of `secondary color`.

### GetFirstIconColor
`public uint GetFirstIconColor()`

**Purpose:** Gets the current value of `first icon color`.

### GetVersionNo
`public int GetVersionNo()`

**Purpose:** Gets the current value of `version no`.

### GetBannerCodeFromBannerDataList
`public static string GetBannerCodeFromBannerDataList(MBList<BannerData> bannerDataList)`

**Purpose:** Gets the current value of `banner code from banner data list`.

### IsValidBannerCode
`public static bool IsValidBannerCode(string bannerCode)`

**Purpose:** Handles logic related to `is valid banner code`.

### TryGetBannerDataFromCode
`public static bool TryGetBannerDataFromCode(string bannerCode, out List<BannerData> bannerDataList)`

**Purpose:** Attempts to get `get banner data from code`, usually returning the result in an out parameter.

## Usage Example

```csharp
var value = new Banner();
value.SetBannerVisual(visual);
```

## See Also

- [Complete Class Catalog](../catalog)