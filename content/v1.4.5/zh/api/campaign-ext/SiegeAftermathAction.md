---
title: "SiegeAftermathAction"
description: "SiegeAftermathAction 是攻城战后的纯通知型动作：方法体只有一行，只广播 OnSiegeAftermathApplied，不改任何状态；劫掠、赦免、繁荣度惩罚等真实战后处置全部由订阅方实现。"
---
# SiegeAftermathAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/SiegeAftermathAction.cs`

## 概述

`SiegeAftermathAction` 是攻城战结束后「宣布战后处置结果」的静态动作。它公开一个枚举 `SiegeAftermath`（`SiegeAftermathAction.cs:9`）和唯一一个公开方法 `ApplyAftermath`（`SiegeAftermathAction.cs:21`）。

**但这个类最特殊的地方在于它几乎什么都没做。** `ApplyInternal`（`SiegeAftermathAction.cs:16`）的整个方法体只有一行——`SiegeAftermathAction.cs:18` 的 `CampaignEventDispatcher.Instance.OnSiegeAftermathApplied(...)`。**它不改繁荣度、不扣影响力、不删据点项目、不动关系，只是把「谁、对哪个据点、按什么处置、原主人是谁、各队贡献多少」这五个参数原样广播出去。**

真正的战后处置——繁荣度惩罚、据点项目损失、忠诚度惩罚、影响力消耗、与领主的关系变化——全在订阅方 `SiegeAftermathCampaignBehavior.OnSiegeAftermathApplied`（`SiegeAftermathCampaignBehavior.cs:123`）里。**所以这是一个「纯通知型动作」：它定义的是「战后发生了什么」这条消息，而不是「战后世界怎么变」。**

## 心智模型

**把它想成「广播一条战后公告」，而不是「执行一次战后处置」。**

1. **它是消息，不是机制。** `SiegeAftermathAction.cs:18` 是这个类唯一做的事。**五个参数全是只读输入**：`attackerParty` 是谁打的、`settlement` 是哪个据点、`aftermathType` 是哪种处置、`previousSettlementOwner` 是原主人、`partyContributions` 是各队贡献度。**类本身不读也不写任何战役状态**——它只是把这五个值打包递出去。
2. **「处置」只有三种，而且语义差距极大。** 枚举 `SiegeAftermath`（`SiegeAftermathAction.cs:9`）只有三个值：`Devastate`（`SiegeAftermathAction.cs:11`，摧毁——最狠）、`Pillage`（`SiegeAftermathAction.cs:12`，劫掠——中等）、`ShowMercy`（`SiegeAftermathAction.cs:13`，赦免——最轻）。**这三个值决定了订阅方走哪条惩罚分支**，而 `SiegeAftermathCampaignBehavior` 里几乎所有 `GetSiegeAftermath*` 方法都是对这三个值做 switch。
3. **「谁触发」分两条路径，参数来源完全不同。** 玩家亲自打时，`aftermathType` 来自玩家在战后界面点的那个按钮（`SiegeAftermathCampaignBehavior.cs:445`、`SiegeAftermathCampaignBehavior.cs:475`、`SiegeAftermathCampaignBehavior.cs:517` 三处分别对应三个按钮）；AI 打时，`aftermathType` 来自 `DetermineAISiegeAftermath`（`SiegeAftermathCampaignBehavior.cs:204`）的加权随机。**但两条路径最后都汇到同一个 `ApplyAftermath`**，所以订阅方不需要知道是谁触发的。
4. **`partyContributions` 是「分赃依据」，不是装饰。** 这个 `Dictionary<MobileParty, float>` 记录了每支参战队的贡献度。**订阅方 `SiegeAftermathCampaignBehavior.cs:171` 起用它来决定「哪些领主分到战利品、谁被扣关系」**——所以调用方必须把它填对，否则分赃会错。

## 怎么用

### 怎么拿到

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/SiegeAftermathAction.cs`（全文 25 行）。

**类声明：** `public static class SiegeAftermathAction`（`SiegeAftermathAction.cs:7`）。

**公开入口：** `public static void ApplyAftermath(MobileParty attackerParty, Settlement settlement, SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float> partyContributions)`（`SiegeAftermathAction.cs:21`），内部转调私有的 `ApplyInternal`（`SiegeAftermathAction.cs:16`）。**`ApplyInternal` 是 private，mod 侧只能走 `ApplyAftermath`。**

**主要调用点（全树共 7 处 `ApplyAftermath` 调用）：**

- `SiegeAftermathCampaignBehavior.cs:445`、`SiegeAftermathCampaignBehavior.cs:475`、`SiegeAftermathCampaignBehavior.cs:517` —— 玩家在战后界面选「摧毁 / 劫掠 / 赦免」三个按钮，各对应一处。
- `SiegeAftermathCampaignBehavior.cs:108` 与 `SiegeAftermathCampaignBehavior.cs:115` —— AI 攻城结束后的自动处置。
- `SiegeAftermathCampaignBehavior.cs:287` —— 玩家方领袖阵亡时的兜底处置。
- `IncidentsCampaignBehaviour.cs:707` —— 事件（incident）触发的劫掠。

### 典型用法

**广播一次「赦免」处置：**

```csharp
var contributions = new Dictionary<MobileParty, float>
{
    { MobileParty.MainParty, 1f },
};
SiegeAftermathAction.ApplyAftermath(
    MobileParty.MainParty,
    settlement,
    SiegeAftermathAction.SiegeAftermath.ShowMercy,
    settlement.OwnerClan,
    contributions);
```

**注意 `previousSettlementOwner` 必须是「攻城前的原主人」**，不是当前主人——`SiegeAftermathCampaignBehavior.cs:96` 是在开战时就把它存进 `_prevSettlementOwnerClan` 的。**传错会让订阅方的关系惩罚算到错误的氏族头上。**

**只想读处置结果、不想触发的话，订阅事件而不是调动作：**

```csharp
CampaignEvents.OnSiegeAftermathAppliedEvent.AddNonSerializedListener(this, OnSiegeAftermathApplied);
```

`DefaultLogsCampaignBehavior.cs:41` 就是这么做的——它订阅事件、写一条 `SiegeAftermathLogEntry`（`SiegeAftermathLogEntry.cs:63`），自己不改任何状态。

### 坑

- **它不改任何状态。** `SiegeAftermathAction.cs:18` 是这个类唯一的行为。**如果你调了 `ApplyAftermath` 却发现繁荣度没掉、影响力没扣，那不是 bug——是那些效果本来就在订阅方 `SiegeAftermathCampaignBehavior.cs:123` 里。** 想验证处置是否生效，去看那个 Behavior。
- **`ApplyInternal` 是 private。** `SiegeAftermathAction.cs:16` 的 `ApplyInternal` 与 `SiegeAftermathAction.cs:21` 的 `ApplyAftermath` 参数完全一致，**但只有后者是 public**。别试图反射调 `ApplyInternal`——直接调 `ApplyAftermath` 即可，两者行为完全一样。
- **枚举会被存档。** `SaveableCampaignTypeDefiner.cs:347` 给 `SiegeAftermathAction.SiegeAftermath` 加了枚举定义（id 2100）。**所以别改枚举值的顺序或删值**——会让旧存档读不出来。
- **`partyContributions` 传空字典不会报错，但分赃会错。** 订阅方 `SiegeAftermathCampaignBehavior.cs:171` 起遍历这个字典来决定战利品分配。**传空字典 = 没人分到战利品 = 关系惩罚落到错误的对象上。**
- **没有「撤销」这个动作。** 处置一旦广播，效果就落在订阅方里了。**想回滚得自己记下原值再改回去**，这个类不提供任何撤销入口。

## 关键成员

- `SiegeAftermathAction.ApplyAftermath(MobileParty, Settlement, SiegeAftermath, Clan, Dictionary<MobileParty, float>)` — `SiegeAftermathAction.cs:21`，**唯一公开入口**，转调 `ApplyAftermath` 内部的 `ApplyInternal`。
- `SiegeAftermathAction.ApplyInternal(MobileParty, Settlement, SiegeAftermath, Clan, Dictionary<MobileParty, float>)` — `SiegeAftermathAction.cs:16`，**整个方法体只有 `SiegeAftermathAction.cs:18` 一行**，只广播事件。
- `SiegeAftermathAction.SiegeAftermath` — `SiegeAftermathAction.cs:9`，**三值枚举**：`Devastate`（`SiegeAftermathAction.cs:11`）、`Pillage`（`SiegeAftermathAction.cs:12`）、`ShowMercy`（`SiegeAftermathAction.cs:13`）。
- `CampaignEventDispatcher.Instance.OnSiegeAftermathApplied(...)` — `CampaignEventDispatcher.cs:1575`，**广播出口**，虚方法在 `CampaignEventReceiver.cs:717`，事件字段在 `CampaignEvents.cs:379`、公开属性在 `CampaignEvents.cs:933`。
- `SiegeAftermathCampaignBehavior.OnSiegeAftermathApplied(...)` — `SiegeAftermathCampaignBehavior.cs:123`，**真正的战后处置执行者**，繁荣度、项目、忠诚度、影响力、关系全在这里。

## 真实示例

```csharp
// 复刻 SiegeAftermathAction.cs:18 —— 这个类唯一的行为
CampaignEventDispatcher.Instance.OnSiegeAftermathApplied(
    attackerParty, settlement, aftermathType, previousSettlementOwner, partyContributions);

// 复刻 SiegeAftermathAction.cs:23 —— 公开入口转调私有实现
ApplyInternal(attackerParty, settlement, aftermathType, previousSettlementOwner, partyContributions);

// 订阅方写法（对照 DefaultLogsCampaignBehavior.cs:41）
CampaignEvents.OnSiegeAftermathAppliedEvent.AddNonSerializedListener(this, OnSiegeAftermathApplied);
```

**逐条核源：** 第一段对应 `SiegeAftermathAction.cs:18`，五个参数与 `SiegeAftermathAction.cs:16` 的签名一一对应；第二段对应 `SiegeAftermathAction.cs:23`，是 `ApplyAftermath` 方法体的全部内容；第三段对应 `DefaultLogsCampaignBehavior.cs:41` 的订阅写法，注意事件属性是 `CampaignEvents.cs:933` 的 `OnSiegeAftermathAppliedEvent`。

## 参见

- [SiegeEvent](../SiegeEvent) —— 攻城事件本体，`BesiegerCamp` 与 `MapEventSettlement` 的来源
- [Settlement](../../campaign/Settlement) —— 被处置的据点，繁荣度与项目损失的宿主
- [MobileParty](../../campaign/MobileParty) —— 进攻方，贡献度字典的键
- [Clan](../../campaign/Clan) —— 原主人氏族，关系惩罚的落点
- [SiegeAftermathCampaignBehavior](../SiegeAftermathCampaignBehavior) —— 真正的战后处置执行者
- [SiegeAftermathLogEntry](../SiegeAftermathLogEntry) —— 战后日志条目，处置结果的文字记录

## 导航

- [本区域目录](../)
