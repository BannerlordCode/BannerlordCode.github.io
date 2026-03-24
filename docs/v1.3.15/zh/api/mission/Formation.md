# Formation 类

**命名空间**: TaleWorlds.MountAndBlade  
**文件**: `TaleWorlds.MountAndBlade/Formation.cs` (约 130,000 行)  
**用途**: 管理战场上的单位阵型,控制一群单位的集体移动、排列和行为。

## 概述

`Formation` 代表战场上的一组单位阵型。阵型是骑砍战斗中核心的组织单位:
- 每个 Team 可以有多个 Formation
- 每个 Formation 包含特定类型的单位(步兵、弓箭手、骑兵等)
- Formation 控制单位的集体移动和排列
- AI 使用 Formation 来协调群体行为

## 关键属性

### 基本属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `FormationIndex` | `FormationClass` | 阵型索引/类型 |
| `CountOfUnits` | `int` | 单位总数 |
| `CountOfDetachedUnits` | `int` | 脱离单位数 |
| `CountOfUnitsWithoutDetachedOnes` | `int` | 非脱离单位数 |
| `Team` | `Team` | 所属队伍 |
| `AI` | `FormationAI` | 阵型 AI 控制器 |
| `QuerySystem` | `FormationQuerySystem` | 阵型查询系统 |

### 单位列表

| 属性 | 类型 | 说明 |
|------|------|------|
| `UnitsWithoutLooseDetachedOnes` | `MBReadOnlyList` | 非脱离单位列表 |
| `LooseDetachedUnits` | `MBReadOnlyList` | 游离脱离单位列表 |
| `DetachedUnits` | `MBReadOnlyList` | 脱离单位列表 |

### 阵型信息

| 属性 | 类型 | 说明 |
|------|------|------|
| `RepresentativeClass` | `FormationClass` | 代表性兵种类别 |
| `LogicalClass` | `FormationClass` | 逻辑兵种类别 |
| `PhysicalClass` | `FormationClass` | 物理兵种类别 |
| `IsPlayerTroopInFormation` | `bool` | 是否有玩家单位 |
| `Arrangement` | `IFormationArrangement` | 排列方式 |

### 查询相关

| 属性 | 类型 | 说明 |
|------|------|------|
| `QuerySystem` | `FormationQuerySystem` | 查询系统 |
| `CachedClosestEnemyFormation` | `Formation` | 最近的敌方阵型缓存 |
| `CachedClosestEnemyFormationDistanceSquared` | `float` | 最近敌方距离平方 |

## 重要方法

### 单位管理

| 方法 | 说明 |
|------|------|
| `AddUnit(Agent)` | 添加单位到阵型 |
| `RemoveUnit(Agent)` | 从阵型移除单位 |
| `TransferUnits(Formation, int)` | 转移单位到目标阵型 |
| `Split(int)` | 分割阵型 |

### 查询方法

| 方法 | 说明 |
|------|------|
| `GetUnitsWithoutDetachedOnes()` | 获取所有非脱离单位 |
| `GetAveragePositionOfUnits(bool, bool)` | 获取单位平均位置 |
| `GetMedianAgent(bool, bool, Vec2)` | 获取中位数 Agent |
| `GetCountOfUnitsWithCondition(Func)` | 条件计数 |
| `GetCountOfUnitsBelongingToLogicalClass(FormationClass)` | 获取某类别的单位数 |
| `GetCountOfUnitsBelongingToPhysicalClass(FormationClass, bool)` | 获取某物理类别的单位数 |
| `GetUnitsToPop(int)` | 获取要弹出的单位 |
| `GetUnitsToPopWithReferencePosition(int, Vec3)` | 获取参考位置的弹出单位 |
| `GetUnderAttackTypeOfUnits(float)` | 获取被攻击类型 |
| `GetMovementTypeOfUnits()` | 获取单位移动类型 |
| `GetAverageMaximumMovementSpeedOfUnits()` | 获取平均最大移动速度 |
| `HasUnitsWithCondition(Func)` | 是否存在符合条件的单位 |

### 阵型操作

| 方法 | 说明 |
|------|------|
| `SetTargetFormation(Formation)` | 设置目标阵型 |
| `GetWallDirectionOfRelativeFormationLocation(Agent)` | 获取相对位置 |
| `GetFormationPower()` | 获取阵型战斗力 |
| `GetFormationMeleeFightingPower()` | 获取近战战斗力 |
| `Rearrange(IFormationArrangement)` | 重新排列 |
| `OnFormationDispersed()` | 阵型散开时调用 |

## FormationClass 枚举

| 值 | 说明 |
|------|------|
| `Infantry` | 步兵 |
| `Ranged` | 弓箭手 |
| `Cavalry` | 骑兵 |
| `HorseArcher` | 马弓箭手 |
| `HeavyInfantry` | 重步兵 |
| `LightCavalry` | 轻骑兵 |
| `HeavyCavalry` | 重骑兵 |
| `Bodyguard` | 侍卫 |
| `NumberOfDefaultFormations` | 默认阵型数量 |
| `NumberOfAllFormations` | 所有阵型数量 |

## 重要事件

| 事件 | 说明 |
|------|------|
| `OnUnitAdded` | 单位添加到阵型时 |
| `OnUnitRemoved` | 单位从阵型移除时 |
| `OnUnitAttached` | 单位附加到阵型时 |
| `OnUnitCountChanged` | 单位数量变化时 |
| `OnUnitSpacingChanged` | 单位间距变化时 |
| `OnTick` | 阵型 Tick 时 |
| `OnWidthChanged` | 阵型宽度变化时 |
| `OnBeforeMovementOrderApplied` | 移动命令应用前 |
| `OnAfterArrangementOrderApplied` | 排列命令应用后 |
| `OnFormationsChanged` (Team) | 阵型变化时(Team级别) |

## 常见用法

### 1. 获取队伍的阵型

```csharp
// 获取队伍的所有阵型
Team team = Mission.Current.GetTeam(TeamSideEnum.Attacker);
for (int i = 0; i < (int)FormationClass.NumberOfAllFormations; i++)
{
    Formation formation = team.GetFormation((FormationClass)i);
    if (formation != null)
    {
        // 处理阵型
    }
}

// 直接获取特定类型的阵型
Formation infantryFormation = team.GetFormation(FormationClass.Infantry);
Formation rangedFormation = team.GetFormation(FormationClass.Ranged);
```

### 2. 遍历阵型中的单位

```csharp
// 遍历所有非脱离单位
Formation formation = team.GetFormation(FormationClass.Infantry);
foreach (Agent agent in formation.UnitsWithoutLooseDetachedOnes)
{
    // 处理每个单位
}

// 获取所有符合条件的单位
var units = formation.GetUnitsWithoutDetachedOnes();
```

### 3. 移动整个阵型

```csharp
// 通过阵型 AI 移动
formation.AI.formationSpread = 5f;
formation.AI.StartMovementOrder(FormationAI.BehaviorSide.Left, MovementOrder.MovementOrderEnum.GoToPosition);

// 或者设置目标位置
WorldPosition targetPos = new WorldPosition(scene, UInt64.MaxValue, new Vec3(100, 50, 0));
formation.MovementOrder = MovementOrder.MovementOrderEnum.FormToPosition;
formation.MovementPosition = targetPos;
```

### 4. 转移单位

```csharp
// 将单位从一阵型转移到另一阵型
Formation sourceFormation = team.GetFormation(FormationClass.Infantry);
Formation targetFormation = team.GetFormation(FormationClass.Cavalry);
sourceFormation.TransferUnits(targetFormation, 10); // 转移10个单位

// 选择性转移
sourceFormation.TransferUnitsAux(targetFormation, 5, isPlayerOrder: true, useSelectivePop: true);
```

### 5. 查询阵型信息

```csharp
// 获取阵型平均位置
Vec2 avgPos = formation.GetAveragePositionOfUnits(excludeDetachedUnits: false, excludePlayer: false);

// 获取某类别单位数
int infantryCount = formation.GetCountOfUnitsBelongingToLogicalClass(FormationClass.Infantry);

// 获取中位数 Agent
Agent medianAgent = formation.GetMedianAgent(excludeDetachedUnits: false, excludePlayer: false, avgPos);

// 获取阵型战斗力
float power = formation.GetFormationPower();
float meleePower = formation.GetFormationMeleeFightingPower();
```

### 6. 创建自定义阵型行为

```csharp
// 阵型 QuerySystem 提供了丰富的查询能力
// 获取最近的敌方阵型
Formation closestEnemy = formation.CachedClosestEnemyFormation;
float distance = formation.CachedClosestEnemyFormationDistanceSquared;

// 使用查询系统
float infantryRatio = formation.QuerySystem.InfantryUnitPercentage;
float rangedRatio = formation.QuerySystem.RangedUnitPercentage;
float cavalryRatio = formation.QuerySystem.CavalryUnitPercentage;
```

### 7. 分割阵型

```csharp
// 将阵型分割成多个
List<Formation> splitFormations = formation.Split(count: 2).ToList();
```

## FormationAI 类

`FormationAI` 控制阵型的 AI 行为,包括:
- 选择目标阵型
- 选择进攻/防守行为
- 控制移动

### 关键属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `CurrentBehavior` | `Behavior` | 当前行为 |
| `BehaviorSide` | `BehaviorSide` | 行为方向 |
| `formationSpread` | `float` | 阵型展开程度 |

## 注意事项

1. **单位脱离** - 单位可以"脱离"阵型单独行动,使用 `LooseDetachedUnits` 和 `DetachedUnits` 追踪
2. **缓存值** - `CachedClosestEnemyFormation` 等是缓存值,不要每帧重新计算
3. **QuerySystem** - 复杂的阵型查询应使用 `FormationQuerySystem`,它提供了优化的查询方法
4. **AI 控制** - 直接操作 `Formation.AI` 会覆盖 AI 控制,需要谨慎
5. **单位索引** - 单位在阵型中的索引可能会变化,不要长期存储
