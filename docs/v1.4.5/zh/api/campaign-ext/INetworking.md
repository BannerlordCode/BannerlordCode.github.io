<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `INetworking`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# INetworking

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class INetworking : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/INetworking.cs`

## 概述

`INetworking` 位于 `Galaxy.Api`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Galaxy.Api` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Dispose
`public virtual void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### SendP2PPacket
`public virtual bool SendP2PPacket(GalaxyID galaxyID, byte data, uint dataSize, P2PSendType sendType, byte channel)`

**用途 / Purpose:** 处理 `send p2 p packet` 相关逻辑。

### SendP2PPacket
`public virtual bool SendP2PPacket(GalaxyID galaxyID, byte data, uint dataSize, P2PSendType sendType)`

**用途 / Purpose:** 处理 `send p2 p packet` 相关逻辑。

### PeekP2PPacket
`public virtual bool PeekP2PPacket(byte dest, uint destSize, ref uint outMsgSize, ref GalaxyID outGalaxyID, byte channel)`

**用途 / Purpose:** 处理 `peek p2 p packet` 相关逻辑。

### PeekP2PPacket
`public virtual bool PeekP2PPacket(byte dest, uint destSize, ref uint outMsgSize, ref GalaxyID outGalaxyID)`

**用途 / Purpose:** 处理 `peek p2 p packet` 相关逻辑。

### IsP2PPacketAvailable
`public virtual bool IsP2PPacketAvailable(ref uint outMsgSize, byte channel)`

**用途 / Purpose:** 处理 `is p2 p packet available` 相关逻辑。

### IsP2PPacketAvailable
`public virtual bool IsP2PPacketAvailable(ref uint outMsgSize)`

**用途 / Purpose:** 处理 `is p2 p packet available` 相关逻辑。

### ReadP2PPacket
`public virtual bool ReadP2PPacket(byte dest, uint destSize, ref uint outMsgSize, ref GalaxyID outGalaxyID, byte channel)`

**用途 / Purpose:** 处理 `read p2 p packet` 相关逻辑。

### ReadP2PPacket
`public virtual bool ReadP2PPacket(byte dest, uint destSize, ref uint outMsgSize, ref GalaxyID outGalaxyID)`

**用途 / Purpose:** 处理 `read p2 p packet` 相关逻辑。

### PopP2PPacket
`public virtual void PopP2PPacket(byte channel)`

**用途 / Purpose:** 处理 `pop p2 p packet` 相关逻辑。

### PopP2PPacket
`public virtual void PopP2PPacket()`

**用途 / Purpose:** 处理 `pop p2 p packet` 相关逻辑。

### GetPingWith
`public virtual int GetPingWith(GalaxyID galaxyID)`

**用途 / Purpose:** 获取 `ping with` 的当前值。

### RequestNatTypeDetection
`public virtual void RequestNatTypeDetection()`

**用途 / Purpose:** 处理 `request nat type detection` 相关逻辑。

### GetNatType
`public virtual NatType GetNatType()`

**用途 / Purpose:** 获取 `nat type` 的当前值。

### GetConnectionType
`public virtual ConnectionType GetConnectionType(GalaxyID userID)`

**用途 / Purpose:** 获取 `connection type` 的当前值。

## 使用示例

```csharp
var value = new INetworking();
value.Dispose();
```

## 参见

- [完整类目录](../catalog)