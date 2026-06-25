---
title: "GameMenuItemCreationData"
description: "Auto-generated class reference for GameMenuItemCreationData."
---
# GameMenuItemCreationData

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**Module:** TaleWorlds.CampaignSystem
**Type:** `struct GameMenuItemCreationData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemVM.cs`

## Overview

`GameMenuItemCreationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `GameMenuItemCreationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `OptionID` | `public string OptionID { get; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
GameMenuItemCreationData entry = ...;
```

## See Also

- [Area Index](../)