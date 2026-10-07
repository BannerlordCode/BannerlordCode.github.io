---
title: "CosmeticsManagerHelper"
description: "Auto-generated class reference for CosmeticsManagerHelper."
---
# CosmeticsManagerHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CosmeticsManagerHelper`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/CosmeticsManagerHelper.cs`

## Overview

`CosmeticsManagerHelper` is a `public static class` (`CosmeticsManagerHelper.cs:14`) of stateless conversion helpers for the cosmetics/taunt system. Nothing in it holds state and nothing needs constructing — every member is a pure function. It exists because two different systems in the cosmetics stack need the same three translations and neither could own them: class *name* to class *index*, cosmetic *id* to cosmetic *index*, and an agent's current equipment to a playable taunt *action*.

The indexing helpers are the delicate ones. `GetUsedIndicesFromIds` takes a `Dictionary<string, List<string>>` of hero-class name to cosmetic ids and returns a `Dictionary<int, List<int>>` of hero-class *positional index* to cosmetic *positional index*. The class index is the position of the class in `MBObjectManager.Instance.GetObjectTypeList<MultiplayerClassDivisions.MPHeroClass>()` (`CosmeticsManagerHelper.cs:20`) and the cosmetic index is the position in `CosmeticsManager.CosmeticElementsList` (`CosmeticsManagerHelper.cs:40`).

The taunt helpers are the ones a mod is most likely to call. `GetSuitableTauntAction(Agent, int)` returns a ready `ActionIndexCache`; `GetActionNotUsableReason` returns a `TauntUsageFlag` explaining *why* a taunt is unsuitable; `GetSuitableTauntActionForEquipment(Equipment, TauntCosmeticElement)` does the same lookup without an agent, for previewing a cosmetic in a menu.

The weapon-class predicates — `IsWeaponClassOneHanded`, `IsWeaponClassTwoHanded`, `IsWeaponClassShield`, `IsWeaponClassBow`, `IsWeaponClassCrossbow` — are hand-written equality chains, not range checks over the enum.

## Mental Model

The indices this class produces are **positional and load-order dependent**. They are valid only within the same process that produced them, and only for as long as `MBObjectManager` and `CosmeticsManager.CosmeticElementsList` hold the same ordering. That is fine for a live session — which is what this is for — but it means the values are not stable identifiers: do not write them to disk, do not send them over the network, and do not assume a saved index from one launch means the same thing in the next.

Unknown inputs are dropped, not defaulted. A hero-class name with no match is skipped entirely; a cosmetic id with no match is skipped but its siblings still go in; and a key whose entire list resolved empty is omitted from the result dictionary. So a returned dictionary is always a subset of what you asked for, and its absence is not an error.

The weapon-class predicates disagree with each other about one class. `IsWeaponClassOneHanded` covers exactly OneHandedAxe, OneHandedPolearm and OneHandedSword (`CosmeticsManagerHelper.cs:117`, `CosmeticsManagerHelper.cs:119`) — **not** `Mace`. Yet `GetComplimentaryWeaponClasses` lists `Mace` in the same case group as those three and hands back a shield pair (`CosmeticsManagerHelper.cs:153`). So a one-handed mace is "not one-handed" by the predicate and "one-handed" by the compliment table. Never gate a cosmetic rule on both and expect them to agree.

The null guards are also uneven. `GetSuitableTauntAction` checks `agent.Equipment == null` and returns `act_none` (`CosmeticsManagerHelper.cs:61`, `CosmeticsManagerHelper.cs:63`); `GetActionNotUsableReason` has no such check and goes straight to `agent.WieldedWeapon.CurrentUsageItem` (`CosmeticsManagerHelper.cs:77`). And `GetSuitableTauntActionForEquipment` passes hardcoded `false` for the left-stance flag and `true` for on-foot, then derives the two weapon usages through `GetInitialWeaponIndicesToEquip` with `Equipment.InitialWeaponEquipPreference.Any` (`CosmeticsManagerHelper.cs:90`) — so a menu preview can disagree with what the agent will actually be able to do.

Finally, `GetComplimentaryWeaponClasses` is not symmetric. Every listed melee class returns a shield pair, Arrow↔Bow, Bolt↔Crossbow and SlingStone↔Sling all map both ways, but shields return a fixed four-class array and *every other* class falls through to `return new WeaponClass[0]` (`CosmeticsManagerHelper.cs:204`). Do not use it as a general "related classes" lookup.

## How to use

**Getting it.** Nothing to get — every member is static:

```csharp
ActionIndexCache act = CosmeticsManagerHelper.GetSuitableTauntAction(agent, tauntIndex);
```

**Typical use** — preview a cosmetic taunt in a menu, where there is no agent yet:

```csharp
TauntCosmeticElement cosmetic = /* resolved from CosmeticElementsList by Id */;
string actionId = CosmeticsManagerHelper.GetSuitableTauntActionForEquipment(
    character.GetCharacterEquipment(), cosmetic);
if (actionId == null)
    MBDebug.Print("taunt not available for this loadout");
```

**Typical use** — convert saved cosmetic names into the indices the runtime wants:

```csharp
Dictionary<int, List<int>> byIndex =
    CosmeticsManagerHelper.GetUsedIndicesFromIds(usedCosmeticsByClassName);
foreach (var pair in byIndex)
{
    int heroClassIndex = pair.Key;          // position in the MPHeroClass object list
    List<int> cosmeticIndices = pair.Value; // positions in CosmeticElementsList
}
```

**Most common mistake, and what it costs.** Treating the returned indices as stable ids and comparing them against a value captured in a save file, a config, or a different session. They are positions in two lists that depend on object-manager load order, so a modded or differently-ordered installation reorders them, and the saved integer silently selects the wrong hero class or the wrong cosmetic. Nothing throws — a wrong index is simply a valid index into a list that no longer means what you thought. Resolve cosmetics by their string id and convert to indices only at the moment of use, through this helper.

## Key Methods

### GetUsedIndicesFromIds
`public static Dictionary<int, List<int>> GetUsedIndicesFromIds(Dictionary<string, List<string>> usedCosmetics)`

**Purpose:** Reads and returns the used indices from ids value held by the this instance.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.GetUsedIndicesFromIds(dictionary<string, usedCosmetics);
```

### GetSuitableTauntAction
`public static ActionIndexCache GetSuitableTauntAction(Agent agent, int tauntIndex)`

**Purpose:** Reads and returns the suitable taunt action value held by the this instance.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.GetSuitableTauntAction(agent, 0);
```

### GetActionNotUsableReason
`public static TauntUsageManager.TauntUsage.TauntUsageFlag GetActionNotUsableReason(Agent agent, int tauntIndex)`

**Purpose:** Reads and returns the action not usable reason value held by the this instance.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.GetActionNotUsableReason(agent, 0);
```

### GetSuitableTauntActionForEquipment
`public static string GetSuitableTauntActionForEquipment(Equipment equipment, TauntCosmeticElement taunt)`

**Purpose:** Reads and returns the suitable taunt action for equipment value held by the this instance.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.GetSuitableTauntActionForEquipment(equipment, taunt);
```

### IsWeaponClassOneHanded
`public static bool IsWeaponClassOneHanded(WeaponClass weaponClass)`

**Purpose:** Determines whether the this instance is in the weapon class one handed state or condition.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.IsWeaponClassOneHanded(weaponClass);
```

### IsWeaponClassTwoHanded
`public static bool IsWeaponClassTwoHanded(WeaponClass weaponClass)`

**Purpose:** Determines whether the this instance is in the weapon class two handed state or condition.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.IsWeaponClassTwoHanded(weaponClass);
```

### IsWeaponClassShield
`public static bool IsWeaponClassShield(WeaponClass weaponClass)`

**Purpose:** Determines whether the this instance is in the weapon class shield state or condition.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.IsWeaponClassShield(weaponClass);
```

### IsWeaponClassBow
`public static bool IsWeaponClassBow(WeaponClass weaponClass)`

**Purpose:** Determines whether the this instance is in the weapon class bow state or condition.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.IsWeaponClassBow(weaponClass);
```

### IsWeaponClassCrossbow
`public static bool IsWeaponClassCrossbow(WeaponClass weaponClass)`

**Purpose:** Determines whether the this instance is in the weapon class crossbow state or condition.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.IsWeaponClassCrossbow(weaponClass);
```

### GetComplimentaryWeaponClasses
`public static WeaponClass GetComplimentaryWeaponClasses(WeaponClass weaponClass)`

**Purpose:** Reads and returns the complimentary weapon classes value held by the this instance.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.GetComplimentaryWeaponClasses(weaponClass);
```

## Usage Example

```csharp
CosmeticsManagerHelper.Initialize();
```

## See Also

- [Area Index](../)
- [Agent](../../mission/Agent)
- [WeaponData](../WeaponData)
- [CosmeticsManagerHelper (中文页面)](../../../../zh/api/mission-ext/CosmeticsManagerHelper)
- [MissionScreen](../MissionScreen)