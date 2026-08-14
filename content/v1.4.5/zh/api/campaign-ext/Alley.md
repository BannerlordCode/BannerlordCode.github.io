---
title: "Alley"
description: "城镇里的巷子/藏身处（如盗贼公会）：记录归属英雄、占领状态与名称标识，是任务与议题接入城市地下势力的主要入口。"
---
# Alley

**Namespace:** TaleWorlds.CampaignSystem.Settlements  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class Alley : SettlementArea`  
**Base:** `SettlementArea`  
**File:** `TaleWorlds.CampaignSystem/Settlements/Alley.cs`

## 概述

`Alley` 是城镇（[Settlement](../../campaign/Settlement/)）内部的**一条可被势力占据的巷道/藏身处**——最典型的例子就是盗贼公会（Thieves' Guild）。每个城镇都持有若干 `Alley`，它们构成城市里“非官方”的势力据点：可以由某个帮派首领（[Hero](../../campaign/Hero/)）占据，也可以被玩家占领来经营私兵、收税或承接相关任务。

和一个 `Settlement` 本身不同，`Alley` 不处理经济、繁荣度或治理；它只关心三件事：它属于哪个城镇、当前由谁占有、以及占有状态。模组最常接触 `Alley` 的场合是：编写涉及盗贼公会/私兵的议题（issue）、任务（quest），或者在家族菜单里读取/转移玩家占领的巷道。

## 心智模型

把 `Alley` 想成**“挂在某个城镇名下的一小块地盘租约”**，而不是可渲染的场景对象：

- 它由内部的 `IAlleyCampaignBehavior`（战役行为）在开局阶段创建并加入对应 `Settlement.Alleys`；模组通常**不要自己 `new Alley()`**，否则这条巷道不会被行为正确接管，也不会进入存档与每日结算。
- 归属关系通过 `Owner` 体现，而 `Owner` 同时把这条巷道记进自己的 `Hero.OwnedAlleys`。拿走归属、转让巷道，都要经过 `SetOwner`，不要直接写 `_owner` 私有字段。
- `State` 是从 `Owner` 推导出来的只读快照：当 `Owner == Hero.MainHero` 时为 `OccupiedByPlayer`（玩家占领），否则为 `OccupiedByGangLeader`（帮派占据）；没有主人时为 `Empty`。
- 它处在 **Campaign 层**，不是 Mission 层。进入战斗或城镇场景不会“新建”一个 Alley；跨场景需要持久的状态都写在 `Alley`/`Hero`/`Settlement` 上，由存档系统序列化。

## 如何获取 Alley

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.Settlements;

// 1) 从当前所在的城镇拿到它名下的全部巷道
Settlement currentTown = Settlement.CurrentSettlement;
foreach (Alley alley in currentTown.Alleys)
{
    // 读取 State、Owner、Name、Tag ...
}

// 2) 反过来：从某个英雄拿到它占据的全部巷道
foreach (Alley owned in Hero.MainHero.OwnedAlleys)
{
    Settlement home = owned.Settlement;
}

// 3) 拿到驱动巷道系统的战役行为（转让成员、放弃巷道等）
IAlleyCampaignBehavior alleyBehavior = Campaign.Current.GetCampaignBehavior<IAlleyCampaignBehavior>();
Hero leader = alleyBehavior.GetAssignedClanMemberOfAlley(currentTown.Alleys[0]);
```

不要自己 `new Alley(...)`：构造函数只调用 `Initialize` 写入 `_settlement/_name/_tag`，不会把它登记进 `Settlement.Alleys`，也不会触发行为初始化。始终从 `Settlement.Alleys` 或 `Hero.OwnedAlleys` 取得已存在的实例。

## 主要属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `Settlement` | `Settlement` | 这条巷道所属的城镇（只读）。通过它可拿到同城的 `Town` 组件与治理数据。 |
| `Name` | `TextObject` | 显示名称（只读），如“盗贼公会”。 |
| `Owner` | `Hero` | 当前占有者（只读）。可能是帮派首领或 `Hero.MainHero`；没有主人时为 `null`。 |
| `Tag` | `string` | 该城镇内唯一标识这条巷道的标签（只读）。 |
| `State` | `Alley.AreaState` | 占据状态（只读，`get; private set;`）。由 `SetOwner` 与加载流程推导写入。 |

### 嵌套枚举 `Alley.AreaState`

| 值 | 含义 |
|----|------|
| `Empty` | 无人占据（已放弃或尚未分配）。 |
| `OccupiedByGangLeader` | 被某个非玩家的帮派首领占据。 |
| `OccupiedByPlayer` | 被玩家（`Hero.MainHero`）占据。 |

## 主要方法

### `public void SetOwner(Hero newOwner)`

变更这条巷道的归属英雄，并一次性维护好所有关联状态：

- **副作用一**：若旧 `Owner` 不为 `null`，从旧主人的 `Hero.OwnedAlleys` 移除本巷道；若新 `Owner` 不为 `null`，把本巷道加入新主人的 `Hero.OwnedAlleys`。
- **副作用二**：根据新主人重算 `State`——`newOwner == Hero.MainHero` 时为 `OccupiedByPlayer`，否则为 `OccupiedByGangLeader`；传入 `null` 时置为 `Empty`。
- **副作用三**：广播 `CampaignEventDispatcher.Instance.OnAlleyOwnerChanged(this, newOwner, oldOwner)`，让日志、通知与其它系统同步。

**何时调用**：当你确实需要把一条巷道转交给另一位英雄（例如议题完成后转让给玩家、或玩家放弃后被首领接管）。不要用字段赋值或 `Initialize` 来“伪装”归属，否则 `OwnedAlleys` 集合与 `State` 会与实际不一致，后续结算与日志都会错乱。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

Settlement town = Settlement.CurrentSettlement;
Alley alley = town.Alleys[0];
Hero newLeader = Hero.MainHero;

// 转让归属：自动维护 OwnedAlleys、State 并广播事件
if (alley.Owner != newLeader)
{
    alley.SetOwner(newLeader);
}
```

### `public Alley(Settlement settlement, string tag, TextObject name)`

公共构造函数，内部仅调用 `Initialize(settlement, tag, name)`。日常模组代码**几乎不该使用**它——见上文“如何获取 Alley”，应始终从 `Settlement.Alleys` 取得运行时已注册的实例。只有在你明确要扩展底层存档/生成逻辑、并且会自行把它加入 `Settlement.Alleys` 与 `Hero.OwnedAlleys` 时才考虑。

### `public void Initialize(Settlement settlement, string tag, TextObject name)`

写入 `_settlement`、`_name`、`_tag` 三个字段。它是构造函数与加载流程共用的初始化入口；运行时你通常不需要直接调用，因为拿到的 `Alley` 实例已经初始化完毕。`SetOwner` 才是改变其“活状态”的正确方法。

## 典型用法示例

### 示例 1：打印当前城镇所有巷道及其占用情况

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

Settlement town = Settlement.CurrentSettlement;
if (town != null)
{
    foreach (Alley alley in town.Alleys)
    {
        string who = alley.Owner == null ? "无人" : alley.Owner.Name.ToString();
        // alley.State 为 Empty / OccupiedByGangLeader / OccupiedByPlayer
        if (alley.State == Alley.AreaState.OccupiedByPlayer)
        {
            // 这是玩家占据的巷道，可以在家族菜单里经营
        }
    }
}
```

### 示例 2：把玩家已占据的巷道交给一名家族同伴统率

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.Settlements;

IAlleyCampaignBehavior alleyBehavior = Campaign.Current.GetCampaignBehavior<IAlleyCampaignBehavior>();
foreach (Alley alley in Hero.MainHero.OwnedAlleys)
{
    Hero companion = alleyBehavior.GetAssignedClanMemberOfAlley(alley);
    if (companion == null)
    {
        // 还未指派统率者：通过行为接口挑选/更换成员
        alleyBehavior.ChangeAlleyMember(alley, Hero.MainHero.Companions[0]);
    }
}
```

## 跨版本提示

- **v1.3.15 与 v1.4.5 的公共 API 一致**：`Settlement`/`Name`/`Owner`/`Tag`/`State` 五个属性、`SetOwner`、`Initialize`、构造函数以及嵌套枚举 `AreaState` 都相同；`SetOwner` 内部对“玩家 vs 帮派”的判定两版等价（`Owner == Hero.MainHero → OccupiedByPlayer`，否则 `OccupiedByGangLeader`）。
- 1.4.5 的 `Alley.cs` 把 `AreaState`、`SettlementArea` 写成了文件级 `namespace TaleWorlds.CampaignSystem.Settlements;` 的普通类型；1.3.15 的反编译文件把它们包进 `Alley` 类内部，但公开形态与命名完全一样，跨版本 mod 无需做分支处理。

## 依赖图

`Alley` 自身只持有归属与状态，真正的创建、占领结算与每日行为由上层系统驱动：

- 上游容器：[Settlement](../../campaign/Settlement/) 持有 `Alleys`（`List<Alley>`），[Town](../../campaign/Town/) 提供城镇层面的治理上下文；归属英雄来自 [Hero](../../campaign/Hero/)，并写回 `Hero.OwnedAlleys`。
- 驱动行为：`IAlleyCampaignBehavior`（内部战役行为，经 `Campaign.Current.GetCampaignBehavior<IAlleyCampaignBehavior>()` 获取）负责创建、转让成员、放弃巷道与攻击判定；其模型在 [AlleyModel](../AlleyModel/)（[AlleyMemberAvailabilityDetail](../AlleyMemberAvailabilityDetail/) 描述成员可用度）。
- UI 入口：[AlleyHelper](../AlleyHelper/) 封装“管理巷道”的组屏与挑选同伴询问。
- 类型基础：[SettlementArea](../SettlementArea/) 定义 `Settlement/Name/Tag/Owner` 抽象契约；状态枚举见 [AreaState](../AreaState/)。
- 变更事件：`CampaignEventDispatcher.OnAlleyOwnerChanged` 在 `SetOwner` 时广播，订阅它可在归属变化后刷新你的自定义逻辑。
- 契约与边界：参见 [文档契约](../../../architecture/doc-contract/) 与 [崩溃与存档边界](../../../architecture/crash-boundaries/)。

## 风险

1. **不要 `new Alley()`**：构造函数只写字段，不会把它登记进 `Settlement.Alleys` 或 `Hero.OwnedAlleys`，也不会触发行为初始化；这类“孤儿”巷道不会进入存档与每日结算，且无法被其它系统发现。
2. **不要直接改私有字段**：直接写 `_owner` 会让 `Hero.OwnedAlleys` 与 `State` 与实际脱节，`SetOwner` 才是维护三者一致并广播事件的唯一入口。
3. **`Owner` 可能为 `null`**：`State == Empty` 时 `Owner` 为 `null`，访问 `Owner.Name` 或 `Owner.OwnedAlleys` 前务必判空，否则在加载早期或刚放弃的巷道上会崩溃。
4. **加载期再登记**：`AfterLoad` 会在读档后把 `Owner != null` 的巷道重新加入 `Hero.OwnedAlleys` 并修正 `State`；若你的 mod 在 `OnGameLoaded` 早期手动改过归属，要等加载完成后再读取，避免读到未修正的中间态。
5. **旧版本兼容**：`AfterLoad` 对 `MBSaveLoad.LastLoadedGameVersion < v1.2.0` 且主人已死亡的巷道会调用 `SetOwner(null)` 清空归属；跨大版本读档时，不要假设一条旧档里的巷道仍由原主人占据。

## 参见

- [↑ 父级：campaign-ext 模块](../)
- [↔ 同级：SettlementArea](../SettlementArea/) · [AlleyModel](../AlleyModel/) · [AlleyHelper](../AlleyHelper/) · [AreaState](../AreaState/)
- [相关：Settlement](../../campaign/Settlement/) · [Town](../../campaign/Town/) · [Hero](../../campaign/Hero/) · [Clan](../../campaign/Clan/)
- [架构：文档契约](../../../architecture/doc-contract/) · [崩溃与存档边界](../../../architecture/crash-boundaries/)
