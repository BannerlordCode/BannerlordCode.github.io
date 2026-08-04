---
title: "EquipmentHelper"
description: "Copies a selected Equipment loadout into the matching Hero equipment set."
---
# EquipmentHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class EquipmentHelper`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/EquipmentHelper.cs`

## One-sentence responsibility

`EquipmentHelper` copies the item and modifier from a source [Equipment](../../core-extra/Equipment) value into the corresponding equipment set on a [Hero](../../campaign/Hero).

## Mental Model

This is a destination mutator, not an equipment-selection model and not an inventory operation. The caller supplies the source `Equipment`; the helper chooses the hero destination from the source type, then writes all 12 slots. The source type is the routing signal:

- `IsStealth` routes to `hero.StealthEquipment`.
- Otherwise, `IsCivilian` routes to `hero.CivilianEquipment`.
- Every other type, including `EquipmentType.Battle`, routes to `hero.BattleEquipment` because the v1.4.5 implementation tests `!equipment.IsCivilian` after the stealth branch.

The helper has no return value and does not ask `EquipmentSelectionModel` for a loadout. Selection belongs to [EquipmentSelectionModel](../../campaign/EquipmentSelectionModel); copying belongs here.

## When to use and when not to use

- **Use it:** after a Campaign model or another source-backed flow has selected an `Equipment` value for a hero.
- **Use it:** when a behavior must replace a hero's battle, civilian, or stealth set while preserving the source item modifiers.
- **Do not use it:** to add items to a party roster. The method writes `Hero` equipment slots directly.
- **Do not use it:** to choose a loadout. The helper does not apply culture, age, clan, or model policy.
- **Do not pass an unrelated `EquipmentType`:** a non-civilian, non-stealth source is treated as battle equipment.

## Public entry

### `AssignHeroEquipmentFromEquipment`

```csharp
public static void AssignHeroEquipmentFromEquipment(Hero hero, Equipment equipment)
```

The method selects the destination from `equipment.IsStealth` and `equipment.IsCivilian`, then loops from slot `0` through slot `11`. Each destination slot receives `new EquipmentElement(equipment[i].Item, equipment[i].ItemModifier)`. The return value is `void`, so the updated state is observed through `hero.BattleEquipment`, `hero.CivilianEquipment`, or `hero.StealthEquipment`.

## Real Campaign flow

The stock aging behavior obtains battle and civilian equipment from `Campaign.Current.Models.EquipmentSelectionModel`, then calls this helper for the hero. A mod behavior can follow the same source-backed shape when it intentionally refreshes a hero's equipment:

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

Hero hero = Hero.MainHero;
Equipment battleEquipment = Campaign.Current.Models.EquipmentSelectionModel
    .GetEquipmentForHeroComeOfAge(hero, Equipment.EquipmentType.Battle);
Equipment civilianEquipment = Campaign.Current.Models.EquipmentSelectionModel
    .GetEquipmentForHeroComeOfAge(hero, Equipment.EquipmentType.Civilian);

if (battleEquipment != null)
{
    EquipmentHelper.AssignHeroEquipmentFromEquipment(hero, battleEquipment);
}

if (civilianEquipment != null)
{
    EquipmentHelper.AssignHeroEquipmentFromEquipment(hero, civilianEquipment);
}
```

This is a mutation of the hero's current equipment sets. A real behavior should run it at its intended Campaign transition, rather than on every tick or in a UI refresh.

## Dependencies and ownership

- [Hero](../../campaign/Hero) owns the destination sets: battle, civilian, and stealth equipment.
- [Equipment](../../core-extra/Equipment) exposes `IsStealth`, `IsCivilian`, the 12-slot indexer, and the source `EquipmentElement` values.
- [EquipmentElement](../../core-extra/EquipmentElement) is rebuilt with only `Item` and `ItemModifier` by this helper; its cosmetic item and quest-item flag are not copied by this constructor call.
- [EquipmentSelectionModel](../../campaign/EquipmentSelectionModel) supplies policy-selected input values to Campaign behaviors.
- `AgingCampaignBehavior`, `InitialChildGenerationCampaignBehavior`, `NPCEquipmentsCampaignBehavior`, and `CompanionRolesCampaignBehavior` are stock consumers that choose the transition first and call the helper second.

## Risks and save boundaries

- The helper writes directly into the selected hero set. Calling it can replace existing items in all 12 slots, including weapon, armor, horse, and harness slots.
- The source `Equipment` must be non-null and its slots must be suitable for the destination; the helper does not perform a high-level null or policy check before indexing and assigning.
- Because the implementation constructs `EquipmentElement(item, itemModifier)`, cosmetic item and quest-item metadata from the source element are not preserved by this copy operation.
- The helper does not persist a separate copy. The resulting hero equipment is part of hero Campaign state; save compatibility and timing remain the responsibility of the owner behavior.
- Do not confuse this operation with `Equipment.FillFrom`, which can copy equipment into another `Equipment` object and can optionally copy the source equipment type.

## Version note

This page follows v1.4.5 `EquipmentHelper.cs`. The public class contains one static method; selection rules and transition timing remain in the model and Campaign behavior callers.

## Navigation

- [↑ API system index](../)
- [Related: Equipment](../../core-extra/Equipment)
- [Related: EquipmentElement](../../core-extra/EquipmentElement)
- [Related: Hero](../../campaign/Hero)
- [Related: EquipmentSelectionModel](../../campaign/EquipmentSelectionModel)
