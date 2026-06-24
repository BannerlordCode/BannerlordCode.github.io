<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlaybackChannel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlaybackChannel

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class PlaybackChannel`
**Base:** none
**File:** `TaleWorlds.PSAI/net/PlaybackChannel.cs`

## Overview

`PlaybackChannel` lives in `psai.net` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.net` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnPlaybackHasStarted
`public void OnPlaybackHasStarted()`

**Purpose:** Called when the `playback has started` event is raised.

## Usage Example

```csharp
var value = new PlaybackChannel();
value.OnPlaybackHasStarted();
```

## See Also

- [Complete Class Catalog](../catalog)