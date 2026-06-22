<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignOptionsManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignOptionsManager

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignOptionsManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionsManager.cs`

## Overview

`CampaignOptionsManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### GetOptionWithIdExists
```csharp
public static bool GetOptionWithIdExists(string identifier)
```

### Initialize
```csharp
public static void Initialize()
```

### ClearCachedOptions
```csharp
public static void ClearCachedOptions()
```

### GetGameplayCampaignOptions
```csharp
public static List<ICampaignOptionData> GetGameplayCampaignOptions()
```

### GetCharacterCreationCampaignOptions
```csharp
public static List<ICampaignOptionData> GetCharacterCreationCampaignOptions()
```

## Usage Example

```csharp
// Typical usage of CampaignOptionsManager (Manager)
CampaignOptionsManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)