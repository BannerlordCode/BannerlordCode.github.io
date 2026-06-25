---
title: "ICharacterCreationStateHandler"
description: "Auto-generated class reference for ICharacterCreationStateHandler."
---
# ICharacterCreationStateHandler

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface ICharacterCreationStateHandler`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterCreationContent/ICharacterCreationStateHandler.cs`

## Overview

`ICharacterCreationStateHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `ICharacterCreationStateHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IICharacterCreationStateHandler service = ...;
```

## See Also

- [Area Index](../)