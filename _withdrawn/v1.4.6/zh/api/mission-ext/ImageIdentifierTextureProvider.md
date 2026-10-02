---
title: "ImageIdentifierTextureProvider"
description: "ImageIdentifierTextureProvider：TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers 的 public 类，继承 TextureProvider、IDisposable；公开成员 16 个（方法 10、属性 5、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/ImageIdentifierTextureProvider.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ImageIdentifierTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public abstract class ImageIdentifierTextureProvider : TextureProvider, IDisposable`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/ImageIdentifierTextureProvider.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ImageIdentifierTextureProvider 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/ImageIdentifierTextureProvider.cs。它是一个 public 类（abstract），实现/继承 TextureProvider、IDisposable，继承链为 ImageIdentifierTextureProvider → TextureProvider。public/protected 成员共 16 个：10 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ImageIdentifierTextureProvider 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers`，继承链 ImageIdentifierTextureProvider → TextureProvider。成员构成以方法为主（方法 10/16，属性 5/16），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/ImageIdentifierTextureProvider.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ThumbnailCreationData` | `protected ThumbnailCreationData ThumbnailCreationData` | 属性 |
| `ImageIdentifierTextureProvider` | `public ImageIdentifierTextureProvider()` | 构造函数 |
| `OnCreateImageWithId` | `protected abstract void OnCreateImageWithId(string id, string additionalArgs);` | 方法 |
| `Tick` | `public override void Tick(float dt)` | 方法 |
| `Clear` | `public override void Clear(bool clearNextFrame)` | 方法 |
| `GetCanForceCheckTexture` | `protected virtual bool GetCanForceCheckTexture()` | 方法 |
| `OnCheckTexture` | `protected virtual void OnCheckTexture()` | 方法 |
| `OnGetTextureForRender` | `protected override TaleWorlds.TwoDimension.Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name)` | 方法 |
| `ForceRefreshTextures` | `protected void ForceRefreshTextures()` | 方法 |
| `CreateImageWithId` | `public void CreateImageWithId(string id, string additionalArgs)` | 方法 |
| `OnTextureCreated` | `protected void OnTextureCreated(TaleWorlds.Engine.Texture texture)` | 方法 |
| `OnTextureCreationCancelled` | `protected void OnTextureCreationCancelled()` | 方法 |
| `IsReleased` | `public bool IsReleased` | 属性 |
| `IsBig` | `public bool IsBig` | 属性 |
| `ImageId` | `public string ImageId` | 属性 |
| `AdditionalArgs` | `public string AdditionalArgs` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 TextureProvider](../../gui/TextureProvider/)
- [同命名空间 BannerImageTextureProvider](../BannerImageTextureProvider/)
- [同命名空间 CharacterImageTextureProvider](../CharacterImageTextureProvider/)
- [同命名空间 CraftingPieceImageTextureProvider](../CraftingPieceImageTextureProvider/)
- [同命名空间 ItemImageTextureProvider](../ItemImageTextureProvider/)
