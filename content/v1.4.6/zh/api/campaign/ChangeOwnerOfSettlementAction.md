---
title: "ChangeOwnerOfSettlementAction"
description: "把某个 Settlement 的所有权移交给某个 Hero 的唯一入口，按 8 种易主途径分别提供 ApplyBy* 静态方法。"
---
# ChangeOwnerOfSettlementAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ChangeOwnerOfSettlementAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfSettlementAction.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ChangeOwnerOfSettlementAction` 是「定居点易主」这件事在 CampaignSystem 里唯一的公开写入口。它本身不持有状态、也不注册到任何 `CampaignBehavior`，只提供一组 `ApplyBy*` 静态方法：调用方说明**易主是怎么发生的**（国王裁决、攻城、交易、馈赠、叛乱……），方法负责把归属真正切过去，并把连带后果一次性铺开。

所有 `ApplyBy*` 都只是薄壳，真正干活的是私有方法 `ApplyInternal`（`:12`）。它在一次调用里完成：清掉 `Town.IsOwnerUnassigned`、写 `Town.OwnerClan`、按途径销毁旧驻军或补建驻军、移除原总督、把定居点与其所有 `BoundVillages` 标记为视觉脏、让正在围攻/劫掠该地的 AI 队伍 `SetMoveModeHold()`、结束无意义的 `MapEvent`，最后统一派发 `CampaignEventDispatcher.Instance.OnSettlementOwnerChanged(...)`（`:78`）。

「因由」在游戏里带有明显不同的语义分支，所以这个类没有暴露一个 `Apply(..., enum detail, ...)` 的通用入口，而是把途径做成具名方法——`enum ChangeOwnerOfSettlementDetail` 是**私有** `ApplyInternal` 的形参，不对外。同一命名空间的 `ChangeKingdomAction` 采用了完全一致的设计取向。

## 心智模型

把它想成**定居点所有权的状态迁移表**，而不是一组工具函数。

- **状态**：定居点归属于哪个 `Clan`（`Settlement.OwnerClan` / `Town.OwnerClan`），以及由此派生的驻军、总督、税收与 AI 目标。
- **迁移的因由**决定走哪个 `ApplyBy*`。因由不是装饰性标签：`ApplyInternal` 内部会按 `detail` 分叉（例如只有 `BySiege` 会销毁旧驻军并把破城者写进 `Town.LastCapturedBy`；只有 `BySiege` / `ByClanDestruction` / `ByLeaveFaction` 会对要塞走 `flag = true` 的派发分支）。
- **不变量**：调用返回后，世界的其他系统（驻军、总督、AI 行为、事件订阅者）必须看到一致的新归属。这就是为什么 mod 作者**不应**直接写 `settlement.OwnerClan = ...`——那只改了字段，跳过了驻军/总督/AI/事件，会留下一个自相矛盾的世界状态。

一句话：**你负责声明「为什么易主」，它负责「易主之后的一切」。**

## 怎么用

### 怎么拿到

它是 `static class`，**没有实例、不需要从 `Campaign.Current` 取对象**，直接按全名调用：

```csharp
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

ChangeOwnerOfSettlementAction.ApplyByKingDecision(newOwner, settlement);
```

### 典型用法

选方法的唯一依据是**易主的因由**，不是参数形状。8 个入口与因由的对应关系：

| 因由 | 调用 |
| --- | --- |
| 国王/君主在王国层面把领地封给某家族 | `ApplyByKingDecision(hero, settlement)` |
| 攻城战结束后判定归属 | `ApplyBySiege(newOwner, capturerHero, settlement)` |
| 家族退出王国时对领地的处置 | `ApplyByLeaveFaction(hero, settlement)` |
| 外交交易（barter）里把领地当筹码割让 | `ApplyByBarter(hero, settlement)` |
| 把领地作为馈赠赠出 | `ApplyByGift(settlement, newOwner)` |
| 叛乱成功后叛军接管领地 | `ApplyByRebellion(hero, settlement)` |
| 某家族被彻底毁灭后领地由他人接管 | `ApplyByDestroyClan(settlement, newOwner)` |
| 没有更具体的因由、走系统默认语义 | `ApplyByDefault(hero, settlement)` |

典型写法（把刚打下的城镇封给自家封臣）：

```csharp
Settlement town = Settlement.CurrentSettlement;   // 玩家当前所处的城镇/城堡
Hero vassal = Clan.PlayerClan.Heroes.First(h => h != Hero.MainHero);

ChangeOwnerOfSettlementAction.ApplyByKingDecision(vassal, town);
```

### 坑

- **别直接改 `Settlement.OwnerClan`。** 绕过 `ApplyBy*` 会跳过驻军、总督、绑定村庄、AI 与 `OnSettlementOwnerChanged` 事件，世界会停在半更新状态。
- **参数顺序不统一，而且是同类型参数，写错不报错。** 5 个方法是 `(hero, settlement)`（`ApplyByDefault` / `ApplyByKingDecision` / `ApplyByLeaveFaction` / `ApplyByBarter` / `ApplyByRebellion`），但 `ApplyBySiege` 是 `(newOwner, capturerHero, settlement)`，而 `ApplyByDestroyClan` 与 `ApplyByGift` 是 **`(settlement, newOwner)`——定居点在前**。把 `ApplyByGift(hero, settlement)` 写成 `ApplyByGift(settlement, hero)` 编译期就会报错（类型不同），但顺序记混时很容易顺手改错方向。
- **`ApplyBySiege` 需要两个 Hero，语义不同。** `newOwner` 是最终归属者，`capturerHero` 是实际破城者，二者在「攻城者把城让给第三方」时并不相同；该方法会把 `settlement.Town.LastCapturedBy = capturerHero.Clan`（`:110`），只传一个就会丢掉归因。
- **`newOwner` 不能为 null（对要塞而言）。** `ApplyInternal` 在 `IsFortification` 分支直接读 `newOwner.Clan`（`:20`），传 null 会 NPE。三个 `ApplyBy*` 内部给 `capturerHero` 传了 `null`（如 `ApplyByDefault` `:94`），那是**另一个**参数，不要混淆。
- **`ApplyByRebellion` 会把同一个 hero 同时当作 newOwner 与 capturerHero**（`:132`），所以叛乱路径下 `OnSettlementOwnerChanged` 收到的破城者就是叛军首领本人。
- **它是命令，不是查询。** 调一次执行一次迁移；不要放进每帧/每 tick 的 `CampaignBehavior` 里做「检查并修正」。
- **`ApplyByDefault` 不是万能兜底。** 它对应系统内部默认路径；有明确因由时请用具名方法，否则后续的事件订阅者与 AI 归因会读到错误的 `detail`。

## 关键成员

| 成员 | 位置 | 说明 |
| --- | --- | --- |
| `ChangeOwnerOfSettlementAction` | `ChangeOwnerOfSettlementAction.cs:9` | `public static class`，本页宿主类型。 |
| `ApplyInternal(Settlement, Hero, Hero, ChangeOwnerOfSettlementDetail)` | `:12` | `private static`，唯一实现体：驻军/总督/AI/事件的集中处理，并在 `:78` 派发 `OnSettlementOwnerChanged`。 |
| `ApplyByDefault(Hero hero, Settlement settlement)` | `:92` | 默认途径；`capturerHero` 传 `null`，`detail = Default`。 |
| `ApplyByKingDecision(Hero hero, Settlement settlement)` | `:98` | 国王裁决；额外把 `settlement.Town.IsOwnerUnassigned` 置回 `false`（`:102`）。 |
| `ApplyBySiege(Hero newOwner, Hero capturerHero, Settlement settlement)` | `:108` | 攻城结果；先写 `Town.LastCapturedBy = capturerHero.Clan`（`:110`），再走 `detail = BySiege`（会销毁旧驻军）。 |
| `ApplyByLeaveFaction(Hero hero, Settlement settlement)` | `:118` | 家族退出阵营时对领地的处置，`detail = ByLeaveFaction`。 |
| `ApplyByBarter(Hero hero, Settlement settlement)` | `:124` | 交易割让，`detail = ByBarter`。 |
| `ApplyByRebellion(Hero hero, Settlement settlement)` | `:130` | 叛乱接管；hero 同时充当 `newOwner` 与 `capturerHero`。 |
| `ApplyByDestroyClan(Settlement settlement, Hero newOwner)` | `:136` | 家族毁灭后的领地接管；**参数顺序是「定居点在前」**。 |
| `ApplyByGift(Settlement settlement, Hero newOwner)` | `:142` | 馈赠；同样是「定居点在前」，`detail = ByGift`。 |
| `ChangeOwnerOfSettlementDetail` | `:148` | **嵌套枚举**，全名 `ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail`，8 个取值（`:151`–`:165`），仅作 `ApplyInternal` 的形参。详见同桶页 `ChangeOwnerOfSettlementDetail`（链接见「参见」）。 |

## 真实示例

**1) 攻城结束后把城堡判给实际破城者**

```csharp
using TaleWorlds.CampaignSystem.Actions;

// 战斗结束后 capturer 是实际带队破城的 Hero
ChangeOwnerOfSettlementAction.ApplyBySiege(
    newOwner:     capturer,   // 最终归属者
    capturerHero: capturer,   // 实际破城者（此处相同）
    settlement:   castle);    // 目标定居点

// 副作用：castle.Town.LastCapturedBy == capturer.Clan
```

**2) 交易里把领地当作筹码割让**

```csharp
// 在 barter / 外交成交的回调里执行
foreach (Settlement s in settlementsToGiveAway)
{
    ChangeOwnerOfSettlementAction.ApplyByBarter(buyerHero, s);
}
```

**3) 家族被毁灭后由他人接管（注意参数顺序）**

```csharp
// settlement 是第一个参数
ChangeOwnerOfSettlementAction.ApplyByDestroyClan(settlement, newOwnerHero);

// 馈赠同理
ChangeOwnerOfSettlementAction.ApplyByGift(settlement, receiverHero);
```

**4) 监听易主结果（订阅端）**

```csharp
// ApplyInternal 最后会派发 OnSettlementOwnerChanged，
// 这里演示「谁改的、因由是什么」都可从回调拿到
CampaignEvents.OnSettlementOwnerChangedEvent.AddNonSerializedListener(
    this, (settlement, wasFortification, newOwner, oldOwner, capturer, detail) =>
    {
        // detail 即 ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail
        InformationManager.DisplayMessage(
            new InformationMessage($"{settlement.Name} 已易主，因由：{detail}"));
    });
```

## 参见

- [ChangeKingdomAction](../ChangeKingdomAction) —— 同族的「换王国」写入口，同样的「一个因由一个 `ApplyBy*`」设计取向。
- [ChangeOwnerOfSettlementDetail](../ChangeOwnerOfSettlementDetail) —— 本类的嵌套枚举，易主途径的细分枚举值。
- [ChangeKingdomActionDetail](../ChangeKingdomActionDetail) —— `ChangeKingdomAction` 的嵌套枚举，可与本类的 `detail` 对照阅读。
- [ActionNotes](../ActionNotes) —— `Actions` 命名空间的整体约定与调用时机说明。
- [AddCompanionAction](../AddCompanionAction) —— 同桶的另一个「状态迁移入口」，可对比其薄壳 + 集中派发的写法。
- 相关类型（尚未建页，暂以纯文本记录）：`Settlement`、`Town`、`Hero`、`Clan`、`DestroyPartyAction`、`ChangeGovernorAction`。

## 导航

- 上级桶：[`campaign` API 索引](../_index)
- 同类页：[ChangeKingdomAction](../ChangeKingdomAction) · [ChangeOwnerOfSettlementDetail](../ChangeOwnerOfSettlementDetail) · [ActionNotes](../ActionNotes)
- 本页源码：`TaleWorlds.CampaignSystem/Actions/ChangeOwnerOfSettlementAction.cs`
