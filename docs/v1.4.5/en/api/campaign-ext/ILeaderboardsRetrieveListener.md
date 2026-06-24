<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ILeaderboardsRetrieveListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ILeaderboardsRetrieveListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class ILeaderboardsRetrieveListener : GalaxyTypeAwareListenerLeaderboardsRetrieve`
**Base:** `GalaxyTypeAwareListenerLeaderboardsRetrieve`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ILeaderboardsRetrieveListener.cs`

## Overview

`ILeaderboardsRetrieveListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateILeaderboardsRetrieveListener_0
`public delegate void SwigDelegateILeaderboardsRetrieveListener_0(IntPtr cPtr)`

**Purpose:** Handles logic related to `swig delegate i leaderboards retrieve listener_0`.

### SwigDelegateILeaderboardsRetrieveListener_1
`public delegate void SwigDelegateILeaderboardsRetrieveListener_1(IntPtr cPtr, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i leaderboards retrieve listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnLeaderboardsRetrieveSuccess
`public abstract void OnLeaderboardsRetrieveSuccess()`

**Purpose:** Called when the `leaderboards retrieve success` event is raised.

### OnLeaderboardsRetrieveFailure
`public abstract void OnLeaderboardsRetrieveFailure(FailureReason failureReason)`

**Purpose:** Called when the `leaderboards retrieve failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomILeaderboardsRetrieveListener();
```

## See Also

- [Complete Class Catalog](../catalog)