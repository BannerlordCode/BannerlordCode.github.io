---
title: "AllianceModel"
description: "Diplomacy rule model: 14 abstract members funnelling every alliance/call-to-war judgement, cost and duration into one swappable point."
---

# AllianceModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class AllianceModel : MBGameModel<AllianceModel>`
**Base:** `MBGameModel<AllianceModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AllianceModel.cs`

## Overview

`AllianceModel` is the **single swappable point for diplomatic rules**. It abstracts away four kinds of question: whether an alliance is *possible* (`CanMakeAlliance`), whether it is *desirable* (`GetScoreOfStartingAlliance` / `GetSupportScoreOfStartingAllianceForClan`), whether joining a war is *worth it* (`GetScoreOfCallingToWar` / `GetScoreOfJoiningWar`), and what it *costs* (`GetCallToWarCost` / the two `GetInfluenceCost*`). Plus four constants (`MaxDurationOfAlliance` / `MaxDurationOfWarParticipation` / `MaxNumberOfAlliances` / `DurationForOffers`) and two diplomatic knock-on factors (`GetAllianceFactorForDeclaringWar` / `ForDeclaringPeace`).

It is the generic singleton base `MBGameModel<AllianceModel>` with **no fields and no implementations** — all 14 members are `public abstract`. The official implementation is [DefaultAllianceModel](../DefaultAllianceModel).

## Mental Model

Treat it as **the lookup entry point for the diplomacy system** — never compute political judgements yourself, ask it. Three rules to internalise:

1. **Asymmetric parameter types are the biggest trap here.** `GetScoreOfStartingAlliance`, `GetSupportScoreOfStartingAllianceForClan` and `CanMakeAlliance` take `Kingdom`, but the **third parameter of `GetScoreOfCallingToWar` and `GetScoreOfJoiningWar` is `IFaction`**, because those two must evaluate both kingdom- and clan-level actors. **Passing the wrong type fails to compile; casting past it corrupts the semantics.**

2. **Two `out TextObject reason` conventions.** The three methods carrying `bool includeReason` (`CanMakeAlliance`, `GetScoreOfStartingAlliance`, `GetSupportScoreOfStartingAllianceForClan`) null the `out` when `includeReason` is false. The two **without** that flag (`GetScoreOfCallingToWar` / `GetScoreOfJoiningWar`) **always fill their explanation**. So the latter two never hand you null, the former three do depending on what you passed.

3. **`GetProposerClanForAllianceDecision` decides who speaks for a kingdom.** It returns a [Clan](../Clan) (the official implementation picks by strength and personality). That value is stored as `ProposerClan` by [AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision) and `ProposeCallToWarAgreementDecision`, and in turn drives the proposal influence cost. **Swapping this model means swapping "who represents the realm".**

The second anchor is that **`DurationForOffers` is the lifetime of two map notices**. [AllianceOfferMapNotification](../AllianceOfferMapNotification) and [AcceptCallToWarOfferMapNotification](../AcceptCallToWarOfferMapNotification) both compute `TriggerTime` as `CampaignTime.Now + DurationForOffers` (24 hours in vanilla), while `AddCallToWarAgreement` derives `EndTime` from `MaxDurationOfWarParticipation` (42 days). **Changing `DurationForOffers` shortens both notices at once.**

The third anchor is that **`GetScoreOfJoiningWar`'s result is negated by its consumer**. In [AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision).DetermineSupport, the accept option returns `scoreOfJoiningWar` and the refuse option returns `0f - scoreOfJoiningWar`. **The method must therefore return "how good joining is", positive meaning good. A derived implementation returning "how bad it is" flips the entire vote.**

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `MaxDurationOfAlliance` | `public abstract CampaignTime MaxDurationOfAlliance { get; }` | Longest alliance duration; vanilla `CampaignTime.Days(84f)` (`DefaultAllianceModel.cs:111`). `AllianceCampaignBehavior.AddAlliance` computes `Alliance.EndTime` as `CampaignTime.Now + this`. |
| `MaxDurationOfWarParticipation` | `public abstract CampaignTime MaxDurationOfWarParticipation { get; }` | Longest call-to-war lifetime; vanilla `CampaignTime.Days(42f)` (`:113`). Also the source of `CallToWarAgreement.EndTime`. |
| `MaxNumberOfAlliances` | `public abstract int MaxNumberOfAlliances { get; }` | How many allies a realm may hold; vanilla `2` (`:115`). `DefaultAllianceModel.CanMakeAlliance` tests `kingdom.AlliedKingdoms.Count >= MaxNumberOfAlliances`. |
| `DurationForOffers` | `public abstract CampaignTime DurationForOffers { get; }` | How long a diplomatic offer stays on screen; vanilla `CampaignTime.Hours(24f)` (`:117`). **`TriggerTime` on both map notices is derived from it**, so changing it changes two notices' lifetimes. |
| `GetCallToWarCost` | `public abstract int GetCallToWarCost(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)` | What the called realm pays. **At least five call sites**: `AllianceCampaignBehavior.cs:199` and `:255`, `LordConversationsCampaignBehavior.cs:541/549/556`, and `AcceptCallToWarAgreementDecision.cs:124` (stored into `CallToWarCost` at construction). |
| `GetScoreOfStartingAlliance` | `public abstract ExplainedNumber GetScoreOfStartingAlliance(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, out TextObject explanation, bool includeDescription = false)` | The overall "should A ally with B" score. **It returns an `ExplainedNumber`, not a bare float**, so the UI can render the itemised breakdown directly. `explanation` is null when `includeDescription` is false. |
| `GetSupportScoreOfStartingAllianceForClan` | `public abstract float GetSupportScoreOfStartingAllianceForClan(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, Clan evaluatingClan, out TextObject explanation, bool includeDescription = false)` | The **per-clan** support score — same source as the previous one but finer-grained and returning a plain float. |
| `GetScoreOfCallingToWar` | `public abstract float GetScoreOfCallingToWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)` | "Should I call others to war?" **The third parameter is `IFaction`, not `Kingdom`** — a clan is a legal argument. **`reason` is always filled; there is no `includeReason` flag.** |
| `GetScoreOfJoiningWar` | `public abstract float GetScoreOfJoiningWar(Kingdom offeringKingdom, Kingdom kingdomToOfferToJoinWarWith, Kingdom kingdomToOfferToJoinWarAgainst, IFaction evaluatingFaction, out TextObject reason)` | "Should I accept the call?" **The polarity is "higher is better"** — [AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision).DetermineSupport negates it for the refuse option. A derived version returning "higher is worse" inverts the vote. |
| `GetInfluenceCostOfProposingStartingAlliance` | `public abstract int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan)` | Influence cost to propose an alliance; read by `KingdomDecision.GetProposalInfluenceCost()`. |
| `GetInfluenceCostOfCallingToWar` | `public abstract int GetInfluenceCostOfCallingToWar(Clan proposingClan)` | Influence cost to propose a call to war. [AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision).GetProposalInfluenceCost returns it directly (`:138`). |
| `CanMakeAlliance` | `public abstract bool CanMakeAlliance(Kingdom kingdom, Kingdom targetKingdom, IFaction evaluatingFaction, out TextObject reason, bool includeReason = false)` | The only "is it possible" verdict, returning a verdict plus a reason. `reason` is null when `includeReason` is false. |
| `GetAllianceFactorForDeclaringWar` | `public abstract float GetAllianceFactorForDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar)` | The knock-on factor declaring war has on allies. **Both parameters are `IFaction`.** |
| `GetAllianceFactorForDeclaringPeace` | `public abstract float GetAllianceFactorForDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)` | The mirror factor for declaring peace. |
| `GetProposerClanForAllianceDecision` | `public abstract Clan GetProposerClanForAllianceDecision(Kingdom proposerKingdom, Kingdom proposedKingdom)` | Decides which clan represents the realm. **The result is stored as the decision's `ProposerClan` and therefore drives the influence cost** — swapping this model swaps "who speaks for the realm". |

## Examples

Read the diplomacy constants (all from the official `DefaultAllianceModel`):

```csharp
AllianceModel model = Campaign.Current.Models.AllianceModel;
Debug.Print("max alliance days = " + model.MaxDurationOfAlliance.ToDays, 0);
Debug.Print("max war participation days = " + model.MaxDurationOfWarParticipation.ToDays, 0);
Debug.Print("max allies = " + model.MaxNumberOfAlliances, 0);
Debug.Print("offer window hours = " + model.DurationForOffers.ToHours, 0);
```

Test whether two realms may ally, and feed the reason straight into UI — `includeReason` decides whether the `out` is null:

```csharp
Kingdom mine = Hero.MainHero.MapFaction as Kingdom;
Kingdom theirs = Kingdom.All.Find((Kingdom k) => k.StringId == "empire");
TextObject reason;
bool allowed = Campaign.Current.Models.AllianceModel.CanMakeAlliance(mine, theirs, Hero.MainHero.MapFaction, out reason, true);
Debug.Print("can ally = " + allowed + " reason = " + reason, 0);
```

Price a call to war and get a readable explanation — both `GetScore*` methods always fill their `out`:

```csharp
Kingdom caller = Clan.PlayerClan.Kingdom;
Kingdom target = Kingdom.All.Find((Kingdom k) => k.StringId == "battania");
int cost = Campaign.Current.Models.AllianceModel.GetCallToWarCost(caller, caller, target);
TextObject why;
float score = Campaign.Current.Models.AllianceModel.GetScoreOfCallingToWar(caller, caller, target, Clan.PlayerClan, out why);
Debug.Print("cost = " + cost + " score = " + score + " why = " + why, 0);
```

Read the overall alliance score — note the return type is `ExplainedNumber`, whose `.ResultNumber` is the clamped float:

```csharp
ExplainedNumber explained = Campaign.Current.Models.AllianceModel.GetScoreOfStartingAlliance(
    Clan.PlayerClan.Kingdom, Kingdom.All[0], out TextObject explanation, true);
Debug.Print("score = " + explained.ResultNumber + " explanation = " + explanation, 0);
```

## Risks and crash boundaries

- **Abstract, zero implementations.** All 14 members are `public abstract` with **not a single default**. A derived class must implement every one of them or fail to compile.
- **`IFaction` and `Kingdom` are mixed.** `GetScoreOfCallingToWar` / `GetScoreOfJoiningWar` take `IFaction` third (a clan is legal), while `GetScoreOfStartingAlliance` / `CanMakeAlliance` take `Kingdom`. **Passing a `Clan` to a `Kingdom` parameter does not compile; casting past it dereferences null.**
- **Two `out` conventions.** The three methods with `bool includeReason` null the `out TextObject` when it is false; `GetScoreOfCallingToWar` and `GetScoreOfJoiningWar` **have no such flag and never return null**. Mixing them up NREs.
- **The polarity of `GetScoreOfJoiningWar` cannot be inverted.** The decision layer negates it to express a refusal vote. **A derived implementation returning "higher is worse" flips the entire election** — a silent failure that never crashes.
- **`GetScoreOfStartingAlliance` returns `ExplainedNumber`, not float.** Read `.ResultNumber` for the clamped number; treating it as a float fails to compile. Note `ResultNumber` is clamped while `BaseNumber` and the `Lines` list are not.
- **`DurationForOffers` is shared by two map notices.** Changing it changes the lifetime of both [AllianceOfferMapNotification](../AllianceOfferMapNotification) and [AcceptCallToWarOfferMapNotification](../AcceptCallToWarOfferMapNotification) — **one edit, two UIs**.
- **`GetCallToWarCost` has at least five call sites**, including dialogue (`LordConversationsCampaignBehavior.cs:541/549/556` gates a button on it). **Changing its value changes map notice wording, kingdom decision wording and the conversation threshold simultaneously.**
- **Replacement is whole-class replacement.** `MBGameModel<AllianceModel>` is a generic singleton base, so swapping it means your implementation covers **all 14 members**. **Do not try to override a single number.**
- **Pure computation, no side effects.** Apart from the `out` parameters no member mutates game state, so it is safe to call repeatedly from UI and AI decisions.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AllianceModel.cs` is 37 lines with **14 abstract members, zero fields and zero implementations**. The 1.4.6 file of the same name exposes an identical public surface, member for member.

The official implementation [DefaultAllianceModel](../DefaultAllianceModel) supplies all 14 overrides across `DefaultAllianceModel.cs:111`–`:459`, with key defaults: `MaxDurationOfAlliance => CampaignTime.Days(84f)`, `MaxDurationOfWarParticipation => CampaignTime.Days(42f)`, `MaxNumberOfAlliances => 2`, `DurationForOffers => CampaignTime.Hours(24f)`.

## Dependencies

- Base: `MBGameModel<AllianceModel>` at `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MBGameModel.cs`, the generic singleton registration mechanism; reached as `Campaign.Current.Models.AllianceModel`.
- Official implementation: [DefaultAllianceModel](../DefaultAllianceModel), overriding all 14 across `DefaultAllianceModel.cs:111`–`:459`.
- Payload and outputs: `Kingdom` / `Clan` / `IFaction` across three hierarchy levels, plus [ExplainedNumber](../ExplainedNumber) and [TextObject](../TextObject) as return/out types.
- Consumer one: [AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision) uses `GetCallToWarCost` (`:124`), `GetInfluenceCostOfCallingToWar` (`:138`) and `GetScoreOfJoiningWar` (`:278`).
- Consumer two: [AllianceCampaignBehavior](../AllianceCampaignBehavior) uses `GetCallToWarCost` (`:199`, `:255`), `DurationForOffers` (both notices' `TriggerTime`) and `MaxDurationOfAlliance` (`AddAlliance`'s `EndTime`).
- Consumer three: [LordConversationsCampaignBehavior](../LordConversationsCampaignBehavior) gates a dialogue button on `GetCallToWarCost` (`:541`/`:549`/`:556`).
- Decision side: `ProposeCallToWarAgreementDecision` in the same folder, plus [KingdomDecision](../KingdomDecision)'s `GetProposalInfluenceCost` / `DetermineSupport`.
- Time type: [CampaignTime](../CampaignTime) with `Days` / `Hours` / `ToDays` / `ToHours` (`ToHours` returns a `double`).
