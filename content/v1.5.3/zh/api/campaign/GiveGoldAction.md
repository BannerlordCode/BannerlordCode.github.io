---
title: "GiveGoldAction"
description: "静态 Action 类，让你在战役里安全地在角色、聚落与部队之间转移金币：自动夹取余额、选对钱袋并派发交易事件，而不是直接改 Gold 字段。"
---

# GiveGoldAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class GiveGoldAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/GiveGoldAction.cs`

## 概述

GiveGoldAction 是战役层负责「金币转移」的唯一正规入口。游戏里的金币分装在三个互不相通的钱袋里：角色身上的 `Hero.Gold`、流动部队的 `PartyTradeGold`、聚落金库的 `SettlementComponent.Gold`。这个静态类提供 8 个语义化方法，覆盖「角色 / 聚落 / 部队」两两组合的转账场景，全部收敛到一个私有的 `ApplyInternal`。

为什么必须走它而不是直接改字段：直接给 `Hero.Gold` 赋值会绕过三件关键的事。其一，余额夹取——`ApplyInternal` 用 `MathF.Min` 把转账金额夹到付款方实际余额以内，防止透支成负数；其二，钱袋选择——同一个「部队」概念在移动端是贸易金、在聚落端是金库，直接改字段很容易改错对象；其三，事件派发——所有变体最后都会触发 `OnHeroOrPartyTradedGold`，经济统计、任务条件、快速信息提示都挂在它上面。绕过它，等于让 mod 的经济操作对游戏的其他系统不可见。

## 心智模型

结构是「8 个语义化入口 → 1 个内部实现」。8 个 `Apply*` 方法不是 8 份重复逻辑，而是「谁给谁」的组合矩阵：付款方与收款方各自可以是角色（Hero）、聚落（Settlement）、部队（PartyBase）三种持有者之一，3×3 共 9 种组合，本类覆盖其中 8 种——唯一缺的是聚落→聚落（游戏没有这种直接转账场景）。

组合矩阵：

- 角色→角色：`ApplyBetweenCharacters`
- 角色→聚落：`ApplyForCharacterToSettlement`
- 角色→部队：`ApplyForCharacterToParty`
- 聚落→角色：`ApplyForSettlementToCharacter`
- 聚落→部队：`ApplyForSettlementToParty`
- 部队→角色：`ApplyForPartyToCharacter`
- 部队→聚落：`ApplyForPartyToSettlement`
- 部队→部队：`ApplyForPartyToParty`

每个入口只做两件事：把「语义上的谁给谁」翻译成 `ApplyInternal` 的 (giverHero, giverParty, recipientHero, recipientParty) 四元组，以及计算 `showQuickInformation`（规则是 `!disableNotification && 涉及 MainHero`）。真正的状态变更只在 `ApplyInternal` 里发生：按付款方类型扣钱（角色扣 `Hero.Gold`、移动端部队扣 `PartyTradeGold`、聚落端扣 `SettlementComponent.Gold`，各自先 `MathF.Min` 夹取），按收款方类型加钱，最后派发 `OnHeroOrPartyTradedGold`。

mod 应该用语义化入口而不是反射调 `ApplyInternal`：入口保证了钱袋选择、通知规则、事件载荷的一致性，且升级时签名更稳定。

注意一个实现细节：`ApplyForSettlementToCharacter`（聚落→角色）在源码里是「反向调用」——它把 recipientHero 当作 giver 传入、金额取负，复用 `ApplyInternal` 的扣款分支。读代码时极易看错方向，但语义上它就是聚落金库出钱、角色收钱。

## 怎么用

### 怎么拿到它

静态类，没有实例、不能 new。直接 `GiveGoldAction.Apply...(…)` 调用，8 个入口全部是 `public static`。

### 典型用法

1. 任务奖励或罚款：`ApplyBetweenCharacters` 在两位英雄之间转账，是最常用的变体。
2. 给玩家自己的聚落注资：`ApplyForCharacterToSettlement`，钱进聚落金库而非部队贸易金。
3. 部队之间转移贸易金：`ApplyForPartyToParty`，注意两端都必须是 `PartyBase`。
4. 静默调整经济：任何变体传 `disableNotification: true`，不弹快速信息（但仍派发事件）。
5. 监听 `OnHeroOrPartyTradedGold` 的 mod 能看到包括 NPC 间转账在内的所有金币流动。

### 最容易踩的坑

1. 金额会被静默夹到余额上限：请求转 10000 但付款方只有 500 时，实际只转 500，且事件载荷里记录的是夹取后的值（`ApplyInternal` 里的 `MathF.Min`）。
2. `disableNotification` 不是「完全静默」：`showQuickInformation` 还要求转账涉及 `Hero.MainHero`，两个 NPC 之间的转账本来就不弹提示，传不传 `true` 都一样。
3. 三种钱袋别混：角色的钱在 `Hero.Gold`、部队的钱在 `PartyTradeGold`、聚落的钱在 `SettlementComponent.Gold`——选错变体会扣错对象，且这种错误不会报错，只会让经济数据对不上。
4. `ApplyForSettlementToCharacter` 的参数顺序反直觉：它内部把 recipientHero 当 giver、金额取负（源码 58 行），直接读代码时极易看错方向。
5. 所有变体的 `transactionStringId` 都硬编码为空字符串：事件里拿不到交易名，需要自定义交易名的 mod 无法通过公开入口实现。

## 关键成员

- **GiveGoldAction**（`GiveGoldAction.cs:9`）— `public static class`，位于 `TaleWorlds.CampaignSystem.Actions` 命名空间；全部成员静态，不能实例化。
- **ApplyInternal**（`GiveGoldAction.cs:12`）— 唯一真正改状态的私有实现：按付款方/收款方是 Hero 还是 PartyBase（Mobile/Settlement）分别扣加金币，各自先 `MathF.Min` 夹到余额上限，最后派发 `OnHeroOrPartyTradedGold` 事件。
- **ApplyBetweenCharacters**（`GiveGoldAction.cs:46`）— 角色→角色转账；`showQuickInformation` 在 giver 或 recipient 是 `Hero.MainHero` 时为 true。
- **ApplyForCharacterToSettlement**（`GiveGoldAction.cs:52`）— 角色→聚落：以 `settlement.Party` 作为收款方，钱进聚落金库。
- **ApplyForSettlementToCharacter**（`GiveGoldAction.cs:58`）— 聚落→角色：内部把 recipientHero 当 giver、金额取 -amount 反向调用 `ApplyInternal`，读代码时注意方向。
- **ApplyForSettlementToParty**（`GiveGoldAction.cs:64`）— 聚落→部队：从聚落金库扣钱，加到收款部队的 `PartyTradeGold`。
- **ApplyForPartyToSettlement**（`GiveGoldAction.cs:70`）— 部队→聚落：反向注资，通知条件看 `giverParty.LeaderHero` 是否是 MainHero。
- **ApplyForPartyToCharacter**（`GiveGoldAction.cs:76`）— 部队→角色：通知条件看部队领袖或收款英雄是否 MainHero。
- **ApplyForCharacterToParty**（`GiveGoldAction.cs:82`）— 角色→部队：源码参数名拼写为 `receipentParty`（少一个 i），调用时按位置传参即可。
- **ApplyForPartyToParty**（`GiveGoldAction.cs:88`）— 部队→部队：两端都是 `PartyBase`，通知条件看任一部队领袖是否 MainHero。

## 真实示例

```csharp
public void DonateToSettlement(Settlement targetSettlement, int amount)
{
    // 角色 → 聚落：把金币注入聚落金库
    GiveGoldAction.ApplyForCharacterToSettlement(Hero.MainHero, targetSettlement, amount);
}

public void PayRansom(Hero payeeLord, int ransomAmount)
{
    // 角色 → 角色：向另一位英雄支付赎金
    GiveGoldAction.ApplyBetweenCharacters(Hero.MainHero, payeeLord, ransomAmount);
}

public void FundParty(PartyBase ownParty, int amount)
{
    // 角色 → 部队：给自己带领的部队注资
    GiveGoldAction.ApplyForCharacterToParty(Hero.MainHero, ownParty, amount);
}

public void MoveTradeGold(PartyBase fromParty, PartyBase toParty, int amount)
{
    // 部队 → 部队：在两支部队之间转移贸易金
    GiveGoldAction.ApplyForPartyToParty(fromParty, toParty, amount);
}

public void SilentDonation(Settlement targetSettlement, int amount)
{
    // 静默注资：不弹快速信息，但仍派发交易事件
    GiveGoldAction.ApplyForCharacterToSettlement(Hero.MainHero, targetSettlement, amount, true);
}
```

## 参见

- [TakePrisonerAction](../TakePrisonerAction) —— 同批的另一个 Action：把英雄变为俘虏
- [Campaign](../Campaign) —— 战役层状态与事件总览
- [CampaignEvents](../CampaignEvents) —— `OnHeroOrPartyTradedGold` 等事件的监听方式
- [BarterHelper](../../core-extra/BarterHelper) —— 以物易物同样走 Action 层

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
