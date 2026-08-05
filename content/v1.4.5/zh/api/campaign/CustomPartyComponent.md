---
title: "CustomPartyComponent"
description: "CustomPartyComponent 是任务和脚本队伍使用的组件，负责显式名称、roster、所有者、移动速度、货物视觉和敌对行为策略。"
---
# CustomPartyComponent

**命名空间:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public class CustomPartyComponent : PartyComponent`  
**基类:** [PartyComponent](../PartyComponent)  
**源码文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/CustomPartyComponent.cs`

## 一句话职责

它为脚本控制的 `MobileParty` 提供显式名称、所有者、home settlement、首领、速度、坐骑视觉、敌对行为策略，以及 party template 或调用方提供的 roster。

## 心智模型

对于不是标准领主、商队、驻军、民兵或匪徒的队伍，任务和 issue 行为会把 `CustomPartyComponent` 作为可控的通用身份组件。工厂记录调用方提供的身份和显示数据，再把位置与 roster 初始化延后到 `MobileParty` 创建回调。它不提供默认 Banner，也不会自动把队伍登记到所有者集合。

它有两种创建数据来源。party-template 重载使用 `PartyTemplateObject` 在某个位置附近初始化；troop-roster 重载则使用显式的成员和俘虏 roster 初始化。接受 leader 的重载会在创建后调用 `AddHeroToPartyAction.Apply`，因此比不接受 leader 的重载具有更强的 roster 副作用。

## 何时使用，何时不要使用

- 任务队伍的身份和 roster 由任务行为控制时，使用这些 custom 工厂。
- 源数据是真实 party template 时使用 `CreateCustomPartyWithPartyTemplate`；行为持有显式 roster 时使用 `CreateCustomPartyWithTroopRoster`。
- 使用 `SetBaseSpeed` 修改速度，让组件同步更新队伍版本号。
- 只有确实要重新分类已有队伍并保留 custom 身份输入时，才使用 `ConvertPartyToCustomParty`。
- 不要把此类型当作商队、领主或驻军的通用替代品。那些具体组件还负责额外事件、集合、定居点反向引用和清理。
- 除非该 Hero 确实应该通过 `AddHeroToPartyAction` 加入队伍，否则不要传入接受 leader 的重载。

## 依赖关系

```text
任务名称/所有者/home + PartyTemplateObject 或 TroopRoster 数据
  -> CustomPartyComponent 工厂
  -> MobileParty.CreateParty / 初始化回调
  -> 显式队伍状态和 roster
  -> 任务跟踪、地图行为和存档重建
```

- 宿主：[MobileParty](../MobileParty) 持有组件和地图队伍状态。
- 输入：[Settlement](../Settlement)、[Clan](../Clan)、[Hero](../Hero)、[PartyTemplateObject](../PartyTemplateObject) 和 [TroopRoster](../TroopRoster) 提供脚本身份与部队。
- 首领副作用：接受 leader 的重载会调用 [AddHeroToPartyAction](../../campaign-ext/AddHeroToPartyAction)。
- 共同契约：[PartyComponent](../PartyComponent) 绑定组件并转发首领变更。
- 任务清理：创建该队伍的任务行为仍负责在剧情结束时跟踪并销毁队伍。

## 状态与操作

| 成员 | 含义与时机 |
|---|---|
| `CustomPartyBaseSpeed` / `BaseSpeed` | 可保存的自定义速度。队伍已经绑定时，setter 会更新绑定队伍的版本号。 |
| `AvoidHostileActions` | 通过基类契约暴露的可保存策略；它不会关闭所有 AI 或战斗参与形式。 |
| `PartyOwner` / `Leader` / `HomeSettlement` | 读取工厂收到的显式所有者、首领和 home 值；按设计其中任何值都可以为 null。 |
| `Name` | 返回显式的 `TextObject`，不会根据所有者或定居点生成。 |
| `CreateCustomPartyWithPartyTemplate` | 创建一个延迟执行模板初始化的队伍；leader 重载还会应用 `AddHeroToPartyAction`。 |
| `CreateCustomPartyWithTroopRoster` | 创建一个延迟执行显式成员和俘虏 roster 初始化的队伍。 |
| `ConvertPartyToCustomParty` | 用显式 custom 身份和移动设置替换已有组件。 |
| `SetBaseSpeed` | 修改可保存速度；组件已绑定时调用 `MobileParty.UpdateVersionNo`。 |
| `GetMountAndHarnessVisualIdsForPartyIcon` | 原样返回调用方提供的坐骑和挽具 ID，不推导阵营视觉。 |
| `GetDefaultComponentBanner` | 返回 null；需要 Banner 时调用方必须提供其他显示回退。 |

## 真实示例

任务 issue 代码会先为脚本队伍使用 dummy roster，再根据自己的目标填充 roster：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Localization;

Settlement settlement = Settlement.CurrentSettlement;
TextObject name = new TextObject("{=quest_party}Quest Party");
MobileParty party = CustomPartyComponent.CreateCustomPartyWithTroopRoster(
    settlement.GatePosition,
    1f,
    settlement,
    name,
    settlement.OwnerClan,
    TroopRoster.CreateDummyTroopRoster(),
    TroopRoster.CreateDummyTroopRoster(),
    Hero.MainHero,
    customPartyBaseSpeed: 4f,
    avoidHostileActions: true);
```

创建任务随后必须按自己的生命周期填充、跟踪、隐藏、移动和销毁队伍。组件只建立队伍契约，不替任务管理剧情状态。

## 风险与存档边界

- 工厂使用源码中的固定任务队伍 ID，设计目标是受控任务流程。不要把它当成没有协调的通用队伍生成器。
- `SetBaseSpeed` 只有在 `MobileParty` 已绑定时才更新队伍版本号；创建前和创建后修改速度属于不同生命周期场景。
- 对脚本队伍而言，null 所有者、home settlement、clan 或 leader 都可能合法，但下游战役代码必须容忍这种形状。不要假定 `PartyOwner` 一定非 null。
- leader 重载会通过操作加入 Hero。如果传入的 Hero 已属于另一支队伍，就会触发正常的队伍成员规则和副作用。
- `GetDefaultComponentBanner` 返回 null，坐骑/挽具 ID 也完全由调用方提供。显示数据缺失会影响地图图标，但不一定是队伍状态错误。
- custom 队伍字段可以保存，但任务仍然负责销毁和语义清理。任务行为缺失时，已保存的任务队伍可能成为孤立队伍。

## 版本说明

本页依据 v1.4.5 `CustomPartyComponent` 以及 `SnareTheWealthyIssueBehavior`、`RivalGangMovingInIssueBehavior`、`SmugglersIssueBehavior` 等任务/issue 调用点编写。工厂 ID 和任务清理约定可能随版本变化。

## 导航

- 父级：[Campaign API](../)
- 同级：[PartyComponent](../PartyComponent) · [CaravanPartyComponent](../CaravanPartyComponent) · [LordPartyComponent](../LordPartyComponent) · [BanditPartyComponent](../BanditPartyComponent)
- 相关：[MobileParty](../MobileParty) · [Settlement](../Settlement) · [TroopRoster](../TroopRoster) · [AddHeroToPartyAction](../../campaign-ext/AddHeroToPartyAction)
