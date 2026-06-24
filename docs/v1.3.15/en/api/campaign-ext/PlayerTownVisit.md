<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerTownVisit`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerTownVisit

**Namespace:** TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerTownVisit`
**Area:** campaign-ext

## Overview

`PlayerTownVisit` lives in `TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### game_menu_town_menu_on_init
`public static void game_menu_town_menu_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_town_menu_on_init`.

### game_menu_town_manage_town_on_consequence
`public static void game_menu_town_manage_town_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_town_manage_town_on_consequence`.

### game_menu_town_castle_manage_town_on_consequence
`public static void game_menu_town_castle_manage_town_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_town_castle_manage_town_on_consequence`.

### game_menu_castle_manage_castle_on_consequence
`public static void game_menu_castle_manage_castle_on_consequence(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_castle_manage_castle_on_consequence`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
PlayerTownVisit.game_menu_town_menu_on_init(args);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
