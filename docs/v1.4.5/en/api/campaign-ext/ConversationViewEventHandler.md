<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationViewEventHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationViewEventHandler

**Namespace:** SandBox.View.Conversation
**Module:** SandBox.View
**Type:** `public class ConversationViewEventHandler : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Conversation/ConversationViewEventHandler.cs`

## Overview

`ConversationViewEventHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `ConversationViewEventHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `Type` | `public EventType Type { get; }` |

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new ConversationViewEventHandler());
```

## See Also

- [Complete Class Catalog](../catalog)