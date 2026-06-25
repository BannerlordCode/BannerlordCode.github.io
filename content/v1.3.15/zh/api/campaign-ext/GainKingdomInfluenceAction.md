---
title: GainKingdomInfluenceAction
description: GainKingdomInfluenceAction - 王国影响力获取的静态动?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GainKingdomInfluenceAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GainKingdomInfluenceAction
**命名空间:** TaleWorlds.CampaignSystem.Actions
**模块:** TaleWorlds.CampaignSystem
**类型:** static class

## 概述
`GainKingdomInfluenceAction

` 是一个静态动作类，封装了角色或部队因各种事件获取王国影响力（Influence）的逻辑。所有方法都是静态的，调用时会解析英雄所属家族，应用王国政策（`MilitaryCoronae

` 加成 20%）和特长加成，最终通过 

`ChangeClanInfluenceAction

` 修改家族影响力值?
## 心智模型
该类?事件→影响力"的映射层。每个公开方法对应一种获取影响力的场景（战斗、劫掠、围城、捐赠俘虏等），内部统一调用 

`ApplyInternal

`。`ApplyInternal

` 首先确定归属家族（优?CompanionOf，其?Clan，再?party 解析），然后根据原因类型应用政策和特长加成，最后调?

`ChangeClanInfluenceAction.Apply

` 实际修改影响力。部分场景（如捐赠俘虏、战斗、撤离围城）会向玩家显示信息提示?
## 主要属?\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 无公共属?\| - \| 静态类，无实例属?\|

## 主要方法
### ApplyForBattle
`

`

`csharp
public static void ApplyForBattle(Hero hero, float value)
`

`

`
英雄在战斗中获取影响力。应?

`PreBattleManeuvers

` 特长的次要加成?
### ApplyForGivingFood
`

`

`csharp
public static void ApplyForGivingFood(Hero hero1, Hero hero2, float value)
`

`

`
英雄之间给予食物：`hero1

` 获得 

`value

` 影响力，

`hero2

` 失去 

`value

` 影响力（传入负值）?
### ApplyForDonatePrisoners
`

`

`csharp
public static void ApplyForDonatePrisoners(MobileParty donatingParty, float value)
`

`

`
部队向驻军捐赠俘虏时获得影响力。若捐赠方是玩家部队，会显示信息提示?
### ApplyForRaidingEnemyVillage
`

`

`csharp
public static void ApplyForRaidingEnemyVillage(MobileParty side1Party, float value)
`

`

`
部队劫掠敌方村庄时获得影响力?
### ApplyForBesiegingEnemySettlement
`

`

`csharp
public static void ApplyForBesiegingEnemySettlement(MobileParty side1Party, float value)
`

`

`
部队围攻敌方定居点时获得影响力?
### ApplyForCapturingEnemySettlement
`

`

`csharp
public static void ApplyForCapturingEnemySettlement(MobileParty side1Party, float value)
`

`

`
部队攻占敌方定居点时获得影响力。应?

`Besieged

` 特长加成?
### ApplyForSiegeSafePassageBarter
`

`

`csharp
public static void ApplyForSiegeSafePassageBarter(MobileParty side1Party, float value)
`

`

`
通过交易获得围城安全通行权时的影响力变化。若主角是相关英雄，显示撤离围城失去影响力的提示?
### ApplyForLeavingTroopToGarrison
`

`

`csharp
public static void ApplyForLeavingTroopToGarrison(Hero hero, float value)
`

`

`
英雄将部队留给驻军时获得影响力?
### ApplyForBoardGameWon
`

`

`csharp
public static void ApplyForBoardGameWon(Hero hero, float value)
`

`

`
英雄赢得棋盘游戏时获得影响力?
### ApplyForJoiningFaction
`

`

`csharp
public static void ApplyForJoiningFaction(Hero hero, float value)
`

`

`
英雄加入阵营时获得影响力?
## 使用示例
### 示例: 战斗胜利后给予玩家影响力
**场景**: 玩家在战斗中获胜，需要根据战斗规模给予影响力奖励?

`

`

`csharp
public void OnBattleWon(BattleSideEnum winnerSide, float battleScore)
{
    if (winnerSide == BattleSideEnum.Attacker && 
        MobileParty.MainParty.Side == BattleSideEnum.Attacker)
    {
        // 基于战斗分数计算影响?        float influenceGain = battleScore * 0.1f;
        GainKingdomInfluenceAction.ApplyForBattle(Hero.MainHero, influenceGain);
        // 方法内部会自动显示信息提示并应用特长加成
    }
}
`

`

`
**要点**: 不需要手动显示信息提示，

`ApplyInternal

` 会在适当场景自动调用 

`InformationManager.DisplayMessage

`；若英雄不属于任何王国或家族，方法会静默返回不执行任何操作?
## 参见
- [完整类目录](../catalog-campaign)
- [本领域目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
