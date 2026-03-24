# Formation Class

**Namespace**: TaleWorlds.MountAndBlade  
**File**: `TaleWorlds.MountAndBlade/Formation.cs` (~130,000 lines)  
**Purpose**: Manages unit formations on the battlefield. Controls collective movement, arrangement, and behavior of groups of units.

## Overview

`Formation` represents a group of units arranged in a formation on the battlefield. Formations are the core organizational unit in Bannerlord battles:
- Each Team can have multiple Formations
- Each Formation contains specific unit types (infantry, archers, cavalry, etc.)
- Formation controls collective movement and arrangement
- AI uses Formations to coordinate group behavior

## Key Properties

### Basic Properties

| Property | Type | Description |
|----------|------|-------------|
| `FormationIndex` | `FormationClass` | Formation index/type |
| `CountOfUnits` | `int` | Total unit count |
| `CountOfDetachedUnits` | `int` | Detached unit count |
| `CountOfUnitsWithoutDetachedOnes` | `int` | Non-detached unit count |
| `Team` | `Team` | The team this formation belongs to |
| `AI` | `FormationAI` | Formation AI controller |
| `QuerySystem` | `FormationQuerySystem` | Formation query system |

### Unit Lists

| Property | Type | Description |
|----------|------|-------------|
| `UnitsWithoutLooseDetachedOnes` | `MBReadOnlyList` | Non-detached unit list |
| `LooseDetachedUnits` | `MBReadOnlyList` | Loose detached units |
| `DetachedUnits` | `MBReadOnlyList` | Detached units |

### Formation Info

| Property | Type | Description |
|----------|------|-------------|
| `RepresentativeClass` | `FormationClass` | Representative troop class |
| `LogicalClass` | `FormationClass` | Logical troop class |
| `PhysicalClass` | `FormationClass` | Physical troop class |
| `IsPlayerTroopInFormation` | `bool` | Whether player unit is in formation |
| `Arrangement` | `IFormationArrangement` | Arrangement method |

### Query Related

| Property | Type | Description |
|----------|------|-------------|
| `QuerySystem` | `FormationQuerySystem` | Query system |
| `CachedClosestEnemyFormation` | `Formation` | Cached closest enemy formation |
| `CachedClosestEnemyFormationDistanceSquared` | `float` | Closest enemy distance squared |

## Key Methods

### Unit Management

| Method | Description |
|--------|-------------|
| `AddUnit(Agent)` | Add unit to formation |
| `RemoveUnit(Agent)` | Remove unit from formation |
| `TransferUnits(Formation, int)` | Transfer units to target formation |
| `Split(int)` | Split formation |

### Query Methods

| Method | Description |
|--------|-------------|
| `GetUnitsWithoutDetachedOnes()` | Get all non-detached units |
| `GetAveragePositionOfUnits(bool, bool)` | Get average position of units |
| `GetMedianAgent(bool, bool, Vec2)` | Get median Agent |
| `GetCountOfUnitsWithCondition(Func)` | Count with condition |
| `GetCountOfUnitsBelongingToLogicalClass(FormationClass)` | Count units of a class |
| `GetCountOfUnitsBelongingToPhysicalClass(FormationClass, bool)` | Count units of physical class |
| `GetUnitsToPop(int)` | Get units to pop |
| `GetUnitsToPopWithReferencePosition(int, Vec3)` | Get units to pop at reference position |
| `GetUnderAttackTypeOfUnits(float)` | Get under-attack type |
| `GetMovementTypeOfUnits()` | Get unit movement type |
| `GetAverageMaximumMovementSpeedOfUnits()` | Get average max movement speed |
| `HasUnitsWithCondition(Func)` | Whether units with condition exist |

### Formation Operations

| Method | Description |
|--------|-------------|
| `SetTargetFormation(Formation)` | Set target formation |
| `GetWallDirectionOfRelativeFormationLocation(Agent)` | Get relative position |
| `GetFormationPower()` | Get formation combat power |
| `GetFormationMeleeFightingPower()` | Get melee combat power |
| `Rearrange(IFormationArrangement)` | Rearrange |
| `OnFormationDispersed()` | Called when formation disperses |

## FormationClass Enum

| Value | Description |
|-------|-------------|
| `Infantry` | Infantry |
| `Ranged` | Ranged |
| `Cavalry` | Cavalry |
| `HorseArcher` | Horse Archer |
| `HeavyInfantry` | Heavy Infantry |
| `LightCavalry` | Light Cavalry |
| `HeavyCavalry` | Heavy Cavalry |
| `Bodyguard` | Bodyguard |
| `NumberOfDefaultFormations` | Number of default formations |
| `NumberOfAllFormations` | Number of all formations |

## Important Events

| Event | Description |
|-------|-------------|
| `OnUnitAdded` | When unit is added to formation |
| `OnUnitRemoved` | When unit is removed from formation |
| `OnUnitAttached` | When unit is attached to formation |
| `OnUnitCountChanged` | When unit count changes |
| `OnUnitSpacingChanged` | When unit spacing changes |
| `OnTick` | On formation tick |
| `OnWidthChanged` | When formation width changes |
| `OnBeforeMovementOrderApplied` | Before movement order applied |
| `OnAfterArrangementOrderApplied` | After arrangement order applied |
| `OnFormationsChanged` (Team) | When formations change (Team level) |

## Common Usage

### 1. Get Team's Formations

```csharp
// Get all formations of a team
Team team = Mission.Current.GetTeam(TeamSideEnum.Attacker);
for (int i = 0; i < (int)FormationClass.NumberOfAllFormations; i++)
{
    Formation formation = team.GetFormation((FormationClass)i);
    if (formation != null)
    {
        // Process formation
    }
}

// Directly get specific type of formation
Formation infantryFormation = team.GetFormation(FormationClass.Infantry);
Formation rangedFormation = team.GetFormation(FormationClass.Ranged);
```

### 2. Iterate Units in Formation

```csharp
// Iterate all non-detached units
Formation formation = team.GetFormation(FormationClass.Infantry);
foreach (Agent agent in formation.UnitsWithoutLooseDetachedOnes)
{
    // Process each unit
}

// Get all units matching condition
var units = formation.GetUnitsWithoutDetachedOnes();
```

### 3. Move Entire Formation

```csharp
// Move via Formation AI
formation.AI.formationSpread = 5f;
formation.AI.StartMovementOrder(FormationAI.BehaviorSide.Left, MovementOrder.MovementOrderEnum.GoToPosition);

// Or set target position
WorldPosition targetPos = new WorldPosition(scene, UInt64.MaxValue, new Vec3(100, 50, 0));
formation.MovementOrder = MovementOrder.MovementOrderEnum.FormToPosition;
formation.MovementPosition = targetPos;
```

### 4. Transfer Units

```csharp
// Transfer units from one formation to another
Formation sourceFormation = team.GetFormation(FormationClass.Infantry);
Formation targetFormation = team.GetFormation(FormationClass.Cavalry);
sourceFormation.TransferUnits(targetFormation, 10); // Transfer 10 units

// Selective transfer
sourceFormation.TransferUnitsAux(targetFormation, 5, isPlayerOrder: true, useSelectivePop: true);
```

### 5. Query Formation Info

```csharp
// Get formation average position
Vec2 avgPos = formation.GetAveragePositionOfUnits(excludeDetachedUnits: false, excludePlayer: false);

// Get count of units of a class
int infantryCount = formation.GetCountOfUnitsBelongingToLogicalClass(FormationClass.Infantry);

// Get median Agent
Agent medianAgent = formation.GetMedianAgent(excludeDetachedUnits: false, excludePlayer: false, avgPos);

// Get formation combat power
float power = formation.GetFormationPower();
float meleePower = formation.GetFormationMeleeFightingPower();
```

### 6. Create Custom Formation Behavior

```csharp
// Formation QuerySystem provides rich query capabilities
// Get closest enemy formation
Formation closestEnemy = formation.CachedClosestEnemyFormation;
float distance = formation.CachedClosestEnemyFormationDistanceSquared;

// Use query system
float infantryRatio = formation.QuerySystem.InfantryUnitPercentage;
float rangedRatio = formation.QuerySystem.RangedUnitPercentage;
float cavalryRatio = formation.QuerySystem.CavalryUnitPercentage;
```

### 7. Split Formation

```csharp
// Split formation into multiple
List<Formation> splitFormations = formation.Split(count: 2).ToList();
```

## FormationAI Class

`FormationAI` controls the AI behavior of formations, including:
- Selecting target formation
- Selecting attack/defend behavior
- Controlling movement

### Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `CurrentBehavior` | `Behavior` | Current behavior |
| `BehaviorSide` | `BehaviorSide` | Behavior direction |
| `formationSpread` | `float` | Formation spread amount |

## Notes

1. **Unit detachment** - Units can "detach" from formation to act individually; use `LooseDetachedUnits` and `DetachedUnits` to track
2. **Cached values** - `CachedClosestEnemyFormation` is a cached value; don't recalculate every frame
3. **QuerySystem** - Complex formation queries should use `FormationQuerySystem`, which provides optimized query methods
4. **AI control** - Directly manipulating `Formation.AI` will override AI control; use with caution
5. **Unit indices** - Unit indices in formation can change; do not store long-term
