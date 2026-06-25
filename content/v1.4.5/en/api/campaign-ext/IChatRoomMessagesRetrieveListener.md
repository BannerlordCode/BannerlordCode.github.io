---
title: "IChatRoomMessagesRetrieveListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IChatRoomMessagesRetrieveListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IChatRoomMessagesRetrieveListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IChatRoomMessagesRetrieveListener : GalaxyTypeAwareListenerChatRoomMessagesRetrieve`
**Base:** `GalaxyTypeAwareListenerChatRoomMessagesRetrieve`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IChatRoomMessagesRetrieveListener.cs`

## Overview

`IChatRoomMessagesRetrieveListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIChatRoomMessagesRetrieveListener_0
`public delegate void SwigDelegateIChatRoomMessagesRetrieveListener_0(IntPtr cPtr, ulong chatRoomID, uint messageCount, uint longestMessageLenght)`

**Purpose:** Handles logic related to `swig delegate i chat room messages retrieve listener_0`.

### SwigDelegateIChatRoomMessagesRetrieveListener_1
`public delegate void SwigDelegateIChatRoomMessagesRetrieveListener_1(IntPtr cPtr, ulong chatRoomID, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i chat room messages retrieve listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnChatRoomMessagesRetrieveSuccess
`public abstract void OnChatRoomMessagesRetrieveSuccess(ulong chatRoomID, uint messageCount, uint longestMessageLenght)`

**Purpose:** Called when the `chat room messages retrieve success` event is raised.

### OnChatRoomMessagesRetrieveFailure
`public abstract void OnChatRoomMessagesRetrieveFailure(ulong chatRoomID, FailureReason failureReason)`

**Purpose:** Called when the `chat room messages retrieve failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomIChatRoomMessagesRetrieveListener();
```

## See Also

- [Complete Class Catalog](../catalog)