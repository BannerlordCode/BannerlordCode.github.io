---
title: "BattleSpawnModel"
description: "Auto-generated class reference for BattleSpawnModel."
---
# BattleSpawnModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleSpawnModel : MBGameModel<BattleSpawnModel>`
**Base:** `MBGameModel<BattleSpawnModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleSpawnModel.cs`

## Overview

`BattleSpawnModel` is the game's replaceable rule for *which formation each troop starts in*, and for where reinforcements go afterwards. It is an abstract `MBGameModel<BattleSpawnModel>` (`BattleSpawnModel.cs:9`) installed at module init — `SandBoxSubModule` registers `SandboxBattleSpawnModel`, the editor registers `CustomBattleSpawnModel` (`SandBoxSubModule.cs:43`, `EditorGame.cs:53`).

The contract is four members. `OnMissionStart` and `OnMissionEnd` are `virtual` with empty bodies (`BattleSpawnModel.cs:12`), so the base costs nothing if you do not override them. `GetInitialSpawnAssignments` and `GetReinforcementAssignments` are `abstract` and both return `List<ValueTuple<IAgentOriginBase, int>>` (`BattleSpawnModel.cs:27`, `BattleSpawnModel.cs:35`) — a list of `(troop origin, formation index)` pairs, with the tuple elements named `origin` and `formationIndex` through `[TupleElementNames]` so call sites can use `.origin` and `.formationIndex`.

## Mental Model

Read it as "return a complete assignment table or return nothing useful". The model does not apply anything: it computes a `List` and hands it back. The caller owns placement, and because the return type is a `List<ValueTuple<...>>` rather than an `IEnumerable` or a span, there is no way for the engine to stream it — you must materialise the whole table, and the engine will happily consume an empty one without complaint.

The boundary that actually bites is the `int` in the tuple. It is a **formation index**, not a `FormationClass`. The shipped `CustomBattleSpawnModel` gets it by casting `Mission.GetAgentTroopClass(...)` straight to `int` (`CustomBattleSpawnModel.cs:35`), and that cast is only safe because the two enums happen to share numbering — which they do not do completely. `FormationClass` contains aliases *and* a sentinel that overlaps the count: `NumberOfDefaultFormations` and `Skirmisher` are both `4` (`FormationClass.cs:17`), `NumberOfRegularFormations` and `General` are both `8` (`FormationClass.cs:27`), and `NumberOfAllFormations` (`FormationClass.cs:33`) and `Unset = 10` (`FormationClass.cs:35`) are the same number. `Mission.GetAgentTroopClass` can return `Unset`, and it can return anything at all if a mod has hooked `GetAgentTroopClass_Override` (`Mission.cs:2045`). A cast of `Unset` yields the integer `10`, which is simultaneously "no formation" and "the number of formations" — a value no real formation index should ever take.

So: return a valid index for every origin, and never propagate an enum ordinal you have not range-checked. Also note that the two abstract methods have no default ordering contract, and neither is given a target formation — the engine asks you what you want, and if your list is short, short, or contains a duplicated formation index, the failure mode is a mis-deployed army at spawn time rather than an exception at assignment time.

## How to use

**Getting one.** Subclass it and register the subclass as the model at module initialisation, replacing whatever the submodule registered. Implement both abstract methods or the class will not compile.

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class MyModBattleSpawnModel : BattleSpawnModel
{
    public override List<(IAgentOriginBase origin, int formationIndex)> GetInitialSpawnAssignments(
        BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
    {
        var assignments = new List<(IAgentOriginBase origin, int formationIndex)>();

        foreach (IAgentOriginBase origin in troopOrigins)
        {
            // formationIndex is an INDEX, not a FormationClass ordinal.
            int index = (int)Mission.Current.GetAgentTroopClass(battleSide, origin.Troop);

            // Guard: FormationClass.Unset == NumberOfAllFormations == 10.
            if (index < 0 || index >= (int)FormationClass.NumberOfAllFormations)
            {
                index = (int)FormationClass.Infantry;
            }

            assignments.Add((origin, index));
        }

        return assignments;
    }

    public override List<(IAgentOriginBase origin, int formationIndex)> GetReinforcementAssignments(
        BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)
    {
        var assignments = new List<(IAgentOriginBase origin, int formationIndex)>();

        foreach (IAgentOriginBase origin in troopOrigins)
        {
            int index = (int)Mission.Current.GetAgentTroopClass(battleSide, origin.Troop);
            if (index < 0 || index >= (int)FormationClass.NumberOfAllFormations)
            {
                index = (int)FormationClass.Infantry;
            }
            assignments.Add((origin, index));
        }

        return assignments;
    }
}
```

Note the return type is spelled `List<(IAgentOriginBase origin, int formationIndex)>`; that is the same `List<ValueTuple<IAgentOriginBase, int>>` the abstract declaration names, with the names supplied by `[TupleElementNames]` on the base (`BattleSpawnModel.cs:22`).

**The most common mistake** is forwarding the enum ordinal unchecked. Writing `(int)Mission.Current.GetAgentTroopClass(...)` and returning it — exactly what the shipped `CustomBattleSpawnModel` does (`CustomBattleSpawnModel.cs:35`) — means a single troop whose formation class resolves to `Unset` contributes a formation index of `10`, and `Unset` is numerically identical to `NumberOfAllFormations` (`FormationClass.cs:35`). Nothing throws: the assignment list is well-formed, it is just wrong, and the symptom shows up as one stray soldier spawned into a formation slot that means "all formations" rather than a formation. Range-check the index before you return it.

## Key Methods

### OnMissionStart
`public virtual void OnMissionStart()`

**Purpose:** Invoked when the mission start event is raised.

```csharp
// Obtain an instance of BattleSpawnModel from the subsystem API first
BattleSpawnModel battleSpawnModel = ...;
battleSpawnModel.OnMissionStart();
```

### OnMissionEnd
`public virtual void OnMissionEnd()`

**Purpose:** Invoked when the mission end event is raised.

```csharp
// Obtain an instance of BattleSpawnModel from the subsystem API first
BattleSpawnModel battleSpawnModel = ...;
battleSpawnModel.OnMissionEnd();
```

### GetInitialSpawnAssignments
`public abstract List<ValueTuple<IAgentOriginBase, int>> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**Purpose:** Reads and returns the initial spawn assignments value held by the this instance.

```csharp
// Obtain an instance of BattleSpawnModel from the subsystem API first
BattleSpawnModel battleSpawnModel = ...;
var result = battleSpawnModel.GetInitialSpawnAssignments(battleSide, troopOrigins);
```

### GetReinforcementAssignments
`public abstract List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**Purpose:** Reads and returns the reinforcement assignments value held by the this instance.

```csharp
// Obtain an instance of BattleSpawnModel from the subsystem API first
BattleSpawnModel battleSpawnModel = ...;
var result = battleSpawnModel.GetReinforcementAssignments(battleSide, troopOrigins);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BattleSpawnModel instance = ...;
```

## See Also

- [Area Index](../)
- [MBGameModel](../../core-extra/MBGameModel) — the generic model base it derives from
- [BattleSideEnum](../../core-extra/BattleSideEnum) — which side each assignment request is for
- [IAgentOriginBase](../../core-extra/IAgentOriginBase) — the troop origin carried in the `origin` element
- [MissionReinforcementsHelper](../MissionReinforcementsHelper) — what the base class's lifecycle hooks actually drive