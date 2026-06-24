<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ServersideSessionManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ServersideSessionManager

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class ServersideSessionManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Network/TaleWorlds.Network/ServersideSessionManager.cs`

## Overview

`ServersideSessionManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ServersideSessionManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PeerAliveCoeff` | `public float PeerAliveCoeff { get; set; }` |

## Key Methods

### Activate
`public void Activate(ushort port, ThreadType threadType = ThreadType.Single, int readWriteThreadCount = 1)`

**Purpose:** Handles logic related to `activate`.

### GetPeer
`public ServersideSession GetPeer(int peerIndex)`

**Purpose:** Gets the current value of `peer`.

### Tick
`public virtual void Tick()`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var implementation = new CustomServersideSessionManager();
```

## See Also

- [Complete Class Catalog](../catalog)