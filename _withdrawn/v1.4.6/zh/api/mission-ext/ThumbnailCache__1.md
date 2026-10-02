---
title: "ThumbnailCache<T>"
description: "ThumbnailCache<T>：TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails 的 public 类，继承 IThumbnailCache；公开成员 19 个（方法 15、属性 2、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ThumbnailCache.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ThumbnailCache<T>

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public abstract class ThumbnailCache<T>: IThumbnailCache where T : ThumbnailCreationData`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ThumbnailCache.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ThumbnailCache<T> 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ThumbnailCache.cs。它是一个 public 类（abstract），实现/继承 IThumbnailCache，继承链为 ThumbnailCache → IThumbnailCache。public/protected 成员共 19 个：15 方法、2 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ThumbnailCache<T> 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`，继承链 ThumbnailCache → IThumbnailCache。成员构成以方法为主（方法 15/19，属性 2/19），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/Thumbnails/ThumbnailCache.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Count` | `public int Count` | 属性 |
| `RenderCallbackCount` | `public int RenderCallbackCount` | 属性 |
| `ThumbnailCache` | `public ThumbnailCache(int capacity)` | 构造函数 |
| `OnInitialize` | `protected virtual void OnInitialize()` | 方法 |
| `OnFinalize` | `protected virtual void OnFinalize()` | 方法 |
| `OnTick` | `protected virtual void OnTick(float dt)` | 方法 |
| `OnClear` | `protected virtual void OnClear()` | 方法 |
| `OnImguiTick` | `protected virtual void OnImguiTick()` | 方法 |
| `OnRequestCancelled` | `protected virtual void OnRequestCancelled(string renderId)` | 方法 |
| `OnCreateTexture` | `protected abstract TextureCreationInfo OnCreateTexture(T thumbnailCreationData);` | 方法 |
| `OnReleaseTexture` | `protected abstract bool OnReleaseTexture(T thumbnailCreationData);` | 方法 |
| `CreateTexture` | `public TextureCreationInfo CreateTexture(ThumbnailCreationData thumbnailCreationData)` | 方法 |
| `ReleaseTexture` | `public bool ReleaseTexture(ThumbnailCreationData thumbnailCreationData)` | 方法 |
| `RemoveThumbnailCacheNode` | `protected void RemoveThumbnailCacheNode(ThumbnailCacheNode node, bool releaseTexture = true)` | 方法 |
| `CreateCamera` | `protected static Camera CreateCamera(float left, float right, float bottom, float top, float near, float far)` | 方法 |
| `CreateDebugIdFrom` | `protected static string CreateDebugIdFrom(string renderId, string typeId, string additionalInfo = "")` | 方法 |
| `GetTotalMemorySize` | `protected int GetTotalMemorySize()` | 方法 |
| `ByteWidthToString` | `protected static string ByteWidthToString(int bytes)` | 方法 |
| `_nodeComparer` | `protected NodeComparer _nodeComparer` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IThumbnailCache](../IThumbnailCache/)
- [同命名空间 AvatarThumbnailCache](../AvatarThumbnailCache/)
- [同命名空间 AvatarThumbnailCreationData](../AvatarThumbnailCreationData/)
- [同命名空间 BannerDebugInfo](../BannerDebugInfo/)
- [同命名空间 BannerEditorTextureCache](../BannerEditorTextureCache/)
