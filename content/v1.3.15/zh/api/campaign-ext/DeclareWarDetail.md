---
title: "DeclareWarDetail"
description: "解释宣战原因如何选择 DeclareWarAction 入口，并驱动外交事件、任务和联盟后续处理。"
---
# DeclareWarDetail

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public enum DeclareWarDetail`（`DeclareWarAction` 的嵌套类型）  
**基类：** `System.Enum`  
**源文件：** `TaleWorlds.CampaignSystem/Actions/DeclareWarAction.cs`

## 概述

标记一场战争是由普通脚本、玩家敌对、王国决议、叛乱、犯罪值、建国、王位主张还是参战协议触发，让同一外交状态变更在事件下游保留业务原因。它由 `DeclareWarAction` 的命名入口产生，随 `WarDeclared` 事件交给任务、联盟、评论和 AI Behavior；它不保存双方势力，也不自行发起战争，而是让下游在战争姿态已经生效后仍能判断上游决策来源。

## 心智模型

`DeclareWarDetail` 不是供模组单独构造或写入势力字段的状态对象，而是 `DeclareWarAction` 各个命名入口产生的原因标签。私有 `ApplyInternal` 对所有原因执行同一宣战事务，并在末尾把枚举值交给 `CampaignEvents.WarDeclared`；任务、评论、联盟、贸易协定和 AI Behavior 再按原因决定后续反应。

因此应先选择语义正确的 `ApplyBy*`，而不是先挑一个枚举值再试图调用私有入口。原因值不会替调用方检查势力是否合法，也不会自动完成王国决议、叛乱建族或玩家犯罪流程；这些上游流程负责满足自己的前置条件。

## ApplyInternal 契约与事件级联

```text
DeclareWarAction.ApplyBy*(faction1, faction2)
  -> FactionManager.DeclareWar
       -> stance = War
       -> 双方 FactionsAtWarWith 缓存更新
  -> 劣势王国的 PoliticalStagnation 降低并限制到 0
  -> 若主角势力参战，敌方可见据点/部队外观标脏
  -> OnWarDeclared(faction1, faction2, detail)
       -> AI、任务、联盟、评论、贸易协定等同步处理
```

事件发出时战争姿态已经写入，政治停滞和地图外观也已更新。监听器可以查询 `IsAtWarWith`，但必须把回调视为同步级联的一部分，避免在其中再次对同一双方宣战。

## 原因值、入口与真实调用者

| 枚举值 | 对应入口 | 谁在何时调用 |
|---|---|---|
| `Default` | `ApplyByDefault` | 没有更窄业务原因的系统宣战。`ChangeKingdomAction` 在氏族继承旧王国战争、`DeclareWarBarterable` 完成交易结果时使用。 |
| `CausedByPlayerHostility` | `ApplyByPlayerHostility` | 玩家通过敌对行为制造战争。`BeHostileAction` 和领主对话流程使用；任务会据此区分玩家主动挑起的冲突。 |
| `CausedByKingdomDecision` | `ApplyByKingdomDecision` | `DeclareWarDecision.ApplyChosenOutcome` 在王国投票结果要求战争时调用。该值不代表“请创建决议”，而代表决议已经完成。 |
| `CausedByRebellion` | `ApplyByRebellion` | `RebellionsCampaignBehavior` 建立叛乱氏族后，以及 `ChangeKingdomAction` 处理带叛乱离境时调用。 |
| `CausedByCrimeRatingChange` | `ApplyByCrimeRatingChange` | `ChangeCrimeRatingAction` 在主角犯罪值跨过敌对阈值时调用；部分任务会据此失败或取消。 |
| `CausedByKingdomCreation` | `ApplyByKingdomCreation` | `KingdomManager` 创建王国并继承必要敌对关系时调用。 |
| `CausedByClaimOnThrone` | `ApplyByClaimOnThrone` | 为王位主张流程保留的公开原因入口；当前扫描的 1.4.5 一方源码没有发现内置调用点。 |
| `CausedByCallToWarAgreement` | `ApplyByCallToWarAgreement` | `AllianceCampaignBehavior` 执行参战协议时调用。 |

## 依赖与下游影响

| 方向 | 类型与作用 |
|---|---|
| 上游 | 王国决议、[`BeHostileAction`](../BeHostileAction)、[`ChangeKingdomAction`](../ChangeKingdomAction) 和犯罪/叛乱 Behavior 决定何时宣战及使用哪个原因。 |
| 核心状态 | [`FactionManager`](../FactionManager) 持有双方 `StanceLink` 并刷新战争势力缓存；[`Kingdom`](../../campaign/Kingdom) 还可能改变 `PoliticalStagnation`。 |
| 下游事件 | [`CampaignEvents`](../CampaignEvents) 的 `WarDeclared` 将枚举传给 AI、任务和外交 Behavior。`AllianceCampaignBehavior` 会结束交战双方已有联盟，并按原因选择责任英雄。 |
| 反向操作 | 停战应走 [`MakePeaceAction`](../MakePeaceAction)，不能直接把 stance 改回中立。 |

## 风险、存档与生命周期

- 不要直接调用 `FactionManager.DeclareWar` 代替 Action。它会建立战争姿态，却漏掉政治停滞、地图视觉缓存和 `OnWarDeclared`，任务与联盟可能仍认为战争没有按正常流程发生。
- 调用前检查双方非空、不是同一势力、都属于当前 `Campaign`，并且尚未交战。`FactionManager.DeclareWar` 对已有浅层外交姿态可能不改状态，但外层 Action 仍会降低政治停滞并再次发事件，造成重复任务/外交副作用。
- 不要在读档反序列化、战役尚未建立 `Campaign.Current`，或正在枚举会被事件修改的任务/外交集合时调用。Action 会读取模型、主角势力和全局据点/部队列表。
- 枚举值本身只是本次同步事件的原因参数；真正持久化的是势力战争关系及相关对象状态。错过事件的非序列化监听器不会在读档后自动收到历史宣战，需从当前 `IsAtWarWith` 重建缓存。

## 真实获取路径示例

对原因枚举最安全、最常见的使用是从战役事件接收它。下面是 `CampaignBehaviorBase` 中与内置 Behavior 相同的注册方式：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public sealed class WarReasonBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.WarDeclared.AddNonSerializedListener(this, OnWarDeclared);
    }

    private void OnWarDeclared(
        IFaction faction1,
        IFaction faction2,
        DeclareWarAction.DeclareWarDetail detail)
    {
        if (detail == DeclareWarAction.DeclareWarDetail.CausedByPlayerHostility &&
            (faction1 == Hero.MainHero.MapFaction || faction2 == Hero.MainHero.MapFaction))
        {
            // 此处更新模组自己的运行时状态；战争姿态此时已经生效。
        }
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

若模组要真正发起战争，应调用语义匹配的 `DeclareWarAction.ApplyBy*`；不要手动调用事件处理函数。

## 版本注记

v1.3.15 与 v1.4.5 的枚举名称、数值顺序、八个公开原因入口和 `ApplyInternal` 主流程一致。两版都位于 `TaleWorlds.CampaignSystem`，不是 SandBox 类型；跨版本存储自定义原因时仍应保存名字或显式映射，不要依赖未来版本永远维持枚举整数。

## 导航

- ↑ Parent：[战役扩展 API](./)
- ↔ Sibling：[DeclareWarAction](../DeclareWarAction) · [MakePeaceAction](../MakePeaceAction)
- Related：[FactionManager](../FactionManager) · [CampaignEvents](../CampaignEvents) · [ChangeKingdomAction](../ChangeKingdomAction) · [Kingdom](../../campaign/Kingdom)
