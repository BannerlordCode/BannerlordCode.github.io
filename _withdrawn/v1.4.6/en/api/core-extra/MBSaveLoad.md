---
title: "MBSaveLoad"
description: "MBSaveLoad: a public class in TaleWorlds.Core; 24 exposed members (17 methods, 7 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/MBSaveLoad.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBSaveLoad

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class MBSaveLoad`
**File:** `TaleWorlds.Core/MBSaveLoad.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

MBSaveLoad lives in the TaleWorlds.Core module, source file TaleWorlds.Core/MBSaveLoad.cs. It is a public class; the inheritance chain is MBSaveLoad. It exposes 24 public/protected members: 17 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBSaveLoad lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain MBSaveLoad. The surface is method-led (methods 17/24, properties 7/24), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/MBSaveLoad.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ModuleVersionSeperator` | `public static char ModuleVersionSeperator` | property |
| `ModuleCodeSeperator` | `public static char ModuleCodeSeperator` | property |
| `LastLoadedGameVersion` | `public static ApplicationVersion LastLoadedGameVersion` | property |
| `CurrentVersion` | `public static ApplicationVersion CurrentVersion` | property |
| `IsUpdatingGameVersion` | `public static bool IsUpdatingGameVersion` | property |
| `NumberOfCurrentSaves` | `public static int NumberOfCurrentSaves` | property |
| `ActiveSaveSlotName` | `public static string ActiveSaveSlotName` | property |
| `SetSaveDriver` | `public static void SetSaveDriver(ISaveDriver saveDriver)` | method |
| `SaveGameFileInfo[]GetSaveFiles` | `public static SaveGameFileInfo[]GetSaveFiles(Func<SaveGameFileInfo, bool>condition = null)` | method |
| `IsSaveGameFileExists` | `public static bool IsSaveGameFileExists(string saveFileName)` | method |
| `string[]GetSaveFileNames` | `public static string[]GetSaveFileNames()` | method |
| `LoadSaveGameData` | `public static LoadResult LoadSaveGameData(string saveName)` | method |
| `GetSaveFileWithName` | `public static SaveGameFileInfo GetSaveFileWithName(string saveName)` | method |
| `QuickSaveCurrentGame` | `public static void QuickSaveCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, Action<ValueTuple<SaveResult, string>>onSaveCompleted)` | method |
| `AutoSaveCurrentGame` | `public static void AutoSaveCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, Action<ValueTuple<SaveResult, string>>onSaveCompleted)` | method |
| `SaveAsCurrentGame` | `public static void SaveAsCurrentGame(CampaignSaveMetaDataArgs campaignMetaData, string saveName, Action<ValueTuple<SaveResult, string>>onSaveCompleted)` | method |
| `DeleteSaveGame` | `public static bool DeleteSaveGame(string saveName)` | method |
| `Initialize` | `public static void Initialize(GameTextManager localizedTextProvider)` | method |
| `OnNewGame` | `public static void OnNewGame()` | method |
| `OnGameDestroy` | `public static void OnGameDestroy()` | method |
| `OnStartGame` | `public static void OnStartGame(LoadResult loadResult)` | method |
| `IsSaveFileNameReserved` | `public static bool IsSaveFileNameReserved(string name)` | method |
| `GetMaxNumberOfSaves` | `public static int GetMaxNumberOfSaves()` | method |
| `IsMaxNumberOfSavesReached` | `public static bool IsMaxNumberOfSavesReached()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
