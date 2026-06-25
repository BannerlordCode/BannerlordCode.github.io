---
title: "MBGameManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBGameManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBGameManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** public abstract class MBGameManager : GameManagerBase
**Base:** `GameManagerBase`
**File:** `TaleWorlds.MountAndBlade/MBGameManager.cs`

## Overview

`MBGameManager` is the abstract base for game modes — the campaign, custom battles, and multiplayer each subclass it. It owns the mission lifecycle, application time, and config flags (`CheatMode`, `IsDevelopmentMode`, `UnitSpawnPrioritization`). The active manager is reachable via `MBGameManager.Current`. Mods subclass it to implement a fully custom game mode.

## Mental Model

Treat `MBGameManager` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public new static MBGameManager Current { get { return (MBGameManager)GameManagerBase.Current; }` |
| `IsLoaded` | `public bool IsLoaded { get; protected set; }` |
| `ApplicationTime` | `public override float ApplicationTime { get { return MBCommon.GetApplicationTime(); }` |
| `CheatMode` | `public override bool CheatMode { get { return NativeConfig.CheatMode; }` |
| `IsDevelopmentMode` | `public override bool IsDevelopmentMode { get { return NativeConfig.IsDevelopmentMode; }` |
| `IsEditModeOn` | `public override bool IsEditModeOn { get { return MBEditor.IsEditModeOn; }` |
| `UnitSpawnPrioritization` | `public override UnitSpawnPrioritizations UnitSpawnPrioritization { get { return (UnitSpawnPrioritizations)BannerlordConfig.UnitSpawnPrioritization; }` |

## Key Methods

### StartNewGame
```csharp
public static void StartNewGame(MBGameManager gameLoader)
```

### BeginGameStart
```csharp
public override void BeginGameStart(Game game)
```

### OnNewCampaignStart
```csharp
public override void OnNewCampaignStart(Game game, object starterObject)
```

### InitializeSubModuleGameObjects
```csharp
public override void InitializeSubModuleGameObjects(Game game)
```

### RegisterSubModuleObjects
```csharp
public override void RegisterSubModuleObjects(bool isSavedCampaign)
```

### RegisterSubModuleTypes
```csharp
public override void RegisterSubModuleTypes()
```

### AfterRegisterSubModuleObjects
```csharp
public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)
```

### InitializeGameStarter
```csharp
public override void InitializeGameStarter(Game game, IGameStarter starterObject)
```

### OnGameInitializationFinished
```csharp
public override void OnGameInitializationFinished(Game game)
```

### OnAfterGameInitializationFinished
```csharp
public override void OnAfterGameInitializationFinished(Game game, object initializerObject)
```

### OnGameLoaded
```csharp
public override void OnGameLoaded(Game game, object initializerObject)
```

### OnAfterGameLoaded
```csharp
public override void OnAfterGameLoaded(Game game)
```

### OnNewGameCreated
```csharp
public override void OnNewGameCreated(Game game, object initializerObject)
```

### OnGameStart
```csharp
public override void OnGameStart(Game game, IGameStarter gameStarter)
```

### OnGameEnd
```csharp
public override void OnGameEnd(Game game)
```

### EndGame
```csharp
public static void EndGame()
```

### OnLoadFinished
```csharp
public override void OnLoadFinished()
```

### CheckAndSetEnding
```csharp
public bool CheckAndSetEnding()
```

### OnSessionInvitationAccepted
```csharp
public virtual void OnSessionInvitationAccepted(SessionInvitationType targetGameType)
```

### OnPlatformRequestedMultiplayer
```csharp
public virtual void OnPlatformRequestedMultiplayer()
```

## Usage Example

```csharp
var implementation = new CustomMBGameManager();
```

## See Also

- [Complete Class Catalog](../catalog)