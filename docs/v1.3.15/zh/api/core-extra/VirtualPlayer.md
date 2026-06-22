<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VirtualPlayer`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VirtualPlayer

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`VirtualPlayer` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `PeerComponents` | `public static Dictionary<Type, object> PeerComponents { get; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |
| `BodyProperties` | `public BodyProperties BodyProperties { get; }` |
| `Race` | `public int Race { get; }` |
| `IsFemale` | `public bool IsFemale { get; }` |
| `Id` | `public PlayerId Id { get; }` |
| `Index` | `public int Index { get; }` |
| `IsMine` | `public bool IsMine { get; }` |
| `UserName` | `public string UserName { get; }` |
| `ChosenBadgeIndex` | `public int ChosenBadgeIndex { get; set; }` |


## 主要方法

### Reset

```csharp
public static void Reset()
```

### AddComponent

```csharp
public PeerComponent AddComponent(Type peerComponentType)
```

### AddComponent

```csharp
public PeerComponent AddComponent(uint componentId)
```

### GetComponent

```csharp
public PeerComponent GetComponent(uint componentId)
```

### GetComponent

```csharp
public PeerComponent GetComponent(Type peerComponentType)
```

### RemoveComponent

```csharp
public void RemoveComponent(PeerComponent component)
```

### OnDisconnect

```csharp
public void OnDisconnect()
```

### SynchronizeComponentsTo

```csharp
public void SynchronizeComponentsTo(VirtualPlayer peer)
```

### UpdateIndexForReconnectingPlayer

```csharp
public void UpdateIndexForReconnectingPlayer(int playerIndex)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)