---
title: "PortStateHelper: campaign port-state entry points"
description: "PortStateHelper is the v1.4.5 static facade for opening trade, loot, restricted, story, and fleet-management PortState screens."
---
# PortStateHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class PortStateHelper`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/PortStateHelper.cs`

## One-sentence responsibility

It builds the correctly shaped [`PortState`](../../campaign/PortState) for a campaign port workflow and pushes that state through the current [`GameStateManager`](../../core-extra/GameStateManager).

## Mental Model

`PortStateHelper` is a router, not a fleet service and not a transfer Action. Each method selects a `PortScreenModes` value, supplies owners or explicit ship lists, optionally supplies a completion callback, and then calls `GameStateManager.Current.PushState`. The helper does not itself move a `Ship`, change a `PartyBase` owner, or decide whether a port interaction is allowed.

The pushed state is a menu state. Port UI code reads `PortScreenMode`, `LeftOwner`, `RightOwner`, `LeftShips`, and `RightShips` from `PortState`; when the state is finalized, `PortState.OnFinalize` invokes the stored `OnEndAction`. A callback can therefore be the point where the surrounding encounter completes cleanup, but it is not a substitute for the Action that performs a persistent campaign mutation.

## When to use and when not to use

- Use it when a campaign workflow already has a valid `Town`, `Settlement`, `PartyBase`, or ship list and must enter one of the port screens supported by `PortState`.
- Use `OpenAsLoot` with the ships obtained by an encounter and pass the surrounding workflow's completion callback when cleanup must happen after the player leaves the screen.
- Use `OpenAsManageFleet` or `OpenAsManageOtherFleet` only when the supplied left-side ships or other party are the exact comparison side intended by the caller; the helper does not infer or validate ownership.
- Do not call these methods as a replacement for `DestroyShipAction`, ownership Actions, or a campaign model. Opening a screen and applying a campaign change are separate contracts.
- Do not construct `PortState` with its parameterless constructor. The source asserts that it must not be used; the helper's `CreateState` calls preserve the constructor arguments that the UI needs.

## Dependencies and state contract

```text
Town / Settlement / PartyBase / Ship lists
                  |
                  v
        PortStateHelper entry method
                  |
                  v
GameStateManager.Current.CreateState<PortState>
                  |
                  v
          PushState -> Port UI
                  |
                  v
          OnFinalize -> callback
```

- State carrier: [`PortState`](../../campaign/PortState) stores the mode, owners, ship lists, and optional callback. Its constructor derives owner ship lists when the helper passes owners, or preserves explicit lists for loot and fleet management.
- Stack owner: [`GameStateManager`](../../core-extra/GameStateManager) controls creation, activation, and finalization. `PushState` is a game-state stack transition and must occur on the main thread.
- Campaign inputs: [`Town`](../../campaign/Town), [`Settlement`](../../campaign/Settlement), [`PartyBase`](../../campaign/PartyBase), [`MobileParty`](../../campaign/MobileParty), and [`Ship`](../../campaign/Ship).
- Neighboring entry logic: [`MenuHelper`](../MenuHelper) and [`TownHelpers`](../TownHelpers) decide menu/query context; they do not replace this state transition.

## Port modes and public members

| Method or mode | State shape and source-confirmed meaning |
|---|---|
| `OpenAsTrade(Town town)` | Uses `town.Settlement.Party` on the left, `PartyBase.MainParty` on the right, and `PortScreenModes.TradeMode`. |
| `OpenAsLoot(MBReadOnlyList<Ship> lootShips, Action onEndAction = null)` | Uses no left owner, the main party on the right, the supplied ships on the left, the main party ships on the right, and `PortScreenModes.LootMode`; the callback is retained by `PortState`. |
| `OpenAsRestricted(Town town, TextObject restrictedReason)` | Uses the town party and main party with `PortScreenModes.Restricted`. The source never passes `restrictedReason` into `PortState`, so this parameter does not affect the resulting state in v1.4.5. |
| `OpenAsStoryMode(Settlement settlement)` | Uses the settlement as the left-side source and the main party as the right owner with `PortScreenModes.Story`. |
| `OpenAsManageFleet(MBReadOnlyList<Ship> leftShips)` | Uses the supplied list as left ships and `PartyBase.MainParty.Ships` as right ships with `PortScreenModes.Manage`; both owners are represented as null or main-party state according to the `PortState` overload used by the helper. |
| `OpenAsManageOtherFleet(PartyBase other, Action onEndAction)` | Uses `other` on the left, the main party on the right, retains the callback, and selects `PortScreenModes.ManageOther`. |

The six `PortScreenModes` values are `Story`, `Restricted`, `TradeMode`, `LootMode`, `Manage`, and `ManageOther`. They describe which Port UI workflow should consume the state; they do not by themselves authorize a transfer or persistence operation.

## Real call paths

Settlement trade begins with a real current-settlement object and passes it to the helper:

```csharp
using Helpers;
using TaleWorlds.CampaignSystem.Settlements;

Town town = Settlement.CurrentSettlement?.Town;
if (town != null)
{
    PortStateHelper.OpenAsTrade(town);
}
```

The helper then reads `town.Settlement.Party`, pairs it with `PartyBase.MainParty`, creates a `PortState` in `TradeMode`, and pushes it. The town lookup is the caller's responsibility; `OpenAsTrade` does not guard a null `Town` before dereferencing it.

The ship-loot path is visible in `PlayerEncounter.DoLootShips`:

```csharp
PortStateHelper.OpenAsLoot(ReceivedLootShips.ToMBList(), OnPlayerLootShipEnd);
```

Here `ReceivedLootShips` is the encounter's real received-ship collection and `OnPlayerLootShipEnd` is the encounter's real completion method. After the port state is finalized, that callback destroys ships that were not transferred to `PartyBase.MainParty`. This is a source call-site shape, not a permission to use a private `PlayerEncounter` field from a mod; a mod must pass its own valid `MBReadOnlyList<Ship>` acquired inside its active workflow.

`BanditInteractionsCampaignBehavior` also opens loot without a callback after converting a conversation party's ships to an `MBList<Ship>`. That path makes the ownership boundary explicit: the helper opens the screen, while the surrounding behavior performs its later party cleanup.

## Risks and lifecycle boundaries

- `OpenAsRestricted` accepts a reason but drops it. Do not tell users that passing a different `TextObject` changes the restricted screen; this helper version has no field or constructor argument for that reason.
- `GameStateManager.Current` must be the live manager and the call must run on the main thread. A cached manager or a call during teardown can push into the wrong stack or an invalid lifecycle stage.
- `Town.Settlement`, `Settlement.Party`, `PartyBase.MainParty`, and supplied ship lists must remain valid for the duration of the screen. The helper performs no null, ownership, duplicate, or liveness validation.
- `OnEndAction` runs from `PortState.OnFinalize`, not at the moment an `OpenAs` entry method returns. Do not use it as though it were synchronous, and make it safe for the state to be finalized only once by the surrounding stack lifecycle.
- The callback can perform destructive cleanup, as `PlayerEncounter` does with `DestroyShipAction`. Do not destroy or reassign the same ships before the UI has finished consuming them.
- A port screen may display or transfer data, but `PortState` itself is not a save contract. Persistent changes must follow the owning campaign Action and event path.

## Version note

This page follows the v1.4.5 `PortStateHelper.cs` and `PortState.cs` implementations. In this version `OpenAsRestricted`'s `restrictedReason` is unused and `PortState`'s parameterless constructor asserts. Treat both details as source-version contracts rather than assumptions for another Bannerlord build.

## Navigation

- [↑ API system index](../)
- [↔ ShipHelper](../ShipHelper)
- [↔ MenuHelper](../MenuHelper)
- [↔ TownHelpers](../TownHelpers)
- [Related: PortState](../../campaign/PortState)
- [Related: GameStateManager](../../core-extra/GameStateManager)
- [Related: Ship](../../campaign/Ship)
