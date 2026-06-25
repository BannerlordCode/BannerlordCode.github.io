---
title: "IChatRoomWithUserRetrieveListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IChatRoomWithUserRetrieveListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IChatRoomWithUserRetrieveListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IChatRoomWithUserRetrieveListener : GalaxyTypeAwareListenerChatRoomWithUserRetrieve`
**Base:** `GalaxyTypeAwareListenerChatRoomWithUserRetrieve`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IChatRoomWithUserRetrieveListener.cs`

## Overview

`IChatRoomWithUserRetrieveListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIChatRoomWithUserRetrieveListener_0
`public delegate void SwigDelegateIChatRoomWithUserRetrieveListener_0(IntPtr cPtr, IntPtr userID, ulong chatRoomID)`

**Purpose:** Handles logic related to `swig delegate i chat room with user retrieve listener_0`.

### SwigDelegateIChatRoomWithUserRetrieveListener_1
`public delegate void SwigDelegateIChatRoomWithUserRetrieveListener_1(IntPtr cPtr, IntPtr userID, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i chat room with user retrieve listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnChatRoomWithUserRetrieveSuccess
`public abstract void OnChatRoomWithUserRetrieveSuccess(GalaxyID userID, ulong chatRoomID)`

**Purpose:** Called when the `chat room with user retrieve success` event is raised.

### OnChatRoomWithUserRetrieveFailure
`public abstract void OnChatRoomWithUserRetrieveFailure(GalaxyID userID, FailureReason failureReason)`

**Purpose:** Called when the `chat room with user retrieve failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomIChatRoomWithUserRetrieveListener();
```

## See Also

- [Complete Class Catalog](../catalog)