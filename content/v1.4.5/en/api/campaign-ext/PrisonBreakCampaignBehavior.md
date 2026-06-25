---
title: "PrisonBreakCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PrisonBreakCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PrisonBreakCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class PrisonBreakCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.CampaignBehaviors/PrisonBreakCampaignBehavior.cs`

## Overview

`PrisonBreakCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### CreatePrisonBreakGuard
`public LocationCharacter CreatePrisonBreakGuard()`

**Purpose:** Creates a new `prison break guard` instance or object.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### game_menu_prison_menu_on_init
`public static void game_menu_prison_menu_on_init(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `game_menu_prison_menu_on_init`.

## Usage Example

```csharp
var value = new PrisonBreakCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)