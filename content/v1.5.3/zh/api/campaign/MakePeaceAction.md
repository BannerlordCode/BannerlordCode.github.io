---
title: "MakePeaceAction"
description: "这个静态 Action 类让你在战役里安全地结束两个派系之间的战争状态，而不是直接改字段"
---

# MakePeaceAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class MakePeaceAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/MakePeaceAction.cs`

## 概述

在战役层，两个派系之间的战争与和平状态由 `FactionManager` 与 `StanceLink` 共同维护。`MakePeaceAction` 是官方提供的唯一合法议和入口：它是一个静态类，内部封装了建立和平的完整管线——先调用 `FactionManager.SetNeutral` 把双方关系重置为中立，再通过 `StanceLink.SetDailyTributePaid` 登记每日赔款（方向为 faction1 → faction2，含金额与持续天数），若议和涉及玩家派系，还要遍历 `Settlement.All` 与 `MobileParty.All`，把对方派系所有可见定居点与队伍的 `Party` 标记为 `SetVisualAsDirty`，强制地图层刷新战争迷雾与边界着色，最后通过 `CampaignEventDispatcher.Instance.OnMakePeace` 派发事件。为什么不能直接改字段：和平状态是多方一致的状态——派系关系、stance 链接、地图视觉、UI 提示、任务系统都必须同步；绕过这个类直接改，会导致地图不刷新、事件监听方收不到通知、存档与运行状态不一致。此外，`MakePeaceDetail` 枚举随事件派发，监听方据此区分"无条件和平"与"王国决策议和"。

## 心智模型

Action 模式的统一形态在这里同样成立：两个语义化公开入口 → 一个 private 内部实现。`Apply`（第 48 行）是无赔款的直接和平：它把 `dailyTributeFrom1To2` 与 `dailyTributeDuration` 都硬编码为 0，`detail` 硬编码为 `Default`，然后调用 `ApplyInternal`。`ApplyByKingdomDecision`（第 54 行）是带赔款的议和：它把调用方传入的赔款金额与持续天数原样传给 `ApplyInternal`，并把 `detail` 标记为 `ByKingdomDecision`。两者最终都收敛到 `ApplyInternal`（第 13 行），后者是唯一真正改状态的地方：`SetNeutral` 更新派系关系，`SetDailyTributePaid` 登记赔款，涉及玩家派系时刷新可见派系的地图视觉，最后派发 `OnMakePeace` 事件。为什么 mod 应该用语义化入口：其一，`detail` 枚举是事件监听方的关键区分依据——`Default` 表示无条件和平，`ByKingdomDecision` 表示王国决策议和，混用会导致监听方（如任务系统、成就系统）误判和平来源；其二，赔款参数只能在 `ApplyByKingdomDecision` 入口传入，`Apply` 入口在编译层面就排除了赔款的可能性，语义清晰；其三，`ApplyInternal` 是 private，mod 无法直接调用，保证了所有议和都经过完整的状态同步管线。两个入口的另一个隐含区别是事件语义：`ApplyByKingdomDecision` 派发的事件携带 `ByKingdomDecision` 标记，监听方可以据此触发议和后的后续逻辑（如赔款结算、外交反馈）。

## 怎么用

### 怎么拿到它

静态类，直接 `MakePeaceAction.Apply...(…)` 调用，不需要实例，不需要从 `Campaign.Current` 取任何服务。

### 典型用法

1. 两个派系战争结束、无条件和平 → `Apply`
2. 王国决策议和，败方每日向胜方赔款 → `ApplyByKingdomDecision`
3. 剧情事件强制停战（如外部入侵迫使双方和解）→ `Apply`

### 最容易踩的坑

1. `ApplyInternal`（第 13 行）是 private，mod 无法直接调用——必须走公开入口。
2. `Apply` 与 `ApplyByKingdomDecision` 的区别只在赔款参数与 `detail` 枚举——混用会导致赔款丢失或事件来源标记错误。
3. `ApplyByKingdomDecision` 的 `dailyTributeFrom1To2` 方向是 faction1 → faction2，传反会导致赔款方向颠倒。
4. 涉及玩家派系时，`ApplyInternal` 会遍历 `Settlement.All` 与 `MobileParty.All` 并 `SetVisualAsDirty`——这是必要的地图刷新，不要试图绕过。
5. `DefaultValueForBeingLimitedAfterPeace`（第 60 行）是 private const，mod 无法读取，也不要在代码里硬编码它的值。

## 关键成员

- **MakePeaceAction**（`MakePeaceAction.cs:10`）— 静态类本体，所有和平建立的入口容器；mod 直接调用其静态方法，无需实例化
- **ApplyInternal**（`MakePeaceAction.cs:13`）— 唯一内部实现：`SetNeutral` + `SetDailyTributePaid` + 涉及玩家时刷新可见派系地图视觉 + 派发 `OnMakePeace`；private，mod 不可直接调用
- **Apply**（`MakePeaceAction.cs:48`）— 无赔款直接和平入口：`dailyTribute=0`、`duration=0`、`detail=Default`
- **ApplyByKingdomDecision**（`MakePeaceAction.cs:54`）— 带每日赔款与期限的议和入口，`detail=ByKingdomDecision`；赔款方向为 faction1 → faction2
- **DefaultValueForBeingLimitedAfterPeace**（`MakePeaceAction.cs:60`）— private const float = 100000f，和平后限制相关数值的内部常量；mod 无法读取
- **MakePeaceDetail**（`MakePeaceAction.cs:63`）— 枚举：`Default` 或 `ByKingdomDecision`，标记和平来源，随 `OnMakePeace` 事件派发

## 真实示例

```csharp
// 场景 1：两个派系直接达成和平（无赔款、无期限）
IFaction faction1 = null; // 示例占位：实际 mod 中填入第一个派系
IFaction faction2 = null; // 示例占位：实际 mod 中填入第二个派系
MakePeaceAction.Apply(faction1, faction2);

// 场景 2：通过王国决策议和 —— faction1 每日向 faction2 支付 500 赔款，持续 30 天
MakePeaceAction.ApplyByKingdomDecision(faction1, faction2, 500, 30);

// 场景 3：无条件和平后，再追加一笔短期每日贡金（duration 设为 1 天）
MakePeaceAction.ApplyByKingdomDecision(faction1, faction2, 1000, 1);
```

## 参见

- [ChangeRelationAction](../ChangeRelationAction) —— 本批兄弟页，英雄级关系修改
- [DeclareWarAction](../DeclareWarAction) —— 本批，宣战动作
- [Campaign](../Campaign) —— 战役事件与模型入口
- [CampaignEventDispatcher](../CampaignEventDispatcher) —— `OnMakePeace` 事件的派发方

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
