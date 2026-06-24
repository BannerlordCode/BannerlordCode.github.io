<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ILeaderboardScoreUpdateListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ILeaderboardScoreUpdateListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class ILeaderboardScoreUpdateListener : GalaxyTypeAwareListenerLeaderboardScoreUpdate`
**Base:** `GalaxyTypeAwareListenerLeaderboardScoreUpdate`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ILeaderboardScoreUpdateListener.cs`

## Overview

`ILeaderboardScoreUpdateListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateILeaderboardScoreUpdateListener_0
`public delegate void SwigDelegateILeaderboardScoreUpdateListener_0(IntPtr cPtr, string name, int score, uint oldRank, uint newRank)`

**Purpose:** Handles logic related to `swig delegate i leaderboard score update listener_0`.

### SwigDelegateILeaderboardScoreUpdateListener_1
`public delegate void SwigDelegateILeaderboardScoreUpdateListener_1(IntPtr cPtr, string name, int score, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i leaderboard score update listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnLeaderboardScoreUpdateSuccess
`public abstract void OnLeaderboardScoreUpdateSuccess(string name, int score, uint oldRank, uint newRank)`

**Purpose:** Called when the `leaderboard score update success` event is raised.

### OnLeaderboardScoreUpdateFailure
`public abstract void OnLeaderboardScoreUpdateFailure(string name, int score, FailureReason failureReason)`

**Purpose:** Called when the `leaderboard score update failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomILeaderboardScoreUpdateListener();
```

## See Also

- [Complete Class Catalog](../catalog)