---
title: "GameType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameType`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Called when the `state changed` event is raised.

### DoLoadingForGameType
`public bool DoLoadingForGameType()`

**Purpose:** Handles logic related to `do loading for game type`.

### OnDestroy
`public abstract void OnDestroy()`

**Purpose:** Called when the `destroy` event is raised.

### OnMissionIsStarting
`public virtual void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)`

**Purpose:** Called when the `mission is starting` event is raised.

### InitializeParameters
`public virtual void InitializeParameters()`

**Purpose:** Initializes the state, resources, or bindings for `parameters`.

## Usage Example

```csharp
var implementation = new CustomGameType();
```

## See Also

- [Complete Class Catalog](../catalog)