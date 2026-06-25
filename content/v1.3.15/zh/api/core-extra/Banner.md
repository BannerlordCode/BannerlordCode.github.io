---
title: "Banner"
description: "Banner 的自动生成类参考。"
---
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

**用途 / Purpose:** 为 「banner visual」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
banner.SetBannerVisual(visual);
```

### GetBannerDataAtIndex
`public BannerData GetBannerDataAtIndex(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「banner data at index」 的结果。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
var result = banner.GetBannerDataAtIndex(0);
```

### GetBannerDataListCount
`public int GetBannerDataListCount()`

**用途 / Purpose:** 读取并返回当前对象中 「banner data list count」 的结果。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
var result = banner.GetBannerDataListCount();
```

### IsBannerDataListEmpty
`public bool IsBannerDataListEmpty()`

**用途 / Purpose:** 判断当前对象是否处于 「banner data list empty」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
var result = banner.IsBannerDataListEmpty();
```

### GetPrimaryColorId
`public int GetPrimaryColorId()`

**用途 / Purpose:** 读取并返回当前对象中 「primary color id」 的结果。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
var result = banner.GetPrimaryColorId();
```

### GetSecondaryColorId
`public int GetSecondaryColorId()`

**用途 / Purpose:** 读取并返回当前对象中 「secondary color id」 的结果。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
var result = banner.GetSecondaryColorId();
```

### GetIconColorId
`public int GetIconColorId()`

**用途 / Purpose:** 读取并返回当前对象中 「icon color id」 的结果。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
var result = banner.GetIconColorId();
```

### GetIconSize
`public Vec2 GetIconSize()`

**用途 / Purpose:** 读取并返回当前对象中 「icon size」 的结果。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
var result = banner.GetIconSize();
```

### SetPrimaryColorId
`public void SetPrimaryColorId(int colorId)`

**用途 / Purpose:** 为 「primary color id」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
banner.SetPrimaryColorId(0);
```

### SetSecondaryColorId
`public void SetSecondaryColorId(int colorId)`

**用途 / Purpose:** 为 「secondary color id」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
banner.SetSecondaryColorId(0);
```

### SetIconColorId
`public void SetIconColorId(int colorId)`

**用途 / Purpose:** 为 「icon color id」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
banner.SetIconColorId(0);
```

### SetIconSize
`public void SetIconSize(int newSize)`

**用途 / Purpose:** 为 「icon size」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
banner.SetIconSize(0);
```

### ChangePrimaryColor
`public void ChangePrimaryColor(uint mainColor)`

**用途 / Purpose:** 处理与 「change primary color」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
banner.ChangePrimaryColor(0);
```

### ChangeBackgroundColor
`public void ChangeBackgroundColor(uint primaryColor, uint secondaryColor)`

**用途 / Purpose:** 处理与 「change background color」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
banner.ChangeBackgroundColor(0, 0);
```

### ChangeIconColors
`public void ChangeIconColors(uint color)`

**用途 / Purpose:** 处理与 「change icon colors」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
banner.ChangeIconColors(0);
```

### RotateBackgroundToRight
`public void RotateBackgroundToRight()`

**用途 / Purpose:** 处理与 「rotate background to right」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
banner.RotateBackgroundToRight();
```

### RotateBackgroundToLeft
`public void RotateBackgroundToLeft()`

**用途 / Purpose:** 处理与 「rotate background to left」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
banner.RotateBackgroundToLeft();
```

### GetBackgroundMeshId
`public int GetBackgroundMeshId()`

**用途 / Purpose:** 读取并返回当前对象中 「background mesh id」 的结果。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
var result = banner.GetBackgroundMeshId();
```

### GetIconMeshId
`public int GetIconMeshId()`

**用途 / Purpose:** 读取并返回当前对象中 「icon mesh id」 的结果。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
var result = banner.GetIconMeshId();
```

### SetBackgroundMeshId
`public void SetBackgroundMeshId(int meshId)`

**用途 / Purpose:** 为 「background mesh id」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
banner.SetBackgroundMeshId(0);
```

### SetIconMeshId
`public void SetIconMeshId(int meshId)`

**用途 / Purpose:** 为 「icon mesh id」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
banner.SetIconMeshId(0);
```

### Serialize
`public string Serialize()`

**用途 / Purpose:** 将当前对象序列化为可存储或传输的格式。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
var result = banner.Serialize();
```

### Deserialize
`public void Deserialize(string message)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
banner.Deserialize("example");
```

### ClearAllIcons
`public void ClearAllIcons()`

**用途 / Purpose:** 清空当前对象中的「all icons」。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
banner.ClearAllIcons();
```

### AddIconData
`public void AddIconData(BannerData iconData)`

**用途 / Purpose:** 将 「icon data」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
banner.AddIconData(iconData);
```

### AddIconData
`public void AddIconData(BannerData iconData, int index)`

**用途 / Purpose:** 将 「icon data」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
banner.AddIconData(iconData, 0);
```

### RemoveIconDataAtIndex
`public void RemoveIconDataAtIndex(int index)`

**用途 / Purpose:** 从当前容器或状态中移除 「icon data at index」。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
banner.RemoveIconDataAtIndex(0);
```

### CreateRandomClanBanner
`public static Banner CreateRandomClanBanner(int seed = -1)`

**用途 / Purpose:** 构建一个新的 「random clan banner」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Banner.CreateRandomClanBanner(0);
```

### CreateRandomBanner
`public static Banner CreateRandomBanner()`

**用途 / Purpose:** 构建一个新的 「random banner」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Banner.CreateRandomBanner();
```

### CreateOneColoredEmptyBanner
`public static Banner CreateOneColoredEmptyBanner(int colorIndex)`

**用途 / Purpose:** 构建一个新的 「one colored empty banner」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Banner.CreateOneColoredEmptyBanner(0);
```

### CreateOneColoredBannerWithOneIcon
`public static Banner CreateOneColoredBannerWithOneIcon(uint backgroundColor, uint iconColor, int iconMeshId)`

**用途 / Purpose:** 构建一个新的 「one colored banner with one icon」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Banner.CreateOneColoredBannerWithOneIcon(0, 0, 0);
```

### GetPrimaryColor
`public uint GetPrimaryColor()`

**用途 / Purpose:** 读取并返回当前对象中 「primary color」 的结果。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
var result = banner.GetPrimaryColor();
```

### GetSecondaryColor
`public uint GetSecondaryColor()`

**用途 / Purpose:** 读取并返回当前对象中 「secondary color」 的结果。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
var result = banner.GetSecondaryColor();
```

### GetFirstIconColor
`public uint GetFirstIconColor()`

**用途 / Purpose:** 读取并返回当前对象中 「first icon color」 的结果。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
var result = banner.GetFirstIconColor();
```

### GetVersionNo
`public int GetVersionNo()`

**用途 / Purpose:** 读取并返回当前对象中 「version no」 的结果。

```csharp
// 先通过子系统 API 拿到 Banner 实例
Banner banner = ...;
var result = banner.GetVersionNo();
```

### GetBannerCodeFromBannerDataList
`public static string GetBannerCodeFromBannerDataList(MBList<BannerData> bannerDataList)`

**用途 / Purpose:** 读取并返回当前对象中 「banner code from banner data list」 的结果。

```csharp
// 静态调用，不需要实例
Banner.GetBannerCodeFromBannerDataList(bannerDataList);
```

### IsValidBannerCode
`public static bool IsValidBannerCode(string bannerCode)`

**用途 / Purpose:** 判断当前对象是否处于 「valid banner code」 状态或条件。

```csharp
// 静态调用，不需要实例
Banner.IsValidBannerCode("example");
```

### TryGetBannerDataFromCode
`public static bool TryGetBannerDataFromCode(string bannerCode, out List<BannerData> bannerDataList)`

**用途 / Purpose:** 尝试获取 「get banner data from code」 的值，通常通过 out 参数返回是否成功。

```csharp
// 静态调用，不需要实例
Banner.TryGetBannerDataFromCode("example", bannerDataList);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Banner banner = ...;
banner.SetBannerVisual(visual);
```

## 参见

- [本区域目录](../)