---
title: "ImageIdentifierTextureProvider"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ImageIdentifierTextureProvider`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### Clear
`public override void Clear(bool clearNextFrame)`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### CreateImageWithId
`public void CreateImageWithId(string id, string additionalArgs)`

**用途 / Purpose:** 创建一个 `image with id` 实例或对象。

### ReleaseCache
`public void ReleaseCache()`

**用途 / Purpose:** 处理 `release cache` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomImageIdentifierTextureProvider();
```

## 参见

- [完整类目录](../catalog)