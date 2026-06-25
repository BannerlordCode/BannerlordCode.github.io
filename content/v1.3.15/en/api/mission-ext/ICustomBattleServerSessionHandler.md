---
title: "ICustomBattleServerSessionHandler"
description: "Auto-generated class reference for ICustomBattleServerSessionHandler."
---
# ICustomBattleServerSessionHandler

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface ICustomBattleServerSessionHandler`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/ICustomBattleServerSessionHandler.cs`

## Overview

`ICustomBattleServerSessionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `ICustomBattleServerSessionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IICustomBattleServerSessionHandler service = ...;
```

## See Also

- [Area Index](../)