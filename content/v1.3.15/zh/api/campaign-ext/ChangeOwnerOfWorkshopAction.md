---
title: "ChangeOwnerOfWorkshopAction"
description: "按购买、出售、破产、死亡或战争流程转移工坊，并处理资本、成本、金币和所有者事件。"
---
# ChangeOwnerOfWorkshopAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class ChangeOwnerOfWorkshopAction`  
**基类：** `System.Object`  
**源文件：** `TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfWorkshopAction.cs`

## 一句话职责

作为工坊所有权的统一边界，按购买、出售、破产、死亡或战争选择业务入口，设置新所有者、类型和资本，结算玩家金币，并把旧所有者交给下游事件监听器，避免经济与 UI 只看到部分变更。

## 心智模型

所有公开入口都会汇入同一内部事务。事务先保存旧所有者，再调用 `Workshop.ChangeOwnerOfWorkshop` 修改新所有者、类型和资本；当旧或新所有者是 `Hero.MainHero` 时，通过 `GiveGoldAction` 结算金币；最后发布工坊所有者变化事件。

事件参数包含工坊和旧所有者；回调中要从 `workshop.Owner` 重新读取新所有者。包装 Action 负责所有权、财务结算和通知的顺序，mod 不应自行拼接这三步。

## 何时使用

根据来源使用对应入口：玩家购买、玩家出售、破产、死亡或战争。原生工坊角色与工坊 Behavior 用这些入口处理对话、破产、继承和战争清理。

不要独立设置 `Workshop.Owner`、类型、资本或英雄金币。不要在 `ApplyByPlayerBuying` 之前手动扣玩家金币；该入口会从模型计算成本并在 Action 内处理玩家转账。

## 入口与时机

| 入口 | 模型与财务规则 |
| --- | --- |
| `ApplyByPlayerBuying(Workshop workshop)` | 使用 `WorkshopModel.GetCostForPlayer`、主角作为新所有者和初始资本。 |
| `ApplyByPlayerSelling(Workshop workshop, Hero newOwner, WorkshopType workshopType)` | 使用 `WorkshopModel.GetCostForNotable`、初始资本和指定新所有者/类型。 |
| `ApplyByBankruptcy(Workshop workshop, Hero newOwner, WorkshopType workshopType, int cost)` | 使用初始资本以及调用方提供的新所有者、类型和成本。 |
| `ApplyByDeath(Workshop workshop, Hero newOwner)` | 保留工坊类型与资本，不产生购买成本。 |
| `ApplyByWar(Workshop workshop, Hero newOwner, WorkshopType workshopType)` | 使用初始资本，战争转移不产生购买成本。 |

每条路径都会保存旧所有者、修改工坊、结算适用金币，然后发出 `WorkshopOwnerChangedEvent(Workshop, Hero oldOwner)`。

## 依赖与事件下游

- **状态：** [`Workshop`](../../campaign/Workshop) 持有当前所有者、类型和资本；[`Hero`](../../campaign/Hero) 表示新旧所有者。
- **模型：** `Campaign.Current.Models.WorkshopModel` 提供初始资本和玩家/贵族成本。
- **财务行动：** [`GiveGoldAction`](../GiveGoldAction) 在事务中处理玩家相关转账。
- **事件：** [`CampaignEvents`](../CampaignEvents) 的 `WorkshopOwnerChangedEvent` 类型为 `IMbEvent<Workshop, Hero>`，Hero 参数是旧所有者。
- **消费者：** 工坊、继承、破产、战争和 UI/通知 Behavior 通过事件刷新状态。
- **存档：** 工坊所有权、类型、资本和英雄金币属于战役状态；事件不会在读档时重放。

## 风险与生命周期

- 购买入口按当前模型计算成本；提前手动扣金币会造成重复收费。
- 系统转移时旧所有者可能为空，不要假设事件参数一定是有效英雄。
- 监听器在工坊修改和金币结算之后执行；应从 `workshop` 读取新状态，不要使用旧缓存。
- 直接改工坊会跳过 `WorkshopOwnerChangedEvent`，使经济、工坊 Behavior 和 UI 缓存过期；错误的资本/类型还可能写入存档。
- 不要在所有者销毁、加载或另一个工坊事件同步改动期间转移工坊。

**存档边界：** mod 自有工坊数据由战役 Behavior 的 `SyncData` 保存；读档时重新注册非序列化监听器，并从已保存的工坊集合重建缓存。

## 真实使用示例

稳定的观察入口是原生工坊事件；mod 可以从已修改的工坊重新取得新所有者，不重复执行转移：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements.Workshops;
using TaleWorlds.SaveSystem;

public sealed class WorkshopOwnerObserver : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.WorkshopOwnerChangedEvent.AddNonSerializedListener(this, OnWorkshopOwnerChanged);
    }

    private void OnWorkshopOwnerChanged(Workshop workshop, Hero oldOwner)
    {
        Hero newOwner = workshop.Owner;
        RecordOwnerChange(workshop, oldOwner, newOwner);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

玩家购买的真实入口是 `ChangeOwnerOfWorkshopAction.ApplyByPlayerBuying(workshop)`，其中 `workshop` 应来自当前据点的工坊集合；不要为这次购买另调 `GiveGoldAction`。

## 版本注记

五个包装入口、模型规则、所有者事件形状和玩家金币条件在 1.3.15 与 1.4.5 中一致；购买、出售、破产、死亡和战争调用路径以 1.4.5 工坊 Behavior 为准。

## 导航

- **父级：** [campaign-ext API](../)
- **同级：** [GiveGoldAction](../GiveGoldAction) · [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction)
- **相关：** [Workshop](../../campaign/Workshop) · [CampaignEvents](../CampaignEvents) · [Hero](../../campaign/Hero)
