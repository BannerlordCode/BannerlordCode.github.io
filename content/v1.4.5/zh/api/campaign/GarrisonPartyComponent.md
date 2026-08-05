---
title: "GarrisonPartyComponent"
description: "GarrisonPartyComponent 是定居点驻军使用的静态队伍组件，负责定居点关联、城镇反向引用和工资上限。"
---
# GarrisonPartyComponent

**命名空间:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public class GarrisonPartyComponent : PartyComponent`  
**基类:** [PartyComponent](../PartyComponent)  
**源码文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/GarrisonPartyComponent.cs`

## 一句话职责

它表示由定居点拥有的非导航驻军 `MobileParty`，并维护定居点链接、显示名称、工资上限和城镇反向引用。

## 心智模型

驻军是已经分配到城镇的部队的队伍形态持有者。`CreateGarrisonParty` 会创建 `MobileParty`，但创建回调还会关闭 AI、设置零攻击性和无目标导航，初始化队伍贸易，并把队伍放到定居点城门。因此它不是漫游队伍，不能因为它暴露 `MobileParty` 就按普通地图队伍处理。

反向引用由定居点持有。`OnInitialize` 把组件写入 `Settlement.Town.GarrisonPartyComponent`，`OnFinalize` 清除该引用。查找当前驻军时，权威来源是 `Settlement` 和 `Town`，不是 mod 自己缓存的旧对象。

## 何时使用，何时不要使用

- 战役行为需要当前驻军时，读取 `settlement.Town.GarrisonPartyComponent` 或 `settlement.Fief.GarrisonParty`。
- 只有负责城镇驻军生命周期的初始化或替换流程，才能使用 `CreateGarrisonParty`。
- 使用 `SetWagePaymentLimit` 把数值委托给 `Settlement.SetGarrisonWagePaymentLimit`；保存权威在定居点。
- 不要把驻军送入普通地图 AI 或导航 API。创建回调明确关闭 AI 并设置 `NavigationType.None`。
- 组件结束后不要继续持有引用；城镇反向引用已清空，MobileParty 也可能已经 inactive。

## 依赖关系

```text
Settlement/Town
  -> GarrisonPartyComponent.CreateGarrisonParty
  -> MobileParty 创建回调关闭 AI 并定位队伍
  -> Town.GarrisonPartyComponent 反向引用
  -> Settlement 工资和驻军系统
```

- 宿主：[MobileParty](../MobileParty) 持有组件和队伍 roster。
- 战役持有者：[Settlement](../Settlement) 与 [Fief](../Fief) 向定居点和地图系统暴露驻军。
- 共同契约：[PartyComponent](../PartyComponent) 提供队伍身份和生命周期回调。
- 持久化：`Settlement` 是驻军工资上限的来源，组件的 `Settlement` 属性可保存。

## 状态与操作

| 成员 | 含义与时机 |
|---|---|
| `Settlement` | 可保存的定居点关联，必须与拥有城镇反向引用的定居点一致。 |
| `PartyOwner` / `HomeSettlement` | 解析为定居点所有者的氏族领袖和对应定居点，需要有效的定居点所有者。 |
| `Name` | 使用定居点名称延迟缓存本地化驻军名称；显示身份改变后需要 `ClearCachedName`。 |
| `WagePaymentLimit` | 读取 `Settlement.GarrisonWagePaymentLimit`，不是组件独立保存的工资字段。 |
| `CanHaveNavalNavigationCapability` | 始终为 `false`，驻军不是海军队伍。 |
| `CreateGarrisonParty` | 创建队伍，并安排在定居点城门初始化；它不是只读访问器。 |
| `ConvertPartyToGarrisonParty` | 替换已有队伍组件，只能由受控的重新分类流程调用。 |
| `GetDefaultComponentBanner` | 返回 `Settlement.Banner`。 |
| `SetWagePaymentLimit` | 将写入委托给定居点的驻军工资 setter。 |

## 真实示例

读取现有城镇驻军应使用定居点持有的反向引用，而不是创建重复队伍：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = Settlement.CurrentSettlement;
GarrisonPartyComponent garrison = settlement?.Town?.GarrisonPartyComponent;
MobileParty party = garrison?.MobileParty;

if (garrison != null && party != null)
{
    int wageLimit = garrison.WagePaymentLimit;
    Settlement home = garrison.HomeSettlement;
}
```

源码中的定居点初始化会用稳定的定居点 ID 调用 `GarrisonPartyComponent.CreateGarrisonParty`。mod 不应在每个 tick 调用该工厂，也不应在城镇已有 active 驻军时再次创建。

## 风险与存档边界

- `Settlement.Town` 必须存在，才能建立城镇反向引用。把此组件应用到村庄或其他定居点类型会违反源码假设。
- 组件随 `MobileParty` 生命周期初始化和结束。手动清空或替换 `Town.GarrisonPartyComponent`，可能让定居点指向不再拥有它的队伍。
- 创建驻军会改变 AI、导航、贸易、位置和队伍视觉状态，是状态变更路径，不是无副作用构造辅助。
- `SetWagePaymentLimit` 写入定居点状态。应使用定居点 setter，不要把脱离组件缓存的数值当作事实来源。
- 结束后 `Town.GarrisonPartyComponent` 为 null。在地图逻辑中使用队伍前，应同时检查组件和 `MobileParty.IsActive`。

## 版本说明

本页依据 v1.4.5 `GarrisonPartyComponent`、`Settlement.Initialize`、`Fief` 以及 `Town.GarrisonPartyComponent` 反向引用编写。驻军初始化和工资归属可能随版本变化。

## 导航

- 父级：[Campaign API](../)
- 同级：[PartyComponent](../PartyComponent) · [MilitiaPartyComponent](../MilitiaPartyComponent) · [PatrolPartyComponent](../PatrolPartyComponent)
- 相关：[MobileParty](../MobileParty) · [Settlement](../Settlement) · [Fief](../Fief)
