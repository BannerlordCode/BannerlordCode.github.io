---
title: "IBoardGameHandler"
description: "Auto-generated class reference for IBoardGameHandler."
---
# IBoardGameHandler

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IBoardGameHandler`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/IBoardGameHandler.cs`

## Overview

`IBoardGameHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IBoardGameHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIBoardGameHandler service = ...;
```

## See Also

- [Area Index](../)