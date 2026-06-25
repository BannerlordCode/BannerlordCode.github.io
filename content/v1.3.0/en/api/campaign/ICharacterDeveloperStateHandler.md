---
title: "ICharacterDeveloperStateHandler"
description: "Auto-generated class reference for ICharacterDeveloperStateHandler."
---
# ICharacterDeveloperStateHandler

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface ICharacterDeveloperStateHandler`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameState/ICharacterDeveloperStateHandler.cs`

## Overview

`ICharacterDeveloperStateHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `ICharacterDeveloperStateHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IICharacterDeveloperStateHandler service = ...;
```

## See Also

- [Area Index](../)