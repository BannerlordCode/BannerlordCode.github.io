---
title: "ServerInfoMessage"
description: "Auto-generated class reference for ServerInfoMessage."
---
# ServerInfoMessage

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum ServerInfoMessage`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ServerInfoMessage.cs`

## Overview

`ServerInfoMessage` is the **result vocabulary of the Diamond online backend**: a flat `public enum` (`ServerInfoMessage.cs:3`) of **138 members** (`:5`-`:142`) with no explicit values, so every member is numbered from `0` (`Success`, `:5`) upward in declaration order. The file is 144 lines and contains nothing else — no methods, no attributes, no documentation comments.

The members are **not** a flat list; they are grouped by a self-evident naming convention, and the prefixes are the entire way to navigate 138 values:

| Prefix | Members | Lines | Domain |
| --- | ---: | --- | --- |
| `Success` / bare positive | 24 | `:5`-`:61`, `:73`-`:87`, `:115`-`:126` | happy paths |
| `FindGame*` | 9 | `:15`-`:23` | matchmaking rejection reasons |
| `RejoinGame*` | 3 | `:24`-`:26` | reconnect |
| `AddFriend*` / `FriendRequest*` / `RemoveFriend*` | 8 | `:27`-`:38` | friends list |
| `MustBe*` / `Invite*` / `Suggest*` / `Kick*` / `PromotePartyLeader*` / `Disband*` | 19 | `:12`, `:39`-`:61` | party administration |
| `ClanCreation*` / `SetClanInformation*` / `AddClanAnnouncement*` / `EditClanAnnouncement*` / `DeleteClanAnnouncement*` / `ChangeClan*` / `InviteClan*` / `AcceptClan*` / `DeclineClan*` / `PromoteClan*` / `RemoveClan*` | 35 | `:62`-`:102` | clan / premade-game social systems |
| `PremadeGame*` / `GetPremadeGameList*` | 8 | `:103`-`:111` | premade (private match) games |
| `ReportPlayer*` | 4 | `:112`-`:115` | moderation |
| `ChangeBannerlordID*` | 6 | `:116`-`:121` | account display name |
| `GameInvitation*` | 3 | `:123`-`:125` | direct invites |
| `Customization*` | 13 | `:130`-`:142` | cosmetics / badges / sigils |

Two members break the naming scheme and are easy to miss: `MustBeInClan` (`:62`), `MustBeClanLeader` (`:63`), `MustBePrivilegedClanMember` (`:64`) sit between the party block and the clan block, and `PromotePartyLeaderAuto` (`:61`) is the only automatic (non-requested) outcome.

## Mental Model

Think of it as **a service counter's slip dispenser**, where every slot is a stamped reason and the server hands you back the slot it stamped. You do not construct these and you do not choose them; the backend picks one and sends it to the client. Your entire job is to turn the returned enum into the right localized string and the right UI affordance.

The boundary that decides whether your mod works is that **this enum carries no payload and no severity.** There is no `IsError`, no `IsSuccess` helper, no `Description` attribute, and no grouping flag anywhere in the file. That means two questions you will want to ask have to be answered by hand: *is this a failure?* and *can the user retry?* `Success` (`:5`) means the bare string "Success" — but so do `AddFriendRequestSent` (`:28`), `InvitePartySuccess` (`:47`), `PromotePartyLeaderAuto` (`:61`), `ChangeClanSigilSuccess` (`:80`) and a dozen others. **Only one member is literally named `Success`; the other successes are named after the thing that succeeded.**

The second boundary is that **the numbers are positional and therefore fragile.** With no explicit values, reordering the enum renumbers it. If a mod persists the `int` rather than the name — in a save, a config, or a network payload — a reordering in a future version silently turns `FindGameRegionNotAvailable` into a different failure. **Always switch on the enum name, never on the integer.**

## How to use

**How to obtain it.** You receive it; you never construct one. The type lives in `TaleWorlds.MountAndBlade.Diamond` (`ServerInfoMessage.cs:1`), the assembly that holds the access-provider layer, so it arrives as the result of a Diamond access-provider call rather than from anything in the mission layer. Because it is `public`, a mod can declare a variable of the type and compare it, but there is no API on it to call.

**A typical use.** A mod that reports a backend outcome maps the single "happy path" member to success and routes everything else to a localized failure message:

```csharp
using TaleWorlds.MountAndBlade.Diamond;
using TaleWorlds.Localization;

public static TextObject DescribeServerOutcome(ServerInfoMessage message)
{
    switch (message)
    {
        case ServerInfoMessage.Success:
            return new TextObject("{=MyModOk}Done.");
        case ServerInfoMessage.PlayerNotFound:
            return new TextObject("{=MyModNoPlayer}That player no longer exists.");
        case ServerInfoMessage.FindGamePlayerCountNotAllowed:
            return new TextObject("{=MyModBadCount}That player count is not allowed.");
        case ServerInfoMessage.ChangeBannerlordIDProfanity:
            return new TextObject("{=MyModBadName}That display name is not allowed.");
        default:
            // The enum has no severity flag, so an unknown value is still a failure.
            return new TextObject("{=MyModUnknown}That request could not be completed.");
    }
}
```

**What to watch out for.** Treating any value other than `ServerInfoMessage.Success` as an error is right, but the reverse mistake is the expensive one: treating **a success-named member as a failure** because it is not spelled `Success`. The specific trap is `AddFriendRequestSent` (`:28`) — "request sent" is a success, not a rejection, and a mod that routes anything non-`Success` into an error dialog tells the user their friend request failed when it was actually delivered. The consequence is a UI that contradicts the backend on every queued action (`:28`, `:29`, `:47`, `:53`, `:60`, `:61`, `:73`, `:74`, `:77`, `:80`, `:81`, `:87`, `:115`, `:117`, `:125`, `:136`).

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Success` | `Success,` (`:5`) | The generic happy path, and the **only** member whose name is literally `Success`. Value `0`, because it is declared first and no explicit values are given. |
| `LoginMuted` | `LoginMuted,` (`:6`) | The account is muted and cannot log in. The only non-`Success` value before the party/clan blocks, so the first two members cover login alone. |
| `DestroySession*` | `DestroySessionPremadeGameCancellation` (`:7`), `DestroySessionPartyInvitationCancellation` (`:8`), `DestroySessionPartyAutoDisband` (`:9`) | Why a session was torn down. All three are cancellations rather than errors, and the third (`AutoDisband`) is the engine's own timeout action, not a user decision. |
| `PlayerNotFound` / `PlayerNotInLobby` | `PlayerNotFound,` (`:10`), `PlayerNotInLobby,` (`:11`) | Target-player lookup failures. **The second is not a subset of the first** — a player can exist and still not be in your lobby, so a mod that only handles `PlayerNotFound` will fall through its own switch on the more common case. |
| `MustBeInLobby` / `MustBeInParty` / `MustBePartyLeader` / `MustBeInClan` / `MustBeClanLeader` / `MustBePrivilegedClanMember` | `MustBeInLobby,` (`:12`), `MustBeInParty,` (`:39`), `MustBePartyLeader,` (`:40`), `MustBeInClan,` (`:62`), `MustBeClanLeader,` (`:63`), `MustBePrivilegedClanMember,` (`:64`) | The precondition family — **six "you are not in the right state" rejections.** They are the members most worth grouping in a switch, because every one means "fix your context, then retry", not "your input was wrong". |
| `NoTextGiven` / `TextTooLong` | `NoTextGiven,` (`:13`), `TextTooLong,` (`:14`) | Chat validation. The only input-length pair in the enum, and both sit immediately before the matchmaking block. |
| `FindGame*` | `FindGameBlockedFromMatchmaking` (`:15`), `FindGamePartyMemberBlockedFromMatchmaking` (`:16`), `FindGameNoGameTypeSelected` (`:17`), `FindGameDisabledGameTypesSelected` (`:18`), `FindGamePlayerCountNotAllowed` (`:19`), `FindGameNotPartyLeader` (`:20`), `FindGameNotAllPlayersReady` (`:21`), `FindGameRegionNotAvailable` (`:22`), `FindGamePunished` (`:23`) | Nine matchmaking rejections. **The `PartyMember` variant (`:16`) is the one that bites**: a party member — not the caller — is blocked or unready, so the failing player is not the person looking at the error box. |
| `RejoinGame*` | `RejoinGame,` (`:24`), `RejoinGameNotFound` (`:25`), `RejoinGameNotAllowed` (`:26`) | Reconnect outcomes. **`RejoinGame` (`:24`) is a positive outcome** despite sitting in a block that otherwise reads as failures — it means "reconnect succeeded". |
| `AddFriend*` / `FriendRequest*` / `RemoveFriend*` | `AddFriendCantAddSelf` (`:27`), `AddFriendRequestSent` (`:28`), `AddFriendRequestReceived` (`:29`), `AddFriendAlreadyFriends` (`:30`), `AddFriendRequestPending` (`:31`), `AddFriendRequestAccepted` (`:32`), `AddFriendRequestDeclined` (`:33`), `AddFriendRequestBlocked` (`:34`), `RemoveFriendSuccess` (`:35`), `FriendRequestAccepted` (`:36`), `FriendRequestDeclined` (`:37`), `FriendRequestNotFound` (`:38`) | Friends-list outcomes, **six of which are positive**: `AddFriendRequestSent`, `AddFriendRequestReceived`, `AddFriendRequestAccepted`, `RemoveFriendSuccess`, `FriendRequestAccepted`, `FriendRequestDeclined`. The declined ones are positive too — the request was processed. |
| `Invite*` (party) | `InvitePartyHasModules` (`:41`), `InvitePartyOtherPlayerHasModules` (`:42`), `InvitePartyCantInviteSelf` (`:43`), `InvitePartyOtherPlayerAlreadyInParty` (`:44`), `InvitePartyPartyIsFull` (`:45`), `InvitePartyOnlyLeaderCanInvite` (`:46`), `InvitePartySuccess` (`:47`) | Party invites. **`InvitePartyHasModules` (`:41`) is the modder's trap**: inviting fails because the two clients have different module sets, which is a *mod-compatibility* rejection that no generic error string explains. |
| `Suggest*` | `SuggestPartyMustBeInParty` (`:48`), `SuggestPartyMustBeMember` (`:49`), `SuggestPartyCantSuggestSelf` (`:50`), `SuggestPartyOtherPlayerAlreadyInParty` (`:51`), `SuggestPartySuccess` (`:52`) | "Suggest joining a party" — distinct from an invite, and it has its own membership preconditions. |
| `DisbandPartySuccess` / `Kick*` / `PromotePartyLeader*` | `DisbandPartySuccess` (`:53`), `KickPlayerOtherPlayerMustBeInParty` (`:54`), `KickPartyPlayerMustBeLeader` (`:55`), `PromotePartyLeaderOngoingClanCreation` (`:56`), `PromotePartyLeaderCantPromoteSelf` (`:57`), `PromotePartyLeaderCantPromoteNonMember` (`:58`), `PromotePartyLeaderMustBeLeader` (`:59`), `PromotePartyLeaderSuccess` (`:60`), `PromotePartyLeaderAuto` (`:61`) | Party leadership. **`PromotePartyLeaderOngoingClanCreation` (`:56`) couples party leadership to the clan system** — a rejection you cannot clear by retrying, because a clan is being created. `PromotePartyLeaderAuto` (`:61`) is the engine promoting on your behalf, not a user action. |
| `ClanCreation*` | `ClanCreationNameIsInvalid` (`:65`), `ClanCreationTagIsInvalid` (`:66`), `ClanCreationSigilIsInvalid` (`:67`), `ClanCreationCultureIsInvalid` (`:68`), `ClanCreationNotAllPlayersReady` (`:69`), `ClanCreationNotEnoughPlayers` (`:70`), `ClanCreationAlreadyInAClan` (`:71`), `ClanCreationHaveToBeInAParty` (`:72`) | Eight pre-clan validations, including three field validators (`Name`, `Tag`, `Sigil`) and one enum-valued one (`Culture`). **`ClanCreationHaveToBeInAParty` (`:72`) is a cross-system requirement**: you cannot create a clan solo. |
| `*ClanAnnouncement*` / `SetClanInformationSuccess` | `SetClanInformationSuccess` (`:73`), `AddClanAnnouncementSuccess` (`:74`), `EditClanAnnouncementNotFound` (`:75`), `EditClanAnnouncementSuccess` (`:76`), `DeleteClanAnnouncementNotFound` (`:77`), `DeleteClanAnnouncementSuccess` (`:78`) | Clan profile and announcements. **Both `NotFound` members (`:75`, `:77`) are rejections with no dedicated input-validation counterpart**, so a mod that validates the text it sends cannot predict them. |
| `ChangeClan*` | `ChangeClanSigilInvalid` (`:79`), `ChangeClanSigilSuccess` (`:80`), `ChangeClanCultureSuccess` (`:81`) | Sigil and culture changes. **Culture has no `…Invalid` counterpart here** even though `ClanCreationCultureIsInvalid` (`:68`) exists — the two paths validate differently. |
| `InviteClan*` / `AcceptClanInvitationSuccess` / `DeclineClanInvitationSuccess` / `PromoteClan*` / `RemoveClan*` | `InviteClanPlayerAlreadyInvited` (`:82`) … `RemoveClanMemberLeaderCantLeave` (`:102`) | Clan membership administration, 21 members. **`InviteClanPlayerFeatureNotSupported` (`:85`) is a capability rejection** — the target's build does not support the feature — and no other member in the enum is a capability check. |
| `PremadeGame*` / `GetPremadeGameListNotEligible` | `PremadeGameCreationCanceled` (`:103`), `PremadeGameCreationMustBeCreating` (`:104`), `PremadeGameCreationMapNotAvailable` (`:105`), `PremadeGameCreationPartyNotEligible` (`:106`), `PremadeGameCreationInvalidGameType` (`:107`), `PremadeGameJoinIncorrectPassword` (`:108`), `PremadeGameJoinGameNotFound` (`:109`), `PremadeGameJoinPartyNotEligible` (`:110`), `GetPremadeGameListNotEligible` (`:111`) | Private-match hosting and joining. **Nine members, eight failures and one positive** (`PremadeGameCreationCanceled`, `:103`). This block is the reason `DestroySessionPremadeGameCancellation` (`:7`) exists. |
| `ReportPlayer*` | `ReportPlayerGameNotFound` (`:112`), `ReportPlayerPlayerNotFound` (`:113`), `ReportPlayerServerIsUnofficial` (`:114`), `ReportPlayerSuccess` (`:115`) | Moderation. **`ReportPlayerServerIsUnofficial` (`:114`) is the only member in the whole enum that depends on which server you are talking to**, so its meaning is deployment-dependent. |
| `ChangeBannerlordID*` | `ChangeBannerlordIDFailure` (`:116`), `ChangeBannerlordIDSuccess` (`:117`), `ChangeBannerlordIDEmpty` (`:118`), `ChangeBannerlordIDTooShort` (`:119`), `ChangeBannerlordIDTooLong` (`:120`), `ChangeBannerlordIDInvalidCharacters` (`:121`), `ChangeBannerlordIDProfanity` (`:122`) | Display-name validation — **the most completely specified block in the enum**, with five distinct rejection reasons. It is also the only block with a generic `…Failure` (`:116`) alongside its specific causes. |
| `GameInvitation*` / `ChangeRegionFailed` / `ChangeGameModeFailed` | `GameInvitationCantInviteSelf` (`:123`), `GameInvitationPlayerAlreadyInGame` (`:124`), `GameInvitationSuccess` (`:125`), `ChangeRegionFailed` (`:126`), `ChangeGameModeFailed` (`:127`) | Direct game invites, plus two region/game-mode rejections that are **not invitation failures** despite sitting beside them. |
| `BattleServerKickFriendlyFire` | `BattleServerKickFriendlyFire,` (`:128`) | A dedicated-server moderation kick for friendly fire. **The only member in the enum that is a punitive action rather than a request outcome.** |
| `ChatServerDisconnectedFromRoom` | `ChatServerDisconnectedFromRoom,` (`:129`) | The only chat-transport member. Its name says *disconnected*, not *failed*, so it is a state change rather than a rejection. |
| `CustomizationServiceIsUnavailable` / `Customization*` | `CustomizationServiceIsUnavailable` (`:130`), `CustomizationNotEnoughLoot` (`:131`), `CustomizationItemIsUnavailable` (`:132`), `CustomizationItemIsFree` (`:133`), `CustomizationItemAlreadyOwned` (`:134`), `CustomizationItemIsNotOwned` (`:135`), `CustomizationChangeSigilSuccess` (`:136`), `CustomizationTroopIsNotValid` (`:137`), `CustomizationCantUseMoreThanOneForSingleSlot` (`:138`), `CustomizationCantUpdateBadge` (`:139`), `CustomizationInvalidBadge` (`:140`), `CustomizationCantDowngradeBadge` (`:141`), `CustomizationBadgeNotAvailable` (`:142`) | Cosmetics, sigils and badges — 13 members, one positive. **`CustomizationItemIsFree` (`:133`) is the inversion trap**: it is a *rejection* ("this item costs nothing, so you cannot buy it"), and a mod that pattern-matches on "Item" words or assumes free means success shows the user an error for a successful no-op. |

## Examples

Distinguish success from failure without relying on the name, by listing the positive members explicitly:

```csharp
using TaleWorlds.MountAndBlade.Diamond;

public static bool IsPositiveOutcome(ServerInfoMessage message)
{
    switch (message)
    {
        case ServerInfoMessage.Success:
        case ServerInfoMessage.AddFriendRequestSent:
        case ServerInfoMessage.AddFriendRequestReceived:
        case ServerInfoMessage.AddFriendRequestAccepted:
        case ServerInfoMessage.RemoveFriendSuccess:
        case ServerInfoMessage.FriendRequestAccepted:
        case ServerInfoMessage.FriendRequestDeclined:
        case ServerInfoMessage.InvitePartySuccess:
        case ServerInfoMessage.SuggestPartySuccess:
        case ServerInfoMessage.DisbandPartySuccess:
        case ServerInfoMessage.PromotePartyLeaderSuccess:
        case ServerInfoMessage.PromotePartyLeaderAuto:
        case ServerInfoMessage.SetClanInformationSuccess:
        case ServerInfoMessage.AddClanAnnouncementSuccess:
        case ServerInfoMessage.EditClanAnnouncementSuccess:
        case ServerInfoMessage.DeleteClanAnnouncementSuccess:
        case ServerInfoMessage.ChangeClanSigilSuccess:
        case ServerInfoMessage.ChangeClanCultureSuccess:
        case ServerInfoMessage.InviteClanSuccess:
        case ServerInfoMessage.AcceptClanInvitationSuccess:
        case ServerInfoMessage.DeclineClanInvitationSuccess:
        case ServerInfoMessage.PromoteClanLeaderSuccess:
        case ServerInfoMessage.PromoteClanOfficerSuccess:
        case ServerInfoMessage.RemoveClanOfficerSuccessFromLeader:
        case ServerInfoMessage.RemoveClanOfficerSuccessFromMember:
        case ServerInfoMessage.ReportPlayerSuccess:
        case ServerInfoMessage.ChangeBannerlordIDSuccess:
        case ServerInfoMessage.GameInvitationSuccess:
        case ServerInfoMessage.CustomizationChangeSigilSuccess:
            return true;
        default:
            return false;
    }
}
```

Group the six state-precondition rejections so they share one "fix your context" message:

```csharp
using TaleWorlds.MountAndBlade.Diamond;
using TaleWorlds.Localization;

public static TextObject DescribeServerOutcome(ServerInfoMessage message)
{
    switch (message)
    {
        case ServerInfoMessage.Success:
            return new TextObject("{=MyModOk}Done.");
        case ServerInfoMessage.MustBeInLobby:
        case ServerInfoMessage.MustBeInParty:
        case ServerInfoMessage.MustBePartyLeader:
        case ServerInfoMessage.MustBeInClan:
        case ServerInfoMessage.MustBeClanLeader:
        case ServerInfoMessage.MustBePrivilegedClanMember:
            return new TextObject("{=MyModCtx}You need to be in the right place to do that.");
        case ServerInfoMessage.ChangeBannerlordIDProfanity:
            return new TextObject("{=MyModBadName}That display name is not allowed.");
        default:
            return new TextObject("{=MyModUnknown}That request could not be completed.");
    }
}
```

Log an outcome by name so a reordered enum cannot corrupt a stored log:

```csharp
using TaleWorlds.MountAndBlade.Diamond;

Debug.Print("diamond outcome = " + outcome, 0);          // prints the member NAME
Debug.Print("diamond outcome numeric = " + (int)outcome); // never persist this
```

## Risks and crash boundaries

- **The numbers are positional.** No member has an explicit value (`:5`-`:142`), so `Success` is `0` and everything follows in declaration order. **Reordering renumbers the enum**; persisting or transmitting the `int` breaks silently. Switch on the name.
- **No severity, no helper, no metadata.** The file has no `IsError`, no `IsSuccess`, no `[Description]`. Every classification question is the caller's job.
- **Only one member is named `Success`.** Sixteen others are positive outcomes (`:28`, `:29`, `:32`, `:35`, `:36`, `:37`, `:47`, `:52`, `:53`, `:60`, `:61`, `:73`, `:74`, `:76`, `:78`, `:80`, `:81`, `:87`, `:92`, `:94`, `:115`, `:117`, `:125`, `:136`). Treating non-`Success` as failure mislabels every one of them.
- **Rejections and completions share namespaces.** `CustomizationItemIsFree` (`:133`) is a rejection; `FriendRequestDeclined` (`:37`) is a completion; `PremadeGameCreationCanceled` (`:103`) is a completion. Name-shape heuristics do not work.
- **`RejoinGame` (`:24`) is positive** and sits at the head of an otherwise-failure block.
- **`InvitePartyHasModules` (`:41`) and `InvitePartyOtherPlayerHasModules` (`:42`) are mod-compatibility rejections.** A generic "invite failed" string leaves the modder with no clue; the fix is on the module set, not the input.
- **`InviteClanPlayerFeatureNotSupported` (`:85`) is a capability check** on the *other* client's build — the only member of its kind.
- **`ReportPlayerServerIsUnofficial` (`:114`) is deployment-dependent**, so the same code path means different things on official and test servers.
- **`BattleServerKickFriendlyFire` (`:128`) is punitive, not a request outcome.** Treating it as a normal rejection would let a mod print "invite failed" after a kick.
- **`FindGamePartyMemberBlockedFromMatchmaking` (`:16`) blames someone else.** The failing party member is not the user reading the error.
- **`ClanCreationHaveToBeInAParty` (`:72`) and `PromotePartyLeaderOngoingClanCreation` (`:56`) are not retryable.** Retrying without changing the world state returns the same value forever.
- **`EditClanAnnouncementNotFound` / `DeleteClanAnnouncementNotFound` (`:75`, `:77`) have no validation counterpart**, so they cannot be pre-checked client-side.
- **Unknown values must fall through.** With 138 members and a live backend, a `default:` arm is mandatory; the type is not `[Flags]` and has no `Unknown` member.

## Cross-Version Notes

The v1.4.5 file is 144 lines and declares exactly **138 members** in one contiguous block (`:5`-`:142`) with no explicit values, no attributes and no comments. The identically named file in `bannerlord-1.3.0` and `bannerlord-1.3.15` under the same `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/` layout keeps the same positional style, and `bannerlord-1.5.3` retains the shape. Because the numbering is purely positional, **the only cross-version-safe comparison is by member name** — and because members are appended in blocks rather than sorted, a new build grows the tail of a block and shifts every later value.

## Dependencies

- Assembly: `TaleWorlds.MountAndBlade.Diamond`, the access-provider layer that returns these outcomes; the file declares nothing else and takes no dependencies of its own (`ServerInfoMessage.cs:1`-`:3`).
- The Diamond access providers that produce it: `TaleWorlds.Diamond.AccessProvider.GDK`, `TaleWorlds.Diamond.AccessProvider.GOG`, `TaleWorlds.Diamond.AccessProvider.Steam` and `TaleWorlds.Diamond.AccessProvider.Test`, each present in the v1.4.5 `Bannerlord.Source/bin` tree.
- Localization for the strings a mod maps these onto: `GameTexts` / `TextObject` in `TaleWorlds.Localization`.
- Sibling network-layer vocabulary documented alongside this page in the mission bucket: [`IMBNetwork`](../../mission/IMBNetwork) and [`IMBPeer`](../../mission/IMBPeer), which carry the in-game transport rather than the backend result codes.
- The multiplayer lobby surfaces these outcomes reach in-game: [`LobbyTauntHelper`](../../mission/LobbyTauntHelper) and [`MPLobbyVM`](../MPLobbyVM).
- Bucket index: [mission-ext API](../)
