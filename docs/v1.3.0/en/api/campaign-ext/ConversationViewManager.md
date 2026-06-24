<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationViewManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationViewManager

**Namespace:** SandBox.View.Conversation
**Module:** SandBox.View
**Type:** `public class ConversationViewManager`
**Base:** none
**File:** `SandBox.View/Conversation/ConversationViewManager.cs`

## Overview

`ConversationViewManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ConversationViewManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static ConversationViewManager Instance { get; }` |

## Usage Example

```csharp
var manager = ConversationViewManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)