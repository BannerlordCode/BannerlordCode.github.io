<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ILeaderboardRetrieveListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ILeaderboardRetrieveListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class ILeaderboardRetrieveListener : GalaxyTypeAwareListenerLeaderboardRetrieve`
**Base:** `GalaxyTypeAwareListenerLeaderboardRetrieve`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ILeaderboardRetrieveListener.cs`

## Overview

`ILeaderboardRetrieveListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateILeaderboardRetrieveListener_0
`public delegate void SwigDelegateILeaderboardRetrieveListener_0(IntPtr cPtr, string name)`

**Purpose:** Handles logic related to `swig delegate i leaderboard retrieve listener_0`.

### SwigDelegateILeaderboardRetrieveListener_1
`public delegate void SwigDelegateILeaderboardRetrieveListener_1(IntPtr cPtr, string name, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i leaderboard retrieve listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnLeaderboardRetrieveSuccess
`public abstract void OnLeaderboardRetrieveSuccess(string name)`

**Purpose:** Called when the `leaderboard retrieve success` event is raised.

### OnLeaderboardRetrieveFailure
`public abstract void OnLeaderboardRetrieveFailure(string name, FailureReason failureReason)`

**Purpose:** Called when the `leaderboard retrieve failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomILeaderboardRetrieveListener();
```

## See Also

- [Complete Class Catalog](../catalog)