---
title: "Army"
description: "王国召集的临时军团：由领主部队组成，用于攻城或决战。"
---
# Army

**Namespace：** TaleWorlds.CampaignSystem  
**Module：** TaleWorlds.CampaignSystem  
**类型：** `public class Army : ILootable`  
**基类：** —  
**文件：** `TaleWorlds.CampaignSystem/Army.cs`

## 概述

`Army` 代表战役中 **王国临时召集的军团**。一个军团由一支 `LeaderParty`（发起者部队）和多支依附部队组成，它们共享一个目标，通常是攻城或摧毁敌军主力。

核心职责：

- 管理军团凝聚力（Cohesion）、士气（Morale）和总兵力。
- 提供召集（`Gather`）、解散（`FinishArmyObjective`）、添加成员（`AddPartyToMergedParties`）等 API。
- 决定军团在地图上的阵型与相对位置。

## 心智模型

把 `Army` 想象成 **“一辆由领主临时拼装的列车”**：

- 车头是 `LeaderParty`（军团长）。
- 每节车厢是一支加入的 `MobileParty`。
- 列车有燃油表——凝聚力（Cohesion）。凝聚力耗尽或目标完成后列车解散。
- 车头决定方向，所有车厢跟随；但每节车厢仍可独立战斗或撤退。

## 如何获取 Army

```csharp
// 遍历所有活跃军团
foreach (Army army in Army.Armies)
{
    if (army.Kingdom == Clan.PlayerClan.Kingdom)
    {
        // 玩家王国军团
    }
}

// 从王国创建
Kingdom myKingdom = Clan.PlayerClan.Kingdom;
myKingdom.CreateArmy(myRuler, targetSettlement, Army.ArmyTypes.Besieger);
```

## 核心属性

| 属性 | 说明 |
|------|------|
| `Armies` | 所有活跃军团。 |
| `LeaderParty` | 军团长部队。 |
| `ArmyOwner` | 军团长英雄。 |
| `Kingdom` | 所属王国。 |
| `ArmyType` | 军团类型：`Besieger`、`Raider`、`Defender`、`Patrolling` 等。 |
| `Cohesion` | 凝聚力；过低会导致部队离队。 |
| `Morale` | 士气。 |
| `Name` | 军团名称。 |

## 主要方法

### `public void Gather(Settlement initialHostileSettlement, MBReadOnlyList<MobileParty> partiesToCallToArmy = null)`
召集部队到目标据点，开始军团行动。

```csharp
List<MobileParty> participants = ...;
army.Gather(enemyTown, participants);
```

### `public void AddPartyToMergedParties(MobileParty mobileParty)`
将一支部队加入军团。

```csharp
army.AddPartyToMergedParties(allyParty);
```

### `public bool DoesLeaderPartyAndAttachedPartiesContain(MobileParty party)`
判断某部队是否属于该军团。

```csharp
bool isMember = army.DoesLeaderPartyAndAttachedPartiesContain(myParty);
```

### `public void BoostCohesionWithInfluence(float cohesionToGain, int cost)`
花费影响力提升凝聚力。

```csharp
army.BoostCohesionWithInfluence(10f, 50);
```

### `public void RecalculateArmyMorale()`
重新计算军团士气。

```csharp
army.RecalculateArmyMorale();
```

### `public void FinishArmyObjective()`
完成目标并解散军团。

```csharp
if (army.ArmyObjective == ArmyObjective.BesiegeTown && targetTown.IsUnderSiege == false)
{
    army.FinishArmyObjective();
}
```

### `public float CalculateCurrentStrength()` /
`public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)`
计算军团当前/自定义场景战力。

```csharp
float power = army.CalculateCurrentStrength();
```

### `public Vec2 GetRelativePositionForParty(MobileParty mobileParty, Vec2 armyFacing)`
获取某部队在军团阵型中的相对位置。

```csharp
Vec2 pos = army.GetRelativePositionForParty(party, army.LeaderParty.Bearing);
```

## 典型用法示例

### 示例 1：强制解散所有玩家王国军团

```csharp
foreach (Army army in Army.Armies.ToList())
{
    if (army.Kingdom == Clan.PlayerClan.Kingdom)
    {
        army.FinishArmyObjective();
    }
}
```

### 示例 2：创建攻城军团

```csharp
Settlement target = Settlement.Find("town_A7");
Kingdom kingdom = Clan.PlayerClan.Kingdom;
kingdom.CreateArmy(Hero.MainHero, target, Army.ArmyTypes.Besieger);
```

## 跨版本提示

- v1.3.0 / v1.3.15 / v1.4.5 军团 API 一致，核心就是 `Kingdom.CreateArmy`、`Gather`、`FinishArmyObjective`。
- v1.4.5 新增了一些军团AI条件判断，但创建/解散流程没变。

## 参见

- [Kingdom](../../campaign/Kingdom/) — 创建军团的王国
- [MobileParty](../../campaign/MobileParty/) — 军团成员
- [Settlement](../../campaign/Settlement/) — 军团目标据点
- [CampaignBehaviorBase](../CampaignBehaviorBase/) — 监听军团事件
