<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameManagerBase`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameManagerBase

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `GameManagerBase` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static GameManagerBase Current { get; }` |
| `Game` | `public Game Game { get; set; }` |
| `Components` | `public IEnumerable<GameManagerComponent> Components { get; }` |
| `ApplicationTime` | `public abstract float ApplicationTime { get; }` |
| `CheatMode` | `public abstract bool CheatMode { get; }` |
| `IsDevelopmentMode` | `public abstract bool IsDevelopmentMode { get; }` |
| `IsEditModeOn` | `public abstract bool IsEditModeOn { get; }` |
| `UnitSpawnPrioritization` | `public abstract UnitSpawnPrioritizations UnitSpawnPrioritization { get; }` |


## Key Methods

### Initialize

```csharp
public void Initialize()
```

### AddComponent

```csharp
public GameManagerComponent AddComponent(Type componentType)
```

### GetComponent

```csharp
public GameManagerComponent GetComponent(Type componentType)
```

### RemoveComponent

```csharp
public void RemoveComponent(GameManagerComponent component)
```

### OnTick

```csharp
public void OnTick(float dt)
```

### OnGameNetworkBegin

```csharp
public void OnGameNetworkBegin()
```

### OnGameNetworkEnd

```csharp
public void OnGameNetworkEnd()
```

### OnPlayerConnect

```csharp
public void OnPlayerConnect(VirtualPlayer peer)
```

### OnPlayerDisconnect

```csharp
public void OnPlayerDisconnect(VirtualPlayer peer)
```

### OnGameEnd

```csharp
public virtual void OnGameEnd(Game game)
```

### DoLoadingForGameManager

```csharp
public bool DoLoadingForGameManager()
```

### OnLoadFinished

```csharp
public virtual void OnLoadFinished()
```

### InitializeGameStarter

```csharp
public virtual void InitializeGameStarter(Game game, IGameStarter starterObject)
```

### OnGameStart

```csharp
public abstract void OnGameStart(Game game, IGameStarter gameStarter)
```

### BeginGameStart

```csharp
public abstract void BeginGameStart(Game game)
```

### OnNewCampaignStart

```csharp
public abstract void OnNewCampaignStart(Game game, object starterObject)
```

### OnAfterCampaignStart

```csharp
public abstract void OnAfterCampaignStart(Game game)
```

### RegisterSubModuleObjects

```csharp
public abstract void RegisterSubModuleObjects(bool isSavedCampaign)
```

### AfterRegisterSubModuleObjects

```csharp
public abstract void AfterRegisterSubModuleObjects(bool isSavedCampaign)
```

### OnGameInitializationFinished

```csharp
public abstract void OnGameInitializationFinished(Game game)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)