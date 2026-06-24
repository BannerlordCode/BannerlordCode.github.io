<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IChatRoomMessageSendListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IChatRoomMessageSendListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IChatRoomMessageSendListener : GalaxyTypeAwareListenerChatRoomMessageSend`
**Base:** `GalaxyTypeAwareListenerChatRoomMessageSend`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IChatRoomMessageSendListener.cs`

## Overview

`IChatRoomMessageSendListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIChatRoomMessageSendListener_0
`public delegate void SwigDelegateIChatRoomMessageSendListener_0(IntPtr cPtr, ulong chatRoomID, uint sentMessageIndex, ulong messageID, uint sendTime)`

**Purpose:** Handles logic related to `swig delegate i chat room message send listener_0`.

### SwigDelegateIChatRoomMessageSendListener_1
`public delegate void SwigDelegateIChatRoomMessageSendListener_1(IntPtr cPtr, ulong chatRoomID, uint sentMessageIndex, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i chat room message send listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnChatRoomMessageSendSuccess
`public abstract void OnChatRoomMessageSendSuccess(ulong chatRoomID, uint sentMessageIndex, ulong messageID, uint sendTime)`

**Purpose:** Called when the `chat room message send success` event is raised.

### OnChatRoomMessageSendFailure
`public abstract void OnChatRoomMessageSendFailure(ulong chatRoomID, uint sentMessageIndex, FailureReason failureReason)`

**Purpose:** Called when the `chat room message send failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomIChatRoomMessageSendListener();
```

## See Also

- [Complete Class Catalog](../catalog)