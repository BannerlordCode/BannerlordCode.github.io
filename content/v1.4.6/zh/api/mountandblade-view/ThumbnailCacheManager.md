---
title: "ThumbnailCacheManager"
description: "ThumbnailCacheManager：TaleWorlds.MountAndBlade.View 的 public 类；公开成员 22 个（方法 20、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/ThumbnailCacheManager.cs。"
---
# ThumbnailCacheManager

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class ThumbnailCacheManager`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/ThumbnailCacheManager.cs`

## 概述

ThumbnailCacheManager 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/ThumbnailCacheManager.cs。它是一个 public 类，继承链为 ThumbnailCacheManager。public/protected 成员共 22 个：20 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ThumbnailCacheManager 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.Tableaus），继承链 ThumbnailCacheManager。成员构成以方法为主（方法 20/22，属性 2/22），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/ThumbnailCacheManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static ThumbnailCacheManager Current` | 属性 |
| `InventorySceneCameraFrame` | `public MatrixFrame InventorySceneCameraFrame` | 属性 |
| `IsCachedInventoryTableauSceneUsed` | `public bool IsCachedInventoryTableauSceneUsed()` | 方法 |
| `GetCachedInventoryTableauScene` | `public Scene GetCachedInventoryTableauScene()` | 方法 |
| `ReturnCachedInventoryTableauScene` | `public void ReturnCachedInventoryTableauScene()` | 方法 |
| `IsCachedMapConversationTableauSceneUsed` | `public bool IsCachedMapConversationTableauSceneUsed()` | 方法 |
| `GetCachedMapConversationTableauScene` | `public Scene GetCachedMapConversationTableauScene()` | 方法 |
| `ReturnCachedMapConversationTableauScene` | `public void ReturnCachedMapConversationTableauScene()` | 方法 |
| `GetNumberOfPendingRequests` | `public static int GetNumberOfPendingRequests()` | 方法 |
| `IsNativeMemoryCleared` | `public static bool IsNativeMemoryCleared()` | 方法 |
| `InitializeManager` | `public static void InitializeManager()` | 方法 |
| `RegisterThumbnailCache` | `public void RegisterThumbnailCache(IThumbnailCache thumbnailCache)` | 方法 |
| `UnregisterThumbnailCache` | `public void UnregisterThumbnailCache(IThumbnailCache thumbnailCache)` | 方法 |
| `InitializeSandboxValues` | `public static void InitializeSandboxValues()` | 方法 |
| `ReleaseSandboxValues` | `public static void ReleaseSandboxValues()` | 方法 |
| `ClearManager` | `public static void ClearManager()` | 方法 |
| `CreateTexture` | `public TextureCreationInfo CreateTexture(ThumbnailCreationData thumbnailCreationData)` | 方法 |
| `DestroyTexture` | `public bool DestroyTexture(ThumbnailCreationData thumbnailCreationData)` | 方法 |
| `ForceClearAllCache` | `public void ForceClearAllCache(bool releaseImmediately)` | 方法 |
| `GetCachedHeroSilhouetteTexture` | `public Texture GetCachedHeroSilhouetteTexture()` | 方法 |
| `ClearUnusedCache` | `public void ClearUnusedCache()` | 方法 |
| `Tick` | `public void Tick(float dt)` | 方法 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerTableau](../BannerTableau)
- [同命名空间 BannerThumbnailCreationBaseData](../BannerThumbnailCreationBaseData)
- [同命名空间 BasicCharacterTableau](../BasicCharacterTableau)
- [同命名空间 BrightnessDemoTableau](../BrightnessDemoTableau)
