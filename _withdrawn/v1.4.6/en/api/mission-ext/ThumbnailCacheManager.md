---
title: "ThumbnailCacheManager"
description: "ThumbnailCacheManager: a public class in TaleWorlds.MountAndBlade.View.Tableaus; 22 exposed members (20 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/ThumbnailCacheManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ThumbnailCacheManager

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class ThumbnailCacheManager`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/ThumbnailCacheManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ThumbnailCacheManager lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/ThumbnailCacheManager.cs. It is a public class; the inheritance chain is ThumbnailCacheManager. It exposes 22 public/protected members: 20 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ThumbnailCacheManager lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.Tableaus`, inheritance chain ThumbnailCacheManager. The surface is method-led (methods 20/22, properties 2/22), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/ThumbnailCacheManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Current` | `public static ThumbnailCacheManager Current` | property |
| `InventorySceneCameraFrame` | `public MatrixFrame InventorySceneCameraFrame` | property |
| `IsCachedInventoryTableauSceneUsed` | `public bool IsCachedInventoryTableauSceneUsed()` | method |
| `GetCachedInventoryTableauScene` | `public Scene GetCachedInventoryTableauScene()` | method |
| `ReturnCachedInventoryTableauScene` | `public void ReturnCachedInventoryTableauScene()` | method |
| `IsCachedMapConversationTableauSceneUsed` | `public bool IsCachedMapConversationTableauSceneUsed()` | method |
| `GetCachedMapConversationTableauScene` | `public Scene GetCachedMapConversationTableauScene()` | method |
| `ReturnCachedMapConversationTableauScene` | `public void ReturnCachedMapConversationTableauScene()` | method |
| `GetNumberOfPendingRequests` | `public static int GetNumberOfPendingRequests()` | method |
| `IsNativeMemoryCleared` | `public static bool IsNativeMemoryCleared()` | method |
| `InitializeManager` | `public static void InitializeManager()` | method |
| `RegisterThumbnailCache` | `public void RegisterThumbnailCache(IThumbnailCache thumbnailCache)` | method |
| `UnregisterThumbnailCache` | `public void UnregisterThumbnailCache(IThumbnailCache thumbnailCache)` | method |
| `InitializeSandboxValues` | `public static void InitializeSandboxValues()` | method |
| `ReleaseSandboxValues` | `public static void ReleaseSandboxValues()` | method |
| `ClearManager` | `public static void ClearManager()` | method |
| `CreateTexture` | `public TextureCreationInfo CreateTexture(ThumbnailCreationData thumbnailCreationData)` | method |
| `DestroyTexture` | `public bool DestroyTexture(ThumbnailCreationData thumbnailCreationData)` | method |
| `ForceClearAllCache` | `public void ForceClearAllCache(bool releaseImmediately)` | method |
| `GetCachedHeroSilhouetteTexture` | `public Texture GetCachedHeroSilhouetteTexture()` | method |
| `ClearUnusedCache` | `public void ClearUnusedCache()` | method |
| `Tick` | `public void Tick(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BannerTableau](../BannerTableau/)
- [same namespace BannerThumbnailCreationBaseData](../BannerThumbnailCreationBaseData/)
- [same namespace BasicCharacterTableau](../BasicCharacterTableau/)
- [same namespace BrightnessDemoTableau](../BrightnessDemoTableau/)
