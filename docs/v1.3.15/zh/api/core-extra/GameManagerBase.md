<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameManagerBase`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameManagerBase

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`GameManagerBase` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)