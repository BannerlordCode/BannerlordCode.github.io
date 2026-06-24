<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveHandler

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SaveHandler`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/SaveHandler.cs`

## Overview

`SaveHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `SaveHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MainHeroVisualSupplier` | `public IMainHeroVisualSupplier MainHeroVisualSupplier { get; set; }` |
| `IsSaving` | `public bool IsSaving { get; }` |
| `IronmanModSaveName` | `public string IronmanModSaveName { get; }` |
| `AutoSaveInterval` | `public int AutoSaveInterval { get; }` |

## Key Methods

### QuickSaveCurrentGame
`public void QuickSaveCurrentGame()`

**Purpose:** Handles logic related to `quick save current game`.

### SaveAs
`public void SaveAs(string saveName)`

**Purpose:** Saves `as` data.

### CampaignTick
`public void CampaignTick()`

**Purpose:** Handles logic related to `campaign tick`.

### SignalAutoSave
`public void SignalAutoSave()`

**Purpose:** Handles logic related to `signal auto save`.

### ForceAutoSave
`public void ForceAutoSave()`

**Purpose:** Handles logic related to `force auto save`.

### GetSaveMetaData
`public CampaignSaveMetaDataArgs GetSaveMetaData()`

**Purpose:** Gets the current value of `save meta data`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new SaveHandler());
```

## See Also

- [Complete Class Catalog](../catalog)