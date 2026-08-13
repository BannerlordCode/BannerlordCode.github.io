---
title: "ChangeVillageStateAction"
description: "切换村庄（Settlement 下的 Village）在 Normal / BeingRaided / Looted 等状态间转换的战役 Action：统一触发 OnVillageStateChanged 并刷新据点 Party 的等级掩码，mod 应调用 Apply* 而非直接改 VillageState 字段。"
---
# ChangeVillageStateAction

**Namespace:** TaleWorlds.CampaignSystem.Actions  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public static class ChangeVillageStateAction`  
**Base:** —（静态类，无基类）  
**源文件路径：** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeVillageStateAction.cs`

## 概述

`ChangeVillageStateAction` 是战役层（Campaign）的一组**静态动作（Action）**，专门负责把某个村庄（`Settlement.Village`，类型 `Village`）在五种状态之间转换：`Normal`（和平生产）、`BeingRaided`（正在被劫掠）、`ForcedForVolunteers`（被强征志愿兵）、`ForcedForSupplies`（被强征补给）、`Looted`（已被洗劫、废弃）。

游戏内所有会改变村庄状态的路径——地图劫掠事件、强征补给/志愿兵事件、王国战争结束、村民贸易归队、据点健康恢复——都通过这里的 `Apply*` 方法落地，而不是去直接赋值 `Village.VillageState`。原因见下方的「心智模型」与「风险」段。

## 一句话职责

把“某村庄现在处于哪种劫掠/生产状态”这件事，统一通过一个入口切换，并连带发出状态变更聚合事件、刷新该据点的等级掩码，让地图 AI、任务、日志和菜单都能正确响应。

## 心智模型

把 `ChangeVillageStateAction` 想成**村庄状态的“唯一切换开关”**：它位于战役层，不处理战斗场景（Mission），自身也不持有任何持久状态。

- **它改的是什么**：村庄状态保存在 `Village.VillageState`（类型 `Village.VillageStates`，是 `Village` 的嵌套枚举）。该字段随存档持久化，它决定了村民是否逃散、生产是否暂停、地图上村庄图标如何显示。
- **为什么必须调用 `Apply*` 而不是赋值字段**：引擎里 `Village.VillageState` 的 setter 在状态改变时确实会发几个“单状态”事件（`OnVillageBecomeNormal` / `OnVillageBeingRaided` / `OnVillageLooted`），但它**不会**发送聚合事件 `OnVillageStateChanged`，也**不会**调用 `Settlement.Party.SetLevelMaskIsDirty()`。`ChangeVillageStateAction.Apply*` 在底层也是通过 `village.VillageState = newState` 触发那些单状态事件，但额外做了两件事：
  1. 调用 `CampaignEventDispatcher.Instance.OnVillageStateChanged(village, oldState, newState, raiderParty)`，把**旧状态、新状态、劫掠方**一起广播出去——`VillageHostileActionCampaignBehavior`、`CommentOnChangeVillageStateBehavior` 等系统正是监听这个聚合事件来更新敌对度、生成日志和对话评论的。
  2. 调用 `village.Settlement.Party.SetLevelMaskIsDirty()`，让据点所属 `PartyBase` 的等级/可见性掩码在下一次 tick 重新计算，否则地图和单位生成可能基于过期的“村庄是否可掠夺/可交战”判断。
  直接写 `village.VillageState = ...` 会漏掉聚合事件和掩码刷新，导致行为层与地图显示和实际状态不一致。
- **Apply / ApplyInternal 契约**：公开的 `ApplyBySettingToXxx(...)` 只是语义化的薄包装（区分“恢复正常 / 被劫掠 / 被强征补给 / 被强征志愿兵 / 被洗劫”，并提供不同的 `raider` 参数），真正干活的是私有方法 `ApplyInternal(Village, VillageStates, MobileParty)`。它先比较 `newState != village.VillageState`，**相等就什么都不做**（幂等），不等才赋值、发事件、刷掩码。因此重复调用同一状态是安全的。
- **所在层**：属于 `TaleWorlds.CampaignSystem.Actions` 命名空间下的静态工具类，应在战役运行期（`Campaign.Current != null`）调用，通常在地图事件结算或某个 `CampaignBehavior` 的每日/每周 tick 里。

## 何时用 / 何时不要用

**用：** 当你的 mod 因为一次事件、一项政策或一段剧情，需要让某个村庄进入或退出被劫掠/被强征/被洗劫状态时，调用对应的 `ApplyBySettingToXxx`：

```csharp
// 正确：通过 Action 切换，聚合事件与据点掩码都会更新
ChangeVillageStateAction.ApplyBySettingToLooted(settlement, raiderParty);
```

**不要用：**

- 不要直接写 `settlement.Village.VillageState = Village.VillageStates.Looted;`。这会让聚合事件 `OnVillageStateChanged` 与 `SetLevelMaskIsDirty` 不被触发，后续行为层会读到旧判断（见下方「风险」段）。
- 不要在 `Mission`（战斗场景）里调用它——它是战役地图对象的状态开关，不服务于场景内的临时单位。
- 不要把 `Apply*` 当成“查询”或“设置村庄其它属性”的入口；它只管 `VillageState` 这一个字段。想改繁荣度、忠诚、炉火（hearth）应走各自的 Model / Action。

## 成员说明

所有公开成员都是 `static`，无需实例化，也**不能** `new ChangeVillageStateAction()`。

### 嵌套枚举：`Village.VillageStates`（定义于 `Village`）

村庄状态机的五个取值，挂在 `Village` 类型之下：

| 值 | 含义 | 触发的主要语义 |
|----|------|----------------|
| `Normal` | 和平，正常生产 | 村民回归、生产恢复；`IsDeserted == false` |
| `BeingRaided` | 正在被敌方部队劫掠 | 地图显示被劫掠；触发 `OnVillageBeingRaided` |
| `ForcedForVolunteers` | 被强制征召志愿兵 | 暂不发单状态事件，仅改状态 |
| `ForcedForSupplies` | 被强制征收补给 | 暂不发单状态事件，仅改状态 |
| `Looted` | 已被洗劫、实质废弃 | `IsDeserted == true`；触发 `OnVillageLooted` |

> 注意：`ForcedForVolunteers` 与 `ForcedForSupplies` 在 `Village.VillageState` 的 setter 里是空分支（不发单状态事件），所以只有通过 `Apply*` 才能在被强征结束时正确地把状态归位到 `Normal` 并广播 `OnVillageStateChanged`。

#### `public static void ApplyBySettingToNormal(Settlement settlement)`

**签名：**
```csharp
public static void ApplyBySettingToNormal(Settlement settlement)
```
**调用时机：** 一次劫掠、强征或战斗结束后，村庄应恢复和平生产时调用。`raiderParty` 传入 `null`。
**副作用：** 仅当旧状态不等于 `Normal` 时，把 `VillageState` 设为 `Normal`，广播 `OnVillageStateChanged(village, oldState, Normal, null)`，并刷新据点 Party 掩码。引擎里 `IncreaseSettlementHealthAction`、`KingdomManager`、`VillagerCampaignBehavior` 与 `Village.cs` 的自愈逻辑都用它把村庄复位。

#### `public static void ApplyBySettingToBeingRaided(Settlement settlement, MobileParty raider)`

**签名：**
```csharp
public static void ApplyBySettingToBeingRaided(Settlement settlement, MobileParty raider)
```
**调用时机：** 敌方部队开始对村庄实施劫掠时调用，`raider` 是发起劫掠的 `MobileParty`（用于敌对度结算与日志）。
**副作用：** 把状态置为 `BeingRaided`，广播 `OnVillageStateChanged(..., BeingRaided, raider)` 并刷新掩码。地图劫掠事件 `RaidEventComponent` 在事件进行中调用它。

#### `public static void ApplyBySettingToBeingForcedForSupplies(Settlement settlement, MobileParty raider)`

**签名：**
```csharp
public static void ApplyBySettingToBeingForcedForSupplies(Settlement settlement, MobileParty raider)
```
**调用时机：** 部队强制向村庄征收补给时调用。
**副作用：** 把状态置为 `ForcedForSupplies`，广播 `OnVillageStateChanged(..., ForcedForSupplies, raider)` 并刷新掩码。`ForceSuppliesEventComponent` 在强征事件开始时调用。

#### `public static void ApplyBySettingToBeingForcedForVolunteers(Settlement settlement, MobileParty raider)`

**签名：**
```csharp
public static void ApplyBySettingToBeingForcedForVolunteers(Settlement settlement, MobileParty raider)
```
**调用时机：** 部队强制向村庄征召志愿兵时调用。
**副作用：** 把状态置为 `ForcedForVolunteers`，广播 `OnVillageStateChanged(..., ForcedForVolunteers, raider)` 并刷新掩码。`ForceVolunteersEventComponent` 在强征事件开始时调用。

#### `public static void ApplyBySettingToLooted(Settlement settlement, MobileParty raider)`

**签名：**
```csharp
public static void ApplyBySettingToLooted(Settlement settlement, MobileParty raider)
```
**调用时机：** 劫掠完成、村庄被洗劫废弃时调用。
**副作用：** 把状态置为 `Looted`（此时 `Village.IsDeserted == true`），广播 `OnVillageStateChanged(..., Looted, raider)` 并刷新掩码。`RaidEventComponent` 在劫掠成功结算时调用。

#### 私有 `ApplyInternal(Village, Village.VillageStates, MobileParty)`（实现细节）

公开 `Apply*` 全部转发到这里。它负责“旧状态 == 新状态则跳过”的幂等判断、字段赋值、事件广播与掩码刷新。mod 不应直接调用它（它是 `private`）。

## 最小真实示例

### 示例 1：在一次劫掠开始时把村庄标记为被劫掠

```csharp
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

// raider 是当前正在劫掠村庄的敌方部队
Settlement target = MobileParty.MainParty.CurrentSettlement;
if (target != null && target.IsVillage)
{
    ChangeVillageStateAction.ApplyBySettingToBeingRaided(target, MobileParty.MainParty);
}
```

### 示例 2：村庄应恢复生产时复位到 Normal

```csharp
using TaleWorlds.CampaignSystem.Actions;

Settlement village = Settlement.CurrentSettlement; // 或遍历 Campaign.Current.Settlements
if (village != null && village.IsVillage
    && village.Village.VillageState != Village.VillageStates.Normal)
{
    ChangeVillageStateAction.ApplyBySettingToNormal(village);
}
```

> 两个示例都走 `Apply*` 而非 `village.VillageState = ...`，以保证 `OnVillageStateChanged` 与据点掩码刷新都被触发。

## 依赖图

`ChangeVillageStateAction` 自身不持有状态，它把“村庄状态变更”这件事连接起上游数据、事件派发与下游行为：

- 上游类型：[`Village`](../../campaign/Village/) 持有 `VillageState` 字段与 `VillageStates` 枚举；[`Settlement`](../../campaign/Settlement/) 拥有 `Village` 与 `Party`（掩码刷新的目标）。
- 入参类型：[`MobileParty`](../../campaign/MobileParty/) 是 `raider` 参数，代表发起劫掠/强征的部队。
- 事件派发：[`CampaignEventDispatcher`](../CampaignEventDispatcher/) 的 `OnVillageStateChanged` 由本 Action 触发，是下游系统感知状态变化的总入口。
- 下游行为：[`VillageHostileActionCampaignBehavior`](../VillageHostileActionCampaignBehavior/) 与 [`CommentOnChangeVillageStateBehavior`](../CommentOnChangeVillageStateBehavior/) 监听 `OnVillageStateChanged`，分别更新敌对度与生成对话/日志评论。
- 调用方（同为 Action / 事件组件）：[`IncreaseSettlementHealthAction`](../IncreaseSettlementHealthAction/)、[`RaidEventComponent`](../RaidEventComponent/) 以及 `KingdomManager`、`VillagerCampaignBehavior`、`ForceSuppliesEventComponent`、`ForceVolunteersEventComponent` 都通过本 Action 切换状态。
- 存档点：`VillageState` 经 `SaveableField` 持久化；状态变更会在下一次存档落盘，并被 `SetLevelMaskIsDirty` 影响的据点 Party 掩码在读档后重算。

## 风险

1. **在战役运行期之外调用**：`Apply*` 内部会访问 `CampaignEventDispatcher.Instance` 与 `Settlement.Party`。在 `Campaign.Current == null` 或加载/菜单阶段调用，可能拿到空派发器或无效据点，导致崩溃或事件无人接收。务必确认处于战役地图运行期。
2. **直接字段赋值绕过 Action**：写 `village.VillageState = Village.VillageStates.Looted` 会触发 setter 里的单状态事件（`OnVillageLooted` 等），但**不会**发出聚合的 `OnVillageStateChanged`，也**不会**调用 `SetLevelMaskIsDirty()`。结果：监听聚合事件的行为层（敌对度、评论、任务进度）完全收不到这次变更，且据点 Party 的等级/可见性掩码过期，地图 AI 与单位生成基于旧判断运行——这是最常见的“状态改了但世界没反应”坏档来源。
3. **无效状态迁移**：`ApplyInternal` 对 `newState == oldState` 是幂等跳过的，但不会改变其它联动量。例如把村庄直接从 `Normal` 设为 `Looted` 不会自动扣繁荣度或触发被劫掠期间的产出损失——那些效果由监听 `OnVillageStateChanged` 的 Behavior 在状态变更时计算。若你跳过了中间状态（如不经 `BeingRaided` 直接 `Looted`），依赖中间状态的结算逻辑可能不完整。
4. **raider 引用失效**：`OnVillageStateChanged` 会把 `raiderParty` 传给下游。若传入一个已解散/已销毁的 `MobileParty`，下游在结算敌对度或写日志时可能访问空或失效引用。确保 `raider` 在调用时仍然有效；恢复正常（`ApplyBySettingToNormal`）时显式传 `null`。
5. **存档与重算交互**：`VillageState` 随存档写入；`SetLevelMaskIsDirty` 只标记“下次重算”，不会立即重算 Party 掩码。在单次 tick 内对同一村庄反复切换状态是安全的（幂等），但不要在读档/初始化早期依赖掩码已刷新的结果。

## 导航

- [↑ 父级：campaign-ext 索引](../)
- [↔ 同级：ChangeClanInfluenceAction](../ChangeClanInfluenceAction/) · [ChangeGovernorAction](../ChangeGovernorAction/) · [ClaimSettlementAction](../ClaimSettlementAction/) · [IncreaseSettlementHealthAction](../IncreaseSettlementHealthAction/)
- 相关类：[Village](../../campaign/Village/) · [Settlement](../../campaign/Settlement/) · [MobileParty](../../campaign/MobileParty/) · [CampaignEventDispatcher](../CampaignEventDispatcher/)
- 架构约束：[文档契约](../../../architecture/doc-contract/) · [崩溃与存档边界](../../../architecture/crash-boundaries/)
