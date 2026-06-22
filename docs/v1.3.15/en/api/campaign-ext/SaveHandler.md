<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveHandler

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SaveHandler`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/SaveHandler.cs`

## Overview

`SaveHandler` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.

## Key Properties

| Name | Signature |
|------|-----------|
| `MainHeroVisualSupplier` | `public IMainHeroVisualSupplier MainHeroVisualSupplier { get; set; }` |
| `IsSaving` | `public bool IsSaving { get; }` |
| `IronmanModSaveName` | `public string IronmanModSaveName { get; }` |
| `AutoSaveInterval` | `public int AutoSaveInterval { get; }` |

## Key Methods

### QuickSaveCurrentGame
```csharp
public void QuickSaveCurrentGame()
```

### SaveAs
```csharp
public void SaveAs(string saveName)
```

### CampaignTick
```csharp
public void CampaignTick()
```

### SignalAutoSave
```csharp
public void SignalAutoSave()
```

### ForceAutoSave
```csharp
public void ForceAutoSave()
```

### GetSaveMetaData
```csharp
public CampaignSaveMetaDataArgs GetSaveMetaData()
```

## Usage Example

```csharp
// Typical usage of SaveHandler (Handler)
Mission.Current.AddMissionBehavior(new SaveHandler());
```

## See Also

- [Complete Class Catalog](../catalog)