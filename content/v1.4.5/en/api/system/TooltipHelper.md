---
title: "TooltipHelper"
description: "TooltipHelper selects localized Send Troops text from the live map-event or siege side context without owning UI state."
---
# TooltipHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class TooltipHelper`  
**Base:** no explicit base class  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/TooltipHelper.cs`

## One-sentence responsibility

It maps `MapEvent.PlayerMapEvent` simulation context or `PlayerSiege.PlayerSide` to a `GameTexts`-resolvable `TextObject` for the map-encounter and siege Send Troops menus; it does not create tooltip controls or mutate battle or siege state.

## Mental Model

This is a **text adapter whose static methods live on a normal class**. The source declares `public class`, but both public entries are `static`; callers do not need, and should not create, a `new TooltipHelper()`. The methods read a valid map-event or siege context, select a `str_simulation_tooltip` variation, and return an unresolved `TextObject`.

The map-event entry reads `MapEvent.PlayerMapEvent.SimulationContext`. Only Village, NavalRaid, RiverCrossingBattle, and Siege contexts receive an additional `Attacker` or `Defender` suffix. The siege entry selects `SiegeAttacker` or `SiegeDefender` from `PlayerSiege.PlayerSide`. TooltipHelper therefore maps live state to a localization key; it does not decide whether troops may be sent, whether a party has enough men, or whether a battle can continue.

## When to use and when not to use

- **Use it:** when the map encounter menu has a valid `MapEvent.PlayerMapEvent` and needs a Send Troops tooltip for the current simulation context; call `GetSendTroopsPowerContextTooltipForMapEvent`.
- **Use it:** when the siege menu is inside an active `PlayerSiege` flow and needs the attacker/defender Send Troops tooltip; call `GetSendTroopsPowerContextTooltipForSiege`.
- **Do not use it:** from the main menu, before Campaign initialization, without a map event, or outside the active siege phase. Both methods read static runtime context directly and do not provide a no-context fallback.
- **Do not use it:** to infer battle side, combat capability, or menu enablement from the returned text. [MapEvent](../../campaign/MapEvent), siege behavior, and menu conditions own those decisions; the tooltip is presentation output.
- **Do not use it:** as persistent data or as an already rendered string. Keep the `TextObject` inside the current UI lifecycle and let the localization system resolve it.

## Dependencies

```text
MapEvent.PlayerMapEvent.SimulationContext
  -> GetSendTroopsPowerContextTooltipForMapEvent
  -> GameTexts.FindText("str_simulation_tooltip", variation)

PlayerSiege.PlayerSide
  -> GetSendTroopsPowerContextTooltipForSiege
  -> GameTexts.FindText("str_simulation_tooltip", SiegeAttacker/Defender)
```

| Dependency | Role and timing |
| --- | --- |
| [MapEvent](../../campaign/MapEvent) | The map entry reads `PlayerMapEvent` simulation context and player side; call it while the map encounter menu is still live. |
| [PlayerSiege](../../campaign/PlayerSiege) | The siege entry reads `PlayerSide` and selects `SiegeAttacker` or `SiegeDefender`. |
| [BattleSideEnum](../../core-extra/BattleSideEnum) | Describes the player's siege side; it is an input to text selection, not persistent tooltip state. |
| [TextObject](../../localization/TextObject) and `GameTexts` | Provide the unresolved localized object; menu arguments and the UI text system perform final display. |
| [MenuHelper](../MenuHelper) and siege behavior | The original consumers assign the returned `TextObject` to `args.Tooltip` after encounter/siege checks; they own enablement and specific failure messages. |

## Public entries

| Entry | Source behavior | Boundary |
| --- | --- | --- |
| `GetSendTroopsPowerContextTooltipForMapEvent()` | Reads `MapEvent.PlayerMapEvent.SimulationContext`, converts it to text, appends `Attacker`/`Defender` for Village, NavalRaid, RiverCrossingBattle, and Siege based on the player's MissionSide, then calls `GameTexts.FindText("str_simulation_tooltip", text)`. | Use only for an existing player map event; the method itself does not check whether `PlayerMapEvent` is null. |
| `GetSendTroopsPowerContextTooltipForSiege()` | Reads `PlayerSiege.PlayerSide`, selects `SiegeAttacker` or `SiegeDefender`, and returns the corresponding `str_simulation_tooltip` object. | Use only in an active siege menu; it does not check siege state or troop eligibility. |

Both entries are `static`. The concrete type has no additional state and is not a service acquired from `Campaign.Current`.

## Real example: map-encounter tooltip

The map menu should acquire the live `MapEvent.PlayerMapEvent` before calling the helper. The caller owns this null check because the source method directly reads `SimulationContext`:

```csharp
using Helpers;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.Localization;

public static TextObject TryGetMapEventTroopTooltip()
{
    MapEvent playerMapEvent = MapEvent.PlayerMapEvent;
    if (playerMapEvent == null)
    {
        return null;
    }

    return TooltipHelper.GetSendTroopsPowerContextTooltipForMapEvent();
}
```

The original `MenuHelper` assigns this result to the menu argument's `Tooltip` after checking that the encountered party can be attacked. If the menu has switched to another event, do not reuse the old `TextObject`.

## Real example: siege tooltip

When the siege behavior has established `PlayerSiege`, the caller can request the localized object. The side check makes the required attacker/defender phase explicit:

```csharp
using Helpers;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public static TextObject TryGetSiegeTroopTooltip()
{
    BattleSideEnum side = PlayerSiege.PlayerSide;
    if (side != BattleSideEnum.Attacker && side != BattleSideEnum.Defender)
    {
        return null;
    }

    return TooltipHelper.GetSendTroopsPowerContextTooltipForSiege();
}
```

`SiegeEventCampaignBehavior` uses the same entry to populate `args.Tooltip`, then overrides it with a more specific disabled reason when the player commands no troops or lacks morale. Do not treat TooltipHelper's result as a replacement for those eligibility checks.

## Risks and save boundaries

- **Static context:** `MapEvent.PlayerMapEvent` and `PlayerSiege.PlayerSide` are runtime static state and may be null or stale while a menu changes, a battle ends, or a save is loading. Do not store them in campaign behavior fields.
- **No internal null guard:** `GetSendTroopsPowerContextTooltipForMapEvent` dereferences `PlayerMapEvent`, and the siege entry reads `PlayerSiege.PlayerSide` directly. Calling at the wrong phase can produce a null reference or an inapplicable tooltip.
- **Localization boundary:** `GameTexts.FindText` returns a `TextObject`, not a final string. Do not display the key as text or cache a resolved value across languages.
- **Presentation versus logic:** the selected variation describes simulation context and side. It does not validate troop counts, morale, battle phase, or retreat permission; `MenuHelper`, siege behavior, and the MapEvent flow still perform those checks.
- **Save boundary:** the class has no save fields and no Campaign lifecycle. Persistent mod data belongs in a Campaign Behavior with stable `SyncData`, not in a tooltip or MapEvent reference.

## Version note

This page follows v1.4.5 `Helpers/TooltipHelper.cs` and its actual call sites in `MenuHelper` and `SiegeEventCampaignBehavior`. Recheck `PowerCalculationContext` members, the valid phases of `PlayerSiege.PlayerSide`, and the `str_simulation_tooltip` localization variations for another version.

## Navigation

- ↑ Parent: [System API](../)
- ↔ Siblings: [MapEventHelper](../MapEventHelper) · [MenuHelper](../MenuHelper) · [HeroHelper](../HeroHelper)
- Related: [MapEvent](../../campaign/MapEvent) · [PlayerSiege](../../campaign/PlayerSiege) · [BattleSideEnum](../../core-extra/BattleSideEnum) · [TextObject](../../localization/TextObject)
