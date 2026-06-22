<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameState`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameState

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`GameState` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Predecessor` | `public GameState Predecessor { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `Listeners` | `public IReadOnlyCollection<IGameStateListener> Listeners { get; set; }` |
| `GameStateManager` | `public GameStateManager GameStateManager { get; set; }` |
| `IsMusicMenuState` | `public virtual bool IsMusicMenuState { get; }` |
| `IsMenuState` | `public virtual bool IsMenuState { get; }` |
| `Activated` | `public bool Activated { get; }` |


## 主要方法

### RegisterListener

```csharp
public bool RegisterListener(IGameStateListener listener)
```

### UnregisterListener

```csharp
public bool UnregisterListener(IGameStateListener listener)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)