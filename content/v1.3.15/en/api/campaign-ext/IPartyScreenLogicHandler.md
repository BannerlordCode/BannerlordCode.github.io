---
title: "IPartyScreenLogicHandler"
description: "Auto-generated class reference for IPartyScreenLogicHandler."
---
# IPartyScreenLogicHandler

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface IPartyScreenLogicHandler`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameState/IPartyScreenLogicHandler.cs`

## Overview

`IPartyScreenLogicHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IPartyScreenLogicHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIPartyScreenLogicHandler service = ...;
```

## See Also

- [Area Index](../)