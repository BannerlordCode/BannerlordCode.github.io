---
title: "Banner"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Banner`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Banner

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class Banner`
**Base:** 无
**File:** `TaleWorlds.Core/Banner.cs`

## 概述

`Banner` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BannerCode` | `public string BannerCode { get; }` |
| `BannerDataList` | `public MBReadOnlyList<BannerData> BannerDataList { get; }` |
| `BannerVisual` | `public IBannerVisual BannerVisual { get; }` |

## 主要方法

### SetBannerVisual
`public void SetBannerVisual(IBannerVisual visual)`

**用途 / Purpose:** 设置 `banner visual` 的值或状态。

### GetBannerDataAtIndex
`public BannerData GetBannerDataAtIndex(int index)`

**用途 / Purpose:** 获取 `banner data at index` 的当前值。

### GetBannerDataListCount
`public int GetBannerDataListCount()`

**用途 / Purpose:** 获取 `banner data list count` 的当前值。

### IsBannerDataListEmpty
`public bool IsBannerDataListEmpty()`

**用途 / Purpose:** 处理 `is banner data list empty` 相关逻辑。

### GetPrimaryColorId
`public int GetPrimaryColorId()`

**用途 / Purpose:** 获取 `primary color id` 的当前值。

### GetSecondaryColorId
`public int GetSecondaryColorId()`

**用途 / Purpose:** 获取 `secondary color id` 的当前值。

### GetIconColorId
`public int GetIconColorId()`

**用途 / Purpose:** 获取 `icon color id` 的当前值。

### GetIconSize
`public Vec2 GetIconSize()`

**用途 / Purpose:** 获取 `icon size` 的当前值。

### SetPrimaryColorId
`public void SetPrimaryColorId(int colorId)`

**用途 / Purpose:** 设置 `primary color id` 的值或状态。

### SetSecondaryColorId
`public void SetSecondaryColorId(int colorId)`

**用途 / Purpose:** 设置 `secondary color id` 的值或状态。

### SetIconColorId
`public void SetIconColorId(int colorId)`

**用途 / Purpose:** 设置 `icon color id` 的值或状态。

### SetIconSize
`public void SetIconSize(int newSize)`

**用途 / Purpose:** 设置 `icon size` 的值或状态。

### ChangePrimaryColor
`public void ChangePrimaryColor(uint mainColor)`

**用途 / Purpose:** 处理 `change primary color` 相关逻辑。

### ChangeBackgroundColor
`public void ChangeBackgroundColor(uint primaryColor, uint secondaryColor)`

**用途 / Purpose:** 处理 `change background color` 相关逻辑。

### ChangeIconColors
`public void ChangeIconColors(uint color)`

**用途 / Purpose:** 处理 `change icon colors` 相关逻辑。

### RotateBackgroundToRight
`public void RotateBackgroundToRight()`

**用途 / Purpose:** 处理 `rotate background to right` 相关逻辑。

### RotateBackgroundToLeft
`public void RotateBackgroundToLeft()`

**用途 / Purpose:** 处理 `rotate background to left` 相关逻辑。

### GetBackgroundMeshId
`public int GetBackgroundMeshId()`

**用途 / Purpose:** 获取 `background mesh id` 的当前值。

### GetIconMeshId
`public int GetIconMeshId()`

**用途 / Purpose:** 获取 `icon mesh id` 的当前值。

### SetBackgroundMeshId
`public void SetBackgroundMeshId(int meshId)`

**用途 / Purpose:** 设置 `background mesh id` 的值或状态。

### SetIconMeshId
`public void SetIconMeshId(int meshId)`

**用途 / Purpose:** 设置 `icon mesh id` 的值或状态。

### Serialize
`public string Serialize()`

**用途 / Purpose:** 处理 `serialize` 相关逻辑。

### Deserialize
`public void Deserialize(string message)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### ClearAllIcons
`public void ClearAllIcons()`

**用途 / Purpose:** 处理 `clear all icons` 相关逻辑。

### AddIconData
`public void AddIconData(BannerData iconData)`

**用途 / Purpose:** 向当前集合/状态中添加 `icon data`。

### AddIconData
`public void AddIconData(BannerData iconData, int index)`

**用途 / Purpose:** 向当前集合/状态中添加 `icon data`。

### RemoveIconDataAtIndex
`public void RemoveIconDataAtIndex(int index)`

**用途 / Purpose:** 从当前集合/状态中移除 `icon data at index`。

### CreateRandomClanBanner
`public static Banner CreateRandomClanBanner(int seed = -1)`

**用途 / Purpose:** 创建一个 `random clan banner` 实例或对象。

### CreateRandomBanner
`public static Banner CreateRandomBanner()`

**用途 / Purpose:** 创建一个 `random banner` 实例或对象。

### CreateOneColoredEmptyBanner
`public static Banner CreateOneColoredEmptyBanner(int colorIndex)`

**用途 / Purpose:** 创建一个 `one colored empty banner` 实例或对象。

### CreateOneColoredBannerWithOneIcon
`public static Banner CreateOneColoredBannerWithOneIcon(uint backgroundColor, uint iconColor, int iconMeshId)`

**用途 / Purpose:** 创建一个 `one colored banner with one icon` 实例或对象。

### GetPrimaryColor
`public uint GetPrimaryColor()`

**用途 / Purpose:** 获取 `primary color` 的当前值。

### GetSecondaryColor
`public uint GetSecondaryColor()`

**用途 / Purpose:** 获取 `secondary color` 的当前值。

### GetFirstIconColor
`public uint GetFirstIconColor()`

**用途 / Purpose:** 获取 `first icon color` 的当前值。

### GetVersionNo
`public int GetVersionNo()`

**用途 / Purpose:** 获取 `version no` 的当前值。

### GetBannerCodeFromBannerDataList
`public static string GetBannerCodeFromBannerDataList(MBList<BannerData> bannerDataList)`

**用途 / Purpose:** 获取 `banner code from banner data list` 的当前值。

### IsValidBannerCode
`public static bool IsValidBannerCode(string bannerCode)`

**用途 / Purpose:** 处理 `is valid banner code` 相关逻辑。

### TryGetBannerDataFromCode
`public static bool TryGetBannerDataFromCode(string bannerCode, out List<BannerData> bannerDataList)`

**用途 / Purpose:** 尝试获取 `get banner data from code`，通常以 out 参数返回结果。

## 使用示例

```csharp
var value = new Banner();
value.SetBannerVisual(visual);
```

## 参见

- [完整类目录](../catalog)