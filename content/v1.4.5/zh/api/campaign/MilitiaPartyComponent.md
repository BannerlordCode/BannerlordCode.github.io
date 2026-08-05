---
title: "MilitiaPartyComponent"
description: "MilitiaPartyComponent 是定居点民兵使用的静态队伍组件，向地图事件和定居点系统暴露 ready militia。"
---
# MilitiaPartyComponent

**命名空间:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public class MilitiaPartyComponent : PartyComponent`  
**基类:** [PartyComponent](../PartyComponent)  
**源码文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/MilitiaPartyComponent.cs`

## 一句话职责

它拥有定居点民兵 `MobileParty`，从定居点文化的民兵模板初始化部队，并通过定居点反向引用向地图事件和定居点系统提供该队伍。

## 心智模型

民兵是定居点和地图事件使用的静态队伍表示，不是普通漫游 AI 队伍。`CreateMilitiaParty` 创建队伍、关闭 AI、设置零攻击性、禁用导航、使用 `Settlement.Culture.MilitiaPartyTemplate` 在城门初始化，并立即调用 `EnterSettlementAction`。

反向链接也是生命周期的一部分：`OnInitialize` 设置 `Settlement.MilitiaPartyComponent`，`OnFinalize` 清空它。定居点的民兵计算通过该字段读取 active 队伍，再与 ready militia 数量合并。因此读取时应从定居点取得组件，不要扫描所有队伍或为了查询创建替代对象。

## 何时使用，何时不要使用

- 地图事件、叛乱或定居点计算需要当前民兵队伍时，读取 `settlement.MilitiaPartyComponent`。
- 只有定居点初始化或明确的替换流程才使用 `CreateMilitiaParty`；它会立即改变定居点进入状态和队伍状态。
- 只有所属战役代码明确改变队伍类别时，才使用 `ConvertPartyToMilitiaParty`。
- 不要把民兵当作移动巡逻队，也不要给它附加普通 AI 导航。创建回调会关闭 AI，并使队伍不能导航。
- 不要把组件的 `Settlement` 当作可随意丢弃的标签。它是队伍的保存所有者，也是反向引用的来源。

## 依赖关系

```text
Settlement + Culture.MilitiaPartyTemplate
  -> MilitiaPartyComponent.CreateMilitiaParty
  -> MobileParty 创建回调 + EnterSettlementAction
  -> Settlement.MilitiaPartyComponent
  -> 民兵计数和地图事件参与
```

- 宿主：[MobileParty](../MobileParty) 持有组件、roster 和地图事件队伍侧。
- 战役持有者：[Settlement](../Settlement) 暴露 active 民兵并消费其人数。
- 数据来源：[CultureObject](../CultureObject) 提供 `MilitiaPartyTemplate`。
- 变更边界：[EnterSettlementAction](../../campaign-ext/EnterSettlementAction) 是工厂创建路径的一部分。
- 共同契约：[PartyComponent](../PartyComponent) 提供绑定和结束回调。

## 状态与操作

| 成员 | 含义与时机 |
|---|---|
| `Settlement` | 可保存的定居点关联，也是初始化和清理使用的关键引用。 |
| `PartyOwner` / `HomeSettlement` | 解析为定居点所有者的氏族领袖和对应定居点。 |
| `Name` | 使用定居点名称延迟缓存本地化民兵名称。 |
| `CanHaveNavalNavigationCapability` | 始终为 `false`，民兵保持为静态定居点队伍。 |
| `CreateMilitiaParty` | 使用源码生成的 ID 创建队伍、设置无导航、初始化文化模板并进入定居点。 |
| `ConvertPartyToMilitiaParty` | 用定居点民兵组件替换已有队伍组件。 |
| `GetDefaultComponentBanner` | 返回 `Settlement.Banner`。 |
| `ClearCachedName` | 使本地化名称缓存失效。 |

## 真实示例

定居点和地图事件代码使用的安全读取路径是定居点反向引用：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = Settlement.CurrentSettlement;
MilitiaPartyComponent militia = settlement?.MilitiaPartyComponent;
MobileParty party = militia?.MobileParty;

if (militia != null && party != null && party.IsActive)
{
    int militiaCount = party.Party.NumberOfAllMembers;
    Settlement home = militia.HomeSettlement;
}
```

`Settlement` 初始化民兵时通过 `CreateMilitiaParty` 创建组件。该工厂内部调用 `EnterSettlementAction.ApplyForParty`，所以 mod 不应把它当成每 tick 的“确保存在”辅助函数。

## 风险与存档边界

- `CreateMilitiaParty` 同时创建队伍、关闭 AI、选择模板、进入定居点并安装反向引用。重复调用会产生重复民兵队伍。
- `Settlement.Culture.MilitiaPartyTemplate` 必须在创建前加载。缺失文化或模板是数据加载问题，组件不会修复。
- 地图事件会读取 `Settlement.MilitiaPartyComponent`，并可能在其 `MobileParty` 上设置 `MapEventSide`。队伍参加事件时不要替换组件。
- 结束时会清空定居点反向引用。持有已销毁队伍的旧组件，可能读到 inactive roster。
- 组件保存定居点关联，而 Agent 和 MapEvent 对象是临时对象。不要通过它保存引擎引用。

## 版本说明

本页依据 v1.4.5 `MilitiaPartyComponent`、`Settlement`、`RebellionsCampaignBehavior` 和地图事件民兵调用点编写。民兵模板、初始化 ID 和事件接入可能随版本变化。

## 导航

- 父级：[Campaign API](../)
- 同级：[PartyComponent](../PartyComponent) · [GarrisonPartyComponent](../GarrisonPartyComponent) · [PatrolPartyComponent](../PatrolPartyComponent)
- 相关：[MobileParty](../MobileParty) · [Settlement](../Settlement) · [CultureObject](../CultureObject) · [EnterSettlementAction](../../campaign-ext/EnterSettlementAction)
