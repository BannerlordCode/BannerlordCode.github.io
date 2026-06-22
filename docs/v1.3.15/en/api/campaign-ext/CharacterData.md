<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterData.cs`

## Overview

`CharacterData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Methods

### ExportCharacter
```csharp
public static void ExportCharacter(Hero hero, string path)
```

### ImportCharacter
```csharp
public static void ImportCharacter(Hero hero, string path)
```

## Usage Example

```csharp
// Typical usage of CharacterData (Data)
new CharacterData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)