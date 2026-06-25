---
title: "BannerManager"
description: "BannerManager 的自动生成类参考。"
---
# BannerManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BannerManager`
**Base:** 无
**File:** `TaleWorlds.Core/BannerManager.cs`

## 概述

`BannerManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `BannerManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static BannerManager Instance { get; }` |
| `BannerIconGroups` | `public MBReadOnlyList<BannerIconGroup> BannerIconGroups { get; }` |
| `BaseBackgroundId` | `public int BaseBackgroundId { get; }` |

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
BannerManager.Initialize();
```

### ResetAndLoad
`public static void ResetAndLoad()`

**用途 / Purpose:** 将 「and load」 重置回默认或初始状态。

```csharp
// 静态调用，不需要实例
BannerManager.ResetAndLoad();
```

### GetColor
`public static uint GetColor(int id)`

**用途 / Purpose:** 读取并返回当前对象中 「color」 的结果。

```csharp
// 静态调用，不需要实例
BannerManager.GetColor(0);
```

### GetColorId
`public static int GetColorId(uint color)`

**用途 / Purpose:** 读取并返回当前对象中 「color id」 的结果。

```csharp
// 静态调用，不需要实例
BannerManager.GetColorId(0);
```

### GetRandomColorId
`public int GetRandomColorId(MBFastRandom random)`

**用途 / Purpose:** 读取并返回当前对象中 「random color id」 的结果。

```csharp
// 先通过子系统 API 拿到 BannerManager 实例
BannerManager bannerManager = ...;
var result = bannerManager.GetRandomColorId(random);
```

### GetIconDataFromIconId
`public BannerIconData GetIconDataFromIconId(int id)`

**用途 / Purpose:** 读取并返回当前对象中 「icon data from icon id」 的结果。

```csharp
// 先通过子系统 API 拿到 BannerManager 实例
BannerManager bannerManager = ...;
var result = bannerManager.GetIconDataFromIconId(0);
```

### GetRandomBackgroundId
`public int GetRandomBackgroundId(MBFastRandom random)`

**用途 / Purpose:** 读取并返回当前对象中 「random background id」 的结果。

```csharp
// 先通过子系统 API 拿到 BannerManager 实例
BannerManager bannerManager = ...;
var result = bannerManager.GetRandomBackgroundId(random);
```

### GetRandomBannerIconId
`public int GetRandomBannerIconId(MBFastRandom random)`

**用途 / Purpose:** 读取并返回当前对象中 「random banner icon id」 的结果。

```csharp
// 先通过子系统 API 拿到 BannerManager 实例
BannerManager bannerManager = ...;
var result = bannerManager.GetRandomBannerIconId(random);
```

### GetBackgroundMeshName
`public string GetBackgroundMeshName(int id)`

**用途 / Purpose:** 读取并返回当前对象中 「background mesh name」 的结果。

```csharp
// 先通过子系统 API 拿到 BannerManager 实例
BannerManager bannerManager = ...;
var result = bannerManager.GetBackgroundMeshName(0);
```

### GetIconSourceTextureName
`public string GetIconSourceTextureName(int id)`

**用途 / Purpose:** 读取并返回当前对象中 「icon source texture name」 的结果。

```csharp
// 先通过子系统 API 拿到 BannerManager 实例
BannerManager bannerManager = ...;
var result = bannerManager.GetIconSourceTextureName(0);
```

### SetBaseBackgroundId
`public void SetBaseBackgroundId(int id)`

**用途 / Purpose:** 为 「base background id」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerManager 实例
BannerManager bannerManager = ...;
bannerManager.SetBaseBackgroundId(0);
```

### SetCultureColors
`public void SetCultureColors(BasicCultureObject culture, List<BannerColor> color)`

**用途 / Purpose:** 为 「culture colors」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BannerManager 实例
BannerManager bannerManager = ...;
bannerManager.SetCultureColors(culture, color);
```

### LoadBannerIcons
`public void LoadBannerIcons()`

**用途 / Purpose:** 从持久化存储或流中读取 「banner icons」。

```csharp
// 先通过子系统 API 拿到 BannerManager 实例
BannerManager bannerManager = ...;
bannerManager.LoadBannerIcons();
```

### LoadBannerIcons
`public void LoadBannerIcons(string xmlPath)`

**用途 / Purpose:** 从持久化存储或流中读取 「banner icons」。

```csharp
// 先通过子系统 API 拿到 BannerManager 实例
BannerManager bannerManager = ...;
bannerManager.LoadBannerIcons("example");
```

## 使用示例

```csharp
var manager = BannerManager.Current;
```

## 参见

- [本区域目录](../)