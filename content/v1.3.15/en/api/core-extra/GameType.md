---
title: "GameType"
description: "Auto-generated class reference for GameType."
---
# GameType

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameType`
**Base:** none
**File:** `TaleWorlds.Core/GameType.cs`

## Overview

`GameType` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SupportsSaving` | `public virtual bool SupportsSaving { get; set; }` |
| `CurrentGame` | `public Game CurrentGame { get; set; }` |
| `ObjectManager` | `public MBObjectManager ObjectManager { get; }` |
| `GameManager` | `public GameManagerBase GameManager { get; }` |
| `IsInventoryAccessibleAtMission` | `public virtual bool IsInventoryAccessibleAtMission { get; }` |
| `IsQuestScreenAccessibleAtMission` | `public virtual bool IsQuestScreenAccessibleAtMission { get; }` |
| `IsCharacterWindowAccessibleAtMission` | `public virtual bool IsCharacterWindowAccessibleAtMission { get; }` |
| `IsPartyWindowAccessibleAtMission` | `public virtual bool IsPartyWindowAccessibleAtMission { get; }` |
| `IsKingdomWindowAccessibleAtMission` | `public virtual bool IsKingdomWindowAccessibleAtMission { get; }` |
| `IsClanWindowAccessibleAtMission` | `public virtual bool IsClanWindowAccessibleAtMission { get; }` |
| `IsEncyclopediaWindowAccessibleAtMission` | `public virtual bool IsEncyclopediaWindowAccessibleAtMission { get; }` |
| `IsBannerWindowAccessibleAtMission` | `public virtual bool IsBannerWindowAccessibleAtMission { get; }` |
| `IsDevelopment` | `public virtual bool IsDevelopment { get; }` |
| `IsCoreOnlyGameMode` | `public virtual bool IsCoreOnlyGameMode { get; }` |
| `RequiresTutorial` | `public virtual bool RequiresTutorial { get; }` |
| `GameTypeStringId` | `public virtual string GameTypeStringId { get; }` |

## Key Methods

### OnStateChanged
`public abstract void OnStateChanged(GameState oldState)`

**Purpose:** Invoked when the `state changed` event is raised.

```csharp
// Obtain an instance of GameType from the subsystem API first
GameType gameType = ...;
gameType.OnStateChanged(oldState);
```

### DoLoadingForGameType
`public bool DoLoadingForGameType()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameType from the subsystem API first
GameType gameType = ...;
var result = gameType.DoLoadingForGameType();
```

### OnDestroy
`public abstract void OnDestroy()`

**Purpose:** Invoked when the `destroy` event is raised.

```csharp
// Obtain an instance of GameType from the subsystem API first
GameType gameType = ...;
gameType.OnDestroy();
```

### OnMissionIsStarting
`public virtual void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)`

**Purpose:** Invoked when the `mission is starting` event is raised.

```csharp
// Obtain an instance of GameType from the subsystem API first
GameType gameType = ...;
gameType.OnMissionIsStarting("example", rec);
```

### InitializeParameters
`public virtual void InitializeParameters()`

**Purpose:** Prepares the resources, state, or bindings required by `parameters`.

```csharp
// Obtain an instance of GameType from the subsystem API first
GameType gameType = ...;
gameType.InitializeParameters();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
GameType instance = ...;
```

## See Also

- [Area Index](../)