---
title: "IInventoryStateHandler"
description: "Auto-generated class reference for IInventoryStateHandler."
---
# IInventoryStateHandler

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface IInventoryStateHandler`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameState/IInventoryStateHandler.cs`

## Overview

`IInventoryStateHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IInventoryStateHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIInventoryStateHandler service = ...;
```

## See Also

- [Area Index](../)