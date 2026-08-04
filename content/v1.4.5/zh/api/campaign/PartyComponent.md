---
title: "PartyComponent"
description: "PartyComponent 是 MobileParty 的抽象类型组件，承载队伍所有者、领袖、驻地、工资和导航能力等队伍类别契约。"
---
# PartyComponent

**命名空间:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class PartyComponent`  
**基类:** 无显式基类  
**源文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/PartyComponent.cs`

## 一句话职责

它是 `MobileParty` 的类型化状态与生命周期边界：具体组件告诉队伍是谁拥有、叫什么、属于哪个据点、由谁领队以及它能否导航或支付工资。它把这些字段与创建、初始化、领袖变化和结束回调连成一条完整的队伍类别契约。

## 心智模型

**组件而不是独立队伍**

`PartyComponent` 不能单独代表地图上的队伍。它通过内部生命周期绑定到一个 [MobileParty](../MobileParty)，并把 `Party`、`PartyOwner`、`Name`、`HomeSettlement`、`Leader`、`Banner`、工资上限和陆海导航能力作为组件契约。`MobileParty.Party` 则是与地图、队伍 roster 和战斗系统交互的 [PartyBase](../PartyBase)。

不同队伍类别继承这个抽象类型，例如 [CaravanPartyComponent](../CaravanPartyComponent)、[LordPartyComponent](../LordPartyComponent)、[GarrisonPartyComponent](../GarrisonPartyComponent) 和 [CustomPartyComponent](../CustomPartyComponent)。它们在创建队伍时提供自己的 owner、名称、驻地和生命周期回调；同一个基类引用因此只说明“这是某种队伍组件”，不能替代具体类型的语义。

**生命周期和变更**

具体工厂通过 `MobileParty.CreateParty(stringId, component)` 把组件放进队伍；组件随后经历创建绑定、初始化和结束回调。`ChangePartyLeader` 会先确认新英雄在成员 roster 中，再调用具体实现的领袖变更钩子；成功改变后才向 [CampaignEvents](../CampaignEvents) 相关的分发链报告队伍领袖变化。

组件计算的工资上限、HomeSettlement、名称和导航能力可能依赖当前 `Campaign`、`Clan`、roster 或具体派生类。它不是一个可以由 Mod 直接替换字段的配置对象。

## 何时使用，何时不要用

- **使用：** 从现有 `MobileParty.PartyComponent` 读取队伍类别共有的 owner、leader、驻地、Banner 或能力，再按具体组件类型读取专有状态。
- **不要使用：** `new PartyComponent()`；它是抽象基类，队伍必须由具体组件和 `MobileParty` 的创建路径建立。
- **不要使用：** 直接改组件的私有/派生类字段来转移所有权、领袖或驻地；应使用具体组件的公开 Action 或转换入口。
- **注意领袖：** `ChangePartyLeader` 要求新英雄已经在 `MemberRoster` 中；否则源码会断言并保持原领袖。

传入 `null` 会清空领袖；如果队伍不在 MapEvent 中，组件还会让队伍进入 Hold 移动模式。只有实际领袖发生变化时才会通过 dispatcher 发出 `OnPartyLeaderChanged`，所以不要把调用本身当作必然的事件通知。

## 依赖关系

- **宿主：** [MobileParty](../MobileParty) 持有组件并通过 `Party` 暴露 [PartyBase](../PartyBase)；[CampaignObjectManager](../CampaignObjectManager) 根据组件重新分类队伍。
- **派生实现：** [CaravanPartyComponent](../CaravanPartyComponent)、[LordPartyComponent](../LordPartyComponent)、[GarrisonPartyComponent](../GarrisonPartyComponent) 和 [CustomPartyComponent](../CustomPartyComponent) 负责具体创建和清理语义。
- **观察与状态：** 领袖变化通过 [CampaignEvents](../CampaignEvents) 的战役分发链传播；所有者、据点和 roster 的改变应使用相应的 Action，而不是改组件引用。

## 关键成员

| 成员 | 读取或调用边界 |
| --- | --- |
| `MobileParty` / `Party` | 返回组件宿主及其 `PartyBase`；它们只有在组件已绑定后才有意义。 |
| `PartyOwner` / `Leader` / `HomeSettlement` | 描述具体队伍类别的身份；允许为 `null` 的返回值必须按派生类语义处理。 |
| `Name` / `Banner` | 用于队伍显示和地图图标；名称缓存由具体组件决定，不能当作持久 ID。 |
| `GetDefaultComponentBanner()` | 由具体组件提供默认 Banner；`MobileParty.Banner` 在没有自定义 Banner 时会先尝试使用它，再回退到地图派系 Banner。结果可以是 `null`。 |
| `ClearCachedName()` | 使派生组件缓存的 `Name` 失效；基类实现为空，所有者或领袖变化时由具体组件决定何时调用。 |
| `AvoidHostileActions` | 表达该队伍的默认敌对行为边界，不是强制 AI 的总开关。 |
| `WagePaymentLimit` / `SetWagePaymentLimit` | 默认上限来自 [PartyWageModel](../PartyWageModel)；基类的设置方法不是通用写入器，具体组件需提供自己的实现。 |
| `CanHaveNavalNavigationCapability` / `CanHaveLandNavigationCapability` | 返回组件和当前 Clan 能力共同决定的导航资格，不会替队伍设置地图位置。 |
| `GetMountAndHarnessVisualIdsForPartyIcon(PartyBase, out string, out string)` | 为地图队伍图标提供坐骑和挽具资源 ID；基类默认输出空字符串，Caravan/Custom 等具体组件可以覆盖它。 |
| `ChangePartyLeader(Hero)` | 在 roster 成员约束通过后调用派生类的领袖变更逻辑并发布变化。 |

## 真实示例

读取玩家当前队伍的组件是安全的现有对象路径。不要从组件读取结果反推它一定有 owner 或 home settlement，因为自定义和临时队伍可以合法返回 `null`。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.CampaignSystem.Settlements;

if (Campaign.Current != null)
{
    MobileParty party = MobileParty.MainParty;
    PartyComponent component = party?.PartyComponent;
    if (component != null)
    {
        PartyBase partyBase = component.Party;
        Hero owner = component.PartyOwner;
        Settlement home = component.HomeSettlement;
        bool canUseLand = component.CanHaveLandNavigationCapability;
    }
}
```

若需要知道专有行为，先检查具体类型再读取其公开成员；例如 `party.CaravanPartyComponent` 只适用于商队队伍。转换队伍类别时使用具体组件的公开转换方法，避免只替换 `_partyComponent` 而遗漏分类、旗帜和队伍生命周期。

## 风险与存档边界

- **绑定时机：** `PartyComponent` 的 `MobileParty` 在创建或初始化时才绑定；在工厂返回前或队伍已 Finish 后读取宿主状态是不安全的。
- **领袖约束：** 新领袖不在 `MemberRoster` 中时，`ChangePartyLeader` 会断言并不改变领袖；不要只设置另一个 Hero 引用。
- **工资设置：** 基类 `SetWagePaymentLimit` 会报告无效用法；不要把它当成所有派生队伍都可调用的通用 setter。
- **分类一致性：** 直接替换组件可能绕过 `CampaignObjectManager.BeforePartyComponentChanged`/`AfterPartyComponentChanged`，导致队伍仍出现在旧分类中。
- **存档与清理：** 具体派生类负责把据点引用、owner、缓存和回调在结束时清理。直接构造或持久化抽象组件可能在读档后留下孤立队伍。

## 版本注记

本页以 v1.4.5 `PartyComponent.cs`、`MobileParty.cs` 和具体队伍组件为准。跨版本使用时重新确认导航能力、工资模型和 `MobileParty` 的组件属性；不要复制只适用于某个派生组件的转换假设。

## 导航

- ↑ 父级：[Campaign API](../)
- ↔ 同级：[MobileParty](../MobileParty) · [PartyBase](../PartyBase) · [CampaignObjectManager](../CampaignObjectManager) · [CampaignEvents](../CampaignEvents)
- 具体组件：[CaravanPartyComponent](../CaravanPartyComponent) · [LordPartyComponent](../LordPartyComponent) · [GarrisonPartyComponent](../GarrisonPartyComponent) · [CustomPartyComponent](../CustomPartyComponent)
