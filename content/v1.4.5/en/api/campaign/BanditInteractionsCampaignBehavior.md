---
title: "BanditInteractionsCampaignBehavior"
description: "The dialogue controller for bandit encounters: it registers the whole bandit_start_* conversation tree (ultimatum, negotiation, ransom barter, recruitment, surrender, fight) and remembers per-bandit-party how far the encounter got through _interactedBandits (None / Friendly / PaidOffParty / Hostile)."
---

# BanditInteractionsCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BanditInteractionsCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BanditInteractionsCampaignBehavior.cs`

## Overview

`BanditInteractionsCampaignBehavior` is the **dialogue controller for bandit encounters**. It registers an entire conversation tree (roughly 65 of its 672 lines are `AddDialogs` registration statements) and keeps one runtime dictionary recording how far the player has got with each individual bandit party:

```csharp
private enum PlayerInteraction
{
    None,
    Friendly,
    PaidOffParty,
    Hostile
}

private Dictionary<MobileParty, PlayerInteraction> _interactedBandits = new Dictionary<MobileParty, PlayerInteraction>();
```

**That dictionary is this behavior's only cross-save state.** It is persisted through `SyncData`, and the nested `BanditInteractionsCampaignBehaviorTypeDefiner` (save id **70000**) registers the `PlayerInteraction` enum into the save as type 1.

The tree is organised around the **four ways a player can get out of a bandit encounter**:

| Way out | Entry condition | Dialogue id prefix | Ending callback |
| --- | --- | --- | --- |
| Fight | The player is stronger | `bandit_start_defender` / `bandit_start_fight` | `conversation_bandit_set_hostile_on_consequence` |
| Negotiate (safe passage) | The player is on the `Defender` side | `barter_with_bandit_prebarter` → `_screen` → `_postbarter` | `bandit_barter_successful_on_consequence` records `PaidOffParty` |
| Let them go | The player outmatches them (`_try_leave`), or a deal is struck | `bandit_attacker_try_leave` | — |
| Recruit them | The bandits are willing to join | `conversation_bandits_will_join_player_on_condition` | `conversation_bandits_join_player_party_on_consequence` |
| Accept surrender | The player overwhelmingly dominates | `common_bandit_surrender_answer` | `conversation_bandits_surrender_on_consequence` |

## Mental Model

Think of it as **the branch state machine of a bandit encounter**.

- **The behavior itself holds almost no logic; it is mostly dialogue registration.** `RegisterEvents()` subscribes exactly two things (`MobilePartyDestroyed` and `OnSessionLaunchedEvent`), and `SyncData` syncs exactly one dictionary. **The real logic lives in the private `bandit_*_condition` and `*_on_consequence` methods, and those are only ever invoked by the dialogue framework.**
- **Four states, and the transitions are asymmetric.** `bandit_neutral_greet_on_consequence` (`:361-367`) writes `Friendly` **only when the current state is not already `PaidOffParty`** — a paid-off bandit never degrades back to friendly. `conversation_bandit_set_hostile_on_consequence` (`:369-372`) writes `Hostile` **unconditionally**. **So "paid off" outranks "neutral greeting", but "hostile" overrides everything.**
- **`bandit_attacker_try_leave_condition` is the only reader of that state machine.** At `:660-671`: when the encountered party's `CalculateCurrentStrength()` is **not** below the player's, or the player is in a raft state, and the state is **not** `PaidOffParty`, the line only appears when the state is `Friendly`; otherwise it returns true. **In other words: paid off means always allowed to leave; greeted means allowed when the player is not outmatched; anything else means not allowed.**
- **The ransom negotiation runs through `BarterManager`.** `bandit_start_barter_consequence` (`:606-613`) calls `BarterManager.Instance.StartBarterOffer(Hero.MainHero, Hero.OneToOneConversationHero, PartyBase.MainParty, MobileParty.ConversationParty?.Party, null, BarterManager.Instance.InitializeSafePassageBarterContext, 0, isAIBarter: false, new Barterable[1] { new SafePassageBarterable(null, Hero.MainHero, MobileParty.ConversationParty?.Party, PartyBase.MainParty) })`. **It uses `SafePassageBarterable`, not a custom type** — bargaining with bandits is, underneath, buying a safe-passage token.
- **Recruitment and surrender share one roster screen.** `OpenRosterScreenAfterBanditEncounter(MobileParty, bool doBanditsJoinPlayerSide)` (`:420-462`) is the longest method in the file and the fork between the two endings. **With `doBanditsJoinPlayerSide == false` it never opens a screen at all**: it goes straight to `PlayerEncounter.StartBattle()` (if no battle is running) → `SetOverrideWinner(PlayerSide)` → `EnemySurrender = true`. **Only with `true` does it reach `PartyScreenHelper.OpenScreenWithCondition`, the ship loot screen, and the per-party `DestroyPartyAction.Apply`.**
- **The recruitment path has three fixed closing stages.** `OpenRosterScreenAfterBanditEncounter` opens the roster screen → if the bandits have ships, `PortStateHelper.OpenAsLoot(mBList)` → then **reverse** iteration over the NPC party list, firing `OnBanditPartyRecruited` and `DestroyPartyAction.Apply` per party. The reverse order is necessary because `DestroyPartyAction` mutates the collection being walked.
- **`GetMemberAndPrisonerRostersFromParties` uses `ref` out-parameters.** `:374-419` takes `ref TroopRoster troopsTakenAsMember` and `ref TroopRoster troopsTakenAsPrisoner`, which the caller pre-creates with `TroopRoster.CreateDummyTroopRoster()`.
- **Recruitment and surrender are deferred to the end of the conversation.** Two registration sites use `Campaign.Current.ConversationManager.ConversationEndOneShot += delegate { ... conversation_bandits_surrender_on_consequence(party); }` — **capturing `MobileParty.ConversationParty` into a local first**, because that static property may already have changed by the time the conversation closes.

### The shape of the tree

```text
start
 ├─ bandit_start_defender            condition: bandit_start_defender_condition (the other side is bandits)
 │   ├─ bandit_start_defender_1      player option "fight"       condition: player is not stronger
 │   ├─ bandit_start_defender_3      player option "we can't fight" condition: negation of the above
 │   └─ bandit_start_defender_2      player option "maybe we can talk" condition: bandit_start_barter_condition
 │        └─ barter_with_bandit_prebarter → barter_with_bandit_screen (opens the barter screen)
 │              └─ barter_with_bandit_postbarter
 │                   ├─ _1  condition: bandit_barter_successful_condition → PaidOffParty
 │                   └─ _2  condition: negation → Hostile
 └─ bandit_attacker                  condition: bandit_neutral_greet_on_condition
     ├─ common_encounter_ultimatum → common_encounter_ultimatum_answer
     │    ├─ common_encounter_ultimatum_surrender  condition: conversation_bandits_surrender_on_condition
     │    │    └─ common_bandit_surrender_answer
     │    │         ├─ common_bandit_surrender_accepted   → deferred to ConversationEndOneShot, surrender path
     │    │         ├─ common_bandit_surrender_join_offer  → deferred to ConversationEndOneShot, recruit path
     │    │         └─ common_bandit_surrender_declined   → Hostile
     │    └─ common_encounter_ultimatum_war               → Hostile
     ├─ common_encounter_fight      player option "never mind, you can go" → bandit_attacker_leave
     └─ bandit_attacker_leave       condition: bandit_attacker_try_leave_condition
```

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `BanditInteractionsCampaignBehavior()` | `public BanditInteractionsCampaignBehavior()` | **Explicitly calls the base constructor with a string id**: `: base("BanditsCampaignBehavior")` (`:53-56`). `CampaignBehaviorBase` has two constructors (`CampaignBehaviorBase(string stringId)` at `TaleWorlds.CampaignSystem/CampaignBehaviorBase.cs:7` and the parameterless one at `:12`); this argument is the behavior's string id. **Note the source uses the plural `Bandits`, which does not match the class name `BanditInteractions...`.** |
| `RegisterEvents()` | `public override void RegisterEvents()` | Subscribes exactly two events (`:63-67`): `CampaignEvents.MobilePartyDestroyed → OnPartyDestroyed` and `CampaignEvents.OnSessionLaunchedEvent → OnSessionLaunched`. **There is no tick and no dialogue-event subscription** — the tree is registered once inside `OnSessionLaunched`. |
| `SyncData(IDataStore dataStore)` | `public override void SyncData(IDataStore dataStore)` | Syncs one field: `dataStore.SyncData("_interactedBandits", ref _interactedBandits);` (`:69-72`). **The key is a `MobileParty` instance**, so the save system has to rebind party objects — that is the precondition for it being saveable at all. |
| `OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | The dialogue registration entry point (`:58-61`): a single `AddDialogs(campaignGameStarter);`. **`AddDialogs` is `protected`, not `private`, so a derived class can extend the tree.** |
| `OnPartyDestroyed(MobileParty mobileParty, PartyBase destroyerParty)` | `private void OnPartyDestroyed(MobileParty mobileParty, PartyBase destroyerParty)` | Dictionary cleanup (`:74-80`): `if (_interactedBandits.ContainsKey(mobileParty)) _interactedBandits.Remove(mobileParty);`. **`destroyerParty` is unused.** **This is the only mechanism preventing unbounded dictionary growth** — a destroyed party whose event never fires leaks an entry. |
| `SetPlayerInteraction(MobileParty mobileParty, PlayerInteraction interaction)` | `private void SetPlayerInteraction(MobileParty mobileParty, PlayerInteraction interaction)` | The state writer (`:82-93`). It tests `ContainsKey` and then either assigns or `Add`s — equivalent to `dict[key] = value`, just more verbose. **Every transition goes through it; there is no bypass.** |
| `GetPlayerInteraction(MobileParty mobileParty)` | `private PlayerInteraction GetPlayerInteraction(MobileParty mobileParty)` | The state reader (`:95-104`): `TryGetValue` returns the value on success and **`PlayerInteraction.None` on failure**. So "never encountered" and "explicitly neutral" are different things. |
| `bandit_barter_successful_on_consequence()` | `private void bandit_barter_successful_on_consequence()` | Successful bargain → writes `PaidOffParty` (`:356-359`). **This is the only place that ever writes `PaidOffParty`.** |
| `bandit_neutral_greet_on_consequence()` | `private void bandit_neutral_greet_on_consequence()` | Neutral greeting → writes `Friendly` **conditionally** (`:361-367`): `if (GetPlayerInteraction(...) != PlayerInteraction.PaidOffParty)`. **A paid-off state is never downgraded.** |
| `conversation_bandit_set_hostile_on_consequence()` | `private void conversation_bandit_set_hostile_on_consequence()` | Hostility → writes `Hostile` **unconditionally** (`:369-372`). **It can override `PaidOffParty`.** |
| `bandit_attacker_try_leave_condition()` | `private bool bandit_attacker_try_leave_condition()` | The "let them go" test (`:660-671`). Reads `EncounteredParty.CalculateCurrentStrength()` and `PartyBase.MainParty.CalculateCurrentStrength()` off [PlayerEncounter](../PlayerEncounter), plus `MobileParty.MainParty.IsInRaftState` and the state machine. **It is the sole consumer of that state machine** — the state that gets written is only ever read here. |
| `OpenRosterScreenAfterBanditEncounter(MobileParty conversationParty, bool doBanditsJoinPlayerSide)` | `private void OpenRosterScreenAfterBanditEncounter(MobileParty conversationParty, bool doBanditsJoinPlayerSide)` | **The fork between the two endings** (`:420-462`). The `false` branch (surrender) opens no screen and instead runs `StartBattle()` if needed, `SetOverrideWinner(PlayerSide)`, and `EnemySurrender = true`. The `true` branch (recruit) runs `FindAllNpcPartiesWhoWillJoinEvent` → `GetMemberAndPrisonerRostersFromParties` → `PartyScreenHelper.OpenScreenWithCondition` → `PortStateHelper.OpenAsLoot` when ships exist → **reverse-order** `OnBanditPartyRecruited` plus `DestroyPartyAction.Apply`. |
| `bandit_start_barter_consequence()` | `private void bandit_start_barter_consequence()` | Opens the ransom barter (`:606-613`). Calls `BarterManager.Instance.StartBarterOffer(...)` with `BarterManager.Instance.InitializeSafePassageBarterContext` and one `SafePassageBarterable(null, Hero.MainHero, MobileParty.ConversationParty?.Party, PartyBase.MainParty)`. **Every access uses `?.`**, because `MobileParty.ConversationParty` really is null at some dialogue moments. |
| `BanditInteractionsCampaignBehaviorTypeDefiner` | `public class BanditInteractionsCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | The save type definer (`:23-39`), hard-coding `base(70000)`, whose `DefineEnumTypes()` does `AddEnumDefinition(typeof(PlayerInteraction), 1)`. **`PlayerInteraction` is a private nested enum, and this definer is the only reason it can enter a save at all.** |
| `_goldAmount` | `private static int _goldAmount;` | **A static field that is written but never read** (`:51`). Dead code — and it is `static` rather than per-instance, so **it leaks across campaigns**. |

## Examples

Read how far an encounter got, reproducing the semantics of `GetPlayerInteraction` where a missing record means `None`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.Party;

public static string DescribeBanditRelationship(MobileParty bandit)
{
    if (bandit == null)
    {
        return "no bandit";
    }

    BanditInteractionsCampaignBehavior behavior = Campaign.Current.GetCampaignBehavior<BanditInteractionsCampaignBehavior>();
    if (behavior == null)
    {
        return "behavior not registered";
    }

    Debug.Print("is bandit=" + bandit.IsBandit + " clan=" + bandit.ActualClan.Name.ToString(), 0);
    return "the interaction dictionary is private; inspect by reproducing the conditions";
}
```

Add your own bandit dialogue line to the tree. `AddDialogs` is `protected`, so overriding it is the supported extension point:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

public class MyBanditDialogue : BanditInteractionsCampaignBehavior
{
    protected override void AddDialogs(CampaignGameStarter starter)
    {
        base.AddDialogs(starter);

        starter.AddDialogLine("my_bandit_start", "start", "my_bandit_choice", "{=!}{ROBBERY_THREAT}",
            () => PlayerEncounter.EncounteredParty != null && PlayerEncounter.EncounteredParty.IsMobile, null);
        starter.AddPlayerLine("my_bandit_line_1", "my_bandit_choice", "close_window", "{=myBanditPay}Fine. Take it.",
            () => Hero.MainHero.Gold >= 200,
            () => GiveGoldAction.ApplyBetweenCharacters(Hero.MainHero, null, 200));
    }
}
```

Decide whether the player is outmatched, reproducing the strength half of `bandit_attacker_try_leave_condition`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public static bool PlayerOutmatched(MobileParty encountered)
{
    if (encountered == null)
    {
        return false;
    }

    bool weaker = encountered.CalculateCurrentStrength() > PartyBase.MainParty.CalculateCurrentStrength();
    bool onRaft = MobileParty.MainParty.IsInRaftState;
    return weaker || onRaft;
}
```

Check whether the dialogue has been registered already, since `OnSessionLaunchedEvent` fires exactly once per session:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

public class MySessionWatcher : CampaignBehaviorBase
{
    public int SessionsSeen { get; private set; }

    public override void RegisterEvents()
    {
        CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, OnSessionLaunched);
    }

    private void OnSessionLaunched(CampaignGameStarter starter)
    {
        this.SessionsSeen++;
        BanditInteractionsCampaignBehavior official = Campaign.Current.GetCampaignBehavior<BanditInteractionsCampaignBehavior>();
        Debug.Print("session " + this.SessionsSeen + ", bandit dialogue behaviour present = " + (official != null), 0);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

## Risks and crash boundaries

- **A derived class cannot override any dialogue method.** Every `bandit_*_condition` and `*_on_consequence` is `private`; only `AddDialogs` is `protected`. **The single supported way to extend the tree is to override `AddDialogs`, call `base.AddDialogs(starter)`, and append your own lines** — which is precisely why `AddDialogs` is protected rather than private.
- **`PlayerInteraction` is a private nested enum.** External code cannot name it and cannot read `_interactedBandits`. **To learn a band's relationship with the player you must reproduce those four conditions or use reflection.**
- **`_interactedBandits` is keyed by `MobileParty` and depends on the save system rebinding it.** After a load the keys must point at the equivalent party instances in the new world. **Creating parties yourself without firing `MobilePartyCreated` / `MobilePartyDestroyed` leaves the dictionary out of sync with reality.**
- **`OnPartyDestroyed` is the only cleanup path.** A party destroyed without that event firing (some hard-kill paths) leaves a permanent entry behind — which is also a retained `MobileParty` reference.
- **Transitions are asymmetric: paid off cannot revert to friendly, hostile overrides everything.** Writing `Friendly` is guarded by `!= PaidOffParty`; writing `Hostile` has no guard. **Any mod that unlocks dialogue by "having greeted them" must account for the player declaring war later and the state flipping to `Hostile`.**
- **The state machine has exactly one consumer.** `bandit_attacker_try_leave_condition` is its only reader — **every other dialogue condition reads live combat state (`PlayerEncounter`, `CalculateCurrentStrength`) rather than this dictionary.**
- **The `false` branch of `OpenRosterScreenAfterBanditEncounter` rewrites the battle outcome outright.** `PlayerEncounter.Battle.SetOverrideWinner(PlayerSide)` plus `EnemySurrender = true`, skipping the battle entirely when it has not started. **The `doneClicked` callback `OnDoneClicked` simply `return true;` and does nothing** — the surrender path has no follow-up handling.
- **The recruitment path iterates the NPC party list in reverse.** `for (int num = list2.Count - 1; num >= 0; num--)`, because `DestroyPartyAction.Apply` mutates the collection. **Copying it as a forward loop skips parties or throws.**
- **The `ref` out-parameters of `GetMemberAndPrisonerRostersFromParties` must be pre-created.** The official code makes empty rosters with `TroopRoster.CreateDummyTroopRoster()`. **Passing null throws inside the method.**
- **Both `ConversationEndOneShot` sites capture `MobileParty.ConversationParty` first.** That static property may already have changed by the time the conversation ends, so it has to be stashed in a local. **This is the easiest mistake to make when copying from this file.**
- **`bandit_start_barter_consequence` uses `?.` throughout.** `MobileParty.ConversationParty?.Party` appears twice — **the property genuinely is null at some dialogue moments.** Do not drop the `?.` when copying.
- **`_goldAmount` is a written-but-never-read static field.** It is `static` rather than per-instance, so **it survives across campaigns.** Harmless to logic, but it is the only mutable static state in the file.
- **The constructor's `base("BanditsCampaignBehavior")` does not match the class name.** The class is `BanditInteractionsCampaignBehavior`; the base argument is `BanditsCampaignBehavior` (plural). **Any lookup keyed on that string must use the actual string.**
- **Save id 70000 and enum type number 1 are hard-coded.** `AddEnumDefinition(typeof(PlayerInteraction), 1)` — **copying this definer collides on both the save id and the enum number.**

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/BanditInteractionsCampaignBehavior.cs` is a 672-line original-source file. Six things to check across versions: the save id `70000` and the enum type number **1** for `PlayerInteraction` (**a change in enum order misaligns every stored relationship state — this is the single most dangerous item**), the order of the four `PlayerInteraction` values, the `SafePassageBarterable` plus `InitializeSafePassageBarterContext` used by the ransom barter (**swapping to a different barterable changes the price structure of negotiations**), the ten parameters of `PartyScreenHelper.OpenScreenWithCondition` inside `OpenRosterScreenAfterBanditEncounter` (**that API is highly version-volatile**), and whether `AddDialogs` is still `protected` (turn it private and the tree can no longer be extended).

## Dependencies

- Official registration point: `gameStarter.AddBehavior(new BanditInteractionsCampaignBehavior());` at `SandBoxManager.cs:37`, immediately after [BanditSpawnCampaignBehavior](../BanditSpawnCampaignBehavior)
- Encounter context: `Current`, `EncounteredParty`, `EncounteredMobileParty`, `Battle`, `EnemySurrender`, `LeaveEncounter`, and `StartBattle()` on [PlayerEncounter](../PlayerEncounter), plus `FindAllNpcPartiesWhoWillJoinEvent` — **every strength comparison and every ending branch depends on it**
- Party side: `ConversationParty`, `Ships`, `ActualClan`, `CalculateCurrentStrength`, `IsInRaftState`, and `SetMovePatrolAroundPoint` on [MobileParty](../MobileParty); party destruction goes through `DestroyPartyAction.Apply`
- Barter: `Instance.StartBarterOffer(...)` and `InitializeSafePassageBarterContext` on [BarterManager](../BarterManager), with `SafePassageBarterable` from the [BarterData](../BarterData) system
- Roster UI: `PartyScreenHelper.OpenScreenWithCondition` and [PartyScreenLogic](../PartyScreenLogic) (`TroopType`, `PartyRosterSide`, `TransferState`), plus `PortStateHelper.OpenAsLoot` for the ship loot screen
- Rosters: `CreateDummyTroopRoster`, `GetTroopRoster`, and `TotalManCount` on [TroopRoster](../TroopRoster), plus `FlattenedTroopRoster`
- Dialogue framework: `ConversationEndOneShot` on [ConversationManager](../ConversationManager), and `AddDialogLine` / `AddPlayerLine` on `CampaignGameStarter`
- Hero state: `Hero.CharacterStates.Fugitive` / `Active` switching, which `DoneButtonCondition` performs to reactivate recruited fugitives
- Events: `MobilePartyDestroyed` and `OnSessionLaunchedEvent` on [CampaignEvents](../CampaignEvents); `OnBanditPartyRecruited` is dispatched by `CampaignEventDispatcher`
- Save: the nested `BanditInteractionsCampaignBehaviorTypeDefiner` (id **70000**) registers the private enum `PlayerInteraction` as save type 1
- Bucket index: [campaign API section](../)
