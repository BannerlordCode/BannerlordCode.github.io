---
title: "PatrolPartyComponent"
description: "PatrolPartyComponent 标识定居点巡逻队，管理 home settlement、海军模式、本地化名称和 roster 初始化。"
---
# PatrolPartyComponent

**命名空间:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public class PatrolPartyComponent : PartyComponent`  
**基类:** [PartyComponent](../PartyComponent)  
**源码文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/PatrolPartyComponent.cs`

## 一句话职责

它把 `MobileParty` 标记为陆地或沿海巡逻队，绑定 home settlement，生成本地化身份，并将陆地巡逻队注册到定居点。

## 心智模型

`PatrolPartyComponent` 是围绕 `PatrolPartiesCampaignBehavior` 创建的队伍的小型身份和生命周期组件。工厂根据 [PartyTemplateObject](../PartyTemplateObject) 是否有船体决定海军模式，创建队伍、在位置附近初始化、加入粮食、排序 roster，并对海军巡逻关闭陆地导航。

陆地和海军巡逻的反向引用有意不同。只有 `IsNaval` 为 false 时，`OnInitialize` 和 `OnFinalize` 才调用 `Settlement.SetPatrolParty`；沿海巡逻仍有 `HomeSettlement`，但不会放进定居点的唯一陆地巡逻槽位。因此 `IsNaval` 是生命周期决定，不只是显示选项。

## 何时使用，何时不要使用

- 读取现有巡逻队的 `mobileParty.PatrolPartyComponent.HomeSettlement`、`Clan` 和 `IsNaval`。
- 真正创建巡逻队时，使用巡逻模型提供的模板和真实生成位置调用 `CreatePatrolParty`。
- 队伍已经创建并绑定后，使用 `SortRoster`；它会把排序委托给 `PartyBaseHelper.SortRoster`。
- 不要从定居点有港口推断海军模式。工厂依据 `template.ShipHulls` 决定。
- 不要为同一个陆地定居点重复调用工厂；定居点只保存一个陆地巡逻引用，生命周期回调会替换或清空它。

## 依赖关系

```text
SettlementPatrolModel 模板 + settlement + position
  -> PatrolPartyComponent.CreatePatrolParty
  -> MobileParty 创建、roster 和导航设置
  -> 非海军的 Settlement.PatrolParty 注册
  -> PatrolPartiesCampaignBehavior 跟踪 home 与海军巡逻
```

- 宿主：[MobileParty](../MobileParty) 持有组件和 roster。
- 战役行为：[PatrolPartiesCampaignBehavior](../PatrolPartiesCampaignBehavior) 创建并查询巡逻队。
- 数据来源：[Settlement](../Settlement) 与 `SettlementPatrolModel` 提供 home 和模板。
- 共同契约：[PartyComponent](../PartyComponent) 提供创建、初始化和结束回调。
- roster 辅助：[PartyBase](../PartyBase) 被传给排序辅助方法。

## 状态与操作

| 成员 | 含义与时机 |
|---|---|
| `HomeSettlement` | 可保存的 home settlement，用于巡逻评分和命名，也是陆地巡逻反向引用的持有者。 |
| `Clan` | 返回 `HomeSettlement.OwnerClan`，是派生值；home 无效时会失败。 |
| `IsNaval` | 从工厂构造时的 `template.ShipHulls` 决定并保存。 |
| `Name` | 使用 home settlement 名称缓存陆地或沿海巡逻名称。 |
| `PartyOwner` | 返回 `HomeSettlement.Owner`，不是独立保存的 owner 字段。 |
| `CreatePatrolParty` | 创建、定位、配备、排序和配置巡逻队，并初始化组件的定居点注册。 |
| `GetDefaultComponentBanner` | 返回 home settlement 的 Banner。 |
| `SortRoster` | 通过 `PartyBaseHelper` 对绑定的队伍 roster 排序。 |

## 真实示例

源码巡逻行为从战役模型取得模板，并使用估计匪徒速度计算生成半径：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = Settlement.CurrentSettlement;
PartyTemplateObject template =
    Campaign.Current.Models.SettlementPatrolModel
        .GetPartyTemplateForPatrolParty(settlement, isNaval: false);

MobileParty patrol = PatrolPartyComponent.CreatePatrolParty(
    "patrol_party_mod_1",
    settlement.GatePosition,
    8f * Campaign.Current.EstimatedAverageBanditPartySpeed,
    settlement,
    template);

bool isNaval = patrol.PatrolPartyComponent.IsNaval;
```

工厂已经调用 `SortRoster` 并初始化定居点注册。调用方只有在之后确实修改 roster 时才需要再次排序。

## 风险与存档边界

- `template.ShipHulls` 决定 `IsNaval`。传入 null 或选择错误模板，会创建错误的导航模式。
- `SetPatrolParty` 只服务陆地巡逻。即使海军巡逻拥有相同的 `HomeSettlement`，从 `Settlement.PatrolParty` 也找不到它。
- `SortRoster` 要求组件的 `MobileParty` 已绑定；对脱离或已经结束的组件调用是无效的。
- 结束时会清空定居点的陆地巡逻引用。不要跨队伍销毁或存档重建缓存这个引用。
- 工厂会改变位置、粮食、roster 顺序和陆地导航权限，是战役状态变更，不是被动类型转换。

## 版本说明

本页依据 v1.4.5 `PatrolPartyComponent`、`PatrolPartiesCampaignBehavior`、`Settlement.SetPatrolParty` 和定居点巡逻模型编写。海军巡逻行为和模板字段可能随版本变化。

## 导航

- 父级：[Campaign API](../)
- 同级：[PartyComponent](../PartyComponent) · [MilitiaPartyComponent](../MilitiaPartyComponent) · [GarrisonPartyComponent](../GarrisonPartyComponent)
- 相关：[MobileParty](../MobileParty) · [Settlement](../Settlement) · [PartyTemplateObject](../PartyTemplateObject) · [PatrolPartiesCampaignBehavior](../PatrolPartiesCampaignBehavior)
