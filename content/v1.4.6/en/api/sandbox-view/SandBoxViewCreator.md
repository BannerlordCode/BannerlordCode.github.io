---
title: "SandBoxViewCreator"
description: "SandBoxViewCreator: a public class in SandBox.View; 14 exposed members (14 methods, 0 properties, 0 fields). Source: SandBox.View/SandBoxViewCreator.cs."
---
# SandBoxViewCreator

**Namespace:** `SandBox.View`
**Module:** `SandBox.View`
**Type:** `public static class SandBoxViewCreator`
**File:** `SandBox.View/SandBoxViewCreator.cs`

## Overview

SandBoxViewCreator lives in the SandBox.View module, source file SandBox.View/SandBoxViewCreator.cs. It is a public class; the inheritance chain is SandBoxViewCreator. It exposes 14 public/protected members: 14 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandBoxViewCreator is a top-level type in SandBox.View, namespace matching the module directory; inheritance chain SandBoxViewCreator. The surface is method-led (methods 14/14, properties 0/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/SandBoxViewCreator.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateSaveLoadScreen` | `public static ScreenBase CreateSaveLoadScreen(bool isSaving)` | method |
| `CreateMissionCraftingView` | `public static MissionView CreateMissionCraftingView()` | method |
| `CreateMissionNameMarkerUIHandler` | `public static MissionView CreateMissionNameMarkerUIHandler(Mission mission = null)` | method |
| `CreateMissionConversationView` | `public static MissionView CreateMissionConversationView(Mission mission)` | method |
| `CreateMissionBarterView` | `public static MissionView CreateMissionBarterView()` | method |
| `CreateMissionAgentAlarmStateView` | `public static MissionView CreateMissionAgentAlarmStateView(Mission mission = null)` | method |
| `CreateMissionMainAgentDetectionView` | `public static MissionView CreateMissionMainAgentDetectionView(Mission mission = null)` | method |
| `CreateMissionStealthFailCounter` | `public static MissionView CreateMissionStealthFailCounter(Mission mission = null)` | method |
| `CreateMissionTournamentView` | `public static MissionView CreateMissionTournamentView()` | method |
| `CreateMissionQuestBarView` | `public static MissionView CreateMissionQuestBarView()` | method |
| `CreateMapView` | `public static MapView CreateMapView<T>(params object[]parameters) where T : MapView` | method |
| `CreateMenuView` | `public static MenuView CreateMenuView<T>(params object[]parameters) where T : MenuView` | method |
| `CreateBoardGameView` | `public static MissionView CreateBoardGameView()` | method |
| `CreateMissionArenaPracticeFightView` | `public static MissionView CreateMissionArenaPracticeFightView()` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CampaignMusicHandler](../CampaignMusicHandler)
- [same namespace IChangeableScreen](../IChangeableScreen)
- [same namespace MainHeroSaveVisualSupplier](../MainHeroSaveVisualSupplier)
- [same namespace PreloadScreen](../PreloadScreen)
