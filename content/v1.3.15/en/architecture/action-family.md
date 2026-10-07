---
title: "Campaign Action Family — the *Action.Apply Unified Entry Point"
description: "The single entry point for every campaign-layer state change: how the 62 *Action static classes mutate data and broadcast events, and how Actions cascade into one another."
---

# Campaign Action Family

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** Architecture topic page — covers the 62 `*Action` entry classes under `TaleWorlds.CampaignSystem.Actions`  
**Source files:** `TaleWorlds.CampaignSystem/Actions/`  
**Line-number basis:** every `X.cs:N` on this page refers to the **v1.3.15** source tree (`bannerlord-1.3.15/`).

> Section schema: this page mirrors the zh twin's canonical seven sections (概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航).

## Overview

At the campaign layer, almost every "world state change" — giving gold, making enemies, killing a hero, destroying a party, replacing a ruler — is not done by the caller mutating a field directly. It is funnelled into one static entry point: the `*Action` class under the `TaleWorlds.CampaignSystem.Actions` namespace. You call its `ApplyXxx`; it does two things: it makes the data change correctly (clamping, gating, branching on giver/recipient type), and then it broadcasts a campaign event. Downstream systems — UI, quests, AI, save — therefore never need to know "who changed the data"; they only subscribe to events. This page covers the family's 62 entry classes and explains its unified shape, why you must go through it, and how Actions cascade into one another.

Family size (recomputable with these commands):

- `ls TaleWorlds.CampaignSystem/Actions/*.cs | wc -l` → **62**
- `grep -h "public static void Apply" TaleWorlds.CampaignSystem/Actions/*.cs | wc -l` → **172**
- `grep -h "static void ApplyInternal" TaleWorlds.CampaignSystem/Actions/*.cs | wc -l` → **54**
- `grep -l "public static class" TaleWorlds.CampaignSystem/Actions/*.cs | wc -l` → **58**

## Mental Model

**① The family's unified shape.** Of the 62 files, 58 are `public static class`: no instance state, no constructor, not inheritable. The public surface is a set of static `ApplyXxx` methods (172 across the family); the real work happens in a private `ApplyInternal` (54 across the family). The 4 exceptions: `ChangePlayerCharacterAction` / `ChangeRulingClanAction` / `RaftStateChangeAction` are plain classes, and `EndCaptivityDetail` is an enum/helper type, not an Action entry point. When you see `ApplyInternal`, know that the public overloads are just "argument-picking" shells — the semantics all live in that one place.

**② Why you must not mutate fields directly.** `Hero.cs:1597` — `Gold` has a public setter whose body is only `this._gold = MathF.Max(0, value)`; `SetPersonalRelation` in the same file is the same shape. A direct assignment compiles and really does change the number, but it **only clamps and fires no event** ⇒ the economy event chain breaks and UI / quests / models never get notified. That is exactly why `GiveGoldAction.cs:12` exists: inside those lines it binds "write the balance" together with `CampaignEventDispatcher.Instance.OnHeroOrPartyTradedGold` (`GiveGoldAction.cs:42`).

**③ The Action → event chain.** The chain is Action → `CampaignEventDispatcher.Instance.OnXxx` → `CampaignEvents.XxxEvent` → Behavior subscriber. Three file:line anchors: `CampaignEventDispatcher.cs:299` (`OnHeroOrPartyTradedGold`), `CampaignEvents.cs:501` (`HeroRelationChanged`), `CampaignEvents.cs:1285` (`HeroKilledEvent`). `CampaignEvents.cs:1294` — `OnHeroKilled` is the subscriber-side forwarding implementation, and `CharacterRelationCampaignBehavior.cs:31` is a real subscription sample.

**④ Actions call other Actions, forming a cascade.** `BeHostileAction.cs:194` also calls `ChangeRelationAction.ApplyPlayerRelation(..., -10, ...)` when war is declared; `KillCharacterAction.cs:91` / `KillCharacterAction.cs:125` / `KillCharacterAction.cs:146` call `ChangeRulingClanAction.Apply` / `DestroyPartyAction.Apply` / `DestroyClanAction.Apply` respectively. So **do not call the same Action again from inside an event callback** — it re-fires down the same chain, at best double-applying effects, at worst recursing.

**⑤ When not to use an Action.** Read-only computation, pure queries, and changes to local transient state (say, a temporary UI variable) should not go through an Action. An Action costs "mutate + broadcast"; calling it just to read is pure waste and adds noise to the event stream.

**⑥ What goes wrong when you bypass it.** Bypassing an Action = no event fired = other systems diverge: gold is given but the quest never triggers, a hero dies but the clan never gets a new ruler. And it **does not crash immediately** — someday a UI number stops matching, or a quest can never complete. This is the hardest class of bug to track down.

## How To Use

1. **Find the Action by semantics first.** Gold → `GiveGoldAction`; relations → `ChangeRelationAction`; death → `KillCharacterAction`. The naming is `Verb + Noun + Action`; do not roll your own.
2. **Read its public `ApplyXxx` overloads and pick the one matching your "giver/recipient" or "cause".** For gold use `GiveGoldAction.cs:46` — `ApplyBetweenCharacters`; for killing, pick by cause: `KillCharacterAction.cs:180` (old age) / `KillCharacterAction.cs:192` (battle) / `KillCharacterAction.cs:198` (murder) / `KillCharacterAction.cs:210` (execution) / `KillCharacterAction.cs:222` (silent removal).
3. **Keep `disableNotification=false` / `showNotification=true` when you want the notification.** Defaults differ per overload: `KillCharacterAction.cs:222` defaults to `showNotification=false`, so do not assume.
4. **Do not call the same Action again from inside an event callback.** It cascades down the same chain (see Mental Model ④).
5. **To observe the result, subscribe to `CampaignEvents` from a Behavior.** See `CharacterRelationCampaignBehavior.cs:31`: `AddNonSerializedListener` hooks the method up to `CampaignEvents.HeroRelationChanged`.

## Key Members

Family size: **62 files / 58 static classes / 172 `ApplyXxx` / 54 `ApplyInternal`** (commands in Overview).

| Symbol | file:line | What it does |
| --- | --- | --- |
| `GiveGoldAction` | `GiveGoldAction.cs:9` | Gold-transfer family entry point: a `public static class` whose public surface is the single `ApplyBetweenCharacters` overload |
| `GiveGoldAction.ApplyInternal` | `GiveGoldAction.cs:12` | Where the work happens: clamps with `MathF.Min(giverHero.Gold, goldAmount)` to prevent overspend, writes the balances by giver/recipient type, then fires `OnHeroOrPartyTradedGold` |
| `GiveGoldAction.ApplyBetweenCharacters` | `GiveGoldAction.cs:46` | Its 46-line body is a single line forwarding to `ApplyInternal`; `disableNotification=false` shows the quick information |
| `ChangeRelationAction` | `ChangeRelationAction.cs:8` | Relation-change family entry point: a `public static class` with three public overloads for "toward the player / between two heroes / emissary" |
| `ChangeRelationAction.ApplyInternal` | `ChangeRelationAction.cs:11` | Reads the current relation, adds the change, `MBMath.ClampInt(num, -100, 100)`, then fires `OnHeroRelationChanged` |
| `ChangeRelationAction.ApplyPlayerRelation` | `ChangeRelationAction.cs:30` | Changes the "player vs. hero" relation; `affectRelatives` can cascade to relatives |
| `ChangeRelationAction.ApplyRelationChangeBetweenHeroes` | `ChangeRelationAction.cs:36` | Changes the relation between any two heroes; the overload mods use most |
| `ChangeRelationAction.ApplyEmissaryRelation` | `ChangeRelationAction.cs:42` | Changes the emissary's relation to a target hero, for diplomacy/negotiation flows |
| `KillCharacterAction` | `KillCharacterAction.cs:19` | Death family entry point: a `public static class` whose 11 `ApplyByXxx` overloads share one `ApplyInternal` |
| `KillCharacterAction.ApplyInternal` | `KillCharacterAction.cs:22` | Gates on `victim.CanDie(actionDetail)` (unless `isForced`), then fires `OnBeforeMainCharacterDied` (`KillCharacterAction.cs:58`) / `OnBeforeHeroKilled` (`KillCharacterAction.cs:61`) / `OnHeroKilled` (`KillCharacterAction.cs:149`) |
| `KillCharacterAction.ApplyByOldAge` | `KillCharacterAction.cs:180` | Death of old age: no killer |
| `KillCharacterAction.ApplyByBattle` | `KillCharacterAction.cs:192` | Death in battle: killer is the winning hero |
| `KillCharacterAction.ApplyByMurder` | `KillCharacterAction.cs:198` | Murder: killer may be null |
| `KillCharacterAction.ApplyByExecution` | `KillCharacterAction.cs:210` | Execution: `isForced` can bypass the `CanDie` gate |
| `KillCharacterAction.ApplyByRemove` | `KillCharacterAction.cs:222` | Silent removal: defaults to `showNotification=false`, `isForced=true` |
| `KillCharacterAction.KillCharacterActionDetail` | `KillCharacterAction.cs:22` | The cause-of-death enum: the only difference between the 11 `ApplyByXxx` overloads is which value they pass — one action, different causes |
| `Hero.Gold` | `Hero.cs:1597` | Has a public setter, but the body only does `MathF.Max(0, value)` and fires no event — do not assign directly |
| `Hero.SetPersonalRelation` | see above (`Hero.cs`) | Same shape: assigning the relation value fires no event; relation changes must go through `ChangeRelationAction` |
| `CampaignEventDispatcher.OnHeroOrPartyTradedGold` | `CampaignEventDispatcher.cs:299` | Gold event dispatch point, called inside `GiveGoldAction` |
| `CampaignEventDispatcher.OnHeroKilled` | `CampaignEventDispatcher.cs:689` | Death event dispatch point |
| `CampaignEventDispatcher.OnBeforeHeroKilled` | `CampaignEventDispatcher.cs:699` | Pre-death dispatch point, for Behaviors that prevent/rewrite the death |
| `CampaignEvents.HeroRelationChanged` | `CampaignEvents.cs:501` | Relation event declaration; Behaviors subscribe to it |
| `CampaignEvents.HeroKilledEvent` | `CampaignEvents.cs:1285` | Death event declaration |
| `CampaignEvents.OnHeroKilled` | `CampaignEvents.cs:1294` | Subscriber-side forwarding implementation of the event |
| `CharacterRelationCampaignBehavior` subscription | `CharacterRelationCampaignBehavior.cs:31` | Real subscription sample: `AddNonSerializedListener` hooks `OnHeroRelationChanged` to `CampaignEvents.HeroRelationChanged` |
| Cascade inside `BeHostileAction` | `BeHostileAction.cs:194` | Action calling Action: declaring war also runs `ChangeRelationAction.ApplyPlayerRelation(..., -10, ...)` |
| Cascade inside `KillCharacterAction` | `KillCharacterAction.cs:91` | After a king dies, calls `ChangeRulingClanAction.Apply` to replace the ruler |
| Cascade inside `KillCharacterAction` | `KillCharacterAction.cs:125` | Calls `DestroyPartyAction.Apply` to remove the now-leaderless party |
| Cascade inside `KillCharacterAction` | `KillCharacterAction.cs:146` | Calls `DestroyClanAction.Apply` to destroy the clan |

## Real Example

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

/// <summary>
/// Demo: every "change the campaign state" call goes through the *Action.ApplyXxx
/// unified entry point; events are broadcast inside the Action, and the Behavior
/// only subscribes and observes.
/// </summary>
public class ActionFamilyDemoBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // Subscribe to the death event: KillCharacterAction broadcasts it internally
        CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this,
            new Action<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool>(this.OnHeroKilled));
    }

    public override void SyncData(IDataStore dataStore) { }

    public void RunDemo()
    {
        Hero giver = Hero.FindFirst(h => h.IsHumanPlayerCharacter);
        Hero recipient = Hero.FindFirst(h => h.IsAlive && h != giver);
        Hero victim = Hero.FindFirst(h => h.IsAlive && h != giver && h != recipient);

        // 1) Gold: ApplyBetweenCharacters → ApplyInternal → clamp + OnHeroOrPartyTradedGold
        GiveGoldAction.ApplyBetweenCharacters(giver, recipient, 500);

        // 2) Relation: ApplyRelationChangeBetweenHeroes → ApplyInternal → ClampInt(-100,100) + OnHeroRelationChanged
        ChangeRelationAction.ApplyRelationChangeBetweenHeroes(giver, recipient, -20);

        // 3) Death: ApplyByExecution → ApplyInternal → CanDie gate + OnBeforeHeroKilled / OnHeroKilled
        KillCharacterAction.ApplyByExecution(victim, giver);
    }

    private void OnHeroKilled(Hero victim, Hero killer,
        KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
    {
        // Observe only; do not call KillCharacterAction here — it would cascade and re-fire the same event
    }
}
```

## See Also
- [campaign-event-system](../campaign-event-system)
- [campaign-events](../campaign-events)
- [GiveGoldAction class page](../../api/campaign-ext/GiveGoldAction)
- [ChangeRelationAction class page](../../api/campaign-ext/ChangeRelationAction)
- [KillCharacterAction class page](../../api/campaign-ext/KillCharacterAction)
- [Hero class page](../../api/campaign/Hero)

## Navigation
- ↑ Parent: [..](../)
- ↔ Sibling: [GameModel decorator](../gamemodel-decorator) | [UI three layers](../ui-three-layers) | [Save object graph](../save-object-graph) | [campaign-event-system](../campaign-event-system)
- Related class pages: [CampaignEvents](../../api/campaign-ext/CampaignEvents) | [CampaignEventDispatcher](../../api/campaign-ext/CampaignEventDispatcher)
