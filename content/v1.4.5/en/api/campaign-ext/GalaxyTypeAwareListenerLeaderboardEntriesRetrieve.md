---
title: "GalaxyTypeAwareListenerLeaderboardEntriesRetrieve"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GalaxyTypeAwareListenerLeaderboardEntriesRetrieve`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GalaxyTypeAwareListenerLeaderboardEntriesRetrieve

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class GalaxyTypeAwareListenerLeaderboardEntriesRetrieve : IGalaxyListener`
**Base:** `IGalaxyListener`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/GalaxyTypeAwareListenerLeaderboardEntriesRetrieve.cs`

## Overview

`GalaxyTypeAwareListenerLeaderboardEntriesRetrieve` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### GetListenerType
`public static ListenerType GetListenerType()`

**Purpose:** Gets the current value of `listener type`.

## Usage Example

```csharp
var implementation = new CustomGalaxyTypeAwareListenerLeaderboardEntriesRetrieve();
```

## See Also

- [Complete Class Catalog](../catalog)