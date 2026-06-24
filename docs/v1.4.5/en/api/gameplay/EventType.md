<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EventType`
- [← Area / Back to gameplay](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EventType

**Namespace:** SandBox.View.Conversation
**Module:** SandBox.View
**Type:** `public enum EventType`
**Base:** none
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Conversation/ConversationViewEventHandler.cs`

## Overview

`EventType` lives in `SandBox.View.Conversation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Conversation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
EventType example = EventType.Value;
```

## See Also

- [Complete Class Catalog](../catalog)