---
title: "ICustomBattleServerSessionHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ICustomBattleServerSessionHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ICustomBattleServerSessionHandler

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ICustomBattleServerSessionHandler.cs`

## Overview

`ICustomBattleServerSessionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `ICustomBattleServerSessionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
ICustomBattleServerSessionHandler implementation = GetCustomBattleServerSessionHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)