---
title: "WarPartyComponent"
description: "WarPartyComponent 是所有“参战部队”的抽象身份组件：通过绑定队伍的 ActualClan 推断归属氏族，并在读档时把自身登记进 Clan 的野战军集合、销毁时移除，是领主军与强盗队的共同基类。"
---
# WarPartyComponent

**命名空间:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class WarPartyComponent : PartyComponent`  
**基类:** [PartyComponent](../PartyComponent)  
**源码文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/WarPartyComponent.cs`

## 概述

`WarPartyComponent` 是战役地图上**所有“会打仗的队伍”的抽象身份组件**。它不像 `VillagerPartyComponent` 绑定某个村庄、也不像 `GarrisonPartyComponent` 绑定某个据点，而是把归属绑定到**队伍当前的实际氏族（`ActualClan`）**上——领主的野战军、家族的私兵、乃至强盗队都通过它表达“我是一支参战力量”。它本身几乎不存状态：唯一的公开属性 `Clan` 是从 `MobileParty.ActualClan` 推导出来的，旗帜来自 `Clan.Banner`，而它最重要的职责是**在生命周期里维护氏族野战军集合的登记**（`OnWarPartyAdded` / `OnWarPartyRemoved`）。它是抽象的，不能直接 `new`，具体形态是 `LordPartyComponent`（领主/家族军）与 `BanditPartyComponent`（强盗）。

## 一句话职责

它是“参战部队”的抽象身份牌：把队伍的归属解析为实际氏族，并在读档时把自己登记进 `Clan` 的野战军列表、销毁时移除，换氏族时迁移登记。

## 心智模型

把它当成**“氏族的战斗名册条目”**，而不是一支独立实体：

- 它是**抽象的**（`public abstract class`），你永远拿不到裸的 `WarPartyComponent` 实例——拿到的总是 `LordPartyComponent` 或 `BanditPartyComponent`。新建领主军或强盗队要分别走它们各自的具体工厂/创建路径，不要 `new WarPartyComponent()`。
- 它**由 `MobileParty` 持有**，生命周期跟队伍走；通过 `MobileParty.WarPartyComponent` 强类型访问，或判断 `party.PartyComponent is WarPartyComponent`。
- **归属是推导出来的，不是存下来的**：`Clan` 属性直接返回 `base.Party.MobileParty.ActualClan`，因此换队伍所属氏族（例如领主转投王国、或被俘虏后变更 `ActualClan`）会立即反映到 `Clan` 上。
- **它维护氏族的野战军登记簿**。读档反序列化后 `OnInitialize` 调用 `Clan.OnWarPartyAdded(this)`，把自身加进氏族的野战军集合；队伍销毁时 `OnFinalize` 调用 `Clan.OnWarPartyRemoved(this)` 移除。想“枚举某氏族现在有多少支野战军”，权威来源是 `Clan` 的野战军集合，而不是自己扫世界。
- 当队伍的实际氏族发生变化时，内部 `OnClanChange(oldClan, newClan)` 会先从旧氏族 `OnWarPartyRemoved`、再向新氏族 `OnWarPartyAdded` 迁移登记——这套登记与组件生命周期强耦合，绕过去直接改 `ActualClan` 而不经过该路径会让氏族的野战军集合出现过期或重复项。
- 层（Layer）= **Campaign**。进入战斗场景后对应的是 `Agent`，而非此组件。

## 何时使用，何时不要使用

- 想读取“这支队伍是不是参战力量、归属哪个氏族、该用哪面旗”时，用 `MobileParty.WarPartyComponent` 或 `party.PartyComponent is WarPartyComponent`，再读 `Clan` 与 `GetDefaultComponentBanner()`。
- 想区分具体参战类型时，用 `party.LordPartyComponent` / `party.BanditPartyComponent` 强类型访问，或 `is LordPartyComponent` / `is BanditPartyComponent`。
- 想枚举某氏族的野战军，遍历 `Clan` 提供的野战军集合，而不是每帧扫 `MobileParty.All`。
- 不要 `new WarPartyComponent()`——它是抽象的，且会跳过具体子类的创建流程与 `MobileParty.CreateParty`。新建领主军/强盗走各自的具体子类工厂。
- 不要手动 `Clan.OnWarPartyAdded/OnWarPartyRemoved` 来“修”登记；这由组件的生命周期钩子驱动，手动调用会与真实状态重复或冲突。
- 不要把 `Clan` 当作可写的“队伍所属氏族”字段去赋值——它只是 `ActualClan` 的只读视图；要改归属请走会改变 `ActualClan` 的官方流程（如 `ChangeKingdomAction`、氏族变更 Action）。

## 依赖关系

```text
MobileParty.ActualClan (归属来源)
  -> WarPartyComponent.Clan 只读推导
  -> 读档 OnInitialize：Clan.OnWarPartyAdded(this)
  -> 销毁 OnFinalize：Clan.OnWarPartyRemoved(this)
  -> 换氏族 OnClanChange：oldClan 移除 + newClan 登记
  -> 具体子类：LordPartyComponent / BanditPartyComponent
```

- 宿主：[MobileParty](../MobileParty) 持有组件并提供 `WarPartyComponent`、`LordPartyComponent`、`BanditPartyComponent` 强类型访问器；`Clan` 属性正是从 `MobileParty.ActualClan` 推导。
- 归属：[Clan](../Clan) 维护野战军登记簿，`OnWarPartyAdded` / `OnWarPartyRemoved` 在此被调用；归属变化也由 `ActualClan` 经 [Clan](../Clan) 推断。
- 共同契约：[PartyComponent](../PartyComponent) 提供身份、名字与生命周期钩子（`OnInitialize` / `OnFinalize` 在这里被重写）。
- 队伍数值：[PartyBase](../PartyBase) 经组件暴露兵员/金币/规模；[PartyWageModel](../PartyWageModel) 与 [PartySizeLimitModel](../PartySizeLimitModel) 决定工资与规模上限。
- 事件：[CampaignEventDispatcher](../CampaignEventDispatcher) 在换队长等时刻广播。
- 具体子类（同级）：[LordPartyComponent](../LordPartyComponent)（领主/家族野战军）、[BanditPartyComponent](../BanditPartyComponent)（强盗队）；相关身份兄弟：[VillagerPartyComponent](../VillagerPartyComponent)（村庄运输队）、[CaravanPartyComponent](../CaravanPartyComponent)（商队）、[GarrisonPartyComponent](../GarrisonPartyComponent)（驻军）。

## 状态与操作

| 成员 | 含义与时机 |
|---|---|
| `Clan Clan` | 公开只读，直接返回 `base.Party.MobileParty.ActualClan`（队伍当前实际所属氏族）。归属发生变化时立即反映，不能赋值。 |
| `Banner GetDefaultComponentBanner()` | 重写自基类，返回 `Clan?.Banner`（氏族无旗时为 `null`）。地图旗帜初始化时 `MobileParty` 会优先调用它。 |
| `OnInitialize()` | 受保护生命周期钩子（读档后）：调用 `Clan.OnWarPartyAdded(this)`，把自身登记进氏族的野战军集合。 |
| `OnFinalize()` | 受保护生命周期钩子（销毁时）：调用 `Clan.OnWarPartyRemoved(this)`，从集合移除。 |
| `OnClanChange(Clan oldClan, Clan newClan)` | `internal`：实际氏族变更时，先从 `oldClan` 移除登记，再向 `newClan` 添加登记，保持野战军集合一致。 |

## 真实示例

由于 `WarPartyComponent` 是抽象的，实战中总是判断具体子类并读取推导出的 `Clan`：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party.PartyComponents;

// 强类型访问：玩家队伍若是参战部队则非空（实际为 Lord 或 Bandit 子类）
WarPartyComponent war = MobileParty.MainParty.WarPartyComponent;
if (war != null)
{
    Clan clan = war.Clan;                        // 实际归属氏族（ActualClan）
    Banner banner = war.GetDefaultComponentBanner(); // 返回 clan?.Banner
}

// 区分领主军与强盗军（二者都继承 WarPartyComponent）
foreach (MobileParty party in MobileParty.All)
{
    if (party.LordPartyComponent != null) { /* 领主 / 家族野战军 */ }
    else if (party.BanditPartyComponent != null) { /* 强盗队伍 */ }
}
```

想枚举某氏族的野战军时，直接读 `Clan` 的野战军集合（由 `OnWarPartyAdded`/`OnWarPartyRemoved` 维护），而不是每帧扫全世界的 `MobileParty.All` 再逐个判断 `is WarPartyComponent`。

## 风险与存档边界

- `Clan` 是 `ActualClan` 的只读推导，不是可保存的“队伍氏族”字段。试图“改队伍归属”而只动 `Clan` 不会生效，必须走会改变 `ActualClan` 的官方流程；否则 `Clan` 读出来和你想的不一致。
- 野战军登记与组件生命周期强绑定：`OnInitialize` 在**读档后**才登记，`OnFinalize` 在销毁时移除。把“每次进档都要重建”的逻辑放到 `OnInitialize`，不要放到首次创建的钩子（基类 `OnMobilePartySetOnCreation` 在这里未被重写，本组件没有首建逻辑）。
- 换氏族走内部 `OnClanChange` 迁移登记。绕过它直接改 `ActualClan` 会让旧氏族的野战军集合残留过期项、新氏族漏登记——这会污染“枚举某氏族野战军”的结果。
- `GetDefaultComponentBanner()` 在 `Clan == null` 时返回 `null`（源码用 `Clan?.Banner`），调用方需判空，不要假设一定拿到旗帜。
- 它是抽象类：从 `MobileParty.PartyComponent` 向下转型为 `WarPartyComponent` 是安全的只读访问；但永远不要 `new WarPartyComponent()`，新建队伍必须走 `LordPartyComponent` / `BanditPartyComponent` 的具体创建路径或 `MobileParty.SetPartyComponent`。

## 版本说明

本页依据 v1.4.5 `WarPartyComponent.cs`、`Clan.OnWarPartyAdded/OnWarPartyRemoved` 与 `MobileParty.WarPartyComponent` 强类型访问器编写。抽象基类本身只负责 `Clan` 推导与野战军登记；领主军与强盗队在各自子类中扩展创建、名称与 AI 行为，这些具体行为不在本页范围内。

## 导航

- 父级：[Campaign API](../)
- 同级：[PartyComponent](../PartyComponent) · [LordPartyComponent](../LordPartyComponent) · [BanditPartyComponent](../BanditPartyComponent) · [VillagerPartyComponent](../VillagerPartyComponent) · [CaravanPartyComponent](../CaravanPartyComponent) · [GarrisonPartyComponent](../GarrisonPartyComponent)
- 相关：[MobileParty](../MobileParty) · [Clan](../Clan) · [PartyBase](../PartyBase) · [PartyWageModel](../PartyWageModel) · [PartySizeLimitModel](../PartySizeLimitModel) · [CampaignEventDispatcher](../CampaignEventDispatcher)
