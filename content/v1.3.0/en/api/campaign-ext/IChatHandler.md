---
title: "IChatHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IChatHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IChatHandler

**Namespace:** (global)
**Module:** (global)
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IChatHandler.cs`

## Overview

`IChatHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IChatHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IChatHandler implementation = GetChatHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)