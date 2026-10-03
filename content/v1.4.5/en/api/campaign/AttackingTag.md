---
title: "AttackingTag"
description: "Conversation tag: decides whether the player is currently attacking — either the PlayerEncounter has the player defending against a non-truce party, or the player's party sits in the current settlement's siege roster."
---

# AttackingTag

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Tags`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AttackingTag : ConversationTag`
**Base:** `ConversationTag`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AttackingTag.cs`

## Overview

`AttackingTag` is a **combat-state gate**. It answers "is the player attacking right now?", and the answer decides which dialogue XML lines — the "you will be destroyed", "think twice" kind — are available. The 1.4.5 implementation is an OR of two independent paths:

```csharp
if (HeroHelper.WillLordAttack())
{
    return true;
}
if (Settlement.CurrentSettlement != null && Settlement.CurrentSettlement.SiegeEvent != null)
{
    return Settlement.CurrentSettlement.Parties.Contains(Hero.MainHero.PartyBelongedTo);
}
return false;
```

Inside the dialogue layer this type carries the **"slice the line pool by immediate battlefield situation"** job. It differs from the static-identity tags such as [AseraiTag](../AseraiTag) or [ArtisanNotableTypeTag](../ArtisanNotableTypeTag): it reads **ephemeral session state** such as [PlayerEncounter](../PlayerEncounter) and [SiegeEvent](../SiegeEvent). The same line appears and disappears as encounters start and sieges begin and end, with no dialogue resource reload.

The crucial point is that **`IsApplicableTo` never uses its `character` parameter**. The tag asks about the **player's situation**, not about the conversation partner's. Using it to filter "which NPCs are in an attacking state" is a complete directional error: it returns the same answer for every NPC.

## Mental Model

Think of it as **the "does the player hold the initiative" switch**.

- **The parameter is decorative by design, not by accident.** The base [ConversationTag](../ConversationManager) demands `IsApplicableTo(CharacterObject)`, but the meaning of `allowed_tags` in dialogue XML is "may this line appear in the current conversation", and this tag asks about the player. It has to implement an interface whose argument it does not need.
- **The first path goes through `HeroHelper.WillLordAttack()`.** That static lives in the `Helpers` namespace (`Helpers/HeroHelper.cs:241`) and requires: a live `PlayerEncounter.Current`, the player on the `Defender` side, the opponent's `DoNotAttackMainPartyUntil` not in the future, the conversation target not being a captive, and the opponent party's `MapFaction` being at war with the player's. **Note it is the "defender" side** — in an encounter the player as defender is the one under attack, which is exactly the "being attacked" context.
- **The second path is the siege roster.** The current settlement has a live `SiegeEvent` and `Settlement.Parties` contains `Hero.MainHero.PartyBelongedTo`. This path does not check that the two sides are hostile; mere roster membership is enough.
- **`Settlement.CurrentSettlement` is the anchor, not the location of the conversation.** It is a static property. Chatting with a distant NPC on the world map while the current settlement happens to be under siege still satisfies this tag.
- **What happens when `Hero.MainHero.PartyBelongedTo` is null.** `Settlement.Parties.Contains(null)` does not throw, and semantically it means "party belongs to no settlement", so the result is false. This path is safe for a party-less player.

### How the neighbouring tags divide the work

| What you want to express | Tag | What it tests |
| --- | --- | --- |
| "The player is attacking" | `AttackingTag` | `WillLordAttack()` or the player is on the siege roster |
| "Only to an NPC attracted to the player" | [AttractedToPlayerTag](../AttractedToPlayerTag) | Romance model score plus marriage and war checks |
| "Only to Aserai speakers" | [AseraiTag](../AseraiTag) | Culture StringId |
| "Only to artisans" | [ArtisanNotableTypeTag](../ArtisanNotableTypeTag) | Occupation |

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `Id` | `public const string Id = "AttackingTag"` | Compile-time constant form of the identifier, usable as a `switch` case. |
| `StringId` | `public override string StringId => "AttackingTag"` | The literal written into `allowed_tags` in dialogue XML; also the key inside `ConversationManager._tags`. |
| `IsApplicableTo` | `public override bool IsApplicableTo(CharacterObject character)` | The only logic. **The `character` parameter is never read.** It tries `HeroHelper.WillLordAttack()` first, then the siege roster, and returns false if neither holds. Depends on `Settlement.CurrentSettlement`, `Hero.MainHero`, and the static [PlayerEncounter](../PlayerEncounter). |

## Examples

Pre-check the gate from a behavior. The argument is unused by the current implementation, but still pass a valid object so a future implementation cannot break you:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

public static bool AttackingLinesActive()
{
    CharacterObject anyone = Hero.MainHero.CharacterObject;
    if (anyone == null || Campaign.Current == null)
    {
        return false;
    }

    return new AttackingTag().IsApplicableTo(anyone);
}
```

Ask the conversation manager directly whether the line pool is live at this moment:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

CharacterObject talkTarget = CharacterObject.OneToOneConversationCharacter;
if (talkTarget != null && Campaign.Current != null)
{
    bool attackingLine = Campaign.Current.ConversationManager.IsTagApplicable(
        AttackingTag.StringId, talkTarget);
    Debug.Print("attacking line applicable = " + attackingLine, 0);
}
```

Reproduce the second path by hand for a UI hint, skipping the tag entirely:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

Settlement current = Settlement.CurrentSettlement;
if (current != null && current.SiegeEvent != null && Hero.MainHero.PartyBelongedTo != null)
{
    bool playerBesieging = current.Parties.Contains(Hero.MainHero.PartyBelongedTo);
    Debug.Print("player is in the siege roster of " + current.Name.ToString() + " = " + playerBesieging, 0);
}
```

## Risks and crash boundaries

- **The parameter is unused, so the direction is easy to invert.** The tag answers "is the player fighting", not "is this NPC fighting". Using it as an NPC filter yields one identical result for every NPC.
- **`Settlement.CurrentSettlement` is a static anchor.** While the player chats on the world map with a distant NPC it still points at the current settlement, so the siege path can report a false positive.
- **The siege path does not check hostility.** As long as the player's party is in `Settlement.Parties` it returns true, even when the besieger is an ally.
- **`HeroHelper.WillLordAttack()` has many preconditions.** A null `PlayerEncounter.Current` (no encounter), the player on the `Attacker` side, an opponent with `DoNotAttackMainPartyUntil` in the future, or a captive conversation target — any of these make it return false. The first path fails more often than it looks.
- **Depends on several static singletons.** `Hero.MainHero`, `Settlement.CurrentSettlement`, and [PlayerEncounter](../PlayerEncounter) are all dereferenced. Do not call at the main menu or before a load has finished.
- **State flips fast inside a session.** Battles and sieges start and end, so the verdict can change within one conversation cycle. If you cache the result, cache it only until the next conversation ends; never across frames.
- **No caching, no static fields.** The class holds no state of its own; everything comes from external static entry points.
- **Inheritance is not blocked.** `ConversationTag` is `public abstract` and this class is not `sealed`.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AttackingTag.cs` is a 24-line original-source file whose public surface is only `Id` / `StringId` / `IsApplicableTo`. Its dependency on the `Helpers` namespace shows up as `using Helpers;` on line 1 — that line is the first thing to lose when porting the file into another module, and losing it fails the build rather than failing silently.

## Dependencies

- Base class and only consumer: [ConversationManager](../ConversationManager) owns the `_tags` dictionary and calls `IsApplicableTo` from `IsTagApplicable` / `GetApplicableTagNames`
- First criterion: `HeroHelper.WillLordAttack()` in the `Helpers` namespace, which internally reads `Current`, `PlayerSide`, and `EncounteredMobileParty` off [PlayerEncounter](../PlayerEncounter) plus [FactionManager](../FactionManager)
- Second criterion: the `SiegeEvent` property and the read-only `Parties` list of [Settlement](../Settlement); `SiegeEvent` comes from the siege subsystem
- Party side: `MainHero` and `PartyBelongedTo` on [Hero](../Hero), whose party type is [MobileParty](../MobileParty) / [PartyBase](../PartyBase)
- Sibling state-dependent tag for contrast: [AttractedToPlayerTag](../AttractedToPlayerTag) also reads `Hero.MainHero`, but points the opposite way — it evaluates the conversation partner, not the player
- Bucket index: [campaign API section](../)
