---
title: "ArmyMenuOverlayVM"
description: "The army panel shown inside the game menu. It carries the [MenuOverlay(\"ArmyMenuOverlay\")] attribute so a factory builds it reflectively, re-checks manageability every frame in OnFrameTick, stays current via four CampaignEvents, and exposes a public OpenArmyManagement delegate that other code can take over."
---
# ArmyMenuOverlayVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class ArmyMenuOverlayVM : GameMenuOverlay`  
**Base:** `GameMenuOverlay`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay/ArmyMenuOverlayVM.cs`

## Overview

Open the main menu on the map and switch to the army page, and the column on the right is this class. It extends `GameMenuOverlay` and carries an attribute at the top:

```csharp
[MenuOverlay("ArmyMenuOverlay")]
public class ArmyMenuOverlayVM : GameMenuOverlay
```

🔴 **Searching all 6,222 `.cs` files finds no `new ArmyMenuOverlayVM()` anywhere.** It is created reflectively by the game menu's overlay factory from that `[MenuOverlay]` attribute — just like the map notification items, **it cannot be replaced from code**. The difference is that map notifications use a private `Dictionary<Type,Type>` while overlays use attribute scanning.

It is a **different thing** from `ArmyManagementVM`: this class is a **read-only information panel** (cohesion, strength, food, member list, current issues), while `ArmyManagementVM` is the **editing panel** (tick parties, spend influence). The bridge between them is a public delegate:

```csharp
public Action OpenArmyManagement;
```

used by:

```csharp
public void ExecuteOpenArmyManagement()
{
    Army armyToUse = ArmyToUse;
    if (armyToUse != null && GetIsPlayerArmyLeader(armyToUse))
    {
        OpenArmyManagement?.Invoke();
    }
}
```

**`OpenArmyManagement` is a public field, fired with `?.Invoke()`.** That means external code can attach its own "open ArmyManagementVM" logic. **This field is the seam between the two panels.**

## Mental Model

Read it as **"a read-only panel that self-checks every frame, refreshes incrementally from events, and exposes a navigation hook that external code may hijack"**:

- **Who news it up.** **Nobody writes `new`.** The game menu overlay factory builds it reflectively from `[MenuOverlay("ArmyMenuOverlay")]`.
- **Who holds the reference.** The game menu's overlay collection; the factory destroys it via `OnFinalize`.
- **What it binds to.** Twelve members. `Cohesion`, `Food`, `ManCountText` are the three aggregates; `IsCohesionWarningEnabled` (`army.Cohesion <= 30f`, from the `CohesionWarningMin = 30f` constant), `IsPlayerArmyLeader`, `CanManageArmy` are three state flags; `PartyList` / `IssueList` are two lists; `CohesionHint` / `ManCountHint` / `FoodHint` / `ManageArmyHint` are four hints; `TutorialNotification` is the tutorial notice.
- **When it is disposed.** **It overrides `OnFinalize` and unbinds completely** (`:322-329`):

  ```csharp
  CampaignEvents.ArmyOverlaySetDirtyEvent.ClearListeners(this);
  CampaignEvents.PartyAttachedAnotherParty.ClearListeners(this);
  CampaignEvents.OnTroopRecruitedEvent.ClearListeners(this);
  Game.Current.EventManager.UnregisterEvent<TutorialNotificationElementChangeEvent>(OnTutorialNotificationElementIDChange);
  ```

  **Three events plus one EventManager subscription, each cleared explicitly.** This is among the most correct unbinding patterns in this directory — the exact opposite of `AlleyUnderAttackMapNotificationItemVM`, which registered a listener and never overrode `OnFinalize`. **If you subclass this and add a listener, you must add the matching detach here.**
- 🔴 **`ArmyToUse` has a target-party fallback, so it will look at someone else's army.** (`:55-76`)

  ```csharp
  object obj = MobileParty.MainParty?.Army;
  if (obj == null)
  {
      MobileParty mainParty = MobileParty.MainParty;
      if (mainParty == null) { return null; }
      MobileParty targetParty = mainParty.TargetParty;
      if (targetParty == null) { return null; }
      obj = targetParty.Army;
  }
  return (Army)obj;
  ```

  **When the main party has no army, it looks at the army of the party the main party is currently engaging.** The panel can therefore display **an opponent's** army while the player is in no army at all. `CanManageArmy` is a separate per-frame judgement from `CampaignUIHelper.GetCanManageCurrentArmyWithReason`.
- 🔴 **`Refresh()` does nothing at all when `ArmyToUse == null`** (`:382-391`), not even touching `IsInitializationOver`. The two `Debug.FailedAssert("Army is null...")` calls inside `UpdateLists` / `UpdateProperties` are therefore **unreachable on the normal path** — they are defensive duplicated checks.
- **Events refresh at three different granularities.** `ArmyOverlaySetDirtyEvent` → `Refresh()` (full); `PartyAttachedAnotherParty` → only sets `_isVisualsDirty = true`, which `OnFrameTick` acts on next frame via `RefreshVisualsOfItems()`; `OnTroopRecruitedEvent` → refreshes just that one party row. **The graduated design is deliberate.**
- **`OnFrameTick(float dt)` does three things every frame** (`:366-380`): refresh `CanManageArmy` and its reason, call `PartyList[i].RefreshQuestStatus()` per row, and if `_isVisualsDirty` refresh visuals and clear the flag. **This is the class's entire per-frame cost.**
- **`ExecuteOnSetAsActiveContextMenuItem` builds the context menu inside four levels of nested ifs**: dismiss party (only when the player leads the army, there is no MapEvent, and it is not the leader's own party), donate troops, converse with the leader, encyclopedia. It ends with a `Debug.FailedAssert` when the party has no leader.
- 🔴 **Dead code: `ExecuteCohesionLink()` (`:468-478`) has no call site.** In this file `ExecuteCohesionLink` occurs twice: the definition at `:468`, and the name **inside the `Debug.FailedAssert` string literal** at `:476`. **Nothing calls it** — either the prefab binds it under another name, or it is a leftover. `_cohesionConceptObj` (`:311`, looked up at construction via `Concept.All.SingleOrDefault(c => c.StringId == "str_game_objects_army_cohesion")`) is therefore used only by this dead method.

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| `[MenuOverlay]` attribute | `[MenuOverlay("ArmyMenuOverlay")]` (`:16`) | **The only creation path.** No `new ArmyMenuOverlayVM()` exists anywhere in the tree; the game menu overlay factory builds it reflectively from this attribute. **The implementation therefore cannot be swapped from code.** |
| `OpenArmyManagement` | `public Action OpenArmyManagement` (`:21`) | **A public field, not a property.** The seam between this panel and `ArmyManagementVM` — external code assigns it to take over the navigation. Fired by `ExecuteOpenArmyManagement` via `?.Invoke()`. |
| `ExecuteOpenArmyManagement` | `public void ExecuteOpenArmyManagement()` (`:459-466`) | Tests `ArmyToUse != null` **and** `GetIsPlayerArmyLeader(armyToUse)` before `OpenArmyManagement?.Invoke()`. **Not the army leader means the button does nothing.** |
| `ArmyToUse` | `private Army ArmyToUse` (`:55-76`) | Army resolution **with a target-party fallback**: when the main party has no army it reads `mainParty.TargetParty?.Army`. So the panel may be showing **an enemy army**. Two nested null checks narrow as it goes. |
| `Cohesion` / `Food` / `ManCountText` | `[DataSourceProperty]` (`:112/197/180`) | Three aggregates. `Food` sums the leader party's food **plus every AttachedParty's** (`:402-407`); `ManCountText` goes through `CampaignUIHelper.GetPartyNameplateText(..., includeAttachedParties: true)`. |
| `IsCohesionWarningEnabled` | `[DataSourceProperty] public bool` (`:129-144`) | `army.Cohesion <= 30f`, with the threshold from `private const float CohesionWarningMin = 30f;` (`:19`). **A hard-coded constant — not configurable.** |
| `IsPlayerArmyLeader` | `[DataSourceProperty] public bool` (`:163-178`) | From `GetIsPlayerArmyLeader(army)` (`:528-535`): the leader is the main party, **or** the main party is engaging it as a target. **"Player is army leader" also covers "player is besieging this army".** |
| `CanManageArmy` | `[DataSourceProperty] public bool` (`:146-161`) | Recomputed **every frame** by `CampaignUIHelper.GetCanManageCurrentArmyWithReason(out reason)`, with the reason written into `ManageArmyHint.HintText`. |
| `PartyList` | `[DataSourceProperty] public MBBindingList<GameMenuPartyItemVM>` (`:214-229`) | The army's member list. `UpdateLists` (`:417-457`) performs a **two-way diff**: drop rows whose party left, then insert newcomers at index 0 (the leader) or append them. |
| `IssueList` | `[DataSourceProperty] public MBBindingList<StringItemWithHintVM>` (`:282-293`) | **The only bindable property whose getter has a side effect**: the getter `new`s an `MBBindingList<StringItemWithHintVM>` on the spot when the backing field is null. **Reading it creates the object.** |
| `CohesionHint` / `ManCountHint` / `FoodHint` | `[DataSourceProperty] public BasicTooltipViewModel` (`:231/248/265`) | Three tooltips, **re-`new`ed on every `UpdateProperties`** (`:410-412`), each closing over the current `army`. **Steady allocation churn.** |
| `OnFrameTick` | `public override void OnFrameTick(float dt)` (`:366-380`) | Per frame: refresh `CanManageArmy` + reason; `PartyList[i].RefreshQuestStatus()` per row; if `_isVisualsDirty`, run `RefreshVisualsOfItems()` and clear the flag. **The class's only per-frame work.** |
| `Refresh` | `public sealed override void Refresh()` (`:382-391`) | When `ArmyToUse == null` the **whole method returns immediately**; otherwise `IsInitializationOver` brackets `UpdateLists()` + `UpdateProperties()`. |
| `ExecuteOnSetAsActiveContextMenuItem` | `protected override void ExecuteOnSetAsActiveContextMenuItem(GameMenuPartyItemVM troop)` (`:331-364`) | Builds context menu entries (dismiss / donate / converse / encyclopedia) under four levels of nested conditions, ending in `Debug.FailedAssert` when the party has no leader. |
| `OnFinalize` | `public override void OnFinalize()` (`:322-329`) | **Complete unbinding**: `ClearListeners(this)` on three `CampaignEvents` plus `UnregisterEvent<TutorialNotificationElementChangeEvent>`. **One of this directory's canonical disposal patterns.** |
| `ExecuteCohesionLink` 🔴 | `private void ExecuteCohesionLink()` (`:468-478`) | **Dead code.** Occurs twice in this file: `:468` (definition) and `:476` (the name inside the assert string). **No call site exists.** The `_cohesionConceptObj` it uses therefore serves nothing else. |
| `CohesionWarningMin` | `private const float CohesionWarningMin = 30f` (`:19`) | The cohesion warning threshold. **A hard-coded private constant** a mod cannot adjust. |

## Real Example

Resolving which army to display — **mind the target-party fallback**:

```csharp
using TaleWorlds.CampaignSystem.Party;

public Army ResolveArmyToShow()
{
    // Same path as ArmyToUse (ArmyMenuOverlayVM.cs:55-76)
    Army own = MobileParty.MainParty?.Army;
    if (own != null)
    {
        return own;
    }

    if (MobileParty.MainParty == null)
    {
        return null;
    }

    MobileParty target = MobileParty.MainParty.TargetParty;
    if (target == null)
    {
        return null;
    }

    // With no army of your own, the panel shows the army you are engaging.
    return target.Army;
}
```

Taking over the "open army management" navigation — **the seam between the two panels**:

```csharp
using TaleWorlds.CampaignSystem.Party;

public class MyArmyOverlayHost
{
    public void Attach(ArmyMenuOverlayVM overlay, System.Action openManagement)
    {
        // A public field: assign it directly to take over the navigation.
        overlay.OpenArmyManagement = () =>
        {
            if (MobileParty.MainParty.Army != null)
            {
                openManagement();
            }
        };
    }
}
```

Computing your own configurable warning threshold — **vanilla's 30f is a private constant**:

```csharp
public bool ShouldWarnAboutCohesion(Army army, float warningThreshold)
{
    if (army == null)
    {
        return false;
    }

    // Vanilla uses private const float CohesionWarningMin = 30f, which is
    // not configurable; here the threshold becomes a parameter.
    return army.Cohesion <= warningThreshold;
}
```

Reimplementing the party-list diff as your own helper:

```csharp
public List<MobileParty> DiffParties(Army army, List<MobileParty> currentRows)
{
    List<MobileParty> result = new List<MobileParty>();

    for (int i = 0; i < army.Parties.Count; i++)
    {
        MobileParty party = army.Parties[i];
        bool present = false;

        for (int j = 0; j < currentRows.Count; j++)
        {
            if (currentRows[j] == party)
            {
                present = true;
                break;
            }
        }

        if (!present)
        {
            result.Add(party);
        }
    }

    return result;
}
```

Reproducing the "leader goes to the front" insertion rule:

```csharp
using TaleWorlds.CampaignSystem.Party;

public bool ShouldInsertAtFront(MobileParty party, Army army)
{
    // The rule from UpdateLists (:443-450): the leader's party goes to index 0,
    // everything else is appended.
    return party == army.LeaderParty;
}
```

## Risks and crash boundaries

- 🔴 **No code-level creation entry point.** There is no `new ArmyMenuOverlayVM()` in the tree; it is constructed reflectively from `[MenuOverlay("ArmyMenuOverlay")]`. **Replacing the implementation means changing the attribute-scanning mechanism**, not one call site.
- 🔴 **`ArmyToUse` will display someone else's army.** With no army of its own it falls back to `MainParty.TargetParty?.Army`. **While the player is in no army, this panel may be showing the enemy's army data** — always check `IsPlayerArmyLeader` before trusting `Cohesion` or `PartyList`.
- 🔴 **`ExecuteCohesionLink` is dead code.** In this file `ExecuteCohesionLink` occurs only at `:468` (definition) and `:476` (inside the assert string). **Nothing calls it**, and `_cohesionConceptObj` exists only to serve it. **Do not copy it as an example of "jump to the encyclopedia page" — that path is severed.**
- 🔴 **`IssueList`'s getter has a side effect.** When `_issueList == null` the getter **creates an `MBBindingList<StringItemWithHintVM>` on the spot and returns it**. **Reading it is equivalent to assigning it** — its semantics differ from every other bindable property here.
- **`Refresh()` no-ops without an army.** It does not even touch `IsInitializationOver`, so the initialisation flag can sit unfinished. The two `Debug.FailedAssert("Army is null...")` calls inside `UpdateLists` / `UpdateProperties` are **unreachable on the normal path** and exist as defensive duplication.
- **Three `BasicTooltipViewModel`s are re-`new`ed on every `UpdateProperties`** (`:410-412`), each closing over the current `army`. Event-dense refreshes produce measurable allocation pressure.
- **Per-frame cost is fixed.** `OnFrameTick` calls `RefreshQuestStatus()` per row, which is O(n) every frame.
- **Unbinding is complete** — three `CampaignEvents` plus one `EventManager` subscription, each cleared. **This is this directory's canonical pattern**; any listener you add while subclassing must get a matching detach in `OnFinalize`.
- **`OpenArmyManagement` is a public field.** It can be overwritten or nulled by anyone at any time. **It may have been hijacked without your knowledge.**
- **`_contextMenuItem` is a protected field of the base class**, used heavily from `:335` onward **with no null check**. Triggering before it is assigned is an NRE.
- **`ExecuteOnSetAsActiveContextMenuItem` ends in `Debug.FailedAssert`** (`:358`) when the party has no leader. **Development builds will halt on it**; release behaviour depends on the assert implementation.
- **Serialization**: none. No `SyncData`, no `IDataStore` contact. Purely UI state.
- **`_cohesionConceptObj` may legitimately be null.** It is looked up in the constructor with `Concept.All.SingleOrDefault(...)` (`:311`) — and **`SingleOrDefault` throws on duplicate matches**, it does not merely return a default.
- **Native boundary**: this class is pure managed, but `MobileParty.MainParty.TargetParty`, `army.Parties`, and the encyclopedia navigation all reach campaign and presentation layers downstream.
- **Cross-version**: the attribute string `"ArmyMenuOverlay"`, the four `MenuOverlayContextList` values (`ArmyDismiss` / `DonateTroops` / `ConverseWithLeader` / `Encyclopedia`), the three `CampaignUIHelper.GetArmy*Tooltip` methods, and `CohesionWarningMin = 30f` are all v1.4.5 shapes. **Changing the attribute string silently stops the overlay from being created at all.**

## Dependencies

- ↑ Base class: [GameMenuOverlay](../GameMenuOverlay) — supplies `CurrentOverlayType`, `IsInitializationOver`, `_contextMenuItem`, `ContextList`, `OnFrameTick`, `Refresh`
- ↔ Sibling: [ArmyManagementVM](../ArmyManagementVM) — the **editing panel, connected through the `OpenArmyManagement` delegate**; both read the same campaign objects
- ↔ Sibling: [ArmyManagementItemVM](../ArmyManagementItemVM) — the editing panel's party rows; this panel's `PartyList` uses a different type, `GameMenuPartyItemVM`
- ↔ Sibling: [GameMenu](../../campaign-ext/GameMenu) — the parent menu holding the overlay collection (zh link; en: `../../campaign/GameMenu`)
- ↔ Sibling: [GameMenuPartyItemVM](../GameMenuPartyItemVM) — the list row type; `RefreshQuestStatus` / `RefreshVisual` / `RefreshProperties` all live on it
- → Army and party: [Army](../../campaign-ext/Army), [MobileParty](../../campaign/MobileParty), [Hero](../../campaign/Hero), [Settlement](../../campaign/Settlement)
- → Hints: [BasicTooltipViewModel](../../core-extra/BasicTooltipViewModel), [HintViewModel](../HintViewModel), [ElementNotificationVM](../../core-extra/ElementNotificationVM)
- → Event source: [CampaignEvents](../../campaign-ext/CampaignEvents) — origin of the three listeners
- → Encyclopedia: [Concept](../../campaign-ext/Concept), [EncyclopediaManager](../../campaign-ext/EncyclopediaManager) (zh links; under `../../campaign/` on the en side)
