---
title: "BanditPartyComponent"
description: "BanditPartyComponent 是巢穴匪徒和定居点相关掠夺者使用的战争队伍组件，管理巢穴、首领标志和生成初始化。"
---
# BanditPartyComponent

**命名空间:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public class BanditPartyComponent : WarPartyComponent`  
**基类:** [WarPartyComponent](../WarPartyComponent)  
**源码文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/BanditPartyComponent.cs`

## 一句话职责

它为匪徒或掠夺者 `MobileParty` 提供巢穴或关联定居点身份、首领状态、氏族所有者和创建时的部队初始化。

## 心智模型

同一个组件表示两类相近的队伍。`CreateBanditParty` 保存 [Hideout](../Hideout)，并从巢穴解析 `HomeSettlement`；`CreateLooterParty` 则保存关联的 [Settlement](../Settlement)。这两个构造路径互斥，所以应通过组件读取 `HomeSettlement`，不要从 `MobileParty.StringId` 猜测归属。

创建是两阶段操作。静态工厂用组件创建 `MobileParty`，并保存内部 `InitializationArgs`；之后 `PartyComponent` 生命周期绑定队伍、设置 `ActualClan`，再用指定的 [PartyTemplateObject](../PartyTemplateObject) 或空的部队/俘虏 roster 在给定位置初始化。转换方法会替换已有队伍的组件，因此跨越的是队伍分类边界。

## 何时使用，何时不要使用

- 行为需要巢穴、关联定居点、首领标志或匪徒 home 时，读取 `mobileParty.BanditPartyComponent`。
- 巢穴队伍使用 `CreateBanditParty`，定居点相关掠夺者使用 `CreateLooterParty`；让工厂负责 `MobileParty.CreateParty` 和创建初始化。
- 巢穴改变时使用 `SetHomeHideout`。只有新旧引用确实不同，它才发布 `OnHomeHideoutChanged`。
- 不要直接构造组件；构造函数受保护，初始化还依赖战役队伍生命周期。
- 不要因为临时任务队伍拥有匪徒部队就使用 `CreateBanditParty`。[CustomPartyComponent](../CustomPartyComponent) 才是没有巢穴身份的任务队伍类型。

## 依赖关系

```text
Hideout 或关联 Settlement + Clan + PartyTemplateObject
  -> BanditPartyComponent 工厂
  -> MobileParty.CreateParty / PartyComponent 创建回调
  -> ActualClan 与 roster 初始化
  -> MobileParty 匪徒/掠夺者分类和队伍行为
```

- 宿主：[MobileParty](../MobileParty) 绑定并暴露组件。
- 身份：[Hideout](../Hideout)、[Settlement](../Settlement)、[Clan](../Clan) 和 [PartyTemplateObject](../PartyTemplateObject) 提供 home、派系和部队。
- 分类：`ConvertPartyToBanditParty` 和 `ConvertPartyToLooterParty` 调用 `MobileParty.SetPartyComponent`，这是队伍类型变更，不是字段赋值。
- 观察：[CampaignEvents](../CampaignEvents) 接收 home hideout 变更事件。
- 替代：[CustomPartyComponent](../CustomPartyComponent) 用于不应成为巢穴队伍的任务自定义队伍。

## 状态与操作

| 成员 | 含义与时机 |
|---|---|
| `Hideout` | 匪徒队伍的可保存巢穴身份。使用关联定居点构造的掠夺者实例中它为 null。 |
| `IsBossParty` | 工厂选择并保存的首领标志；它不会自行添加首领部队，也不会启动巢穴遭遇战。 |
| `HomeSettlement` | 有 `Hideout` 时返回 `Hideout.Settlement`，否则返回保存的关联定居点。 |
| `PartyOwner` | 读取 `MobileParty.ActualClan?.Leader`；只有队伍已绑定并设置氏族后才有意义。 |
| `CreateBanditParty` / `CreateLooterParty` | 在指定位置创建并初始化队伍。模板非 null 时填充队伍，模板为 null 时创建空部队和俘虏 roster。 |
| `ConvertPartyToBanditParty` / `ConvertPartyToLooterParty` | 替换已有队伍的组件。只能在所属战役流程明确要重新分类时使用。 |
| `SetHomeHideout` | 修改巢穴，并且只在新旧引用不同的时候派发 `OnHomeHideoutChanged`。 |
| `ClearCachedName` | 在派系或身份变化后使缓存的地图名称失效。 |

## 真实示例

SandBox 匪徒生成路径会传入真实的氏族、巢穴、模板和城门位置。mod 行为可以复用同样的获取路径，但必须先确认定居点确实有巢穴：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = Settlement.CurrentSettlement;
Hideout hideout = settlement?.Hideout;
Clan clan = Clan.BanditFactions.First(
    faction => faction.Culture == settlement.Culture);

if (hideout != null)
{
    MobileParty party = BanditPartyComponent.CreateBanditParty(
        "mod_bandit_party_1",
        clan,
        hideout,
        isBossParty: false,
        clan.DefaultPartyTemplate,
        settlement.GatePosition);
}
```

对于逃兵式掠夺者，源码改为使用关联定居点和 `CreateLooterParty`，不传巢穴。一个组件实例不要同时使用两种 home 表示。

## 风险与存档边界

- 工厂会通过 `MobileParty` 读取战役模型并初始化 roster。战役对象和队伍系统尚未准备好时调用，可能留下无效队伍或在创建期间失败。
- `Hideout` 和私有关联定居点对应不同构造路径。掠夺者要转成巢穴队伍，必须走显式转换和战役副作用，不能只赋一个属性。
- `SetHomeHideout` 会派发战役事件。应在游戏线程调用，并且巢穴被销毁后不要继续持有旧引用。
- `IsBossParty` 是保存元数据，不代表队伍一定拥有首领部队；生成流程仍须选择正确模板和遭遇战路径。
- 替换组件不会绕过队伍清理或战役分类。应使用对应转换方法和所属行为的清理路径。

## 版本说明

本页依据 v1.4.5 `BanditPartyComponent`、`BanditSpawnCampaignBehavior`、`DesertersCampaignBehavior` 以及巢穴定居点调用点编写。工厂 ID、首领语义和队伍初始化可能随版本变化。

## 导航

- 父级：[Campaign API](../)
- 同级：[PartyComponent](../PartyComponent) · [CaravanPartyComponent](../CaravanPartyComponent) · [LordPartyComponent](../LordPartyComponent) · [CustomPartyComponent](../CustomPartyComponent)
- 相关：[MobileParty](../MobileParty) · [Hideout](../Hideout) · [Settlement](../Settlement) · [CampaignEvents](../CampaignEvents)
