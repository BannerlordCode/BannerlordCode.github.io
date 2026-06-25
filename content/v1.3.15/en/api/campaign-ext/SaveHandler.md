---
title: "SaveHandler"
description: "Auto-generated class reference for SaveHandler."
---
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

**Purpose:** Executes the QuickSaveCurrentGame logic.

```csharp
// Obtain an instance of SaveHandler from the subsystem API first
SaveHandler saveHandler = ...;
saveHandler.QuickSaveCurrentGame();
```

### SaveAs
`public void SaveAs(string saveName)`

**Purpose:** Writes as to persistent storage or a stream.

```csharp
// Obtain an instance of SaveHandler from the subsystem API first
SaveHandler saveHandler = ...;
saveHandler.SaveAs("example");
```

### CampaignTick
`public void CampaignTick()`

**Purpose:** Executes the CampaignTick logic.

```csharp
// Obtain an instance of SaveHandler from the subsystem API first
SaveHandler saveHandler = ...;
saveHandler.CampaignTick();
```

### SignalAutoSave
`public void SignalAutoSave()`

**Purpose:** Executes the SignalAutoSave logic.

```csharp
// Obtain an instance of SaveHandler from the subsystem API first
SaveHandler saveHandler = ...;
saveHandler.SignalAutoSave();
```

### ForceAutoSave
`public void ForceAutoSave()`

**Purpose:** Executes the ForceAutoSave logic.

```csharp
// Obtain an instance of SaveHandler from the subsystem API first
SaveHandler saveHandler = ...;
saveHandler.ForceAutoSave();
```

### GetSaveMetaData
`public CampaignSaveMetaDataArgs GetSaveMetaData()`

**Purpose:** Reads and returns the save meta data value held by the this instance.

```csharp
// Obtain an instance of SaveHandler from the subsystem API first
SaveHandler saveHandler = ...;
var result = saveHandler.GetSaveMetaData();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<SaveHandler>();
```

## See Also

- [Area Index](../)