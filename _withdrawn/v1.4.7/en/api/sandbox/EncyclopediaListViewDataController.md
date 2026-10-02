---
title: "EncyclopediaListViewDataController"
description: "EncyclopediaListViewDataController — class in SandBox.GauntletUI.Encyclopedia. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# EncyclopediaListViewDataController

**Namespace:** `SandBox.GauntletUI.Encyclopedia`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class EncyclopediaListViewDataController`  
**Source:** `SandBox.GauntletUI/Encyclopedia/EncyclopediaListViewDataController.cs`

## Overview

`EncyclopediaListViewDataController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EncyclopediaListViewDataController`.
- **Instance members** (2): `SaveListData`, `LoadListData`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `LoadListData` | method | Instance entry point. Takes 1 argument: `EncyclopediaListVM list`. |
| `SaveListData` | method | Instance entry point. Takes 2 arguments: `EncyclopediaListVM list`, `string id`. |
| `EncyclopediaListViewDataController` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public EncyclopediaListViewDataController()`.

## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyEncyclopediaListViewDataController : CampaignBehaviorBase
{
    // Register from the game starter, exactly once.
    public override void RegisterEvents()
    {
        // forward the notification this controller reacts to
    }
}
```

## Risks and Boundaries

- Re-entrancy is the main hazard: a callback that comes back into the controller while it is mid-update can loop.
- Controllers hold no durable state — anything that must survive a save belongs on a saveable object.
- Assume callbacks arrive on the main thread; locking around them usually deadlocks the engine.
- The declaration in `SandBox.GauntletUI/Encyclopedia/EncyclopediaListViewDataController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EncyclopediaManager](../../campaign/EncyclopediaManager/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [EncyclopediaFilterGroupVM](../../viewmodel/EncyclopediaFilterGroupVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`.
- [EncyclopediaListSelectorVM](../../viewmodel/EncyclopediaListSelectorVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`.
- [EncyclopediaFilterItem](../../campaign/EncyclopediaFilterItem/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [EncyclopediaListFilterVM](../../viewmodel/EncyclopediaListFilterVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`.

Section: [api/sandbox/](../) — the other types in this bucket.
