<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ICharacterCreationContentHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ICharacterCreationContentHandler

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/ICharacterCreationContentHandler.cs`

## Overview

`ICharacterCreationContentHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `ICharacterCreationContentHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
ICharacterCreationContentHandler implementation = GetCharacterCreationContentHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)