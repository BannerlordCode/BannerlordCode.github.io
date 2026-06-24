<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkillObjectData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkillObjectData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SkillObjectData : CharacterData.PropertyObjectData`
**Base:** `CharacterData.PropertyObjectData`
**Area:** campaign-ext

## Overview

`SkillObjectData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SkillObjectData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ExportCharacter
`public static void ExportCharacter(Hero hero, string path)`

**Purpose:** Handles logic related to `export character`.

### ImportCharacter
`public static void ImportCharacter(Hero hero, string path)`

**Purpose:** Handles logic related to `import character`.

## Usage Example

```csharp
var value = new SkillObjectData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
