---
title: PlayerCaptivity
description: PlayerCaptivity - 玩家英雄被俘状态管理，控制俘虏开?结束、赎金计算和位置同步
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerCaptivity`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerCaptivity

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** class

## 概述

`PlayerCaptivity

` 管理玩家英雄被俘虏的完整生命周期。实例存储在 

`Campaign.Current.PlayerCaptivity

` 中，通过静态属性和方法代理访问。当玩家被俘时，主队伍停用、相机跟随俘获方队伍、游戏菜单切换到 

`prisoner_wait

` ?

`settlement_wait

`。释放时恢复玩家英雄状态、重新激活主队伍?
赎金计算（`GetPlayerRansomValue

`）综合考虑玩家金币、俘获方类型（王?×4、领主队?×2）、贸易特?ManOfMeans"加成。被俘期间每帧通过 

`Update(dt)

` 同步主队伍位置到俘获方位置，并委?

`ICaptivityCampaignBehavior.CheckCaptivityChange

` 检查逃跑/赎金事件?
## 心智模型

静态属性代理：

`PlayerCaptivity.IsCaptive

` ?

`Campaign.Current.PlayerCaptivity._captorParty != null

`。`CaptorParty

` setter 处理俘虏名册转移——从旧俘获方移除玩家、添加到新俘获方，并切换游戏菜单?
存档字段（`[SaveableField]

`）：

`_captivityStartTime

`、`_captorParty

`、`CountOfOffers

`、`CurrentRansomAmount

`、`_randomNumber

`、`_lastCheckTime

`?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`CaptorParty

` \| 

`PartyBase

` \| 俘获方队伍（setter 处理名册转移和菜单切换） \|
\| 

`IsCaptive

` \| 

`bool

` \| 玩家是否被俘（`_captorParty != null

`?\|
\| 

`CaptiveTimeInDays

` \| 

`int

` \| 被俘天数 \|
\| 

`CaptivityStartTime

` \| 

`CampaignTime

` \| 被俘开始时?\|
\| 

`LastCheckTime

` \| 

`CampaignTime

` \| 上次检查时间（逃跑/赎金事件周期?\|
\| 

`RandomNumber

` \| 

`float

` \| 随机数种子（被俘事件用） \|

## 主要方法

### StartCaptivity

`

`

`csharp
public static void StartCaptivity(PartyBase captorParty)
`

`

`

开始被俘状态。设置开始时间、停用主队伍、相机跟随俘获方、解散军队（若玩家是军队领袖）?
### EndCaptivity

`

`

`csharp
public static void EndCaptivity()
`

`

`

结束被俘状态。恢复英雄为 Active、重新加入队伍名册、重新激活主队伍、从俘获方名册移除、传送主队伍到遭遇半径外、触发释放技能事件?
### OnPlayerCharacterChanged

`

`

`csharp
public static void OnPlayerCharacterChanged()
`

`

`

玩家角色变更时（如死亡切换继承人），若新角色仍是被囚状态，重新初始化被俘数据?
### SetRansomAmount

`

`

`csharp
public void SetRansomAmount()
`

`

`

计算并设置当前赎金金额（

`GetPlayerRansomValue

`）?
### Update

`

`

`csharp
internal void Update(float dt)
`

`

`

每帧更新：同步主队伍位置到俘获方位置、激活等待菜单、委?

`ICaptivityCampaignBehavior.CheckCaptivityChange

` 检查逃跑/赎金事件?
## 使用示例

`

`

`csharp
// 检查玩家是否被?if (PlayerCaptivity.IsCaptive)
{
    int days = PlayerCaptivity.CaptiveTimeInDays;
    Debug.Print($"玩家已被?{days} ?);
}

// 战斗失败后让玩家被俘
PlayerCaptivity.StartCaptivity(enemyParty.Party);

// 强制释放玩家
PlayerCaptivity.EndCaptivity();

// 设置赎金金额（玩家可支付的赎金）
Campaign.Current.PlayerCaptivity.SetRansomAmount();
int ransom = Campaign.Current.PlayerCaptivity.CurrentRansomAmount;
`

`

`

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)