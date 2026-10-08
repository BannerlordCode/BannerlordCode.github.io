---
title: "RepairShipAction"
description: "让你在战役里安全地修好一条船并广播修理结果，而不是自己改血量或手动结算金币"
---

# RepairShipAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class RepairShipAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/RepairShipAction.cs`

## 概述

`RepairShipAction` 是战役层里专门负责「船只被修好」这一世界状态变更的静态 Action 类。一条船的耐久（`HitPoints`）在战役里不是随便改的字段：改它意味着一次修理行为真的发生了，技能成长要记一笔、关心船只状态的监听者要被通知到。这个类把这三件事收在了一条链路上：私有实现 `ApplyInternal` 先向技能成长管理器上报本次修理补了多少耐久，然后把船的耐久写成新的值，最后通过战役事件分发器广播「船被修好了」，并带上这次修理发生在哪个港口。任何绕开它、直接给船的血量赋值的写法，都会让技能上报与事件广播整段丢失，系统看到的状态就会和你改出来的状态不一致。

源码一共 48 行，公开面是三个语义化入口：`Apply` 负责在港口里按报价扣钱再修满、`ApplyForFree` 负责不扣钱直接修满、`ApplyForBanditShip` 负责把「另一类船主」的船补到耐久上限的 80%。三个入口最终都落到同一个 `ApplyInternal` 上。这也是整套 Action 家族最标准的形状：入口数量多、内部实现只有一个，差别全部体现在入口如何准备参数、是否附带金钱结算。

## 心智模型

这个类是「多个语义化入口 → 单一内部实现」结构的**标准形态**：锚表里有三条公开入口（`Apply`、`ApplyForFree`、`ApplyForBanditShip`）和一条私有实现（`ApplyInternal`）。三条入口的差别只在两处 —— 目标耐久取多少、以及要不要先做金钱结算 —— 而「写耐久 + 上报技能 + 广播事件」这三步永远只有一份实现。

`ApplyInternal` 的参数最能说明问题：它接收 `Ship ship`、`float newHitpoints`，以及一个带默认值 `null` 的 `Settlement repairPort = null`。也就是说，内部实现并不关心这条船为什么被修、是谁出的钱，它只接受一个「修到多少」的目标值，并可选地记住「在哪个港口修的」。三个入口做的事情就是各自把 `newHitpoints` 和 `repairPort` 准备好：`Apply` 传入 `ship.MaxHitPoints` 与调用方给的 `repairPort`；`ApplyForFree` 传入 `ship.MaxHitPoints` 与 `null`；`ApplyForBanditShip` 传入 `ship.MaxHitPoints * 0.8f` 与 `null`。谁出钱、要不要出钱，全部留在入口层解决。

对 mod 来说，选择入口就等于选择语义：想让玩家或 AI 在港口正常付费修理，用 `Apply`；想在剧情里赠送一次修理，用 `ApplyForFree`；想按游戏自己的规则给海盗那类船主补耐久，用 `ApplyForBanditShip`。不要自己去算目标耐久再调私有实现 —— 那样你就绕过了入口对金钱结算与阈值判断的封装，而且私有实现在外部也调不到。记住这条通用规律：语义化入口表达意图，内部实现负责状态写入与广播。

## 怎么用

### 怎么拿到它

静态类，直接 `RepairShipAction.Apply(…)` 调用；不需要实例，也没有构造函数。

### 典型用法

- **港口里的正常修理**：船停在你指定的港口，调用 `Apply(ship, repairPort)`，它会先按模型报价做一次队伍到聚落的金钱结算，再把船修到耐久上限。
- **任务奖励 / 剧情赠送**：任务完成时给玩家一条满耐久的船，调用 `ApplyForFree(ship)`，不涉及任何金钱结算。
- **AI 或规则驱动的修理**：让海盗那类船主自己补船，调用 `ApplyForBanditShip(ship)`，是否真的动手由它内部的阈值判断决定。
- **调试船只状态**：需要一条船回到可用状态时，用 `ApplyForFree` 最快，而且仍然会走技能上报与事件广播。
- **配合监听器**：你监听了「船被修好」这类事件，就必须在触发侧走这三个入口之一，否则监听器收不到回调。

### 最容易踩的坑

- **`Apply` 的第二个参数不能省**：它的签名是 `(Ship, Settlement)`，港口是必填的，不要以为和 `ApplyForFree` 一样可以只传船。
- **`ApplyForFree` 没有港口参数**：它内部把 `repairPort` 传成 `null`，所以广播出来的事件里也不带港口信息，需要港口上下文的场景要改用 `Apply`。
- **`ApplyForBanditShip` 是有条件的**：它只在船的当前耐久低于耐久上限的 80% 时才动手，且修到的是 80% 而不是满耐久；调用它不代表船一定会被修满。
- **不要在调用之外自己再发一次事件或再补一次技能上报**：这两步都只发生在 `ApplyInternal` 里，重复做会让系统收到两次同样的修理。
- **不要试图从外部调用内部实现**：它是私有的，你只能通过三个公开入口表达意图。

## 关键成员

- **`RepairShipAction`**（`RepairShipAction.cs:10`）— 静态类本体；源码里没有实例成员也没有构造函数，三个入口都是静态方法。
- **`ApplyInternal`**（`RepairShipAction.cs:13`）— 私有实现，接收船、目标耐久与带默认值 `null` 的修理港；它先按「目标耐久减去当前耐久」向技能成长管理器上报，再把耐久写成目标值，最后广播修理事件，是三个入口共同的收敛点。
- **`Apply`**（`RepairShipAction.cs:21`）— 面向港口修理的入口，参数是船与修理港；当船的归属者是商队或领主队伍时，先按模型报价做一次金钱结算，然后把船修到耐久上限。
- **`ApplyForFree`**（`RepairShipAction.cs:33`）— 免费修理入口，只接收船；不做任何金钱结算，直接把船修到耐久上限，修理港传空。
- **`ApplyForBanditShip`**（`RepairShipAction.cs:39`）— 面向另一类船主的入口，只接收船；仅当当前耐久低于耐久上限的 80% 时，才把耐久补到耐久上限的 80%，且不带修理港。

## 真实示例

```csharp
// 场景一：在港口正常付费修理，会先做金钱结算再修满。
public static void RepairAtPort(Ship ship, Settlement repairPort)
{
    if (ship == null || repairPort == null)
    {
        return;
    }

    RepairShipAction.Apply(ship, repairPort);
}

// 场景二：免费修理，不结算金币，直接修到耐久上限。
public static void RepairWithoutCost(Ship ship)
{
    if (ship == null)
    {
        return;
    }

    RepairShipAction.ApplyForFree(ship);
}

// 场景三：按游戏规则给海盗那类船主补耐久，低于 80% 才会被补到 80%。
public static void RepairBanditVessel(Ship ship)
{
    if (ship == null)
    {
        return;
    }

    RepairShipAction.ApplyForBanditShip(ship);
}
```

## 参见

- [Campaign](../Campaign) —— 战役入口与全局状态持有者
- [ShipHelper](../../core-extra/ShipHelper) —— 船只相关的常用封装
- [PortStateHelper](../../core-extra/PortStateHelper) —— 港口状态相关的常用封装
- [MobilePartyHelper](../../core-extra/MobilePartyHelper) —— 队伍相关的常用封装

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
