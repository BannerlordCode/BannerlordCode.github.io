<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TooltipRefresherCollection`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TooltipRefresherCollection

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class TooltipRefresherCollection`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/TooltipRefresherCollection.cs`

## Overview

`TooltipRefresherCollection` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RefreshExplainedNumberTooltip
`public static void RefreshExplainedNumberTooltip(RundownTooltipVM explainedNumberTooltip, object args)`

**Purpose:** Refreshes the display or cache of `explained number tooltip`.

### RefreshTrackTooltip
`public static void RefreshTrackTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**Purpose:** Refreshes the display or cache of `track tooltip`.

### RefreshHeroTooltip
`public static void RefreshHeroTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**Purpose:** Refreshes the display or cache of `hero tooltip`.

### RefreshInventoryTooltip
`public static void RefreshInventoryTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**Purpose:** Refreshes the display or cache of `inventory tooltip`.

### RefreshCraftingPartTooltip
`public static void RefreshCraftingPartTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**Purpose:** Refreshes the display or cache of `crafting part tooltip`.

### RefreshCharacterTooltip
`public static void RefreshCharacterTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**Purpose:** Refreshes the display or cache of `character tooltip`.

### RefreshItemTooltip
`public static void RefreshItemTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**Purpose:** Refreshes the display or cache of `item tooltip`.

### RefreshBuildingTooltip
`public static void RefreshBuildingTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**Purpose:** Refreshes the display or cache of `building tooltip`.

### RefreshAnchorTooltip
`public static void RefreshAnchorTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**Purpose:** Refreshes the display or cache of `anchor tooltip`.

### RefreshWorkshopTooltip
`public static void RefreshWorkshopTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**Purpose:** Refreshes the display or cache of `workshop tooltip`.

### RefreshEncounterTooltip
`public static void RefreshEncounterTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**Purpose:** Refreshes the display or cache of `encounter tooltip`.

### RefreshSiegeEventTooltip
`public static void RefreshSiegeEventTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**Purpose:** Refreshes the display or cache of `siege event tooltip`.

### RefreshMapEventTooltip
`public static void RefreshMapEventTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**Purpose:** Refreshes the display or cache of `map event tooltip`.

### RefreshSettlementTooltip
`public static void RefreshSettlementTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**Purpose:** Refreshes the display or cache of `settlement tooltip`.

### RefreshMobilePartyTooltip
`public static void RefreshMobilePartyTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**Purpose:** Refreshes the display or cache of `mobile party tooltip`.

### RefreshArmyTooltip
`public static void RefreshArmyTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**Purpose:** Refreshes the display or cache of `army tooltip`.

### RefreshClanTooltip
`public static void RefreshClanTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**Purpose:** Refreshes the display or cache of `clan tooltip`.

### RefreshKingdomTooltip
`public static void RefreshKingdomTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**Purpose:** Refreshes the display or cache of `kingdom tooltip`.

### RefreshMapMarkerTooltip
`public static void RefreshMapMarkerTooltip(PropertyBasedTooltipVM propertyBasedTooltipVM, object args)`

**Purpose:** Refreshes the display or cache of `map marker tooltip`.

## Usage Example

```csharp
TooltipRefresherCollection.RefreshExplainedNumberTooltip(explainedNumberTooltip, args);
```

## See Also

- [Complete Class Catalog](../catalog)