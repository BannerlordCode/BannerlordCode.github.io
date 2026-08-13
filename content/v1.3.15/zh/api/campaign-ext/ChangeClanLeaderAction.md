---
title: "ChangeClanLeaderAction（改变宗族领袖）"
description: "以完整事务替换家族（Clan）领袖：在写入 clan.Leader 之前先转移旧领袖的金币、卸任其总督职务、保证新领袖拥有氏族部队，并按外交模型重算与新领袖相关的领主关系，最后派发 OnClanLeaderChanged 事件。"
---
# ChangeClanLeaderAction

**Namespace:** TaleWorlds.CampaignSystem.Actions  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public static class ChangeClanLeaderAction`  
**Base:** 无（静态类，无基类）  
**源文件路径:** `TaleWorlds.CampaignSystem/Actions/ChangeClanLeaderAction.cs`

## 一句话职责

把“谁是当前家族领袖”这一最终状态，连同它必须同步的金币、总督任职、氏族部队与领主关系一并提交，而不是只改写 `clan.Leader` 一个字段。

## 心智模型

把 `ChangeClanLeaderAction` 想成一次**继承事务**：它不只换名字，而是把换领袖时一套必须保持一致的世界状态一起落盘。内部所有工作都在私有的 `ApplyInternal(Clan, Hero)` 里完成，两个公开 `Apply` 重载只是它的入口。

一次调用会按固定顺序发生这些事：

1. **读取旧领袖**：`Hero leader = clan.Leader;`（旧领袖在调用点的真实身份）。
2. **确定新领袖**：
   - `ApplyWithSelectedNewLeader(clan, newLeader)` 直接采用调用方选好的 `newLeader`；
   - `ApplyWithoutSelectedNewLeader(clan)` 会调用 `clan.GetHeirApparents()` 拿到继承人评分字典，取最高分，并在并列最高分者中随机挑一个。若字典为空（没有合格继承人），该重载**直接返回、完全不改任何状态**。
3. **转移金币**：`GiveGoldAction.ApplyBetweenCharacters(leader, newLeader, leader.Gold, disableNotification: true)` —— 旧领袖身上的全部金币转给新领袖，且关闭转账提示。
4. **卸任总督**：若 `newLeader.GovernorOf != null`，调用 `ChangeGovernorAction.RemoveGovernorOf(newLeader)`，避免新领袖同时挂着总督职务。
5. **保证氏族部队**：仅当新领袖不是囚犯、逃亡者、已释放者、旅行中（`!IsPrisoner && !IsFugitive && !IsReleased && !IsTraveling`）时：没有部队就 `MobilePartyHelper.CreateNewClanMobileParty(newLeader, clan)` 创建氏族部队；有部队但不是队长就 `mobileParty.ChangePartyLeader(newLeader)`。这四类状态的英雄**刻意跳过建队**。
6. **重算关系**：遍历 `Hero.AllAliveHeroes`（跳过新领袖自己），用 `Campaign.Current.Models.DiplomacyModel.GetRelationChangeAfterClanLeaderIsDead(leader, other)` 拿到关系增量，叠加到 `newLeader` 与对方的个人关系上（通过 `newLeader.SetPersonalRelation`）。
7. **写入领袖**：`clan.SetLeader(newLeader)`。
8. **派发事件**：`CampaignEventDispatcher.Instance.OnClanLeaderChanged(leader, newLeader)`。

**关键时序**：关系循环发生在 `SetLeader` 之前，事件派发在其之后。所以事件订阅者可以假设 `clan.Leader` 已经是新英雄，但**不能**假设新领袖一定有自己的氏族部队——囚犯、逃亡者、已释放者、旅行中的英雄走到第 5 步会被跳过。

**所在层与调用方**：它是 `Actions` 层（战役事务）的静态入口，不是 Behavior，也不是 Model。原版的玩家继承流程、国王选举结果、以及领袖死亡/领袖不再属于该家族的清理逻辑都会调用它。模组几乎总是在某个 `CampaignBehavior` 的回调里、战役进行中调用它。

**何时用**：需要让一个家族换领袖，并且希望金币、总督、部队、关系、事件“全套”被正确处理时。

**何时不要用 / 正确替代**：

- 不要直接写 `clan.Leader = someHero` 或只调用 `clan.SetLeader(...)`——这样会漏掉金币、总督、队长、关系与事件，下游 Behavior 会读到半完成的世界。
- 不要用它去“修一个已经被部分破坏的家族”——它假定旧领袖仍是 `clan.Leader`、且世界基本一致；它不校验也不修复残缺状态。
- 不要在晋升前只清 `Hero.GovernorOf`——`Town` 仍可能指向过期总督，必须用 [ChangeGovernorAction](../ChangeGovernorAction/)。
- 自定义资格 / UI 选人时，用 `ApplyWithSelectedNewLeader` 把你已决定的继承人传进去；不要拿 `ApplyWithoutSelectedNewLeader` 当“随便挑下一个”的通用工具，它用的是原版继承人评分策略。

## 依赖图

| 角色 | 关联页面 | 说明 / 副作用 |
|------|----------|---------------|
| 上游·调用方 | [Clan](../../campaign/Clan/) · [Hero](../../campaign/Hero/) | 继承流程、国王选举、死亡清理等先确定“换哪个家族、谁来当”，再调用本 Action。 |
| 上游·世界状态 | [Campaign](../../campaign/Campaign/) | 内部读取 `Campaign.Current.Models.DiplomacyModel` 与 `Hero.AllAliveHeroes`，必须在战役已初始化时调用。 |
| 下游·金币 | [GiveGoldAction](../GiveGoldAction/) | 旧领袖全部金币转给新领袖，且关闭通知。 |
| 下游·总督 | [ChangeGovernorAction](../ChangeGovernorAction/) | 新领袖若为某地总督，先 `RemoveGovernorOf` 卸任。 |
| 下游·部队 | [MobileParty](../../campaign/MobileParty/) | 可行动的新领袖没有部队时创建氏族部队，有部队则改任队长。 |
| 下游·家族字段 | [Clan](../../campaign/Clan/) | 最终通过 `clan.SetLeader(newLeader)` 写入领袖。 |
| 下游·王国联动 | [ChangeKingdomAction](../ChangeKingdomAction/) | 若该家族是王国统治家族，换领袖可能连带影响王国统治者的继承。 |
| 事件消费者 | [CampaignEventReceiver](../CampaignEventReceiver/) | `OnClanLeaderChanged(oldLeader, newLeader)` 在 `SetLeader` 之后派发，所有订阅者据此响应。 |
| 关系模型 | [Campaign](../../campaign/Campaign/)（`Models.DiplomacyModel`） | 提供 `GetRelationChangeAfterClanLeaderIsDead`，驱动新领袖与他族的关系重算。 |

## 风险段（必读）

> 该 Action 会**写世界状态并派发事件**。用错阶段会崩溃或坏档。

- **只能在战役阶段调用**：必须在 `Campaign.Current` 已就绪、世界加载完成之后、战役销毁之前调用。不要在任何 `Mission` 进行中（战斗、攻城、对话场景内部）调用——此时不应修改战役世界状态。
- **不要在读档 / `SyncData` 期间调用**：加载过程中 `Campaign.Current.Models`、对象注册表与 `Hero.AllAliveHeroes` 可能尚未一致。手动重放 `Apply` 会重复派发 `OnClanLeaderChanged` 并可能破坏序列化状态。
- **新领袖必须是真实注册的家族成员**：`newLeader` 必须是一个已经由 `MBObjectManager` 注册、且 `clan.Heroes` 包含的有效 `Hero`。传入未注册的 `Hero` / `Clan`，或错误引用已死亡、未加载的对象，会随存档保留成坏的引用（坏档）。
- **不要重复调用**：关系重算在成功派发事件后已完成；事件回调成功后再次调用，会让关系被重复叠加，并留下随存档保留的“领袖/部队不一致”。
- **不要先让旧领袖半失效再调用**：如果旧领袖已经被其它逻辑部分失效，再调用本 Action 会得到错误的关系增量和不一致状态。
- **监听事件的 Behavior 不能假设新领袖有部队**：囚犯、逃亡者、已释放者、旅行中的新领袖在第 5 步会被跳过，事件回调里 `newLeader.PartyBelongedTo` 可能为 `null`。

## 成员说明（两个入口，按主题分组）

两个公开方法都是 `ApplyInternal` 的薄包装，区别只在“新领袖由谁决定”。不要在外部直接调用 `ApplyInternal`（它是私有的，且绕开语义入口）。

### 调用方已选定继承人 —— `ApplyWithSelectedNewLeader(Clan clan, Hero newLeader)`

- **用途**：用调用方已经确定好的 `newLeader` 替换 `clan` 的领袖。
- **副作用**：执行上文“心智模型”中第 3–8 步的全部内容——转金币、卸总督、保证部队、重算关系、写 `clan.Leader`、派发 `OnClanLeaderChanged`。
- **何时调用**：当你自己的流程已经选出了合格继承人时——例如玩家家族继承（原版玩家继承 Action 就走这里）、国王选举结果落定、或你有自定义 UI / 资格判定并已挑好人。要求 `clan` 与 `newLeader` 均非空、`newLeader.Clan == clan` 且该英雄已在对象系统中注册。

### 由本 Action 按原版继承规则选继承人 —— `ApplyWithoutSelectedNewLeader(Clan clan)`

- **用途**：不指定新领袖，让 Action 用 `clan.GetHeirApparents()` 的评分策略挑人——取最高分，并在并列最高分者中随机选一个。
- **副作用**：与上一个重载完全相同（第 3–8 步），只是新领袖是被算出来的。
- **何时调用**：当原版继承评分策略本身就是要的结果时——典型是领袖死亡、或系统发现领袖已不再属于该家族的自动清理分支。**若你的功能有自定义资格、UI 选择或非原版继承规则，不要用它当“挑下一个领袖”的通用工具**，应改走 `ApplyWithSelectedNewLeader` 传入你选好的人。
- **注意**：若 `GetHeirApparents()` 返回空字典（没有任何合格继承人），该重载**直接返回、完全不修改状态**——它不会把家族置成半完成状态，也不会抛异常。

## 真实示例

### 示例 1：在自定义 Behavior 里处理玩家家族继承（明确选中继承人）

真实获取路径：`Clan.PlayerClan` 拿到玩家家族；继承人必须是 `playerClan.Heroes` 中的真实成员（例如 `Hero.MainHero` 或某位家族英雄）。在战役阶段的回调里调用 `ApplyWithSelectedNewLeader`。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public class MySuccessionBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // 例如订阅 OnHeroKilled / 自定义继承触发点
    }

    public override void SyncData(IDataStore dataStore) { }

    // 自定义继承判定后调用：chosenHeir 必须属于玩家家族且已注册
    private void HandlePlayerClanSuccession(Hero chosenHeir)
    {
        if (Campaign.Current == null) return;            // 必须在战役阶段
        Clan playerClan = Clan.PlayerClan;
        if (playerClan == null || chosenHeir == null) return;
        if (chosenHeir.Clan != playerClan) return;        // 必须是本族真实成员
        if (playerClan.Leader == chosenHeir) return;      // 已是领袖则跳过

        // 用“已选定继承人”入口，整事务提交
        ChangeClanLeaderAction.ApplyWithSelectedNewLeader(playerClan, chosenHeir);
    }
}
```

### 示例 2：原版继承规则下，给某个非玩家家族换领袖

真实获取路径：通过据点拿家族 `settlement.OwnerClan`，或 `Clan.Find("clan_xxx")`，或 `kingdom.Clans`。让 Action 自己按评分挑继承人；无人合格时静默返回。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

// 在战役阶段的回调中（如监听到某家族领袖死亡之后）
Settlement settlement = Settlement.Find("town_car_1");   // 真实据点
Clan targetClan = settlement?.OwnerClan;                 // 通过据点拿到真实 Clan
if (targetClan != null
    && targetClan.Leader != null
    && targetClan.Leader.IsDead)
{
    // 无合格继承人时该调用静默返回，不会对半销毁的家族做部分修改
    ChangeClanLeaderAction.ApplyWithoutSelectedNewLeader(targetClan);
}
```

## 跨版本提示

- 本机未随附 `bannerlord-1.3.15` 反编译源码，无法逐行对比。本页语义以 1.4.5 反编译为权威依据。
- `ApplyWithSelectedNewLeader` / `ApplyWithoutSelectedNewLeader` 两个入口自 1.3.x 即存在，API 形态在 1.3.15 子树下视为与 1.4.5 一致；若后续比对 1.3.15 源码发现差异，以本页“心智模型”同步更新。

## 参见

- ↑ [父级：战役扩展 API](../)
- ↔ [ChangeGovernorAction](../ChangeGovernorAction/) · [ChangeClanInfluenceAction](../ChangeClanInfluenceAction/) · [GiveGoldAction](../GiveGoldAction/) · [KillCharacterAction](../KillCharacterAction/) · [ChangeKingdomAction](../ChangeKingdomAction/)
- 相关：[Clan](../../campaign/Clan/) · [Hero](../../campaign/Hero/) · [MobileParty](../../campaign/MobileParty/) · [Campaign](../../campaign/Campaign/) · [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/) · [ChangeRelationAction](../ChangeRelationAction/) · [ClaimSettlementAction](../ClaimSettlementAction/) · [AddHeroToPartyAction](../AddHeroToPartyAction/) · [ChangeVillageStateAction](../ChangeVillageStateAction/)
- 架构：[崩溃与存档边界](../../../architecture/crash-boundaries) · [SDK 总览](../../../architecture/sdk-overview)
