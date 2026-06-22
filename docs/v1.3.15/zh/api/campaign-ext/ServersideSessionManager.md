<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ServersideSessionManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ServersideSessionManager

**命名空间:** TaleWorlds.Network
**模块:** TaleWorlds.Network
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ServersideSessionManager` 是 `TaleWorlds.Network` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `PeerAliveCoeff` | `public float PeerAliveCoeff { get; set; }` |


## 主要方法

### Activate

```csharp
public void Activate(ushort port, ServersideSessionManager.ThreadType threadType = ServersideSessionManager.ThreadType.Single, int readWriteThreadCount = 1)
```

### GetPeer

```csharp
public ServersideSession GetPeer(int peerIndex)
```

### Tick

```csharp
public virtual void Tick()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)