---
title: "AvatarThumbnailCache"
description: "AvatarThumbnailCache：TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails 的 public 类，继承 ThumbnailCache<AvatarThumbnailCreationData>；公开成员 6 个（方法 4、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/AvatarThumbnailCache.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AvatarThumbnailCache

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class AvatarThumbnailCache : ThumbnailCache<AvatarThumbnailCreationData>`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/AvatarThumbnailCache.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

AvatarThumbnailCache 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/AvatarThumbnailCache.cs。它是一个 public 类，实现/继承 ThumbnailCache<AvatarThumbnailCreationData>，继承链为 AvatarThumbnailCache → ThumbnailCache → IThumbnailCache。public/protected 成员共 6 个：4 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AvatarThumbnailCache 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`，继承链 AvatarThumbnailCache → ThumbnailCache → IThumbnailCache。成员构成以方法为主（方法 4/6，属性 1/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/AvatarThumbnailCache.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static AvatarThumbnailCache Current` | 属性 |
| `AvatarThumbnailCache` | `public AvatarThumbnailCache(int capacity) : base(capacity)` | 构造函数 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `OnCreateTexture` | `protected override TextureCreationInfo OnCreateTexture(AvatarThumbnailCreationData thumbnailCreationData)` | 方法 |
| `OnReleaseTexture` | `protected override bool OnReleaseTexture(AvatarThumbnailCreationData thumbnailCreationData)` | 方法 |
| `FlushCache` | `public void FlushCache()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ThumbnailCache](../ThumbnailCache__1/)
- [同命名空间 AvatarThumbnailCreationData](../AvatarThumbnailCreationData/)
- [同命名空间 BannerDebugInfo](../BannerDebugInfo/)
- [同命名空间 BannerEditorTextureCache](../BannerEditorTextureCache/)
- [同命名空间 BannerEditorTextureCreationData](../BannerEditorTextureCreationData/)
