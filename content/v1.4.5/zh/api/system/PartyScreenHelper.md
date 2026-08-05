---
title: "PartyScreenHelper"
description: "v1.4.5 中负责创建部队、俘虏、战利品、赎金、任务和家族部队界面的战役辅助类。"
---
# PartyScreenHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class PartyScreenHelper`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/PartyScreenHelper.cs`

## 职责

`PartyScreenHelper` 是部队和俘虏界面的战役入口层。它创建 [PartyState](../../campaign/PartyState)，用 roster、转移规则、容量和回调配置 [PartyScreenLogic](../../campaign/PartyScreenLogic)，然后通过 [GameStateManager](../../core-extra/GameStateManager) 压入状态。它不是 party 模型，也不会独立完成所有转移；界面关闭时由逻辑和完成处理器决定哪些变化真正应用。

## 心智模型

每个界面入口都在组装一次有状态的转移会话：

```text
party/roster 上下文 -> PartyScreenLogicInitializationData -> PartyState -> GameStateManager.PushState
```

`PartyScreenMode` 标记普通、战利品、赎金、俘虏管理、部队管理或任务部队管理流程。辅助类会绑定特定模式需要的转移委托和完成处理器。`CloseScreen` 在非取消关闭时调用 `PartyScreenLogic.DoneLogic`，随后执行 `OnPartyScreenClosed`，清空逻辑并弹出状态。

部分完成处理器明确带有副作用：默认处理器会处理释放和带走的俘虏；驻军和家族部队处理器可能创建 party、移动英雄、转移船只或销毁空 party。因此应把它视为带有战役副作用的 UI 工作流边界，而不是只读便利类。

## 何时使用与何时不要使用

- **适合使用：** 调用方已经拥有真实的 `MobileParty`、`PartyBase`、`TroopRoster`、转移委托、容量和关闭回调。
- **自定义选择流程：** 需要自定义转移谓词和按钮条件时使用 `OpenScreenWithCondition` 或 `OpenScreenAsQuest`，并传入符合源码委托签名的回调。
- **不要实例化：** 这是静态状态工厂。
- **不要脱离上下文调用模式入口：** 赎金、捐献、驻军、定居点和家族 party 入口会读取当前 settlement、主 party、clan 或 hero 状态。
- **不要假定关闭没有副作用：** `DefaultDoneHandler`、俘虏处理器和家族 party 处理器都可能在界面返回后派发 action、改变 party 或移动角色。

## 公开入口

### 部队界面模式

```csharp
public enum PartyScreenMode
{
    Normal,
    Shared,
    Loot,
    Ransom,
    PrisonerManage,
    TroopsManage,
    QuestTroopManage
}
```

模式值保存在 `PartyState` 中，并由 `PartyScreenLogic` 消费。它本身不是权限开关；能否转移仍由 transfer state 和委托决定。

### 活动状态与关闭

```csharp
public static PartyState GetActivePartyState()
public static void CloseScreen(bool isForced, bool fromCancel = false)
```

`GetActivePartyState` 读取 `GameStateManager.Current.ActiveState`。活动状态不是 `PartyState` 时，源码会断言并返回 `null`。`CloseScreen` 找到活动逻辑，在非取消时执行 `DoneLogic(isForced)`，然后调用 `OnPartyScreenClosed(fromCancel)`，清空 `PartyScreenLogic` 并弹出状态。

## 标准和专用入口

| 入口 | 源码定义的工作流 |
| --- | --- |
| `OpenScreenAsNormal`、`OpenScreenAsCheat` | 创建主 party 界面；作弊模式启用时，普通入口转到包含有效 encyclopedia troop 的作弊 roster。 |
| `OpenScreenAsLoot`、`OpenScreenAsRansom` | 配置战利品或赎金转移状态及其完成处理器。 |
| `OpenScreenAsManageTroops`、`OpenScreenAsManageTroopsAndPrisoners`、`OpenScreenAsReceiveTroops` | 围绕真实 mobile party 或传入 roster 创建部队/俘虏转移界面。 |
| `OpenScreenAsDonateTroops`、`OpenScreenAsDonateGarrisonWithCurrentSettlement`、`OpenScreenAsDonatePrisoners`、`OpenScreenAsManagePrisoners` | 创建捐献和驻军流程，加入容量检查与 settlement 回调。 |
| `OpenScreenWithCondition`、`OpenScreenForManagingAlley`、`OpenScreenAsQuest` | 接收自定义转移谓词、按钮条件、回调、容量、roster 和模式。 |
| `OpenScreenWithDummyRoster`、`OpenScreenWithDummyRosterWithMainParty`、`OpenScreenAsCreateClanPartyForHero` | 创建受控 roster 选择流程，包括源码中的家族 party 创建路径。 |

所有公开入口都会新建并压入 `PartyState`，不会复用当前状态。通用入口虽然是 mod 扩展面，但回调仍然运行在原版 `PartyScreenLogic` 生命周期中。

## 真实调用点

town visit 战役行为会从当前 settlement 上下文打开真实的驻军管理界面：

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;

PartyScreenHelper.OpenScreenAsManageTroops(
    currentSettlement.Town.GarrisonParty);
```

同一调用族还会使用 `OpenScreenAsDonatePrisoners` 和 `OpenScreenAsDonateGarrisonWithCurrentSettlement` 处理 settlement 侧转移。这些入口会读取 `Hero.MainHero.CurrentSettlement`，必要时创建 garrison，并设置对应的 transfer state。

遭遇和商队流程会把真实 roster 传给战利品界面：

```csharp
PartyScreenHelper.OpenScreenAsLoot(
    TroopRoster.CreateDummyTroopRoster(),
    troopRoster,
    encounteredMobileParty.Name,
    troopRoster.TotalManCount);
```

任务和遭遇行为在需要自有转移谓词、完成回调时使用通用条件入口：

```csharp
PartyScreenHelper.OpenScreenWithCondition(
    IsTroopTransferable,
    DoneButtonCondition,
    OnDoneClicked,
    null,
    PartyScreenLogic.TransferState.Transferable,
    PartyScreenLogic.TransferState.NotTransferable,
    base.QuestGiver.Name,
    requestedCount,
    showProgressBar: true,
    isDonating: false,
    screenMode: PartyScreenHelper.PartyScreenMode.PrisonerManage);
```

上面的回调名称属于拥有该流程的行为类；关键契约是由行为提供任务规则，而不是期待 `PartyScreenHelper` 自动推断。

## 依赖关系

- [PartyState](../../campaign/PartyState) 是被压入的状态，保存 `PartyScreenLogic`、`IsDonating` 和 `PartyScreenMode`。
- [PartyScreenLogic](../../campaign/PartyScreenLogic) 负责 roster 转移校验、完成按钮条件和完成处理器使用的转移历史。
- [GameStateManager](../../core-extra/GameStateManager) 负责创建状态和状态栈切换；`PartyScreenHelper` 只是请求这些生命周期操作。
- [TroopRoster](../../campaign/TroopRoster)、[FlattenedTroopRoster](../../campaign/FlattenedTroopRoster)、[PartyBase](../../campaign/PartyBase) 和 [MobileParty](../../campaign/MobileParty) 提供真实 party 输入。
- 俘虏带走/释放、进入 settlement、金币转移和 party 销毁等 campaign action 由完成处理器或拥有流程的行为派发。

## 风险与版本边界

- `OpenScreenAsNormal` 受作弊模式影响：启用 `Game.Current.CheatMode` 时会创建包含有效 encyclopedia troop 的 roster，否则走普通主 party 流程。
- `OpenScreenAsRansom` 会克隆主 party 的成员和俘虏 roster，并设置 `DoNotApplyGoldTransactions`；它不等同于普通俘虏转移。
- `OpenScreenAsManagePlayerClanPartyClosed` 在成员 roster 为空时可能转移船只并销毁左侧 party，不应当当作通用无操作关闭回调。
- 捐献和驻军入口读取 `Hero.MainHero.CurrentSettlement`，并可能创建 garrison party。脱离 settlement 上下文调用会在状态可用前失败。
- `CloseScreen` 的 `fromCancel` 会改变是否执行 `DoneLogic`，`isForced` 也会改变关闭判断；调用方必须保留原界面的关闭语义。
- 通用入口只在 v1.4.5 签名允许的位置接受可空 roster 和回调。部分路径会自动填充 dummy roster，但不会替调用方验证自定义委托行为。

## 版本说明

本文按 v1.4.5 `PartyScreenHelper.cs` 编写。该辅助类编排临时部队界面状态；roster 所有权、action 派发、存档和战役事件语义仍由关联逻辑、roster、action 与行为类负责。

## 导航

- [↑ API system 索引](../)
- [同组：InventoryScreenHelper](../InventoryScreenHelper)
- [相关：PartyState](../../campaign/PartyState)
- [相关：PartyScreenLogic](../../campaign/PartyScreenLogic)
- [相关：GameStateManager](../../core-extra/GameStateManager)
- [English page](../../../../en/api/system/PartyScreenHelper)
