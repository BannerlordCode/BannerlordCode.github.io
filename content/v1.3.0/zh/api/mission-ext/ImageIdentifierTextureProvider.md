---
title: "ImageIdentifierTextureProvider"
description: "ImageIdentifierTextureProvider 的自动生成类参考。"
---
# ImageIdentifierTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ImageIdentifierTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/ImageIdentifierTextureProvider.cs`

## 概述

`ImageIdentifierTextureProvider` 位于 `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsReleased` | `public bool IsReleased { get; set; }` |
| `IsBig` | `public bool IsBig { get; set; }` |
| `ImageId` | `public string ImageId { get; set; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get; set; }` |

## 主要方法

### Tick
`public override void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 ImageIdentifierTextureProvider 实例
ImageIdentifierTextureProvider imageIdentifierTextureProvider = ...;
imageIdentifierTextureProvider.Tick(0);
```

### Clear
`public override void Clear(bool clearNextFrame)`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 ImageIdentifierTextureProvider 实例
ImageIdentifierTextureProvider imageIdentifierTextureProvider = ...;
imageIdentifierTextureProvider.Clear(false);
```

### CreateImageWithId
`public void CreateImageWithId(string id, string additionalArgs)`

**用途 / Purpose:** 构建一个新的 「image with id」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 ImageIdentifierTextureProvider 实例
ImageIdentifierTextureProvider imageIdentifierTextureProvider = ...;
imageIdentifierTextureProvider.CreateImageWithId("example", "example");
```

### ReleaseCache
`public void ReleaseCache()`

**用途 / Purpose:** 处理与 「release cache」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ImageIdentifierTextureProvider 实例
ImageIdentifierTextureProvider imageIdentifierTextureProvider = ...;
imageIdentifierTextureProvider.ReleaseCache();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ImageIdentifierTextureProvider instance = ...;
```

## 参见

- [本区域目录](../)