---
title: "IBoardGameHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IBoardGameHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IBoardGameHandler

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/IBoardGameHandler.cs`

## Overview

`IBoardGameHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IBoardGameHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IBoardGameHandler implementation = GetBoardGameHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)