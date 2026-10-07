---
title: "CustomBattlePlayerSide"
description: "自定义战斗中的玩家阵营枚举，区分攻方与守方。"
---
# CustomBattlePlayerSide

**命名空间：** `TaleWorlds.MountAndBlade.CustomBattle`
**模块：** `TaleWorlds.MountAndBlade.CustomBattle`
**类型：** `enum`
**基类：** `System.Enum`（enum 隐式继承）
**源文件：** `bannerlord-1.4.7/TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattlePlayerSide.cs`（声明见第 6 行）

## 概述
`CustomBattlePlayerSide` 是一个枚举类型，用于表示自定义战斗中玩家所属的阵营。它区分攻方（Attacker）与守方（Defender），是自定义战斗逻辑中判断玩家角色、分配队伍、决定胜负条件的基础。对 mod 开发者而言，这个枚举是编写自定义战斗规则时最常被查询的类型之一。

## 心智模型
把 `CustomBattlePlayerSide` 想象成战斗中的「红蓝标签」。每场自定义战斗都有两个对立的阵营：攻方负责进攻，守方负责防守。这个枚举就是给每个玩家贴上的标签——`Attacker` 或 `Defender`。战斗系统根据这个标签决定 AI 行为、目标选择、胜负判定等。开发者编写自定义逻辑时，通过读取玩家的 `CustomBattlePlayerSide` 值来决定其行为模式。

## 怎么用
### 怎么拿到
`CustomBattlePlayerSide` 的值通常由自定义战斗系统在创建战斗时分配，开发者通过查询玩家的阵营属性来获取。例如，在战斗行为或场景逻辑中，可以通过相关 API 读取当前玩家的 `CustomBattlePlayerSide` 值。

### 典型用法
在自定义战斗 mod 中，开发者通常根据玩家的阵营执行不同的逻辑：

```csharp
if (playerSide == CustomBattlePlayerSide.Attacker)
{
    // 攻方逻辑：主动进攻、寻找守方目标
}
else if (playerSide == CustomBattlePlayerSide.Defender)
{
    // 守方逻辑：防守阵地、反击攻方
}
```

### 坑
- 不要假设 `CustomBattlePlayerSide` 的底层整数值，应始终使用枚举名进行比较。
- 在攻城战中，攻方和守方的 AI 行为差异很大，混淆两者会导致战斗逻辑异常。
- 该枚举仅用于自定义战斗场景，不适用于战役（Campaign）模式中的阵营判断。

## 关键成员
| 成员 | 用途 |
| --- | --- |
| `Attacker` | 攻方阵营，负责进攻，通常主动寻找并攻击守方 |
| `Defender` | 守方阵营，负责防守，通常驻守阵地并反击攻方 |

## 真实示例
```csharp
// 根据玩家阵营分配不同的初始位置
CustomBattlePlayerSide side = GetPlayerSide(player);
if (side == CustomBattlePlayerSide.Attacker)
{
    player.Position = attackerSpawnPoint;
    player.Team = attackerTeam;
}
else
{
    player.Position = defenderSpawnPoint;
    player.Team = defenderTeam;
}

// 根据阵营决定 AI 行为
if (side == CustomBattlePlayerSide.Defender)
{
    aiBehavior = DefendPosition;
}
else
{
    aiBehavior = AttackNearestEnemy;
}
```

## 参见
- [CustomBattleSubModule](../CustomBattleSubModule)
- [CustomBattleSceneData](../CustomBattleSceneData)
- [../../core-extra/Game](../../core-extra/Game)

## 导航
- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
