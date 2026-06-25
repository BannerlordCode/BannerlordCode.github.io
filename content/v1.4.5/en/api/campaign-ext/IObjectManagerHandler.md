---
title: "IObjectManagerHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IObjectManagerHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IObjectManagerHandler

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/IObjectManagerHandler.cs`

## Overview

`IObjectManagerHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IObjectManagerHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IObjectManagerHandler implementation = GetObjectManagerHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)