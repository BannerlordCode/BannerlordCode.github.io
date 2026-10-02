---
title: "CharacterThumbnailCache"
description: "CharacterThumbnailCache：TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails 的 public 类，继承 ThumbnailCache<CharacterThumbnailCreationData>；公开成员 5 个（方法 4、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CharacterThumbnailCache.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterThumbnailCache

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class CharacterThumbnailCache : ThumbnailCache<CharacterThumbnailCreationData>`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CharacterThumbnailCache.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

CharacterThumbnailCache 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CharacterThumbnailCache.cs。它是一个 public 类，实现/继承 ThumbnailCache<CharacterThumbnailCreationData>，继承链为 CharacterThumbnailCache → ThumbnailCache → IThumbnailCache。public/protected 成员共 5 个：4 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterThumbnailCache 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`，继承链 CharacterThumbnailCache → ThumbnailCache → IThumbnailCache。成员构成以方法为主（方法 4/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/CharacterThumbnailCache.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterThumbnailCache` | `public CharacterThumbnailCache(int capacity) : base(capacity)` | 构造函数 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `OnCreateTexture` | `protected override TextureCreationInfo OnCreateTexture(CharacterThumbnailCreationData thumbnailCreationData)` | 方法 |
| `OnReleaseTexture` | `protected override bool OnReleaseTexture(CharacterThumbnailCreationData thumbnailCreationData)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ThumbnailCache](../ThumbnailCache__1/)
- [同命名空间 AvatarThumbnailCache](../AvatarThumbnailCache/)
- [同命名空间 AvatarThumbnailCreationData](../AvatarThumbnailCreationData/)
- [同命名空间 BannerDebugInfo](../BannerDebugInfo/)
- [同命名空间 BannerEditorTextureCache](../BannerEditorTextureCache/)
