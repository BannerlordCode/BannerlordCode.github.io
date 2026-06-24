<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PropertyObjectData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PropertyObjectData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PropertyObjectData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterData.cs`

## Overview

`PropertyObjectData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PropertyObjectData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new PropertyObjectData();
```

## See Also

- [Complete Class Catalog](../catalog)