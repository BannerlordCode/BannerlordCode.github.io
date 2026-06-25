---
title: "IGameOverStateHandler"
description: "Auto-generated class reference for IGameOverStateHandler."
---
# IGameOverStateHandler

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface IGameOverStateHandler`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameState/IGameOverStateHandler.cs`

## Overview

`IGameOverStateHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IGameOverStateHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIGameOverStateHandler service = ...;
```

## See Also

- [Area Index](../)