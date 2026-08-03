---
title: "StartMercenaryServiceActionDetails"
description: "作为雇佣兵服役开始事件的原因标签，在氏族归属、报酬倍率和玩家续约日写入后向 Behavior 与模组监听器广播。"
---
# StartMercenaryServiceActionDetails

**命名空间：** `TaleWorlds.CampaignSystem.Actions`

**模块：** `TaleWorlds.CampaignSystem`

**类型：** `public enum StartMercenaryServiceActionDetails`

**声明类型：** `StartMercenaryServiceAction`

**基类：** `System.Enum`

**源文件：** `TaleWorlds.CampaignSystem/Actions/StartMercenaryServiceAction.cs`

## 核心定位

说明一次雇佣兵服役以哪种父 Action 路径开始，并把该原因附在状态完成后的战役事件上。

## 概述

这是 `StartMercenaryServiceAction` 的公开嵌套枚举，当前只有 `ApplyByDefault`。标准上游不是直接构造枚举，而是调用 `ChangeKingdomAction.ApplyByJoinFactionAsMercenary`；该 Action 先调整阵营关系和最短停留时间，再进入 `StartMercenaryServiceAction`，最后继续处理部队 Hold 与 `OnClanChangedKingdom`。接受王国雇佣邀请、领主对话、外交交易和剧情脚本都走这条高层入口。

## 心智模型

“开始服役”是持久化氏族状态迁移，不是一条通知。父 Action 会设置报酬倍率和 `Clan.Kingdom`，令 `IsUnderMercenaryService` 为真；玩家氏族还会获得 30 天后的下一次续约时间。完成这些写入后，`OnMercenaryServiceStarted` 才携带本枚举同步派发。

事件监听器看到 `details` 时，可以安全读取氏族的新王国与倍率，但若调用来自 `ChangeKingdomAction`，更外层的 `OnClanChangedKingdom` 尚未派发。原因标签说明“怎样开始”，不代表完整外交事务已经退出调用栈。

## 实际入口与事件级联

私有 `ApplyStart(Clan clan, Kingdom kingdom, int awardMultiplier, StartMercenaryServiceActionDetails details)` 的契约为：

```text
若 clan 已在服役：EndMercenaryServiceAction.EndByLeavingKingdom
  -> clan.MercenaryAwardMultiplier = awardMultiplier
  -> clan.Kingdom = kingdom（同步王国氏族集合、英雄与旗帜颜色）
  -> clan.StartMercenaryService()（IsUnderMercenaryService = true）
  -> 玩家氏族：续约日 = 当前时间 + 30 天
  -> OnMercenaryServiceStarted(clan, ApplyByDefault)
```

当前唯一公开入口 `StartMercenaryServiceAction.ApplyByDefault` 总是传入 `ApplyByDefault`（隐式数值 0）。若氏族此前已经是雇佣兵，监听器会先看到 `OnMercenaryServiceEnded(...ApplyByLeavingKingdom)`，随后看到新的 Started 事件。

## 谁调用、何时调用

`ChangeKingdomAction.ApplyInternal` 的 `JoinAsMercenary` 分支调用父 Action。v1.4.5 的真实上游包括：

| 上游 | 时机 |
|---|---|
| `VassalAndMercenaryOfferCampaignBehavior` | 玩家接受地图上的雇佣邀请后，先从 `MinorFactionsModel` 计算报酬倍率。 |
| `LordConversationsCampaignBehavior` | 玩家在领主对话中接受或招募雇佣兵时。 |
| `MercenaryJoinKingdomBarterable` / `JoinKingdomAsClanBarterable` | 外交 barter 执行加入结果时。 |
| StoryMode 与作弊入口 | 剧情强制归属或显式调试操作时；仍复用同一高层 Action。 |

普通模组也应优先调用 `ChangeKingdomAction.ApplyByJoinFactionAsMercenary`。直接调用 `StartMercenaryServiceAction.ApplyByDefault` 会跳过外层的阵营 stance 调整、`DebtToKingdom` 清零、`ShouldStayInKingdomUntil`、战争部队 Hold、地图视觉检查和 `OnClanChangedKingdom`。

## 依赖与上下游

| 依赖 | 关系 |
|---|---|
| [`StartMercenaryServiceAction`](../StartMercenaryServiceAction) | 写入状态并产生此原因；枚举自身没有执行入口。 |
| [`ChangeKingdomAction`](../ChangeKingdomAction) | 推荐上游事务边界，负责加入王国前后的外交和部队级联。 |
| [`EndMercenaryServiceAction`](../EndMercenaryServiceAction) | 已在服役时先结束旧服务；结束事件早于新的开始事件。 |
| [`Clan`](../../campaign/Clan) / [`Kingdom`](../../campaign/Kingdom) | 保存王国归属、服役标志、报酬倍率与氏族集合；这些状态在 Started 回调前已生效。 |
| [`CampaignEvents`](../CampaignEvents) | 暴露 `OnMercenaryServiceStartedEvent`；高层加入路径随后还会派发 `OnClanChangedKingdom`。 |

## 不要直接改字段

不要分别写 `Clan.Kingdom`、`MercenaryAwardMultiplier`，再调用 `Clan.StartMercenaryService()`。这种拼装会漏掉旧合同结束、玩家续约日和 Started 事件，更会绕开 `ChangeKingdomAction` 的外交 stance、停留期限、战争部队与 ChangedKingdom 事件。加载后可能出现“氏族显示属于王国，却没有正确外交关系或合同生命周期”的逻辑坏档。

如果意图是成为封臣，应使用 `ChangeKingdomAction.ApplyByJoinToKingdom`；如果意图结束合同，应使用匹配原因的 `EndMercenaryServiceAction` 或 `ChangeKingdomAction.ApplyByLeaveKingdomAsMercenary`，不要把开始 Action 反向操作。

## 生命周期、存档与坏档风险

- `clan`、`kingdom` 与 `Campaign.Current` 都没有空值保护。玩家分支还访问 `Campaign.Current.KingdomManager`；只能在 Campaign 已完整启动的游戏流程中调用，不能在 `OnSubModuleLoad` 或 `SyncData` 中调用。
- `MercenaryAwardMultiplier`、`IsUnderMercenaryService`、`ShouldStayInKingdomUntil`、氏族王国归属和玩家续约日都会进入存档。中途异常或手工写一半后保存，会把不一致状态永久化。
- 开始事件同步触发且状态已经更新。监听器不应再次调用开始 Action，也不要假定 `OnClanChangedKingdom` 已执行；需要观察完整归属变化时监听后者。
- `awardMultiplier` 不是显示文本中的任意金币数。官方先由 `Campaign.Current.Models.MinorFactionsModel.GetMercenaryAwardFactorToJoinKingdom` 计算。随意使用负数或极大值会污染后续氏族财务结算。
- 对已在服役的氏族调用会结束旧合同再开始新合同，产生两组事件。若只是更新报酬，等待官方月度续约逻辑或设计明确的迁移流程，不能把重新 Apply 当 setter。
- 不要把枚举的裸整数长期写入模组存档。当前只有 0，不意味着后续版本不会新增原因；读取时应容忍未知值。

## 关键成员的消费时机

| 成员 | 用途与副作用 | 读取时机 |
|---|---|---|
| `ApplyByDefault` | 表示父 Action 的标准开始路径。它本身不改变状态；状态变化由 `ApplyStart` 完成。 | 只在 `OnMercenaryServiceStartedEvent` 回调、日志或模组事务记录中解释原因。不要手动赋值后期待服务开始。 |

## 真实获取路径示例

下例使用领主对话中的真实王国获取路径，并像官方 Behavior 一样先询问 `MinorFactionsModel`，然后调用完整的 `ChangeKingdomAction`。事件监听器在状态写入后接收本枚举。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.SaveSystem;

public sealed class MercenaryContractBehavior : CampaignBehaviorBase
{
    private string _lastMercenaryKingdomId;

    public override void RegisterEvents()
    {
        CampaignEvents.OnMercenaryServiceStartedEvent.AddNonSerializedListener(
            this,
            OnMercenaryServiceStarted);
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("my_mod_last_mercenary_kingdom", ref _lastMercenaryKingdomId);
    }

    private void OnMercenaryServiceStarted(
        Clan clan,
        StartMercenaryServiceAction.StartMercenaryServiceActionDetails details)
    {
        if (clan == Clan.PlayerClan &&
            details == StartMercenaryServiceAction.StartMercenaryServiceActionDetails.ApplyByDefault)
        {
            _lastMercenaryKingdomId = clan.Kingdom?.StringId;
        }
    }

    public static void JoinConversationKingdomAsMercenary()
    {
        Kingdom kingdom = Hero.OneToOneConversationHero?.Clan?.Kingdom;
        if (kingdom == null || Clan.PlayerClan.Kingdom != null ||
            Clan.PlayerClan.IsUnderMercenaryService)
        {
            return;
        }

        int awardMultiplier = Campaign.Current.Models.MinorFactionsModel
            .GetMercenaryAwardFactorToJoinKingdom(Clan.PlayerClan, kingdom, true);

        ChangeKingdomAction.ApplyByJoinFactionAsMercenary(
            Clan.PlayerClan,
            kingdom,
            CampaignTime.Zero,
            awardMultiplier,
            showNotification: true);
    }
}
```

`_lastMercenaryKingdomId` 是 Behavior 自己的可保存字段时，应在同一 Behavior 的 `SyncData` 中同步；事件监听器本身仍使用非序列化注册，避免把委托写入存档。

## 版本注记

v1.3.15 与已核对的 v1.4.5 核心程序集都只有 `ApplyByDefault`，`ApplyStart` 的状态顺序和 `OnMercenaryServiceStarted` 参数也一致。1.4.5 的声明仍在 `TaleWorlds.CampaignSystem.Actions`；SandBox 与 StoryMode 只包含部分调用者，不拥有该类型。

## 导航

- 存档边界：[SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) 注册氏族雇佣状态；开始事件不会在读档时重放，模组合同缓存应由 Behavior 的 `SyncData` 恢复。
- ↑ Parent：[StartMercenaryServiceAction](../StartMercenaryServiceAction) · [战役扩展 API](../)
- ↔ Sibling：[ChangeKingdomAction](../ChangeKingdomAction) · [EndMercenaryServiceAction](../EndMercenaryServiceAction)
- ↓ Children：无独立子页；该枚举由 [StartMercenaryServiceAction](../StartMercenaryServiceAction) 持有
- Related：[Clan](../../campaign/Clan) · [Kingdom](../../campaign/Kingdom) · [CampaignEvents](../CampaignEvents)
