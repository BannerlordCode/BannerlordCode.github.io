---
title: "IEducationStateHandler"
description: "Auto-generated class reference for IEducationStateHandler."
---
# IEducationStateHandler

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface IEducationStateHandler`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/IEducationStateHandler.cs`

## Overview

`IEducationStateHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IEducationStateHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIEducationStateHandler service = ...;
```

## See Also

- [Area Index](../)