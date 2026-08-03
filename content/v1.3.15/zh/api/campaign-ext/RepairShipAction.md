---
title: "RepairShipAction"
description: "修复战役船只耐久的统一动作：计算并转移修理费用，更新持久船体生命值，再派发修船事件。"
---
# RepairShipAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class RepairShipAction`  
**Base:** `System.Object`（静态类，不可实例化）  
**Source:** `TaleWorlds.CampaignSystem/Actions/RepairShipAction.cs`

## 概述

`RepairShipAction` 是把一艘 `Ship` 恢复到满耐久或土匪船基准耐久的战役事务入口。标准 `Apply` 会根据船主类型向当前 `ShipCostModel` 查询修理费，并通过 `GiveGoldAction` 把费用转给修理定居点；所有实际修复路径都会先通知 `SkillLevelingManager`，再更新船只生命值，最后派发 `OnShipRepaired` 事件。

## 心智模型

船只的 `HitPoints` setter 只把数值 clamp 到 `0..MaxHitPoints`，并不代表完成了一次修船。完整事务还包含经济、技能钩子和事件通知，所以模组应根据场景选择 `Apply`、`ApplyForFree` 或 `ApplyForBanditShip`，不要直接写 `ship.HitPoints`。

这个 Action 也不是修理可用性验证器。它不检查当前定居点是否有港口、船是否属于调用方、余额是否足够或船是否已经满耐久。菜单、港口状态或自定义 Behavior 必须先完成这些上游检查，确认后再提交一次动作。

## `Apply` / `ApplyInternal` 契约

```csharp
public static void Apply(Ship ship, Settlement repairPort)
public static void ApplyForFree(Ship ship)
public static void ApplyForBanditShip(Ship ship)
```

私有 `ApplyInternal(Ship, float, Settlement)` 的执行顺序固定：先把“目标耐久减当前耐久”的差值传给 `SkillLevelingManager.OnShipRepaired`，再设置 `ship.HitPoints`，最后同步调用 `CampaignEventDispatcher.OnShipRepaired`。监听者收到事件时船只已经是新耐久；`ApplyForFree` 和土匪船路径传出的 `repairPort` 为 null。

当前 `bannerlord-1.4.5/Bannerlord.Source` 全树只有该类声明，没有发现类外对 `RepairShipAction` 的直接调用。源码可验证的调用点是三个公开包装器进入 `ApplyInternal`：`Apply` 与 `ApplyForFree` 修到满耐久，`ApplyForBanditShip` 只在低于 80% 时修到 80%。因此不能把某个未出现的官方菜单或 SandBox Behavior 写成既定调用者；模组调用时需自行拥有港口/AI 工作流。

## 状态变更与事件级联

| 入口 | 费用与目标耐久 | 事件和调用时机 |
| --- | --- | --- |
| `Apply(ship, repairPort)` | 若船主是移动商队或领主队伍，从 `Campaign.Current.Models.ShipCostModel` 取整修理费，再由 `GiveGoldAction.ApplyForPartyToSettlement` 转账；之后修到 `MaxHitPoints` | 适合已验证港口、所有权和余额的付费确认回调；金币交易事件先于修船事件 |
| `ApplyForFree(ship)` | 不转账，直接修到 `MaxHitPoints` | 适合任务奖励、作弊或明确免费的系统补偿；修船事件中的港口为 null |
| `ApplyForBanditShip(ship)` | 仅当耐久低于上限的 80% 时修到 80%，否则完全不执行 | 适合土匪队伍维护 tick；达到阈值时不会派发事件 |
| `ApplyInternal` | 先报告修复差值，再写 `[SaveableField(3)]` 对应的生命值 | 所有实际修复的同步提交点；模组不可直接访问 |

`Ship.Owner` 负责把船只从旧 `PartyBase.Ships` 移到新船主集合；本 Action 不改变所有权。付费分支只针对移动商队或领主队伍，其他船主仍会修满，但不会在这里转账。

## 真实获取路径示例

下面从主队的只读船只集合取得第一艘受损船，并从当前定居点取得港口。调用前同时验证港口、所有权和队伍交易金币，避免依赖 `GiveGoldAction` 的余额 clamp。

```csharp
public static void RepairFirstDamagedPlayerShip()
{
    if (Campaign.Current == null)
    {
        return;
    }

    MobileParty party = MobileParty.MainParty;
    Settlement port = Settlement.CurrentSettlement;
    if (party == null || port == null || !port.HasPort)
    {
        return;
    }

    Ship ship = party.Ships.FirstOrDefault(
        candidate => candidate.HitPoints < candidate.MaxHitPoints);
    if (ship == null || ship.Owner != party.Party)
    {
        return;
    }

    int cost = (int)Campaign.Current.Models.ShipCostModel
        .GetShipRepairCost(ship, party.Party);
    if (party.PartyTradeGold >= cost)
    {
        RepairShipAction.Apply(ship, port);
    }
}
```

示例需要 `System.Linq`。它应由港口菜单后果或等价的一次性确认回调调用，而不是每帧查找并修理。

## 生命周期、存档与坏档风险

- `Apply` 会立即解引用 `ship.Owner`，付费分支还会解引用 `repairPort.Party` 和 `Campaign.Current.Models`。空船、无主船、非战役阶段或给合格移动船主传 null 港口都会导致异常。
- `GiveGoldAction` 会把实际支付额 clamp 到队伍现有交易金币，但修理仍继续到满耐久。调用者若不先检查余额，会得到少付甚至零付但完全修好的经济漏洞。
- `Apply` 不验证 `repairPort.HasPort`、敌对关系、围城/封锁或船只是否属于当前玩家。访问规则属于上游港口 UI 或 Behavior，不能由方法名推断。
- 已满耐久的船调用 `Apply` 或 `ApplyForFree` 仍会报告零差值并派发修船事件；重复调用可能让监听者重复奖励或刷新。土匪入口只有低于 80% 时才有幂等阈值。
- `Ship._hitPoints` 与 `_owner` 分别是保存字段。直接写 `HitPoints` 虽会 clamp，却跳过费用、技能钩子和事件；在加载早期或对象所有权尚未恢复时修改，会把缺少级联的状态写入存档。
- 当前 1.4.5 默认 `DefaultShipCostModel.GetShipRepairCost` 返回 0，但可替换模型或内容模块可以提供非零费用。不要把反编译默认实现当作永久免费的 API 保证。

## 版本注记

v1.3.15 与 v1.4.5 的三个公开入口、付费船主条件、满耐久/80% 目标和事件顺序一致。v1.4.5 反编译输出只把传给 `ApplyInternal` 的 null 默认参数省略在调用点；跨版本模组应继续通过当前 `ShipCostModel` 报价，并允许内容模块改变实际费用。

## 依赖关系与导航

- 上游：[Ship](../Ship/) 从 [PartyBase](../../campaign/PartyBase/) 或 [MobileParty](../../campaign/MobileParty/) 的 `Ships` 集合取得；[Settlement](../../campaign/Settlement/) 提供调用者验证过的修理港口。
- 下游：[ShipCostModel](../ShipCostModel/) 决定价格，[GiveGoldAction](../GiveGoldAction/) 执行转账，[SkillLevelingManager](../SkillLevelingManager/) 接收修复差值，[CampaignEvents](../CampaignEvents/) 暴露修船通知。
- Parent（父级）：[campaign-ext API](./)
- Sibling（同级）：[Ship](../Ship/) · [ShipCostModel](../ShipCostModel/) · [GiveGoldAction](../GiveGoldAction/)
- Related（相关）：[Settlement](../../campaign/Settlement/) · [PartyBase](../../campaign/PartyBase/) · [CampaignEvents](../CampaignEvents/)
