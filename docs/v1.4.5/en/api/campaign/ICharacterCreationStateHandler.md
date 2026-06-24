<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ICharacterCreationStateHandler`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ICharacterCreationStateHandler

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterCreationContent/ICharacterCreationStateHandler.cs`

## Overview

`ICharacterCreationStateHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `ICharacterCreationStateHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
ICharacterCreationStateHandler implementation = GetCharacterCreationStateHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)