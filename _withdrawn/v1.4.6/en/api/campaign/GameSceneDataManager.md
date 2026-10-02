---
title: "GameSceneDataManager"
description: "GameSceneDataManager: a public class in TaleWorlds.CampaignSystem; 8 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/GameSceneDataManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameSceneDataManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GameSceneDataManager`
**File:** `TaleWorlds.CampaignSystem/GameSceneDataManager.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

GameSceneDataManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameSceneDataManager.cs. It is a public class; the inheritance chain is GameSceneDataManager. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameSceneDataManager lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain GameSceneDataManager. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameSceneDataManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Instance` | `public static GameSceneDataManager Instance` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<SingleplayerBattleSceneData>SingleplayerBattleScenes` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<ConversationSceneData>ConversationScenes` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<MeetingSceneData>MeetingScenes` | property |
| `GameSceneDataManager` | `public GameSceneDataManager()` | constructor |
| `LoadSPBattleScenes` | `public void LoadSPBattleScenes(string path)` | method |
| `LoadConversationScenes` | `public void LoadConversationScenes(string path)` | method |
| `LoadMeetingScenes` | `public void LoadMeetingScenes(string path)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace AIBehaviorData](../AIBehaviorData/)
- [same namespace Army](../Army/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)
