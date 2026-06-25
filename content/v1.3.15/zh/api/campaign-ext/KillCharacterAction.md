---
title: KillCharacterAction
description: KillCharacterAction - 角色死亡行动，处理英雄死亡的完整流程包括继承、王国更替、队伍转移和讣告生成
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KillCharacterAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KillCharacterAction
**命名空间:** TaleWorlds.CampaignSystem.Actions
**模块:** TaleWorlds.CampaignSystem
**类型:** static class

## 概述

`KillCharacterAction

` 是处理英雄死亡的统一入口。所有导致英雄死亡的场景——战死、处决、谋杀、老死、难产、失踪——都通过对应?

`Apply*

` 方法进入 

`ApplyInternal

`，后者执行完整的死亡处理流程：触发前置事件、设置死亡标记、处理继承、转移队伍领导权、清理配?同伴关系、触发后置事件?
`ApplyInternal

` 的核心逻辑分为三个阶段：① **前置检?*——`CanDie

` 判断是否可死，已在战?围攻中的角色先加死亡标记（`DeathMark

`）延迟处理；?**继承处理**——如果死者是家族领袖，调?

`ChangeClanLeaderAction

` 选新领袖；如果死者是王国 ruling clan 的领袖，触发王国决策或直接选新 ruling clan；③ **善后清理**——`MakeDead

` 设置死亡状态和日期，处理队伍领导权转移，移除总督职务，清理配偶和同伴关系，触?

`OnHeroKilled

` 事件?
`MakeDead

` 处理死者所属队伍：如果死者是队伍领袖，尝试转移领导权给队伍中其他英雄；无继承人时解散队伍。死者从队伍名册中移除，若队伍空了则销毁?
`CreateObituary

` 根据死因生成不同风格的讣告文本：战死、难产、处决、失踪、谋杀、战伤不治、自然死亡各有对应模板。讣告包含角色姓名、头衔、所属阵营、死亡年份、年龄和声望描述?
## 心智模型

把死亡处理想象成**有序的多阶段流水?*。首先是**延迟队列**：如果角色正在参加地图事件或围攻，不能立即死亡——先加死亡标记（

`AddDeathMark

`），等事件结束后通过 

`ApplyByDeathMark

` 执行实际死亡。只有非战斗状态或强制执行（`isForced

`）时才直接处理?
其次?*继承?*：家族领袖死??

`ChangeClanLeaderAction

` 选新领袖 ?如果?ruling clan ?检查王国其?clan ?有候选则 

`ChangeRulingClanAction

` 或发?

`KingSelectionKingdomDecision

` ?无候选则 

`DestroyKingdomAction

`。玩家主角死亡不执行继承（`isForced

` 时除外），而是触发 

`OnBeforeMainCharacterDied

` 让游戏处理?
最后是**善后清理**：`MakeDead

` 改状态为 Dead、设死亡日期、处理队伍、释放囚犯。然后移除总督职务、清空配偶、移除同伴身份、从当前场景移除。非玩家角色最后调?

`OnDeath()

` 触发自定义死亡逻辑?
### KillCharacterActionDetail 枚举

\| ?\| 说明 \|
\|----\|------\|
\| 

`None

` \| 无（默认?\|
\| 

`Murdered

` \| 被暗杀 \|
\| 

`DiedInLabor

` \| 难产而死 \|
\| 

`DiedOfOldAge

` \| 老死 \|
\| 

`DiedInBattle

` \| 战死 \|
\| 

`WoundedInBattle

` \| 战伤不治 \|
\| 

`Executed

` \| 被处?\|
\| 

`ExecutionAfterMapEvent

` \| 地图事件后处?\|
\| 

`Lost

` \| 失踪（移除） \|

## 主要方法

### ApplyByOldAge
`

`

`csharp
public static void ApplyByOldAge(Hero victim, bool showNotification = true)
`

`

`
老死。killer ?

`null

`，detail ?

`DiedOfOldAge

`。不强制?
### ApplyByWounds
`

`

`csharp
public static void ApplyByWounds(Hero victim, bool showNotification = true)
`

`

`
战伤不治。killer ?

`null

`，detail ?

`WoundedInBattle

`?
### ApplyByBattle
`

`

`csharp
public static void ApplyByBattle(Hero victim, Hero killer, bool showNotification = true)
`

`

`
战死。killer 为击杀者，detail ?

`DiedInBattle

`?
### ApplyByMurder
`

`

`csharp
public static void ApplyByMurder(Hero victim, Hero killer = null, bool showNotification = true)
`

`

`
暗杀。killer 可为 

`null

`，detail ?

`Murdered

`?
### ApplyInLabor
`

`

`csharp
public static void ApplyInLabor(Hero lostMother, bool showNotification = true)
`

`

`
难产而死。killer ?

`null

`，detail ?

`DiedInLabor

`?
### ApplyByExecution
`

`

`csharp
public static void ApplyByExecution(Hero victim, Hero executer, bool showNotification = true, bool isForced = false)
`

`

`
处决。killer 为行刑者，detail ?

`Executed

`。`isForced

` ?

`true

` 时跳?

`CanDie

` 检查。处决领主且行刑者是玩家时触?

`TraitLevelingHelper.OnLordExecuted

`（荣誉特质变化）?
### ApplyByExecutionAfterMapEvent
`

`

`csharp
public static void ApplyByExecutionAfterMapEvent(Hero victim, Hero executer, bool showNotification = true, bool isForced = false)
`

`

`
地图事件后处决。detail ?

`ExecutionAfterMapEvent

`。此类型即使在地图事件中也会直接执行（不延迟）?
### ApplyByRemove
`

`

`csharp
public static void ApplyByRemove(Hero victim, bool showNotification = false, bool isForced = true)
`

`

`
移除角色。detail ?

`Lost

`，强制执行（跳过 

`CanDie

`）。用于系统清理不需要的角色?
### ApplyByDeathMark
`

`

`csharp
public static void ApplyByDeathMark(Hero victim, bool showNotification = false)
`

`

`
执行之前设置的死亡标记。使?

`victim.DeathMark

` ?

`victim.DeathMarkKillerHero

`。不强制?
### ApplyByDeathMarkForced
`

`

`csharp
public static void ApplyByDeathMarkForced(Hero victim, bool showNotification = false)
`

`

`
强制执行死亡标记。与 

`ApplyByDeathMark

` 相同?

`isForced = true

`?
### ApplyByPlayerIllness
`

`

`csharp
public static void ApplyByPlayerIllness()
`

`

`
玩家因病死亡。直接对 

`Hero.MainHero

` 执行，detail ?

`DiedOfOldAge

`，强制执行?
### ApplyInternal (私有核心)
`

`

`csharp
private static void ApplyInternal(Hero victim, Hero killer, KillCharacterActionDetail actionDetail, bool showNotification, bool isForced = false)
`

`

`
所?

`Apply*

` 方法的统一入口。执行完整死亡流程：CanDie 检??死亡标记延迟 ?前置事件 ?继承处理 ?MakeDead ?善后清理 ?后置事件?
### MakeDead (私有)
`

`

`csharp
private static void MakeDead(Hero victim, bool disbandVictimParty = true)
`

`

`
设置死亡状态、日期，处理囚犯释放和队伍领导权转移。队伍领袖死亡时优先转移给队伍中其他英雄，无继承人时解散队伍?
### CreateObituary (私有)
`

`

`csharp
private static TextObject CreateObituary(Hero hero, KillCharacterActionDetail detail)
`

`

`
根据英雄类型（领?小阵?要人/普通）和死因生成讣告文本。包含姓名、头衔、阵营、死亡年份、年龄、声望描述?
## 使用示例

### 示例: 处决俘虏领主

**场景**: Mod 想在玩家选择后处决俘虏领主，并处理后续影响?
`

`

`csharp
public static void ExecutePrisoner(Hero prisoner, Hero executer)
{
    // 检查是否可被处?    if (!prisoner.CanDie(KillCharacterAction.KillCharacterActionDetail.Executed))
    {
        InformationManager.DisplayMessage(new InformationMessage(
            $"{prisoner.Name} 无法被处决?, Colors.Red));
        return;
    }

    // 执行处决
    KillCharacterAction.ApplyByExecution(prisoner, executer, showNotification: true);

    // ApplyByExecution 内部已处理：
    // - 触发 OnBeforeHeroKilled ?OnHeroKilled 事件
    // - 处理家族/王国继承
    // - 如果 executer 是玩家且有荣誉特质，触发 OnLordExecuted
    // - 生成讣告文本
}
`

`

`

**要点**: 

`CanDie

` 检查角色是否允许死亡（某些剧情角色有保护）；`ApplyByExecution

` 是完整操作——不需要额外调用继承或清理方法；如果处决者是玩家且受害者荣??，会降低玩家荣誉特质?
### 示例: 延迟死亡处理

**场景**: Mod 想在战斗中标记角色死亡，但让其在战斗结束后才真正死亡?
`

`

`csharp
// 在地图事件中标记死亡（不立即执行?victim.AddDeathMark(killer, KillCharacterAction.KillCharacterActionDetail.DiedInBattle);

// 战斗结束后执行实际死?// 通常由引擎在 MapEvent 结束时自动调?ApplyByDeathMark
// Mod 也可以手动触发：
KillCharacterAction.ApplyByDeathMark(victim, showNotification: true);

// 如果需要强制执行（跳过 CanDie 检查）?KillCharacterAction.ApplyByDeathMarkForced(victim);
`

`

`

**要点**: 角色在地图事件或围攻中被 

`ApplyByBattle

` 等方法调用时，会自动走死亡标记延迟路径（除非 

`isForced

`）；

`ApplyByDeathMark

` 使用角色已有?

`DeathMark

` ?

`DeathMarkKillerHero

`——不需要再次传入；

`ApplyByDeathMarkForced

` 跳过 

`CanDie

` 检查，用于确保死亡标记被执行?
## 参见
- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
