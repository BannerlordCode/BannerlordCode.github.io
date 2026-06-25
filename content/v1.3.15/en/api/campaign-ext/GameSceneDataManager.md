---
title: "GameSceneDataManager"
description: "Auto-generated class reference for GameSceneDataManager."
---
# GameSceneDataManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameSceneDataManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameSceneDataManager.cs`

## Overview

`GameSceneDataManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `GameSceneDataManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static GameSceneDataManager Instance { get; }` |
| `SingleplayerBattleScenes` | `public MBReadOnlyList<SingleplayerBattleSceneData> SingleplayerBattleScenes { get; }` |
| `ConversationScenes` | `public MBReadOnlyList<ConversationSceneData> ConversationScenes { get; }` |
| `MeetingScenes` | `public MBReadOnlyList<MeetingSceneData> MeetingScenes { get; }` |

## Key Methods

### LoadSPBattleScenes
`public void LoadSPBattleScenes(string path)`

**Purpose:** Reads s p battle scenes from persistent storage or a stream.

```csharp
// Obtain an instance of GameSceneDataManager from the subsystem API first
GameSceneDataManager gameSceneDataManager = ...;
gameSceneDataManager.LoadSPBattleScenes("example");
```

### LoadConversationScenes
`public void LoadConversationScenes(string path)`

**Purpose:** Reads conversation scenes from persistent storage or a stream.

```csharp
// Obtain an instance of GameSceneDataManager from the subsystem API first
GameSceneDataManager gameSceneDataManager = ...;
gameSceneDataManager.LoadConversationScenes("example");
```

### LoadMeetingScenes
`public void LoadMeetingScenes(string path)`

**Purpose:** Reads meeting scenes from persistent storage or a stream.

```csharp
// Obtain an instance of GameSceneDataManager from the subsystem API first
GameSceneDataManager gameSceneDataManager = ...;
gameSceneDataManager.LoadMeetingScenes("example");
```

## Usage Example

```csharp
var manager = GameSceneDataManager.Current;
```

## See Also

- [Area Index](../)