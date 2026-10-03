---
title: "AgentOriginUtilities"
description: "Two pure static inference functions: GetDefaultTraitsMask folds an IAgentOriginBase's four booleans plus mount status into one TroopTraitsMask, while GetDefaultTroopTraits scans the first five slots of a BasicCharacterObject's battle equipment against a hard-coded 24f armour sum, saving four IAgentOriginBase implementations from repeating the same guesswork."
---

# AgentOriginUtilities

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class AgentOriginUtilities`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/AgentOriginUtilities.cs`

## Overview

`AgentOriginUtilities` is the **inference layer** of the agent-origin system. [IAgentOriginBase](../IAgentOriginBase) requires every origin implementation to answer "does this unit have a shield, a spear, a throwing weapon, heavy armour"; answering those questions yourself means either repeating yourself four times or forgetting one. `AgentOriginUtilities` extracts that inference into two static functions so that `SimpleAgentOrigin`, `PartyAgentOrigin`, `PartyGroupAgentOrigin`, and `BasicBattleAgentOrigin` all collapse to a single forwarding line.

The role it plays is **deriving combat traits from a piece of static data**, and the two functions are **complementary rather than redundant**: `GetDefaultTroopTraits` infers *from* a character's battle equipment (forward: data → traits), while `GetDefaultTraitsMask` packs an *already-filled* origin into a bit mask (backward: traits → mask set). The former is called by the **constructors** of all four origins; the latter by their `GetTraitsMask()` methods. **Note that `AgentOriginUtilities` itself is not a `static class`** — the source says `public class`, so you *can* `new` it, but the instance does nothing at all.

## Mental Model

Treat it as **a translator that infers a troop's tag from its equipment table**: the input is gear, the output is traits. To decide when to reach for it, ask one question: **I only have a `BasicCharacterObject`'s battle equipment — do I need to know whether it counts as ranged or as heavy armour?** If yes, call `GetDefaultTroopTraits`.

**The first function's inference is predictable** (`AgentOriginUtilities.cs:229-268`). It does three things. First, it pulls `troop.FirstBattleEquipment` and **returns four false immediately when that is null** — so a unit with no battle equipment is inferred as "no shield, no spear, no throwing, no heavy armour", which is almost certainly not what you meant, and the code will not tell you. Second, **it only scans the first 5 slots**: `for (int i = 0; i < 5; i++)` reads `firstBattleEquipment[i]` slot by slot and classifies on `equipmentElement.Item.PrimaryWeapon.WeaponClass` — `ThrowingAxe` / `ThrowingKnife` / `Javelin` → `hasThrownWeapon`, `SmallShield` / `LargeShield` → `hasShield`, the three polearm classes → `hasSpear`. **That 5 is a hard-coded literal**, while `Equipment` actually has more slots (`Equipment.GetHumanBodyArmorSum` at `Equipment.cs:285` walks the `NumAllWeaponSlots`..`ArmorItemEndSlot` enum range). **A weapon placed after slot 6 is never recognised** — configure a throwing weapon outside the first five slots on a custom unit and the inference is simply wrong. Third, **heavy armour hinges on a magic number**: `firstBattleEquipment.GetHumanBodyArmorSum() > 24f` before `hasHeavyArmor` is set. That 24.0f is the threshold for the entire type, with **no named constant, no comment, and no hint that it matters**.

**The second function is pure packing** (`:202-227`) with no inference of its own, only mapping: `origin.Troop.IsMounted` → `Mount`; `!origin.Troop.IsRanged` → `Melee`, otherwise `Ranged` (**those two are the two arms of one mutually-exclusive ternary**); then each of the four `origin.HasXxx` maps to one mask bit. It carries one easily-missed dependency: `GetDefaultTraitsMask` reads `origin.Troop.IsRanged` and `origin.Troop.IsMounted` — that is **character data, not the origin's own cached booleans**. So for a custom origin, the four `HasXxx` fields come from the origin while mount status and ranged-ness still come from `Troop`: **two different data sources inside one function**, and changing the origin's fields will not affect the mask's mount/ranged bits.

Three practical conclusions follow. First, **it is a bypassable cache**: `BasicBattleAgentOrigin` (`:46`), `SimpleAgentOrigin` (`:141`), `PartyAgentOrigin` (`:165`), and `PartyGroupAgentOrigin` (`:105`) each call `GetDefaultTroopTraits` once in their constructor and store the result in `_hasXxx` fields. **If you already hold an origin, read `origin.HasShield` — do not re-infer.** Second, **ranged/melee and shield/spear have no causal relationship**: a unit can legitimately come out as `Melee` *and* `hasShield`, because it is simply an infantryman with a shield. Third, **all four out parameters stay false and the function returns normally when `FirstBattleEquipment == null`** — no exception, no warning. Callers get a **false negative**, not an error.

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `GetDefaultTroopTraits` | `public static void GetDefaultTroopTraits(BasicCharacterObject troop, out bool hasThrownWeapon, out bool hasSpear, out bool hasShield, out bool hasHeavyArmor)` | **Forward inference.** Scans the **first 5 slots** of `troop.FirstBattleEquipment` and classifies on `PrimaryWeapon.WeaponClass`: throwing weapons (ThrowingAxe/ThrowingKnife/Javelin), shields (SmallShield/LargeShield), and spears (OneHanded/TwoHanded/LowGrip polearm). With null equipment all four out values stay false and it returns normally. **Every origin implementation calls it from its constructor** (`BasicBattleAgentOrigin.cs:46` and friends). |
| `GetDefaultTraitsMask` | `public static TroopTraitsMask GetDefaultTraitsMask(IAgentOriginBase origin)` | **Backward packing.** Folds mount status (`origin.Troop.IsMounted`), ranged-versus-melee (`origin.Troop.IsRanged`, **one of the two**), and the origin's own `HasShield` / `HasSpear` / `HasThrownWeapon` / `HasHeavyArmor` into a single bit mask. All four origins forward their `GetTraitsMask()` here (`BasicBattleAgentOrigin.cs:75` and friends). |
| (threshold literal) `24f` | literal at `:264` | `if (firstBattleEquipment.GetHumanBodyArmorSum() > 24f) hasHeavyArmor = true;` — **the only heavy-armour threshold in the type, with no named constant and no comment.** The only way to change "how thick counts as heavy armour" is to edit that one hard-coded line. |
| (slot ceiling) `5` | literal at `:240` | `for (int i = 0; i < 5; i++)` — **only the first 5 equipment slots are scanned.** Compare `Equipment.GetHumanBodyArmorSum` (`Equipment.cs:285`), which walks the `NumAllWeaponSlots`..`ArmorItemEndSlot` enum range; the two ranges are not the same. |
| (class shape) not static | `public class AgentOriginUtilities` | **The source says `public class`, not `public static class`**, and both members are `public static`. So it **can be instantiated** — and the resulting object has no state and no instance methods. Pure waste. |

## Real Example

Forward inference: deciding whether a freshly-built character counts as ranged and whether it wears heavy armour (shape taken from `BasicBattleAgentOrigin.cs:43-47`):

```csharp
BasicCharacterObject troop = MBObjectManager.Instance.GetObject<BasicCharacterObject>("heavy_infantry");
if (troop == null)
{
    Debug.Print("troop not loaded", 0);
    return;
}

AgentOriginUtilities.GetDefaultTroopTraits(
    troop,
    out bool hasThrownWeapon,
    out bool hasSpear,
    out bool hasShield,
    out bool hasHeavyArmor);

Debug.Print("thrown=" + hasThrownWeapon + " spear=" + hasSpear, 0);
Debug.Print("shield=" + hasShield + " heavyArmor=" + hasHeavyArmor, 0);

// Note: a troop with no FirstBattleEquipment returns all-false with no error.
BasicCharacterObject civilian = MBObjectManager.Instance.GetObject<BasicCharacterObject>("artisan");
AgentOriginUtilities.GetDefaultTroopTraits(civilian, out bool t2, out bool s2, out bool sh2, out bool ha2);
Debug.Print("civilian: shield=" + sh2 + " heavyArmor=" + ha2, 0);
```

Backward packing: asking a constructed origin for its trait mask (shape taken from `BasicBattleAgentOrigin.cs:73-76`):

```csharp
BasicCharacterObject scout = MBObjectManager.Instance.GetObject<BasicCharacterObject>("scout");
BasicBattleAgentOrigin origin = new BasicBattleAgentOrigin(scout);

TroopTraitsMask mask = AgentOriginUtilities.GetDefaultTraitsMask(origin);
Debug.Print("mask = " + mask, 0);

// Melee and Ranged are mutually exclusive: the source is a single ternary
// on origin.Troop.IsRanged, not two independent checks.
bool ranged = mask.HasAnyFlag(TroopTraitsMask.Ranged);
bool mounted = mask.HasAnyFlag(TroopTraitsMask.Mount);
Debug.Print("ranged=" + ranged + " mounted=" + mounted, 0);

// If you already hold an origin, read its cached fields instead of re-inferring.
Debug.Print("cached HasShield = " + origin.HasShield, 0);
Debug.Print("cached HasSpear = " + origin.HasSpear, 0);
```

Reproducing the "first 5 slots" limitation, which is the most practically useful block on this page:

```csharp
public static class EquipmentScanner
{
    // Equipment.GetHumanBodyArmorSum (Equipment.cs:285) walks the
    // NumAllWeaponSlots..ArmorItemEndSlot enum range, which is NOT the same as
    // the literal 5 that AgentOriginUtilities uses. This is the whole gap.
    public static bool HasAnyWeaponInFirstFiveSlots(Equipment battleEquipment)
    {
        // 5 is the literal AgentOriginUtilities uses, quoted from its source.
        for (int i = 0; i < 5; i++)
        {
            EquipmentElement element = battleEquipment[i];
            if (!element.IsEmpty)
            {
                return true;
            }
        }
        return false;
    }

    // The threshold behind hasHeavyArmor, quoted verbatim from line 264.
    public const float HeavyArmorThreshold = 24f;
}
```

## Risks and Boundaries

- **Only the first 5 equipment slots are scanned.** `:240`'s `i < 5` is a hard-coded literal while the slot count is actually driven by the `EquipmentIndex` enum. Put a throwing weapon after slot 6 and `hasThrownWeapon` comes out `false` with **no warning of any kind**.
- **The 24f heavy-armour threshold is an unnamed magic number.** `:264`'s `> 24f` is the type's only definition of "heavy armour". Changing the standard means editing that line — there is no constant, no comment, and no configuration hook.
- **Null `FirstBattleEquipment` silently yields all false.** `:236-239` returns immediately with the four out values left at their initial false. **That is a false negative, not an error**, and the caller cannot distinguish it from "this person genuinely has no gear".
- **`GetDefaultTraitsMask` mixes two data sources.** Mount and ranged come from `origin.Troop`, while shield/spear/throwing/heavy-armour come from the origin's own fields. **Mutating the origin's cached fields does not affect the mask's mount and ranged bits** — the most easily-missed asymmetry here.
- **`Melee` and `Ranged` are mutually exclusive.** `:209` is the two arms of one ternary, not two independent `if`s. So when `Mask.HasAnyFlag(Ranged)` is true, `Melee` must be false — do not assume a "mostly-ranged, partly-melee" tag exists.
- **It is not a `static class`.** The source declares `public class` with `public static` members. `new AgentOriginUtilities()` compiles, and the object is useless.
- **The inference is a one-shot cache.** All four origin implementations call it once in the constructor and store the result in `_hasXxx`. **Once you hold an origin, read `origin.HasShield` rather than re-inferring** — especially if you changed equipment at runtime, since re-inferring then disagrees with the origin's cache.
- **It does not know custom weapon classes.** The `switch` at `:245-261` lists exactly six `WeaponClass` values. A custom weapon class you registered lands in none of them, so it is neither throwing, nor shield, nor spear — and **"none of the above" is silent**.
- **Heavy armour is judged by `GetHumanBodyArmorSum()`, which includes modifiers.** It internally calls `equipmentElement.GetModifiedBodyArmor()`, so **equipment modifiers can push a loadout across the 24f threshold** — the same gear can read as heavy armour with one modifier and not with another.

## Cross-Version Notes

`AgentOriginUtilities.cs` is 72 lines with 2 public static methods in 1.4.5, in original-source form; the 1.3.x / 1.4.6 counterparts are decompiled output and visibly longer. **What genuinely deserves checking across versions is three literals and one mapping table**: the `5` scan ceiling at `:240`, the `24f` threshold at `:264`, and the `IsRanged` ternary at `:209`. Any of them can move during an equipment-system refactor, and **all of them are hard-coded literals, so changing them produces neither a compile error nor an obsolescence warning** — which is exactly what makes them dangerous. Separately, if [WeaponClass](../WeaponClass) gains a member (a new shield or throwing weapon, say), this type will not pick it up automatically; you must add the `case` by hand.

## Dependencies

- Contract: [IAgentOriginBase](../IAgentOriginBase) declares the five members `HasShield` / `HasSpear` / `HasThrownWeapon` / `HasHeavyArmor` / `GetTraitsMask()` that this type is the standard implementation of
- The four callers: `SimpleAgentOrigin` and `PartyAgentOrigin` / `PartyGroupAgentOrigin` (under `../../campaign/`), plus `BasicBattleAgentOrigin` (under `../../mission-ext/`) — constructors call `GetDefaultTroopTraits`, `GetTraitsMask()` calls `GetDefaultTraitsMask`
- Output type: the [TroopTraitsMask](../TroopTraitsMask) enum (`Mount` / `Melee` / `Ranged` / `Shield` / `Spear` / `Thrown` / `Armor`)
- Input data: [BasicCharacterObject](../BasicCharacterObject)'s `FirstBattleEquipment` (implemented at `../../campaign/CharacterObject.cs:152`)
- Weapon classification: the six branches of [WeaponClass](../WeaponClass) plus [EquipmentElement](../EquipmentElement)'s `IsEmpty` / `PrimaryWeapon`
- Armour maths: [Equipment](../Equipment)'s `GetHumanBodyArmorSum()` (`Equipment.cs:285`), which internally uses `GetModifiedBodyArmor()`
- Bucket index: [core-extra API section](../)