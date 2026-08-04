---
title: "LeaveSettlementAction"
description: "通过 settlement 组件、遭遇和 Campaign 事件完整结束 MobileParty 或 Hero 的据点停留。"
---
# LeaveSettlementAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class LeaveSettlementAction`  
**Base:** none (static class)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/LeaveSettlementAction.cs`  
**版本说明：** 本页描述 v1.4.5 的 party 与 character 两条离场路径。

## 一句话职责

把已经在 settlement 中的 party 或 Hero 从停留状态中移出，并同步 army 附属队、海上锚点、settlement 组件、位置角色和 `OnSettlementLeft` 事件。

## 心智模型

`LeaveSettlementAction` 不是把 `MobileParty.CurrentSettlement` 设为 `null` 的便捷属性写入。它是 [EnterSettlementAction](../EnterSettlementAction) 的反向生命周期入口：party 离开前要处理 attached army party 和玩家 encounter，离开后要让 settlement 组件和 Campaign 监听器看到同一个 `(party, settlement)` 事实。

两个入口的对象粒度不同。`ApplyForParty` 处理整个移动队伍，保存旧的 `CurrentSettlement`，必要时递归处理同一 settlement 中的 attached parties，清除 party 的 settlement 引用，若在海上则重置 Anchor，随后调用 `SettlementComponent.OnPartyLeft` 和 `CampaignEvents.OnSettlementLeftEvent`。`ApplyForCharacterOnly` 只清除 Hero 的 `StayingInSettlement`，并从 `LocationComplex` 与玩家 location encounter 移除角色；它不会让 Hero 所属的 MobileParty 离开。

## 何时使用，何时不要使用

- 只有在 party 或 Hero 当前确实有 settlement 时才调用对应入口；v1.4.5 实现没有把 `currentSettlement == null` 当作正常 no-op 的完整保护。
- party 入口适用于地图 party、army leader 和 encounter/settlement owner 的离场；character-only 入口适用于 companion、notable、fugitive 等仍留在 location 的单个 Hero。
- 不要用 `mobileParty.CurrentSettlement = null` 或 `hero.StayingInSettlement = null` 代替 Action；那会跳过组件库存/访问者通知、海上 Anchor、位置移除和 Campaign 事件。
- 如果正在处理玩家 encounter，优先让 `PlayerEncounter` 或 `EncounterManager` 的 owner 流程调用它；不要在旧 encounter 已结束后对旧 party/settlement 引用重复调用。

## 依赖与状态级联

```text
当前 MobileParty/Hero + 当前 Settlement
  -> LeaveSettlementAction
      -> PlayerEncounter / attached army 处理
      -> SettlementComponent.OnPartyLeft
      -> CampaignEvents.OnSettlementLeftEvent
```

- [MobileParty](../../campaign/MobileParty) 保存 `CurrentSettlement`、army、attached parties、Anchor 和 map 生命周期；[Settlement](../../campaign/Settlement) 通过 `SettlementComponent` 接收 party 离场通知。
- [EnterSettlementAction](../EnterSettlementAction) 建立相反的 party/settlement 关系；两者都应由 encounter、siege 或 Campaign Behavior 使用，不能用字段写入拼接状态。
- `CampaignEvents.OnSettlementLeftEvent` 是 mod 订阅的公共事件；[CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) 负责分发，mod 不应直接调用 dispatcher 来伪造离场。
- [PlayerEncounter](../../campaign/PlayerEncounter) 和 [EncounterManager](../../campaign/EncounterManager) 可能在 leader 离场时结束玩家 encounter；[MapEvent](../../campaign/MapEvent) 和 [SiegeEvent](../../campaign/SiegeEvent) 的 owner 仍负责先完成自己的战斗/围城阶段。

## 两个公开入口

### `ApplyForParty`

```csharp
public static void ApplyForParty(MobileParty mobileParty)
```

方法先缓存 `mobileParty.CurrentSettlement`。如果 party 是 army leader，它遍历 leader 的 `AttachedParties`：attached party 是 `MobileParty.MainParty` 且有当前 `PlayerEncounter` 时调用 `PlayerEncounter.Finish()`；其他仍在相同 settlement 的 attached party 则递归离场。之后才把 leader 的 `CurrentSettlement` 清空；海上 party 额外调用 `Anchor.ResetPosition()`，最后把旧 settlement 传给 `SettlementComponent.OnPartyLeft`，并派发 `OnSettlementLeftEvent`。

这意味着事件监听器收到回调时可以知道 party 原来属于哪个 settlement，但不应把事件参数保存为新的长期 owner。调用后，party 的地图移动/encounter 状态已经进入离场阶段。

### `ApplyForCharacterOnly`

```csharp
public static void ApplyForCharacterOnly(Hero hero)
```

该入口把 `hero.StayingInSettlement` 清空，再从 `currentSettlement.LocationComplex` 找到角色位置；若找到，则移除 location character，并让 `PlayerEncounter.LocationEncounter` 移除 accompanying character。它不改变 `hero.PartyBelongedTo`，也不触发整个 party 的 `OnSettlementLeftEvent`。

## 真实的当前 Campaign 示例

`MobileParty.MainParty` 是当前 Campaign 已注册的真实 party；`CurrentSettlement` 是该 party 当前进入的真实 settlement。调用前必须保留 settlement 非空，因为 Action 需要它向组件和事件提供旧位置。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

if (Campaign.Current != null)
{
    MobileParty party = MobileParty.MainParty;
    if (party != null && party.IsActive && party.CurrentSettlement != null)
    {
        LeaveSettlementAction.ApplyForParty(party);
    }
}
```

如果只想让当前 settlement 中的一个已注册 Hero 离开 location，应先确认 `Hero.MainHero.CurrentSettlement` 不为空，再使用 `ApplyForCharacterOnly(Hero.MainHero)`；不要用 party 入口替代角色粒度的变更。

## 存档、事件与崩溃边界

- `ApplyForParty` 需要有效的旧 settlement；在 party 已经离场、读档对象尚未重建或 Campaign 已销毁时调用，`SettlementComponent.OnPartyLeft` 可能触达空/旧引用。
- army leader 的递归会影响 attached parties，并可能结束玩家 encounter。不要在回调中修改同一 `AttachedParties` 集合，或在 `PlayerEncounter.Finish()` 后继续使用旧 location encounter。
- 海上 party 的 `CurrentSettlement` 和 `Anchor` 是两个相关状态；只清掉前者会留下错误的地图定位。
- character-only 路径会修改 settlement 的 location complex 和 accompanying character。不要在 location 已被 mission/encounter 清理后缓存 `LocationCharacter` 并再次移除。
- 这个 Action 只结束停留关系，不会结束 MapEvent、siege 或 disband owner 的全部流程；相应系统必须先决定阶段，再调用正确的 Action。

## 导航

- **↑ 父级：** [Campaign extension API](../) · [Campaign system](../../campaign/)
- **↔ 同级：** [EnterSettlementAction](../EnterSettlementAction) · [DisbandPartyAction](../DisbandPartyAction) · [DestroyPartyAction](../DestroyPartyAction)
- **相关：** [MobileParty](../../campaign/MobileParty) · [Settlement](../../campaign/Settlement) · [Hero](../../campaign/Hero) · [CampaignEvents](../../campaign/CampaignEvents) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) · [PlayerEncounter](../../campaign/PlayerEncounter) · [EncounterManager](../../campaign/EncounterManager)
