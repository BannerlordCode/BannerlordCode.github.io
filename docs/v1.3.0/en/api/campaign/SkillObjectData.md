<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkillObjectData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SkillObjectData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SkillObjectData : CharacterData.PropertyObjectData`
**Base:** `CharacterData.PropertyObjectData`
**File:** `TaleWorlds.CampaignSystem/CharacterData.cs`

## Overview

`SkillObjectData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SkillObjectData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new SkillObjectData();
```

## See Also

- [Complete Class Catalog](../catalog)