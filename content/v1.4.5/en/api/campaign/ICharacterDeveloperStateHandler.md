---
title: "ICharacterDeveloperStateHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ICharacterDeveloperStateHandler`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ICharacterDeveloperStateHandler

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/ICharacterDeveloperStateHandler.cs`

## Overview

`ICharacterDeveloperStateHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `ICharacterDeveloperStateHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
ICharacterDeveloperStateHandler implementation = GetCharacterDeveloperStateHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)