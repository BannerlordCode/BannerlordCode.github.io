---
title: "Banner"
description: "Banner: a public class in TaleWorlds.Core; 53 exposed members (39 methods, 3 properties, 6 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/Banner.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Banner

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class Banner`
**File:** `TaleWorlds.Core/Banner.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

Banner lives in the TaleWorlds.Core module, source file TaleWorlds.Core/Banner.cs. It is a public class; the inheritance chain is Banner. It exposes 53 public/protected members: 39 methods, 3 properties, 6 fields, 5 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Banner lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain Banner. The surface is method-led (methods 39/53, properties 3/53), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/Banner.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BannerCode` | `public string BannerCode` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<BannerData>BannerDataList` | property |
| `BannerVisual` | `public IBannerVisual BannerVisual` | property |
| `Banner` | `public Banner()` | constructor |
| `Banner` | `public Banner(Banner banner) : this()` | constructor |
| `Banner` | `public Banner(Banner banner, uint color1, uint color2) : this(banner)` | constructor |
| `Banner` | `public Banner(string bannerKey) : this()` | constructor |
| `Banner` | `public Banner(string bannerKey, uint color1, uint color2) : this(bannerKey)` | constructor |
| `SetBannerVisual` | `public void SetBannerVisual(IBannerVisual visual)` | method |
| `GetBannerDataAtIndex` | `public BannerData GetBannerDataAtIndex(int index)` | method |
| `GetBannerDataListCount` | `public int GetBannerDataListCount()` | method |
| `IsBannerDataListEmpty` | `public bool IsBannerDataListEmpty()` | method |
| `GetPrimaryColorId` | `public int GetPrimaryColorId()` | method |
| `GetSecondaryColorId` | `public int GetSecondaryColorId()` | method |
| `GetIconColorId` | `public int GetIconColorId()` | method |
| `GetIconSize` | `public Vec2 GetIconSize()` | method |
| `SetPrimaryColorId` | `public void SetPrimaryColorId(int colorId)` | method |
| `SetSecondaryColorId` | `public void SetSecondaryColorId(int colorId)` | method |
| `SetIconColorId` | `public void SetIconColorId(int colorId)` | method |
| `SetIconSize` | `public void SetIconSize(int newSize)` | method |
| `ChangePrimaryColor` | `public void ChangePrimaryColor(uint mainColor)` | method |
| `ChangeBackgroundColor` | `public void ChangeBackgroundColor(uint primaryColor, uint secondaryColor)` | method |
| `ChangeIconColors` | `public void ChangeIconColors(uint color)` | method |
| `RotateBackgroundToRight` | `public void RotateBackgroundToRight()` | method |
| `RotateBackgroundToLeft` | `public void RotateBackgroundToLeft()` | method |
| `GetBackgroundMeshId` | `public int GetBackgroundMeshId()` | method |
| `GetIconMeshId` | `public int GetIconMeshId()` | method |
| `SetBackgroundMeshId` | `public void SetBackgroundMeshId(int meshId)` | method |
| `SetIconMeshId` | `public void SetIconMeshId(int meshId)` | method |
| `Serialize` | `public string Serialize()` | method |
| `Deserialize` | `public void Deserialize(string message)` | method |
| `ClearAllIcons` | `public void ClearAllIcons()` | method |
| `AddIconData` | `public void AddIconData(BannerData iconData)` | method |
| `AddIconData` | `public void AddIconData(BannerData iconData, int index)` | method |
| `RemoveIconDataAtIndex` | `public void RemoveIconDataAtIndex(int index)` | method |
| `CreateRandomClanBanner` | `public static Banner CreateRandomClanBanner(int seed = -1)` | method |
| `CreateRandomBanner` | `public static Banner CreateRandomBanner()` | method |
| `CreateOneColoredEmptyBanner` | `public static Banner CreateOneColoredEmptyBanner(int colorIndex)` | method |
| `CreateOneColoredBannerWithOneIcon` | `public static Banner CreateOneColoredBannerWithOneIcon(uint backgroundColor, uint iconColor, int iconMeshId)` | method |
| `GetPrimaryColor` | `public uint GetPrimaryColor()` | method |
| `GetSecondaryColor` | `public uint GetSecondaryColor()` | method |
| `GetFirstIconColor` | `public uint GetFirstIconColor()` | method |
| `GetVersionNo` | `public int GetVersionNo()` | method |
| `GetBannerCodeFromBannerDataList` | `public static string GetBannerCodeFromBannerDataList(MBList<BannerData>bannerDataList)` | method |
| `IsValidBannerCode` | `public static bool IsValidBannerCode(string bannerCode)` | method |
| `TryGetBannerDataFromCode` | `public static bool TryGetBannerDataFromCode(string bannerCode, out List<BannerData>bannerDataList)` | method |
| `AutoGeneratedInstanceCollectObjects` | `protected virtual void AutoGeneratedInstanceCollectObjects(List<object>collectedObjects)` | method |
| `MaxSize` | `public const int MaxSize` | field |
| `BannerFullSize` | `public const int BannerFullSize` | field |
| `BannerEditableAreaSize` | `public const int BannerEditableAreaSize` | field |
| `MaxIconCount` | `public const int MaxIconCount` | field |
| `BackgroundDataIndex` | `public const int BackgroundDataIndex` | field |
| `BannerIconDataIndex` | `public const int BannerIconDataIndex` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
