---
title: "ICustomNetworking"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ICustomNetworking`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ICustomNetworking

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class ICustomNetworking : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ICustomNetworking.cs`

## Overview

`ICustomNetworking` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public virtual void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OpenConnection
`public virtual void OpenConnection(string connectionString, IConnectionOpenListener listener)`

**Purpose:** Handles logic related to `open connection`.

### OpenConnection
`public virtual void OpenConnection(string connectionString)`

**Purpose:** Handles logic related to `open connection`.

### CloseConnection
`public virtual void CloseConnection(ulong connectionID, IConnectionCloseListener listener)`

**Purpose:** Handles logic related to `close connection`.

### CloseConnection
`public virtual void CloseConnection(ulong connectionID)`

**Purpose:** Handles logic related to `close connection`.

### SendData
`public virtual void SendData(ulong connectionID, byte data, uint dataSize)`

**Purpose:** Handles logic related to `send data`.

### GetAvailableDataSize
`public virtual uint GetAvailableDataSize(ulong connectionID)`

**Purpose:** Gets the current value of `available data size`.

### PeekData
`public virtual void PeekData(ulong connectionID, byte dest, uint dataSize)`

**Purpose:** Handles logic related to `peek data`.

### ReadData
`public virtual void ReadData(ulong connectionID, byte dest, uint dataSize)`

**Purpose:** Handles logic related to `read data`.

### PopData
`public virtual void PopData(ulong connectionID, uint dataSize)`

**Purpose:** Handles logic related to `pop data`.

## Usage Example

```csharp
var value = new ICustomNetworking();
value.Dispose();
```

## See Also

- [Complete Class Catalog](../catalog)