---
title: TeleportHeroAction
description: TeleportHeroAction - 英雄传送动作，支持立即/延迟与聚?队伍/族长/总督目标
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TeleportHeroAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TeleportHeroAction
**命名空间:** TaleWorlds.CampaignSystem.Actions
**模块:** TaleWorlds.CampaignSystem
**类型:** static class

## 概述
`TeleportHeroAction

` 是一组静态方法，用于在战役中把英雄从当前位置传送到目标位置（聚落、队伍）或赋予新角色（队伍族长、聚落总督）。所有方法最终汇聚到 

`ApplyInternal

`，按 

`TeleportationDetail

` 枚举分派到不同的处理分支?
动作分两大类：立即传送（Immediate）与延迟传送（Delayed）。立即传送当帧完成位置切换；延迟传送把英雄置为 

`Traveling

` 状态，由后续系统处理实际到达。延迟传送还会处?卸任总督"?离开当前聚落"?从当前队伍移?等前置清理?
## 心智模型
传送动作的核心约束?不能在战斗中传?。`ApplyInternal

` 在多个分支检?

`PartyBelongedTo.IsActive

`、`IsCurrentlyEngagingParty

`、`MapEvent != null

`，若处于战斗则直?return 不传送。这是为了防止战斗中途抽走英雄导致崩溃?
延迟传送的设计意图?承诺未来到达"：英雄先从当前所有位置（聚落、队伍、总督职务）剥离，状态置?

`Traveling

`，然后由 

`CampaignEventDispatcher.OnHeroTeleportationRequested

` 通知其他系统（如 AI 调度）处理后续。立即传送则跳过 Traveling 状态，直接 

`EnterSettlementAction

` ?

`AddHeroToPartyAction

`?
族长传送（

`AsPartyLeader

`）额外执?

`ChangePartyLeader

`、清除缓存名称、重置视觉、取消解散状态、恢?AI 决策——这是为了让传送后的队伍立即可用?
## 主要枚举
### TeleportationDetail
`

`

`csharp
public enum TeleportationDetail
{
    ImmediateTeleportToSettlement,
    ImmediateTeleportToParty,
    ImmediateTeleportToPartyAsPartyLeader,
    DelayedTeleportToSettlement,
    DelayedTeleportToParty,
    DelayedTeleportToSettlementAsGovernor,
    DelayedTeleportToPartyAsPartyLeader
}
`

`

`
7 种传送模式，区分立即/延迟、目标类型（聚落/队伍）、角色（普?族长/总督）?
## 主要方法
### ApplyImmediateTeleportToSettlement
`

`

`csharp
public static void ApplyImmediateTeleportToSettlement(Hero heroToBeMoved, Settlement targetSettlement)
`

`

`
立即把英雄传送进目标聚落。流程：若不活跃则激??离开当前聚落 ?从当前队伍移除（若队伍在战斗则中止）?

`EnterSettlementAction.ApplyForCharacterOnly

`?
### ApplyImmediateTeleportToParty
`

`

`csharp
public static void ApplyImmediateTeleportToParty(Hero heroToBeMoved, MobileParty party)
`

`

`
立即把英雄加入目标队伍。若英雄处于 Traveling 状态则激活，然后 

`AddHeroToPartyAction.Apply

`?
### ApplyImmediateTeleportToPartyAsPartyLeader
`

`

`csharp
public static void ApplyImmediateTeleportToPartyAsPartyLeader(Hero heroToBeMoved, MobileParty party)
`

`

`
立即把英雄传送到目标队伍并设为族长。在 

`ApplyImmediateTeleportToParty

` 基础上额外：

`ChangePartyLeader

`、清除缓存名称、重置视觉、取消解散、恢?AI 决策?
### ApplyDelayedTeleportToSettlement
`

`

`csharp
public static void ApplyDelayedTeleportToSettlement(Hero heroToBeMoved, Settlement targetSettlement)
`

`

`
延迟传送到聚落。若已在目标聚落则降级为立即传送。否则：卸任总督 ?离开当前聚落 ?从当前队伍移除（战斗中中止）?状态置 Traveling?
### ApplyDelayedTeleportToParty
`

`

`csharp
public static void ApplyDelayedTeleportToParty(Hero heroToBeMoved, MobileParty party)
`

`

`
延迟传送到队伍。执行与 

`ApplyDelayedTeleportToSettlement

` 相同的前置清理（卸任总督、离开聚落、移除队伍），然后置 Traveling?
### ApplyDelayedTeleportToSettlementAsGovernor
`

`

`csharp
public static void ApplyDelayedTeleportToSettlementAsGovernor(Hero heroToBeMoved, Settlement targetSettlement)
`

`

`
延迟传送到聚落并担任总督。前置清理同上，?Traveling。实际就任总督由后续系统处理?
### ApplyDelayedTeleportToPartyAsPartyLeader
`

`

`csharp
public static void ApplyDelayedTeleportToPartyAsPartyLeader(Hero heroToBeMoved, MobileParty party)
`

`

`
延迟传送到队伍并担任族长。前置清理同上，额外把队伍名称设?{CLAN_NAME} Party"，置 Traveling?
## 使用示例
### 示例: 立即召回总督到玩家队?**场景**: mod 想在特定事件后把某个分队的总督立即召回玩家队伍?

`

`

`csharp
// 检查英雄当前是否在战斗中（避免传送失败）
if (governor.PartyBelongedTo == null \|\| 
    (governor.PartyBelongedTo.MapEvent == null && !governor.PartyBelongedTo.IsCurrentlyEngagingParty))
{
    // 卸任总督 ?立即传送到玩家队伍
    if (governor.GovernorOf != null)
        ChangeGovernorAction.RemoveGovernorOf(governor);
    TeleportHeroAction.ApplyImmediateTeleportToParty(governor, MobileParty.MainParty);
}
`

`

`
**要点**: 立即传送若遇战斗会静默 return（无异常、无返回值），调用方需自行预检；延迟传送会先剥离英雄所有职务与位置，若后续系统未正确处?Traveling 状态，英雄可能"消失"；`OnHeroTeleportationRequested

` 事件?

`ApplyInternal

` 开头就触发，先于实际传送逻辑，监听者可以据此拦截或记录?
## 参见
- [完整类目录](../catalog-campaign.md)
- [本领域目录](../catalog-campaign.md)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview.md)