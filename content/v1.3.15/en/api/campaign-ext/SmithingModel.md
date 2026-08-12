---
title: "SmithingModel"
description: "A replaceable rule model that converts weapon parts, weapon designs, materials, and a hero's crafting skills into the difficulty, material and energy costs, skill XP, and part research points used for smithing, smelting, and refining."
---
# SmithingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SmithingModel : MBGameModel<SmithingModel>`  
**Base:** `MBGameModel<SmithingModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents.DefaultSmithingModel`

## Overview

It converts weapon parts, weapon designs, raw materials, and a hero's crafting skill and perks into the numbers that represent "difficulty, material/gold cost, energy cost, skill XP, and part research points" — then hands those numbers to the smithing UI and the smithing/smelting/refining behaviors. It only computes and returns these values; it never creates, grants, or spawns any item, and it never pushes the finished product into a party.

## Mental Model

This is the rule layer of the smithing system. Whenever the smithing UI, the smelting UI, or any smithing behavior needs a number, they all ask `Campaign.Current.Models.SmithingModel`: difficulty drives the quality band, the material cost (`int[]`) feeds the resource bar in the UI, the energy cost decides how many more actions the hero can perform that day, and skill XP and research points are written into the hero's progression record.

The computation chain is: a UI or behavior passes inputs such as `WeaponDesign`, `ItemObject`, `CraftingPiece`, and `Hero` → the model computes difficulty (`GetCraftingPartDifficulty` / `CalculateWeaponDesignDifficulty`), cost (material `int[]` and energy `int`), and XP/research points → the caller uses those numbers to drive the UI or hands them to a smithing behavior that actually produces the item. The model itself is pure-function style: the same input should yield the same output. It does not cache, it does not mutate the passed-in objects (except the two refining methods that take an explicit `ref`), and it never triggers a world state change.

Use this model to rewrite the "computation rules" seen by every consumer — for example, to make high-tier blueprints harder, smelting cheaper in energy, or research points accumulate faster. If the goal is to actually forge a weapon, add the result to a party, or put it in an inventory, use the smithing/crafting behaviors (such as the `SmithingBehavior` family) together with `ItemRoster` / `Equipment` APIs, or the appropriate `*Action`. **Do not** `new ItemObject`, write directly to `PartyBase`, or call grant logic inside a model method callback — that turns a read-only query into a side effect that replays on every read and bypasses the daily energy and material checks.

Pay special attention to the `ref` parameters: `GetSkillXpForRefining` and `GetEnergyCostForRefining` take a `ref Crafting.RefiningFormula`, meaning the formula structure is passed by reference. The default implementation does not mutate it, but the signature promises the caller may rewrite the structure in place. Callers must not assume the formula is unchanged across the call, and must not take `ref` to a read-only copy produced by the lazy enumeration (`GetRefiningFormulas`'s iteration variable).

The `int[]` return values have length 9, and the index order strictly follows the `CraftingMaterials` enum (`0 = IronOre`, `1 = Iron1` … `6 = Iron6`, `7 = Wood`, `8 = Charcoal`). `GetSmithingCostsForWeaponDesign` returns negative values to mean "consume this material", while `GetSmeltingOutputForItem` returns positive values to mean "recover this amount"; both methods end with `array[8]--` to additionally subtract index 8 (charcoal), representing the design's "hidden" material expense. Custom implementations must return a non-`null` array of exactly length 9, otherwise the UI reading by fixed index will go out of bounds and crash or write dirty data.

### Lifecycle and Registration

`Campaign.Current.Models` holds the current instance, and the accessor is `Campaign.Current.Models.SmithingModel`. The default instance `DefaultSmithingModel` is registered by the game launcher during campaign initialization through `IGameStarter.AddModel`; a custom implementation must also be registered before the campaign system begins querying the model. On the title screen, during early module loading, or when no active campaign exists, `Campaign.Current` may be `null`, so **do not** read it unconditionally inside a static field initializer or a menu constructor — every access must be `null`-checked first.

## Dependencies

### Upstream

| Type | Relationship |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the active campaign and the `Models` registry; the only entry point to obtain the model. |
| [`Hero`](../../campaign/Hero) | Provides the `Crafting` skill value, the relevant perks (`PracticalRefiner`/`PracticalSmith`/`PracticalSmelter`/`CharcoalMaker`/`SteelMaker*`), and the daily energy state; energy costs are derived from these. |
| [`ItemObject`](../../core-extra/ItemObject) | The smelted/forged item and the material-mapping target (`DefaultItems`); provides `Value`, `Tier`, and `WeaponDesign`. |
| [`CraftingPiece`](../../core-extra/CraftingPiece) | A smithing part; provides `PieceTier`, `PieceType`, and `MaterialsUsed`. |
| [`WeaponDesign`](../../core-extra/WeaponDesign) | A weapon design; provides `UsedPieces`, `Template`, and `ItemModifierGroup`. |
| [`WeaponDesignElement`](../../core-extra/WeaponDesignElement) | A single part slot in a design; provides `IsValid`, `ScaleFactor`, and `CraftingPiece`. |
| [`CraftingMaterials`](../../core-extra/CraftingMaterials) | The material enum; determines the index order of every `int[]` return value. |
| [`Crafting`](../../core-extra/Crafting) | Hosts the nested `RefiningFormula` type. |
| [`RefiningFormula`](../../core-extra/RefiningFormula) | The refining formula structure (`Input1`/`Input2`/`Output`/`OutputCount`); the two refining methods take it by `ref`. |
| [`ItemModifier`](../../core-extra/ItemModifier) | The weapon quality modifier returned by `GetCraftedWeaponModifier`. |
| [`ExplainedNumber`](../ExplainedNumber) | Hosts energy cost, research-point results, and explainable factors. |

### Downstream

| Type | Relationship |
| --- | --- |
| [`SmeltingVM`](../SmeltingVM) | The smelting UI reads `GetSmeltingOutputForItem` and `GetEnergyCostForSmelting`. |
| [`WeaponDesignVM`](../WeaponDesignVM) | The forging UI reads difficulty and `GetSmithingCostsForWeaponDesign`. |
| [`ItemRoster`](../ItemRoster) | The materials and weapons produced by smelting/forging ultimately land in the inventory; must not be written to directly inside a callback. |
| [`Equipment`](../../core-extra/Equipment) | The forged weapon eventually occupies an equipment slot, handled by a behavior rather than the model. |
| [`SkillObject`](../../core-extra/SkillObject) | The constant layer; provides the `Crafting` skill definition reference. |

### Actions, Events and Save Boundaries

The model itself dispatches no events, holds no save fields, and its results are read-only to the caller. The logic that actually produces items, deducts materials, and deducts energy runs in the smithing/crafting behaviors and is written through `ItemRoster`; the hero's daily energy state is maintained by campaign behaviors. A custom implementation must stay deterministic (same input yields the same energy cost / XP), otherwise it will disagree with the daily energy counter recorded in the save, causing a corrupt save or double counting.

## Member Contract

### Difficulty Calculation

| Member | Purpose | When Called & Side Effects |
| --- | --- | --- |
| `GetCraftingPartDifficulty(CraftingPiece)` → `int` | Returns a single part's difficulty; default is `PieceTier * 50` (0 for an empty part). | Accumulated weighted by part type when summing design difficulty; read-only, no side effects. |
| `CalculateWeaponDesignDifficulty(WeaponDesign)` → `int` | Sums the whole weapon's difficulty by part-type weight (blade 100, guard 20, grip 60, pommel 20). | Called before forging or when computing the quality band; read-only. |
| `ResearchPointsNeedForNewPart(int totalPartCount, int openedPartCount)` → `float` | Research points needed to unlock a new part, formula `sqrt(100/total) * (opened*9 + 10)`. | Read by the part-research panel; read-only. |

### Forging Result (Quality and Modifier)

| Member | Purpose | When Called & Side Effects |
| --- | --- | --- |
| `GetCraftedWeaponModifier(WeaponDesign, Hero)` → `ItemModifier` | Quality-weighted random based on design difficulty and the hero's `Crafting` skill, then picks a modifier from the template's `ItemModifierGroup` by quality. | Called when forging determines the modifier; internally reads perks (`ExperiencedSmith`/`MasterSmith`/`LegendarySmith`) to adjust probability. No world side effects, but it is random. |

### Refining Formulas and Material Mapping

| Member | Purpose | When Called & Side Effects |
| --- | --- | --- |
| `GetRefiningFormulas(Hero)` → `IEnumerable<Crafting.RefiningFormula>` | Returns the refining formulas available to the hero, including perk-gated entries (`CharcoalMaker`/`IronMaker`/`SteelMaker*`). | Enumerated by the refining UI; lazy enumeration, `yield return` per entry, read-only. |
| `GetCraftingMaterialItem(CraftingMaterials)` → `ItemObject` | Maps the material enum to `DefaultItems` (ore, iron ingots by tier, hardwood, charcoal). | Called when the UI shows a material icon or converts a smelting cost; read-only. |

### Smelting and Smithing Cost

| Member | Purpose | When Called & Side Effects |
| --- | --- | --- |
| `GetSmeltingOutputForItem(ItemObject)` → `int[]` | Returns a length-9 recovery array (positive, ordered by `CraftingMaterials`), including the downward adjustment from `AddSmeltingReductions`. | Previewed before smelting; the default already checks `item.WeaponDesign != null`, read-only. |
| `GetSmithingCostsForWeaponDesign(WeaponDesign)` → `int[]` | Returns a length-9 material cost (negative = consume), with `array[8]--` subtracting charcoal at the end. | Previewed before forging; read-only. |

### Energy Cost (Daily Action Cap)

| Member | Purpose | When Called & Side Effects |
| --- | --- | --- |
| `GetEnergyCostForRefining(ref Crafting.RefiningFormula, Hero)` → `int` | Refining energy cost; default base 6, boosted by the `PracticalRefiner` perk. | Validates the day's energy before refining; the `ref` formula may be mutated in place. |
| `GetEnergyCostForSmithing(ItemObject, Hero)` → `int` | Smithing energy cost; default `10 + 5*Tier`, boosted by `PracticalSmith`. | Validated before forging; participates in the daily forging-count cap. |
| `GetEnergyCostForSmelting(ItemObject, Hero)` → `int` | Smelting energy cost; default 10, boosted by `PracticalSmelter`. | Validated before smelting; participates in the daily smelting-count cap. |

### Skill XP and Part Research

| Member | Purpose | When Called & Side Effects |
| --- | --- | --- |
| `GetSkillXpForRefining(ref Crafting.RefiningFormula)` → `int` | Refining XP; default `0.3 * output.Value * OutputCount`. | At refining settlement; the `ref` formula may be mutated in place. |
| `GetSkillXpForSmelting(ItemObject)` → `int` | Smelting XP; default `0.02 * item.Value`. | At smelting settlement; read-only. |
| `GetSkillXpForSmithingInFreeBuildMode(ItemObject)` → `int` | Free-build forging XP; default `0.02 * item.Value`. | At free-mode forging settlement; read-only. |
| `GetSkillXpForSmithingInCraftingOrderMode(ItemObject)` → `int` | Order-mode forging XP; default `0.1 * item.Value`. | At order-mode settlement; read-only. |
| `GetPartResearchGainForSmeltingItem(ItemObject, Hero)` → `int` | Part research points from smelting, boosted by `CuriousSmelter`. | At smelting settlement; read-only. |
| `GetPartResearchGainForSmithingItem(ItemObject, Hero, bool isFreeBuildMode)` → `int` | Research points from forging, boosted by `CuriousSmith` plus a +10% free-build bonus. | At forging settlement; read-only. |

## Real Read Path

The two snippets below only query the model already registered in the active campaign, before any UI computation call; the order matches what the smithing UI actually reads:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

// Estimate the forging cost and energy cost of a blueprint
public int EstimateCrafting(WeaponDesign design, ItemObject crafted, Hero smith)
{
    if (Campaign.Current == null || design == null || smith == null)
    {
        return -1;
    }

    SmithingModel model = Campaign.Current.Models.SmithingModel;
    int[] materialCosts = model.GetSmithingCostsForWeaponDesign(design);
    int energy = model.GetEnergyCostForSmithing(crafted, smith);
    int xp = model.GetSkillXpForSmithingInFreeBuildMode(crafted);

    // materialCosts[i] < 0 means material i (in CraftingMaterials enum order) is consumed
    // materialCosts[8] is charcoal (Charcoal), the design's hidden cost
    return energy;
}
```

The next snippet walks the hero's refining formulas and takes XP and energy cost for each. Note the `ref` passing:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

public void InspectRefining(Hero smith)
{
    if (Campaign.Current == null || smith == null)
    {
        return;
    }

    SmithingModel model = Campaign.Current.Models.SmithingModel;
    foreach (var formula in model.GetRefiningFormulas(smith))
    {
        // formula.Input1 / Input2 / Output are CraftingMaterials enum values
        int xp = model.GetSkillXpForRefining(ref formula);
        int energy = model.GetEnergyCostForRefining(ref formula, smith);
        // formula may already have been mutated in place; do not treat it as an immutable snapshot
    }
}
```

These results are good for debugging or UI preview; the actual material deduction, energy deduction, and item production must be left to the smithing/crafting behaviors — do not create `ItemObject` here or write to `ItemRoster`.

## Risks and Debugging Order

1. **Campaign does not exist yet:** `Campaign.Current` is null on the title screen, during early module loading, or when no active campaign is present; null-check every access and defer fetching the model until a campaign-start hook.
2. **`ref` formula is mutated:** `GetSkillXpForRefining` and `GetEnergyCostForRefining` pass `RefiningFormula` by `ref`, so the structure may have changed after the call; do not pass `ref` to the iteration variable from the lazy `GetRefiningFormulas` enumeration, and do not assume it is unchanged.
3. **`int[]` length or order is wrong:** the returned array must be length 9 and non-`null`, with indices strictly following `CraftingMaterials` (note index 8 is charcoal's hidden cost). A custom implementation returning the wrong length or `null` will make the UI read out of bounds and crash, or write dirty data into smelting/forging results.
4. **Producing or granting items inside a query callback:** `new ItemObject`, writing to `PartyBase`, or calling grant logic inside a model method bypasses the daily energy and material checks and becomes a side effect that runs on every read — production must be done by a behavior + `ItemRoster` / the matching `Action`.
5. **Energy cost is zero or negative:** energy cost feeds the daily forging/smelting/refining action cap; returning `0` or negative lets the hero act infinitely, breaking the economy and possibly disagreeing with the daily energy counter in the save, corrupting it.
6. **`ItemObject.WeaponDesign` is null:** when smelting a non-weapon / non-forged item, `item.WeaponDesign` may be `null`; the default implementation checks this first, and a custom implementation that drops the check will throw a null-reference exception on `UsedPieces`.

## Navigation

v1.3.15 and v1.4.5 share the same interface signatures (including the two energy/XP methods with `ref Crafting.RefiningFormula`), and the perk gating in the default implementation (`CharcoalMaker`/`IronMaker`/`SteelMaker*`, `Practical*`, `Curious*`) is also present in both. When replacing the model across versions, prefer delegating to the current version's vanilla default implementation and then layering your own bounded corrections on top, to avoid copying an older formula that drops the newer perks and quality logic.

- [Campaign Model Index](../models/)
- [Parent: Campaign Extension API](../)
- [↔ CharacterDevelopmentModel](../CharacterDevelopmentModel)
- [↔ BarterModel](../BarterModel)
- [↔ WorkshopModel](../WorkshopModel)
- [SmeltingVM](../SmeltingVM)
- [WeaponDesignVM](../WeaponDesignVM)
- [ItemRoster](../ItemRoster)
- [Hero](../../campaign/Hero)
- [Campaign](../../campaign/Campaign)
- [Crash and Save Boundaries](../../../architecture/crash-boundaries)
- [Campaign System Guide](../../../guide/campaign-system)
