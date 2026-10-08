---
title: "TransferPrisonerAction"
description: "战役层的静态 Action：把一名被俘兵种从旧关押方安全转交给新关押方，而不是直接改两个队伍的囚犯名册。"
---

# TransferPrisonerAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class TransferPrisonerAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/TransferPrisonerAction.cs`

## 概述

TransferPrisonerAction 是 `TaleWorlds.CampaignSystem.Actions` 命名空间下的静态 Action 类。整个类只有一个公开入口 `Apply`，用途是把一个已经处于被俘状态的兵种，从旧关押方转移到新关押方。它操作的对象是 `CharacterObject`，也就是兵种模板，而不是 `Hero`；这一点把它和 `TakePrisonerAction`（面向 `Hero`）区分开，两者不在同一层抽象上。

状态变更本身发生在 private 的 `ApplyInternal` 里，可以逐句读完：当被转移兵种对应的 `HeroObject` 正好是 `Hero.MainHero` 时，它改写 `PlayerCaptivity.CaptorParty`；其余情况先从 `prisonerOwnerParty.PrisonRoster` 减去一个计数，再通过 `newParty.AddPrisoner(prisonerTroop, 1)` 加入新的一方。转移动作完成之后，如果该兵种对应一名 `Hero` 且新关押方是聚落，还会派发 `CampaignEventDispatcher.Instance.OnPrisonersChangeInSettlement`。

这类操作必须走 Action 而不是直接改字段，是因为名册增减与事件派发被绑在同一条代码路径上。`PrisonRoster` 的计数变化只是结果的一半，另一半是订阅了 `OnPrisonersChangeInSettlement` 的系统能否看到这次转移。绕过入口直接操作名册，计数会变，但事件不会派发。

## 心智模型

TaleWorlds 的 Action 类遵循同一套形态：外部只看到一组语义化入口，所有入口最终都收敛到一个 private 的 `ApplyInternal`，真正改世界状态和派发事件的代码只存在于那一个方法里。TransferPrisonerAction 是这套形态最精简的样本——它只有一个语义化入口 `Apply`，而 `Apply` 的全部实现就是转调 `ApplyInternal`。

读这类类时可以固定按三步走：先看公开入口有哪几个、每个名字表达了什么意图；再看 `ApplyInternal` 的参数列表，那才是状态变更需要的完整输入；最后看方法体里派发了哪些 `CampaignEventDispatcher` 事件，那些事件决定了其它系统（聚落监狱界面、名册统计、任务系统）会不会跟着更新。对本页这种只有一个入口的类，三步可以在几十秒内走完，深度也止于此，不需要为它堆砌更多叙述。

对 mod 来说，应该调用公开的语义化入口，而不是自己去改 `PartyBase.PrisonRoster` 或 `PlayerCaptivity`。在源码里可以直接看到：`ApplyInternal` 里既有玩家被俘的特殊分支，也有 `OnPrisonersChangeInSettlement` 的事件派发，这些副作用只在这一条路径上发生。绕过 Action 直接操作名册，事件就不会派发，随后依赖该事件刷新显示的系统会停在旧状态上。

同时要记住本类操作的是 `CharacterObject`：它是兵种模板，同一个模板在名册里可能对应多个计数。`TakePrisonerAction` 走的是 `Hero` 维度，两者混用会把「一个具体英雄」和「一种兵种」搞混。如果你手上只有 `Hero`，要先确认它对应的兵种模板，再决定用哪一条路径。

## 怎么用

### 怎么拿到它
TransferPrisonerAction 是静态类，没有实例，也没有单例字段。直接在代码里写 `TransferPrisonerAction.Apply(prisonerTroop, prisonerOwnerParty, newParty)` 即可，不需要先获取任何对象引用，也不需要把它注册到某个系统或服务里。

### 典型用法
- 把某个聚落监狱里的被俘兵种转移到一支正在移动的队伍里。
- 在自定义的「俘虏交接」流程中，把旧关押方名册里的兵种交给新的一方。
- 当转移目标是一个聚落时，依赖 `OnPrisonersChangeInSettlement` 事件去刷新聚落监狱的显示。
- 在玩家被俘的剧情里，通过同一个入口改写 `PlayerCaptivity.CaptorParty`；这条分支由 `ApplyInternal` 内部判断，调用方不需要自己区分。
- 编写测试或调试脚本时，用它把兵种在几个 `PartyBase` 之间来回搬运，而不触碰名册 API。

### 最容易踩的坑
- 它接收 `CharacterObject`，不是 `Hero`；把 `Hero` 直接传进来是类型错误。
- `prisonerOwnerParty` 与 `newParty` 不要传同一个对象，否则先减后加的顺序会让计数结果偏离预期。
- 玩家被俘分支由 `ApplyInternal` 内部判断，调用方传入的 `newParty` 会成为新的 `PlayerCaptivity.CaptorParty`。
- 聚落通知只在 `prisonerTroop.HeroObject != null` 且 `newParty.IsSettlement` 为真时派发；转移普通士兵时不会有这个事件。
- 直接改 `PrisonRoster` 而不走这个入口，会跳过事件派发，其它系统看不到这次转移。

## 关键成员

- **TransferPrisonerAction**（`TransferPrisonerAction.cs:7`）— 静态类本体，声明在 `TaleWorlds.CampaignSystem.Actions` 下；本类只暴露一个公开入口，没有构造函数、属性或字段。
- **ApplyInternal**（`TransferPrisonerAction.cs:10`）— private；本类唯一真正改状态的地方：被转移的是 `Hero.MainHero` 时写入 `PlayerCaptivity.CaptorParty`，否则从 `prisonerOwnerParty.PrisonRoster` 减 1 并用 `newParty.AddPrisoner` 加 1；当 `prisonerTroop.HeroObject` 非空且 `newParty.IsSettlement` 时派发 `OnPrisonersChangeInSettlement`。
- **Apply**（`TransferPrisonerAction.cs:28`）— public 语义化入口，签名 `(CharacterObject prisonerTroop, PartyBase prisonerOwnerParty, PartyBase newParty)`；方法体只有一行，转调 `ApplyInternal`，本身不包含任何判断或状态变更。

## 真实示例

```csharp
// 把一名被俘兵种从旧关押方转交给新关押方。
// 战役未启动时直接返回，两个 PartyBase 由调用方准备好。
public static void HandOverPrisoner(
    CharacterObject prisonerTroop,
    PartyBase prisonerOwnerParty,
    PartyBase newParty)
{
    if (Campaign.Current == null)
    {
        return;
    }

    TransferPrisonerAction.Apply(prisonerTroop, prisonerOwnerParty, newParty);
}
```

## 参见

- ↔ [EndCaptivityAction](../EndCaptivityAction) — 相反方向的收尾：把一名被囚禁的 `Hero` 从囚禁状态里放出来。
- ↔ [TakePrisonerAction](../TakePrisonerAction) — 把 `Hero` 变成俘虏的入口，与本页的 `CharacterObject` 维度不同。
- ↔ [Campaign](../Campaign) — 战役单例，示例里的启动检查用到 `Campaign.Current`。
- ↔ [MapEventHelper](../../core-extra/MapEventHelper) — 会战相关的辅助入口，战后释放流程常与俘虏状态一起出现。

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
