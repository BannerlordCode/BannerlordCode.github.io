---
title: "IMenuContextHandler"
description: "Auto-generated class reference for IMenuContextHandler."
---
# IMenuContextHandler

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface IMenuContextHandler`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameState/IMenuContextHandler.cs`

## Overview

`IMenuContextHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IMenuContextHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIMenuContextHandler service = ...;
```

## See Also

- [Area Index](../)