---
title: "BannerVisualExtensions"
description: "BannerVisualExtensions 的自动生成类参考。"
---
# BannerVisualExtensions

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerVisualExtensions`
**Base:** 无
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/BannerVisualExtensions.cs`

## 概述

`BannerVisualExtensions` 位于 `TaleWorlds.MountAndBlade.View`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetTableauTextureSmallForBannerEditor
`public static Texture GetTableauTextureSmallForBannerEditor(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture> setAction, out BannerEditorTextureCreationData textureCreationData)`

**用途 / Purpose:** 读取并返回当前对象中 「tableau texture small for banner editor」 的结果。

```csharp
// 静态调用，不需要实例
BannerVisualExtensions.GetTableauTextureSmallForBannerEditor(banner, debugInfo, setAction, textureCreationData);
```

### GetTableauTextureLargeForBannerEditor
`public static Texture GetTableauTextureLargeForBannerEditor(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture> setAction, out BannerEditorTextureCreationData textureCreationData)`

**用途 / Purpose:** 读取并返回当前对象中 「tableau texture large for banner editor」 的结果。

```csharp
// 静态调用，不需要实例
BannerVisualExtensions.GetTableauTextureLargeForBannerEditor(banner, debugInfo, setAction, textureCreationData);
```

### GetTableauTextureSmall
`public static Texture GetTableauTextureSmall(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture> setAction)`

**用途 / Purpose:** 读取并返回当前对象中 「tableau texture small」 的结果。

```csharp
// 静态调用，不需要实例
BannerVisualExtensions.GetTableauTextureSmall(banner, debugInfo, setAction);
```

### GetTableauTextureLarge
`public static Texture GetTableauTextureLarge(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture> setAction)`

**用途 / Purpose:** 读取并返回当前对象中 「tableau texture large」 的结果。

```csharp
// 静态调用，不需要实例
BannerVisualExtensions.GetTableauTextureLarge(banner, debugInfo, setAction);
```

### GetTableauTextureLarge
`public static Texture GetTableauTextureLarge(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture> setAction, out BannerTextureCreationData creationData)`

**用途 / Purpose:** 读取并返回当前对象中 「tableau texture large」 的结果。

```csharp
// 静态调用，不需要实例
BannerVisualExtensions.GetTableauTextureLarge(banner, debugInfo, setAction, creationData);
```

### ConvertToMultiMesh
`public static MetaMesh ConvertToMultiMesh(this Banner banner)`

**用途 / Purpose:** 把「to multi mesh」转换为另一种表示或类型。

```csharp
// 静态调用，不需要实例
BannerVisualExtensions.ConvertToMultiMesh(banner);
```

## 使用示例

```csharp
BannerVisualExtensions.GetTableauTextureSmallForBannerEditor(banner, debugInfo, setAction, textureCreationData);
```

## 参见

- [本区域目录](../)