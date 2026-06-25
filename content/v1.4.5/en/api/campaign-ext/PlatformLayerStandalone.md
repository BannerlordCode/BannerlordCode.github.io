---
title: "PlatformLayerStandalone"
description: "Auto-generated class reference for PlatformLayerStandalone."
---
# PlatformLayerStandalone

**Namespace:** psai.net
**Module:** psai.net
**Type:** `internal class PlatformLayerStandalone : IPlatformLayer`
**Base:** `IPlatformLayer`
**File:** `bin/TaleWorlds.PSAI/psai.net/PlatformLayerStandalone.cs`

## Overview

`PlatformLayerStandalone` lives in `psai.net` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.net` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of PlatformLayerStandalone from the subsystem API first
PlatformLayerStandalone platformLayerStandalone = ...;
platformLayerStandalone.Initialize();
```

### Release
`public void Release()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PlatformLayerStandalone from the subsystem API first
PlatformLayerStandalone platformLayerStandalone = ...;
platformLayerStandalone.Release();
```

### ConvertFilePathForPlatform
`public string ConvertFilePathForPlatform(string filepath)`

**Purpose:** Converts `file path for platform` into another representation or type.

```csharp
// Obtain an instance of PlatformLayerStandalone from the subsystem API first
PlatformLayerStandalone platformLayerStandalone = ...;
var result = platformLayerStandalone.ConvertFilePathForPlatform("example");
```

### GetStreamOnPsaiSoundtrackFile
`public Stream GetStreamOnPsaiSoundtrackFile(string filepath)`

**Purpose:** Reads and returns the `stream on psai soundtrack file` value held by the current object.

```csharp
// Obtain an instance of PlatformLayerStandalone from the subsystem API first
PlatformLayerStandalone platformLayerStandalone = ...;
var result = platformLayerStandalone.GetStreamOnPsaiSoundtrackFile("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlatformLayerStandalone platformLayerStandalone = ...;
platformLayerStandalone.Initialize();
```

## See Also

- [Area Index](../)