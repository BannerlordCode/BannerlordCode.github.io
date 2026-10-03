---
title: "AgentInteractionInterfaceVM"
description: "The view model behind the interaction prompt that floats on screen when you look at something during a mission: two primary lines, a secondary list, two forced lines, a health bar and colours. Held by MissionAgentStatusVM and driven through internal methods, so a mod can only reach the public half."
---
# AgentInteractionInterfaceVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction  
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection  
**Type:** `public class AgentInteractionInterfaceVM : ViewModel`  
**Base:** `ViewModel`  
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction/AgentInteractionInterfaceVM.cs`

## Overview

When you point the camera at something interactable during a mission — an enemy, an ally, a horse, an item on the ground, a siege engine — a prompt floats on screen. This class is that prompt. It does not decide what to show; it is a **display board filled from upstream**.

The constructor only initialises (`AgentInteractionInterfaceVM.cs:256-271`):

```csharp
public AgentInteractionInterfaceVM(Mission mission)
{
    _mission = mission;
    IsActive = false;
    PrimaryInteractionMessages = new MBBindingList<MissionPrimaryInteractionItemVM>
    {
        new MissionPrimaryInteractionItemVM(),
        new MissionPrimaryInteractionItemVM()
    };
    SecondaryInteractionMessages = new MBBindingList<MissionInteractionItemBaseVM>();
    ForcedInteractionMessages = new MBBindingList<MissionPrimaryInteractionItemVM>
    {
        new MissionPrimaryInteractionItemVM(),
        new MissionPrimaryInteractionItemVM()
    };
}
```

Note that two of the lists **pre-allocate exactly two entries each**, and are **permanently reused** — `SetInteractionMessages` overwrites slots `[0]` and `[1]` every time:

```csharp
private void SetInteractionMessages(Agent requesterAgent, IFocusable focusableObject, bool isInteractable)
{
    GetInteractionTexts(requesterAgent, focusableObject, isInteractable, out var focusableObjectInformation);
    IsActive = focusableObjectInformation.IsActive;
    PrimaryInteractionMessages[0].SetData(focusableObjectInformation.PrimaryInteractionText);
    PrimaryInteractionMessages[1].SetData(focusableObjectInformation.SecondaryInteractionText);
    PrimaryInteractionMessages[1].FocusTypeString = focusableObject?.FocusableObjectType.ToString() ?? FocusableObjectType.None.ToString();
}
```

**There are always exactly two primary lines — no list, no dynamic add/remove.** That is the structural key to understanding this class.

## 🔴 Accessibility: the most important section on this page

**Every method that drives focus in this class is `internal`, not `public`:**

| Member | Visibility |
| --- | --- |
| `Tick(float dt)` | `internal` (`:307`) |
| `CheckAndClearFocusedAgent(Agent agent)` | `internal` (`:325`) |
| `OnFocusGained(Agent, IFocusable, bool)` | `internal` (`:339`) |
| `OnFocusLost(Agent, IFocusable)` | `internal` (`:385`) |
| `OnAgentInteraction(Agent, Agent, sbyte)` | `internal` (`:391`) |

The holder, `MissionAgentStatusVM`, is precisely what drives them (`MissionAgentStatusVM.cs:742/912/917/928/933/946`).

**The consequence: a mod in a separate assembly cannot call any of those five.** The focus loop is entirely game-driven. The public members you *can* call are:

`AddSecondaryMessage` / `RemoveSecondaryMessage` / `HasSecondaryInteractionMessage` / `SetForcedInteractionTexts` / `ClearForcedInteractionTexts` / `OnActiveMissionHintChanged` / `OnFocusedHealthChanged` / `ResetFocus` / `RefreshValues` / `OnFinalize`, plus every `[DataSourceProperty]`.

**That distinction decides whether you can drive this prompt yourself.** If you want "hold a key to show a custom prompt", the route is *not* `OnFocusGained` — it is `SetForcedInteractionTexts`.

## Mental Model

Read it as **"two reusable primary lines driven by focus, plus two stackable secondary sources, plus an independent two-line forced slot"**:

- **Who news it up.** `MissionAgentStatusVM`, at line 677: `InteractionInterface = new AgentInteractionInterfaceVM(mission);`. **The only construction site in the tree.**
- **Who holds the reference.** `MissionAgentStatusVM.InteractionInterface` (private field at `:76`, exposed as a `[DataSourceProperty]` at `:136`). It lives as long as the `MissionAgentStatusVM`, and is released with its host when the mission ends. **The class caches no self-reference.**
- **What it binds to.** Eleven members. `IsActive` / `HasSecondaryMessages` / `HasForcedMessages` are the three boolean switches; `PrimaryInteractionMessages` / `SecondaryInteractionMessages` / `ForcedInteractionMessages` are the three lists; `TargetHealth` / `ShowHealthBar` are the bar; `BackgroundColor` / `TextColor` are the colours; `DisplayInteractionText` toggles the primary text.
- **When it is disposed.** Via the inherited `ViewModel` contract, with the host calling `OnFinalize()`. This class **overrides it** (`:290-305`) and propagates `OnFinalize` to every entry of all three lists. **It is one of the few types in this directory that does recursive cleanup.**
- 🔴 **The `IsActive` and `HasForcedMessages` setters have side effects.** They are not pure notification properties:
  - `IsActive = false` (`:169-176`) also sets `ShowHealthBar = false` and calls `ResetData()` on every `PrimaryInteractionMessages` entry.
  - `HasForcedMessages = false` (`:246-252`) also calls `ResetData()` on every `ForcedInteractionMessages` entry.
  So **you cannot change just those two booleans without accepting the collateral effects.**
- 🔴 **`HasSecondaryMessages` is a cached value, not a derived property.** It is hand-synced in two places: `Tick()` (`:318`) and `OnActiveMissionHintChanged()` (`:480`). If you `SecondaryInteractionMessages.Add(...)` from outside, **you must set `HasSecondaryMessages = true` yourself** or nothing renders. Going through the public `AddSecondaryMessage` does set `message.IsDisplayed = true`, but it **still does not set `HasSecondaryMessages`** — it relies on `Tick` catching up on the next frame.
- **Three private `SetXxx` methods form one dispatch chain.** `OnFocusGained` branches on target type: `Agent` → `SetHumanAgent` / `SetMount` / `SetGenericAgent` by `IsHuman` and `IsMount`; `UsableMissionObject` → `SetItem` (with a `CanQuickPickUp` test) if it is a `SpawnedItemEntity`, else `SetUsableMissionObject`; `UsableMachine` → `SetUsableMachine` (which additionally derives health from `DestructionComponent`); `DestructableComponent` → `SetDestructibleComponent`. **You cannot replace this chain** — it is the private implementation behind an `internal` entry point.
- **Health is a percentage.** `TargetHealth = (int)(100f * healthPercentage)` in `SetHealth` — that is 0–100, not absolute HP. `SetUsableMachine` likewise uses `100f * HitPoint / MaxHitPoint`.
- **Misuse #1**: adding rows to `PrimaryInteractionMessages` for a multi-line prompt. **That cannot work meaningfully** — the list is fixed at two and is overwritten by the focus loop, so a third row is never filled by `SetInteractionMessages`. Use `SecondaryInteractionMessages` instead.
- **Misuse #2**: trying to call `Tick` or `OnFocusGained` from a mod to customise focus behaviour. **It does not compile** (internal). This is the single most common compile error on this page.

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| `IsActive` | `[DataSourceProperty] public bool IsActive` (`:154-178`) | Whether the primary prompt shows. **The setter has side effects**: setting `false` also sets `ShowHealthBar = false` and `ResetData()`s every primary message (`:169-176`). Written by `SetInteractionMessages` from `FocusableObjectInformation.IsActive`. |
| `PrimaryInteractionMessages` | `[DataSourceProperty] public MBBindingList<MissionPrimaryInteractionItemVM>` (`:86-101`) | **Exactly two rows** (pre-allocated at `:260-264`) for the primary and secondary prompt lines. The focus loop overwrites `[0]` and `[1]` on every pass and **never adds or removes**. |
| `SecondaryInteractionMessages` | `[DataSourceProperty] public MBBindingList<MissionInteractionItemBaseVM>` (`:103-118`) | The dynamically growable secondary list, typically fed by mission hints (`MissionHintInteractionItemVM`). **After mutating it you must sync `HasSecondaryMessages` yourself.** |
| `ForcedInteractionMessages` | `[DataSourceProperty] public MBBindingList<MissionPrimaryInteractionItemVM>` (`:214-229`) | **Two rows** (pre-allocated at `:266-270`) of forced prompts, independent of the focus loop. Driven by `SetForcedInteractionTexts` / `ClearForcedInteractionTexts` — **and this is the block a mod can drive entirely on its own.** |
| `HasSecondaryMessages` | `[DataSourceProperty] public bool HasSecondaryMessages` (`:180-195`) | **A cached value, not a derived property.** Hand-synced by `Tick` (`:318`) and `OnActiveMissionHintChanged` (`:480`). Mutating the list from outside does not update it. |
| `HasForcedMessages` | `[DataSourceProperty] public bool HasForcedMessages` (`:231-254`) | Whether forced prompts show. **The setter has side effects**: setting `false` also `ResetData()`s every `ForcedInteractionMessages` entry (`:246-252`). |
| `TargetHealth` / `ShowHealthBar` | `[DataSourceProperty] public int TargetHealth` / `bool ShowHealthBar` (`:52-84`) | The health bar. **`TargetHealth` is a 0–100 percentage**, not absolute HP (`SetHealth:507`). `SetUsableMachine` / `SetDestructibleComponent` also write percentages. |
| `SetForcedInteractionTexts` | `public void SetForcedInteractionTexts(TextObject text1, bool isDisabled1, TextObject text2, bool isDisabled2)` (`:526-531`) | The entry point a mod should actually use. Writes the two forced lines and sets `HasForcedMessages = true`. **Independent of the focus loop and unaffected by the `internal` restrictions.** |
| `ClearForcedInteractionTexts` | `public void ClearForcedInteractionTexts()` (`:533-538`) | Clears both lines and sets `HasForcedMessages = false`. |
| `AddSecondaryMessage` | `public void AddSecondaryMessage(MissionInteractionItemBaseVM message)` (`:483-492`) | Appends a secondary message and sets `message.IsDisplayed = true`. **If the message is already displayed it hits `Debug.FailedAssert` and returns early** (`:487-489`) — a duplicate add is an assertion, not a silent no-op. |
| `RemoveSecondaryMessage` | `public bool RemoveSecondaryMessage(MissionInteractionItemBaseVM message)` (`:494-498`) | Removes a secondary message and returns whether it was really removed. Sets `IsDisplayed = false` first. |
| `HasSecondaryInteractionMessage` | `public bool HasSecondaryInteractionMessage(MissionInteractionItemBaseVM message)` (`:500-503`) | Literally `return message.IsDisplayed;` — **it tests the message's own flag, not the list's contents.** |
| `OnActiveMissionHintChanged` | `public void OnActiveMissionHintChanged(MissionHint previousHint, MissionHint newHint)` (`:464-481`) | Hooks mission-hint transitions: removes the entry matching a cleared previous hint, appends a `MissionHintInteractionItemVM` for a new one, then syncs `HasSecondaryMessages`. |
| `OnFocusedHealthChanged` | `public void OnFocusedHealthChanged(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull)` (`:334-337`) | Updates the bar when the focused target's health moves. `hideHealthbarWhenFull` hides it at full health. |
| `ResetFocus` | `public void ResetFocus()` (`:518-524`) | Clears the focus reference, hides the bar, and resets both primary lines. **It does not clear `SecondaryInteractionMessages`.** |
| `RefreshValues` | `public override void RefreshValues()` (`:273-288`) | Calls `RefreshValues()` on every entry of all three lists. |
| `OnFinalize` | `public override void OnFinalize()` (`:290-305`) | After `base.OnFinalize()`, calls `OnFinalize()` on **every entry** of all three lists. **One of the few types in this directory with recursive cleanup.** |
| `Tick` 🔴 | `internal void Tick(float dt)` (`:307-323`) | Per-frame driver: when the focus is an `Agent` it first `ResetFocus()`s then re-runs `OnFocusGained`; under `MissionMode.StartUp` with an enemy focused it forces `IsActive = false`; syncs `HasSecondaryMessages` and refreshes every secondary message. **A mod cannot call this.** |
| `OnFocusGained` 🔴 | `internal void OnFocusGained(Agent mainAgent, IFocusable focusableObject, bool isInteractable)` (`:339-383`) | The type-dispatch chain on focus gain (described above). **A mod cannot call this.** |
| `OnFocusLost` 🔴 | `internal void OnFocusLost(Agent agent, IFocusable focusableObject)` (`:385-389`) | On focus loss: `ResetFocus()` + `IsActive = false`. **A mod cannot call this.** |
| `CheckAndClearFocusedAgent` 🔴 | `internal void CheckAndClearFocusedAgent(Agent agent)` (`:325-332`) | If the argument is the currently focused agent, sets `IsActive = false` and `ResetFocus()`s. **A mod cannot call this.** |
| `OnAgentInteraction` 🔴 | `internal void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)` (`:391-397`) | Under `MissionMode.Stealth`, interacting with a non-enemy humanoid forces its prompt line to refresh. **A mod cannot call this.** |

## Real Example

The one block a mod can drive completely by itself — the two forced lines, all public API with no `internal` involved:

```csharp
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction;

public void ShowForcedHint(AgentInteractionInterfaceVM ui, bool interactable)
{
    TextObject line1 = new TextObject("{=MyHint1}Hold F to interact");
    TextObject line2 = new TextObject("{=MyHint2}Requires a spare mount");

    // Public entry point; no internal focus method is touched.
    ui.SetForcedInteractionTexts(line1, false, line2, !interactable);
}

public void HideForcedHint(AgentInteractionInterfaceVM ui)
{
    ui.ClearForcedInteractionTexts();
}
```

Appending your own secondary hint — mind the duplicate assertion:

```csharp
using TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction;

public void PushHint(AgentInteractionInterfaceVM ui, MissionInteractionItemBaseVM hint)
{
    // AddSecondaryMessage checks HasSecondaryInteractionMessage first;
    // when already displayed it trips Debug.FailedAssert and returns without adding.
    if (!ui.HasSecondaryInteractionMessage(hint))
    {
        ui.AddSecondaryMessage(hint);
    }
}

public void PopHint(AgentInteractionInterfaceVM ui, MissionInteractionItemBaseVM hint)
{
    ui.RemoveSecondaryMessage(hint);
}
```

Maintaining `HasSecondaryMessages` yourself, because it is a cache and not a derived value:

```csharp
public void AddHintAndSyncFlag(AgentInteractionInterfaceVM ui, MissionInteractionItemBaseVM hint)
{
    ui.SecondaryInteractionMessages.Add(hint);
    hint.IsDisplayed = true;

    // The crux: HasSecondaryMessages is not derived.
    // Vanilla relies on Tick() catching up next frame; manual adds must sync by hand.
    ui.HasSecondaryMessages = ui.SecondaryInteractionMessages.Count > 0;
}
```

Reading the health bar — remembering `TargetHealth` is a percentage:

```csharp
public string DescribeTarget(AgentInteractionInterfaceVM ui)
{
    if (!ui.ShowHealthBar)
    {
        return "no bar";
    }

    // A 0..100 percentage, not an absolute HP value.
    return "target at " + ui.TargetHealth + "%";
}
```

## Risks and crash boundaries

- 🔴 **Five driver methods are `internal`; mods do not compile against them.** `Tick`, `OnFocusGained`, `OnFocusLost`, `CheckAndClearFocusedAgent`, `OnAgentInteraction` are all internal, called from the same assembly by `MissionAgentStatusVM`. **Any "drive the focus loop myself" plan is impossible from a separate assembly**; the supported route is `SetForcedInteractionTexts` and `AddSecondaryMessage`.
- 🔴 **`HasSecondaryMessages` is a hand-synced cache.** Mutating the list directly does not update it, producing "the hint is in the list but nothing renders". Even `AddSecondaryMessage` only sets `message.IsDisplayed` and still waits for `Tick` on the next frame. **Mutate the list, sync the flag.**
- **Two boolean setters have side effects.** `IsActive = false` and `HasForcedMessages = false` each drag a `ResetData()` over the corresponding entries. You cannot change the boolean without the collateral effect.
- **`AddSecondaryMessage` treats a duplicate as an assertion failure** (`:487-489`, `Debug.FailedAssert`), not a silent ignore. Development builds will trip it; release behaviour depends on the assert implementation. **Check `HasSecondaryInteractionMessage` first.**
- **The primary list is fixed at two and never grows.** Multi-line prompts must go through `SecondaryInteractionMessages`; a third row added to `PrimaryInteractionMessages` is never filled by the focus loop.
- **The focus loop resets every frame.** `Tick` begins by `ResetFocus()`-ing an `Agent` focus and re-running `OnFocusGained` (`:309-313`). Anything you write into the primary lines is overwritten on the next frame.
- **`SetInteractionMessages` sources its text from an external provider**: `_mission?.FocusableObjectInformationProvider?.GetInteractionTexts(...)` (`:403`). **Both can be null** — with a null mission or no provider, `FocusableObjectInformation` keeps its default `IsActive = false` and nothing shows.
- **`TargetHealth` is a percentage, not an absolute value** (`SetHealth:507`, `SetUsableMachine:421`, `SetDestructibleComponent:429`). A displayed 100 may mean full health, and may also be hidden by `hideHealthbarWhenFull`.
- **Lifecycle:** registers no `CampaignEvents` and no `Game.Current.EventManager` handler, and holds a `Mission` reference. `OnFinalize` does recursive cleanup across all three lists, **which is correct**. It cannot leak by itself — but caching it somewhere longer-lived than the mission drags the `Mission` reference along.
- **Serialization**: none. No `SyncData`, no `IDataStore` contact. Purely in-mission UI state.
- **Native boundary**: this class is pure managed, but its downstream `Agent` / `Mission` / `UsableMachine` touch `Bannerlord.Native` heavily — that is inside the focus chain, not here.
- **The same-named method trap: `GetWeaponSpecificText` is dead code in this class.** `AgentInteractionInterfaceVM.cs:540` defines a `private string GetWeaponSpecificText(SpawnedItemEntity)` that reads `MissionWeapon` and formats `str_LEFT_over_RIGHT_in_paranthesis` (a shield's current/max, or a quiver's amount/max). **Within this file it occurs exactly once — the definition at line 540, with no call site.** Note that `MissionFocusableObjectInformationProvider.cs:160` has a **same-named but different-class** private implementation which *is* live (called at `:105/113/122/129`). **The two are not the same code — do not model an example on the copy in `AgentInteractionInterfaceVM`, because it is not wired into the focus chain.**
- **Cross-version**: the internal/public split, the call shapes at `MissionAgentStatusVM.cs:677/742/912/917/928/933/946`, and the field names of `FocusableObjectType` / `FocusableObjectInformation` are all v1.4.5 shapes. **If upstream promotes one of those internals to public, this page's "does not compile" conclusion stops holding.**

## Dependencies

- ↑ VM base: [ViewModel](../../core-extra/ViewModel) — property-change notification and the `OnFinalize` contract
- ↔ Sibling: [MissionPrimaryInteractionItemVM](../MissionPrimaryInteractionItemVM) — the row type for primary and forced prompts; `SetData` / `ResetData` / `FocusTypeString` all live there
- ↔ Sibling: [MissionInteractionItemBaseVM](../MissionInteractionItemBaseVM) — base type of the secondary rows
- ↔ Sibling: [MissionHintInteractionItemVM](../MissionHintInteractionItemVM) — the `MissionHintInteractionItemVM` that `OnActiveMissionHintChanged` appends automatically
- ↔ Host: `MissionAgentStatusVM` (`TaleWorlds.MountAndBlade.ViewModelCollection`) — the sole constructor and the caller of every internal method
- → Mission context: [Mission](../../mission/Mission), [Agent](../../mission/Agent)
- → Focus object interfaces: `IFocusable`, `UsableMissionObject`, `SpawnedItemEntity`, `UsableMachine`, `DestructableComponent` (`TaleWorlds.MountAndBlade`)
- → List container: [MBBindingList](../../core-extra/MBBindingList)
