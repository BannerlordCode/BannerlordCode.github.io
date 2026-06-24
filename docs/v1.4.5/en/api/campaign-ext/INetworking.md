<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `INetworking`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# INetworking

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class INetworking : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/INetworking.cs`

## Overview

`INetworking` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public virtual void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### SendP2PPacket
`public virtual bool SendP2PPacket(GalaxyID galaxyID, byte data, uint dataSize, P2PSendType sendType, byte channel)`

**Purpose:** Handles logic related to `send p2 p packet`.

### SendP2PPacket
`public virtual bool SendP2PPacket(GalaxyID galaxyID, byte data, uint dataSize, P2PSendType sendType)`

**Purpose:** Handles logic related to `send p2 p packet`.

### PeekP2PPacket
`public virtual bool PeekP2PPacket(byte dest, uint destSize, ref uint outMsgSize, ref GalaxyID outGalaxyID, byte channel)`

**Purpose:** Handles logic related to `peek p2 p packet`.

### PeekP2PPacket
`public virtual bool PeekP2PPacket(byte dest, uint destSize, ref uint outMsgSize, ref GalaxyID outGalaxyID)`

**Purpose:** Handles logic related to `peek p2 p packet`.

### IsP2PPacketAvailable
`public virtual bool IsP2PPacketAvailable(ref uint outMsgSize, byte channel)`

**Purpose:** Handles logic related to `is p2 p packet available`.

### IsP2PPacketAvailable
`public virtual bool IsP2PPacketAvailable(ref uint outMsgSize)`

**Purpose:** Handles logic related to `is p2 p packet available`.

### ReadP2PPacket
`public virtual bool ReadP2PPacket(byte dest, uint destSize, ref uint outMsgSize, ref GalaxyID outGalaxyID, byte channel)`

**Purpose:** Handles logic related to `read p2 p packet`.

### ReadP2PPacket
`public virtual bool ReadP2PPacket(byte dest, uint destSize, ref uint outMsgSize, ref GalaxyID outGalaxyID)`

**Purpose:** Handles logic related to `read p2 p packet`.

### PopP2PPacket
`public virtual void PopP2PPacket(byte channel)`

**Purpose:** Handles logic related to `pop p2 p packet`.

### PopP2PPacket
`public virtual void PopP2PPacket()`

**Purpose:** Handles logic related to `pop p2 p packet`.

### GetPingWith
`public virtual int GetPingWith(GalaxyID galaxyID)`

**Purpose:** Gets the current value of `ping with`.

### RequestNatTypeDetection
`public virtual void RequestNatTypeDetection()`

**Purpose:** Handles logic related to `request nat type detection`.

### GetNatType
`public virtual NatType GetNatType()`

**Purpose:** Gets the current value of `nat type`.

### GetConnectionType
`public virtual ConnectionType GetConnectionType(GalaxyID userID)`

**Purpose:** Gets the current value of `connection type`.

## Usage Example

```csharp
var value = new INetworking();
value.Dispose();
```

## See Also

- [Complete Class Catalog](../catalog)