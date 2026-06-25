---
title: "ILeaderboardEntriesRetrieveListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ILeaderboardEntriesRetrieveListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ILeaderboardEntriesRetrieveListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class ILeaderboardEntriesRetrieveListener : GalaxyTypeAwareListenerLeaderboardEntriesRetrieve`
**Base:** `GalaxyTypeAwareListenerLeaderboardEntriesRetrieve`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ILeaderboardEntriesRetrieveListener.cs`

## Overview

`ILeaderboardEntriesRetrieveListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateILeaderboardEntriesRetrieveListener_0
`public delegate void SwigDelegateILeaderboardEntriesRetrieveListener_0(IntPtr cPtr, string name, uint entryCount)`

**Purpose:** Handles logic related to `swig delegate i leaderboard entries retrieve listener_0`.

### SwigDelegateILeaderboardEntriesRetrieveListener_1
`public delegate void SwigDelegateILeaderboardEntriesRetrieveListener_1(IntPtr cPtr, string name, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i leaderboard entries retrieve listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnLeaderboardEntriesRetrieveSuccess
`public abstract void OnLeaderboardEntriesRetrieveSuccess(string name, uint entryCount)`

**Purpose:** Called when the `leaderboard entries retrieve success` event is raised.

### OnLeaderboardEntriesRetrieveFailure
`public abstract void OnLeaderboardEntriesRetrieveFailure(string name, FailureReason failureReason)`

**Purpose:** Called when the `leaderboard entries retrieve failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomILeaderboardEntriesRetrieveListener();
```

## See Also

- [Complete Class Catalog](../catalog)