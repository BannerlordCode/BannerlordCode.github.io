---
title: "CampaignOptionsManager"
description: "Auto-generated class reference for CampaignOptionsManager."
---
# CampaignOptionsManager

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignOptionsManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionsManager.cs`

## Overview

`CampaignOptionsManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CampaignOptionsManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetOptionWithIdExists
`public static bool GetOptionWithIdExists(string identifier)`

**Purpose:** Reads and returns the `option with id exists` value held by the current object.

```csharp
// Static call; no instance required
CampaignOptionsManager.GetOptionWithIdExists("example");
```

### Initialize
`public static void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Static call; no instance required
CampaignOptionsManager.Initialize();
```

### ClearCachedOptions
`public static void ClearCachedOptions()`

**Purpose:** Removes all `cached options` from the current object.

```csharp
// Static call; no instance required
CampaignOptionsManager.ClearCachedOptions();
```

### GetGameplayCampaignOptions
`public static List<ICampaignOptionData> GetGameplayCampaignOptions()`

**Purpose:** Reads and returns the `gameplay campaign options` value held by the current object.

```csharp
// Static call; no instance required
CampaignOptionsManager.GetGameplayCampaignOptions();
```

### GetCharacterCreationCampaignOptions
`public static List<ICampaignOptionData> GetCharacterCreationCampaignOptions()`

**Purpose:** Reads and returns the `character creation campaign options` value held by the current object.

```csharp
// Static call; no instance required
CampaignOptionsManager.GetCharacterCreationCampaignOptions();
```

## Usage Example

```csharp
var manager = CampaignOptionsManager.Current;
```

## See Also

- [Area Index](../)