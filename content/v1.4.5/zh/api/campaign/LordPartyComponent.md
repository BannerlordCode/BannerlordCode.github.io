---
title: "LordPartyComponent"
description: "LordPartyComponent 是英雄领主 MobileParty 使用的战争队伍组件，负责所有者、首领、工资上限和生成初始化。"
---
# LordPartyComponent

**命名空间:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public class LordPartyComponent : WarPartyComponent`  
**基类:** [WarPartyComponent](../WarPartyComponent)  
**源码文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/LordPartyComponent.cs`

## 一句话职责

它把 `MobileParty` 变成由英雄带领的战争队伍，并协调所有者身份、首领、工资上限、生成 roster、氏族和 home settlement。

## 心智模型

`LordPartyComponent` 是氏族领主地图队伍背后的组件，不是 `Hero` 本身，也不是队伍 roster。可保存的 `Owner` 和 `_leader` 字段决定队伍身份，`MobileParty` 则持有 roster、地图位置和战斗状态。`PartyOwner`、`HomeSettlement`、`Name` 与 `WagePaymentLimit` 是这组关系上的派生或缓存视图。

创建回调会区分玩家氏族和其他氏族来初始化队伍：它先把 owner 加入 roster；玩家氏族队伍放在精确位置，其他氏族则使用 owner 所属氏族的模板在位置周围初始化；随后加入粮食，并在有生成定居点时让队伍向该定居点移动。[PartyComponent](../PartyComponent) 提供 `ChangePartyLeader`：该方法先要求新 Hero 已在成员 roster 中，然后本类更新 `_leader`；新的非 null leader 也会成为 owner。

## 何时使用，何时不要使用

- 读取 `MobileParty.LordPartyComponent`，取得 owner、leader、工资上限和领主队伍特有的 home settlement。
- 新建英雄队伍时使用 `CreateLordParty`；只有受控的战役流程要重新分类已有队伍时才使用 `ConvertPartyToLordParty`。
- 先把新 Hero 加入 `MemberRoster`，再使用继承的 `ChangePartyLeader`；不要直接写 leader 或 owner 字段。
- `ChangePartyOwner` 只应由改变主角的战役操作或其他被授权的所有权转换流程使用；它是内部方法。
- 不要把 `Name` 当作稳定 ID。它是本地化的 owner 派生名称并带缓存，owner/leader 改变后会失效。

## 依赖关系

```text
Hero owner + Clan + 可选 spawn Settlement
  -> LordPartyComponent.CreateLordParty
  -> MobileParty.CreateParty / 创建回调
  -> owner roster、clan、粮食、位置和移动设置
  -> 领主队伍事件、地图 AI 和存档重建
```

- 宿主：[MobileParty](../MobileParty) 持有组件和队伍 roster。
- 身份来源：[Hero](../Hero)、[Clan](../Clan) 和 [Settlement](../Settlement) 提供 owner、氏族模板、home 与生成目的地。
- 共同契约：[PartyComponent](../PartyComponent) 验证首领变更并分发 `OnPartyLeaderChanged`。
- 持久化：`Owner`、leader 和工资上限是可保存字段；名称缓存和创建参数是运行时数据。
- 变更示例：[ChangePlayerCharacterAction](../../campaign-ext/ChangePlayerCharacterAction) 以及战役启动流程通过 `ConvertPartyToLordParty` 转换主队伍。

## 状态与操作

| 成员 | 含义与时机 |
|---|---|
| `Owner` | 可保存的 Hero 所有者和队伍身份；也是 `PartyOwner` 与 `HomeSettlement` 的来源。 |
| `Leader` | 当前领主队伍首领。继承的首领变更边界在新 leader 非 null 时也可能改变 `Owner`。 |
| `WagePaymentLimit` | 可保存的单队伍上限，初始复制自 `PartyWageModel.MaxWagePaymentLimit`。 |
| `CanHaveNavalNavigationCapability` | 始终为 `true`；实际移动仍取决于绑定队伍及其当前导航状态。 |
| `Name` | 从 owner 延迟构建并缓存本地化领主队伍名称。 |
| `CreateLordParty` | 使用源码派生 ID 和延迟初始化参数创建队伍；会在传入字符串 ID 后追加 `_party_1`。 |
| `ConvertPartyToLordParty` | 用给定 owner 和 leader 替换已有队伍组件。 |
| `SetWagePaymentLimit` | 更新组件保存的工资上限。 |
| `ClearCachedName` | 在身份改变后使本地化名称缓存失效。 |

## 真实示例

当行为需要检查领主组件时，读取现有主队伍是最安全的获取路径：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.CampaignSystem.Settlements;

MobileParty party = MobileParty.MainParty;
LordPartyComponent lord = party?.LordPartyComponent;

if (lord != null)
{
    Hero owner = lord.Owner;
    Hero leader = lord.Leader;
    Settlement home = lord.HomeSettlement;
    int wageLimit = lord.WagePaymentLimit;
}
```

战役启动会使用 `LordPartyComponent.ConvertPartyToLordParty(MainParty, Hero.MainHero, Hero.MainHero)` 建立主队伍组件。新领主队伍应通过 `CreateLordParty` 创建，而不是构造受保护的组件。

## 风险与存档边界

- 初始工资字段会读取 `Campaign.Current.Models.PartyWageModel`；战役模型尚未建立时构造领主组件是无效的。
- `ChangePartyLeader` 会拒绝不在 `MemberRoster` 中的 Hero，并保留旧 leader。成功的非 null leader 变更在此实现中也会改变 owner。
- owner 和 leader 是分开的可保存值，但 leader 回调可以同步它们。不要通过反射或原始字段只更新其中一个。
- 创建会加入 owner 和粮食，改变 `ActualClan`、aggressiveness、位置以及可选移动。应把工厂视为战役状态变更。
- 队伍结束或其 Hero 死亡后，组件可能仍在存档重建路径中，但 `MobileParty` 已 inactive。执行地图操作前检查队伍是否 active。

## 版本说明

本页依据 v1.4.5 `LordPartyComponent`、`PartyComponent.ChangePartyLeader`、`Campaign` 主队伍初始化以及 `ChangePlayerCharacterAction` 编写。所有者/首领同步和生成规则可能随版本变化。

## 导航

- 父级：[Campaign API](../)
- 同级：[PartyComponent](../PartyComponent) · [CaravanPartyComponent](../CaravanPartyComponent) · [BanditPartyComponent](../BanditPartyComponent) · [CustomPartyComponent](../CustomPartyComponent)
- 相关：[MobileParty](../MobileParty) · [Hero](../Hero) · [Clan](../Clan) · [Settlement](../Settlement)
